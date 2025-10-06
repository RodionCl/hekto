import { PARAMS_QUERY } from "@/constants/queryParams";
import { Product } from "@/interfaces/Product";
import { PaginatedResult, ProductFilters } from "@/interfaces/FetchProduct";
import { environment } from "@/environment";

export function buildQueryParams(filters?: ProductFilters): string {
  const params = new URLSearchParams();

  filters?.brands?.forEach((brand) => {
    params.append(PARAMS_QUERY.brands, brand);
  });

  filters?.ratings?.forEach((rating) => {
    params.append(PARAMS_QUERY.ratingsGte, (rating - 0.5).toString());
    params.append(PARAMS_QUERY.ratingsLte, (rating + 0.5).toString());
  });

  filters?.categories?.forEach((cat) => {
    params.append(PARAMS_QUERY.categories, cat);
  });

  if (filters?.colors) {
    const colorRegex = filters.colors.map((color) => `(?=.*${color})`).join("");
    params.append(PARAMS_QUERY.colors, colorRegex);
  }

  filters?.priceRanges?.forEach(({ min, max }) => {
    if (min !== undefined) {
      params.append(PARAMS_QUERY.priceMin, min.toString());
    }
    if (max !== undefined) {
      params.append(PARAMS_QUERY.priceMax, max.toString());
    }
  });

  if (filters?.discountPercentage !== undefined) {
    params.append(
      PARAMS_QUERY.discountPercentage,
      filters.discountPercentage.toString(),
    );
  }

  if (filters?.sort) {
    const [sortField, sortOrder] = filters.sort.split("_");
    params.append(PARAMS_QUERY.sortField, sortField);
    params.append(PARAMS_QUERY.sortOrder, sortOrder);
  }

  if (filters?.page) {
    params.append(PARAMS_QUERY.page, filters.page.toString());
  }

  if (filters?.perPage) {
    params.append(PARAMS_QUERY.perPage, filters.perPage.toString());
  }

  return params.toString();
}

export async function fetchProducts(
  filters?: ProductFilters,
): Promise<PaginatedResult<Product>> {
  const query = buildQueryParams(filters);
  const url = `${environment.BACK_API}/products${query ? `?${query}` : ""}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: Product[] = await res.json();

  const total = parseInt(res.headers.get("x-total-count") || "0");

  return {
    data,
    total,
  };
}

export async function fetchSingleProduct(id: string): Promise<Product | null> {
  const url = `${environment.BACK_API}/products/${id}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await res.json();

  if (data && typeof data === "object" && Object.keys(data).length === 0) {
    return null;
  }

  return data as Product;
}

export async function fetchMultipleProducts(ids: string[]): Promise<Product[]> {
  const query = ids.map((id) => `id=${encodeURIComponent(id)}`).join("&");
  const url = `${environment.BACK_API}/products?${query}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid response format");
  }

  return data as Product[];
}

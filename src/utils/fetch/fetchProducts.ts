import { environment } from "../../environment";
import { PaginatedResult, ProductFilters } from "../../interfaces/FetchProduct";
import { Product } from "../../interfaces/Product";

function buildQueryParams(filters?: ProductFilters): string {
  const params = new URLSearchParams();

  filters?.brands?.forEach((brand) => {
    params.append("brand", brand);
  });

  filters?.ratings?.forEach((rating) => {
    params.append("rating.value_gte", rating.toString());
  });

  filters?.categories?.forEach((cat) => {
    params.append("category", cat);
  });

  filters?.priceRanges?.forEach(({ min, max }) => {
    if (min !== undefined) params.append("price_gte", min.toString());
    if (max !== undefined) params.append("price_lte", max.toString());
  });

  if (filters?.sort) {
    const field = filters.sort;
    params.append("_sort", field);
  }

  if (filters?.page) {
    params.append("_page", filters.page.toString());
  }
  if (filters?.perPage) {
    params.append("_limit", filters.perPage.toString());
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

  const total = parseInt(res.headers.get("x-total-count") || "0", 10);

  return {
    data,
    total,
  };
}

import { environment } from "../environment";
import { Product } from "../interfaces/Product";

type PriceRange = { min: number; max?: number };

export interface ProductFilters {
  brands?: string[];
  ratings?: number[];
  categories?: string[];
  priceRanges?: PriceRange[];
}

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

  return params.toString();
}

export async function fetchProducts(
  filters?: ProductFilters,
): Promise<Product[]> {
  const query = buildQueryParams(filters);
  const url = `${environment.BACK_API}/products${query ? `?${query}` : ""}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return await res.json();
}

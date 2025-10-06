export type PriceRange = { min: number; max?: number };

export type SortOption = "price_asc" | "price_desc" | "name_asc" | "name_desc";

export interface ProductFilters {
  brands?: string[];
  ratings?: number[];
  categories?: string[];
  colors?: string[];
  priceRanges?: PriceRange[];
  sort?: SortOption;
  page: number;
  perPage: number;
  discountPercentage?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
}

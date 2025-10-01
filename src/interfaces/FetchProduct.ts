export type PriceRange = { min: number; max?: number };

export type SortOption = "price" | "-price" | "name" | "-name";

export interface ProductFilters {
  brands?: string[];
  ratings?: number[];
  categories?: string[];
  priceRanges?: PriceRange[];
  sort?: SortOption;
  page?: number;
  perPage?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
}

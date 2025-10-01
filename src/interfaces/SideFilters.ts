export interface BaseFilter<T, Type> {
  type: Type;
  label: string;
  values: T;
}

export type MultiSelectFilter = BaseFilter<string[], "multi-select">;
export type SingleSelectFilter = BaseFilter<number[], "single-select">;
export type RangeFilter = BaseFilter<{ min: number; max: number }, "range">;

export interface SideFilters {
  brand: MultiSelectFilter;
  category: MultiSelectFilter;
  price: RangeFilter;
  discountPercentage: SingleSelectFilter;
  rating: SingleSelectFilter;
  colors: MultiSelectFilter;
}

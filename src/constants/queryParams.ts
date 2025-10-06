export const PARAMS_PAGE = {
  perPage: "perPage",
  page: "page",
  sort: "sort",
  brand: "brand",
  category: "category",
  colors: "colors",
  rating: "rating",
  priceMin: "price_gte",
  priceMax: "price_lte",
  discountPercentage: "discountPercentage",
  view: "view",
} as const;

export const PARAMS_QUERY = {
  brands: "brand",
  categories: "category",
  colors: "colors_like",
  ratingsGte: "rating.value_gte",
  ratingsLte: "rating.value_lte",
  priceMin: "price_gte",
  priceMax: "price_lte",
  discountPercentage: "discountPercentage_gte",
  sortField: "_sort",
  sortOrder: "_order",
  page: "_page",
  perPage: "_limit",
} as const;

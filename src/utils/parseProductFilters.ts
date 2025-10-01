import {
  defaultPerPage,
  defaultSortBy,
  perPageOptions,
  sortByOptions,
} from "../constants/productFilters";
import {
  PriceRange,
  ProductFilters,
  SortOption,
} from "../interfaces/FetchProduct";

export function parseProductFilters(params: URLSearchParams): ProductFilters {
  const rawPerPage = params.get("perPage");
  const perPageNum = parseInt(rawPerPage || "", 10);
  const validPerPages = perPageOptions.map((opt) => parseInt(opt.value, 10));
  const perPage = validPerPages.includes(perPageNum)
    ? perPageNum
    : defaultPerPage;

  const rawPage = params.get("page");
  const page = rawPage ? parseInt(rawPage, 10) || 1 : 1;

  const rawSort = params.get("sort");
  const validSorts = sortByOptions.map((opt) => opt.value);
  let sort: SortOption = defaultSortBy;

  if (rawSort && validSorts.includes(rawSort as SortOption)) {
    sort = rawSort as SortOption;
  }

  const brands = params.getAll("brand");
  const categories = params.getAll("category");
  const colors = params.getAll("colors");

  const rawRating = params.getAll("rating");
  const ratings = rawRating
    .map((r) => parseInt(r, 10))
    .filter((r) => !isNaN(r));

  const priceMin = params.get("price_gte");
  const priceMax = params.get("price_lte");

  const priceRanges: PriceRange[] = [];
  const min = priceMin ? parseFloat(priceMin) : undefined;
  const max = priceMax ? parseFloat(priceMax) : undefined;

  const rawDiscount = params.get("discountPercentage");
  const discountPercentage = rawDiscount
    ? parseInt(rawDiscount, 10)
    : undefined;

  if (!isNaN(min!) || !isNaN(max!)) {
    priceRanges.push({ min: min || 0, max });
  }

  return {
    perPage,
    page,
    sort,
    brands: brands.length ? brands : undefined,
    categories: categories.length ? categories : undefined,
    colors: colors.length ? colors : undefined,
    ratings: ratings.length ? ratings : undefined,
    priceRanges: priceRanges.length ? priceRanges : undefined,
    discountPercentage,
  };
}

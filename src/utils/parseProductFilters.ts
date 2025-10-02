import { PARAMS_PAGE } from "@/constants/queryParams";
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
  const rawPerPage = params.get(PARAMS_PAGE.perPage);
  const perPageNum = parseInt(rawPerPage || "", 10);
  const validPerPages = perPageOptions.map((opt) => parseInt(opt.value, 10));
  const perPage = validPerPages.includes(perPageNum)
    ? perPageNum
    : defaultPerPage;

  const rawPage = params.get(PARAMS_PAGE.page);
  const page = rawPage ? parseInt(rawPage, 10) || 1 : 1;

  const rawSort = params.get(PARAMS_PAGE.sort);
  const validSorts = sortByOptions.map((opt) => opt.value);
  const sort: SortOption =
    rawSort && validSorts.includes(rawSort as SortOption)
      ? (rawSort as SortOption)
      : defaultSortBy;

  const brands = params.getAll(PARAMS_PAGE.brand);
  const categories = params.getAll(PARAMS_PAGE.category);
  const colors = params.getAll(PARAMS_PAGE.colors);

  const rawRating = params.getAll(PARAMS_PAGE.rating);
  const ratings = rawRating
    .map((r) => parseInt(r, 10))
    .filter((r) => !isNaN(r));

  const priceMin = params.get(PARAMS_PAGE.priceMin);
  const priceMax = params.get(PARAMS_PAGE.priceMax);
  const min = priceMin ? parseFloat(priceMin) : undefined;
  const max = priceMax ? parseFloat(priceMax) : undefined;
  const priceRanges: PriceRange[] = [];

  if (!isNaN(min!) || !isNaN(max!)) {
    priceRanges.push({ min: min || 0, max });
  }

  const rawDiscount = params.get(PARAMS_PAGE.discountPercentage);
  const discountPercentage = rawDiscount
    ? parseInt(rawDiscount, 10)
    : undefined;

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

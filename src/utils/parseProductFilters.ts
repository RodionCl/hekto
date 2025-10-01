import {
  defaultPerPage,
  defaultSortBy,
  perPageOptions,
  sortByOptions,
} from "../constants/productFilters";
import { ProductFilters, SortOption } from "../interfaces/FetchProduct";

export function parseProductFilters(params: URLSearchParams): ProductFilters {
  const rawPerPage = params.get("perPage");
  const perPageNum = parseInt(rawPerPage || "", 10);
  const validPerPages = perPageOptions.map((opt) => parseInt(opt.value, 10));
  const perPage = validPerPages.includes(perPageNum)
    ? perPageNum
    : defaultPerPage;

  const rawSort = params.get("sort") as SortOption | null;
  const validSorts = sortByOptions.map((opt) => opt.value);
  const sort =
    rawSort && validSorts.includes(rawSort) ? rawSort : defaultSortBy;

  console.log(validSorts, "validSorts");

  return {
    perPage,
    sort,
  };
}

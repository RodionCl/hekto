import { SortOption } from "@/interfaces/FetchProduct";

export const perPageOptions = [
  { value: "10", label: "10" },
  { value: "25", label: "25" },
  { value: "50", label: "50" },
];

export const defaultPerPage = 10;

export const sortByOptions: { value: SortOption; label: string }[] = [
  { value: "price_asc", label: "Price: Low -> High" },
  { value: "price_desc", label: "Price: High -> Low" },
  { value: "name_asc", label: "Alpha: A -> Z" },
  { value: "name_desc", label: "Alpha: Z -> A" },
];

export const defaultSortBy: SortOption = "price_asc";

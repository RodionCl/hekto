import { SortOption } from "../interfaces/FetchProduct";

export const perPageOptions = [
  { value: "10", label: "10" },
  { value: "25", label: "25" },
  { value: "50", label: "50" },
];

export const defaultPerPage = 10;

export const sortByOptions: { value: SortOption; label: string }[] = [
  { value: "price", label: "Price: Low -> High" },
  { value: "-price", label: "Price: High -> Low" },
  { value: "name", label: "Alpha: A -> Z" },
  { value: "-name", label: "Alpha: Z -> A" },
];

export const defaultSortBy: SortOption = "price";

import { environment } from "../../environment";
import { SideFilters } from "../../interfaces/SideFilters";

function uniqueArray<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export async function fetchSideFilters(): Promise<SideFilters> {
  const url = `${environment.BACK_API}/filters`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: SideFilters = await res.json();

  for (const key in data) {
    const filter = data[key as keyof SideFilters];

    if (Array.isArray(filter.values)) {
      if (filter.values.every((v) => typeof v === "string")) {
        filter.values = uniqueArray(filter.values as string[]);
      } else if (filter.values.every((v) => typeof v === "number")) {
        filter.values = uniqueArray(filter.values as number[]);
      }
    }
  }

  return data;
}

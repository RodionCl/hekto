import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../../../../hooks/useFetch";
import { SideFilters } from "../../../../../interfaces/SideFilters";
import { fetchSideFilters } from "../../../../../utils/fetch/fetchFilters";

type FilterType = "multi-select" | "single-select" | "range";

export const useSideFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchedData: sideFilters, isFetching } = useFetch<SideFilters | null>(
    () => fetchSideFilters(),
    null,
  );

  const handleFilterChange = (
    filterKey: string,
    value: string | null,
    filterType: FilterType,
  ) => {
    const params = new URLSearchParams(searchParams);

    switch (filterType) {
      case "multi-select": {
        if (value === null) {
          params.delete(filterKey);
          break;
        }
        const existingValues = params.getAll(filterKey);
        if (existingValues.includes(value)) {
          const newValues = existingValues.filter((v) => v !== value);
          params.delete(filterKey);
          newValues.forEach((v) => params.append(filterKey, v));
        } else {
          params.append(filterKey, value);
        }
        break;
      }

      case "single-select":
      case "range":
        if (value === null) {
          params.delete(filterKey);
        } else {
          params.set(filterKey, value);
        }
        break;
    }

    setSearchParams(params);
  };

  return { sideFilters, isFetching, searchParams, handleFilterChange };
};

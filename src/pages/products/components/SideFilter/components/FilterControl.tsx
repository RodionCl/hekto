import { SideFilters } from "../../../../../interfaces/SideFilters";
import MultiSelectFilter from "./MultiSelectFilter";
import SingleSelectFilter from "./SingleSelectFilter";
import RangeFilter from "./RangeFilter";

type FilterType = "multi-select" | "single-select" | "range";

interface FilterControlProps {
  filterKey: keyof SideFilters;
  filter: SideFilters[keyof SideFilters];
  handleFilterChange: (
    filterKey: string,
    value: string | null,
    filterType: FilterType,
  ) => void;
}

export default function FilterControl({
  filterKey,
  filter,
  handleFilterChange,
}: FilterControlProps) {
  const onChange = (value: string | null) => {
    handleFilterChange(filterKey, value, filter.type);
  };

  switch (filter.type) {
    case "multi-select":
      return (
        <MultiSelectFilter
          filterKey={filterKey}
          values={filter.values}
          onChange={onChange}
        />
      );

    case "single-select":
      return (
        <SingleSelectFilter
          filterKey={filterKey}
          values={filter.values}
          onChange={onChange}
        />
      );

    case "range":
      return <RangeFilter min={filter.values.min} max={filter.values.max} />;

    default:
      return null;
  }
}

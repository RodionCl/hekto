import { useSideFilter } from "./hooks/useSideFilter";
import { SideFilters } from "../../../../interfaces/SideFilters";
import {
  AsideFilter,
  FilterCategory,
  OptionsList,
} from "./components/SideFilter.styles";
import FilterControl from "./components/FilterControl";

export function SideFilter() {
  const { sideFilters, isFetching, handleFilterChange } = useSideFilter();

  if (isFetching || !sideFilters) {
    return <p>Loading filters...</p>;
  }

  return (
    <AsideFilter>
      {Object.entries(sideFilters).map(([key, filter]) => (
        <FilterCategory key={key}>
          <p className="subtitle-3" style={{ borderBottom: "1px solid black" }}>
            {filter.label}
          </p>
          <OptionsList>
            <FilterControl
              filterKey={key as keyof SideFilters}
              filter={filter}
              handleFilterChange={handleFilterChange}
            />
          </OptionsList>
        </FilterCategory>
      ))}
    </AsideFilter>
  );
}

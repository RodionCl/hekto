import { useSideFilter } from "@/hooks/useSideFilter";
import { SideFilters } from "@/interfaces/SideFilters";
import { S } from "./components/SideFilter.styles";
import FilterControl from "./components/FilterControl";

export function SideFilter() {
  const { sideFilters, isFetching, handleFilterChange } = useSideFilter();

  if (isFetching || !sideFilters) {
    return <p>Loading filters...</p>;
  }

  return (
    <S.AsideFilter>
      {Object.entries(sideFilters).map(([key, filter]) => (
        <S.FilterCategory key={key}>
          <S.LabelFilter className="subtitle-3">{filter.label}</S.LabelFilter>
          <S.OptionsList>
            <FilterControl
              filterKey={key as keyof SideFilters}
              filter={filter}
              handleFilterChange={handleFilterChange}
            />
          </S.OptionsList>
        </S.FilterCategory>
      ))}
    </S.AsideFilter>
  );
}

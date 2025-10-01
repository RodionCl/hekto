import { Radio } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { SideFilters } from "../../../interfaces/SideFilters";
import { fetchSideFilters } from "../../../utils/fetch/fetchFilters";
import { AsideFilter, FilterCategory, OptionsWrapper } from "./Layout.styles";
import PriceRangeSlider from "./PriceRangeSlider";
import ColorCheckbox from "../../../components/ColorCheckbox";
import { COLORS } from "../../../constants/colors";
import { colorFilterCategory } from "../../../utils/colorFilterCategory";

export default function SideFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchedData: sideFilters, isFetching } = useFetch<SideFilters | null>(
    () => fetchSideFilters(),
    null,
  );

  const handleFilterChange = (
    filterKey: string,
    value: string,
    filterType: "multi-select" | "single-select" | "range",
  ) => {
    const params = new URLSearchParams(searchParams);

    switch (filterType) {
      case "multi-select": {
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
        params.set(filterKey, value);
        break;
    }

    setSearchParams(params);
  };

  if (isFetching || !sideFilters) {
    return <p>Loading filters...</p>;
  }

  const renderFilterControl = (
    key: keyof SideFilters,
    filter: SideFilters[keyof SideFilters],
  ) => {
    switch (filter.type) {
      case "multi-select":
        return filter.values.map((value) => {
          const isChecked = searchParams.getAll(key).includes(value);
          return (
            <li key={`${key}-${value}`}>
              <ColorCheckbox
                customColor={colorFilterCategory(key, value)}
                checked={isChecked}
                name={key}
                onChange={() => handleFilterChange(key, value, filter.type)}
              />
              {value}
            </li>
          );
        });

      case "single-select":
        return filter.values.map((value) => {
          const isChecked = searchParams.get(key) === String(value);
          return (
            <li key={`${key}-${value}`}>
              <Radio
                checked={isChecked}
                sx={{
                  "&, &.Mui-checked": {
                    color: colorFilterCategory(key),
                  },
                }}
                onChange={() =>
                  handleFilterChange(key, String(value), filter.type)
                }
              />
              {value}
            </li>
          );
        });

      case "range":
        return (
          <li style={{ width: "100%", padding: "0 1rem" }}>
            <PriceRangeSlider
              minBoundary={filter.values.min}
              maxBoundary={filter.values.max}
            />
          </li>
        );

      default:
        return null;
    }
  };

  return (
    <AsideFilter>
      {Object.entries(sideFilters).map(([key, filter]) => (
        <FilterCategory key={key}>
          <p className="subtitle-3" style={{ borderBottom: "1px solid black" }}>
            {filter.label}
          </p>
          <OptionsWrapper>
            {renderFilterControl(key as keyof SideFilters, filter)}
          </OptionsWrapper>
        </FilterCategory>
      ))}
    </AsideFilter>
  );
}

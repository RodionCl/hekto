import { useSearchParams } from "react-router-dom";
import ColorCheckbox from "../../../../../components/ColorCheckbox";
import { colorFilterCategory } from "../../../../../utils/filterCategoryHelpers";
import { OptionItem } from "./SideFilter.styles";

interface MultiSelectFilterProps {
  filterKey: string;
  values: string[];
  onChange: (value: string) => void;
}

export default function MultiSelectFilter({
  filterKey,
  values,
  onChange,
}: MultiSelectFilterProps) {
  const [searchParams] = useSearchParams();
  const checkedValues = searchParams.getAll(filterKey);

  return values.map((value) => (
    <OptionItem key={`${filterKey}-${value}`}>
      <ColorCheckbox
        id={`${filterKey}-${value}`}
        name={`${filterKey}-${value}`}
        customColor={colorFilterCategory(filterKey, value)}
        checked={checkedValues.includes(value)}
        onChange={() => onChange(value)}
      />
      <label htmlFor={`${filterKey}-${value}`}>{value}</label>
    </OptionItem>
  ));
}

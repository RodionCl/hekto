import { useSearchParams } from "react-router-dom";
import { S } from "./SideFilter.styles";
import ColorCheckbox from "@/components/ColorCheckbox";
import { colorFilterCategory } from "@/utils/filterCategoryHelpers";

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
    <S.OptionItem key={`${filterKey}-${value}`}>
      <ColorCheckbox
        id={`${filterKey}-${value}`}
        name={`${filterKey}-${value}`}
        customColor={colorFilterCategory(filterKey, value)}
        checked={checkedValues.includes(value)}
        onChange={() => onChange(value)}
      />
      <S.Label htmlFor={`${filterKey}-${value}`}>{value}</S.Label>
    </S.OptionItem>
  ));
}

import { Radio } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import {
  colorFilterCategory,
  labelCategory,
} from "../../../../../utils/filterCategoryHelpers";
import { OptionItem } from "./SideFilter.styles";

interface SingleSelectFilterProps {
  filterKey: string;
  values: (string | number)[];
  onChange: (value: string | null) => void;
}

export default function SingleSelectFilter({
  filterKey,
  values,
  onChange,
}: SingleSelectFilterProps) {
  const [searchParams] = useSearchParams();
  const checkedValue = searchParams.get(filterKey);

  return values.map((value) => {
    const stringValue = String(value);
    const isChecked = checkedValue === stringValue;

    return (
      <OptionItem key={`${filterKey}-${value}`}>
        <Radio
          id={`${filterKey}-${value}`}
          checked={isChecked}
          name={filterKey}
          sx={{
            "&, &.Mui-checked": { color: colorFilterCategory(filterKey) },
            padding: 0,
          }}
          onClick={() => {
            if (isChecked) {
              onChange(null);
            } else {
              onChange(stringValue);
            }
          }}
        />
        {labelCategory(filterKey, value)}
      </OptionItem>
    );
  });
}

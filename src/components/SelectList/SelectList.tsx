import {
  FormControl,
  SelectChangeEvent,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import {
  selectMenuStyles,
  selectMenuProps,
  menuItemStyles,
} from "./SelectList.styles";

interface SelectListProps<T extends string> {
  value: T;
  onChange: (event: SelectChangeEvent<T>) => void;
  options: { value: T; label: string }[];
  label: string;
  id: string;
  width?: string;
}

export default function SelectList<T extends string>({
  value,
  onChange,
  options,
  label,
  id,
  width = "100%",
}: SelectListProps<T>) {
  return (
    <FormControl sx={{ width }} variant="outlined">
      <InputLabel htmlFor={id} sx={visuallyHidden}>
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{ id: id }}
        sx={selectMenuStyles}
        MenuProps={selectMenuProps}
        displayEmpty
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={menuItemStyles}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

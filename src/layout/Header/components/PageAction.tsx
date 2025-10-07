import { rem } from "@/utils/pxToRem";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  labelId: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: Option[];
};

const defaultSx: SxProps<Theme> = {
  boxShadow: "none",
  color: "inherit",
  fontSize: rem(16),
  lineHeight: rem(20),
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  ".MuiSelect-select": { padding: 0, minHeight: 0 },
  ".MuiSvgIcon-root": { fill: "white" },
};

export default function PageAction({
  labelId,
  value,
  onChange,
  options,
}: CustomSelectProps) {
  return (
    <Select
      name={labelId}
      labelId={labelId}
      value={value}
      onChange={onChange}
      sx={defaultSx}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}

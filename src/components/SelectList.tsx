import {
  FormControl,
  SelectChangeEvent,
  InputLabel,
  Select,
  MenuItem,
  MenuProps,
  SxProps,
  Theme,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { rem } from "../utils/pxToRem";
import { COLORS } from "../constants/colors";

const selectFontStyles: SxProps<Theme> = {
  fontSize: rem(14),
  color: COLORS.black,
  lineHeight: rem(16),
};

const selectMenuStyles: SxProps<Theme> = {
  ...selectFontStyles,
  "& .MuiSelect-select": {
    padding: rem(12),
    minHeight: 0,
  },
};

const selectMenuProps: Partial<MenuProps> = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  sx: {
    "& .MuiMenu-list": {
      padding: rem(16),
      marginTop: rem(5),
      border: `1px solid ${COLORS.grey2}`,
      borderRadius: rem(8),
    },
    "& .MuiPaper-root": {
      boxShadow: "none",
    },
  },
};

const menuItemStyles: SxProps<Theme> = {
  ...selectFontStyles,
  padding: rem(16, 8),
  borderRadius: rem(8),
  "&:hover": {
    backgroundColor: COLORS.grey1,
  },
  "&.Mui-selected": {
    backgroundColor: COLORS.infoLight,
  },
  "&:not(:last-child)": {
    marginBottom: rem(16),
  },
};

interface ReusableSelectProps<T extends string> {
  value: T;
  onChange: (event: SelectChangeEvent<T>) => void;
  options: { value: T; label: string }[];
  label: string;
  id: string;
  width?: string;
}

export default function ReusableSelect<T extends string>({
  value,
  onChange,
  options,
  label,
  id,
  width = "100%",
}: ReusableSelectProps<T>) {
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

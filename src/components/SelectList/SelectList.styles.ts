import { SxProps, Theme, MenuProps } from "@mui/material";
import { rem } from "../../utils/pxToRem";
import { COLORS } from "../../constants/colors";

export const selectFontStyles: SxProps<Theme> = {
  fontSize: rem(14),
  color: COLORS.black,
  lineHeight: rem(16),
};

export const selectMenuStyles: SxProps<Theme> = {
  ...selectFontStyles,
  "& .MuiSelect-select": {
    padding: rem(12),
    minHeight: 0,
    display: "flex",
    alignItems: "center",
  },
};

export const selectMenuProps: Partial<MenuProps> = {
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

export const menuItemStyles: SxProps<Theme> = {
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

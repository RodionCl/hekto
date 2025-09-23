import AppIconButton from "./AppIconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ICON_SIZES } from "../constants/iconSizes";
import { ButtonHTMLAttributes } from "react";
import { rem } from "../utils/pxToRem";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SearchButton({ ...props }: ButtonProps) {
  return (
    <AppIconButton padding={rem(6, 14)} {...props}>
      <SearchIcon sx={{ fontSize: ICON_SIZES.big }} />
    </AppIconButton>
  );
}

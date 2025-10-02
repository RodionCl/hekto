import SearchIcon from "@mui/icons-material/Search";
import AppIconButton from "@/components/AppIconButton";
import { ICON_SIZES } from "@/constants/iconSizes";
import { rem } from "@/utils/pxToRem";
import { IconButtonProps } from "@mui/material";

export default function SearchButton({
  "aria-label": ariaLabel = "Search Button",
  ...props
}: IconButtonProps) {
  return (
    <AppIconButton padding={rem(6, 14)} aria-label={ariaLabel} {...props}>
      <SearchIcon sx={{ fontSize: ICON_SIZES.big }} />
    </AppIconButton>
  );
}

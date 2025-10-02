import SearchIcon from "@mui/icons-material/Search";
import AppIconButton from "@/components/AppIconButton";
import { ICON_SIZES } from "@/constants/iconSizes";
import { rem } from "@/utils/pxToRem";
import { AppButtonProps } from "@/components/AppButton";

export default function SearchButton({ ...props }: AppButtonProps) {
  return (
    <AppIconButton padding={rem(6, 14)} {...props}>
      <SearchIcon sx={{ fontSize: ICON_SIZES.big }} />
    </AppIconButton>
  );
}

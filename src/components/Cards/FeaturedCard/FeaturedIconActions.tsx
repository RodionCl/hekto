import AppIconButton from "../../AppIconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { COLORS } from "../../../constants/colors";
import { ICON_SIZES } from "../../../constants/iconSizes";
import { rem } from "../../../utils/pxToRem";

type FeaturedIconActionsProps = {
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onZoom?: () => void;
};

export default function FeaturedIconActions({
  onAddToCart,
  onAddToWishlist,
  onZoom,
}: FeaturedIconActionsProps) {
  return (
    <>
      {onAddToCart && (
        <li>
          <AppIconButton
            onClick={onAddToCart}
            padding={rem(8)}
            borderRadius={rem(32)}
            bgColor={COLORS.white}
            bgColorHover={COLORS.grey2}
            textColor={COLORS.tertiary}
            withBackground={false}
            aria-label="Add to cart"
          >
            <ShoppingCartOutlinedIcon sx={{ fontSize: ICON_SIZES.medium }} />
          </AppIconButton>
        </li>
      )}
      {onAddToWishlist && (
        <li>
          <AppIconButton
            onClick={onAddToWishlist}
            padding={rem(8)}
            borderRadius={rem(32)}
            bgColor={COLORS.white}
            bgColorHover={COLORS.grey2}
            textColor={COLORS.tertiary}
            withBackground={false}
            aria-label="Add to wishlist"
          >
            <FavoriteBorderOutlinedIcon sx={{ fontSize: ICON_SIZES.medium }} />
          </AppIconButton>
        </li>
      )}
      {onZoom && (
        <li>
          <AppIconButton
            onClick={onZoom}
            padding={rem(8)}
            borderRadius={rem(32)}
            bgColor={COLORS.white}
            bgColorHover={COLORS.grey2}
            textColor={COLORS.tertiary}
            withBackground={false}
            aria-label="Zoom in on image"
          >
            <ZoomInOutlinedIcon sx={{ fontSize: ICON_SIZES.medium }} />
          </AppIconButton>
        </li>
      )}
    </>
  );
}

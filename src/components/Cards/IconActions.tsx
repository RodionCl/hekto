import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { COLORS } from "@/constants/colors";
import { ICON_SIZES } from "@/constants/iconSizes";
import { rem } from "@/utils/pxToRem";
import AppIconButton from "@/components/AppIconButton";

type IconActionsProps = {
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onZoom?: () => void;
};

const iconStyles = {
  fontSize: ICON_SIZES.medium,
};

const commonButtonProps = {
  padding: rem(8),
  borderRadius: rem(32),
  bgColor: COLORS.white,
  bgColorHover: COLORS.grey2,
  textColor: COLORS.tertiary,
  withBackground: false,
};

export default function IconActions({
  onAddToCart,
  onAddToWishlist,
  onZoom,
}: IconActionsProps) {
  return (
    <>
      {onAddToCart && (
        <li>
          <AppIconButton
            {...commonButtonProps}
            onClick={onAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingCartOutlinedIcon sx={iconStyles} />
          </AppIconButton>
        </li>
      )}
      {onAddToWishlist && (
        <li>
          <AppIconButton
            {...commonButtonProps}
            onClick={onAddToWishlist}
            aria-label="Add to wishlist"
          >
            <FavoriteBorderOutlinedIcon sx={iconStyles} />
          </AppIconButton>
        </li>
      )}
      {onZoom && (
        <li>
          <AppIconButton
            {...commonButtonProps}
            onClick={onZoom}
            aria-label="Zoom in on image"
          >
            <ZoomInOutlinedIcon sx={iconStyles} />
          </AppIconButton>
        </li>
      )}
    </>
  );
}

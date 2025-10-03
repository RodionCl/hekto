import { Rating } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { S } from "../components/ProductDetails.styles";
import { Product } from "@/interfaces/Product";
import { formatCurrency } from "@/utils/formatCurrency";
import { COLORS } from "@/constants/colors";
import { ICON_SIZES } from "@/constants/iconSizes";
import { rem } from "@/utils/pxToRem";
import AppButton from "@/components/AppButton";
import AppIconButton from "@/components/AppIconButton";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { name, rating, price, wasPrice, description } = product;

  return (
    <S.InfoBlock>
      <h1>{name}</h1>
      <Rating name="read-only" value={rating.value} readOnly />
      <S.PriceWrapper>
        <p className="p-medium">{formatCurrency(price)}</p>
        <S.WasPrice className="p-small">{formatCurrency(wasPrice)}</S.WasPrice>
      </S.PriceWrapper>

      <S.Description style={{ color: COLORS.grey3 }}>
        {description}
      </S.Description>

      <S.ProductActions>
        <AppButton bgColor={COLORS.primary} bgColorHover={COLORS.primaryDark}>
          <span className="subtitle-4">Add To Cart</span>
        </AppButton>
        <AppIconButton
          padding={rem(8)}
          borderRadius={rem(32)}
          withBackground={false}
          textColor={COLORS.tertiary}
        >
          <FavoriteBorderOutlinedIcon sx={{ fontSize: ICON_SIZES.medium }} />
        </AppIconButton>
      </S.ProductActions>
    </S.InfoBlock>
  );
}

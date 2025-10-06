import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { Product } from "@/interfaces/Product";
import * as S from "@/components/Cards/FilterCard/FilterCard.styles";
import IconActions from "@/components/Cards/IconActions";
import { formatCurrency } from "@/utils/formatCurrency";
import { rem } from "@/utils/pxToRem";

interface FilterCardProps {
  product: Product;
  width?: string;
  maxWidth?: string;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onZoom?: () => void;
  productUrl: string;
  isGrid?: boolean;
}

export default function FilterCard({
  product,
  width = "100%",
  maxWidth = "350px",
  onAddToCart,
  onAddToWishlist,
  onZoom,
  productUrl,
  isGrid = false,
}: FilterCardProps) {
  const { thumbnail, name, price, wasPrice, rating, description } = product;
  const imagePadding = isGrid ? 8 : 16;

  return (
    <S.Wrapper
      $width={width}
      $maxWidth={maxWidth}
      className="card-shadow"
      $isGrid={isGrid}
    >
      <Link
        to={productUrl}
        tabIndex={-1}
        style={{ display: "flex", flexShrink: "0", padding: rem(imagePadding) }}
      >
        <S.ImageWrapper>
          <img src={thumbnail} alt={`${name} Image`} />
        </S.ImageWrapper>
      </Link>
      <S.Info>
        <Link
          to={productUrl}
          style={{ textDecoration: "none", color: "inherit", flex: "1" }}
        >
          <S.Header>
            <S.Title className="p-large-bold">{name}</S.Title>
            <Rating name="read-only" value={rating.value} readOnly />
          </S.Header>
          <S.PriceWrapper>
            <p className="p-medium">{formatCurrency(price)}</p>
            <S.WasPrice className="p-small">
              {formatCurrency(wasPrice)}
            </S.WasPrice>
          </S.PriceWrapper>
          <S.Description>{description}</S.Description>
        </Link>
        <S.IconList>
          <IconActions
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
            onZoom={onZoom}
          />
        </S.IconList>
      </S.Info>
    </S.Wrapper>
  );
}

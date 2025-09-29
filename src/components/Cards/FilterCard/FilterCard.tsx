import { Link } from "react-router-dom";
import { Product } from "../../../interfaces/Product";
import * as S from "./FilterCard.styles";
import IconActions from "../IconActions";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Rating } from "@mui/material";

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
        style={{ display: "flex", flexShrink: "0" }}
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

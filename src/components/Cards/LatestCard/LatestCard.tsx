import { Link } from "react-router-dom";
import { Product } from "../../../interfaces/Product";
import * as S from "./LatestCard.styles";
import IconActions from "../IconActions";
import { formatCurrency } from "../../../utils/formatCurrency";

interface LatestCardProps {
  product: Product;
  width?: string;
  maxWidth?: string;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onZoom?: () => void;
  productUrl: string;
}

export default function LatestCard({
  product,
  width = "100%",
  maxWidth = "416px",
  onAddToCart,
  onAddToWishlist,
  onZoom,
  productUrl,
}: LatestCardProps) {
  const { thumbnail, name, price, wasPrice } = product;

  return (
    <S.CardWrapper $width={width} $maxWidth={maxWidth}>
      <S.ImageWrapper>
        <Link to={productUrl} tabIndex={-1}>
          <img src={thumbnail} alt={`${name} Image`} />
        </Link>
        <S.IconList>
          <IconActions
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
            onZoom={onZoom}
          />
        </S.IconList>
      </S.ImageWrapper>
      <Link
        to={productUrl}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <S.CardInfo>
          <S.ProductTitle className="p-large-bold">{name}</S.ProductTitle>
          <S.ProductPrice className="p-large-bold">
            {formatCurrency(price)}
          </S.ProductPrice>
          <S.ProductWasPrice className="p-small">
            {formatCurrency(wasPrice)}
          </S.ProductWasPrice>
        </S.CardInfo>
      </Link>
    </S.CardWrapper>
  );
}

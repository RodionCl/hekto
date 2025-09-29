import { Link } from "react-router-dom";
import { Product } from "../../../interfaces/Product";
import SuccessButton from "../../SuccessButton";
import * as S from "./FeaturedCard.styles";
import IconActions from "../IconActions";
import { formatCurrency } from "../../../utils/formatCurrency";

interface FeaturedCardProps {
  product: Product;
  width?: string;
  maxWidth?: string;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onZoom?: () => void;
  onViewDetails?: () => void;
  detailsButtonText?: string;
  productUrl: string;
}

export default function FeaturedCard({
  product,
  width = "100%",
  maxWidth = "350px",
  onAddToCart,
  onAddToWishlist,
  onZoom,
  onViewDetails,
  productUrl,
  detailsButtonText = "View Details",
}: FeaturedCardProps) {
  const { thumbnail, name, code, price } = product;

  return (
    <S.CardWrapper $width={width} $maxWidth={maxWidth} className="card-shadow">
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
        {onViewDetails && (
          <S.ButtonWrapper>
            <SuccessButton onClick={onViewDetails}>
              {detailsButtonText}
            </SuccessButton>
          </S.ButtonWrapper>
        )}
      </S.ImageWrapper>
      <Link
        to={productUrl}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <S.CardInfo>
          <S.ProductTitle className="p-large-bold">{name}</S.ProductTitle>
          <S.ProductCode className="p-small">Code - {code}</S.ProductCode>
          <S.ProductPrice className="p-large-bold">
            {formatCurrency(price)}
          </S.ProductPrice>
        </S.CardInfo>
      </Link>
    </S.CardWrapper>
  );
}

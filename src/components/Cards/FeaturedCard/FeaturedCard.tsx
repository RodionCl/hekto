import { Link } from "react-router-dom";
import { ProductCard } from "../../../interfaces/Product";
import SuccessButton from "../../SuccessButton";
import {
  FeaturedCardWrapper,
  FeaturedImageWrapper,
  FeaturedIconList,
  FeaturedButtonWrapper,
  FeaturedCardInfo,
  FeaturedProductTitle,
  FeaturedProductCode,
  FeaturedProductPrice,
} from "./FeaturedCard.styles";
import IconActions from "../IconActions";
import { formatCurrency } from "../../../utils/formatCurrency";

interface FeaturedCardProps {
  product: ProductCard;
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
  const { imageUrl, title, code, price } = product;

  return (
    <FeaturedCardWrapper
      $width={width}
      $maxWidth={maxWidth}
      className="card-shadow"
    >
      <FeaturedImageWrapper>
        <Link to={productUrl} tabIndex={-1}>
          <img src={imageUrl} alt={`${title} Image`} />
        </Link>
        <FeaturedIconList>
          <IconActions
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
            onZoom={onZoom}
          />
        </FeaturedIconList>
        {onViewDetails && (
          <FeaturedButtonWrapper>
            <SuccessButton onClick={onViewDetails}>
              {detailsButtonText}
            </SuccessButton>
          </FeaturedButtonWrapper>
        )}
      </FeaturedImageWrapper>
      <Link
        to={productUrl}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <FeaturedCardInfo>
          <FeaturedProductTitle className="p-large-bold">
            {title}
          </FeaturedProductTitle>
          <FeaturedProductCode className="p-small">
            Code - {code}
          </FeaturedProductCode>
          <FeaturedProductPrice className="p-large-bold">
            {formatCurrency(price)}
          </FeaturedProductPrice>
        </FeaturedCardInfo>
      </Link>
    </FeaturedCardWrapper>
  );
}

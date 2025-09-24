import { Link } from "react-router-dom";
import { ProductCard } from "../../../interfaces/Product";
import {
  LatestCardWrapper,
  LatestImageWrapper,
  LatestIconList,
  LatestCardInfo,
  LatestProductTitle,
  LatestProductPrice,
  LatestProductWasPrice,
} from "./LatestCard.styles";
import IconActions from "../IconActions";
import { formatCurrency } from "../../../utils/formatCurrency";

interface LatestCardProps {
  product: ProductCard;
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
  const { imageUrl, title, price, wasPrice } = product;

  return (
    <LatestCardWrapper $width={width} $maxWidth={maxWidth}>
      <LatestImageWrapper>
        <Link to={productUrl} tabIndex={-1}>
          <img src={imageUrl} alt={`${title} Image`} />
        </Link>
        <LatestIconList>
          <IconActions
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
            onZoom={onZoom}
          />
        </LatestIconList>
      </LatestImageWrapper>
      <Link
        to={productUrl}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <LatestCardInfo>
          <LatestProductTitle className="p-large-bold">
            {title}
          </LatestProductTitle>
          <LatestProductPrice className="p-large-bold">
            {formatCurrency(price)}
          </LatestProductPrice>
          <LatestProductWasPrice className="p-small">
            {formatCurrency(wasPrice)}
          </LatestProductWasPrice>
        </LatestCardInfo>
      </Link>
    </LatestCardWrapper>
  );
}

import { Link } from "react-router-dom";
import { ProductCard } from "../../../interfaces/Product";
import {
  TrendingCardWrapper,
  TrendingImageWrapper,
  TrendingCardInfo,
  TrendingProductTitle,
  TrendingProductWasPrice,
  TrendingPriceWrapper,
} from "./TrendingCard.styles";
import { formatCurrency } from "../../../utils/formatCurrency";

interface TrendingCardProps {
  product: ProductCard;
  width?: string;
  maxWidth?: string;
  productUrl: string;
}

export default function TrendingCard({
  product,
  width = "100%",
  maxWidth = "350px",
  productUrl,
}: TrendingCardProps) {
  const { imageUrl, title, price, wasPrice } = product;

  return (
    <TrendingCardWrapper
      $width={width}
      $maxWidth={maxWidth}
      className="card-shadow"
    >
      <TrendingImageWrapper>
        <Link to={productUrl} tabIndex={-1}>
          <img src={imageUrl} alt={`${title} Image`} />
        </Link>
      </TrendingImageWrapper>
      <Link
        to={productUrl}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <TrendingCardInfo>
          <TrendingProductTitle className="p-large-bold">
            {title}
          </TrendingProductTitle>
          <TrendingPriceWrapper>
            <p className="p-large-bold">{formatCurrency(price)}</p>
            <TrendingProductWasPrice className="p-small">
              {formatCurrency(wasPrice)}
            </TrendingProductWasPrice>
          </TrendingPriceWrapper>
        </TrendingCardInfo>
      </Link>
    </TrendingCardWrapper>
  );
}

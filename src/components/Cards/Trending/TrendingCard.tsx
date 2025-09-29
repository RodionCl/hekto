import { Link } from "react-router-dom";
import { Product } from "../../../interfaces/Product";
import * as S from "./TrendingCard.styles";
import { formatCurrency } from "../../../utils/formatCurrency";

interface TrendingCardProps {
  product: Product;
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
  const { thumbnail, name, price, wasPrice } = product;

  return (
    <S.CardWrapper
      $width={width}
      $maxWidth={maxWidth}
      className="card-shadow card-floating"
    >
      <S.ImageWrapper>
        <Link to={productUrl} tabIndex={-1}>
          <img src={thumbnail} alt={`${name} Image`} />
        </Link>
      </S.ImageWrapper>
      <Link
        to={productUrl}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <S.CardInfo>
          <S.ProductTitle className="p-large-bold">{name}</S.ProductTitle>
          <S.PriceWrapper>
            <p className="p-large-bold">{formatCurrency(price)}</p>
            <S.ProductWasPrice className="p-small">
              {formatCurrency(wasPrice)}
            </S.ProductWasPrice>
          </S.PriceWrapper>
        </S.CardInfo>
      </Link>
    </S.CardWrapper>
  );
}

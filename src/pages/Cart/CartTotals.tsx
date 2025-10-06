import { S } from "./Cart.styles";
import { formatCurrency } from "@/utils/formatCurrency";

interface CartTotalsProps {
  subtotal: number;
  shipping: number;
  onClear: () => void;
}

export default function CartTotals({
  subtotal,
  shipping,
  onClear,
}: CartTotalsProps) {
  const total = subtotal + shipping;

  return (
    <div>
      <S.TotalPrice>
        <S.TotalField>
          <p className="p-large-bold">Subtotal:</p>
          <p className="label-bold">{formatCurrency(subtotal)}</p>
        </S.TotalField>
        <S.TotalField>
          <p className="p-small">Shipping:</p>
          <p className="label-small">{formatCurrency(shipping)}</p>
        </S.TotalField>
        <S.TotalField>
          <p className="p-large-bold">Total:</p>
          <p className="label-bold">{formatCurrency(total)}</p>
        </S.TotalField>
        <S.Link to="/checkout">Proceed to checkout</S.Link>
      </S.TotalPrice>
      <S.ClearButtonWrapper>
        <S.ClearButton onClick={onClear}>Clear Cart</S.ClearButton>
      </S.ClearButtonWrapper>
    </div>
  );
}

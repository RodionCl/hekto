import { S } from "./Cart.styles";
import { formatCurrency } from "@/utils/formatCurrency";
import { InputNumberStepper } from "@/components/InputNumberStepper";
import { CartItemWithProduct } from "@/hooks/useCartProducts";

interface CartItemRowProps {
  item: CartItemWithProduct;
  onQuantityChange: (id: string, newQuantity: number) => void;
}

export default function CartItemRow({
  item,
  onQuantityChange,
}: CartItemRowProps) {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const newQuantity = e.target.value === "" ? 0 : Number(e.target.value);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <S.Item>
      <S.ItemLeft>
        <S.ProductImgWrapper>
          <img src={item.thumbnail} alt={`${item.name} image`} />
        </S.ProductImgWrapper>
        <S.ProductInfo>
          <S.TitleLink to={`/products/${item.id}`}>
            <p className="subtitle">{item.name}</p>
          </S.TitleLink>
          <p>{formatCurrency(item.price)}</p>
        </S.ProductInfo>
      </S.ItemLeft>

      <S.ItemRight>
        <InputNumberStepper
          value={item.quantity}
          min={0}
          max={10}
          id={`quantity-${item.name}`}
          onIncrement={() => onQuantityChange(item.id, item.quantity + 1)}
          onDecrement={() => onQuantityChange(item.id, item.quantity - 1)}
          onBlur={handleBlur}
        />
        <S.TotalPriceProduct>
          {formatCurrency(item.price * item.quantity)}
        </S.TotalPriceProduct>
      </S.ItemRight>
    </S.Item>
  );
}

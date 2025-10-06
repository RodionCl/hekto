import { useCart } from "@/contexts/CartContext";
import { S } from "./Cart.styles";
import { useCartProducts } from "@/hooks/useCartProducts";
import CartItemRow from "./CartItemRow";
import CartTotals from "./CartTotals";

const shippingPrice = 100;

export default function CartList() {
  const { updateItemQuantity, clear } = useCart();
  const { combinedItems, totalPrice, isFetching } = useCartProducts();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const clampedQuantity = Math.min(Math.max(newQuantity, 0), 10);
    updateItemQuantity(id, clampedQuantity);
  };

  if (isFetching) {
    return <p>Loading cart...</p>;
  }

  if (combinedItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <S.Main>
      <S.List>
        {combinedItems.map((item) => (
          <CartItemRow
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </S.List>
      <CartTotals
        subtotal={totalPrice}
        shipping={shippingPrice}
        onClear={clear}
      />
    </S.Main>
  );
}

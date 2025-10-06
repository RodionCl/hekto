import { useCart } from "@/contexts/CartContext";
import EmptyCart from "@/pages/Cart/EmptyCart";
import CartList from "@/pages/Cart/CartList";

export function Cart() {
  const { items } = useCart();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return <CartList />;
}

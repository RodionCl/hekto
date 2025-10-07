import { useCart } from "@/contexts/CartContext";
import { useFetch } from "@/hooks/useFetch";
import { Product } from "@/interfaces/Product";
import { fetchMultipleProducts } from "@/utils/fetch/fetchProducts";

export interface CartItemWithProduct extends Product {
  quantity: number;
}

export const useCartProducts = () => {
  const { items } = useCart();
  const productIds = items.map((item) => item.id);

  const { fetchedData: products, isFetching } = useFetch<Product[]>(
    () => fetchMultipleProducts(productIds),
    [],
    [],
  );

  const combinedItems = (products || [])
    .map((product) => {
      const cartItem = items.find((item) => item.id === product.id);
      return cartItem ? { ...product, quantity: cartItem.quantity } : null;
    })
    .filter(Boolean) as CartItemWithProduct[];

  const totalPrice = combinedItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  return { combinedItems, totalPrice, isFetching };
};

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CartProduct {
  id: string;
  quantity: number;
}

interface ICartContext {
  items: CartProduct[];
  addItem: (id: string) => void;
  updateItemQuantity: (id: string, amount: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

export const CartContext = createContext<ICartContext>({
  items: [],
  addItem: () => {},
  updateItemQuantity: () => {},
  removeItem: () => {},
  clear: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}
export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartProduct[]>(() => {
    try {
      const localData = localStorage.getItem("cart-items");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart-items", JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart items to localStorage", error);
    }
  }, [items]);

  function addItem(id: string) {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prevItems, { id, quantity: 1 }];
    });
  }

  function updateItemQuantity(id: string, amount: number) {
    if (amount <= 0) {
      removeItem(id);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: amount } : item,
      ),
    );
  }

  function removeItem(id: string) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function clear() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{ items, addItem, updateItemQuantity, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

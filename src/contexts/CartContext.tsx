import { createContext, useContext, useState, ReactNode } from "react";

interface CartProduct {
  id: string;
  quantity: number;
}

interface ICartContext {
  items: CartProduct[];
  addItem: (id: string) => void;
  updateItemQuantity: (id: string, amount: number) => void;
  removeItem: (id: string) => void;
}

export const CartContext = createContext<ICartContext>({
  items: [],
  addItem: () => {},
  updateItemQuantity: () => {},
  removeItem: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}
export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartProduct[]>([]);

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

  return (
    <CartContext.Provider
      value={{ items, addItem, updateItemQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

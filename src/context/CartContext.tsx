import React, { createContext, useContext, useState, useCallback } from "react";
import type { MenuItem } from "@/data/menuData";

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedOptions: Record<string, string>;
  id: string; // unique cart line id
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (item: MenuItem, options?: Record<string, string>) => void;
  removeItem: (cartId: string) => void;
  updateQuantity: (cartId: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((menuItem: MenuItem, selectedOptions: Record<string, string> = {}) => {
    const optionKey = JSON.stringify(selectedOptions);
    setItems(prev => {
      const existing = prev.find(i => i.menuItem.id === menuItem.id && JSON.stringify(i.selectedOptions) === optionKey);
      if (existing) {
        return prev.map(i => i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { menuItem, quantity: 1, selectedOptions, id: `${menuItem.id}-${Date.now()}` }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((cartId: string) => {
    setItems(prev => prev.filter(i => i.id !== cartId));
  }, []);

  const updateQuantity = useCallback((cartId: string, qty: number) => {
    if (qty <= 0) {
      setItems(prev => prev.filter(i => i.id !== cartId));
    } else {
      setItems(prev => prev.map(i => i.id === cartId ? { ...i, quantity: qty } : i));
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => {
    let itemPrice = i.menuItem.price;
    // Add option price adds
    if (i.menuItem.options) {
      for (const opt of i.menuItem.options) {
        const selected = i.selectedOptions[opt.name];
        if (selected) {
          const choice = opt.choices.find(c => c.label === selected);
          if (choice) itemPrice += choice.priceAdd;
        }
      }
    }
    return sum + itemPrice * i.quantity;
  }, 0);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, setIsOpen, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

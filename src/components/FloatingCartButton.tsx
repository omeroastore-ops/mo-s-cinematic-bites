import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const FloatingCartButton = () => {
  const { itemCount, setIsOpen, isOpen } = useCart();

  if (isOpen || itemCount === 0) return null;

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center food-glow hover:scale-110 transition-transform"
    >
      <ShoppingBag className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center font-body">
        {itemCount}
      </span>
    </button>
  );
};

export default FloatingCartButton;

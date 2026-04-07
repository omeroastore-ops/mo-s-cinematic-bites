import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import CheckoutForm from "./CheckoutForm";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, itemCount, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground uppercase">Warenkorb ({itemCount})</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary transition-colors">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {showCheckout ? (
          <CheckoutForm
            onBack={() => setShowCheckout(false)}
            onComplete={() => {
              clearCart();
              setShowCheckout(false);
              setIsOpen(false);
            }}
            total={total}
          />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingBag className="w-12 h-12 mb-3 opacity-30" />
                  <p className="font-body">Dein Warenkorb ist leer</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="bg-secondary rounded-xl p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-semibold text-foreground">{item.menuItem.name}</h4>
                        {Object.entries(item.selectedOptions).length > 0 && (
                          <p className="text-muted-foreground text-xs mt-0.5 font-body">
                            {Object.values(item.selectedOptions).join(", ")}
                          </p>
                        )}
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <Minus className="w-3 h-3 text-foreground" />
                        </button>
                        <span className="font-display text-foreground w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
                        >
                          <Plus className="w-3 h-3 text-foreground" />
                        </button>
                      </div>
                      <span className="text-primary font-display font-bold">
                        {(item.menuItem.price * item.quantity).toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-4 border-t border-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-display text-lg text-foreground uppercase">Gesamt</span>
                  <span className="text-primary font-display text-2xl font-bold">{total.toFixed(2).replace(".", ",")} €</span>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full py-4 bg-primary text-primary-foreground font-display uppercase text-lg tracking-wider rounded-xl food-glow hover:scale-[1.02] transition-transform"
                >
                  Zur Kasse
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

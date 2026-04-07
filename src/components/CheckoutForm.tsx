import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";

interface Props {
  onBack: () => void;
  onComplete: () => void;
  total: number;
}

const CheckoutForm = ({ onBack, onComplete, total }: Props) => {
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [payment, setPayment] = useState<"bar" | "online" | "pickup">("bar");
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || (orderType === "delivery" && !form.address)) {
      toast.error("Bitte fülle alle Pflichtfelder aus.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      toast.success("Bestellung erfolgreich aufgegeben! 🍕");
      onComplete();
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 animate-pulse-glow food-glow">
          <Check className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">Wird verarbeitet...</h3>
        <p className="text-muted-foreground text-center font-body">Deine Bestellung wird vorbereitet</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-4">
        <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4 font-body">
          <ArrowLeft className="w-4 h-4" /> Zurück
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Order type */}
          <div className="flex gap-2">
            {(["delivery", "pickup"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setOrderType(type)}
                className={`flex-1 py-3 rounded-xl font-display uppercase tracking-wider text-sm transition-all ${
                  orderType === type ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}
              >
                {type === "delivery" ? "Lieferung" : "Abholung"}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
            />
            <input
              type="tel"
              placeholder="Telefonnummer *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
            />
            {orderType === "delivery" && (
              <input
                type="text"
                placeholder="Adresse *"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full px-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
              />
            )}
            <input
              type="text"
              placeholder={orderType === "delivery" ? "Gewünschte Lieferzeit" : "Gewünschte Abholzeit"}
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full px-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
            />
            <textarea
              placeholder="Notiz (optional)"
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              rows={2}
              className="w-full px-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body resize-none"
            />
          </div>

          {/* Payment */}
          <div>
            <p className="font-display uppercase text-sm tracking-wider text-muted-foreground mb-2">Zahlung</p>
            <div className="grid grid-cols-3 gap-2">
              {([
                { key: "bar", label: "Bar" },
                { key: "online", label: "Online" },
                { key: "pickup", label: "Bei Abholung" },
              ] as const).map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPayment(key)}
                  className={`py-2 rounded-xl font-body text-sm transition-all ${
                    payment === key ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <div className="flex justify-between items-center mb-3">
              <span className="font-display text-foreground uppercase">Gesamt</span>
              <span className="text-primary font-display text-xl font-bold">{total.toFixed(2).replace(".", ",")} €</span>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-display uppercase text-lg tracking-wider rounded-xl food-glow hover:scale-[1.02] transition-transform"
            >
              Bestellung aufgeben
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

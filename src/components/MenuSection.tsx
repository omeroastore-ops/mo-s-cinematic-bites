import { useState, useRef, useEffect } from "react";
import { categories, menuItems } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { Search } from "lucide-react";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("beliebt");
  const [search, setSearch] = useState("");
  const { addItem } = useCart();
  const tabsRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const filtered = menuItems.filter((item) => {
    const matchCat = activeCategory === "beliebt" ? item.featured : item.category === activeCategory;
    const matchSearch = search === "" || item.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    if (itemsRef.current) {
      const cards = itemsRef.current.querySelectorAll(".menu-item");
      cards.forEach((card, i) => {
        (card as HTMLElement).style.opacity = "0";
        (card as HTMLElement).style.transform = "translateY(16px)";
        setTimeout(() => {
          (card as HTMLElement).style.transition = "all 0.4s ease-out";
          (card as HTMLElement).style.opacity = "1";
          (card as HTMLElement).style.transform = "translateY(0)";
        }, i * 50);
      });
    }
  }, [activeCategory, search]);

  return (
    <section id="speisekarte" className="py-20 md:py-32 px-4 cinematic-gradient">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-2">Interaktiv</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground">Speisekarte</h2>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Suchen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
          />
        </div>

        {/* Category tabs */}
        <div ref={tabsRef} className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide sticky top-0 z-20 bg-background/80 backdrop-blur-lg py-3 -mx-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-display uppercase text-sm tracking-wider transition-all duration-300 shrink-0 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category note */}
        {categories.find(c => c.id === activeCategory)?.note && (
          <p className="text-muted-foreground text-sm text-center mb-6 font-body italic">
            {categories.find(c => c.id === activeCategory)?.note}
          </p>
        )}

        {/* Items */}
        <div ref={itemsRef} className="space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="menu-item flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-foreground truncate">{item.name}</h3>
                  {item.featured && <span className="text-primary text-xs">★</span>}
                  {item.unavailable && <span className="text-destructive text-xs font-body">Nicht verfügbar</span>}
                </div>
                {item.description && <p className="text-muted-foreground text-sm mt-0.5 font-body">{item.description}</p>}
                {item.options && (
                  <div className="flex gap-1.5 mt-1.5 flex-wrap">
                    {item.options[0]?.choices.map((c) => (
                      <span key={c.label} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-body">
                        {c.label} {c.priceAdd > 0 && `+${c.priceAdd.toFixed(2).replace(".", ",")}€`}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-primary font-display text-lg font-bold whitespace-nowrap">
                  {item.priceFrom && "ab "}{item.price.toFixed(2).replace(".", ",")} €
                </span>
                <button
                  onClick={() => !item.unavailable && addItem(item)}
                  disabled={item.unavailable}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-30 disabled:cursor-not-allowed font-display text-xl"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12 font-body">Keine Ergebnisse gefunden.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

import { useRef, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { menuItems } from "@/data/menuData";
import pizzaSalami from "@/assets/pizza-salami.jpg";
import kebabTeller from "@/assets/kebab-teller.jpg";
import rollo from "@/assets/rollo.jpg";
import pizzaInferno from "@/assets/pizza-inferno.jpg";
import heroPizza from "@/assets/hero-pizza.jpg";
import pastaHero from "@/assets/pasta-hero.jpg";

const imageMap: Record<string, string> = {
  "b1": heroPizza,       // Pizza Kebab
  "b2": pizzaSalami,     // Mo's Pizza
  "b3": rollo,           // Mo's Rollo
  "b4": kebabTeller,     // Kebab-Teller
  "b5": kebabTeller,     // Mo's Teller
  "b6": pastaHero,       // Mo's Auflauf
  "p2": pizzaSalami,     // Pizza Salami
  "p6": pizzaInferno,    // Pizza Inferno
  "p7": pizzaInferno,    // Pizza Vito
};

const featured = menuItems.filter(i => i.featured && i.category === "beliebt");

const FeaturedItems = () => {
  const { addItem } = useCart();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
            entry.target.classList.remove("opacity-0", "translate-y-8", "scale-95");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll(".featured-card");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 px-4 relative">
      <div className="absolute inset-0 warm-overlay pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-2">Unsere Bestseller</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-foreground">
            Beliebte Gerichte
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <div
              key={item.id}
              className="featured-card opacity-0 translate-y-8 scale-95 transition-all duration-700 ease-out group relative bg-card rounded-xl overflow-hidden card-glow"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={imageMap[item.id] || heroPizza}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-foreground uppercase">{item.name}</h3>
                {item.description && (
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                )}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-primary font-display text-2xl font-bold">
                    {item.priceFrom && "ab "}{item.price.toFixed(2).replace(".", ",")} €
                  </span>
                  <button
                    onClick={() => addItem(item)}
                    className="px-4 py-2 bg-primary text-primary-foreground font-display uppercase text-sm rounded-lg hover:scale-105 transition-transform"
                  >
                    + Warenkorb
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;

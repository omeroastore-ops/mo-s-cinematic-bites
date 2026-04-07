import { useRef, useEffect } from "react";
import pizzaImg from "@/assets/hero-pizza.jpg";
import kebabImg from "@/assets/kebab-hero.jpg";
import pastaImg from "@/assets/pasta-hero.jpg";

const stories = [
  {
    image: pizzaImg,
    title: "Knusprig & Käsig",
    subtitle: "Pizza wie keine andere",
    desc: "Handgemachter Teig, frische Zutaten, heißer Ofen. Jede Pizza ein Meisterwerk.",
  },
  {
    image: kebabImg,
    title: "Vom Grill",
    subtitle: "Perfekt gewürzt",
    desc: "Zartes Fleisch, traditionell am Spieß gegrillt. Der Geschmack von Papenburg.",
  },
  {
    image: pastaImg,
    title: "Goldbraun überbacken",
    subtitle: "Pasta & Aufläufe",
    desc: "Cremige Soßen, geschmolzener Käse, pure Genussmomente.",
  },
];

const FoodStory = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative">
      {stories.map((story, i) => (
        <div
          key={i}
          ref={(el) => { sectionRefs.current[i] = el; }}
          className="relative h-[80vh] md:h-screen flex items-center overflow-hidden opacity-0 translate-y-12 transition-all duration-1000 ease-out"
        >
          <div className="absolute inset-0">
            <img
              src={story.image}
              alt={story.title}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ transform: "scale(1.1)" }}
            />
            <div className="absolute inset-0 bg-background/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          </div>

          <div className={`relative z-10 px-6 md:px-16 max-w-2xl ${i % 2 === 1 ? "ml-auto text-right" : ""}`}>
            <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-2">
              {story.subtitle}
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-foreground mb-4">
              {story.title}
            </h2>
            <p className="text-foreground/60 text-base md:text-lg max-w-md font-body">
              {story.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FoodStory;

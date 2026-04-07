import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroPizza from "@/assets/hero-pizza.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const img = heroRef.current.querySelector(".hero-img") as HTMLElement;
      const overlay = heroRef.current.querySelector(".hero-overlay") as HTMLElement;
      if (img) {
        img.style.transform = `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.3}px)`;
      }
      if (overlay) {
        overlay.style.opacity = `${Math.min(0.9, 0.4 + scrollY * 0.001)}`;
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafId); };
  }, []);

  const scrollToMenu = () => {
    document.getElementById("speisekarte")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <img
        src={heroPizza}
        alt="Mo's Pizza Hero"
        width={1920}
        height={1080}
        className="hero-img absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none mb-4">
            <span className="text-foreground">Mo's</span>{" "}
            <span className="text-primary text-glow">Pizza</span>
          </h1>
          <p className="font-display text-lg md:text-2xl text-foreground/80 uppercase tracking-[0.2em] mb-2">
            Papenburg
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-foreground/60 text-base md:text-xl mb-8 font-body"
        >
          Frisch. Heiß. Unvergesslich.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToMenu}
            className="px-8 py-4 bg-primary text-primary-foreground font-display uppercase text-lg tracking-wider rounded-lg food-glow hover:scale-105 transition-transform duration-300"
          >
            Jetzt bestellen
          </button>
          <button
            onClick={scrollToMenu}
            className="px-8 py-4 border border-foreground/30 text-foreground font-display uppercase text-lg tracking-wider rounded-lg hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Speisekarte ansehen
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 flex items-center justify-center gap-2 text-foreground/50 text-sm"
        >
          <span className="text-primary">★★★★</span>
          <span>4,4 · 510+ Bewertungen</span>
          <span className="mx-2">·</span>
          <span>Keine Liefergebühr</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

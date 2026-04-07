import { useRef, useEffect } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 px-4 relative">
      <div className="absolute inset-0 warm-overlay pointer-events-none" />
      <div
        ref={ref}
        className="max-w-3xl mx-auto text-center relative z-10 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-2">Über uns</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground mb-6">
          Mo's Pizza Papenburg
        </h2>
        <div className="space-y-4 text-foreground/70 text-base md:text-lg font-body leading-relaxed">
          <p>
            Seit unserer Eröffnung versorgen wir Papenburg mit frischen, handgemachten Gerichten – von knuspriger Pizza
            über saftigen Kebab bis hin zu überbackenen Aufläufen. Bei uns zählen Qualität, Frische und großzügige Portionen.
          </p>
          <p>
            Unser Team bereitet jede Bestellung mit Leidenschaft zu. Ob zum Abholen oder zur Lieferung direkt zu dir nach
            Hause – bei Mo's bekommst du immer heißes, leckeres Essen zu fairen Preisen. Ohne Liefergebühr!
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { number: "510+", label: "Bewertungen" },
            { number: "4,4", label: "Sterne" },
            { number: "0€", label: "Liefergebühr" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="text-primary font-display text-3xl md:text-4xl font-bold">{stat.number}</span>
              <p className="text-muted-foreground text-sm uppercase tracking-wider font-display mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

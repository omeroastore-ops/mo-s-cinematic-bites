const FooterSection = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground uppercase mb-3">
              Mo's <span className="text-primary">Pizza</span>
            </h3>
            <p className="text-muted-foreground text-sm font-body">
              Wiek Rechts 19<br />26871 Papenburg<br />Deutschland
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Kontakt</h4>
            <p className="text-muted-foreground text-sm font-body">
              Tel: 04961 3454<br />
              Keine Liefergebühr
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Rechtliches</h4>
            <div className="space-y-1 text-sm">
              <button
                onClick={() => document.getElementById("impressum")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors block font-body"
              >
                Impressum
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors block font-body">
                Datenschutz
              </button>
            </div>
          </div>
        </div>

        {/* Impressum */}
        <div id="impressum" className="border-t border-border pt-8 mb-8">
          <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Impressum</h4>
          <div className="text-muted-foreground text-xs font-body space-y-1">
            <p>Mo's Pizzeria</p>
            <p>Inhaber: Ouday Houri</p>
            <p>Wiek Rechts 19, 26871 Papenburg, Deutschland</p>
            <p>USt-IdNr.: DE189925905</p>
          </div>
        </div>

        <div className="text-center text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} Mo's Pizza Papenburg. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

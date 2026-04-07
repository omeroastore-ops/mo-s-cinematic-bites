import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 cinematic-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-2">Besuche uns</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-foreground">Kontakt & Standort</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Adresse</h3>
                <p className="text-muted-foreground font-body">Wiek Rechts 19<br />26871 Papenburg, Deutschland</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Telefon</h3>
                <p className="text-muted-foreground font-body">04961 3454</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Öffnungszeiten</h3>
                <p className="text-muted-foreground font-body">Mo–So: 11:00 – 22:00 Uhr</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="tel:049613454"
                className="px-6 py-3 bg-primary text-primary-foreground font-display uppercase tracking-wider rounded-xl hover:scale-105 transition-transform text-center"
              >
                Anrufen
              </a>
              <a
                href="https://www.google.com/maps/place/Wiek+Rechts+19,+26871+Papenburg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground font-display uppercase tracking-wider rounded-xl hover:border-primary hover:text-primary transition-colors text-center"
              >
                Route planen
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden h-64 md:h-auto min-h-[280px] border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.5!2d7.3944!3d53.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b82f0a0a0a0a0a%3A0x0!2sWiek+Rechts+19%2C+26871+Papenburg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
              allowFullScreen
              loading="lazy"
              title="Mo's Pizza Standort"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

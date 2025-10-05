import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  TrendingDown, 
  Users, 
  Globe, 
  Clock,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const benefits = [
    {
      icon: <TrendingDown className="w-12 h-12 text-primary" />,
      title: "Bis zu 50% Kostenersparnis",
      description: "Qualifizierte Mitarbeiter ab 9€/Std. – deutlich günstiger als reguläre Angestellte in Deutschland."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Kein HR-Aufwand",
      description: "Wir übernehmen Recruiting, Interviews und Verträge. Sie können sich auf Ihr Geschäft konzentrieren."
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Mehrsprachig verfügbar",
      description: "Bedienen Sie internationale Kunden mit mehrsprachigen Mitarbeitern nach Bedarf."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Flexibel & Zuverlässig",
      description: "Skalieren Sie Ihr Team je nach Bedarf. Deutschsprachige Mitarbeiter, auf die Sie sich verlassen können."
    }
  ];

  const faqs = [
    {
      question: "Sind die Mitarbeiter wirklich zuverlässig?",
      answer: "Ja, alle unsere Mitarbeiter durchlaufen ein strenges Auswahlverfahren. Wir prüfen Qualifikationen, Sprachkenntnisse und Zuverlässigkeit. Zudem bieten wir Ersatz an, falls ein Mitarbeiter nicht passt."
    },
    {
      question: "Wie gut ist ihr Deutsch?",
      answer: "Alle Mitarbeiter verfügen über sehr gute bis fließende Deutschkenntnisse. Wir testen dies im Vorfeld und stellen sicher, dass die Kommunikation mit Ihren Kunden professionell verläuft."
    },
    {
      question: "Was ist mit Datenschutz?",
      answer: "Datenschutz hat höchste Priorität. Wir arbeiten DSGVO-konform und alle Mitarbeiter werden entsprechend geschult. Auf Wunsch können Vertraulichkeitsvereinbarungen getroffen werden."
    },
    {
      question: "Wie kontrolliere ich die Arbeit?",
      answer: "Sie erhalten volle Transparenz: Arbeitszeiterfassung, Qualitätsberichte und direkten Kontakt zu Ihren Mitarbeitern. Wir bieten auch Tools zur Überwachung der Servicequalität an."
    },
    {
      question: "Warum so günstig?",
      answer: "Durch unsere Standorte und effizienten Prozesse können wir Mitarbeiter zu fairen Löhnen beschäftigen und Ihnen gleichzeitig deutliche Kostenvorteile bieten – eine Win-Win-Situation."
    },
    {
      question: "Was passiert, wenn der Mitarbeiter nicht passt?",
      answer: "Sollte ein Mitarbeiter nicht Ihren Erwartungen entsprechen, stellen wir schnellstmöglich kostenlosen Ersatz. Ihre Zufriedenheit steht an erster Stelle."
    }
  ];

  const handleCTAClick = () => {
    // Google Form link will be inserted here
    window.open("https://forms.gle/u58BTNJKHU2f3kLn7", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-[2.55rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Kundenservice-Mitarbeiter ab{" "}
              <span className="text-primary">9€/Std.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Bis zu 50% günstiger als ein normaler Angestellter
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Qualifizierte, deutschsprachige Support-Mitarbeiter für Ihren Online-Shop – 
              ohne HR-Aufwand, flexibel und zuverlässig.
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl group mx-auto w-full sm:w-auto"
            >
              Jetzt Stundensatz berechnen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ihr Shop wächst – aber auch Ihre Kosten
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Mit dem Umsatz steigen auch die Support-Anfragen. Neue Mitarbeiter in Deutschland 
              sind teuer: Gehälter ab 2.500€/Monat, plus Sozialabgaben, Recruiting-Kosten und 
              HR-Aufwand. Das frisst Ihre Gewinne auf.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block bg-primary/10 text-primary px-5 py-2.5 rounded-full text-base font-semibold mb-6">
              Die Lösung
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              CloudBüro: Professioneller Support,{" "}
              <span className="text-primary">halbe Kosten</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Mit CloudBüro erhalten Sie qualifizierte Kundenservice-Mitarbeiter ab nur 9€/Std. 
              Deutschsprachig, zuverlässig und professionell – ohne den Aufwand und die Kosten 
              einer klassischen Einstellung.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ihre Vorteile auf einen Blick
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-card rounded-2xl px-6 sm:px-12 py-12 shadow-xl border-2 border-primary/20">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center max-w-2xl mx-auto">
              Bereit für planbare Personalkosten?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Erhalten Sie eine individuelle Kostenberechnung und erfahren Sie, 
              wie viel Sie mit CloudBüro sparen können.
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl group mx-auto w-full sm:w-auto"
            >
              Stundensatz berechnen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="mt-8 flex flex-col items-start gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-center sm:gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary" />
                <span>Unverbindlich</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary" />
                <span>Keine Verpflichtung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary" />
                <span>Schnelle Antwort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-muted-foreground">
              Alles, was Sie über CloudBüro wissen müssen
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2025 CloudBüro. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

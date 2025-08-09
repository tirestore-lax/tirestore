// New Tire Store — Parody one-pager

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeDollarSign, Gauge, Circle, Truck } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const handleCTA = (label: string) => {
    toast(`${label}: Success! Your order of 0 tires ships never.`, {
      description: "Parody only. Please do not actually wait by the mailbox.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b">
        <nav className="container mx-auto flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-3" aria-label="New Tire Store home">
            <img src="/lovable-uploads/912df28a-787d-40d0-bae2-2c9190ed7ea4.png" alt="New Tire Store parody tire shop logo" className="h-10 w-auto" />
            <span className="sr-only">New Tire Store</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#deals" className="hover:underline">Deals</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => handleCTA("Call Us")}>Call 555‑TIRE‑LOL</Button>
            <Button variant="hero" onClick={() => handleCTA("Shop Now")}>Shop Definitely Real Deals</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="bg-hero-gradient">
            <div className="tread animate-tread-slow absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" />
            <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-20">
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gradient-primary">
                  New Tire Store
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  We sell tires so round, they completed geometry. Free imaginary air, lightning‑fast slow shipping, and prices that go in circles.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" onClick={() => handleCTA("Get Tires")}>Get Tires</Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#deals">See Today’s Circular Deals</a>
                  </Button>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Warning: This site is a parody. Do not attempt burnout indoors.</p>
              </div>
              <div className="relative flex justify-center md:justify-end">
                <img
                  src="/lovable-uploads/912df28a-787d-40d0-bae2-2c9190ed7ea4.png"
                  alt="New Tire Store logo hero"
                  className="h-48 md:h-64 w-auto drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="container mx-auto py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:translate-y-[-2px] transition-transform">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Circle className="text-primary" /> Perfectly Round</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Our QA team measured the roundness with a pizza—scientifically delicious.</CardContent>
            </Card>
            <Card className="hover:translate-y-[-2px] transition-transform">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Gauge className="text-primary" /> Performance-ish</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">0–60 eventually. Speed feeling may vary by imagination strength.</CardContent>
            </Card>
            <Card className="hover:translate-y-[-2px] transition-transform">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BadgeDollarSign className="text-primary" /> Priceless Prices</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Deals so good you’ll think we made them up. Because… yes.</CardContent>
            </Card>
          </div>
        </section>

        <section id="deals" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">Today’s Circular Deals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Budget Rounders", price: "$19.99*", note: "*Per corner. Tires not included." },
              { name: "All‑Season‑ish", price: "$49.99", note: "Works in all seasons, opinions may differ." },
              { name: "Performance Wow", price: "$99.99", note: "Adds +5 HP to your imagination." },
            ].map((d, i) => (
              <Card key={i} className="group">
                <CardHeader>
                  <CardTitle>{d.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-primary">{d.price}</p>
                  <p className="text-xs text-muted-foreground mt-2">{d.note}</p>
                  <Button className="mt-4" variant="hero" onClick={() => handleCTA(`Added ${d.name}`)}>
                    Add to Cartish
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="h-4 w-4" /> Free delivery in 3–6 lunar cycles. Maybe.
          </div>
        </section>

        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">What Drivers Pretend To Say</h2>
          <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
            <Card><CardContent className="pt-6">“The roundest tires I’ve never bought.” — Speedy G.</CardContent></Card>
            <Card><CardContent className="pt-6">“My car feels… circular.” — A. Driver</CardContent></Card>
            <Card><CardContent className="pt-6">“Free air? Sold!” — Breezy P.</CardContent></Card>
          </div>
        </section>

        <section id="faq" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>Are these tires real?</AccordionTrigger>
              <AccordionContent>As real as a unicorn doing a burnout. This site is a parody.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Do you offer free air?</AccordionTrigger>
              <AccordionContent>Yes. Bring any imaginary tire, and we’ll fill it to 32 PSI of pure confidence.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Shipping times?</AccordionTrigger>
              <AccordionContent>Somewhere between now and later. Our calendar is a circle.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto py-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} New Tire Store — A Parody Experience. All imaginary rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

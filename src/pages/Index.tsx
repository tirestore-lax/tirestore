// New Tire Store — Parody one-pager

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BadgeDollarSign, Gauge, Circle, Truck, Wrench, RefreshCcw, ShieldCheck, Star, CreditCard, MapPin, Phone } from "lucide-react";
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
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="story-link">Services</a>
            <a href="#brands" className="story-link">Brands</a>
            <a href="#deals" className="story-link">Deals</a>
            <a href="#reviews" className="story-link">Reviews</a>
            <a href="#contact" className="story-link">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+15558473565" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"><Phone className="h-4 w-4" /> (555) 847-3565</a>
            <Button variant="outline" onClick={() => handleCTA("Get Quote")}>Get Quote</Button>
            <Button variant="hero" onClick={() => handleCTA("Schedule Appointment")}>Schedule</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="bg-hero-gradient">
            <div className="tread animate-tread-slow absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" />
            <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-20">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gradient-primary">
                  Trusted Tire Sales & Service
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Honest pricing, expert installation, and same‑day appointments when available. Also, free air high‑fives.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" onClick={() => handleCTA("Schedule Appointment")}>
                    Schedule Appointment
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#deals">View Deals</a>
                  </Button>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Road Hazard Warranty</li>
                  <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Same‑Day Install</li>
                  <li className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-primary" /> 0% APR Options</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> Local, Friendly Support</li>
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">Small print: this is a parody. Our lawyers drive very round cars.</p>
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

        <section id="services" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Wrench className="text-primary" /> Install & Balance</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Professional mount and balance on modern equipment.</CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Gauge className="text-primary" /> Computerized Alignment</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Straight steering, even wear, happier road trips.</CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><RefreshCcw className="text-primary" /> Rotations</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Maximize tire life with quick, regular rotations.</CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShieldCheck className="text-primary" /> Road Hazard</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Optional coverage for nails, mysteries, and Mondays.</CardContent>
            </Card>
          </div>
        </section>

        <section id="brands" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-6">Top Brands We Carry</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {['Michelin', 'Goodyear', 'Bridgestone', 'Continental', 'Pirelli', 'Hankook'].map((b) => (
              <span key={b} className="inline-flex items-center rounded-md border px-3 py-1 bg-card text-card-foreground">
                {b}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Brand names shown as examples — please remember this website is a parody.</p>
        </section>

        <section id="deals" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">Featured Deals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'All‑Season Package', price: '$499 installed', note: 'Set of 4 popular sizes. Includes mount & balance. Taxes/fees not included. Includes a free wink.' },
              { name: 'Buy 3, Get 1', price: 'Mix & Match', note: 'On select models. Ask us where the fourth one came from.' },
              { name: 'Performance Special', price: '$799 installed', note: 'For spirited commuting and heroic school runs.' },
            ].map((d, i) => (
              <Card key={i} className="group hover-scale">
                <CardHeader>
                  <CardTitle>{d.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-primary">{d.price}</p>
                  <p className="text-xs text-muted-foreground mt-2">{d.note}</p>
                  <Button className="mt-4" variant="hero" onClick={() => handleCTA(`Quote: ${d.name}`)}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="h-4 w-4" /> Same‑day install available on most in‑stock sizes.
          </div>
        </section>

        <section id="reviews" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
            <Card className="hover-scale"><CardContent className="pt-6">
              <div className="flex text-primary mb-2">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-4 w-4" />))}</div>
              “Fast install and fair pricing. My car rolls great again.” — Jamie R.
            </CardContent></Card>
            <Card className="hover-scale"><CardContent className="pt-6">
              <div className="flex text-primary mb-2">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-4 w-4" />))}</div>
              “Helpful team and they explained options clearly. Also very round.” — Priya K.
            </CardContent></Card>
            <Card className="hover-scale"><CardContent className="pt-6">
              <div className="flex text-primary mb-2">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-4 w-4" />))}</div>
              “Booked in the morning, back on the road by lunch.” — Marco L.
            </CardContent></Card>
          </div>
        </section>

        <section id="contact" className="container mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Request an Appointment</h2>
              <form
                className="space-y-4"
                onSubmit={(e) => { e.preventDefault(); handleCTA("Appointment Request"); }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Alex Driver" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 847-3565" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Vehicle / Tire Size</Label>
                  <Textarea id="message" placeholder="e.g., 2018 Civic — 205/55R16" className="min-h-[96px]" />
                </div>
                <div className="flex gap-3">
                  <Button type="submit" variant="hero">Submit Request</Button>
                  <Button type="button" variant="outline" asChild>
                    <a href="tel:+15558473565">Call Now</a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">We respond quickly during business hours. Response may include tasteful tire puns.</p>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Location & Hours</h2>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="h-64 md:h-72 bg-hero-gradient flex items-center justify-center text-sm text-muted-foreground">
                      <div className="text-center">
                        <MapPin className="mx-auto text-primary mb-2" />
                        123 Rubber Rd, Inflatia, PS
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2 font-medium text-foreground">Business Hours</p>
                  <ul className="grid grid-cols-2 gap-y-1">
                    <li>Mon–Fri</li><li className="text-right">8:00a – 6:00p</li>
                    <li>Sat</li><li className="text-right">9:00a – 3:00p</li>
                    <li>Sun</li><li className="text-right">Closed (we rotate)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>How long does an install take?</AccordionTrigger>
              <AccordionContent>Most sets are installed in about an hour. If your car argues with our alignment rack, it could be longer.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Do you price match?</AccordionTrigger>
              <AccordionContent>Yes, on comparable tires from local shops. We also match high‑fives at no charge.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Is this a real tire store?</AccordionTrigger>
              <AccordionContent>This site looks real on purpose, but it’s a parody for fun. Please enjoy responsibly and rotate your humor every 6,000 miles.</AccordionContent>
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

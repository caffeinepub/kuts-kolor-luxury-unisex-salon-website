import { Scissors, Palette, Sparkles, Droplet } from 'lucide-react';
import { Section, SectionHeader } from '../components/branding/Section';

export default function ServicesPage() {
  const hairServices = [
    'Haircuts & Styling',
    'Hair Treatments',
    'Hair Colour',
    'Highlights & Balayage',
    'Hair Spa',
    'Keratin Treatment',
    'Smoothening',
    'Rebonding',
  ];

  const skinServices = [
    'Facials',
    'Clean-up',
    'Bleach',
    'De-tan',
    'Anti-aging Treatments',
    'Skin Polishing',
  ];

  const nailServices = [
    'Manicure',
    'Pedicure',
    'Nail Art',
    'Gel Nails',
    'Nail Extensions',
    'Nail Care',
  ];

  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            title="Our Services"
            subtitle="Expert grooming and beauty services for everyone"
            centered
          />
        </div>
      </Section>

      {/* Hair Services - Featured */}
      <Section className="bg-gradient-to-br from-accent-gold/5 via-background to-warm-100/10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-accent-gold/10 p-4">
                <Scissors className="h-10 w-10 text-accent-gold" />
              </div>
            </div>
            <h2 className="mb-3 font-serif text-3xl font-bold">Hair Services</h2>
            <p className="text-lg text-muted-foreground">
              Our specialty - Expert hair care, treatments, and colour
            </p>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-2 border-accent-gold/50 bg-card p-6 shadow-md">
              <div className="mb-4 flex items-center gap-3">
                <Palette className="h-6 w-6 text-accent-gold" />
                <h3 className="font-serif text-xl font-bold">Hair Treatments</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Specialized treatments to restore, strengthen, and revitalize your hair
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  Hair Spa & Deep Conditioning
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  Keratin Treatment
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  Smoothening & Rebonding
                </li>
              </ul>
            </div>

            <div className="rounded-lg border-2 border-accent-gold/50 bg-card p-6 shadow-md">
              <div className="mb-4 flex items-center gap-3">
                <Droplet className="h-6 w-6 text-accent-gold" />
                <h3 className="font-serif text-xl font-bold">Hair Colour</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Professional colouring services with premium products
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  Full Colour & Root Touch-up
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  Highlights & Balayage
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  Fashion Colours
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h4 className="mb-4 font-semibold">Complete Hair Services</h4>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {hairServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Skin Services */}
      <Section>
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-accent-gold/10 p-4">
                <Sparkles className="h-10 w-10 text-accent-gold" />
              </div>
            </div>
            <h2 className="mb-3 font-serif text-3xl font-bold">Skin Services</h2>
            <p className="text-lg text-muted-foreground">
              Professional skin care treatments for a radiant glow
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {skinServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-md bg-muted/30 p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="h-2 w-2 rounded-full bg-accent-gold" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Nail Services */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-accent-gold/10 p-4">
                <Sparkles className="h-10 w-10 text-accent-gold" />
              </div>
            </div>
            <h2 className="mb-3 font-serif text-3xl font-bold">Nail Services</h2>
            <p className="text-lg text-muted-foreground">
              Complete nail care and beautification services
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {nailServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-md bg-muted/30 p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="h-2 w-2 rounded-full bg-accent-gold" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold">Book Your Service Today</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Experience quality services at affordable prices
          </p>
          <a
            href="https://dingg.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent-gold px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-gold/90"
          >
            Book Appointment
          </a>
        </div>
      </Section>
    </>
  );
}

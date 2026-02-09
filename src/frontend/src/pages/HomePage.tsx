import { Link } from '@tanstack/react-router';
import { Phone, Sparkles, Scissors, Palette } from 'lucide-react';
import { Section, SectionHeader } from '../components/branding/Section';

export default function HomePage() {
  const services = [
    {
      icon: Scissors,
      title: 'Hair Services',
      description: 'Expert cuts, styling, and treatments',
      highlight: true,
    },
    {
      icon: Palette,
      title: 'Hair Colour',
      description: 'Professional coloring and highlights',
      highlight: true,
    },
    {
      icon: Sparkles,
      title: 'Skin & Nails',
      description: 'Complete beauty and grooming',
      highlight: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-background to-warm-100/30">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/salon-hero.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight md:text-6xl">
              KUTS & KOLOR
              <span className="mt-2 block text-3xl text-accent-gold md:text-5xl">
                Luxury Unisex Salon
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Your perfect destination for grooming and beauty services. Expert hair treatments, hair
              colour, skin care, and nail services at affordable prices.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://dingg.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent-gold px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-gold/90"
              >
                Book Appointment
              </a>
              <a
                href="tel:09167860528"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-accent-gold px-8 py-3 text-base font-medium text-accent-gold transition-colors hover:bg-accent-gold/10"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="Our Expertise"
          subtitle="Quality services in hair, skin, and nails"
          centered
        />
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg border bg-card p-8 text-center transition-all hover:shadow-lg ${
                  service.highlight ? 'border-accent-gold/50 shadow-md' : 'border-border'
                }`}
              >
                {service.highlight && (
                  <div className="absolute right-4 top-4 rounded-full bg-accent-gold px-3 py-1 text-xs font-medium text-white">
                    Specialty
                  </div>
                )}
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-accent-gold/10 p-4">
                    <Icon className="h-8 w-8 text-accent-gold" />
                  </div>
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-md border border-accent-gold px-6 py-3 text-base font-medium text-accent-gold transition-colors hover:bg-accent-gold/10"
          >
            View All Services
          </Link>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeader
              title="Why Choose KUTS & KOLOR"
              subtitle="Experience luxury grooming at its finest"
            />
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold/10">
                  <Sparkles className="h-5 w-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Expert Stylists</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized in hair treatments and hair colour with years of experience
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold/10">
                  <Sparkles className="h-5 w-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Premium Products</h4>
                  <p className="text-sm text-muted-foreground">
                    Quality products and services at affordable prices
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold/10">
                  <Sparkles className="h-5 w-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Spacious Salon</h4>
                  <p className="text-sm text-muted-foreground">
                    600 sq ft of comfortable, modern space in Mumbai Central
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/assets/generated/gallery-01.dim_1200x900.png"
              alt="Salon interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-accent-gold/10 via-background to-warm-100/20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Ready for a New Look?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Book your appointment today and experience luxury grooming at KUTS & KOLOR
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://dingg.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-accent-gold px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-gold/90"
            >
              Book on dingg.app
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-accent-gold px-8 py-3 text-base font-medium text-accent-gold transition-colors hover:bg-accent-gold/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

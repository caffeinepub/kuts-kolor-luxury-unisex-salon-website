import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Section, SectionHeader } from '../components/branding/Section';

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Contact Us"
            subtitle="Visit us or get in touch for appointments"
            centered
          />

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-accent-gold/10 p-3">
                    <Phone className="h-5 w-5 text-accent-gold" />
                  </div>
                  <h3 className="font-semibold">Phone</h3>
                </div>
                <a
                  href="tel:09167860528"
                  className="text-lg text-accent-gold hover:underline"
                >
                  091678 60528
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  Call us to book your appointment
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-accent-gold/10 p-3">
                    <Clock className="h-5 w-5 text-accent-gold" />
                  </div>
                  <h3 className="font-semibold">Hours</h3>
                </div>
                <p className="text-lg">Open · Closes 9 pm</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-accent-gold/10 p-3">
                    <ExternalLink className="h-5 w-5 text-accent-gold" />
                  </div>
                  <h3 className="font-semibold">Book Online</h3>
                </div>
                <a
                  href="https://dingg.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-gold hover:underline"
                >
                  Book on dingg.app
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-accent-gold/10 p-3">
                  <MapPin className="h-5 w-5 text-accent-gold" />
                </div>
                <h3 className="font-semibold">Address</h3>
              </div>
              <address className="not-italic">
                <p className="mb-2 text-lg font-medium">KUTS & KOLOR Luxury Unisex Salon</p>
                <p className="text-muted-foreground">
                  Shop no. 9, Ground Floor, 3, Lamington Rd
                  <br />
                  Navjeevan Society, Navjeevan Area
                  <br />
                  Dalal Estate, Mumbai Central
                  <br />
                  Mumbai, Maharashtra 400008
                </p>
                <p className="mt-4 text-sm font-medium">Located in:</p>
                <p className="text-sm text-muted-foreground">
                  Navjivan Commercial Premises CHS
                  <br />
                  Mumbai Central
                </p>
              </address>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-lg bg-gradient-to-br from-accent-gold/10 via-background to-warm-100/20 p-8 text-center">
            <h3 className="mb-4 font-serif text-2xl font-bold">Ready to Visit?</h3>
            <p className="mb-6 text-muted-foreground">
              Book your appointment today and experience luxury grooming
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
      </Section>
    </>
  );
}

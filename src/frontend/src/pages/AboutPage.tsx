import { MapPin, Users, Award } from 'lucide-react';
import { Section, SectionHeader } from '../components/branding/Section';

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="About KUTS & KOLOR"
            subtitle="Your destination for luxury grooming and beauty"
            centered
          />

          <div className="prose prose-lg mx-auto mb-12 text-muted-foreground">
            <p>
              KUTS & KOLOR Luxury Unisex Salon at Mumbai Central, Navjivan Society is a 600 sq ft
              salon. A perfect destination for grooming and beauty services, which provides you with
              expert services in hair, skin, and nails.
            </p>
            <p>
              We specialize in hair treatments and hair colour, bringing years of expertise and
              passion to every service. We believe in quality services and affordable prices,
              ensuring that luxury grooming is accessible to everyone.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-accent-gold/10 p-4">
                  <MapPin className="h-8 w-8 text-accent-gold" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground">
                Mumbai Central
                <br />
                Navjivan Society
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-accent-gold/10 p-4">
                  <Users className="h-8 w-8 text-accent-gold" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">Areas Served</h3>
              <p className="text-sm text-muted-foreground">India</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-accent-gold/10 p-4">
                  <Award className="h-8 w-8 text-accent-gold" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Hair Treatments
                <br />& Hair Colour
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <SectionHeader title="Our Commitment" centered />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 font-serif text-xl font-bold">Quality Services</h3>
              <p className="text-muted-foreground">
                We are committed to providing the highest quality grooming and beauty services using
                premium products and the latest techniques.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 font-serif text-xl font-bold">Affordable Prices</h3>
              <p className="text-muted-foreground">
                Luxury doesn't have to be expensive. We offer competitive pricing without
                compromising on quality or service.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 font-serif text-xl font-bold">Expert Team</h3>
              <p className="text-muted-foreground">
                Our skilled professionals are trained in the latest hair, skin, and nail care
                techniques to give you the best results.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 font-serif text-xl font-bold">Comfortable Space</h3>
              <p className="text-muted-foreground">
                Our spacious 600 sq ft salon provides a relaxing and comfortable environment for all
                your grooming needs.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

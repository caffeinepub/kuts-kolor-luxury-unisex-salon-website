import { Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'kuts-kolor-salon'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-accent-gold">KUTS & KOLOR</h3>
            <p className="text-sm text-muted-foreground">
              Luxury Unisex Salon
              <br />
              Mumbai Central, Mumbai
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:09167860528" className="flex items-center gap-2 hover:text-accent-gold">
                <Phone className="h-4 w-4" />
                091678 60528
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Mumbai Central, Mumbai</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Book Appointment</h4>
            <a
              href="https://dingg.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-accent-gold px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-gold/90"
            >
              Book on dingg.app
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} KUTS & KOLOR Luxury Unisex Salon. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 fill-accent-gold text-accent-gold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-accent-gold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

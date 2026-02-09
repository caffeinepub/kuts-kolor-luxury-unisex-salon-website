import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Scissors } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold tracking-tight text-accent-gold">
          <Scissors className="h-6 w-6" />
          <span>KUTS & KOLOR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent-gold ${
                isActive(link.path) ? 'text-accent-gold' : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:09167860528"
            className="rounded-md bg-accent-gold px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-gold/90"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-accent-gold ${
                  isActive(link.path) ? 'text-accent-gold' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:09167860528"
              className="inline-flex w-full items-center justify-center rounded-md bg-accent-gold px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-gold/90"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoMark from '../assets/logo-mark.png';
import { NAV_LINKS } from '../lib/constants';
import GlowButton from './ui/GlowButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[var(--color-ink)]/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="focus-ring flex items-center gap-2.5">
          <img src={logoMark} alt="" width={169} height={159} className="size-9 rounded-lg" />
          <span className="font-[var(--font-display)] text-lg font-bold tracking-[0.08em] text-ivory">
            TATVEIN
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring text-sm font-medium text-[var(--color-mist)] transition-colors hover:text-[var(--color-gold-300)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <GlowButton toForm size="md">
            Register Now
          </GlowButton>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring flex size-10 items-center justify-center rounded-full border border-white/10 text-ivory md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[var(--color-ink)]/98 px-5 pb-8 pt-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block rounded-lg px-3 py-3 text-base font-medium text-ivory/90 transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <GlowButton toForm size="lg" className="mt-4 w-full">
            Register Now
          </GlowButton>
        </div>
      )}
    </header>
  );
}

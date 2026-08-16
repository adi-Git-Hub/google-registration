import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from '../lib/constants';
import Reveal from './ui/Reveal';

export default function Contact() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="glass flex flex-col items-center gap-6 rounded-3xl px-8 py-12 text-center sm:px-12">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan-300)]">
            Have Questions?
          </span>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-medium text-[var(--color-mist)]">Call / WhatsApp</span>
            <span className="font-[var(--font-display)] text-2xl font-bold tracking-wide text-ivory sm:text-3xl">
              {CONTACT_PHONE_DISPLAY}
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[var(--color-gold-300)] to-[var(--color-gold-500)] px-6 py-3 text-sm font-semibold text-[#1a1206] shadow-[var(--shadow-gold-glow)] transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" strokeWidth={2.5} />
              WhatsApp
            </a>
            <a
              href={TEL_URL}
              className="glass focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:border-[var(--color-gold-400)]/60 hover:-translate-y-0.5"
            >
              <Phone className="size-4" strokeWidth={2.5} />
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

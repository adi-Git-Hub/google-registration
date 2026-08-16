import { PRICING } from '../lib/constants';
import GlowButton from './ui/GlowButton';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-gold-500)]/10 blur-[140px]" />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Pricing" title="Start Your Industry Journey" className="mx-auto mb-12" />

        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-12 text-center sm:px-14 sm:py-16">
            <div
              aria-hidden
              className="bg-circuit pointer-events-none absolute inset-0 opacity-40"
            />
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan-300)]">
                {PRICING.eyebrow}
              </span>
              <p className="text-gradient-gold mt-4 font-[var(--font-display)] text-5xl font-extrabold sm:text-6xl">
                {PRICING.amount}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-mist)]">
                {PRICING.unit}
              </p>

              <p className="mt-6 max-w-md text-balance text-sm leading-relaxed text-[var(--color-mist)] sm:text-base">
                {PRICING.note}
              </p>

              <div className="mt-9">
                <GlowButton toForm size="lg">
                  Register Now
                </GlowButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

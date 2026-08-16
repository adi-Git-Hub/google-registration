import { TIMELINE } from '../lib/constants';
import Reveal from './ui/Reveal';

export default function RegistrationStatus() {
  return (
    <section className="relative border-y border-white/5 bg-[var(--color-surface)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold-400)]/40 bg-[var(--color-gold-500)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-300)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-gold-400)] opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-[var(--color-gold-400)]" />
            </span>
            Registration Is Open
          </span>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-[var(--color-line-gold)] to-transparent sm:block"
          />
          {TIMELINE.map((step, i) => (
            <Reveal key={step.range} delay={i * 0.1} className="relative">
              <div className="glass flex flex-col items-center gap-3 rounded-2xl px-6 py-8 text-center sm:items-start sm:text-left">
                <span className="relative z-10 flex size-3 rounded-full bg-[var(--color-gold-400)] shadow-[0_0_0_5px_rgba(216,168,87,0.15)] sm:mb-2" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-cyan-300)]">
                  {step.range}
                </span>
                <span className="font-[var(--font-display)] text-lg font-bold text-ivory">{step.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

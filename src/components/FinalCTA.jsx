import GlowButton from './ui/GlowButton';
import Reveal from './ui/Reveal';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-circuit pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-cyan-500)]/8 blur-[160px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight text-ivory sm:text-4xl md:text-5xl">
            Ready to Build Something Real?
          </h2>
          <p className="max-w-xl text-balance text-base leading-relaxed text-[var(--color-mist)] sm:text-lg">
            Join a live, hands-on technical program designed around real projects, practical
            workflows and industry-oriented learning.
          </p>
          <div className="mt-2">
            <GlowButton toForm size="lg">
              Register Now
            </GlowButton>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-gold-300)]/80">
            Registration closes on 19 August 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}

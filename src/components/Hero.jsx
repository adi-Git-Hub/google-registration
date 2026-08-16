import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsapSetup';
import { useReducedMotion } from '../lib/useReducedMotion';
import GlowButton from './ui/GlowButton';
import HeroBenefitsStrip from './HeroBenefitsStrip';
import HeroPriceBanner from './HeroPriceBanner';
import HeroTechOrbit from './HeroTechOrbit';

export default function Hero() {
  const rootRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('[data-hero-badge]', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(
          '[data-hero-line]',
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          '-=0.35'
        )
        .fromTo('[data-hero-copy]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo(
          '[data-hero-meta]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          '-=0.45'
        )
        .fromTo(
          '[data-hero-cta]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '[data-hero-price]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.3'
        )
        .fromTo(
          '[data-hero-tech]',
          { opacity: 0, y: 12, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08 },
          '-=0.5'
        );
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="top" ref={rootRef} className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="bg-circuit pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--color-gold-500)]/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[30%] h-[380px] w-[380px] rounded-full bg-[var(--color-cyan-500)]/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="relative z-10 flex flex-col items-start text-left">
          <div
            data-hero-badge
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-gold)] bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-300)]"
          >
            <span className="size-1.5 rounded-full bg-[var(--color-gold-400)]" />
            Live Industry Programs
          </div>

          <h1 className="overflow-hidden">
            <span
              data-hero-line
              className="block font-[var(--font-display)] text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-ivory sm:text-6xl md:text-7xl"
            >
              Grow Skills.
            </span>
          </h1>
          <p className="overflow-hidden">
            <span
              data-hero-line
              className="text-gradient-gold block font-[var(--font-display)] text-5xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              Build Future.
            </span>
          </p>
          <p className="mt-4 overflow-hidden">
            <span data-hero-line className="block text-lg font-medium text-[var(--color-mist)] sm:text-xl">
              Live Technical Training Programs
            </span>
          </p>

          <p
            data-hero-copy
            className="mt-7 max-w-xl text-balance text-base leading-relaxed text-[var(--color-mist)] sm:text-lg"
          >
            Learn through live classes, hands-on projects, industry workflows and expert
            mentorship. Build in-demand skills that help you grow your career in tech.
          </p>

          <div
            data-hero-meta
            className="glass mt-9 inline-flex flex-col gap-1 rounded-2xl px-6 py-4 sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-cyan-300)]">
              Live Classes Begin
            </span>
            <span className="h-px w-8 bg-[var(--color-line-gold)] sm:h-8 sm:w-px" />
            <span className="font-[var(--font-display)] text-xl font-bold text-ivory">20 August 2026</span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <div data-hero-cta>
              <GlowButton toForm size="lg" className="w-full sm:w-auto">
                Register Now
              </GlowButton>
            </div>
            <div data-hero-cta>
              <GlowButton variant="secondary" size="lg" href="#programs" icon={false} className="w-full sm:w-auto">
                Explore Programs
              </GlowButton>
            </div>
          </div>

          <div className="mt-8 w-full max-w-md">
            <HeroPriceBanner />
          </div>
        </div>

        <div className="relative z-0 order-first lg:order-none">
          <HeroTechOrbit />
        </div>
      </div>

      <div className="relative z-10 px-5 sm:px-8">
        <HeroBenefitsStrip />
      </div>
    </section>
  );
}

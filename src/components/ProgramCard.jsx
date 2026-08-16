import { useRef } from 'react';
import { Check } from 'lucide-react';
import { useReducedMotion } from '../lib/useReducedMotion';
import GlowButton from './ui/GlowButton';
import Reveal from './ui/Reveal';

export default function ProgramCard({ program, delay = 0 }) {
  const cardRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const handlePointerMove = (e) => {
    if (reducedMotion) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`);
    card.style.setProperty('--ry', `${(x * 9).toFixed(2)}deg`);
    card.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <Reveal delay={delay} className="[perspective:1400px]">
      <article
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          transform:
            'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateZ(0)',
        }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-[var(--color-surface-2)] p-8 shadow-2xl shadow-black/40 transition-transform duration-300 ease-out will-change-transform hover:border-[var(--color-gold-400)]/50 sm:p-9"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(216,168,87,0.14), transparent 60%)',
          }}
        />
        <div
          aria-hidden
          className="bg-circuit pointer-events-none absolute inset-0 opacity-40"
        />

        <div className="relative z-10 flex flex-1 flex-col">
          <span className="font-[var(--font-display)] text-sm font-bold tracking-[0.3em] text-[var(--color-gold-400)]/70">
            PROGRAM {program.index}
          </span>

          <h3 className="mt-4 font-[var(--font-display)] text-2xl font-bold leading-tight text-ivory sm:text-[1.75rem]">
            {program.name}
            {program.suffix && (
              <span className="text-gradient-gold block text-xl sm:text-2xl">{program.suffix}</span>
            )}
          </h3>

          <ul className="mt-7 flex flex-1 flex-col gap-3.5">
            {program.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-[var(--color-mist)] sm:text-[15px]">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold-500)]/15 text-[var(--color-gold-300)]">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <GlowButton toForm size="lg" className="w-full">
              {program.ctaLabel}
            </GlowButton>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

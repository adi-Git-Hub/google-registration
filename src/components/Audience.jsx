import { GraduationCap, Rocket, Briefcase, Repeat2 } from 'lucide-react';
import { AUDIENCE } from '../lib/constants';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const ICONS = [GraduationCap, Rocket, Briefcase, Repeat2];

export default function Audience() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Who It's For" title="Built for Your Career Stage" className="mx-auto mb-16" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col gap-5 rounded-2xl border border-white/8 bg-[var(--color-surface-2)]/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-cyan-400)]/40">
                  <span className="flex size-12 items-center justify-center rounded-full border border-[var(--color-line-gold)] text-[var(--color-gold-300)] transition-colors duration-300 group-hover:border-[var(--color-cyan-400)]/50 group-hover:text-[var(--color-cyan-300)]">
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-[var(--font-display)] text-lg font-bold text-ivory">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-mist)]">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

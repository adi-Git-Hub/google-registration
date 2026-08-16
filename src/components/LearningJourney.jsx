import { BookOpen, Hammer, Rocket, Compass, BadgeCheck, ArrowRight, ArrowDown } from 'lucide-react';
import { JOURNEY } from '../lib/constants';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const ICONS = [BookOpen, Hammer, Rocket, Compass, BadgeCheck];

export default function LearningJourney() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="bg-circuit pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Learning Experience"
          title="Your Path to Real Skills"
          className="mx-auto mb-16"
        />

        <div className="flex flex-col items-stretch gap-0 lg:flex-row lg:items-center">
          {JOURNEY.map((step, i) => {
            const Icon = ICONS[i];
            const isLast = i === JOURNEY.length - 1;
            return (
              <div key={step.title} className="flex flex-1 flex-col items-center lg:flex-row">
                <Reveal delay={i * 0.1} className="w-full">
                  <div className="group flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-[var(--color-surface-2)]/70 px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold-400)]/45">
                    <span className="flex size-14 items-center justify-center rounded-full bg-gradient-to-b from-[var(--color-gold-500)]/20 to-transparent text-[var(--color-gold-300)] ring-1 ring-[var(--color-line-gold)] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-6" strokeWidth={2} />
                    </span>
                    <h3 className="font-[var(--font-display)] text-lg font-bold text-ivory">{step.title}</h3>
                    <p className="max-w-[14rem] text-sm text-[var(--color-mist)]">{step.description}</p>
                  </div>
                </Reveal>

                {!isLast && (
                  <div className="flex items-center justify-center py-2 text-[var(--color-gold-400)]/50 lg:px-2 lg:py-0">
                    <ArrowDown className="size-5 lg:hidden" />
                    <ArrowRight className="hidden size-5 lg:block" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

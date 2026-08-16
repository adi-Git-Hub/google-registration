import {
  CalendarClock,
  Radio,
  Code2,
  FileText,
  Briefcase,
  Award,
  GitBranch,
  IdCard,
  Target,
} from 'lucide-react';
import { BENEFITS } from '../lib/constants';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const ICONS = [CalendarClock, Radio, Code2, FileText, Briefcase, Award, GitBranch, IdCard, Target];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 sm:py-32">
      <div className="bg-circuit pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Benefits" title="What You Get" className="mx-auto mb-16" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {BENEFITS.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.subtitle} delay={(i % 3) * 0.08}>
                <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-white/8 bg-[var(--color-surface-2)]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold-400)]/45 hover:shadow-[var(--shadow-gold-glow)]">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--color-gold-500)]/12 text-[var(--color-gold-300)] transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--color-cyan-300)]">
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-[var(--font-display)] text-lg font-bold text-ivory sm:text-xl">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-mist)]">{item.subtitle}</p>
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

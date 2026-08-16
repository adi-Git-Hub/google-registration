import { Award, Briefcase, Code2, Compass, Radio, Users } from 'lucide-react';
import { HERO_BENEFITS_STRIP } from '../lib/constants';
import Reveal from './ui/Reveal';

const ICONS = [Radio, Code2, Briefcase, Award, Compass, Users];

export default function HeroBenefitsStrip() {
  return (
    <Reveal
      stagger={0.06}
      className="glass-lite relative z-10 mx-auto mt-16 grid max-w-7xl grid-cols-2 divide-y divide-white/8 rounded-2xl sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:grid-cols-6"
    >
      {HERO_BENEFITS_STRIP.map((label, i) => {
        const Icon = ICONS[i];
        return (
          <div key={label} className="flex flex-col items-center gap-2.5 px-4 py-6 text-center sm:px-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-[var(--color-gold-500)]/12 text-[var(--color-gold-300)]">
              <Icon className="size-4" strokeWidth={2} />
            </span>
            <span className="text-xs font-medium leading-snug text-[var(--color-mist)] sm:text-[13px]">
              {label}
            </span>
          </div>
        );
      })}
    </Reveal>
  );
}

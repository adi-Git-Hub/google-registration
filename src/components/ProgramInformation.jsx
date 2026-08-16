import { Laptop, CalendarDays, Infinity as InfinityIcon, LifeBuoy, Users } from 'lucide-react';
import { PROGRAM_INFO } from '../lib/constants';
import Reveal from './ui/Reveal';

const ICONS = [Laptop, CalendarDays, InfinityIcon, LifeBuoy, Users];

export default function ProgramInformation() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="glass overflow-hidden rounded-3xl">
          <div className="grid grid-cols-1 divide-y divide-white/8 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-5">
            {PROGRAM_INFO.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <div key={item.label} className="flex flex-col items-center gap-3 px-6 py-8 text-center">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--color-gold-500)]/12 text-[var(--color-gold-300)]">
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-cyan-300)]">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold leading-snug text-ivory">{item.value}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

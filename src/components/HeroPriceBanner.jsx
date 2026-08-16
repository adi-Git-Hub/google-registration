import { IndianRupee } from 'lucide-react';
import { PRICING } from '../lib/constants';

export default function HeroPriceBanner() {
  return (
    <div
      data-hero-price
      className="ring-signature glass relative flex w-full items-center gap-5 rounded-2xl bg-[var(--color-surface-2)]/70 px-6 py-5 shadow-[var(--shadow-signature-glow)] sm:px-7"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold-300)] to-[var(--color-cyan-400)]/80 text-[#1a1206]">
        <IndianRupee className="size-5" strokeWidth={2.5} />
      </span>

      <div className="min-w-0">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan-300)]">
          {PRICING.eyebrow}
        </span>
        <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-gradient-gold font-[var(--font-display)] text-2xl font-extrabold leading-none sm:text-[1.75rem]">
            {PRICING.amount}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-mist)]">
            {PRICING.unit}
          </span>
        </div>
        <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-[var(--color-mist)] sm:text-[13px]">
          {PRICING.note}
        </p>
      </div>
    </div>
  );
}

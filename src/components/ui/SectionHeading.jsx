import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-gold)] bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-300)]">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl font-[var(--font-display)] text-3xl font-bold leading-[1.15] text-ivory sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-balance text-base leading-relaxed text-[var(--color-mist)] sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}

import { ArrowUpRight } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../../lib/constants';

const VARIANTS = {
  primary:
    'bg-gradient-to-b from-[var(--color-gold-300)] to-[var(--color-gold-500)] text-[#1a1206] shadow-[var(--shadow-gold-glow)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'glass text-ivory hover:border-[var(--color-gold-400)]/60 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-ivory/90 hover:text-[var(--color-gold-300)]',
};

const SIZES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

/**
 * Every registration CTA in the app should render this with `toForm`.
 * It always opens the official Google Form in a new tab — never a local route.
 */
export default function GlowButton({
  children,
  variant = 'primary',
  size = 'md',
  toForm = false,
  href,
  icon = true,
  className = '',
  ...rest
}) {
  const base =
    'focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 ease-out whitespace-nowrap';

  const classes = `${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (toForm) {
    return (
      <a
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
        {icon && <ArrowUpRight className="size-4 shrink-0" strokeWidth={2.5} />}
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

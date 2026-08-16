import { Anchor, Cloud, Container, GitBranch, Infinity as InfinityIcon, Layers } from 'lucide-react';
import heroInstructor from '../assets/hero-instructor.png';
import { HERO_TECH_STACK } from '../lib/constants';
import { useReducedMotion } from '../lib/useReducedMotion';

const TECH_ICONS = {
  AWS: Cloud,
  Kubernetes: Anchor,
  Docker: Container,
  Terraform: Layers,
  Git: GitBranch,
  'CI/CD': InfinityIcon,
};

// Desktop layout only — percentage offsets around the central visual.
const POSITION_CLASSES = {
  'top-left': 'left-[2%] top-[6%]',
  'top-right': 'right-[2%] top-[6%]',
  'mid-left': 'left-[-4%] top-[42%]',
  'mid-right': 'right-[-4%] top-[42%]',
  'bottom-left': 'left-[2%] top-[78%]',
  'bottom-right': 'right-[2%] top-[78%]',
};

function TechChip({ name, className = '', style }) {
  const Icon = TECH_ICONS[name];
  return (
    <div
      data-hero-tech
      style={style}
      className={`glass-lite flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-lg shadow-black/30 ${className}`}
    >
      <Icon className="size-4 text-[var(--color-gold-300)]" strokeWidth={2} />
      <span className="text-xs font-semibold text-ivory">{name}</span>
    </div>
  );
}

export default function HeroTechOrbit() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* Cyan technology glow behind the central visual */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-cyan-500)]/14 blur-[90px]"
      />

      <div className="relative h-[300px] sm:h-[380px] lg:h-[560px]">
        {/* Orbital ring, desktop only */}
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          className="pointer-events-none absolute inset-0 hidden size-full lg:block"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="url(#orbit-gradient)"
            strokeWidth="0.3"
            strokeDasharray="1.5 3"
          />
          <defs>
            <linearGradient id="orbit-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-gold-400)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="var(--color-cyan-400)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-gold-400)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-x-[9%] inset-y-0 sm:inset-x-[11%] lg:inset-x-[9%]">
          <img
            src={heroInstructor}
            alt="TATVEIN student learning full stack development on a laptop"
            width={734}
            height={666}
            className="size-full object-contain object-bottom"
          />
        </div>

        {/* Floating tech cards — desktop/tablet orbit layout */}
        {HERO_TECH_STACK.map((tech, i) => (
          <TechChip
            key={tech.name}
            name={tech.name}
            className={`absolute hidden lg:flex ${POSITION_CLASSES[tech.position]} ${
              reducedMotion ? '' : 'animate-float-slow'
            }`}
            style={reducedMotion ? undefined : { animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </div>

      {/* Mobile/tablet fallback — simple wrapped row, no absolute positioning */}
      <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:hidden">
        {HERO_TECH_STACK.map((tech) => (
          <TechChip key={tech.name} name={tech.name} />
        ))}
      </div>
    </div>
  );
}

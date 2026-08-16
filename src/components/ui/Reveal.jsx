import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../../lib/useReducedMotion';

/**
 * Scroll-reveal wrapper. Animates children in once they enter the viewport.
 * No-ops (renders children fully visible, no layout shift) under reduced motion.
 */
export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  y = 28,
  stagger,
  once = true,
}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: 'power3.out',
          stagger: stagger || 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [reducedMotion, delay, y, stagger, once]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '../lib/constants';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/8 bg-[var(--color-surface-2)]/70">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-[var(--font-display)] text-base font-semibold text-ivory sm:text-lg">
          {item.q}
        </span>
        <Plus
          className={`size-5 shrink-0 text-[var(--color-gold-300)] transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--color-mist)] sm:text-[15px]">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" className="mx-auto mb-14" />

        <Reveal stagger={0.06} className="flex flex-col gap-4">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

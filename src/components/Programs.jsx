import { PROGRAMS } from '../lib/constants';
import ProgramCard from './ProgramCard';
import SectionHeading from './ui/SectionHeading';

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Programs"
          title="Choose Your Program"
          description="Two live, industry-oriented tracks built around real tools, real workflows and real projects."
          className="mx-auto mb-16"
        />

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.id} program={program} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

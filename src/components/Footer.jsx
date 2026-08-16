export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center sm:px-8">
        <span className="font-[var(--font-display)] text-xl font-bold tracking-[0.08em] text-ivory">
          TATVEIN
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-300)]">
          Live Industry Programs
        </span>
        <span className="text-sm text-[var(--color-mist)]">Learn. Build. Deploy. Experience. Prove.</span>
        <span className="mt-4 text-xs text-[var(--color-mist-2)]">© 2026 TATVEIN Technologies</span>
      </div>
    </footer>
  );
}

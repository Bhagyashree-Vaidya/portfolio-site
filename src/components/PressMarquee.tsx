// Scrolling "featured in" strip. Real links (good for readers and SEO);
// pauses on hover and stays still for people who prefer reduced motion.
const items = [
  {
    label: "Receivables Info",
    title: "The Dark Data Goldmine Hiding Inside Debt Collection Operations",
    href: "https://receivablesinfo.com/2026/07/28/dark-data-goldmine-debt-collection-operations-ai/",
  },
  {
    label: "Receivables Info",
    title: "Governance Problem in Debt Collection AI",
    href: "https://receivablesinfo.com/2026/08/19/ai-governance-debt-collection-multi-agent-compliance/",
  },
  {
    label: "Receivables Info",
    title: "From Dark Data to Organizational Intelligence",
    href: "https://receivablesinfo.com/2026/08/19/building-organizational-intelligence-dark-data-debt-collection/",
  },
  { label: "Podcast", title: "Coming soon", href: null },
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it.title} className="flex items-center gap-3 whitespace-nowrap">
          <span className="rounded-full bg-[#B83B67] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-white">{it.label}</span>
          {it.href ? (
            <a
              href={it.href}
              target="_blank"
              rel="noopener"
              tabIndex={hidden ? -1 : undefined}
              className="text-sm font-medium text-text-primary underline-offset-4 hover:text-[#9C2F55] hover:underline md:text-base"
            >
              {it.title} ↗
            </a>
          ) : (
            <span className="text-sm font-medium italic text-text-secondary md:text-base">{it.title}</span>
          )}
          <span aria-hidden="true" className="text-[#E86F93]">✦</span>
        </li>
      ))}
    </ul>
  );
}

export default function PressMarquee() {
  return (
    <section aria-label="Published writing and upcoming podcast" className="relative z-10 w-full border-y border-[#F0AFC0]/50 bg-white/80 py-3 backdrop-blur-sm">
      <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <p className="sr-only">As featured in Receivables Info. Podcast coming soon.</p>
        <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}

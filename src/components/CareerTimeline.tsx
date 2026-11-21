import Link from "next/link";
import Section from "./Section";

// Section header for the slide-based product teardowns that follow it.
// These are independent teardowns (course work), not employer projects.
export default function CareerTimeline() {
  return (
    <Section id="timeline" className="!py-[20px] mt-[10vh]">
      <div className="mb-[20px]">
        <p className="text-sm md:text-base font-medium uppercase tracking-widest text-text-secondary mb-2">Product teardowns</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary">Product thinking.</h2>
        <p className="mt-3 max-w-[720px] text-base text-text-secondary">
          Independent teardowns of consumer apps I did not work on, written to practice product analysis. For my own
          work, read the <Link href="/case-studies" className="text-[#9C2F55] underline underline-offset-2">product case studies</Link>.
        </p>
      </div>
    </Section>
  );
}

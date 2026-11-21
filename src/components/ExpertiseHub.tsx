import Link from "next/link";
import { CASE_STUDIES, EXPERTISE, INSIGHTS, docPath } from "@/content/registry";

// Server-rendered hub: puts every expertise page, case study and insight one
// click from the homepage, with descriptive anchor text.
export default function ExpertiseHub() {
  return (
    <section id="expertise" aria-labelledby="expertise-h" className="relative mx-auto w-full max-w-[1320px] px-6 pt-[10vh] pb-[20px]">
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-text-secondary">Expertise</p>
      <h2 id="expertise-h" className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary">What I work on.</h2>

      <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {EXPERTISE.map((d) => (
          <li key={d.slug} className="rounded-2xl border border-[#F0AFC0]/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <h3 className="font-display text-xl font-semibold text-text-primary">
              <Link href={docPath(d)} className="hover:text-[#9C2F55]">{d.title}</Link>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{d.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-[#F0AFC0]/50 bg-white/80 p-6 backdrop-blur-sm">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            <Link href="/case-studies" className="hover:text-[#9C2F55]">Case studies</Link>
          </h3>
          <ul className="mt-3 space-y-2">
            {CASE_STUDIES.map((d) => (
              <li key={d.slug}>
                <Link href={docPath(d)} className="text-[#9C2F55] underline underline-offset-2 hover:text-[#7a2443]">{d.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[#F0AFC0]/50 bg-white/80 p-6 backdrop-blur-sm">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            <Link href="/insights" className="hover:text-[#9C2F55]">Insights</Link>
          </h3>
          <ul className="mt-3 space-y-2">
            {INSIGHTS.map((d) => (
              <li key={d.slug}>
                <Link href={docPath(d)} className="text-[#9C2F55] underline underline-offset-2 hover:text-[#7a2443]">{d.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/research/confirmation-bias-ai" className="text-[#9C2F55] underline underline-offset-2 hover:text-[#7a2443]">
                Research: Confirmation bias in LLM-based AI analytics tools
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

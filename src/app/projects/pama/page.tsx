import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";

export default function PAMAPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          <Link
            href="/"
            className="text-[#E86F93] hover:text-[#9C2F55] mb-8 inline-flex items-center gap-2 font-mono text-sm tracking-widest transition-colors"
          >
            ← BACK TO HOME
          </Link>

          {/* Header */}
          <div className="mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 text-xs font-mono font-bold bg-[#E86F93] text-white rounded-full">
                FUNDED PROJECT
              </span>
              <span className="px-3.5 py-1 text-xs font-mono font-bold border border-[#F0AFC0] text-[#E86F93] rounded-full bg-white/50 backdrop-blur-sm">
                UW iSchool Grant — $500
              </span>
              <span className="px-3.5 py-1 text-xs font-mono font-bold border border-[#F0AFC0] text-[#E86F93] rounded-full bg-white/50 backdrop-blur-sm">
                Spring 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-text-primary tracking-tight">PAMA.</h1>
            <p className="text-2xl text-text-secondary font-light leading-relaxed mb-4">
              Collaborative, AI-powered biography platform that turns scattered
              family memories into a cohesive life story
            </p>
            <p className="text-text-muted mt-3 text-sm font-mono tracking-widest uppercase">
              Bhagyashree Vaidya (INFO '26) &amp; Sunayana Hazarika (MSIM '26)
            </p>
          </div>

          {/* The Problem */}
          <section className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8 text-text-primary">The Problem</h2>
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] border border-[#F0AFC0]/40 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
              <div className="relative z-10">
                <p className="text-lg text-text-primary leading-relaxed mb-6 font-light">
                  Families lose irreplaceable stories every day. When a loved one
                  passes, different family members hold different pieces of their
                  life but there's no structured way to bring it all together.
                </p>
                <p className="text-lg text-text-primary leading-relaxed mb-8 font-light">
                  Research shows emotional memories lose specificity within 2–3
                  years, and the window to capture them is smaller than families
                  realize.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#F0AFC0]/40">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-[#E86F93] mb-3">2–3 yrs</div>
                    <p className="text-sm text-text-secondary font-mono">Before emotional memories lose specificity</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-[#E86F93] mb-3">Scattered</div>
                    <p className="text-sm text-text-secondary font-mono">Memories spread across family members</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-[#E86F93] mb-3">No Tool</div>
                    <p className="text-sm text-text-secondary font-mono">No structured way to bring it all together</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who It Serves */}
          <section className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8 text-text-primary">Who It Serves</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2rem] border border-[#F0AFC0]/50 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-display font-bold text-[#E86F93] mb-3">Memory Keepers</h3>
                <p className="text-text-muted font-mono text-xs uppercase tracking-widest mb-4">Adults 35–55</p>
                <p className="text-text-secondary font-light leading-relaxed">
                  Want to preserve a loved one's full story before it fades.
                  They're the organizers — gathering siblings, parents, friends
                  to contribute what they remember.
                </p>
              </div>
              <div className="p-8 rounded-[2rem] border border-[#F0AFC0]/50 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-display font-bold text-[#E86F93] mb-3">Legacy Builders</h3>
                <p className="text-text-muted font-mono text-xs uppercase tracking-widest mb-4">Adults 55–70</p>
                <p className="text-text-secondary font-light leading-relaxed">
                  Want to document their own legacy for future generations.
                  They're telling their story in their own words, while they
                  still can.
                </p>
              </div>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8 text-text-primary">The Solution</h2>
            <div className="space-y-8">
              {[
                { title: "Create a Shared Story Page", desc: "A family creates a dedicated page for a loved one — a single place for their complete life story." },
                { title: "Invite Contributors", desc: "Siblings, friends, colleagues — everyone who holds a piece of the story gets invited to contribute memories, photos, and anecdotes in their own words." },
                { title: "AI Organizes Everything", desc: "PAMA's AI organizes every contribution chronologically and thematically into a cohesive, lasting biography — preserved forever." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] border border-[#F0AFC0]/60 text-[#E86F93] font-display font-bold flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <div className="pt-2">
                    <h4 className="font-display font-bold text-2xl text-text-primary mb-2">{step.title}</h4>
                    <p className="text-text-secondary font-light leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Positioning */}
          <section className="mb-20">
            <div className="p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#E86F93] to-[#C1456A] text-white shadow-lg relative overflow-hidden">
              <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed opacity-90 relative z-10">
                Not a memorial tribute. Not a social media post.
              </p>
              <p className="text-3xl md:text-4xl font-display font-bold leading-tight mt-4 relative z-10">
                A complete life story, told by the people who actually knew them.
              </p>
            </div>
          </section>

          {/* Grant + Recognition */}
          <section className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8 text-text-primary">Recognition</h2>
            <div className="p-8 md:p-10 rounded-[2.5rem] border-[4px] border-[#F0AFC0]/40 bg-white/40 backdrop-blur-sm mb-8 shadow-sm">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-[1rem] bg-gradient-to-br from-[#E86F93] to-[#C1456A] text-white font-display font-bold flex items-center justify-center text-3xl shadow-md transform -rotate-3">
                  W
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl text-text-primary">UW iSchool Startup Grant</h4>
                  <p className="text-text-muted font-mono text-xs uppercase tracking-widest mt-2">
                    Spring 2026 · Health & Wellness Category
                  </p>
                </div>
              </div>
              <p className="text-lg text-text-secondary font-light leading-relaxed mb-6">
                Awarded $500 grant as one of eight projects selected in the
                Spring 2026 cohort. Recognized for innovative application of AI
                to a deeply human problem.
              </p>
              <a
                href="https://startup.ischool.uw.edu/grants/#:~:text=Hazarika%20(MSIM%20%E2%80%9926)-,Bhagyashree%20Vaidya,-(INFO%20%E2%80%9926)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#F0AFC0]/55 bg-gradient-to-r from-[#FFF1EA] to-[#FFDCE5] px-6 py-3.5 text-sm font-medium text-[#7C3B49] shadow-[0_14px_34px_rgba(232,111,147,0.12)] transition-all hover:-translate-y-0.5 hover:border-[#E86F93]/70 hover:from-[#FFE7DC] hover:to-[#FFC9DA] hover:text-[#9C2F55]"
              >
                View on UW iSchool Website ↗
              </a>
            </div>

            {/* Screenshot proof */}
            <a
              href="https://startup.ischool.uw.edu/grants/#:~:text=Hazarika%20(MSIM%20%E2%80%9926)-,Bhagyashree%20Vaidya,-(INFO%20%E2%80%9926)"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[2rem] border-[4px] border-[#F0AFC0]/40 overflow-hidden hover:border-[#E86F93]/60 transition-colors mb-12 shadow-sm group bg-white/40"
            >
              <div className="bg-[#FFF1EA] px-6 py-4 border-b border-[#F0AFC0]/40 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400"></div>
                </div>
                <span className="text-text-muted text-xs font-mono flex-1 truncate">
                  startup.ischool.uw.edu/grants/
                </span>
                <span className="text-[#E86F93] text-xs font-bold font-mono group-hover:text-[#9C2F55] transition-colors">
                  Open ↗
                </span>
              </div>
              <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-[400px]">
                <Image
                  src="/images/pama-uw-ischool.png"
                  alt="PAMA project listed on UW iSchool Startup Grants page"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </a>
          </section>

          {/* CTA */}
          <div className="p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] border-[6px] border-white text-center shadow-[0_20px_60px_rgba(232,111,147,0.15)] mt-24 relative overflow-hidden">
             <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
             <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 text-text-primary tracking-tight">
                Interested in PAMA or want to discuss the product?
              </h3>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#E86F93] px-10 py-5 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-[#9C2F55] focus:outline-none focus:ring-4 focus:ring-[#F0AFC0]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

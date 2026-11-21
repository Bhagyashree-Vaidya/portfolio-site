import Section from "./Section";

// Section header for the interactive case studies that follow it.
// (The old hidden timeline with placeholder roles was removed: it listed
// employers that are not on the master résumé.)
export default function CareerTimeline() {
  return (
    <Section id="timeline" className="!py-[20px] mt-[10vh]">
      <div className="mb-[20px]">
        <p className="text-sm md:text-base font-medium uppercase tracking-widest text-text-secondary mb-2">Case studies</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary">Product.</h2>
      </div>
    </Section>
  );
}

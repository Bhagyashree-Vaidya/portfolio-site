import Image from "next/image";

export default function ContactFooter() {
  return (
    <section id="contact" aria-hidden="true" className="relative z-10 w-full bg-bg-primary overflow-hidden">
      <Image
        src="/images/Main.svg"
        alt="Paper cutout landscape"
        width={2400}
        height={883}
        unoptimized
        sizes="100vw"
        className="block h-auto w-full"
      />
    </section>
  );
}

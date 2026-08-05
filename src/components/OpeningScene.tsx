import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const cursiveFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function OpeningScene() {
  return (
    <section id="hero" className="relative z-10 h-screen min-h-[640px] w-full overflow-hidden bg-bg-primary flex items-center justify-center">
      <h1 className="sr-only">Building systems that reward curiosity.</h1>
      
      <Image
        src="/images/footer-last.png"
        alt="Main Hero Background"
        fill
        className="object-cover z-0"
        priority
      />
    </section>
  );
}

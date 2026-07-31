import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const cursiveFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function OpeningScene() {
  return (
    <section id="hero" className="relative z-10 h-screen min-h-[640px] w-full overflow-hidden bg-bg-primary flex items-center justify-center">
      <h1 className="sr-only">Building systems that reward curiosity.</h1>
      
      <div className="absolute z-10 pointer-events-none text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        <span className={`text-[10rem] md:text-[18rem] leading-none ${cursiveFont.className}`}>
          Hello
        </span>
      </div>

      <Image
        src="/images/Main.svg"
        alt="Main Hero Background"
        fill
        className="object-cover z-0"
        priority
      />
    </section>
  );
}

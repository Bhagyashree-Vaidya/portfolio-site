"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";

// The tree's life story: bare, green, blossoming pink, fading, falling.
// Stages are tied to scroll position (not to sections), so the journey is
// always in order and each stage dissolves smoothly into the next.
const stages = [
  { src: "/images/tree-story/tree-stage-1.webp", alt: "Bare paper-cut tree" },
  { src: "/images/tree-story/tree-stage-2.webp", alt: "Paper-cut tree with green leaves" },
  { src: "/images/tree-story/tree-stage-3.webp", alt: "Paper-cut tree in full green" },
  { src: "/images/tree-story/tree-stage-4.webp", alt: "Paper-cut tree turning pink" },
  { src: "/images/tree-story/tree-stage-5.webp", alt: "Paper-cut tree with pink blossoms fading" },
  { src: "/images/tree-story/tree-stage-6.webp", alt: "Paper-cut tree with leaves falling" },
];

const LAST = stages.length - 1;
// Fraction of each step spent cross-fading; the rest holds still.
const FADE = 0.35;

const smooth = (t: number) => {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
};

// How "arrived" stage i is, given continuous progress s in [0, LAST].
const arrive = (s: number, i: number) => {
  if (i === 0) return 1;
  const start = i - 1 + (1 - FADE) / 2;
  return smooth((s - start) / FADE);
};

function Stage({ index, progress }: { index: number; progress: MotionValue<number> }) {
  // True dissolve: this stage fades out exactly as the next fades in,
  // so only one tree is ever fully visible and the two always sum to 1.
  const opacity = useTransform(progress, (s) => {
    const next = index + 1 <= LAST ? arrive(s, index + 1) : 0;
    return Math.max(0, arrive(s, index) - next);
  });
  const stage = stages[index];
  return (
    <motion.div
      className="relative col-start-1 row-start-1 h-full w-full will-change-[opacity]"
      style={{ opacity, zIndex: index }}
    >
      <Image
        src={stage.src}
        alt={stage.alt}
        fill
        unoptimized
        sizes="(min-width: 1024px) 34vw, (min-width: 768px) 40vw, 68vw"
        className="select-none object-contain object-bottom-right"
      />
    </motion.div>
  );
}

function Tree() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  // A spring softens fast flicks of the scroll wheel into a cinematic glide.
  const eased = useSpring(scrollYProgress, reduce ? { duration: 0 } : { stiffness: 60, damping: 22, mass: 0.6 });
  // No tree over the opening hero or the closing footer.
  const progress = useTransform(eased, [0.05, 0.9], [0, LAST], { clamp: true });
  const presence = useTransform(eased, [0.02, 0.07, 0.94, 0.99], [0, 1, 1, 0]);
  const x = useTransform(eased, [0, 1], reduce ? [0, 0] : [0, -18]);
  const y = useTransform(eased, [0, 1], reduce ? [0, 0] : [0, -34]);

  return (
    <motion.div
      className="absolute bottom-0 right-0 z-0 pointer-events-none flex items-end justify-end overflow-visible will-change-transform"
      style={{ x, y, opacity: presence }}
    >
      <div className="grid h-[min(34vw,300px)] w-[min(68vw,560px)] min-h-[170px] min-w-[280px] place-items-end md:h-[min(22vw,330px)] md:w-[min(40vw,640px)] lg:h-[min(18vw,350px)] lg:w-[min(34vw,680px)]">
        {stages.map((s, i) => (
          <Stage key={s.src} index={i} progress={progress} />
        ))}
      </div>
    </motion.div>
  );
}

export default function TreeStory() {
  const [mounted, setMounted] = useState(false);

  // The hero shows no tree, so mount and preload only once the browser is idle.
  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    const go = () => {
      stages.forEach((s) => { const img = new window.Image(); img.src = s.src; });
      setMounted(true);
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(go, { timeout: 2500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(go, 1200);
    return () => window.clearTimeout(t);
  }, []);

  return mounted ? <Tree /> : null;
}

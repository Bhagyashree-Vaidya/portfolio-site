"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type TreeStoryItem = {
  sectionId: string;
  src: string | null;
  alt?: string;
  rightInsetClass?: string;
  hue?: number;
  saturation?: number;
  brightness?: number;
};

const trees: TreeStoryItem[] = [
  {
    sectionId: "hero",
    src: null,
  },
  {
    sectionId: "identity",
    src: "/images/tree-story/tree-stage-1.png",
    alt: "Paper-cut tree in its about state",
    rightInsetClass: "-translate-x-[10%]",
  },
  {
    sectionId: "resume",
    src: "/images/tree-story/tree-stage-2.png",
    alt: "Paper-cut tree in its resume state",
  },
  {
    sectionId: "work",
    src: "/images/tree-story/tree-stage-3.png",
    alt: "Paper-cut tree in its projects state",
  },
  {
    sectionId: "education",
    src: "/images/tree-story/tree-stage-4.png",
    alt: "Paper-cut tree in its education state",
  },
  {
    sectionId: "timeline",
    src: "/images/tree-story/tree-stage-5.png",
    alt: "Paper-cut tree in its timeline state",
  },
  {
    sectionId: "evidence",
    src: "/images/tree-story/tree-stage-6.png",
    alt: "Paper-cut tree in its recommendation state",
  },
  {
    sectionId: "achievements",
    src: "/images/tree-story/tree-stage-6.png",
    alt: "Paper-cut tree in its final state",
  },
  {
    sectionId: "contact",
    src: null,
  },
];

function SectionObserver({
  items,
  onActiveChange,
}: {
  items: TreeStoryItem[];
  onActiveChange: (item: TreeStoryItem | null) => void;
}) {
  const visibleRatios = useRef(new Map<string, number>());

  useEffect(() => {
    const elements = items
      .map((item) => ({
        item,
        element: document.getElementById(item.sectionId),
      }))
      .filter(
        (entry): entry is { item: TreeStoryItem; element: HTMLElement } =>
          Boolean(entry.element),
      );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          visibleRatios.current.set(
            sectionId,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        const activeId = [...visibleRatios.current.entries()].sort(
          (a, b) => b[1] - a[1],
        )[0];

        if (!activeId || activeId[1] === 0) {
          onActiveChange(null);
          return;
        }

        const activeItem = elements.find(({ item }) => item.sectionId === activeId[0])
          ?.item;

        onActiveChange(activeItem?.src ? activeItem : null);
      },
      {
        root: null,
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    elements.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, [items, onActiveChange]);

  return null;
}

function TreeImage({ item }: { item: TreeStoryItem | null }) {
  const shouldReduceMotion = useReducedMotion();
  const colorFilter = (saturationBoost = 1, brightnessBoost = 1) =>
    `hue-rotate(${item?.hue ?? 0}deg) saturate(${(item?.saturation ?? 1) * saturationBoost}) brightness(${(item?.brightness ?? 1) * brightnessBoost})`;

  return (
    <div className="grid h-[min(34vw,300px)] w-[min(68vw,560px)] min-h-[170px] min-w-[280px] translate-x-px translate-y-px place-items-end md:h-[min(22vw,330px)] md:w-[min(40vw,640px)] lg:h-[min(18vw,350px)] lg:w-[min(34vw,680px)]">
      <AnimatePresence initial={false}>
        {item?.src && (
          <motion.div
            key={item.src}
            className={`relative col-start-1 row-start-1 h-full w-full will-change-[opacity,filter] ${item.rightInsetClass ?? ""}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              filter: shouldReduceMotion
                ? colorFilter()
                : [
                    colorFilter(),
                    colorFilter(1.04, 1.025),
                    colorFilter(0.98, 0.995),
                    colorFilter(),
                  ],
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: shouldReduceMotion ? 0.2 : 0.55,
                ease: [0.16, 1, 0.3, 1],
              },
              filter: {
                duration: 5.5,
                ease: "easeInOut",
                repeat: shouldReduceMotion ? 0 : Infinity,
              },
            }}
          >
            <Image
              src={item.src}
              alt={item.alt ?? ""}
              fill
              unoptimized
              sizes="(min-width: 1024px) 34vw, (min-width: 768px) 40vw, 68vw"
              className="select-none object-contain object-bottom-right"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FixedTreeContainer({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -18]);
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -34]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [1, 1, 1] : [0.99, 1.02, 1],
  );

  return (
    <motion.div
      className="fixed bottom-0 right-0 z-0 pointer-events-none flex items-end justify-end overflow-visible will-change-transform"
      style={{ x, y, scale }}
    >
      {children}
    </motion.div>
  );
}

export default function TreeStory() {
  const items = useMemo(() => trees, []);
  const [activeTree, setActiveTree] = useState<TreeStoryItem | null>(null);

  useEffect(() => {
    items.forEach((item) => {
      if (!item.src) {
        return;
      }

      const image = new window.Image();
      image.src = item.src;
    });
  }, [items]);

  return (
    <>
      <SectionObserver items={items} onActiveChange={setActiveTree} />
      <FixedTreeContainer>
        <TreeImage item={activeTree} />
      </FixedTreeContainer>
    </>
  );
}

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
    sectionId: "case-studies",
    src: "/images/tree-story/tree-stage-5.png",
    alt: "Paper-cut tree in its case studies state",
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
  const colorFilter = (tree: TreeStoryItem, saturationBoost = 1, brightnessBoost = 1) =>
    `hue-rotate(${tree.hue ?? 0}deg) saturate(${(tree.saturation ?? 1) * saturationBoost}) brightness(${(tree.brightness ?? 1) * brightnessBoost})`;

  // Deduplicate by src and filter out nulls to avoid duplicate keys and empty src errors
  const uniqueTrees = Array.from(
    new Map(trees.filter(t => t.src).map(t => [t.src, t])).values()
  );

  return (
    <div className="grid h-[min(34vw,300px)] w-[min(68vw,560px)] min-h-[170px] min-w-[280px] translate-x-px translate-y-px place-items-end md:h-[min(22vw,330px)] md:w-[min(40vw,640px)] lg:h-[min(18vw,350px)] lg:w-[min(34vw,680px)]">
      {uniqueTrees.map((tree) => {
        const isActive = item?.src === tree.src;
        return (
          <motion.div
            key={tree.src!}
            className={`relative col-start-1 row-start-1 h-full w-full will-change-[opacity,filter] ${tree.rightInsetClass ?? ""} ${isActive ? "z-10 pointer-events-auto" : "z-0 pointer-events-none"}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isActive ? 1 : 0,
              filter: shouldReduceMotion
                ? colorFilter(tree)
                : [
                    colorFilter(tree),
                    colorFilter(tree, 1.04, 1.025),
                    colorFilter(tree, 0.98, 0.995),
                    colorFilter(tree),
                  ],
            }}
            transition={{
              opacity: {
                duration: shouldReduceMotion ? 0.2 : 0.6,
                ease: "easeInOut",
              },
              filter: {
                duration: 5.5,
                ease: "easeInOut",
                repeat: shouldReduceMotion ? 0 : Infinity,
              },
            }}
          >
            <Image
              src={tree.src!}
              alt={tree.alt ?? ""}
              fill
              unoptimized
              priority
              sizes="(min-width: 1024px) 34vw, (min-width: 768px) 40vw, 68vw"
              className="select-none object-contain object-bottom-right"
            />
          </motion.div>
        );
      })}
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
      className="absolute bottom-0 right-0 z-0 pointer-events-none flex items-end justify-end overflow-visible will-change-transform"
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

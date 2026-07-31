"use client";

import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";

import {
  HERO_SCENE_VIEWBOX,
  type SceneObject,
  type SceneObjectKind,
  sceneObjects,
} from "./sceneConfig";

type SceneLayerStyle = React.CSSProperties & {
  "--scene-x": string;
  "--scene-y": string;
  "--scene-width": string;
  "--scene-md-x": string;
  "--scene-md-y": string;
  "--scene-md-width": string;
};

type SceneMotionValues = {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  scrollProgress: MotionValue<number>;
};

function SceneObjectLayer({
  object,
  pointerX,
  pointerY,
  scrollProgress,
}: {
  object: SceneObject;
} & SceneMotionValues) {
  const shouldReduceMotion = useReducedMotion();
  const maxX = object.depth * object.parallax * 20;
  const maxY = object.depth * object.parallax * 12;
  const x = useTransform(pointerX, [-1, 1], shouldReduceMotion ? [0, 0] : [maxX, -maxX]);
  const pointerOffsetY = useTransform(
    pointerY,
    [-1, 1],
    shouldReduceMotion ? [0, 0] : [maxY, -maxY],
  );
  const scrollOffsetY = useTransform(
    scrollProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-object.depth * object.speed * 8, object.depth * object.speed * 24],
  );
  const y = useTransform(() => pointerOffsetY.get() + scrollOffsetY.get());
  const cropStyle = {
    aspectRatio: `${object.crop.width} / ${object.crop.height}`,
  };

  const imageStyle = {
    width: `${(HERO_SCENE_VIEWBOX / object.crop.width) * 100}%`,
    height: `${(HERO_SCENE_VIEWBOX / object.crop.height) * 100}%`,
    left: `${(-object.crop.x / object.crop.width) * 100}%`,
    top: `${(-object.crop.y / object.crop.height) * 100}%`,
  };

  const layerStyle: SceneLayerStyle = {
    "--scene-x": `${object.mobileX ?? object.x}%`,
    "--scene-y": `${object.mobileY ?? object.y}%`,
    "--scene-width": `${object.mobileWidth ?? object.width}%`,
    "--scene-md-x": `${object.x}%`,
    "--scene-md-y": `${object.y}%`,
    "--scene-md-width": `${object.width}%`,
    opacity: object.opacity ?? 1,
    zIndex: object.z,
    mixBlendMode: object.blendMode ?? "normal",
  };

  return (
    <motion.div
      className="pointer-events-none absolute left-[var(--scene-x)] top-[var(--scene-y)] w-[var(--scene-width)] select-none will-change-transform md:left-[var(--scene-md-x)] md:top-[var(--scene-md-y)] md:w-[var(--scene-md-width)]"
      style={{
        ...layerStyle,
        x,
        y,
        rotate: object.rotation,
        scale: object.scale,
        transformOrigin: "50% 100%",
      }}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      animate={{ opacity: object.opacity ?? 1, y: 0 }}
      transition={{ duration: 0.8, delay: object.entranceDelay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-full overflow-hidden drop-shadow-[0_20px_18px_rgba(46,34,32,0.20)]" style={cropStyle}>
        {object.kind === "cherry" ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[1.5%] left-1/2 z-0 h-[5.5%] w-[42%] -translate-x-1/2 rounded-[999px] bg-[#254626]/30 blur-[3px] mix-blend-multiply"
          />
        ) : null}
        <img
          src={object.src}
          alt=""
          draggable={false}
          className="pointer-events-none absolute z-10 max-w-none select-none"
          style={imageStyle}
        />
      </div>
    </motion.div>
  );
}

function LayerGroup({
  kinds,
  pointerX,
  pointerY,
  scrollProgress,
}: {
  kinds: SceneObjectKind[];
} & SceneMotionValues) {
  const objects = useMemo(
    () => sceneObjects.filter((object) => kinds.includes(object.kind)),
    [kinds],
  );

  return (
    <>
      {objects.map((object) => (
        <SceneObjectLayer
          key={object.id}
          object={object}
          pointerX={pointerX}
          pointerY={pointerY}
          scrollProgress={scrollProgress}
        />
      ))}
    </>
  );
}

function MainBackground() {
  return (
    <img
      src="/images/hero-main-background.svg"
      alt=""
      draggable={false}
      className="pointer-events-none absolute inset-0 z-0 size-full select-none object-cover"
    />
  );
}

function Buildings(props: SceneMotionValues) {
  return <LayerGroup kinds={["building"]} {...props} />;
}

function PineTrees(props: SceneMotionValues) {
  return <LayerGroup kinds={["pine"]} {...props} />;
}

function CherryTrees(props: SceneMotionValues) {
  return <LayerGroup kinds={["cherry"]} {...props} />;
}

function Benches(props: SceneMotionValues) {
  return <LayerGroup kinds={["bench"]} {...props} />;
}

function People(props: SceneMotionValues) {
  return <LayerGroup kinds={["people"]} {...props} />;
}

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothPointerX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.4 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.4 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const frameOpacity = useTransform(scrollYProgress, [0, 0.18, 0.78, 1], [1, 1, 0.92, 0.65]);
  const sceneMotion = {
    pointerX: smoothPointerX,
    pointerY: smoothPointerY,
    scrollProgress: scrollYProgress,
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative z-10 h-screen min-h-[640px] w-full overflow-hidden bg-bg-primary"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <h1 className="sr-only">Building systems that reward curiosity.</h1>

      <motion.div
        className="absolute left-1/2 top-1/2 aspect-[1800/1004] h-full min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        style={{ opacity: frameOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <MainBackground />
        <Buildings {...sceneMotion} />
        <PineTrees {...sceneMotion} />
        <CherryTrees {...sceneMotion} />
        <People {...sceneMotion} />
        <Benches {...sceneMotion} />
      </motion.div>
    </section>
  );
}

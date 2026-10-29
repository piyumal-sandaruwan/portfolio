
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cloud,
  Network,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

type HeroVisualProps = {
  reduced?: boolean;
};

const nodes = [
  {
    name: "CLOUD",
    Icon: Cloud,
    position: "left-0 top-[29%]",
  },
  {
    name: "CI / CD",
    Icon: TerminalSquare,
    position: "right-0 top-[29%]",
  },
  {
    name: "NETWORKS",
    Icon: Network,
    position: "left-0 bottom-[23%]",
  },
  {
    name: "SECURITY",
    Icon: ShieldCheck,
    position: "right-0 bottom-[23%]",
  },
];

export function HeroVisual({ reduced = false }: HeroVisualProps) {
  const systemReduced = useReducedMotion();
  const noMotion = reduced || !!systemReduced;

  return (
    <motion.div
      initial={noMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      // className="relative mx-auto w-full max-w-[460px]"
      className="relative mx-auto -mt-32 w-full max-w-[460px]"
    >
      <div className="relative aspect-square w-full">
        {/* Simple portrait frame */}
        <div className="absolute inset-[7%] overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220]">
          {/* Portrait */}
          <div className="absolute inset-0 flex items-end justify-center">
            <Image
              src="/images/profile.png"
              alt="Piyumal Sandaruwan"
              fill
              priority
              sizes="(max-width: 640px) 85vw, 420px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Technology labels */}
        {nodes.map(({ name, Icon, position }, index) => (
          <motion.div
            key={name}
            animate={
              noMotion
                ? undefined
                : { y: [0, -2, 0] }
            }
            transition={{
              duration: 3.5 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${position} z-10 flex items-center gap-2 rounded-lg border border-white/15 bg-[#0b101c] px-3 py-2`}
          >
            <Icon
              size={14}
              strokeWidth={1.7}
              className="text-cyan-200"
            />
            <span className="font-mono text-[9px] tracking-wider text-slate-200">
              {name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Caption */}
      
    </motion.div>
  );
}

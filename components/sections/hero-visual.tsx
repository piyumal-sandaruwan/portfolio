
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
  { name: "CLOUD", Icon: Cloud, position: "left-[1%] top-[24%]" },
  { name: "CI / CD", Icon: TerminalSquare, position: "right-[1%] top-[30%]" },
  { name: "NETWORKS", Icon: Network, position: "bottom-[23%] left-[1%]" },
  { name: "SECURITY", Icon: ShieldCheck, position: "bottom-[17%] right-[1%]" },
];

const particles = [
  { left: "17%", top: "27%", delay: 0 },
  { left: "78%", top: "23%", delay: 0.6 },
  { left: "85%", top: "55%", delay: 1.2 },
  { left: "22%", top: "73%", delay: 1.8 },
  { left: "50%", top: "7%", delay: 0.4 },
  { left: "50%", top: "91%", delay: 1.4 },
  { left: "8%", top: "50%", delay: 0.9 },
  { left: "92%", top: "50%", delay: 1.6 },
];

export function HeroVisual({ reduced = false }: HeroVisualProps) {
  const systemReduced = useReducedMotion();
  const noMotion = reduced || !!systemReduced;

  return (
    <motion.div
      initial={noMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="relative mx-auto w-full max-w-[460px]"
    >
      <div className="relative isolate aspect-square w-full">
        {/* Ambient cyan and blue lighting */}
        <motion.div
          animate={
            noMotion
              ? undefined
              : {
                  opacity: [0.25, 0.5, 0.25],
                  scale: [0.9, 1.08, 0.9],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-[18%] z-0 rounded-full bg-cyan-400/20 blur-[50px]"
        />

        <div className="pointer-events-none absolute inset-[25%] z-0 rounded-full bg-blue-500/15 blur-[45px]" />

        {/* Outer orbit */}
        <motion.div
          animate={noMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute inset-[6%] z-0 rounded-full border border-dashed border-cyan-100/40"
        >
          <span className="absolute left-[18%] top-[8%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_14px_4px_rgba(88,243,255,.8)]" />
          <span className="absolute bottom-[12%] right-[16%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_3px_rgba(34,211,238,.7)]" />
        </motion.div>

        {/* Middle orbit */}
        <motion.div
          animate={noMotion ? undefined : { rotate: -360 }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute inset-[16%] z-[1] rounded-full border border-cyan-300/70 shadow-[0_0_24px_rgba(34,211,238,.15)]"
        >
          <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_5px_rgba(34,211,238,.8)]" />
        </motion.div>

        {/* Inner orbit */}
        <motion.div
          animate={
            noMotion
              ? undefined
              : { opacity: [0.4, 0.85, 0.4] }
          }
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-[23%] z-[1] rounded-full border border-white/25 shadow-[0_0_22px_rgba(34,211,238,.08)]"
        />

        {/* Rotating light on the middle orbit */}
        <motion.div
          animate={noMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute inset-[16%] z-[2] rounded-full"
        >
          <motion.span
            animate={
              noMotion
                ? undefined
                : {
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.35, 0.8],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-100 shadow-[0_0_18px_6px_rgba(88,243,255,.8)]"
          />
        </motion.div>

        {/* Complete portrait — no clipping or rotation */}
  {/* Centered portrait — upright, no rotation */}
<motion.div
  animate={noMotion ? undefined : { y: [0, -3, 0] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
>
  <Image
    src="/images/profile.png"
    alt="Piyumal Sandaruwan"
    width={1024}
    height={1024}
    priority
    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 65vw, 420px"
    className="h-[84%] w-[84%] object-contain object-center drop-shadow-[0_0_28px_rgba(34,211,238,.25)]"
  />
</motion.div>

        {/* Glowing particles */}
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="pointer-events-none absolute z-20 h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_3px_rgba(88,243,255,.65)]"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={
              noMotion
                ? undefined
                : {
                    opacity: [0.2, 1, 0.2],
                    scale: [0.7, 1.5, 0.7],
                  }
            }
            transition={{
              duration: 2.2,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating technology tags */}
        {nodes.map(({ name, Icon, position }, index) => (
          <motion.div
            key={name}
            animate={
              noMotion
                ? undefined
                : {
                    y: [0, -5, 0],
                    boxShadow: [
                      "0 0 7px rgba(34,211,238,.03)",
                      "0 0 18px rgba(34,211,238,.18)",
                      "0 0 7px rgba(34,211,238,.03)",
                    ],
                  }
            }
            transition={{
              duration: 3.5 + index * 0.45,
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${position} z-30 flex items-center gap-2 whitespace-nowrap rounded-xl border border-cyan-200/30 bg-[#080f1d]/95 px-3 py-2.5 backdrop-blur-md`}
          >
            <Icon size={14} className="text-cyan-200" />
            <span className="font-mono text-[9px] tracking-wider text-slate-200">
              {name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Caption */}
      <div className="mt-4 flex justify-between gap-2 px-2 font-mono text-[9px] tracking-[.16em] text-slate-600">
        <span>FIG 01 — ENGINEERING MINDSET</span>
        <span>v1.0.0</span>
      </div>
    </motion.div>
  );
}

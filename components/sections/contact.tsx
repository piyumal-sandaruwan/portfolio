
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Gitlab,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const contacts = [
  {
    label: "LinkedIn",
    description: "Connect professionally",
    value: "linkedin.com/in/piyumal-sandaruwan-0099793a9",
    href: "https://www.linkedin.com/in/piyumal-sandaruwan-0099793a9/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    description: "Start a conversation",
    value: "piyumalsandaruwanb@gmail.com",
    href: "mailto:piyumalsandaruwanb@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    description: "Let's have a conversation",
    value: "076 431 8050",
    href: "tel:+94764318050",
    icon: Phone,
    external: false,
  },
  
];

export function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] py-20 sm:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(99,102,241,0.09),transparent_45%),radial-gradient(ellipse_at_90%_20%,rgba(34,211,238,0.08),transparent_35%)]"
      />

      <div className="container relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[linear-gradient(125deg,rgba(15,23,42,0.88),rgba(7,12,23,0.97)_65%,rgba(8,30,40,0.85))] p-6 shadow-[0_25px_100px_rgba(0,0,0,0.2)] sm:p-9 lg:p-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-[100px]"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            {/* Introduction */}
            <div>
              <div className="flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[0.22em] text-cyan-300">
                <span>[06]</span>
                <span className="h-px w-8 bg-cyan-300/40" />
                <span>CONTACT</span>
              </div>

              <h2 className="mt-7 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Let's build
                <br />
                something
                <br />
                <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  meaningful.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Interested in cloud, DevOps, software, or creative
                collaboration? I'm looking for opportunities to learn,
                contribute, and build meaningful solutions. I'd be glad
                to connect.
              </p>

              <a
                href="mailto:piyumalsandaruwanb@gmail.com"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-300 px-5 py-4 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-[0_10px_35px_rgba(34,211,238,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Send a message
                <ArrowUpRight size={17} />
              </a>

              <div className="mt-8 flex items-center gap-3 font-mono text-[9px] tracking-[0.16em] text-slate-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                </span>
                OPEN TO OPPORTUNITIES
              </div>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;

                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={
                      contact.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={
                      reducedMotion ? false : { opacity: 0, x: 18 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/[0.12]">
                      <Icon size={21} strokeWidth={1.6} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-slate-100 transition-colors group-hover:text-cyan-100">
                        {contact.label}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-slate-400">
                        {contact.description}
                      </span>

                      <span className="mt-1 block break-all text-[10px] text-slate-500 sm:text-[11px]">
                        {contact.value}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                    />
                  </motion.a>
                );
              })}

              <p className="flex items-center gap-2 px-1 pt-2 font-mono text-[9px] leading-5 tracking-[0.13em] text-slate-500">
                <Mail size={12} className="shrink-0" />
                LET'S CONNECT AND BUILD SOMETHING USEFUL
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

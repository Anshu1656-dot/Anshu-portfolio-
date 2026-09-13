"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { personalInfo } from "@/data/site-data";
import FrameCorners from "./FrameCorners";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-16 pt-32 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-teal/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber/20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr,0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="text-balance font-display text-[clamp(3rem,11vw,6.5rem)] leading-[0.92] text-paper"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg text-mist sm:text-xl">
            {personalInfo.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-md bg-gradient-to-r from-teal to-amber bg-clip-text text-2xl font-medium text-transparent sm:text-3xl"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-mist"
          >
            {personalInfo.introduction}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-gradient-to-r from-teal to-amber px-7 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="glass rounded-full px-7 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/10"
            >
              Contact Me
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-paper underline decoration-teal/50 underline-offset-4 hover:decoration-amber"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="glass relative h-full w-full overflow-hidden rounded-2xl">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal/10 via-ink to-amber/10">
              <span className="font-display text-[7rem] text-paper/10">
                {personalInfo.initials}
              </span>
            </div>
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="timecode text-xs text-paper/80">REC</span>
            </div>
          </div>
          <FrameCorners />
        </motion.div>
      </div>
    </section>
  );
}

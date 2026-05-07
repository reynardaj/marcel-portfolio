'use client';

import { motion } from 'motion/react';
import { ArrowRight, Figma, Code2, Cylinder } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center pt-24 pb-12 px-6">
      {/* Abstract Background Element (Mocks 3D) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-20">
        <div className="absolute h-[60vh] w-[60vh] rounded-full bg-gradient-to-br from-primary to-accent-orange blur-3xl mix-blend-multiply" />
        <div className="absolute h-[50vh] w-[50vh] translate-x-20 translate-y-20 rounded-full bg-gradient-to-tr from-accent-green to-primary blur-3xl mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="rounded-full border border-neutral-200 dark:border-neutral-800 bg-background/50 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 backdrop-blur-sm">
            Product Designer
          </span>
          <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <span className="rounded-full border border-neutral-200 dark:border-neutral-800 bg-background/50 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 backdrop-blur-sm">
            Frontend Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0, 0, 0.2, 1] }}
          className="mb-6 font-sans text-5xl font-tight font-medium tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          Bridging the gap <br className="hidden sm:block" />
          between <span className="text-primary italic pr-2">Design</span> and
          <span className="text-accent-orange italic pl-2">Logic</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="mx-auto mb-10 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl"
        >
          I craft award-winning digital experiences by combining deep problem-solving
          processes with production-grade engineering and 3D spatial awareness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0, 0, 0.2, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-white transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#process"
            className="group flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-background px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            My Process
          </a>
        </motion.div>

        {/* Tech Stack Hints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0, 0, 0.2, 1] }}
          className="mt-20 flex justify-center gap-8 text-neutral-400 dark:text-neutral-600"
        >
          <div className="flex flex-col items-center gap-2 transition-colors hover:text-foreground">
            <Figma className="h-6 w-6" />
            <span className="font-mono text-xs">Figma</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-colors hover:text-foreground">
            <Cylinder className="h-6 w-6" />
            <span className="font-mono text-xs">3D / Spline</span>
          </div>
          <div className="flex flex-col items-center gap-2 transition-colors hover:text-foreground">
            <Code2 className="h-6 w-6" />
            <span className="font-mono text-xs">Next.js</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

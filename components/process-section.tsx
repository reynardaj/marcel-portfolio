'use client';

import { motion } from 'motion/react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover & Empathize',
    description:
      'Understanding the core problem through user research, stakeholder interviews, and market analysis. I map out the system architecture before drawing a single pixel.',
    color: 'from-blue-500/20 to-blue-500/5',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: PenTool,
    title: 'System Design & Prototyping',
    description:
      'Creating scalable design systems, 3D iterations, and high-fidelity prototypes. I focus on modularity, typography rhythms, and cohesive color theory.',
    color: 'from-accent-orange/20 to-accent-orange/5',
    borderColor: 'border-accent-orange/20',
  },
  {
    icon: Code,
    title: 'Production Engineering',
    description:
      'Translating designs into pixel-perfect, accessible React/Next.js components. I enforce strict Tailwind architectures and fluid animations.',
    color: 'from-primary/20 to-primary/5',
    borderColor: 'border-primary/20',
  },
  {
    icon: Rocket,
    title: 'Launch & Iterate',
    description:
      'Deploying robust applications, analyzing user impact via metrics, and refining the experience based on real-world usage data.',
    color: 'from-accent-green/20 to-accent-green/5',
    borderColor: 'border-accent-green/20',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 sm:px-12 bg-background border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-foreground"></span>
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Process Nodes</span>
          </div>
          <h2 className="mb-4 font-sans text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
            PROBLEM-SOLVING
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            A methodical approach bridging the gap between human needs and technical constraints,
            yielding products that are both visually uncompromising and structurally sound.
          </p>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border border-neutral-200 dark:border-neutral-800">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0, 0, 0.2, 1] }}
                className={`group relative flex flex-col justify-between overflow-hidden border-r border-b border-neutral-200 dark:border-neutral-800 bg-background p-8 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/50`}
              >
                <div className="absolute top-6 right-6 text-[10px] font-mono text-neutral-300 dark:text-neutral-600">
                  {"// " + `0${index + 1}`}
                </div>
                <div className="relative z-10">
                  <div className="mb-6 inline-flex border border-neutral-200 dark:border-neutral-800 bg-background p-3 rounded-none">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="mb-4 font-sans text-xl font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

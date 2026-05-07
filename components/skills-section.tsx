'use client';

import { motion } from 'motion/react';

const technicalSkills = [
  'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS v4',
  'Framer Motion', 'Three.js', 'WebGL', 'Node.js',
  'PostgreSQL', 'GraphQL', 'D3.js', 'Figma API'
];

const designSkills = [
  'Systems Design', 'Prototyping', 'User Research',
  'Interaction Design', 'Typography Theory', 'Color Theory',
  '3D Modeling', 'Spatial UI', 'Accessibility (a11y)'
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 relative overflow-hidden bg-background text-foreground border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid gap-16 lg:grid-cols-12 p-8 border border-neutral-200 dark:border-neutral-800 relative bg-neutral-50 dark:bg-neutral-950">
          <div className="absolute top-4 left-4 bg-background px-2 py-1 border border-neutral-200 dark:border-neutral-800 text-[10px] font-mono font-bold uppercase text-primary">
            SYS_CAPABILITIES
          </div>
          
          {/* Philosophy Statement */}
          <div className="lg:col-span-5 pt-8">
            <h2 className="mb-6 font-sans text-3xl font-extrabold tracking-tighter sm:text-4xl uppercase">
              The code is merely the material.
            </h2>
            
            <div className="space-y-6 text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              <p>
                As a hybrid Product Designer and Frontend Engineer, I believe the best digital products arise when design and engineering exist in a continuous feedback loop.
              </p>
              <p>
                I don&apos;t just hand off static frames. I build the systems, orchestrate the animations, and engineer the core logic to ensure the final product doesn&apos;t lose its soul in translation.
              </p>
              <div className="bg-neutral-950 p-6 text-white mt-8">
                <p className="text-[10px] font-mono text-accent-green mb-2 uppercase tracking-widest">Axiom</p>
                <p className="text-xs font-light leading-relaxed">
                  &quot;Design systems are infrastructure. Animations are affordances. Engineering is empathy.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-7 flex flex-col gap-12 pt-8 lg:pl-12 lg:border-l lg:border-dashed lg:border-neutral-200 lg:dark:border-neutral-800">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Engineering Stack _
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, i) => (
                  <span 
                    key={skill}
                    className="border border-neutral-200 dark:border-neutral-800 bg-background px-3 py-1.5 text-[10px] font-mono text-foreground uppercase hover:bg-neutral-900 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Design & Product _
              </h3>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((skill, i) => (
                  <span 
                    key={skill}
                    className="border border-neutral-200 dark:border-neutral-800 bg-background px-3 py-1.5 text-[10px] font-mono text-foreground uppercase hover:bg-neutral-900 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

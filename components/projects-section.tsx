'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { projects, categories } from '@/lib/projects';

export function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="work" className="py-24 px-6 sm:px-12 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-foreground"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-foreground">Work Directory</span>
            </div>
            <h2 className="mb-4 font-sans text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl uppercase">
              Project Gallery
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              A curated selection of my professional work bridging 3D visualization,
              intricate UI engineering, and holistic product design.
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-neutral-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH PROJECTS..."
                className="w-full bg-background border border-neutral-200 dark:border-neutral-800 focus:border-primary focus:ring-1 focus:ring-primary pl-10 pr-4 py-3 text-[10px] uppercase font-mono tracking-widest outline-none transition-all placeholder:text-neutral-400"
              />
            </div>
          </div>
        </div>

        {/* Categories Header */}
        <div className="mb-10 pb-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between overflow-x-auto gap-4 custom-scrollbar">
          <div className="flex items-center gap-2 whitespace-nowrap min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] border transition-all ${
                  activeCategory === category 
                    ? 'border-primary bg-primary text-white' 
                    : 'border-neutral-200 dark:border-neutral-800 bg-background text-foreground hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-black'
                }`}
              >
                {category} {"//"} {category === 'All' ? projects.length : projects.filter(p => p.category === category).length}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
                  className="group flex flex-col bg-background border border-neutral-200 dark:border-neutral-800 p-6 transition-colors hover:bg-neutral-100 hover:dark:bg-neutral-900"
                >
                  <Link href={`/projects/${project.id}`} className="flex flex-col flex-1 h-full cursor-pointer">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 lg:aspect-video lg:h-auto border border-neutral-200 dark:border-neutral-800">
                      <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm px-2 py-1 border border-neutral-200 dark:border-neutral-800">
                        <span className="text-[10px] font-mono text-foreground font-bold">{"PROJECT_" + `0${index + 1}` + " // " + project.category.replace(/ /g, '_').toUpperCase()}</span>
                      </div>
                      
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover mix-blend-luminosity opacity-80 transition-all duration-700 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Tech Tags Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div className="flex flex-wrap gap-2">
                           {project.tags.map(tag => (
                            <span key={tag} className="bg-background px-2 py-1 font-mono text-[9px] uppercase border border-neutral-200 dark:border-neutral-800 text-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between pt-6">
                      <div>
                        <h3 className="mb-2 font-sans text-2xl font-extrabold tracking-tighter text-foreground uppercase group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-24 flex flex-col items-center justify-center border border-dashed border-neutral-200 dark:border-neutral-800 bg-background"
              >
                <div className="flex items-center gap-3 mb-4 text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest">QUERY_RETURNS_NULL</span>
                </div>
                <p className="text-sm font-sans text-neutral-500 max-w-sm text-center">
                  No projects match your current search constraints. Try adjusting your parameters.
                </p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-6 font-mono text-[10px] font-bold tracking-widest uppercase border border-neutral-200 dark:border-neutral-800 px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

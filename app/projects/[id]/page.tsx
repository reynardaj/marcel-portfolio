import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { Hero3DModel } from '@/components/hero-3d-model';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="flex-1 pt-24 px-6 sm:px-12 pb-24 border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto w-full max-w-7xl">
          {/* Back Navigation */}
          <div className="mb-12">
            <Link href="/#work" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest hover:text-primary transition-colors border border-neutral-200 dark:border-neutral-800 bg-background px-4 py-2">
              <ArrowLeft className="w-4 h-4" /> Return to Directory
            </Link>
          </div>

          {/* Hero Section */}
          <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
               <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-foreground"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-neutral-500">
                  {project.category}
                </span>
              </div>
              <h1 className="mb-8 font-sans text-5xl font-extrabold tracking-tighter text-foreground sm:text-6xl md:text-7xl uppercase">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-3 py-1 font-mono text-[10px] text-foreground uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="w-full">
              <Hero3DModel />
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid gap-16 lg:grid-cols-12 border-t border-neutral-200 dark:border-neutral-800 pt-16">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-4">Project Overview</h3>
                <p className="text-sm leading-relaxed text-foreground font-medium mb-12">
                  {project.content?.overview}
                </p>

                <h3 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-4">The Problem</h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {project.content?.problem}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
               <div className="mb-16">
                 <h3 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">The Approach</h3>
                 <div className="space-y-8 flex flex-col">
                   {project.content?.approach.map((point, i) => (
                     <div key={i} className="flex gap-4 items-start">
                       <span className="font-mono text-xs text-primary font-bold mt-1">0{i+1}</span>
                       <div className="flex-1">
                          {/* Split text into title and description based on colonial separation if any */}
                          {point.includes(':') ? (
                             <>
                               <h4 className="text-sm font-bold text-foreground mb-1">{point.split(':')[0]}</h4>
                               <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{point.split(':')[1].trim()}</p>
                             </>
                          ) : (
                             <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{point}</p>
                          )}
                       </div>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="bg-neutral-950 text-white p-8 border border-neutral-800">
                 <h3 className="font-mono text-[10px] uppercase tracking-widest text-accent-green mb-4">Impact & Results</h3>
                 <p className="text-lg leading-relaxed font-light">
                   &quot;{project.content?.result}&quot;
                 </p>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

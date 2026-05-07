import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/50 dark:bg-neutral-950/50 backdrop-blur-md px-6 sm:px-12 py-8 mt-auto z-50 pointer-events-auto">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-primary rounded-full"></div>
            <span className="font-bold tracking-tighter text-lg text-foreground uppercase">
              JOSHUA.STUDIO
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="border border-neutral-200 dark:border-neutral-800 p-2 hover:bg-neutral-900 hover:text-white transition-colors bg-background">
              <span className="sr-only">GitHub</span>
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="border border-neutral-200 dark:border-neutral-800 p-2 hover:bg-neutral-900 hover:text-white transition-colors bg-background">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="border border-neutral-200 dark:border-neutral-800 p-2 hover:bg-neutral-900 hover:text-white transition-colors bg-background">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:reynard.joshua4949@gmail.com" className="border border-neutral-200 dark:border-neutral-800 p-2 hover:bg-neutral-900 hover:text-white transition-colors bg-background">
              <span className="sr-only">Email</span>
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-[9px] font-mono text-neutral-400 flex gap-4 uppercase">
              <span>Build: v4.0.2-stable</span>
              <span className="hidden sm:inline">System: Tailwind-v4.engine</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-accent-orange rounded-full"></div>
            <div className="w-3 h-3 bg-accent-green rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

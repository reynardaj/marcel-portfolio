import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-background/80 backdrop-blur-sm">
      <nav className="flex h-16 w-full items-center justify-between px-6 sm:px-8 transition-all duration-300">
        <div className="flex items-center gap-2">
          {/* Logo / Monogram */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary transition-transform group-hover:scale-105" />
            <span className="font-bold tracking-tighter text-xl text-foreground hidden sm:block">
              JOSHUA.STUDIO
            </span>
          </Link>
        </div>

        <ul className="flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
          <li>
            <Link href="#process" className="hover:text-primary transition-colors">
              Process
            </Link>
          </li>
          <li>
            <Link href="#work" className="hover:text-primary transition-colors">
              Work
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="mailto:reynard.joshua4949@gmail.com"
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest hover:text-primary transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
            <span className="hidden sm:inline">AVAILABLE FOR HIRE</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

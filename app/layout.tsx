import type {Metadata} from 'next';
import { Inter_Tight, Geist_Mono } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Joshua Reynard | Product Design & Engineering Portfolio',
  description: 'An award-winning product design and engineering portfolio showcasing problem-solving processes, impact, technical skills, and design philosophy.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${interTight.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col border-[8px] sm:border-[12px] border-neutral-950 dark:border-neutral-50 selection:bg-[#e40014] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

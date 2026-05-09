import { HeroSection } from '@/components/hero-section';
import { ProcessSection } from '@/components/process-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { getProjects } from '@/lib/projects';

export default async function Home() {
  const projects = await getProjects();
  
  return (
    <main className="flex min-h-screen flex-col overflow-hidden relative selection:bg-primary selection:text-white">
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <ProjectsSection projects={projects} />
      <SkillsSection />
      <Footer />
    </main>
  );
}

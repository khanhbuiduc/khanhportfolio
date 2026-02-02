import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Footer } from '@/components/Footer';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <div id="home" className="pt-16">
        <Hero />
      </div>
      <About />
      <Projects />
      <Achievements />
      <Skills />
      <Footer />
    </main>
  );
}

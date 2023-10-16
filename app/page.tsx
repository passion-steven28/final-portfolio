import { Hero } from '@/components/Hero';
import About from "@/components/About";
import { Navigation } from '@/components/Navigation';
import Technology from '@/components/Technology';
import Project from '@/components/Project';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-2 lg:px-24 capitalize">
      <Navigation />
      <Hero />
      <About /> 
      <Technology />
      <Project />
      <Contact /> 
    </main>
  );
}

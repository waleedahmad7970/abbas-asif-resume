import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Stats from '@/components/sections/Stats';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import CV from '@/components/CV';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Projects />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CV />
    </>
  );
}

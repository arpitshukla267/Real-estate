import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-[#050505] text-white selection:bg-gold selection:text-black">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <SmoothScroll>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
        </SmoothScroll>
      )}
    </main>
  );
}

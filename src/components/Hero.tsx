import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'motion/react';
import { PerspectiveCamera, OrbitControls, Stars, Sparkles } from '@react-three/drei';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-1" />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 h-full flex flex-col items-start justify-center text-left px-8 md:px-24 pointer-events-none"
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent -z-1" />
        
        <motion.div 
          style={{ y, opacity, scale }}
          className="pointer-events-auto flex flex-col items-start max-w-6xl"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-blue-400 mb-8 font-black flex items-center gap-4"
          >
            <span className="w-8 h-px bg-blue-400" />
            Interactive Architectural Vision
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[8.5rem] font-bold leading-[0.85] mb-12 text-white tracking-tighter"
          >
            SCULPTING <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">THE FUTURE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-3xl ml-5 text-base md:text-xl font-medium tracking-tight leading-relaxed text-white/60 mb-16"
          >
            Interact with our vision. Explore the geometry of tomorrow. 
            A seamless blend of digital craftsmanship and architectural heritage, 
            crafted for those who demand excellence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-wrap gap-8"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-14 py-6 bg-white text-black overflow-hidden rounded-sm transition-all duration-500 cursor-pointer"
            >
              <span className="relative z-10 text-[11px] uppercase tracking-[0.4em] font-black group-hover:text-white transition-colors duration-500">View Projects</span>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-14 py-6 border border-white/20 hover:border-blue-400 hover:text-blue-400 text-white transition-all duration-500 rounded-sm text-[11px] uppercase tracking-[0.4em] font-black cursor-pointer bg-white/5 backdrop-blur-sm"
            >
              Our Story
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-60 text-white"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

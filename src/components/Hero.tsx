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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-linear-to-b from-white via-blue-50/40 to-white">
      {/* 3D Universe Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
          <color attach="background" args={['#EEF6FF']} />
          
          <Stars 
            radius={100} 
            depth={50} 
            count={8000} 
            factor={6} 
            saturation={0.65} 
            fade 
            speed={1.25} 
          />
          <Sparkles 
            count={650} 
            scale={22} 
            size={2.6} 
            speed={0.9} 
            opacity={0.55} 
            color="#2563EB" 
          />
          
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
          <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            minDistance={5} 
            maxDistance={15}
            autoRotate
            autoRotateSpeed={0.35}
            makeDefault
          />
        </Canvas>
      </div>

      {/* Visibility boosters (pure CSS overlays) */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-35"
          style={{
            background:
              'radial-gradient(1200px 500px at 50% 15%, rgba(15,23,42,0.12) 0%, rgba(15,23,42,0) 60%)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      >
        <motion.div className="pointer-events-auto flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-gold mb-6 font-medium"
          >
            Interactive Architectural Vision
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-serif leading-tight mb-8 text-slate-900"
          >
            Sculpting <br />
            <span className="italic text-gold-gradient">The Future</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-xl text-sm md:text-base font-light tracking-wide leading-relaxed text-slate-700 mb-12"
          >
            Interact with our vision. Rotate and explore the geometry of tomorrow. 
            A seamless blend of digital craftsmanship and architectural heritage.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <button className="px-10 py-4 border border-gold/30 bg-white/70 hover:bg-gold hover:text-white transition-all duration-500 rounded-full text-xs uppercase tracking-widest font-bold text-slate-900 backdrop-blur">
              View Projects
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 text-slate-700"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 1200);
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  // Tile grid for animation
  const tiles = Array.from({ length: 100 });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Tiles Animation Layer */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 pointer-events-none">
        {tiles.map((_, i) => (
          <motion.div
            key={i}
            className="bg-gold/5 border-[0.5px] border-gold/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: progress / 100, 
              scale: 1,
              transition: { delay: Math.random() * 0.5 }
            }}
            exit={{ 
              scale: 0,
              opacity: 0,
              transition: { delay: Math.random() * 0.5 }
            }}
          />
        ))}
      </div>

      <motion.div 
        className="absolute bottom-20 flex flex-col items-center w-full px-12 z-10"
        animate={isExiting ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
      >
        <div className="flex justify-between w-full max-w-md mb-4 items-end">
          <div className="text-left">
            <h1 className="font-serif text-3xl text-gold tracking-tighter">LUXREAL</h1>
            <p className="text-[8px] uppercase tracking-[0.4em] text-white/30">Architectural Intelligence</p>
          </div>
          <div className="text-right">
            <span className="font-mono text-2xl text-gold">{progress}%</span>
          </div>
        </div>
        
        <div className="w-full max-w-md h-[1px] bg-white/5 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <motion.p 
          className="mt-8 text-[10px] uppercase tracking-[0.6em] text-white/20 text-center"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Initializing Spatial Framework
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const mqDesktop = window.matchMedia('(min-width: 768px)');
    const mqFinePointer = window.matchMedia('(pointer: fine)');
    const mqHover = window.matchMedia('(hover: hover)');

    const computeEnabled = () => {
      setEnabled(mqDesktop.matches && mqFinePointer.matches && mqHover.matches);
    };

    computeEnabled();
    mqDesktop.addEventListener('change', computeEnabled);
    mqFinePointer.addEventListener('change', computeEnabled);
    mqHover.addEventListener('change', computeEnabled);

    return () => {
      mqDesktop.removeEventListener('change', computeEnabled);
      mqFinePointer.removeEventListener('change', computeEnabled);
      mqHover.removeEventListener('change', computeEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY, enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gold rounded-full pointer-events-none z-9999 mix-blend-multiply"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-gold/30 rounded-full pointer-events-none z-9998"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.2,
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
    </>
  );
};

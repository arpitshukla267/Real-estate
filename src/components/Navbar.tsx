import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-100 px-6 py-4 md:px-16 md:py-6 flex justify-between items-center bg-white backdrop-blur-md border-b border-white/10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <img
          src="/1.png"
          alt="Logo"
          className="h-14 sm:h-16 md:h-12 w-auto object-contain -my-10"
          draggable={false}
          onError={(e) => {
            e.currentTarget.src = '/logo.svg';
          }}
        />
      </motion.div>

      <div className="hidden md:flex gap-16">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="text-[10px] md:text-[16px] uppercase tracking-[0.2em] font-semibold text-black/80 hover:text-white transition-all duration-300 relative group"
          >
            {link.name}
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </div>

      <button 
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Drawer */}
      {/* Backdrop */}
      <motion.button
        type="button"
        aria-label="Close menu"
        initial={false}
        animate={isOpen ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-101 bg-slate-900/20 backdrop-blur-[2px] md:hidden"
      />

      {/* Panel */}
      <motion.aside
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: 'spring', damping: 26, stiffness: 260 }}
        className="fixed top-0 right-0 z-102 h-dvh w-[86vw] max-w-xs bg-[#0B1220] shadow-2xl border-l border-white/10 md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
          <img
            src="/1.png"
            alt="Logo"
            className="h-14 w-auto object-contain"
            draggable={false}
            onError={(e) => {
              e.currentTarget.src = '/logo.svg';
            }}
          />
          <button
            className="text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            <X size={28} />
          </button>
        </div>

        <div className="px-6 py-12 flex flex-col gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold tracking-tighter text-white hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.aside>
    </nav>
  );
};

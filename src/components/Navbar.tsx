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
    <nav className="fixed top-0 left-0 w-full z-100 px-4 py-4 sm:px-6 sm:py-6 md:px-12 md:py-8 flex justify-between items-center bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/60 border-b border-slate-900/5">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <img
          src="/1.png"
          alt="Logo"
          className="h-10 sm:h-11 md:h-12 w-auto"
          draggable={false}
          onError={(e) => {
            // Fallback if `public/1.png` is missing.
            e.currentTarget.src = '/logo.svg';
          }}
        />
      </motion.div>

      <div className="hidden md:flex gap-12">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="text-xs uppercase tracking-[0.2em] font-medium text-slate-700 hover:text-gold transition-colors"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <button 
        className="md:hidden text-slate-900"
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
        className="fixed top-0 right-0 z-102 h-dvh w-[86vw] max-w-xs bg-white shadow-2xl border-l border-slate-900/10 md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-slate-900/5">
          <img
            src="/1.png"
            alt="Logo"
            className="h-10 w-auto"
            draggable={false}
            onError={(e) => {
              e.currentTarget.src = '/logo.svg';
            }}
          />
          <button
            className="text-slate-900"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            <X size={28} />
          </button>
        </div>

        <div className="px-5 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif text-slate-900 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.aside>
    </nav>
  );
};

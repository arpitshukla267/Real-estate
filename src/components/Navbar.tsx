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
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 md:px-12 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-serif font-bold tracking-tighter text-gold"
      >
        LUXREAL
      </motion.div>

      <div className="hidden md:flex gap-12">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="text-xs uppercase tracking-[0.2em] font-medium text-white/70 hover:text-gold transition-colors"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <button 
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
        className="fixed inset-0 bg-charcoal z-[101] flex flex-col items-center justify-center gap-8 md:hidden"
      >
        <button 
          className="absolute top-8 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif text-white hover:text-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

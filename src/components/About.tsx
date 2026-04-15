import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
                alt="Architecture"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-10 -right-10 glass p-8 rounded-2xl hidden md:block"
            >
              <p className="text-4xl font-serif text-gold mb-1">15+</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-600">Years of Excellence</p>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold text-xs uppercase tracking-[0.5em] block"
            >
              The Vision
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif leading-tight"
            >
              We don't just build structures; we <span className="italic text-gold-gradient">sculpt legacies.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              className="text-lg font-light leading-relaxed text-slate-700"
            >
              Founded on the principles of uncompromising quality and visionary design, 
              Pandey Builders has become the global benchmark for high-end real estate. 
              Our portfolio spans continents, each project a testament to our 
              commitment to architectural innovation and sustainable luxury.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Innovation</h4>
                <p className="text-sm text-slate-600">Pushing the boundaries of what's possible in modern construction.</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Sustainability</h4>
                <p className="text-sm text-slate-600">Integrating eco-conscious solutions without sacrificing luxury.</p>
              </div>
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold group"
            >
              Learn More About Us
              <div className="w-12 h-[1px] bg-gold group-hover:w-20 transition-all" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

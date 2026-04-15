import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Pandey Builders didn't just find us a home; they curated an experience that redefined our lifestyle. Their attention to architectural detail is unmatched.",
    name: "Alexander Vance",
    role: "CEO, Vance Enterprises"
  },
  {
    quote: "The level of sophistication and professionalism in their project management is world-class. A true partner in luxury development.",
    name: "Elena Rodriguez",
    role: "International Developer"
  },
  {
    quote: "Visionary design meets flawless execution. Every space they touch becomes a masterpiece of modern living.",
    name: "Julian Thorne",
    role: "Architectural Critic"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-gold text-xs uppercase tracking-[0.5em] mb-4 block">Client Voices</span>
          <h2 className="text-4xl md:text-6xl font-serif">Trusted by the <span className="italic text-gold-gradient">Visionaries.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: i * 0.2, 
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative p-10 rounded-3xl glass group hover:border-gold/20 shadow-sm hover:shadow-md transition-all duration-500"
            >
              <Quote className="text-gold/20 absolute top-8 right-8 group-hover:text-gold/40 transition-colors" size={40} />
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 + 0.3, duration: 0.8 }}
                className="text-lg font-light leading-relaxed text-slate-700 mb-8 italic"
              >
                "{t.quote}"
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                className="mt-auto"
              >
                <h4 className="text-gold font-serif text-xl">{t.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">{t.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

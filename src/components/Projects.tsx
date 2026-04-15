import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "The Obsidian Tower",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920",
    category: "Residential"
  },
  {
    title: "Azure Marina",
    location: "Monaco",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
    category: "Hospitality"
  },
  {
    title: "Ethereal Heights",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=1920",
    category: "Penthouse"
  },
  {
    title: "Golden Sands Villa",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1920",
    category: "Private Estate"
  }
];

export const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[340vh] bg-gradient-to-b from-white via-white to-blue-50/70">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-24 md:pt-28">
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif uppercase tracking-tighter leading-[0.95] text-slate-900"
          >
            Featured{" "}
            <span className="text-gold">Projects</span>
          </motion.h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-600">
            A curated selection of residences and hospitality concepts with a focus on light, form, and livability.
          </p>
        </div>

        <motion.div style={{ x }} className="mt-10 md:mt-14 flex gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative w-[86vw] sm:w-[70vw] md:w-[40vw] h-[56vh] sm:h-[58vh] md:h-[60vh] flex-shrink-0 group cursor-pointer"
            >
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/0 transition-colors duration-500" />
              </div>
              
              <div className="absolute inset-x-6 sm:inset-x-8 bottom-6 sm:bottom-8 flex justify-between items-end">
                <div>
                  <p className="text-gold text-[10px] sm:text-xs uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]">{project.title}</h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1 drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]">{project.location}</p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="w-12 h-12 rounded-full border border-white/50 bg-white/10 backdrop-blur flex items-center justify-center text-white"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

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
    <section id="projects" ref={targetRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-24 left-12 z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-serif text-white/20 uppercase tracking-tighter"
          >
            Featured <br />
            <span className="text-white">Portfolio</span>
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative w-[80vw] md:w-[40vw] h-[60vh] flex-shrink-0 group cursor-pointer"
            >
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <p className="text-gold text-xs uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-white">{project.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{project.location}</p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white"
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

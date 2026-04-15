import { motion } from 'motion/react';
import { Building2, ShieldCheck, Compass, Layout } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    desc: "Bespoke architectural solutions that push the boundaries of modern design and structural integrity."
  },
  {
    icon: ShieldCheck,
    title: "Project Management",
    desc: "End-to-end management ensuring every detail of your vision is executed to perfection."
  },
  {
    icon: Compass,
    title: "Interior Curation",
    desc: "Luxurious interior spaces designed with the finest materials and timeless aesthetic sensibility."
  },
  {
    icon: Layout,
    title: "Urban Planning",
    desc: "Visionary urban development projects that harmonize with the environment and community."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-blue-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold text-xs uppercase tracking-[0.5em] mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif leading-tight"
            >
              Crafting environments that <br />
              <span className="italic text-gold-gradient">inspire excellence.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            className="max-w-sm text-sm leading-relaxed text-slate-600"
          >
            We provide a comprehensive suite of services tailored for the most 
            discerning clients in the global real estate market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-900/5 hover:border-gold/30 shadow-sm hover:shadow-md transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-serif mb-4">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

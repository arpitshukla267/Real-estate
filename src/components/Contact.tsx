import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="pb-10 pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 md:px-12 bg-blue-50/40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full -mr-64 -mb-64" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold text-xs uppercase tracking-[0.5em] mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-12"
          >
            Let's build your <br />
            <span className="italic text-gold-gradient">legacy.</span>
          </motion.h2>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-slate-900/10 bg-white/60 backdrop-blur flex items-center justify-center group-hover:border-gold transition-colors">
                <Mail size={20} className="text-slate-700 group-hover:text-gold" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Email Us</p>
                <p className="text-lg font-medium">concierge@pandeybuilders.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-slate-900/10 bg-white/60 backdrop-blur flex items-center justify-center group-hover:border-gold transition-colors">
                <Phone size={20} className="text-slate-700 group-hover:text-gold" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Call Us</p>
                <p className="text-lg font-medium">+1 (888) LUX-REAL</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-slate-900/10 bg-white/60 backdrop-blur flex items-center justify-center group-hover:border-gold transition-colors">
                <MapPin size={20} className="text-slate-700 group-hover:text-gold" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Visit Us</p>
                <p className="text-lg font-medium">5th Ave, Manhattan, NY</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex gap-6">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, color: '#2563EB' }}
                className="text-slate-500 transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-10 rounded-3xl"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-600">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-slate-900/10 py-3 focus:border-gold outline-none transition-colors placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-600">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-slate-900/10 py-3 focus:border-gold outline-none transition-colors placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-600">Interest</label>
              <select className="w-full bg-transparent border-b border-slate-900/10 py-3 focus:border-gold outline-none transition-colors appearance-none text-slate-800">
                <option className="bg-white">Residential Acquisition</option>
                <option className="bg-white">Commercial Development</option>
                <option className="bg-white">Interior Design</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-600">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-slate-900/10 py-3 focus:border-gold outline-none transition-colors resize-none placeholder:text-slate-400"
                placeholder="Tell us about your vision..."
              />
            </div>

            <button className="w-full py-5 bg-gold text-white font-bold uppercase tracking-widest rounded-xl hover:bg-gold/90 transition-colors duration-500">
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-20 sm:mt-24 md:mt-32 pt-12 border-t border-slate-900/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-slate-500/70">
          © 2026 PANDEY BUILDERS. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </section>
  );
};

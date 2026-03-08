'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
};

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
            }}
          >
            <motion.h3 variants={fadeInUp} className="text-primary font-bold uppercase tracking-widest mb-4">Our Essence</motion.h3>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-8 leading-tight">A Voice Without <br/>Boundaries</motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed mb-12 max-w-lg">
              We are a collective of nomadic souls, bound by the universal language of choral resonance. Our stage is the world, our acoustic is the infinite.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-8 rounded-xl group hover:border-primary transition-all">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">explore</span>
                <h4 className="text-xl font-bold mb-2">Wandering Spirit</h4>
                <p className="text-slate-500 text-sm">Performing in unconventional spaces from ancient ruins to modern voids.</p>
              </div>
              <div className="glass-card p-8 rounded-xl group hover:border-primary transition-all">
                <span className="material-symbols-outlined text-gold-accent text-4xl mb-4">history_edu</span>
                <h4 className="text-xl font-bold mb-2">Echoes of Time</h4>
                <p className="text-slate-500 text-sm">Preserving sacred traditions while exploring the cutting edge of sound.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" as any }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 size-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative aspect-[4/5] rounded-2xl border border-white/10 teal-glow-border overflow-hidden group hover:rotate-0 transition-transform duration-500">
                <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRNyTUUizJZi0OpA8zfeRLObE7eBkZ5N1NGzPszwWqXfMeCGKRgc-yE5KE_EIcv5cQFA-jqQhscPudMxVNNwHFR_jMqqFrjWDYiifGQuHoZpMRws6OlbEUKv4iNgdj-209BtuQVA3KFJHf5IbFoMhJPAnzmUW1AXrJ1JzaD7VbooYxSZ96dfpLg0W6N6NvQ0qgzFnVeFXr17OWqHwnyJlfJgaucgy8TTLDIxyA4gFsYZXiIgVbESPQvFAUH3juers_x6TR-tpTkTse"
                    alt="Abstract photo of sheet music with dramatic lighting"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

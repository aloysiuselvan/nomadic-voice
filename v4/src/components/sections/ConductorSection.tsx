'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
};

export function ConductorSection() {
  return (
    <section id="conductor" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" as any }}
            className="order-2 md:order-1 relative"
        >
          <div className="absolute -bottom-10 -left-10 size-80 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden teal-glow-border z-10">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtiw9Ak8M-K-TY3xcIsdHGXZKIM11mxZyQko1bMJSTbTzHrdOPt91JlI5FKzHLWDnczFkTYGUzVlm9AmF8HyWMHefgkPm61DTqFJuOmMHZ7eP7m3WSKL5_lBiQe3h2sTmbH40pL-3Hu03j_kX1qmk0XQzmVWXFCCwZs9VtmVq0y1kJc62JMuWLYeCzo8nziTnarTHliZYLgv6CtLiwTUvCNiC-szCvrbmp_xranVqv0FfLVaFUuQlgsKHtTb7gN86J01_XNAzgBgAD"
                alt="Man in black suit conducting with passion"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-6 -right-6 md:right-10 glass-card p-6 rounded-xl z-20"
          >
            <p className="text-gold-accent font-serif italic text-4xl leading-none">Elias Thorne</p>
            <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">Artistic Director</p>
          </motion.div>
        </motion.div>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
            }}
            className="order-1 md:order-2"
        >
          <motion.h3 variants={fadeInUp} className="text-primary font-bold uppercase tracking-widest mb-4">The Visionary</motion.h3>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8">Maestro <br/>Elias Thorne</motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed mb-8">
            &quot;Music is not just about the notes on the page; it&apos;s about the space between them. Our choir seeks to fill that silence with something that transcends time.&quot;
          </motion.p>
          
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex items-center gap-4 text-slate-300">
              <span className="material-symbols-outlined text-primary">award_star</span>
              <span>Grammy Award Nominee 2022</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              <span>Founder of the &apos;Resonance&apos; Initiative</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

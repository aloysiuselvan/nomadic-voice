'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/20 via-background-dark/60 to-background-dark z-10"></div>
        {/* Parallax Effect via fixed background image conceptually or simple scale */}
        <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" as any }}
            className="w-full h-full"
        >
            <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIcUBy7P8pK_nLsA7GCfH8OQwgNbgbb_RK2A4W3KcFdr2IeLJde2J1QbwTDFRHA45sErMOjA7IsXOUyWVvRxMro2dGIadMwECZ9srVuQH654D8-29C0CRUhH5b-LuWr60tSn-UV2i9-813FjJQTc_9_k5lqtdDmy6xGNSFwUvQ-ak6gwWKl1lkHpO2xCL2cwY8H3YMfxGi0dEpBNbur-7nrm4uxwunIDIyFLO7ga0aP2Y66ot9ial5qerlfN8cwJw7tFP658mdEy60" 
                alt="A grand cathedral interior with light streaming through stained glass"
                fill
                sizes="100vw"
                priority
                className="object-cover"
            />
        </motion.div>
      </div>

      <div className="relative z-20 text-center px-4 w-full">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "-50%", opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" as any }}
            className="text-7xl md:text-[12rem] font-black leading-none tracking-tighter uppercase text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap select-none w-full text-center"
          >
            NOMADIC VOICE
          </motion.h1>
        </div>

        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative"
        >
          <motion.p variants={fadeInUp} className="text-primary font-bold tracking-[0.3em] uppercase mb-4">The Resonance of Spirits</motion.p>
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            IMMERSE IN <br/><span className="text-primary text-glow">HARMONY</span>
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#soundscape" className="bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined">play_circle</span> Listen Now
            </a>
            <a href="#audition" className="border border-white/20 hover:border-primary/50 px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-sm transition-all">
              Audition for 2024
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
      >
        <span className="material-symbols-outlined text-4xl">expand_more</span>
      </motion.div>
    </section>
  );
}

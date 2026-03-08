"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section id="join-us" className="px-6 md:px-20 py-24 mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto rounded-[3rem] bg-slate-900 dark:bg-slate-800/80 p-12 md:p-20 relative overflow-hidden text-center shadow-2xl border border-slate-800"
      >
        {/* Silk wave effect in background */}
        <div className="absolute inset-0 opacity-20 silk-wave pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-4xl md:text-6xl font-serif italic"
          >
            Join the Movement
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-300 text-lg max-w-xl mx-auto"
          >
            Become part of our global community or audition for our next season. We are always looking for voices that resonate with the spirit of nomadic artistry.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 rounded-full transition-all shadow-lg hover:-translate-y-1">
              Join the Choir
            </button>
            <button className="bg-gold hover:bg-gold/90 text-slate-900 font-bold h-14 px-10 rounded-full transition-all shadow-lg hover:-translate-y-1">
              Subscribe to Newsletter
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

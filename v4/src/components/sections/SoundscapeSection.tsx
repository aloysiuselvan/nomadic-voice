'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
};

export function SoundscapeSection() {
  return (
    <section id="soundscape" className="py-24 bg-charcoal-deep relative overflow-hidden">
      <div className="absolute inset-0 grain-bg opacity-10"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-16"
        >
            The <span className="text-primary">Soundscape</span>
        </motion.h2>

        {/* Video Player */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as any }}
            className="aspect-video rounded-2xl overflow-hidden border-4 border-primary/20 teal-glow-border mb-12 relative group cursor-pointer"
        >
          <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
            <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLQWr-KoHwAl03VmpVHRVtVl4llqmxlVLBZpqKc2CDXAmhnNDEEHK_heMJFq2gm8sANOAMODJqZEJ_zlFFjDf4QOw0ycJW3Z_Et1VYFYc-OUMjMzcmxD40nfWsAaPOhs0FDDvimr_CIozPbXtZJ7MWX5e6GjAT0ZcCifEYTfCvVQeD-CgtcPIqpBxRC8CqCEdDz1U0mxTgnELP73guBac_eWr1pydsKosbyMcrnPmZqY_YlG1StGPNM62kPeYIspgfE3hTlIB_aC44"
                alt="Cinematic shot of a choir performing in low light"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="size-20 bg-primary text-background-dark rounded-full flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-5xl">play_arrow</span>
            </div>
          </div>
        </motion.div>

        {/* Audio Player UI */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-6 rounded-2xl max-w-2xl mx-auto flex items-center gap-6"
        >
          <div className="size-16 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary">equalizer</span>
          </div>
          
          <div className="flex-1 text-left">
            <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Now Streaming</p>
            <h4 className="font-bold text-lg">Lux Aurumque - Virtual Session</h4>
            <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "33%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" as any }}
                className="h-full bg-primary"
              ></motion.div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hover:text-primary transition-colors">
                <span className="material-symbols-outlined">skip_previous</span>
            </button>
            <button className="size-10 bg-primary text-background-dark rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">pause</span>
            </button>
            <button className="hover:text-primary transition-colors">
                <span className="material-symbols-outlined">skip_next</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

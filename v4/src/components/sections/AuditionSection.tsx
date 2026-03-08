'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
};

export function AuditionSection() {
  return (
    <section id="audition" className="py-24 relative">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
        {/* Sheet Music Watermark Effect */}
        <div className="scale-150 rotate-12 flex flex-col gap-10">
          <div className="h-2 w-full bg-slate-100"></div>
          <div className="h-2 w-full bg-slate-100"></div>
          <div className="h-2 w-full bg-slate-100"></div>
          <div className="h-2 w-full bg-slate-100"></div>
          <div className="h-2 w-full bg-slate-100"></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">Join the <span className="text-primary">Harmony</span></h2>
          <p className="text-slate-400 text-lg">We are currently seeking Sopranos and Basses for our 2024 European Tour.</p>
        </motion.div>
        
        <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-12 rounded-3xl space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-white/5 border-white/10 rounded-lg py-4 px-4 focus:ring-primary focus:border-primary text-white placeholder-white/30" />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary">Vocal Part</label>
              <select className="w-full bg-white/5 border-white/10 rounded-lg py-4 px-4 focus:ring-primary focus:border-primary text-white appearance-none">
                <option className="bg-background-dark">Soprano</option>
                <option className="bg-background-dark">Alto</option>
                <option className="bg-background-dark">Tenor</option>
                <option className="bg-background-dark">Bass</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-primary">Email Address</label>
            <input type="email" placeholder="john@harmony.com" className="w-full bg-white/5 border-white/10 rounded-lg py-4 px-4 focus:ring-primary focus:border-primary text-white placeholder-white/30" />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-primary">Audition Link (Video/Audio)</label>
            <input type="url" placeholder="YouTube, SoundCloud, or Drive link" className="w-full bg-white/5 border-white/10 rounded-lg py-4 px-4 focus:ring-primary focus:border-primary text-white placeholder-white/30" />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-primary">About Your Journey</label>
            <textarea placeholder="Tell us about your choral experience..." className="w-full bg-white/5 border-white/10 rounded-lg py-4 px-4 focus:ring-primary focus:border-primary text-white h-32 placeholder-white/30"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-primary text-background-dark py-5 rounded-xl font-black text-xl flex justify-center items-center gap-2 hover:shadow-[0_0_30px_rgba(27,172,158,0.4)] transition-all">
            SUBMIT AUDITION
          </button>
        </motion.form>
      </div>
    </section>
  );
}

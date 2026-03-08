"use client";

import { motion } from "framer-motion";

export default function Audition() {
  return (
    <section id="audition" className="py-24 px-6 relative bg-darkTeal overflow-hidden">
      {/* Sheet Music Watermark */}
      <div className="absolute inset-0 sheet-music-bg bg-fixed bg-center" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-16 rounded-custom border border-primary/10 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4">
              Join the Harmony
            </h2>
            <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
              WE ARE SEEKING <br />
              <span className="italic text-primary">NEW RESONANCE</span>
            </h3>
            <p className="text-gray-300">
              Auditions for our upcoming &apos;Celestial&apos; tour are now open. We
              welcome all voice types with a passion for versatility and
              precision.
            </p>
          </div>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-custom px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">
                Voice Type
              </label>
              <select className="w-full bg-white/5 border border-white/10 rounded-custom px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none [&>option]:bg-darkTeal">
                <option>Soprano</option>
                <option>Alto</option>
                <option>Tenor</option>
                <option>Bass</option>
                <option>Baritone / Countertenor</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">
                Tell us about your nomadic journey
              </label>
              <textarea
                rows={4}
                placeholder="Your experience, musical background..."
                className="w-full bg-white/5 border border-white/10 rounded-custom px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y"
              />
            </div>
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-5 bg-primary text-darkTeal font-black rounded-custom uppercase tracking-widest hover:bg-white hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 btn-interaction"
              >
                Submit Audition Request
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

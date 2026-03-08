"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle Silk Overlay */}
      <div className="absolute inset-0 bg-silk-texture opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative order-2 md:order-1"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">
            Our Essence
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            The Nomadic Spirit
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Unlike traditional ensembles tied to a single stone cathedral,{" "}
            <strong className="text-white">Nomadic Voice</strong> believes the sanctuary is built
            wherever the harmony begins. We are a traveling collective that
            adapts to the acoustics of the world—from ancient canyons to
            industrial warehouses.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            &apos;Nomadic&apos; reflects our fluid repertoire and our refusal to be bound
            by one style, era, or language. We carry our home in our throats and
            our history in our breath.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <div className="glass-card p-8 md:p-12 rounded-custom relative overflow-hidden group shadow-2xl hover:bg-white/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16" />
            <div className="relative z-10 italic text-2xl md:text-3xl font-light text-primary leading-snug">
              &quot;We do not perform music; we inhabit it. Every concert is a temporary architecture of air and emotion, existing only in the moment it is heard.&quot;
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-sm uppercase tracking-widest text-gray-500">
                The Nomadic Manifesto
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

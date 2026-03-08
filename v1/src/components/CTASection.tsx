"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative mx-6 my-12 overflow-hidden rounded-3xl bg-primary lg:mx-20">
      {/* Decorative orbs */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative px-8 py-16 text-center lg:py-24"
      >
        <h2 className="mx-auto max-w-2xl text-3xl font-black text-white md:text-5xl">
          Ready to hear the divine?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
          Join our newsletter to receive early access to performance tickets and
          exclusive digital manuscript previews.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="h-14 flex-1 rounded-full border-none bg-white/10 px-6 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-accent transition-all"
          />
          <button className="h-14 rounded-full bg-accent px-8 font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95">
            Subscribe
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative px-6 py-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: Text Content */}
          <div className="relative z-10 flex flex-col gap-8">
            <FadeUp delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent border border-accent/20 w-fit">
                <span className="material-symbols-outlined text-sm">workspace_premium</span>
                World Class Ensemble
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
                A Modern{" "}
                <span className="text-primary italic">Manuscript</span> of
                Choral Artistry
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="max-w-lg text-lg leading-relaxed text-slate-600">
                Experience the divine harmony of ancient traditions and
                contemporary teal-toned compositions. Where voices weave like
                silk through golden corridors of sound.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <button className="h-14 rounded-full bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-primary/30 active:scale-95">
                  Explore Repertoire
                </button>
                <button className="h-14 rounded-full bg-white px-8 text-base font-bold text-slate-900 border border-slate-200 shadow-sm transition-all duration-200 hover:bg-slate-50 active:scale-95">
                  View Schedule
                </button>
              </div>
            </FadeUp>
          </div>

          {/* Right: Image Card */}
          <FadeUp delay={0.15}>
            <div className="relative">
              {/* Glow halo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />

              {/* Card */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-8 border-white shadow-2xl shadow-primary/10">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0UwuJgq2Y-SnxifcVQ8oPrfVBIu8ZNgOJMZueUJe36y0mwkQL5PmyeorQivHh734D0MutrAwjFnVHEIHo37L51LBnzNFv_PL4z65Ia9JGmv_C3r1AuMNsBGOYdaX1GhoxdHsgRmrRzktaG1rWqG6UVcIHSdoz-u5I5kRDg65oRtkaetnuAhMJYdpThB7I9PmJ1gTas3XCAE4LsLyRM__LZknANP_epKSkv_hcjv6GXD7_-IN8hH7xnrOaPl6e-IejP7mHv1-vz1fv')",
                  }}
                  aria-label="Professional choral ensemble performing in a modern architectural space"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
                    Featured Performance
                  </p>
                  <h3 className="text-2xl font-bold mt-1">
                    The Ethereal Soundscape
                  </h3>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

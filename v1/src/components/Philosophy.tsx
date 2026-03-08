"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    icon: "history_edu",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    hoverIconBg: "group-hover:bg-primary",
    title: "Ancient Roots",
    body: "Drawing inspiration from historic choral manuscripts, preserving the sacred weight of centuries-old vocal traditions.",
    linkText: "Read Legacy",
    linkColor: "text-accent",
    hoverBorder: "hover:border-accent/40 hover:shadow-accent/5",
  },
  {
    icon: "waves",
    iconBg: "bg-secondary/20",
    iconColor: "text-primary",
    hoverIconBg: "group-hover:bg-primary",
    title: "Teal Harmony",
    body: "Modern arrangements tailored for the contemporary ear, blending crisp clarity with deep, immersive vocal layers.",
    linkText: "Listen Now",
    linkColor: "text-primary",
    hoverBorder: "hover:border-primary/40 hover:shadow-primary/5",
  },
  {
    icon: "temp_preferences_custom",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    hoverIconBg: "group-hover:bg-accent",
    title: "Golden Accents",
    body: "Exquisite attention to every vocal detail, ensuring that each performance resonates with a premium, polished brilliance.",
    linkText: "View Details",
    linkColor: "text-accent",
    hoverBorder: "hover:border-accent/40 hover:shadow-accent/5",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-primary/5 py-24 silk-wave" id="choir">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="mb-4 text-accent font-bold tracking-widest uppercase text-sm">
            Our Philosophy
          </h2>
          <h3 className="text-4xl font-black text-slate-900 md:text-5xl">
            Where Silk and Gold Intertwine
          </h3>
          <div className="mt-6 h-1 w-24 rounded-full bg-accent" />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className={`group relative rounded-2xl border border-primary/10 bg-white p-8 transition-all duration-300 hover:shadow-xl ${card.hoverBorder}`}
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor} transition-colors duration-300 ${card.hoverIconBg} group-hover:text-white`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {card.icon}
                </span>
              </div>
              <h4 className="mb-3 text-xl font-bold text-slate-900">
                {card.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">{card.body}</p>
              <div
                className={`mt-6 flex items-center gap-2 text-sm font-bold ${card.linkColor}`}
              >
                {card.linkText}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

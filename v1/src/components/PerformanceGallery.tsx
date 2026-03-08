"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const performances = [
  {
    id: "winter-solstice",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfWyCI-u9ARVtuvB5oULKFpvZWlzqQfTXE3iQ-mSmLkP-fsPhYZLQcvBRSbeqDKpKPbQL7rnoAZ5BqWHHZ5zjRIcyk-PKU3Mj7heQG8ZCxcR4NLw90JpP7OyS3ltlkOSEDJOPBXTYe7FuuSMGxIof1-9rJwWZFR471IDJaeRHS7j9pJ395HKsqmP9v1K6sb8lcd1FHheq4oChXn12N2goeIxrydktHv0DpmYcim6T40A3wkwAGjRYWPG6GvOwt-7alo23NOnxSXPsF",
    alt: "Winter Solstice performance with dramatic blue and gold lighting",
    series: "Winter Series",
    title: "Winter Solstice",
    badgeText: "Tickets Available",
    badgeBg: "bg-accent",
    colSpan: "",
  },
  {
    id: "silk-song",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaP3JyQol9yX4xiBjcP2KiLUztgrYuOCtOnqY0khapMKCDqVcF7iL-BeNN4FAM-QR_mdst6dpp7tH0vh-S8k-u7_sLMtzXO9P87tl6KV_omqR3qL3d5FgtkSbsNL4c0-i_fZj_m6_1RaFDwd1pNz1WGVlO0HAhjmnhy5ciH1Y6iKhUpPvsZZTipEQBaJzFVwnXkSfxPZ3tVOS3DlyS752cDj2aQ2Ruuzu2Khuci8vf3yVeRg6qotueqxVuyc90wAQoYv_0LuaNvv9L",
    alt: "Silk and Song performance showing choir members in elegant flowing robes",
    series: "Acoustic Series",
    title: "Silk & Song",
    badgeText: "Limited Capacity",
    badgeBg: "bg-primary",
    colSpan: "",
  },
  {
    id: "cathedral-echoes",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZMJ8tfprt-qn3wOtkUhFNKUBT5GEuiRfAHAevRJgB2bzKpps2NYdEdSjIthOe2-At1MkYkzSnqs0fqauzszrqVYCzfAV53g5kegtgavVU7WDSd4lmwxnRpEVBHQKrHSEmHWrKFhC4YOIseQ15x2jWCBhT3q3kH0JNm52KFeX0sevsxB4f2M0RczuA51hQ2fnrHRtz8cwnZYeHl9MFq0N5O8exKVgmG5S4H7mAqq-Y5prk7-F8zHrQfxYEvh1l-HWSauUh_njgXQl8",
    alt: "Cathedral series performance in a massive gothic stone cathedral",
    series: "Grand Series",
    title: "Cathedral Echoes",
    badgeText: "Sold Out",
    badgeBg: "bg-accent",
    colSpan: "sm:col-span-2 lg:col-span-1",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export default function PerformanceGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 lg:px-20" id="performances">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-black text-slate-900">
              Performance Series
            </h2>
            <p className="mt-2 text-slate-600">
              A visual journey through our most iconic seasons.
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
            View All Events
            <span className="material-symbols-outlined text-sm">grid_view</span>
          </button>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {performances.map((perf) => (
            <motion.div
              key={perf.id}
              variants={cardVariants}
              className={`group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-lg ${perf.colSpan}`}
            >
              {/* Image with zoom */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={perf.imageUrl}
                  alt={perf.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                  {perf.series}
                </p>
                <h4 className="mt-1 text-2xl font-bold text-white">
                  {perf.title}
                </h4>
                <div className="mt-4 flex translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span
                    className={`rounded-full ${perf.badgeBg} px-4 py-1 text-xs font-bold text-white`}
                  >
                    {perf.badgeText}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

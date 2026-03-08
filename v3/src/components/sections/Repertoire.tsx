"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Sacred Echoes",
    desc: "From Renaissance polyphony by Palestrina to the modern spiritualism of Arvo Pärt.",
    bullets: ["• Gregorian Chant", "• Baroque Masses", "• Mystic Minimalist"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC57tSMmGumx-5iV3OuJnwt5OcaX0dw4JJiD41RTn1sqDmhl4kRywP4_UeOhJ9WKBEruzmL7f23wP9GPI-_FVXpkIt7lkV9f62T16CaIDae6BgvhXEQ7BMKpP-r95LM2MdbliFqs_NWTKi-3QDS5cyw2d8Z12tFQTTkNHhLorrCP3PnTZsKZgbe0UeB8Q7X8Y-ERLeryXuwSrO23txtayy6HZZvPElF0baHxTE5ev7PdaGKstGjgGE7ONaKcGm9DfFwoFSwRXDRRbrr",
  },
  {
    title: "Contemporary Vision",
    desc: "New commissions and avant-garde works that challenge the limits of the human voice.",
    bullets: ["• Choral Jazz", "• Extended Techniques", "• Indie Adaptations"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrfpo2aN0yT0Jp9lelLVnLqBeKIB1MPNv8xGPfQVcprPmbkuWa61vZ3SK-jXLCxwwQFa-rh1Gjk0DQgbh76YKcN-exGVgV1EQahEjCff5g2YqNmEhOM7bnl2WWtAvAmXcpOyfovjT7m0_Mu3diM7QF2VXALnIOj9EDjgzfpEvrKoRsJP1DSqVDTpY0c6_1R-02btusl0gQ4tdjBNOH03zfjVqDNqoanVVlmmxfQAyFfyBg0C0KWQ7HgjuZNnzlOJfVVMMDSbhtbct0",
  },
  {
    title: "Global Folk",
    desc: "Traditional stories and rhythms from across the globe, reimagined for ensemble.",
    bullets: ["• Nordic Herding Calls", "• African Spirituals", "• Balkan Polyphony"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhrDU3oIJNDlp9UuxOZ8TIzypYc5eBZzD4jdqg-JW34kLOMAULGcYSAgubAcCb4KFHjXPTELdEw5fw-Sku-xNFRZzzjxsqBIryLao-aiAaCwN7HUrG1vQeiioYMB4pw6jN0KLscVQvIrgLeOCEdB15xweH0SiMTQyS8OFBY98Js_AY8QfZI6jVq7PHvzmerssiSVjx5emenNdy4o82gtzA0xhqNdM3YrPcT1JBMz-5WQhTDbJYHjG9HtZpDCEJRpQoXFJ7cBMKR6Y5",
  },
];

export default function Repertoire() {
  return (
    <section id="repertoire" className="py-24 px-6 bg-darkTeal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">
              The Library
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              Boundless Repertoire
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-md"
          >
            Our programs weave together disparate centuries and cultures into a
            single sonic tapestry.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-charcoal/40 rounded-custom border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(27,172,158,0.3)] hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4">{cat.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {cat.desc}
                </p>
                <ul className="space-y-2 text-xs text-primary font-bold uppercase tracking-widest">
                  {cat.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

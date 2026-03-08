'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
};

export function RepertoireSection() {
  const cards = [
    {
      category: "Sacred",
      title: "Ancient Echoes",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIYvFPM05V0qvq9ldF1qIDubZh4u0sI8jBGRz-F1Kv7_P0ZfdpN30jnYoO4ZJQD2kxMYRCgZ22xiRVRz1u3H7zWJJkTbAJYHmjzNsVAq1YRW8BlU9s-Mzn3OszAVO1adSRXiiPYwJlfnfXNT0cyWxT7n1x6RdOdyToY9e1kQUyWyjk8WWP2rZCEsRx00qkH3VeeIieq56arCNF3mEmBfw8eV5uRRhmDhGD2iELzVLh4BFm5ZLauuX8hBjHISpY7OvLEREHekxmUAis",
      colorClass: "text-primary",
      lineColor: "bg-primary"
    },
    {
      category: "Contemporary",
      title: "Modern Pulsations",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDejAym61-sW-p-JTojtPb5Mx6PB9GXxn-SS0rGUncMy3Iukm42VmFwyI6I71ie-BAsuy-2Bt09K5-AySHc8pWYci66wG_9kz14tLTZ98aDEokslUbHEwpNRM-OGyWkDGSuD7kJpZKOTb6tfiHCacWXfMfi_fW6dgxjqtH7h7ggADZ1g551kR2j1wr1TdNRizRCtGGslS_CyODMXnXPUGARXit_BB7fyMRSns_IOYKdxgULoFevgLG2jJtiwk4oCJmJHBRTGeVP10rP",
      colorClass: "text-gold-accent",
      lineColor: "bg-gold-accent"
    },
    {
      category: "Global Folk",
      title: "World Traditions",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCirYlL_Df2xZ9qbQ5um3xWP_pcukdMyr93m-zVjb9CRnQNOoJV2tln0N3m1k0VNcz-pnUg77e4i_8XI0hCyyLUw-TNa0EPd9msgODCZ2z4zRkwXX-emVr0gZsZbGMYwFwrV0QNe6vj_pvtKYLj84V5zeSkA-JMfwR5bYJluOec51oG_n_RdL56j0sTxcOdBgR519zw1n7p7Fk1h8mUeROMQGGrwqjXQhPiErRtzSdCVwOumeTmBBJhCXvvHQ2PzAF02jPVt17ijCH",
      colorClass: "text-primary",
      lineColor: "bg-primary"
    }
  ];

  return (
    <section id="repertoire" className="py-24 px-6 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInItem}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h3 className="text-primary font-bold uppercase tracking-widest mb-4">Our Works</h3>
            <h2 className="text-4xl md:text-5xl font-bold">Diverse Repertoire</h2>
          </div>
          <p className="text-slate-500 max-w-md">Exploring the vast landscape of choral music from medieval chants to contemporary commissions.</p>
        </motion.div>

        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div 
                key={index} 
                variants={fadeInItem}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image 
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <span className={`${card.colorClass} text-xs font-bold uppercase tracking-[0.2em] mb-2 block`}>{card.category}</span>
                <h4 className="text-2xl font-bold mb-4">{card.title}</h4>
                <div className={`h-0.5 w-0 group-hover:w-full ${card.lineColor} transition-all duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

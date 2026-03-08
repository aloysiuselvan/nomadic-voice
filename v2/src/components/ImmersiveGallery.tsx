"use client";

import { motion } from "framer-motion";

export function ImmersiveGallery() {
  return (
    <section id="gallery" className="px-6 md:px-20 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-slate-900 dark:text-white text-4xl font-serif italic mb-4">The Immersive Experience</h2>
            <p className="text-slate-600 dark:text-slate-400">Step into a world where sound becomes a physical presence, wrapping you in layers of melodic silk.</p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
          >
            View All Gallery 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
          </motion.button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[500px] h-auto auto-rows-[200px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-2 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow" 
            title="Close up of choral singers with artistic stage lighting"
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUhvaJT3Ou2aM2Zse3zu5d1nZeCi0uW1NkTW2IsJ68YxGLD251OqsNFt2JwA4wRp-y5C7br3AR8u-H_9d3D9C8Jii_x6F06ojkdhHFWxtv9r6QB9QHbPvIZnnFMqWWWU-9QkBBAiuuz8Ut9h7QXq5wbGFzNTzzhyts21wGdXjxTmmKJl2EZSNDWuiYEtdJ414b3E6zH36tl9FW3f5rxkVgQNwXNbFBHzatUzVB4BdWuCKZa-ybM-fKxF2TNt1gIJlGCEdCQr2rvu-d")` }}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow" 
            title="Wide shot of a concert hall with teal lighting"
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOOwPOvJ7-X4AjeDiVd0yPqKLTLzRha6hxWWPhBahjqBQ3_3FHFZgb38dh_ltvREN4Ll9L3v0_OvDvtvBII0xbuQYq6y9w61iSyNKNc80L2cD-DxM5JakD-Gg09uiwEWsqEEeoo0cKzVYjALZYfDfg2H9xKKFEW2zLVaJti7uPpCLPbklcL7WnnjBSBj_lwDA65E5IJWDPRuvzLv41ZADQaciqBG43K7sb6bfJhcFALTzYML-DNcvdpLVwg7wuZM2Wk3B_B6vMAzJa")` }}
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-end p-6 bg-primary" 
          >
            <span className="text-white font-serif italic text-2xl">Vocal Fluidity</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow hidden md:block" 
            title="Choir members in silhouette against a golden sunset"
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1vbsLkx7kWijV0GZmZkOa1bQAOdd94r-dUlfuI9FNhSt62GwC6bys7xGYzrLyPUMdfqJH99kGlcnNBvpBLUuuAsZuXIUMt9M1QM0arF5UEEVclWpHlAeOR1HLjWv2Y3g6CMyt7mMO84krveXv-lT3STnE5rmouXhaTCUhVE2LnykyeJNJ2FliS58s9PxHjiVb8QrI_aFsrN7-bSlaSiOmFV4FUWme2qrK8TaWMq2L8S7v39LTMR2GOcQ8hBdBy4jaiu7PCFfSL_c4")` }}
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-2 md:col-span-2 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow hidden md:block" 
            title="Microphone in a recording studio with warm mint accents"
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAF0qh5qwfuXLpj_s-NSVcRuNk2dYkD_vxatKOLZYwo6javcoHTl33fFBE6wcDNxylWKuy4fYwTC0p4xGkwR7M-vTdM9fG_PfV6XGThek8uX9OmDhS9G1lP5AXUBRiwhPSxaJ90I82o2Hf0gpQfJ1DEz1csylU3K5jhMkhYCcZfxAoAY6TneKSuQfMy-JR5_JtrCcHxizOIEfgdhleo4oqlDYl0zytx2napgiQP6g_MVnNt8LPqywosnAKY5_ihHNbrYEiJ0c_4UIr7")` }}
          />
        </div>
      </div>
    </section>
  );
}

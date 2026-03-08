"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Conductor() {
  return (
    <section
      id="conductor"
      className="py-24 bg-charcoal relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative p-4 md:p-8">
            <div className="absolute inset-0 border border-primary/20 rounded-custom translate-x-4 translate-y-4" />
            <div className="relative z-10 w-full aspect-[4/5] rounded-custom overflow-hidden shadow-2xl group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqjTR3QF_n1yyKucCfVG5wepjiWUPYAwpmXHJ5w7MEkgjqrF1UyODHC2CR0ayammnORswLllh_p9mUobpsZLsafeK6VKJ8SVhsBHyFD6sBl5_QvKGeUJgCOOQKBor0mTsmcgGEwccAkPwoZpQMdCaW0PiTse_dW1KMlg-pvicU7Ilundeoa-nvKusfM93s_e9NIDP05MJ2i8zuMcn_rQT9zhuyBT9WlK0jMf91KpRqdjHpMHkbrNlyXpgGMnWpAjYWJPmx78Ell7Bv"
                alt="Maestro Elias Thorne"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">
            The Artistic Director
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Elias Thorne</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            A visionary conductor whose work bridges the gap between classical
            rigor and raw emotional expression. Elias has led ensembles across
            four continents, always searching for the &quot;unheard note&quot; in every
            score.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 italic">
            &quot;My role isn&apos;t to control the sound, but to curate the silence around
            it. Nomadic Voice is my most personal project yet—a search for home
            through harmony.&quot;
          </p>
          <div className="font-[family-name:var(--font-dancing-script)] italic text-4xl text-primary opacity-80">
            <span className="block transform -rotate-2 scale-110 tracking-widest pl-4">
              Elias Thorne
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

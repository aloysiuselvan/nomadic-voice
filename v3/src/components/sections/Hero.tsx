"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 origin-top"
      >
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCozy1G6CeCuulKhb9_5wWCbYce5r0dzn3wme2UVPFYQD699y8lxYKxEZxu60X0Op3Pq30xbFB6vcVXlp8g2TIFU20gfvc_HZOp_sOKFMz9pJ5pspbwJ5qAmq_jonzVhCjRx8NHItG4FJOEcbLeV9KVWBM5rBnqR4_LUnQduIRR-EgEGJXDaq7NZvpceei76FRrbLYpKQM7Qtd0FslHceoYREF5OWvrshJ-bKLkuhv0bCr6t-Xz6e6XzIiNjE60TLEkKpzuDU8H6yjU"
          alt="Choir in Cathedral"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-darkTeal/20 via-darkTeal/60 to-darkTeal" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 text-center px-6 max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
          VOICES <br />
          <span className="text-primary italic block -mt-4 md:-mt-8 opacity-90">
            WITHOUT
          </span>
          <span className="relative z-10">BORDERS</span>
        </h1>
        <p className="text-lg md:text-2xl font-light text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          A nomadic choral collective transcending physical spaces through the
          sacred architecture of human resonance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#soundscape"
            className="group px-8 py-4 bg-primary text-darkTeal font-bold rounded-custom hover:bg-white transition-all flex items-center gap-2 btn-interaction"
          >
            Experience the Sound
            <svg
              className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          className="h-6 w-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}

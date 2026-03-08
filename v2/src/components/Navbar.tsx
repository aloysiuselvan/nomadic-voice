"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full px-6 md:px-20 py-4 transition-all duration-300 ${
        scrolled 
        ? "border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm" 
        : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative size-8">
            <Image 
              src="/images/logo.png" 
              alt="Nomadic Voice Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <h2 className="text-xl font-bold tracking-tight font-serif italic text-slate-900 dark:text-white">
            Nomadic Voice
          </h2>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {["Performances", "The Choir", "Gallery", "Join Us"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium hover:text-primary transition-colors">
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex min-w-[120px] items-center justify-center rounded-full h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            Book Tickets
          </button>
          <div 
            className="size-10 rounded-full border-2 border-mint bg-cover bg-center" 
            title="Profile picture of a choir director"
            style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXpGG3XTjX9x7yZR6x-Dxk10ImqDyfqYHLRsdZtL_1NrV2lgYzaA6wEbVnJ1SVaHto_05zySNmgznWwQ6bi4-_pxWQLwe4QZJ72VZdwPmGo1uTjrMb7L3YaTRXhdLQ3KDH23JsCogibjyASzD6OK91VUtmwaQ1ZqxMoWokKNVUTrQ2ak7o4dZN2F3-Vf9hFSDuOPfXOT24IIOtW9eI5nJYaC8rc9u9Sp3kCUjAX36XraAFAwgdym3esvETcf-RFMG1iX53MK_r4Ptw")`}}
          />
        </div>
      </div>
    </motion.header>
  );
}

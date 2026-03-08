"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "The Choir", href: "#choir" },
    { label: "Performances", href: "#performances" },
    { label: "Manuscripts", href: "#manuscripts" },
    { label: "Join Us", href: "#join" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Nomadic Voice logo"
              width={40}
              height={40}
              className="rounded-lg shadow-lg shadow-primary/20"
            />
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
            Nomadic <span className="text-primary">Voice</span>
          </h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white transition-all duration-200 hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-md flex">
            Book Tickets
          </button>
          <div
            className="h-10 w-10 rounded-full border-2 border-accent/30 bg-cover bg-center ring-2 ring-white"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnKZ7d7X3Vbhz3TDFcKKSmPa8RUfPH5DqIinYlLG0ZWPl91Bdq-VB-F0zbx7gH4SGm8L_TnXC3WZP1HucklZRhoZrsx1HpTsE5GNw1A5UwdLxBAR4391o1vQzE6vRQrEbUrTo-oY32VRRKyR8ARdy6UdsSF3j5XBPQnY8LFpzLLpXtsnFOdrkmC4bY868mn7BvHyYH2-Y9FX9rxV6g5Qybhk9Pob4QC_bLT0e_lV1NqXbWKTBYgaSAVxA7FFkTHHrmiXT7rTbqLAui')",
            }}
            aria-label="Profile avatar of a choir director"
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex md:hidden items-center justify-center h-10 w-10 rounded-lg text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-1 pt-4 pb-2 border-t border-primary/10 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-semibold text-slate-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 px-4">
                <button className="w-full h-11 rounded-full bg-primary text-sm font-bold text-white transition-all hover:bg-primary/90 active:scale-95 shadow-md">
                  Book Tickets
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

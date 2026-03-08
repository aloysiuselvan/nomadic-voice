"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-darkTeal/70 border-b border-white/5 backdrop-saturate-150 ${
        isScrolled ? "py-4" : "py-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-nomadic.png"
              alt="Nomadic Voice Logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
            />
            <span className="text-xl font-extrabold tracking-widest uppercase hidden sm:block">
              Nomadic Voice
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
          <Link href="#philosophy" className="hover:text-primary transition-colors">Philosophy</Link>
          <Link href="#soundscape" className="hover:text-primary transition-colors">Soundscape</Link>
          <Link href="#repertoire" className="hover:text-primary transition-colors">Repertoire</Link>
          <Link href="#conductor" className="hover:text-primary transition-colors">The Conductor</Link>
          <Link
            href="#audition"
            className="px-5 py-2.5 bg-primary/10 border border-primary/30 text-primary rounded-custom hover:bg-primary hover:text-white transition-all duration-300 btn-interaction"
          >
            Auditions
          </Link>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu (Simplified for this version) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-darkTeal border-t border-white/5 absolute w-full left-0 top-full">
          <div className="flex flex-col p-6 gap-4 text-sm font-medium tracking-wider uppercase">
            <Link href="#philosophy" onClick={() => setIsMobileMenuOpen(false)}>Philosophy</Link>
            <Link href="#soundscape" onClick={() => setIsMobileMenuOpen(false)}>Soundscape</Link>
            <Link href="#repertoire" onClick={() => setIsMobileMenuOpen(false)}>Repertoire</Link>
            <Link href="#conductor" onClick={() => setIsMobileMenuOpen(false)}>The Conductor</Link>
            <Link href="#audition" onClick={() => setIsMobileMenuOpen(false)} className="text-primary">
              Auditions
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

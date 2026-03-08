'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center relative size-10 mr-2">
            <Image 
              src="/logo-nomadic.png" 
              alt="Nomadic Voice Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-xl font-black tracking-tighter uppercase">Nomadic <span className="text-primary">Voice</span></h2>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="#philosophy" className="text-sm font-medium hover:text-primary transition-colors">Philosophy</Link>
          <Link href="#soundscape" className="text-sm font-medium hover:text-primary transition-colors">Soundscape</Link>
          <Link href="#repertoire" className="text-sm font-medium hover:text-primary transition-colors">Repertoire</Link>
          <Link href="#conductor" className="text-sm font-medium hover:text-primary transition-colors">Conductor</Link>
          <Link href="#audition" className="bg-primary hover:bg-primary/90 text-background-dark px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">Join Us</Link>
        </div>
        
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Content (Simplified for now, as not in original design but good practice) */}
      {isOpen && (
         <div className="md:hidden bg-background-dark border-b border-primary/10 px-6 py-4 flex flex-col gap-4">
             <Link href="#philosophy" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">Philosophy</Link>
             <Link href="#soundscape" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">Soundscape</Link>
             <Link href="#repertoire" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">Repertoire</Link>
             <Link href="#conductor" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">Conductor</Link>
             <Link href="#audition" onClick={() => setIsOpen(false)} className="bg-primary text-center text-background-dark px-6 py-2 rounded-full text-sm font-bold">Join Us</Link>
         </div>
      )}
    </nav>
  );
}

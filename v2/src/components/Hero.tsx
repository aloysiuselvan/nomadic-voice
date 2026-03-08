"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="px-6 md:px-20 py-12 md:py-20 mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl md:rounded-[3rem] shadow-2xl"
        >
          <div 
            className="flex min-h-[600px] flex-col items-center justify-center text-center p-8 md:p-20 bg-cover bg-center relative" 
            title="Modern choir performing in an ethereal light-filled architectural space"
            style={{ backgroundImage: `linear-gradient(rgba(18, 32, 31, 0.7) 0%, rgba(18, 32, 31, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-Z15z-6HrU5nFqfS1SRQV55xekv0FG0POXM1nFzZiqg5wFNfTGuEfwjxJRcLsk8pW4FOYIDKPfCMsNgLO1LlU9KDyejhbONhBSDJnrtMZIlzqtws-X6UrcTtfwiRwGHkaf8lzanWYls374VLyebivxQKP1yo6iDNLHOaSq6gFoJF4ZHAaQ5VXhcxGDTJDd9FsIAYnzT6aHc0HTlZ93nN-tF9nNbPdLW8gtwv-EDZKEbEDer-GyAsPxzrkCB3SHDsqg5RKZOWiGktt")` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl flex flex-col gap-6 items-center">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-mint font-bold tracking-[0.2em] uppercase text-xs md:text-sm"
              >
                World Premiere Tour 2024
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-white text-5xl md:text-7xl font-serif italic leading-[1.1] mb-2"
              >
                Ethereal Harmonies <br/>in <span className="text-gold not-italic">Motion</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
              >
                Experience the fluid vocal textures and nomadic spirit of our world-renowned choir. A tapestry of sound woven in Teal and Gold.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              >
                <button className="flex items-center justify-center gap-2 rounded-full h-14 px-10 bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                  </svg>
                  Listen Now
                </button>
                <button className="flex items-center justify-center rounded-full h-14 px-10 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all">
                  View Schedule
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

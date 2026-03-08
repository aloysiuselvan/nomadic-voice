"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Soundscape() {
  return (
    <section id="soundscape" className="py-24 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">
            Current Vibrations
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">The Soundscape</h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Audio Player UI */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 rounded-custom border border-white/10 relative group">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-primary/20 rounded-custom flex items-center justify-center animate-pulse shrink-0">
                  <svg
                    className="h-12 w-12 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Northern Lights</h4>
                  <p className="text-gray-500 text-sm">Ola Gjeilo | Live in Oslo</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-primary/10 text-primary text-[10px] rounded font-bold uppercase">
                    Now Playing
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="space-y-4">
                <div className="h-1 bg-white/10 rounded-full relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-primary" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>1:42</span>
                  <span>4:15</span>
                </div>
                <div className="flex justify-center items-center gap-8">
                  <button className="text-gray-400 hover:text-white btn-interaction">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 6h2v12H6zm3.5 6L18 6v12z"></path>
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white text-darkTeal rounded-full flex items-center justify-center hover:scale-110 transition-transform btn-interaction">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-white btn-interaction">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18l8.5-6L6 6zm9-12h2v12h-2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-custom transition-colors group cursor-pointer">
                <span className="text-gray-600 font-bold group-hover:text-primary">02</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Lux Aurumque</p>
                  <p className="text-xs text-gray-500">Eric Whitacre</p>
                </div>
                <span className="text-xs text-gray-600">3:52</span>
              </div>
              <div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-custom transition-colors group cursor-pointer">
                <span className="text-gray-600 font-bold group-hover:text-primary">03</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">The Parting Glass</p>
                  <p className="text-xs text-gray-500">Traditional Folk</p>
                </div>
                <span className="text-xs text-gray-600">4:20</span>
              </div>
            </div>
          </div>

          {/* Video Embed */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-primary/20 blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
              <div className="relative bg-black rounded-custom overflow-hidden border border-primary/20 teal-glow aspect-video">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAkp3onVcKT08lyPK_2w7W4nJW0zQzoqF1NgHoEXvbodbbOrzoRFFeHDWuKu24mDyvelU8rv1S8E1aqbsVAbRWNS487S8Tt-zMGuTcWx6aguEArdVdH1iLkyiNOL-ZVj8XPl1mJOOUwYp6wK0IjLAedgDg7yzIr6AM8rV2Hxol-klkGFoVweklZtpFlFAKbYMRb6nnlptFkbGmsWwmYemTCEucW5QHeee99w3mUclGwdGOfuKMC1jMJsiARG7AlSYoJNJdkAtJaXB9"
                  alt="Video Placeholder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group/play w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110">
                    <svg
                      className="h-10 w-10 text-darkTeal fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-darkTeal/80 backdrop-blur-sm p-4 border-l-2 border-primary">
                  <p className="text-sm font-bold">Featured Performance</p>
                  <p className="text-xs text-gray-400">
                    Echoes of the Canyon - Live Cinematic Concert (2023)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

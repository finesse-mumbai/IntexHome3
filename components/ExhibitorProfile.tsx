import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar, Database, Layers } from 'lucide-react';

const EXHIBITIONS = [
  {
    id: 'ex-bg',
    title: 'Intex Bangladesh',
    edition: '17th Edition',
    date: '18-19-20 June, 2026',
    location: 'ICCB, Dhaka',
    imageUrl: '/assets/bangladesh.png',
    category: 'Fibres & Yarns'
  },
  {
    id: 'ex-sl',
    title: 'Intex Sri Lanka',
    edition: '17th Edition',
    date: '5-6-7 August 2026',
    location: 'BMICH, Colombo',
    imageUrl: '/assets/sri lanka.jpg.jpeg',
    category: 'Fabrics & Accessories'
  },
  {
    id: 'ex-in',
    title: 'Intex India',
    edition: '17th Edition',
    date: 'Announcing Soon',
    location: 'New Delhi',
    imageUrl: '/assets/india.jpg.jpeg',
    category: 'Denim & Apparel'
  }
];

const ExhibitorProfile: React.FC = () => {
  return (
    <section className="relative bg-archive-cream py-24 md:py-32 overflow-hidden border-b border-archive-charcoal/10 group" id="exhibitions">

      {/* Background Micro-details */}
      <div className="absolute top-0 right-0 p-12 opacity-20 pointer-events-none">
        <span className="text-[10px] font-mono text-archive-charcoal tracking-[0.5em] uppercase">Upcoming_Nodes // 2026 Cycle</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-12 relative z-10">

        {/* Section Title */}
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-archive-clay"></div>
            <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Sourcing Registry</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-[0.9] text-archive-charcoal uppercase">
            Upcoming <br /><span className="text-archive-clay">Exhibitions.</span>
          </h2>
        </div>

        {/* Multi-Layered Stacked Plate Background */}
        <div className="relative group/plates">
          {/* Layer 1: Bottom White Plate */}
          <div className="absolute inset-0 bg-white rounded-[64px] -rotate-[1.95deg] -skew-y-[1.95deg] shadow-xl transition-transform duration-1000 group-hover/plates:-rotate-[2.6deg]" />

          {/* Layer 2: Middle Dark Plate (#2f2c2c) */}
          <div className="absolute inset-0 bg-[#2f2c2c] rounded-[56px] -rotate-[1.3deg] -skew-y-[1.3deg] shadow-2xl transition-transform duration-1000 group-hover/plates:-rotate-[1.95deg] overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
            />
          </div>

          {/* Layer 3: Top Accent Plate (Subtle Shadow/Tint) */}
          <div className="absolute inset-x-[-10px] inset-y-[-10px] bg-white/5 backdrop-blur-[2px] rounded-[48px] -rotate-[0.65deg] -skew-y-[0.65deg] border border-white/10 pointer-events-none transition-transform duration-1000 group-hover/plates:-rotate-[1.3deg]" />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 rotate-[1.3deg] skew-y-[1.3deg] p-6 md:p-12">
            {EXHIBITIONS.map((ex, idx) => (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.15,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="group relative h-[600px] overflow-hidden bg-archive-charcoal rounded-3xl shadow-2xl"
              >
                {/* Image Layer */}
                <img
                  src={ex.imageUrl}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal via-archive-charcoal/60 to-transparent opacity-90" />

                {/* Technical Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <span className="block text-[40px] font-black text-white/10 leading-none tabular-nums">0{idx + 1}</span>
                      <div className="inline-block px-3 py-1 bg-archive-clay border border-archive-clay">
                        <span className="text-[9px] font-black text-white tracking-[0.2em] uppercase">{ex.edition}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-4xl font-black text-white leading-[0.9] group-hover:tracking-wider transition-all duration-700">
                        {ex.title.split(' ')[0]} <br /> {ex.title.split(' ')[1]}
                      </h3>

                      <div className="space-y-3">
                        <div className="flex flex-col">
                          <span className="text-[8px] font-bold text-white/40 tracking-widest uppercase">Event Date</span>
                          <span className="text-sm font-black text-white tracking-wider uppercase">{ex.date}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] font-bold text-white/40 tracking-widest uppercase">Event Venue</span>
                          <div className="flex items-center gap-2">
                            <MapPin size={12} className="text-archive-clay" />
                            <span className="text-xs font-black text-white tracking-wider uppercase">{ex.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-white group/btn relative overflow-hidden py-4 px-6 flex items-center justify-between transition-all hover:bg-archive-clay">
                      <span className="relative z-10 text-[9px] font-black text-archive-charcoal group-hover:text-white tracking-[0.4em] transition-colors uppercase">VIEW DETAILS</span>
                      <ArrowUpRight size={16} className="relative z-10 text-archive-clay group-hover:text-white transition-colors" />
                      <div className="absolute inset-0 bg-archive-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                  </div>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExhibitorProfile;

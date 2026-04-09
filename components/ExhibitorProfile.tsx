
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar, Database, Layers } from 'lucide-react';

const EXHIBITIONS = [
  {
    id: 'ex-bg',
    title: 'INTEX BANGLADESH',
    edition: '17th Edition',
    date: '18-19-20 June, 2026',
    location: 'ICCB, DHAKA',
    imageUrl: 'https://sl.intexsouthasia.com/assets/img/Gallery/2025/21.jpg',
    category: 'FIBRES & YARNS'
  },
  {
    id: 'ex-sl',
    title: 'INTEX SRI LANKA',
    edition: '17th Edition',
    date: '5-6-7 August 2026',
    location: 'BMICH, COLOMBO',
    imageUrl: 'https://sl.intexsouthasia.com/assets/img/Gallery/2025/8.jpg',
    category: 'FABRICS & ACCESSORIES'
  },
  {
    id: 'ex-in',
    title: 'INTEX INDIA',
    edition: '17th Edition',
    date: 'ANNOUNCING SOON',
    location: 'NEW DELHI',
    imageUrl: 'https://sl.intexsouthasia.com/assets/img/Gallery/2025/14.jpg',
    category: 'DENIM & APPAREL'
  }
];

const ExhibitorProfile: React.FC = () => {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden border-b border-archive-charcoal/10" id="exhibitions">

      {/* Background Micro-details */}
      <div className="absolute top-0 right-0 p-12 opacity-20 pointer-events-none">
        <span className="text-[10px] font-mono text-archive-charcoal uppercase tracking-[0.5em]">Upcoming_Nodes // 2026 Cycle</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-12 relative z-10">

        {/* Section Title */}
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-archive-clay"></div>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Sourcing Registry</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] text-archive-charcoal">
            Upcoming <br /><span className="text-archive-clay">Exhibitions.</span>
          </h2>
        </div>

        {/* Cinematic Grid in Textured Orange Container */}
        <div className="bg-archive-clay p-4 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 relative z-10">
            {EXHIBITIONS.map((ex, idx) => (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="group relative h-[600px] overflow-hidden bg-archive-charcoal"
              >
                {/* Image Layer */}
                <img
                  src={ex.imageUrl}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal via-transparent to-transparent opacity-80" />

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
                      <h3 className="text-4xl font-black text-white leading-[0.9] uppercase group-hover:tracking-wider transition-all duration-700">
                        {ex.title.split(' ')[0]} <br /> {ex.title.split(' ')[1]}
                      </h3>

                      <div className="space-y-3">
                        <div className="flex flex-col">
                          <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Event Date</span>
                          <span className="text-sm font-black text-white uppercase tracking-wider">{ex.date}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Event Venue</span>
                          <div className="flex items-center gap-2">
                            <MapPin size={12} className="text-archive-clay" />
                            <span className="text-xs font-black text-white uppercase tracking-wider">{ex.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-white group/btn relative overflow-hidden py-4 px-6 flex items-center justify-between transition-all hover:bg-archive-clay">
                      <span className="relative z-10 text-[9px] font-black text-archive-charcoal group-hover:text-white uppercase tracking-[0.4em] transition-colors">View Details</span>
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

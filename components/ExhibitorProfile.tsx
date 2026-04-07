
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar, Database, Layers } from 'lucide-react';

const EXHIBITIONS = [
  {
    id: 'ex-bg',
    title: 'INTEX BANGLADESH',
    date: '18-19-20 June, 2026',
    location: 'ICCB, DHAKA',
    code: 'BD_NODE_26',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ex-sl',
    title: 'INTEX SRI LANKA',
    date: '5-6-7 August 2026',
    location: 'BMICH, COLOMBO',
    code: 'SL_NODE_26',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ex-in',
    title: 'INTEX INDIA',
    date: 'ANNOUNCING SOON',
    location: 'NEW DELHI',
    code: 'IN_NODE_26',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200'
  }
];

const ExhibitorProfile: React.FC = () => {
  return (
    <section className="relative bg-white text-archive-charcoal py-10 md:py-14 overflow-hidden border-b border-archive-charcoal/10" id="exhibitors">

      {/* Technical 'Thousand Line' Background */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none overflow-hidden">
        {/* Primary Dense Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #000, #000 1px, transparent 1px, transparent 3px)',
            backgroundSize: '3px 100%',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%)',
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%)'
          }}
        ></div>
        {/* Secondary Accent Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #d99578, #d99578 1px, transparent 1px, transparent 60px)',
            backgroundSize: '60px 100%',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        ></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

        {/* Simplified Section Header */}
        <div className="mb-14 flex flex-col items-center pt-10">
          <motion.h2
            initial={{ letterSpacing: "0.4em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.1em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-5xl font-serif font-black leading-none text-archive-charcoal text-center uppercase"
          >
            Upcoming Exhibitions
          </motion.h2>
        </div>

        {/* Technical Registry Index Table */}
        <div className="border border-archive-charcoal/10 bg-white mb-20">
          {EXHIBITIONS.map((ex, idx) => (
            <motion.div
              key={ex.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 lg:grid-cols-12 border-b last:border-b-0 border-archive-charcoal/10 relative overflow-hidden"
            >
              <div className="lg:col-span-1 border-r border-archive-charcoal/10 p-6 flex flex-col justify-between items-center text-center bg-white">

                <span className="text-4xl font-serif font-black  text-archive-charcoal/10 group-hover:text-archive-clay transition-colors duration-700">0{idx + 1}</span>
                <div className="flex flex-col gap-1 items-center">
                  <div className={`w-2 h-2 ${idx === 2 ? 'bg-orange-500' : 'bg-green-500'} group-hover:scale-125 transition-transform`}></div>
                </div>
              </div>

              <div className="lg:col-span-5 border-r border-archive-charcoal/10 p-10 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Database size={14} className="text-archive-clay" />
                    <span className="text-[9px] font-mono font-bold text-archive-charcoal/80 uppercase tracking-[0.3em]">17<sup>th</sup> Edition</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-black uppercase  text-archive-charcoal leading-[0.9] group-hover:translate-x-2 transition-transform duration-1000">
                    {ex.title}
                  </h3>
                </div>
              </div>

              <div className="lg:col-span-3 border-r border-archive-charcoal/10 p-10 flex flex-col justify-center gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar size={16} className="text-archive-clay mt-1" />
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-archive-charcoal/80 uppercase block tracking-tighter">Event Date</span>
                      <span className="text-xs font-black uppercase tracking-widest">{ex.date}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={16} className="text-archive-clay mt-1" />
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-archive-charcoal/80 uppercase block tracking-tighter">Event Vanue</span>
                      <span className="text-xs font-black uppercase tracking-widest">{ex.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 relative group/img overflow-hidden min-h-[250px] lg:min-h-0">
                <img
                  src={ex.imageUrl}
                  className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-125 group-hover:scale-110 group-hover:brightness-50 transition-all duration-[2000ms]"
                  alt={ex.title}
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <Layers size={16} className="text-white/20 group-hover:text-archive-clay" />
                  </div>
                  <div className="space-y-4">
                    <button className="w-full bg-white text-archive-charcoal py-3 text-[10px] font-black tracking-[0.22em] uppercase hover:bg-archive-clay hover:text-white transition-all flex items-center justify-center gap-4">
                      VIEW DETAILS <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
                <motion.div
                  initial={{ left: -10 }}
                  animate={{ left: ['0%', '100%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 w-px h-full bg-white/40 z-20 pointer-events-none opacity-0 group-hover/img:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitorProfile;


import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Maximize2, Layers, Cpu } from 'lucide-react';
import { CATEGORIES } from '../constants';
import { CategoryItem } from '../types';

const BuyerProfile: React.FC = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden" id="exhibitor-matrix">
      {/* Background Technical Grid - Pure Minimalism */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="space-y-6">

            <h2 className="text-xl md:text-4xl font-serif font-black tracking-tighter uppercase  text-black leading-[0.7]">
              EXHIBITOR <br />
              <span className="not- text-outline" style={{ WebkitTextStroke: '2px rgba(217, 149, 120, 1)' }}>PROFILE.</span>
            </h2>
          </div>

          <div className="hidden lg:block border-l border-black/10 pl-8 space-y-4 max-w-xs">
            <div className="flex items-center gap-2 text-archive-clay">
              <Cpu size={12} />
              <span className="text-[9px] font-black tracking-widest uppercase">List of Exhibitor Profile</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed text-black/50">
              High-fidelity material datasets verified for global apparel manufacturing.
            </p>
          </div>
        </div>

        {/* Minimal Grid - Borders Removed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 overflow-hidden">
          {CATEGORIES.map((cat, index) => (
            <ExhibitorUnit key={cat.id} cat={cat} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const ExhibitorUnit: React.FC<{ cat: CategoryItem; index: number }> = ({ cat, index }) => {
  const colSpanMap = [
    'lg:col-span-3', 'lg:col-span-6', 'lg:col-span-3',
    'lg:col-span-6', 'lg:col-span-6',
    'lg:col-span-3', 'lg:col-span-6', 'lg:col-span-3'
  ];
  const colSpan = colSpanMap[index] || 'lg:col-span-4';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`${colSpan} bg-black group relative h-[385px] cursor-crosshair overflow-hidden`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={cat.imageUrl}
          alt={cat.title}
          className="w-full h-full object-cover  brightness-[0.5] contrast-125 group-hover:scale-105 group-hover:brightness-[0.3] transition-all duration-[2000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
      </div>

      <div className="absolute inset-0 z-10 p-10 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-white font-black bg-white/10 px-2 py-0.5">UNIT_{index + 1}</span>
          </div>
          <Layers className="text-white/40 group-hover:text-white transition-all" size={20} />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-black uppercase  text-white leading-[0.85] group-hover:translate-x-2 transition-transform duration-500">
              {cat.title}
            </h3>
            <div className="h-0.5 w-0 bg-archive-clay group-hover:w-full transition-all duration-700"></div>
          </div>

          <div className="relative overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-widest text-black leading-relaxed translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white p-3">
              {cat.description}
            </p>
          </div>

          <div className="flex justify-between items-end pt-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
            <button className="flex items-center gap-3 bg-white text-black px-4 py-2 text-[9px] font-black uppercase tracking-widest hover:bg-archive-clay hover:text-white transition-all">
              Access Data
              <Plus size={10} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BuyerProfile;


import React from 'react';
import { motion } from 'framer-motion';
import { BUYER_PROFILES } from '../constants';
import { Plus, ArrowRight, UserPlus, ClipboardList } from 'lucide-react';

const BuyerCategories: React.FC = () => {
  return (
    <section className="py-40 bg-gradient-to-br from-white via-white to-archive-cream border-b border-archive-charcoal overflow-hidden" id="buyer-profile">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Technical Demographics</span>
            </div>
            <h2 className="text-sm md:text-4xl font-serif font-black tracking-tighter uppercase  text-archive-charcoal leading-[0.8]">
              BUYER <br /><span className="text-outline">PROFILE.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-6">
            <p className="text-sm font-bold tracking-widest text-archive-bronze uppercase opacity-60">
              A sophisticated matrix of global sourcing entities, from high-street fashion labels to industrial textile exporters.
            </p>
            <div className="flex items-center gap-8 text-[9px] font-black tracking-widest text-archive-charcoal">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 border border-archive-clay bg-archive-clay"></div>
                VERIFIED
              </span>
              <span className="opacity-30">|</span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 border border-archive-clay"></div>
                GLOBAL ACCESS
              </span>
            </div>
          </div>
        </div>

        {/* The Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {BUYER_PROFILES.map((profile, index) => (
            <ArchiveCard key={profile.title} profile={profile} index={index} />
          ))}

          {/* Custom CTA Box filling the remaining 3 columns on XL screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="xl:col-span-3 lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-1 h-[420px] bg-archive-charcoal p-12 flex flex-col justify-between relative group overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-archive-clay/5 rotate-45 translate-x-32 -translate-y-32"></div>
            <div className="absolute -bottom-8 -left-8 text-[12rem] font-serif font-black text-white/5 select-none pointer-events-none">
              REG
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-archive-clay"></div>
                <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Direct Access Portal</span>
              </div>
              <h3 className="text-xl md:text-3xl font-serif font-black text-archive-cream uppercase leading-[0.9]">
                JOIN THE <br /> <span className="text-archive-clay">TEXTILE NETWORK.</span>
              </h3>
              <p className="text-xs font-bold tracking-widest text-archive-cream/40 uppercase max-w-sm">
                Register as a buyer or enquire for exhibition space to secure your position in the 2025 South Asian matrix.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-between px-6 py-5 bg-archive-clay text-archive-cream group/btn hover:bg-white hover:text-archive-charcoal transition-all duration-500">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase">Buyer Registration</span>
                <UserPlus size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
              <button className="flex items-center justify-between px-6 py-5 border border-white/20 text-white group/btn hover:border-archive-clay hover:text-archive-clay transition-all duration-500">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase">Exhibitor Enquiry</span>
                <ClipboardList size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

            {/* Technical Detail */}
            <div className="absolute top-8 right-8 text-[8px] font-black tracking-widest text-white/20 uppercase">
              PORTAL_REF // INTEX_2025
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const ArchiveCard: React.FC<{ profile: any; index: number }> = ({ profile, index }) => {
  const serial = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02 }}
      className="group relative h-[380px] border border-dotted border-archive-charcoal/20 bg-white/40 backdrop-blur-sm overflow-hidden cursor-pointer flex flex-col p-8 transition-all duration-500 hover:border-archive-clay hover:bg-white"
    >
      {/* Background Serial Number Decor */}
      <span className="absolute -bottom-4 -right-2 text-[10rem] font-serif font-black text-archive-charcoal/5 leading-none select-none pointer-events-none group-hover:text-archive-clay/10 transition-colors duration-500">
        {serial}
      </span>

      {/* Top Meta */}
      <div className="flex justify-between items-start relative z-10 shrink-0">
        <div className="space-y-1">
          <span className="text-[9px] font-black text-archive-clay tracking-[0.4em] uppercase block">{serial}</span>
          <div className="w-6 h-[1px] bg-archive-clay"></div>
        </div>
        <div className="flex flex-col items-end gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
          <div className="w-3 h-[1px] bg-archive-charcoal"></div>
          <div className="w-5 h-[1px] bg-archive-charcoal"></div>
        </div>
      </div>

      {/* Center Specimen Slide */}
      <div className="relative mt-8 mb-6 flex items-center justify-center shrink-0">
        <div className="w-full aspect-square max-h-48 relative p-2 border border-archive-charcoal/5">
          <div className="w-full h-full overflow-hidden transition-all duration-700">
            <img
              src={profile.imageUrl}
              alt={profile.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
            />
          </div>

          {/* Viewfinder brackets - dotted */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-dotted border-archive-clay/40 group-hover:border-archive-clay transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-dotted border-archive-clay/40 group-hover:border-archive-clay transition-colors"></div>
        </div>
      </div>

      {/* Label Section */}
      <div className="relative z-10 mt-auto">

        <h4 className="text-lg font-serif font-black uppercase leading-tight text-archive-charcoal group-hover:text-archive-clay transition-all line-clamp-2">
          {profile.title}
        </h4>
      </div>

      {/* Interactive Detail Overlay */}
      <div className="absolute inset-0 bg-archive-charcoal opacity-0 group-hover:opacity-[0.02] transition-opacity pointer-events-none"></div>
    </motion.div>
  );
};

export default BuyerCategories;

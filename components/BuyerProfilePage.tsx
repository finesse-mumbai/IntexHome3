
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ArrowUpRight, Database, Fingerprint, Target, Search } from 'lucide-react';
import { BUYER_PROFILES } from '../constants';

const BuyerProfilePage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Sourcing Matrix // 2025</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              Buyer <br />
              <span className="text-white">Profiles.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black text-archive-charcoal/80 leading-tight">
                A comprehensive directory of <span className="text-archive-clay">global procurement leaders</span> representing the industry's most influential sourcing nodes.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-end">
              <div className="flex items-center gap-8 border border-archive-charcoal/10 p-6 bg-white/50 backdrop-blur-sm">
                <div className="text-center px-4 border-r border-archive-charcoal/10">
                  <div className="text-3xl font-black text-archive-clay">22</div>
                  <div className="text-[8px] font-black tracking-widest opacity-40 uppercase">Profile Types</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-3xl font-black text-archive-clay">70K+</div>
                  <div className="text-[8px] font-black tracking-widest opacity-40 uppercase">Trade Visitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-archive-charcoal/10 border border-archive-charcoal/10">
          {BUYER_PROFILES.map((profile, idx) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02 }}
              viewport={{ once: true }}
              className="bg-white group relative aspect-[3/4] overflow-hidden flex flex-col hover:bg-archive-charcoal transition-all duration-700"
            >
              {/* Image Frame */}
              <div className="h-1/2 relative overflow-hidden bg-archive-cream/30">
                <img
                  src={profile.imageUrl}
                  alt={profile.title}
                  className="w-full h-full object-cover brightness-90 group-hover:scale-110 group-hover:brightness-50 transition-all duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal/40 to-transparent"></div>


              </div>

              {/* Content Frame */}
              <div className="h-1/2 p-8 flex flex-col justify-between group-hover:text-white transition-colors duration-700">
                <div className="space-y-4">

                  <h3 className="text-xl font-black tracking-tighter leading-[0.9] group-hover:text-archive-clay transition-colors duration-500">
                    {profile.title}
                  </h3>
                </div>

                <div className="pt-6 flex justify-between items-center border-t border-archive-charcoal/5 group-hover:border-white/10">
                  <button className="flex items-center gap-2 text-[9px] font-black tracking-[0.3em] text-archive-charcoal group-hover:text-white transition-colors group/btn">
                    VIEW DATASET <ArrowUpRight size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform uppercase" />
                  </button>
                  <Fingerprint size={14} className="text-archive-charcoal/10 group-hover:text-archive-clay" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Demographics Info Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black text-archive-clay leading-none uppercase">Global Demographics.</h2>
              <div className="w-20 h-px bg-archive-clay"></div>
            </div>
            <div className="space-y-8">
              <p className="text-[12px] font-bold tracking-[0.15em] leading-relaxed text-archive-charcoal/60">
                The Intex buyer registry consists of pre-vetted industry professionals with high purchasing power. Our database is verified through a rigorous protocol to ensure exhibitors connect with genuine decision-makers from over 40 countries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Targeted Regions", value: "South Asia, EU, USA" },
                  { label: "Purchase Authority", value: "85% Decision Makers" },
                  { label: "Sector Diversity", value: "Fashion to Technical" },
                  { label: "Audit Standard", value: "Verified Registry" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2 border-l border-archive-charcoal/10 pl-6">
                    <span className="text-[8px] font-black tracking-widest opacity-40 block uppercase">{item.label}</span>
                    <span className="text-[11px] font-black text-archive-charcoal uppercase">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-archive-charcoal p-16 text-white space-y-12 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 opacity-5">
              <Target size={200} />
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em] uppercase">Visitor Registry</span>
              <h3 className="text-xl font-black leading-none uppercase">Register as a <br /> High-Value Buyer.</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/40 leading-relaxed">
                Gain exclusive access to the 2026 Intex Archive. Network with verified manufacturers and access proprietary trend data ahead of the global market.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal transition-all">
                  REGISTER NOW
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal hover:border-white transition-all">
                  VIEW DIRECTORY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Technical Detail */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default BuyerProfilePage;

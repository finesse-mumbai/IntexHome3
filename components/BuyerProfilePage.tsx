import React from 'react';
import { motion } from 'framer-motion';
import { BUYER_PROFILES } from '../constants';

const BuyerProfilePage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              Buyer <br className="hidden lg:inline" />
              <span className="text-white">Profiles.</span>
            </h1>
          </div>

          <div className="flex items-center justify-center gap-8 border border-archive-charcoal/10 p-6 bg-white/50 backdrop-blur-sm shrink-0">
            <div className="text-center px-4">
              <div className="text-3xl font-black text-archive-clay">22</div>
              <div className="text-[14px] font-black tracking-widest opacity-40 uppercase">Profile Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {BUYER_PROFILES.map((profile, idx) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02 }}
              viewport={{ once: true }}
              className="bg-white rounded-none w-48 sm:w-52 p-4 flex flex-col items-center justify-between shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="py-3 px-1 flex items-center justify-center">
                <img
                  src={profile.imageUrl}
                  alt={profile.title}
                  loading="lazy"
                  className="rounded-full border border-archive-charcoal/15 w-20 h-20 object-contain p-1.5 bg-archive-cream/30 group-hover:scale-110 group-hover:border-archive-clay transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.title)}&background=DBD3D0&color=2F2C2C&bold=true`;
                  }}
                />
              </div>
              <div className="text-center text-archive-charcoal font-bold text-sm md:text-base py-2 leading-snug group-hover:text-archive-clay transition-colors">
                {profile.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BuyerProfilePage;

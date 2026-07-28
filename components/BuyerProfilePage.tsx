import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUYER_PROFILES } from '../constants';

const BUYER_SLIDER_IMAGES = [
  {
    url: '/assets/img/GalleryBD/2025/7.png',
    title: 'Global Procurement Delegations',
    caption: 'Verified Buyers from 40+ Nations'
  },
  {
    url: '/assets/img/GalleryBD/2025/8.png',
    title: 'International Brand Sourcing Heads',
    caption: 'Retail Chains & Fashion Houses'
  },
  {
    url: '/assets/img/GalleryBD/2025/9.png',
    title: 'B2B Matchmaking & Executive Meetings',
    caption: 'Direct Business Matchmaking'
  },
  {
    url: '/assets/img/GalleryBD/2025/10.png',
    title: 'Apparel Exporters & Buying Houses',
    caption: 'High-Volume Order Procurement'
  },
  {
    url: '/assets/img/GalleryBD/2025/11.png',
    title: 'Textile Industry Leadership Summit',
    caption: 'Strategic Sourcing Intelligence'
  }
];

const BuyerImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BUYER_SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BUYER_SLIDER_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + BUYER_SLIDER_IMAGES.length) % BUYER_SLIDER_IMAGES.length);
  };

  const current = BUYER_SLIDER_IMAGES[currentIndex];

  return (
    <div className="relative w-full h-full min-h-[480px] bg-black overflow-hidden group shadow-2xl border border-archive-charcoal/10">
      <AnimatePresence mode="wait">
        <motion.img
          key={current.url}
          src={current.url}
          alt={current.title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover opacity-85"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal via-transparent to-black/30" />

      {/* Slide Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="px-3 py-1.5 bg-black/70 backdrop-blur-md text-xs font-mono font-black text-white tracking-widest uppercase border border-white/20">
          0{currentIndex + 1} // 0{BUYER_SLIDER_IMAGES.length}
        </span>
      </div>

      {/* Caption Overlay */}
      <div className="absolute bottom-6 left-6 right-24 z-10 space-y-1">
        <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
          {current.title}
        </h4>
        <p className="text-xs font-mono font-bold text-archive-clay uppercase tracking-widest">
          {current.caption}
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-black/70 hover:bg-archive-clay text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 bg-black/70 hover:bg-archive-clay text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Progress Bar Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          key={currentIndex}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 4.5, ease: 'linear' }}
          className="h-full bg-archive-clay"
        />
      </div>
    </div>
  );
};

const BuyerProfilePage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[14px] font-black tracking-[0.5em] text-archive-clay uppercase">Sourcing Matrix // 2025</span>
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
              <div className="flex items-center justify-center gap-8 border border-archive-charcoal/10 p-6 bg-white/50 backdrop-blur-sm">
                <div className="text-center px-4">
                  <div className="text-3xl font-black text-archive-clay">22</div>
                  <div className="text-[14px] font-black tracking-widest opacity-40 uppercase">Profile Types</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {BUYER_PROFILES.map((profile, idx) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02 }}
              viewport={{ once: true }}
              className="bg-white group relative aspect-[3/4] overflow-hidden flex flex-col border border-archive-charcoal/10 shadow-sm hover:shadow-md hover:bg-archive-charcoal transition-all duration-700"
            >
              {/* Image Frame */}
              <div className="h-2/3 relative overflow-hidden bg-archive-cream/30">
                <img
                  src={profile.imageUrl}
                  alt={profile.title}
                  className="w-full h-full object-cover brightness-90 group-hover:scale-110 group-hover:brightness-50 transition-all duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal/40 to-transparent"></div>
              </div>

              {/* Content Frame */}
              <div className="flex-1 px-6 py-5 flex items-center group-hover:text-white transition-colors duration-700">
                <h3 className="text-base font-black tracking-tighter leading-tight group-hover:text-archive-clay transition-colors duration-500">
                  {profile.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Demographics Info Section - Replaced Text with Image Slider & Equal Height Alignment */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Image Slider */}
          <div className="w-full h-full min-h-[480px]">
            <BuyerImageSlider />
          </div>

          {/* Visitor Registry Box */}
          <div className="bg-archive-charcoal p-12 md:p-16 text-white h-full min-h-[480px] flex flex-col justify-between relative shadow-2xl border border-archive-charcoal/10 overflow-hidden">
            <div className="absolute -bottom-8 -right-8 opacity-5 pointer-events-none">
              <Target size={200} />
            </div>

            <div className="space-y-4 relative z-10">
              <span className="text-archive-clay text-[14px] font-black tracking-[0.5em] uppercase">Visitor Registry</span>
              <h3 className="text-3xl md:text-5xl font-black leading-[0.95] uppercase">
                Register as a <br /> High-Value Buyer.
              </h3>
            </div>

            <div className="space-y-8 relative z-10 pt-6">
              <p className="text-[14px] font-bold tracking-[0.15em] text-white/60 leading-relaxed">
                Gain exclusive access to the 2026 Intex Archive. Network with verified manufacturers and access proprietary trend data ahead of the global market.
              </p>
              <div>
                <button className="px-12 py-5 bg-archive-clay text-white font-black text-[14px] tracking-[0.3em] hover:bg-white hover:text-archive-charcoal transition-all">
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyerProfilePage;

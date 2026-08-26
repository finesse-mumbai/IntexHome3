import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

const SLIDER_IMAGES = [
  {
    url: '/assets/img/GalleryBD/2025/1.png',
    title: 'Intex Sourcing Floor Showcase',
    caption: 'Premier Textile Exhibition Intex Archive'
  },
  {
    url: '/assets/img/GalleryBD/2025/2.png',
    title: 'Global Fabric & Yarn Innovators',
    caption: 'International Manufacturing Excellence'
  },
  {
    url: '/assets/img/GalleryBD/2025/3.png',
    title: 'Executive Trade Delegations',
    caption: 'Connecting Manufacturers & Buying Powerhouses'
  },
  {
    url: '/assets/img/GalleryBD/2025/4.png',
    title: 'High-Performance Technical Textiles',
    caption: 'Sustainable & Activewear Innovations'
  },
  {
    url: '/assets/img/GalleryBD/2025/5.png',
    title: 'B2B Matchmaking & Networking',
    caption: 'Exclusive Business Interactions'
  }
];

const ExhibitorImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);
  };

  const current = SLIDER_IMAGES[currentIndex];

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

const ExhibitorProfilePage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              Exhibitor <br className="hidden lg:inline" />
              <span className="text-white">Profiles.</span>
            </h1>
          </div>

          <div className="flex items-center gap-8 border border-archive-charcoal/10 p-6 bg-white/50 backdrop-blur-sm shrink-0">
            <div className="text-center px-4">
              <div className="text-3xl font-black text-archive-clay">08</div>
              <div className="text-[14px] font-black tracking-widest opacity-40 uppercase">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid - Detailed Expansion of Home Style */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white group relative overflow-hidden flex flex-col h-full border border-archive-charcoal/10"
            >
              {/* Image Layer */}
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-black shrink-0">
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-full object-cover brightness-50 group-hover:scale-110 group-hover:brightness-[0.3] transition-all duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal via-transparent to-transparent opacity-60"></div>

                {/* Tech Overlays */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                    <span className="text-[14px] font-mono font-black text-white">{(idx + 1).toString().padStart(2, '0')}</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold text-white tracking-tight leading-none group-hover:text-archive-clay transition-colors">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Content Layer */}
              <div className="p-8 bg-white group-hover:bg-archive-charcoal transition-all duration-500 flex-1">
                <p className="text-[14px] font-medium leading-relaxed text-archive-charcoal/70 group-hover:text-white/80 line-clamp-4">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Footer Informational Section - Replaced Text with Image Slider */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Image Slider */}
          <div className="w-full h-full min-h-[480px]">
            <ExhibitorImageSlider />
          </div>

          {/* Booth Enquiry Box */}
          <div className="bg-archive-charcoal p-12 md:p-16 text-white h-full min-h-[480px] flex flex-col justify-between relative shadow-2xl border border-archive-charcoal/10">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Database size={80} />
            </div>

            <div className="space-y-4 relative z-10">
              <span className="text-archive-clay text-[14px] font-black tracking-[0.5em] uppercase">Booth Enquiry</span>
              <h3 className="text-3xl md:text-5xl font-black leading-[0.95] uppercase">
                Secure your space <br /> in the 2026 Intex.
              </h3>
            </div>

            <div className="space-y-8 relative z-10 pt-6">
              <p className="text-[14px] font-bold tracking-[0.15em] text-white/60 leading-relaxed">
                Join the most influential sourcing show in South Asia. Limited  booth spaces are now available for our upcoming editions in Dhaka, Colombo, and New Delhi.
              </p>
              <div>
                <button className="px-12 py-5 bg-archive-clay text-white font-black text-[14px] tracking-[0.3em] hover:bg-white hover:text-archive-charcoal transition-all">
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhibitorProfilePage;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Generate a large set of images for the background grid using existing items
  const gridImages = Array.from({ length: 80 }, (_, i) => GALLERY_ITEMS[i % GALLERY_ITEMS.length].imageUrl);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);

  return (
    <section className="relative py-40 bg-[#050505] border-b border-white/10 overflow-hidden" id="gallery">
      
      {/* Perspective Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div 
          className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-10 gap-3 p-4 w-[150%] -ml-[25%] -mt-[10%]"
          style={{
            transform: 'rotate(15deg) skewX(-5deg)',
          }}
        >
          {gridImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: (i % 40) * 0.015,
                duration: 0.8,
                ease: "easeOut"
              }}
              className="aspect-square overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl relative"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className={`absolute inset-0 opacity-10 mix-blend-overlay ${i % 3 === 0 ? 'bg-archive-clay' : i % 3 === 1 ? 'bg-blue-900' : 'bg-orange-900'}`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_bottom,_rgba(5,5,5,0.7)_0%,_transparent_70%,_#050505_100%)]" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-black/10" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-20">
        
        {/* Main Section Heading */}
        <div className="mb-16 text-center">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay border-b border-archive-clay pb-2 inline-block">Spotlight</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none text-white mt-6">
              VISUAL <span className="text-outline" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}>ARCHIVE.</span>
            </h2>
        </div>

        {/* Cinematic 80% Width Image Container */}
        <div className="w-full md:w-[85%] lg:w-[80%] mx-auto shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] rounded-[40px] overflow-hidden border border-white/10 relative">
          <div className="aspect-[16/9] md:aspect-video relative overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                src={GALLERY_ITEMS[activeIndex].imageUrl}
                className="w-full h-full object-cover brightness-90 contrast-110"
              />
            </AnimatePresence>

            {/* TOP RIGHT: CATEGORY TAG (Keep as overlay) */}
            <div className="absolute top-8 right-8 bg-archive-clay text-white px-6 py-2 text-[10px] font-black tracking-widest uppercase rounded-full shadow-lg z-30">
              {GALLERY_ITEMS[activeIndex].category}
            </div>

            {/* Progress bar for auto-play indicator */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-50">
              <motion.div
                key={activeIndex}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-archive-clay"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA & NAVIGATION ROW (Outside the image) */}
        <div className="w-full md:w-[85%] lg:w-[80%] mx-auto mt-12 flex flex-col md:flex-row justify-between items-end gap-10">
          {/* LEFT: METADATA */}
          <div className="space-y-4">
            <motion.div 
              key={`year-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[11px] font-black tracking-[0.4em] text-archive-clay uppercase border-l-2 border-archive-clay pl-4"
            >
              {GALLERY_ITEMS[activeIndex].year} RECORD
            </motion.div>
            <motion.h3 
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-5xl font-serif font-black uppercase leading-none text-white tracking-tighter"
            >
              {GALLERY_ITEMS[activeIndex].title}
            </motion.h3>
          </div>

          {/* RIGHT: NAVIGATION */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group/btn"
            >
              <ArrowLeft size={28} className="group-hover/btn:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group/btn"
            >
              <ArrowRight size={28} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

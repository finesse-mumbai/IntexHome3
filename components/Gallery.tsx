
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
    <section className="relative py-32 bg-archive-charcoal border-b border-white/5 overflow-hidden" id="gallery">

      {/* Perspective Grid Background - WATERFALL MARQUEE (Now Full Opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="flex justify-center gap-0 w-[150%] -ml-[25%] -mt-[20%]"
          style={{
            transform: 'rotate(15deg) skewX(-5deg)',
          }}
        >
          {Array.from({ length: 10 }).map((_, colIdx) => (
            <motion.div
              key={colIdx}
              animate={{
                y: ["0%", "-50%"]
              }}
              transition={{
                duration: 40 + (colIdx % 3) * 10,
                delay: colIdx * 0.5,
                ease: "linear",
                repeat: Infinity
              }}
              className="flex flex-col flex-1 gap-0"
            >
              {[...gridImages.filter((_, i) => i % 10 === colIdx), ...gridImages.filter((_, i) => i % 10 === colIdx)].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden relative border-[0.5px] border-white/5">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className={`absolute inset-0 opacity-20 mix-blend-overlay ${i % 3 === 0 ? 'bg-archive-clay' : i % 3 === 1 ? 'bg-blue-900' : 'bg-orange-900'}`} />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Overlays - Adjusted for Visibility */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black/60" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] opacity-80" />

      <div className="max-w-[1440px] mx-auto px-12 relative z-20 flex flex-col items-center justify-center min-h-[60vh]">

        {/* Main Section Heading */}
        <div className="text-center mb-12 space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-archive-clay"></div>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Spotlight Archive</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-none text-white">
            VISUAL <span className="text-white">ARCHIVE.</span>
          </h2>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-archive-clay text-white px-12 py-5 rounded-full text-xs font-black tracking-[0.3em] uppercase shadow-[0_20px_40px_-10px_rgba(238,117,57,0.5)] hover:bg-white hover:text-archive-clay transition-all duration-500 border-[3px] border-white"
        >
          VIEW FULL EVENT GALLERY
        </motion.button>

        {/* Slider & Navigation (Temporarily Disabled - Commented Out) */}
        {/* 
        <div className="w-full md:w-[85%] lg:w-[80%] mx-auto shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] rounded-[40px] overflow-hidden border border-white/10 relative mt-20">
          ... (Slider is hidden)
        </div>
        */}
      </div>
    </section>
  );
};

export default Gallery;

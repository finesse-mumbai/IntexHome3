
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);

  return (
    <section className="py-40 bg-archive-cream border-b border-archive-charcoal" id="gallery">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-6">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay border-b border-archive-clay pb-2 inline-block">Spotlight</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-none text-archive-charcoal">
              VISUAL <span className="text-outline">ARCHIVE.</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-16 h-16 border border-archive-charcoal flex items-center justify-center text-archive-charcoal hover:bg-archive-charcoal hover:text-archive-cream transition-all"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-16 h-16 border border-archive-charcoal flex items-center justify-center text-archive-charcoal hover:bg-archive-charcoal hover:text-archive-cream transition-all"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 overflow-hidden border border-archive-charcoal aspect-video relative group">
            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={GALLERY_ITEMS[activeIndex].imageUrl}
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute top-8 left-8 bg-archive-clay text-archive-cream px-4 py-2 text-[10px] font-black tracking-widest uppercase">
              {GALLERY_ITEMS[activeIndex].category} // REF_{activeIndex + 1}
            </div>

            {/* Progress bar for auto-play indicator */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-archive-charcoal/10">
              <motion.div
                key={activeIndex}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-archive-clay"
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-4">
              <div className="text-[11px] font-black tracking-widest text-archive-clay uppercase">{GALLERY_ITEMS[activeIndex].year} RECORD</div>
              <h3 className="text-2xl font-serif font-black uppercase leading-tight text-archive-charcoal">{GALLERY_ITEMS[activeIndex].title}</h3>

            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 border border-archive-charcoal text-center bg-archive-charcoal text-archive-cream">
                <div className="text-4xl font-serif font-black text-archive-clay">{GALLERY_ITEMS[activeIndex].rating}</div>
                <div className="text-[8px] font-black tracking-widest uppercase opacity-60">Quality Index</div>
              </div>
              <div className="p-8 border border-archive-charcoal text-center">
                <div className="text-4xl font-serif font-black text-archive-charcoal">AA+</div>
                <div className="text-[8px] font-black tracking-widest uppercase opacity-60">Archive Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

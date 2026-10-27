import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';

const CEREMONY_IMAGES = [
  'https://bd.intexsouthasia.com/assets/img/Gallery/2026/1.jpg',
  'https://bd.intexsouthasia.com/assets/img/Gallery/2025/1.png',
  'https://bd.intexsouthasia.com/assets/img/Gallery/2024/large/3.jpg',
  'https://bd.intexsouthasia.com/assets/img/Gallery/2023/large/3.jpg',
  'https://sl.intexsouthasia.com/assets/img/Gallery/2026/31.jpg',
  'https://sl.intexsouthasia.com/assets/img/Gallery/2026/37.jpeg',
  'https://sl.intexsouthasia.com/assets/img/Gallery/2024/1.jpg',
  'https://sl.intexsouthasia.com/assets/img/Gallery/2023/4.png',
  'https://sl.intexsouthasia.com/assets/img/Gallery/2018/large/1.jpg',
  'https://in.intexsouthasia.com/assets/img/Photogallery/2023/5.jpg'
];

const VipOpeningCeremonyPage: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % CEREMONY_IMAGES.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev - 1 + CEREMONY_IMAGES.length) % CEREMONY_IMAGES.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  const navigateTo = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-archive-cream min-h-screen selection:bg-archive-clay selection:text-white pb-24 text-archive-charcoal">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-8 sm:pt-12 space-y-10">

        {/* TOP BAR / BACK NAVIGATION */}
        <div className="flex items-center justify-between pb-6 border-b border-archive-charcoal/10">
          <button
            onClick={() => navigateTo('#schedule')}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-archive-charcoal/10 text-archive-charcoal hover:bg-archive-clay hover:text-white hover:border-archive-clay text-xs font-bold uppercase tracking-wider transition-all shadow-sm group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Events & Program</span>
          </button>
        </div>

        {/* CLEAN TITLE */}
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-archive-charcoal leading-none">
            VIP Opening <span className="text-archive-clay">Ceremony.</span>
          </h1>
        </div>

        {/* PURE IMAGE BOXES (NO TEXT) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-2">
          {CEREMONY_IMAGES.map((imgUrl, index) => (
            <motion.div
              key={imgUrl}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-archive-charcoal/10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-archive-charcoal/5"
            >
              <img
                src={imgUrl}
                alt={`VIP Opening Ceremony ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              aria-label="Close photo"
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-archive-clay text-white transition-colors z-30"
            >
              <X size={22} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex(
                  (activePhotoIndex - 1 + CEREMONY_IMAGES.length) % CEREMONY_IMAGES.length
                );
              }}
              aria-label="Previous photo"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-archive-clay text-white transition-colors z-30"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((activePhotoIndex + 1) % CEREMONY_IMAGES.length);
              }}
              aria-label="Next photo"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-archive-clay text-white transition-colors z-30"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Photo Container */}
            <div
              className="max-w-6xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={CEREMONY_IMAGES[activePhotoIndex]}
                alt={`VIP Opening Ceremony photo ${activePhotoIndex + 1}`}
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VipOpeningCeremonyPage;

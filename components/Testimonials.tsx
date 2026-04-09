
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Hash, CornerDownRight, ChevronLeft, ChevronRight, Binary, Fingerprint, ArrowLeft, ArrowRight } from 'lucide-react';

const ITEMS_PER_PAGE = 10;

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Divide testimonials into packets of 10
  const pages = useMemo(() => {
    const p = [];
    for (let i = 0; i < TESTIMONIALS.length; i += ITEMS_PER_PAGE) {
      p.push(TESTIMONIALS.slice(i, i + ITEMS_PER_PAGE));
    }
    return p;
  }, []);

  const handleNextPage = () => setCurrentPage((prev) => (prev + 1) % pages.length);
  const handlePrevPage = () => setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);

  const handleNextSpecimen = () => {
    const nextIdx = (active + 1) % TESTIMONIALS.length;
    setActive(nextIdx);
    // Sync current page if needed
    const newPage = Math.floor(nextIdx / ITEMS_PER_PAGE);
    if (newPage !== currentPage) setCurrentPage(newPage);
  };

  const handlePrevSpecimen = () => {
    const prevIdx = (active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    setActive(prevIdx);
    // Sync current page if needed
    const newPage = Math.floor(prevIdx / ITEMS_PER_PAGE);
    if (newPage !== currentPage) setCurrentPage(newPage);
  };

  return (
    <section className="flex flex-col border-y border-archive-charcoal bg-archive-cream overflow-hidden" id="testimonials">

      {/* FULL WIDTH HEADER: TESTIMONIALS RECORDS */}
      <div className="w-full border-b border-archive-charcoal bg-white py-32 px-12 overflow-hidden relative group">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-archive-clay"></div>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Exhibitor & Buyer Feedback</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase leading-[0.9] tracking-tighter text-archive-charcoal">
            TESTIMONIALS <span className="text-archive-clay">RECORDS.</span>
          </h2>
        </motion.div>

        {/* Background Decorative Matrix */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-archive-charcoal/5 flex items-center justify-center pointer-events-none opacity-20">
          <Binary size={120} strokeWidth={0.5} className="text-archive-charcoal rotate-12" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[700px]">

        {/* LEFT PANEL: ACTIVE SPECIMEN (Dark/Charcoal) - 50% */}
        <div className="w-full lg:w-1/2 bg-archive-charcoal text-archive-cream p-12 md:p-24 flex flex-col justify-between relative border-r border-archive-charcoal">
          <div className="flex justify-between items-center opacity-40 mb-12">
            <div className="flex items-center gap-3">
              <Hash size={14} />
              <span className="text-[9px] font-black tracking-[0.5em] uppercase">Person Word </span>
            </div>
            <span className="text-[8px] font-mono uppercase text-white tracking-[0.3em] border p-2 rounded bg-[#EE7539] font-bold">{TESTIMONIALS[active].type}</span>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <blockquote className="text-lg md:text-xl font-black leading-[1.1] text-white tracking-tighter max-w-2xl">
                  “{TESTIMONIALS[active].quote}”
                </blockquote>

                <div className="flex items-start gap-8 pt-12 border-t border-white/10">
                  {/* Requested 60px * 60px Image */}
                  <div className="w-[60px] h-[60px] bg-archive-clay overflow-hidden flex-shrink-0 border border-white/20">
                    <img
                      src={TESTIMONIALS[active].imageUrl}
                      alt={TESTIMONIALS[active].author}
                      className="w-full h-full object-cover brightness-75 contrast-125 transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CornerDownRight size={14} className="text-archive-clay" />
                      <h4 className="text-lg font-black uppercase text-white tracking-tight">
                        {TESTIMONIALS[active].author}
                      </h4>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black tracking-[0.3em] uppercase text-archive-clay">
                        {TESTIMONIALS[active].role}
                      </span>
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30">
                        {TESTIMONIALS[active].company}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons Replacement */}
          <div className="flex justify-between items-center border-t border-white/10 pt-10">
            <button
              onClick={handlePrevSpecimen}
              className="flex items-center gap-4 group/nav-btn text-[10px] font-black tracking-[0.4em] uppercase text-white/40 hover:text-archive-clay transition-all"
            >
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover/nav-btn:bg-archive-clay group-hover/nav-btn:border-archive-clay group-hover/nav-btn:text-white transition-all">
                <ArrowLeft size={14} />
              </div>
              <span>Prev Record</span>
            </button>

            <div className="text-[8px] font-mono text-archive-clay font-black tracking-widest opacity-20 hidden md:block">
              SPECIMEN_NODE_{String(active + 101).padStart(3, '0')}
            </div>

            <button
              onClick={handleNextSpecimen}
              className="flex items-center gap-4 group/nav-btn text-[10px] font-black tracking-[0.4em] uppercase text-white/40 hover:text-archive-clay transition-all"
            >
              <span>Next Record</span>
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover/nav-btn:bg-archive-clay group-hover/nav-btn:border-archive-clay group-hover/nav-btn:text-white transition-all">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT PANEL: REGISTRY DIRECTORY (White Background) - 50% */}
        <div className="w-full lg:w-1/2 bg-white text-archive-charcoal flex flex-col">
          {/* List Sub-Header */}
          <div className="p-8 border-b border-archive-charcoal flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-20">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-archive-charcoal rotate-45"></div>
              <span className="text-[11px] font-black tracking-[0.6em] uppercase">Testimonial Cards List</span>
            </div>
            <div className="text-[9px] font-black uppercase tracking-widest px-4 py-2 bg-archive-charcoal text-white">
              Card List 0{currentPage + 1} // 0{pages.length}
            </div>
          </div>

          {/* Directory List Area - Strictly 10 items */}
          <div className="flex-1 relative overflow-hidden bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col"
              >
                {pages[currentPage].map((t) => {
                  const globalIndex = TESTIMONIALS.findIndex(item => item.id === t.id);
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActive(globalIndex)}
                      className={`w-full text-left p-6 border-b border-archive-charcoal/5 transition-all flex items-center justify-between group h-[10%] ${active === globalIndex ? 'bg-gray-100' : 'hover:bg-archive-charcoal hover:text-white'}`}
                    >
                      <div className="flex items-center gap-8 overflow-hidden">
                        <span className={`text-[10px] font-mono font-black shrink-0 ${active === globalIndex ? 'text-archive-clay' : 'opacity-20'}`}>
                          {String(globalIndex + 1).padStart(3, '0')}
                        </span>
                        <div className="truncate">
                          <span className="text-[13px] font-black tracking-widest uppercase block truncate">{t.author}</span>
                          <span className={`text-[8px] font-bold uppercase tracking-widest truncate block ${active === globalIndex ? 'text-archive-clay' : 'opacity-40'}`}>
                            {t.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {active === globalIndex && (
                          <motion.div layoutId="dir-active-rect" className="w-1.5 h-1.5 bg-archive-clay rotate-45" />
                        )}
                        <span className={`text-[8px] font-mono uppercase opacity-0 group-hover:opacity-100 transition-opacity ${active === globalIndex ? 'text-archive-clay' : ''}`}>
                          [ View_Record ]
                        </span>
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Horizontal Slider Controls for the Directory (Packet Navigation) */}
          <div className="p-8 border-t border-archive-charcoal bg-white flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="flex border border-archive-charcoal">
                <button
                  onClick={handlePrevPage}
                  className="p-5 hover:bg-archive-charcoal hover:text-white transition-all border-r border-archive-charcoal"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextPage}
                  className="p-5 hover:bg-archive-charcoal hover:text-white transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-black tracking-[0.4em] uppercase text-archive-charcoal/40">
                  Click here to view more
                </span>
                <div className="flex gap-2">
                  {pages.map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-1 transition-all duration-500 ${currentPage === i ? 'bg-archive-clay' : 'bg-archive-charcoal/10'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #2F2C2C; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #EE7539; }
      `}</style>
    </section>
  );
};

export default Testimonials;

import React, { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { exhibitorstestBD, exhibitorstestSL } from '../constants/Exhibitortestimonial';
import { buyertestBD, buyertestSL } from '../constants/Buyertestimonial';
import { Hash, Binary, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { TestimonialItem } from '../types';

interface SpecimenPanelProps {
  testimonial: TestimonialItem;
  onNext: () => void;
  onPrev: () => void;
  label: string;
  index: number;
  onPlayVideo: (testimonial: TestimonialItem) => void;
  isDark?: boolean;
}

const SpecimenPanel = memo(({ 
  testimonial, 
  onNext, 
  onPrev, 
  label, 
  index,
  onPlayVideo,
  isDark = true 
}: SpecimenPanelProps) => (
  <div className={`w-full lg:w-1/2 flex flex-col justify-between relative p-12 md:p-16 xl:p-24 min-h-[650px] transition-colors duration-700 overflow-hidden ${isDark ? 'bg-archive-charcoal text-archive-cream border-t border-b border-archive-charcoal lg:border-r' : 'bg-archive-cream text-archive-charcoal border-archive-charcoal/5'}`}>
    
    {/* BACKGROUND DECORATIVE ELEMENTS */}
    <div className="absolute bottom-1/4 -left-12 opacity-[0.03] pointer-events-none rotate-90">
       <span className="text-9xl font-black tracking-tighter uppercase whitespace-nowrap">{label}_ARCHIVE</span>
    </div>

    {/* HEADER METADATA */}
    <div className={`flex justify-between items-start mb-16 relative z-10`}>
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <Hash size={14} className="text-archive-clay" />
          <span className={`text-[9px] font-black tracking-[0.5em] uppercase ${isDark ? 'text-white/40' : 'text-archive-charcoal/60'}`}>{label} </span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className={`text-[10px] font-mono uppercase tracking-[0.3em] border px-4 py-2.5 rounded-none font-bold transition-all duration-500 ${isDark ? 'bg-[#EE7539] text-white border-transparent shadow-[0_0_15px_rgba(238,117,57,0.3)]' : 'bg-archive-charcoal text-white border-archive-charcoal'}`}>
          {testimonial.type}
        </span>
        {testimonial.videoUrl && (
            <div 
              className="flex items-center gap-2 px-3 py-1.5 bg-archive-clay text-white text-[9px] font-black tracking-widest uppercase cursor-pointer hover:bg-archive-charcoal hover:scale-105 transition-all shadow-lg"
              onClick={() => onPlayVideo(testimonial)}
            >
              <Play size={10} fill="currentColor" strokeWidth={0} />
              WATCH VIDEO
            </div>
        )}
      </div>
    </div>

    {/* MAIN CONTENT AREA */}
    <div className="flex-1 flex flex-col justify-start relative z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-12"
        >
          {/* PREMIUM IDENTITY BLOCK */}
          <div className="flex items-start gap-10 group/img-block">
            <div className="relative">
              <div className={`w-[120px] h-[120px] overflow-hidden flex-shrink-0 border-2 relative z-10 transition-transform duration-500 group-hover/img-block:scale-105 ${isDark ? 'bg-archive-charcoal border-white/20' : 'bg-archive-cream border-archive-charcoal/20'}`}>
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.author}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* PLAY OVERLAY */}
                {testimonial.videoUrl && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all cursor-pointer z-20"
                  onClick={() => onPlayVideo(testimonial)}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-archive-clay shadow-2xl transform scale-75 group-hover/img-block:scale-100 transition-all duration-500">
                      <Play size={22} fill="currentColor" strokeWidth={0} />
                    </div>
                  </div>
                )}
              </div>
              {/* DECORATIVE OFFSET RECT */}
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#EE7539] z-0"></div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className={`text-2xl md:text-3xl font-black uppercase tracking-tight leading-[0.85] ${isDark ? 'text-white' : 'text-archive-charcoal'}`}>
                {testimonial.author}
              </h4>
              <div className="flex flex-col gap-3">
                <span className="text-[12px] md:text-sm font-black tracking-[0.4em] uppercase text-archive-clay">
                  {testimonial.role}
                </span>
                <span className={`text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase leading-relaxed max-w-[200px] ${isDark ? 'text-white/40' : 'text-archive-charcoal/50'}`}>
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>

          {/* REFINED QUOTE BLOCK */}
          <div className={`relative pt-12 mt-4`}>
            <blockquote className={`text-base md:text-lg font-medium leading-[1.8] tracking-[0.1em] max-w-2xl italic relative ${isDark ? 'text-white/70' : 'text-archive-charcoal/80'}`}>
              <span className="absolute -left-8 -top-4 text-6xl text-archive-clay/10 font-black">“</span>
              {testimonial.quote}
              <span className="absolute -right-4 bottom-0 text-6xl text-archive-clay/10 font-black rotate-180">“</span>
            </blockquote>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* FOOTER NAVIGATION */}
    <div className={`flex justify-between items-center border-t pt-10 mt-16 relative z-10 ${isDark ? 'border-white/5' : 'border-archive-charcoal/10'}`}>
      <div className="flex items-center gap-6">
          <button
          onClick={onPrev}
          className={`group/nav-btn w-12 h-12 border flex items-center justify-center transition-all duration-500 bg-archive-clay hover:bg-archive-charcoal text-white border-archive-clay/20 shadow-lg hover:shadow-archive-charcoal/20`}
          >
          <ArrowLeft size={16} className="group-hover/nav-btn:-translate-x-1 transition-transform" />
          </button>
      </div>

      <button
        onClick={onNext}
        className={`group/nav-btn w-12 h-12 border flex items-center justify-center transition-all duration-500 bg-archive-clay hover:bg-archive-charcoal text-white border-archive-clay/20 shadow-lg hover:shadow-archive-charcoal/20`}
      >
        <ArrowRight size={16} className="group-hover/nav-btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
));

SpecimenPanel.displayName = 'SpecimenPanel';

const Testimonials: React.FC = () => {
  // Function to convert youtu.be or youtube.com links to embed format
  const getEmbedUrl = (url: string) => {
    if (!url) return undefined;
    if (url.includes('embed')) return url;
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  // Normalize BD and SL exhibitors
  const exhibitors = useMemo(() => {
    const bdItems = Object.entries(exhibitorstestBD).flatMap(([year, list]) => {
      return (list as any[]).map((item, i) => ({
        id: `exh-bd-${year}-${i}`,
        author: item.compnay || 'Exhibitor',
        role: item.designation || 'Representative',
        company: `Intex Bangladesh ${year}`,
        quote: item.para,
        imageUrl: item.Img,
        type: `Bangladesh ${year}`,
        videoUrl: getEmbedUrl(item.video)
      }));
    });

    const slItems = Object.entries(exhibitorstestSL).flatMap(([year, list]) => {
      return (list as any[]).map((item, i) => {
        const parts = (item.designation || "").split(',');
        return {
          id: `exh-sl-${year}-${i}`,
          author: parts[0]?.trim() || item.compnay || 'Exhibitor',
          role: parts[1]?.trim() || "Representative",
          company: item.compnay || "Intex Sri Lanka",
          quote: item.para,
          imageUrl: item.Img,
          type: `Sri Lanka ${year}`,
          videoUrl: getEmbedUrl(item.video)
        };
      });
    });

    return [...slItems, ...bdItems].sort((a, b) => {
      const yearA = a.id.includes('2025') ? 2025 : 2024;
      const yearB = b.id.includes('2025') ? 2025 : 2024;
      if (yearA !== yearB) return yearB - yearA;
      if (a.videoUrl && !b.videoUrl) return -1;
      if (!a.videoUrl && b.videoUrl) return 1;
      return 0;
    });
  }, []);

  // Normalize BD and SL buyers
  const buyers = useMemo(() => {
    const bd = Object.entries(buyertestBD).flatMap(([year, list]) => {
      return (list as any[]).map((item, i) => {
        const parts = (item.designation || "").split(',');
        return {
          id: `buy-bd-${year}-${i}`,
          author: parts[0]?.trim() || item.compnay || 'Buyer',
          role: parts[1]?.trim() || "Industry Leader",
          company: item.compnay,
          quote: item.para,
          imageUrl: item.Img,
          type: `Bangladesh ${year}`,
          videoUrl: getEmbedUrl(item.video)
        };
      });
    });

    const sl = Object.entries(buyertestSL).flatMap(([year, list]) => {
      return (list as any[]).map((item, i) => {
        const parts = (item.designation || "").split(',');
        return {
          id: `buy-sl-${year}-${i}`,
          author: parts[0]?.trim() || item.compnay || 'Buyer',
          role: parts[1]?.trim() || "Industry Leader",
          company: item.compnay,
          quote: item.para,
          imageUrl: item.Img,
          type: `Sri Lanka ${year}`,
          videoUrl: getEmbedUrl(item.video)
        };
      });
    });

    return [...sl, ...bd].sort((a, b) => {
      const yearA = a.id.includes('2025') ? 2025 : 2024;
      const yearB = b.id.includes('2025') ? 2025 : 2024;
      if (yearA !== yearB) return yearB - yearA;
      if (a.videoUrl && !b.videoUrl) return -1;
      if (!a.videoUrl && b.videoUrl) return 1;
      return 0;
    });
  }, []);


  const [exhibitorActive, setExhibitorActive] = useState(0);
  const [buyerActive, setBuyerActive] = useState(0);

  const handleNextExhibitor = useCallback(() => setExhibitorActive((prev) => (prev + 1) % exhibitors.length), [exhibitors.length]);
  const handlePrevExhibitor = useCallback(() => setExhibitorActive((prev) => (prev - 1 + exhibitors.length) % exhibitors.length), [exhibitors.length]);

  const handleNextBuyer = useCallback(() => setBuyerActive((prev) => (prev + 1) % buyers.length), [buyers.length]);
  const handlePrevBuyer = useCallback(() => setBuyerActive((prev) => (prev - 1 + buyers.length) % buyers.length), [buyers.length]);
  
  const handlePlayVideo = useCallback((testimonial: TestimonialItem) => {
    sessionStorage.setItem('testimonial_video', JSON.stringify({
      videoUrl: testimonial.videoUrl,
      author: testimonial.author,
      role: testimonial.role,
      company: testimonial.company,
      type: testimonial.type,
      imageUrl: testimonial.imageUrl,
    }));
    window.location.hash = '#testimonial-playback';
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col border-b border-archive-charcoal/5 bg-archive-cream overflow-hidden" id="testimonials">
      {/* HEADER */}
      <div className="w-full border-b border-archive-charcoal/5 bg-white py-10 px-6 md:px-12 overflow-hidden relative group">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-4"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-[1px] bg-archive-clay"></div>
            <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.6em] uppercase text-archive-clay">Archive // Intelligence // Feedback</span>
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase leading-[0.9] text-archive-charcoal">
            Industry <span className="text-archive-clay">Voice.</span>
          </h2>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 flex items-center gap-12 pointer-events-none opacity-20">
            <Binary size={100} strokeWidth={0.5} className="text-archive-charcoal rotate-12" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-archive-charcoal/5">
        {/* LEFT PANEL: EXHIBITORS */}
        {exhibitors.length > 0 && (
          <SpecimenPanel 
            key={`exh-${exhibitorActive}`}
            testimonial={exhibitors[exhibitorActive]} 
            onNext={handleNextExhibitor} 
            onPrev={handlePrevExhibitor} 
            label="EXHIBITOR"
            index={exhibitorActive}
            onPlayVideo={handlePlayVideo}
            isDark={true}
          />
        )}

        {/* RIGHT PANEL: BUYERS */}
        {buyers.length > 0 && (
          <SpecimenPanel 
            key={`buy-${buyerActive}`}
            testimonial={buyers[buyerActive]} 
            onNext={handleNextBuyer} 
            onPrev={handlePrevBuyer} 
            label="BUYER"
            index={buyerActive}
            onPlayVideo={handlePlayVideo}
            isDark={false} 
          />
        )}
      </div>

      <style>{`
        .measuring-tape {
          background-image: repeating-linear-gradient(90deg, #2F2C2C 0, #2F2C2C 1px, transparent 1px, transparent 10px);
          background-size: 40px 100%;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

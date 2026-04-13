
import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Shield } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

interface ActiveVideo {
  videoUrl: string;
  author: string;
  role: string;
  company: string;
  type: 'BUYER' | 'EXHIBITOR';
  imageUrl: string;
}

// Pull all testimonials that have a videoUrl
const PLAYLIST = TESTIMONIALS.filter(t => t.videoUrl);

const TestimonialPlaybackPage: React.FC = () => {
  const [active, setActive] = useState<ActiveVideo | null>(null);

  useEffect(() => {
    // Try to seed from sessionStorage (set by Testimonials component)
    try {
      const raw = sessionStorage.getItem('testimonial_video');
      if (raw) {
        setActive(JSON.parse(raw));
        return;
      }
    } catch { /* no-op */ }
    // Fallback: first item in playlist
    if (PLAYLIST.length > 0) {
      const t = PLAYLIST[0];
      setActive({ videoUrl: t.videoUrl!, author: t.author, role: t.role, company: t.company, type: t.type, imageUrl: t.imageUrl });
    }
  }, []);

  const handleSelect = useCallback((t: typeof PLAYLIST[0]) => {
    setActive({ videoUrl: t.videoUrl!, author: t.author, role: t.role, company: t.company, type: t.type, imageUrl: t.imageUrl });
  }, []);

  const handleBack = () => {
    window.location.hash = '#home';
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-archive-cream text-archive-charcoal flex flex-col overflow-hidden pt-32 pb-24 px-6 md:px-12">


      {/* PAGE HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-archive-clay"></div>
            <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Testimonial Archive // Playback Terminal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none text-archive-charcoal">
            Testimonial <span className="text-archive-clay">Records.</span>
          </h1>
        </div>
      </div>

      {/* BODY: LEFT player + RIGHT playlist */}
      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">

        {/* ====== LEFT – ACTIVE PLAYER ====== */}
        <div className="flex-1 flex flex-col bg-[#0E0E0E] overflow-hidden rounded-lg min-h-[400px]">

          {/* Video iframe */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.videoUrl}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex items-center justify-center"
              >
                <iframe
                  src={`${active.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                  title="Testimonial Playback"
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom info bar */}
          {active && (
            <div className="h-14 bg-black border-t border-white/5 flex items-center px-8 gap-6 shrink-0">
              <div className={`px-2 py-0.5 text-[7px] font-black tracking-widest uppercase shrink-0 ${active.type === 'EXHIBITOR' ? 'bg-archive-clay text-white' : 'bg-white text-[#0E0E0E]'}`}>
                {active.type}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-black text-white uppercase tracking-wide truncate">{active.author}</p>
                <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest truncate">{active.role} · {active.company}</p>
              </div>
              <span className="ml-auto text-[8px] font-mono text-white/15 tracking-widest hidden md:block">STREAM_SRC // INTEX_ARCHIVE_NODE</span>
            </div>
          )}
        </div>

        {/* ====== RIGHT – PLAYLIST ====== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full lg:w-[360px] xl:w-[400px] bg-white border border-archive-charcoal/10 flex flex-col overflow-hidden rounded-lg"
        >
          {/* Playlist header */}
          <div className="border-b border-white/10 px-6 py-5 shrink-0 bg-archive-charcoal">
            <span className="text-[8px] font-black tracking-[0.5em] text-archive-clay uppercase block">Testimonial Registry</span>
            <p className="text-[9px] text-white/40 font-bold tracking-widest mt-0.5">{PLAYLIST.length} Archived Specimens</p>
          </div>

          {/* Scrollable list */}
          <div className="flex-1 overflow-y-auto">
            {PLAYLIST.map((t, idx) => {
              const isActive = active?.videoUrl === t.videoUrl;
              return (
                <button
                  key={t.id}
                  onClick={() => handleSelect(t)}
                  className={`w-full text-left flex gap-4 p-4 border-b border-archive-charcoal/[0.06] transition-all group relative ${
                    isActive ? 'bg-archive-clay/5' : 'hover:bg-archive-charcoal/[0.03]'
                  }`}
                >
                  {/* Active indicator strip */}
                  {isActive && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-archive-clay" />}

                  {/* Thumbnail */}
                  <div className="relative w-[100px] min-w-[100px] aspect-video bg-archive-charcoal overflow-hidden border border-archive-charcoal/10 shrink-0">
                    <iframe
                      src={`${t.videoUrl}?rel=0&modestbranding=1`}
                      title={t.author}
                      className="w-full h-full pointer-events-none"
                      loading="lazy"
                    />
                    {/* Overlay with play icon */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all ${isActive ? 'bg-archive-clay/20' : 'bg-black/30 group-hover:bg-black/10'}`}>
                      {isActive ? (
                        <div className="flex gap-0.5">
                          <div className="w-0.5 h-3 bg-archive-clay animate-[bounce_0.6s_infinite]" />
                          <div className="w-0.5 h-3 bg-archive-clay animate-[bounce_0.6s_0.15s_infinite]" />
                          <div className="w-0.5 h-3 bg-archive-clay animate-[bounce_0.6s_0.3s_infinite]" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-archive-clay transition-colors">
                          <Play size={12} fill="white" strokeWidth={0} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center gap-1.5 min-w-0">
                    <div className={`self-start px-1.5 py-0.5 text-[6px] font-black tracking-widest uppercase ${t.type === 'EXHIBITOR' ? 'bg-archive-clay text-white' : 'bg-archive-charcoal text-white'}`}>
                      {t.type}
                    </div>
                    <p className={`text-[11px] font-black uppercase tracking-tight truncate ${isActive ? 'text-archive-clay' : 'text-archive-charcoal group-hover:text-archive-clay'} transition-colors`}>
                      {t.author}
                    </p>
                    <p className="text-[9px] font-bold text-archive-charcoal/50 uppercase tracking-widest truncate">{t.role}</p>
                    <p className="text-[8px] font-bold text-archive-charcoal/30 uppercase tracking-widest truncate">{t.company}</p>
                  </div>

                  {/* Index */}
                  <span className="ml-auto text-[9px] font-black text-archive-charcoal/20 self-center shrink-0 pl-2">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="border-t border-archive-charcoal/10 px-6 py-4 shrink-0">
            <p className="text-[8px] font-mono text-archive-charcoal/30 tracking-widest uppercase">Intex Archive // Testimonial Playback System</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialPlaybackPage;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SL_HIGHLIGHT_YOUTUBE_ID = '0MZxhnZizlU';

interface HeroEventCard {
  id: string;
  title: string;
  edition: string;
  date: string;
  location: string;
  venue: string;
  route: string;
}

const SOUTH_ASIA_EVENTS: HeroEventCard[] = [
  {
    id: 'ex-bg',
    title: 'Intex Bangladesh',
    edition: '17th Edition',
    date: '22-23-24 June, 2027',
    location: 'Dhaka, Bangladesh',
    venue: 'ICCB, Dhaka',
    route: '/#event/ex-bg',
  },
  {
    id: 'ex-sl',
    title: 'Intex Sri Lanka',
    edition: '17th Edition',
    date: '4-5-6 August, 2027',
    location: 'Colombo, Sri Lanka',
    venue: 'BMICH, Colombo',
    route: '/#event/ex-sl',
  },
  {
    id: 'ex-in',
    title: 'Intex India',
    edition: '17th Edition',
    date: 'Announcing Soon',
    location: 'New Delhi, India',
    venue: 'Pragati Maidan, New Delhi',
    route: '/#event/ex-in',
  },
];

const ASEAN_EVENT: HeroEventCard = {
  id: 'ex-id',
  title: 'Intex Indonesia',
  edition: '1st Edition',
  date: 'Dates Announcing Soon',
  location: 'Jakarta, Indonesia',
  venue: 'Jakarta International Expo (JIExpo)',
  route: '/#event/ex-id',
};

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = 2;

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleCardClick = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── HERO YOUTUBE HIGHLIGHT VIDEO (INTEX SRI LANKA) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          src={`https://www.youtube.com/embed/${SL_HIGHLIGHT_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${SL_HIGHLIGHT_YOUTUBE_ID}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
          title="Intex Sri Lanka Highlight Video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* ── BLACK OPACITY OVERLAY ── */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/85 pointer-events-none z-10" />

      {/* ── SLIDER CONTENT OVERLAY ── */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-28">
        <AnimatePresence mode="wait">
          {activeSlide === 0 ? (
            <motion.div
              key="slide-south-asia"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              {/* Slide 1 Heading */}
              <div className="space-y-4 max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-archive-clay" />
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.3em] text-white/90">
                    Intex South Asia
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.92] text-white">
                  Intex Series of{' '}
                  <span className="text-archive-clay">Exhibition.</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-white/75 font-medium max-w-2xl leading-relaxed">
                  The Premier International Textile Sourcing Shows connecting global suppliers with apparel manufacturers and buyers across South Asia.
                </p>
              </div>

              {/* 3 Exhibition Boxes: BD, SL, IND */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                {SOUTH_ASIA_EVENTS.map((ev) => (
                  <div
                    key={ev.id}
                    onClick={() => handleCardClick(ev.route)}
                    className="group cursor-pointer rounded-2xl bg-black/55 hover:bg-black/75 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-archive-clay/20 text-archive-clay text-[11px] font-black uppercase tracking-wider">
                          {ev.edition}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-archive-clay text-white flex items-center justify-center transition-colors">
                          <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:text-archive-clay transition-colors">
                        {ev.title}
                      </h2>
                    </div>

                    <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-white/80 font-medium">
                      <div className="flex items-center gap-2.5">
                        <Calendar size={15} className="text-archive-clay shrink-0" />
                        <span>{ev.date}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MapPin size={15} className="text-archive-clay shrink-0" />
                        <span>{ev.venue} • {ev.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="slide-asean"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              {/* Slide 2 Heading */}
              <div className="space-y-4 max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-archive-clay" />
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.3em] text-white/90">
                    New Regional Expansion
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.92] text-white">
                  Intex <span className="text-archive-clay">ASEAN.</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-white/75 font-medium max-w-2xl leading-relaxed">
                  Expanding Intex Horizons into South-East Asia’s premier textile and apparel manufacturing hub.
                </p>
              </div>

              {/* Intex Indonesia Featured Box */}
              <div className="max-w-xl">
                <div
                  onClick={() => handleCardClick(ASEAN_EVENT.route)}
                  className="group cursor-pointer rounded-2xl bg-black/55 hover:bg-black/75 backdrop-blur-md p-7 sm:p-9 flex flex-col justify-between gap-7 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3.5 py-1 rounded-full bg-archive-clay/20 text-archive-clay text-xs font-black uppercase tracking-wider">
                        {ASEAN_EVENT.edition} • Intex ASEAN
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-archive-clay text-white flex items-center justify-center transition-colors">
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white group-hover:text-archive-clay transition-colors">
                      {ASEAN_EVENT.title}
                    </h2>
                  </div>

                  <div className="space-y-3 pt-2 text-sm text-white/85 font-medium">
                    <div className="flex items-center gap-2.5">
                      <Calendar size={16} className="text-archive-clay shrink-0" />
                      <span>{ASEAN_EVENT.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin size={16} className="text-archive-clay shrink-0" />
                      <span>{ASEAN_EVENT.venue} • {ASEAN_EVENT.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── LEFT / RIGHT SLIDER ICONS ── */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-30 px-6 md:px-12 pointer-events-none">
        <div className="max-w-[1440px] mx-auto flex items-center justify-end gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="pointer-events-auto w-11 h-11 rounded-full bg-black/55 hover:bg-archive-clay text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="pointer-events-auto w-11 h-11 rounded-full bg-black/55 hover:bg-archive-clay text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

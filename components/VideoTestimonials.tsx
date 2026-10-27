import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowLeft, ArrowRight, PlusCircle, Video, CheckCircle2, Upload, MapPin, Building2, User } from 'lucide-react';
import { createPortal } from 'react-dom';

export interface VideoTestimonialItem {
  id: string;
  name: string;
  company: string;
  edition: 'Intex Bangladesh' | 'Intex Sri Lanka';
  regionKey: 'BD' | 'SL';
  videoUrl: string;
  previewTime?: number;
}

const toTitleCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
};

const INITIAL_VIDEO_TESTIMONIALS: VideoTestimonialItem[] = [
  // ── Bangladesh Editions ──
  {
    id: 'vt-bd-1',
    name: 'Jarin Amin',
    company: 'Wire Waste India Pvt. Ltd.',
    edition: 'Intex Bangladesh',
    regionKey: 'BD',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/BD/avc_JARIN%20AMIN%20-%20Wire%20Waste%20India%20Pvt.%20Ltd.mp4',
  },
  {
    id: 'vt-bd-2',
    name: 'Tapesh Agarwal',
    company: 'Mittal Silk Mills Pvt. Ltd.',
    edition: 'Intex Bangladesh',
    regionKey: 'BD',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/BD/avc_Tapesh%20Agarwal%20-%20Mittal%20Silk%20Mills%20Pvt.%20Ltd..mp4',
  },
  {
    id: 'vt-bd-3',
    name: 'Dinesh Oswal',
    company: 'Nahar Spinning Mills Ltd.',
    edition: 'Intex Bangladesh',
    regionKey: 'BD',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/BD/avc_dinesh%20oswal%20-%20nahar%20spinning%20mills%20ltd..mp4',
  },
  {
    id: 'vt-bd-4',
    name: 'Rajesh Ranjan Sarkar',
    company: 'Threadify',
    edition: 'Intex Bangladesh',
    regionKey: 'BD',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/BD/avc_rajesh%20ranjan%20sarkar%20-%20Threadify.mp4',
  },

  // ── Sri Lanka Editions ──
  {
    id: 'vt-sl-1',
    name: 'Akash Deep Goyal',
    company: 'Grasim Industries Ltd - Jayashree Textile',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/Akash%20Deep%20Goyal%20-%20GRASIM%20INDUSTRIES%20LTD%20-%20JAYASHREE%20TEXTILE.mp4',
  },
  {
    id: 'vt-sl-2',
    name: 'Bharat',
    company: 'Sri Maa Textiles',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/BHARAT%20-%20SRI%20MAA%20TEXTILES.mp4',
  },
  {
    id: 'vt-sl-3',
    name: 'Chandan Ghosh',
    company: 'S.P Yarns',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/CHANDAN%20GHOSH%20-%20S.P%20YARNS.mp4',
  },
  {
    id: 'vt-sl-4',
    name: 'Chirag Jhaveri',
    company: 'Premco Global',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/CHIRAG%20JHAVERI%20-%20PREMCO%20GLOBAL.mp4',
  },
  {
    id: 'vt-sl-5',
    name: 'Gautam Girotra',
    company: 'Guru Textiles',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/GAUTAM%20GIROTRA%20-%20%20GURU%20TEXTILES.mp4',
  },
  {
    id: 'vt-sl-6',
    name: 'Gaurav Tibrewala',
    company: 'Eldee Silk Mills',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/Gaurav%20Tibrewala%20-%20Eldee%20Silk%20mills.mp4',
  },
  {
    id: 'vt-sl-7',
    name: 'Glen Go',
    company: 'PT Sina Pataruna',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/Glen%20Go%20-%20PT%20SINA%20PATARUNA.mp4',
  },
  {
    id: 'vt-sl-8',
    name: 'Jayesh Padi',
    company: 'Rajkrupa Textile India Private Limited',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/Jayesh%20Padi%20-%20Rajkrupa%20Textile%20India%20Private%20Limited.mp4',
  },
  {
    id: 'vt-sl-9',
    name: 'Luo Chenyang',
    company: 'Zhejiang Hubang New Material Technology Co Ltd',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/LUO%20CHENYANG%20-%20ZEJIANG%20HUBANG%20NEW%20MATERIAL%20TECHNOLOGY%20CO%20LTD.mp4',
  },
  {
    id: 'vt-sl-10',
    name: 'Ling Chien',
    company: 'Own Way',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/Ling%20Chien%20-%20OWN%20WAY.mp4',
  },
  {
    id: 'vt-sl-11',
    name: 'Manan Jain',
    company: 'Atam Graphics Pvt. Ltd.',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/MANAN%20Jain%20-%20ATAM%20GRAPHICS%20PVT.%20LTD..mp4',
  },
  {
    id: 'vt-sl-12',
    name: 'Mehul Gohel',
    company: 'Darshana Textiles',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/MEHUL%20GOHEL%20-%20DARSHANA%20TEXTILES.mp4',
  },
  {
    id: 'vt-sl-13',
    name: 'Mr. Vikram Mehta',
    company: 'Hunaram Processing Pvt Ltd',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/MR.%20VIKRAM%20MEHTA%20-%20%20HUNARAM%20PROCESSING%20PVT%20LTD.mp4',
  },
  {
    id: 'vt-sl-14',
    name: 'Mr. Arun Kumar',
    company: 'Premier Mills Pvt. Ltd.',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/MR.%20arun%20kumar%20-%20Premier%20Mills%20PVT.%20LTD..mp4',
  },
  {
    id: 'vt-sl-15',
    name: 'Nitika Mahajan',
    company: 'Square Corporation',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/Nitika%20Mahajan%20-%20SQUARE%20CORPORATION.mp4',
  },
  {
    id: 'vt-sl-16',
    name: 'Qian Yifeng',
    company: 'Suzhou Colorful Fish Textile Co Ltd',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/Qian%20Yifeng%20-%20SUZHOU%20COLORFUL%20FISH%20TEXTILE%20CO%20LTD.mp4',
  },
  {
    id: 'vt-sl-17',
    name: 'Uddhav Pansare',
    company: 'Alok Industries Limited',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/UDDHAV%20PANSARE%20-%20ALOK%20Industries%20Limited.mp4',
  },
  {
    id: 'vt-sl-18',
    name: 'Vishal Vyas',
    company: 'Birla Cellulose',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/Vishal%20vyas%20-%20Birla%20Cellulose.mp4',
  },
  {
    id: 'vt-sl-19',
    name: 'Wang Jialong',
    company: 'Hangzhou Yongchang Tianmen New Materials Co Ltd',
    edition: 'Intex Sri Lanka',
    regionKey: 'SL',
    videoUrl: 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/WANG%20JIALONG%20-%20HANGZHOU%20YONGCHANG%20TAINMEN%20NEW%20MATERIALS%20CO%20LTD.mp4',
  },
];

interface VideoCardProps {
  item: VideoTestimonialItem;
  idx: number;
  onSelect: (item: VideoTestimonialItem) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ item, idx, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // Default to 3.5s - 4.5s to bypass the standard Intex intro bumper animation and display the speaker
  const startTime = item.previewTime ?? (3.5 + (idx % 3) * 0.5);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration;
      const targetTime = dur > 4 ? startTime : Math.max(0.8, dur * 0.3);
      videoRef.current.currentTime = targetTime;
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      const dur = videoRef.current.duration;
      videoRef.current.currentTime = dur > 4 ? startTime : Math.max(0.8, dur * 0.3);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
      onClick={() => onSelect(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] h-[520px] sm:h-[560px] lg:h-[580px] shrink-0 snap-start relative rounded-2xl p-2.5 bg-[#ffffff0a] cursor-pointer group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60 flex flex-col"
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden flex flex-col justify-end bg-black">
        {/* 9:16 Background Video Preview */}
        <video
          ref={videoRef}
          src={encodeURI(item.videoUrl)}
          preload="metadata"
          playsInline
          muted
          loop
          onLoadedMetadata={handleLoadedMetadata}
          onSeeked={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 pointer-events-none ${
            isLoaded ? 'opacity-85 group-hover:opacity-100 group-hover:scale-105' : 'opacity-0'
          }`}
        />

        {/* Subtle loading placeholder while seeking frame */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#1a1818] animate-pulse flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border border-white/10" />
          </div>
        )}

        {/* Center Glowing Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-archive-clay text-archive-charcoal group-hover:text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 pl-0.5">
            <Play size={22} fill="currentColor" strokeWidth={0} />
          </div>
        </div>

        {/* Bottom Overlay: Speaker Name & Company */}
        <div className="relative z-10 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
          <h4 className="text-lg sm:text-xl font-black capitalize text-white group-hover:text-archive-clay transition-colors leading-snug">
            {toTitleCase(item.name)}
          </h4>
          {item.company && (
            <p className="text-xs font-mono text-white/60 truncate mt-1">
              {item.company}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const VideoTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<VideoTestimonialItem[]>(INITIAL_VIDEO_TESTIMONIALS);
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'SL' | 'BD'>('ALL');
  const [activeVideo, setActiveVideo] = useState<VideoTestimonialItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Filtered testimonials
  const filteredList = useMemo(() => {
    if (selectedFilter === 'ALL') return testimonials;
    return testimonials.filter((item) => item.regionKey === selectedFilter);
  }, [testimonials, selectedFilter]);

  // Form states for adding new testimonial
  const [newName, setNewName] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newEdition, setNewEdition] = useState<'Intex Sri Lanka' | 'Intex Bangladesh'>('Intex Sri Lanka');
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [fileName, setFileName] = useState('');

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newCompany.trim()) return;

    const newItem: VideoTestimonialItem = {
      id: `vt-custom-${Date.now()}`,
      name: newName.trim(),
      company: newCompany.trim(),
      edition: newEdition,
      regionKey: newEdition === 'Intex Bangladesh' ? 'BD' : 'SL',
      videoUrl: newVideoUrl || (newEdition === 'Intex Bangladesh'
        ? 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/BD/avc_JARIN%20AMIN%20-%20Wire%20Waste%20India%20Pvt.%20Ltd.mp4'
        : 'https://assets.bee2bee.asia/events/wofx/VideoTestimonials/SL/Akash%20Deep%20Goyal%20-%20GRASIM%20INDUSTRIES%20LTD%20-%20JAYASHREE%20TEXTILE.mp4'),
    };

    setTestimonials((prev) => [newItem, ...prev]);
    setIsAddModalOpen(false);
    setNewName('');
    setNewCompany('');
    setNewVideoUrl('');
    setFileName('');

    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);
  };

  const activeIndex = useMemo(() => {
    if (!activeVideo) return -1;
    return filteredList.findIndex((item) => item.id === activeVideo.id);
  }, [activeVideo, filteredList]);

  const handleNextVideo = () => {
    if (activeIndex === -1) return;
    const nextIdx = (activeIndex + 1) % filteredList.length;
    setActiveVideo(filteredList[nextIdx]);
  };

  const handlePrevVideo = () => {
    if (activeIndex === -1) return;
    const prevIdx = (activeIndex - 1 + filteredList.length) % filteredList.length;
    setActiveVideo(filteredList[prevIdx]);
  };

  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
      const total = scrollWidth - clientWidth;
      if (total > 0) {
        setScrollProgress((scrollLeft / total) * 100);
      }
    }
  };

  useEffect(() => {
    checkScroll();
  }, [filteredList]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedFilter]);

  // ── Auto-Sliding Engine (Pauses when hovered or modal is open) ──
  useEffect(() => {
    if (isHovered || activeVideo !== null || isAddModalOpen) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const scrollAmt = (clientWidth + 24) / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        }
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isHovered, activeVideo, isAddModalOpen, filteredList]);

  const slideLeft = () => {
    if (sliderRef.current) {
      const scrollAmt = (sliderRef.current.clientWidth + 24) / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
      sliderRef.current.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const scrollAmt = (sliderRef.current.clientWidth + 24) / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
      sliderRef.current.scrollBy({ left: scrollAmt, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#121111] text-white relative overflow-hidden border-b border-white/10" id="video-testimonials">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 space-y-10">
        {/* Section Header: Minimal & Clean (Title Left, Prev/Next Right) */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Video <span className="text-archive-clay">Testimonials.</span>
          </h2>

          {/* Slider Prev / Next Controls on Right */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={slideLeft}
              disabled={!canScrollLeft}
              aria-label="Previous slide"
              className={`w-11 h-11 md:w-12 md:h-12 rounded-xl border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'bg-archive-clay border-archive-clay text-white hover:bg-white hover:text-archive-charcoal hover:border-white shadow-lg shadow-archive-clay/30 cursor-pointer active:scale-95'
                  : 'bg-archive-clay/40 border-archive-clay/30 text-white/40 cursor-not-allowed'
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={slideRight}
              disabled={!canScrollRight}
              aria-label="Next slide"
              className={`w-11 h-11 md:w-12 md:h-12 rounded-xl border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'bg-archive-clay border-archive-clay text-white hover:bg-white hover:text-archive-charcoal hover:border-white shadow-lg shadow-archive-clay/30 cursor-pointer active:scale-95'
                  : 'bg-archive-clay/40 border-archive-clay/30 text-white/40 cursor-not-allowed'
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* 9:16 Video Slider Track */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredList.map((item, idx) => (
              <VideoCard
                key={item.id}
                item={item}
                idx={idx}
                onSelect={(selected) => setActiveVideo(selected)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── 9:16 CINEMA MODAL VIDEO PLAYER ── */}
      {activeVideo && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            {/* 9:16 Portrait Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#141212] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar: Speaker Name & Controls Only */}
              <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-white/[0.03]">
                <h3 className="text-sm sm:text-base font-black text-white capitalize leading-none truncate max-w-[220px]">
                  {toTitleCase(activeVideo.name)}
                </h3>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 border border-white/10 rounded-lg p-0.5 bg-white/5">
                    <button
                      onClick={handlePrevVideo}
                      title="Previous Video"
                      className="p-1.5 text-white bg-archive-clay hover:bg-white hover:text-archive-charcoal rounded transition-colors"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <button
                      onClick={handleNextVideo}
                      title="Next Video"
                      className="p-1.5 text-white bg-archive-clay hover:bg-white hover:text-archive-charcoal rounded transition-colors"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => setActiveVideo(null)}
                    className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* 9:16 Video Player Frame */}
              <div className="relative aspect-[9/16] max-h-[78vh] w-full bg-black flex items-center justify-center overflow-hidden">
                <video
                  key={activeVideo.id}
                  src={encodeURI(activeVideo.videoUrl)}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </AnimatePresence>,
        document.body
      )}

      {/* ── ADD VIDEO TESTIMONIAL MODAL ── */}
      {isAddModalOpen && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-lg bg-[#181616] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-archive-clay uppercase font-bold">
                    <Video size={14} /> Add Video Testimonial
                  </div>
                  <h3 className="text-xl font-black uppercase text-white tracking-tight">
                    Submit New Testimonial
                  </h3>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleAddSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                    <User size={13} className="text-archive-clay" /> Speaker / Representative Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 text-sm focus:outline-none focus:border-archive-clay"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                    <Building2 size={13} className="text-archive-clay" /> Company / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Textiles Ltd."
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 text-sm focus:outline-none focus:border-archive-clay"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                    <MapPin size={13} className="text-archive-clay" /> Intex Edition
                  </label>
                  <select
                    value={newEdition}
                    onChange={(e) => setNewEdition(e.target.value as any)}
                    className="w-full px-4 py-3 bg-[#242121] border border-white/15 rounded-lg text-white text-sm focus:outline-none focus:border-archive-clay"
                  >
                    <option value="Intex Sri Lanka">Intex Sri Lanka</option>
                    <option value="Intex Bangladesh">Intex Bangladesh</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                    <Upload size={13} className="text-archive-clay" /> Video File or Local Path
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFileName(file.name);
                          setNewVideoUrl(URL.createObjectURL(file));
                        }
                      }}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                    />
                    <div className="w-full px-4 py-3 bg-white/5 border border-dashed border-white/20 rounded-lg text-xs font-mono text-white/60 flex items-center justify-between">
                      <span className="truncate">{fileName || 'Choose MP4/MOV video file...'}</span>
                      <span className="px-2.5 py-1 bg-white/10 rounded text-[11px] font-bold text-white uppercase">Browse</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-white/40 font-mono">Or leave empty to use default local verified testimonial file.</p>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-5 py-3 rounded-lg text-xs font-mono uppercase text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-archive-clay hover:bg-white text-white hover:text-archive-charcoal font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-archive-clay/20"
                  >
                    Add Testimonial
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </AnimatePresence>,
        document.body
      )}

      {/* Success Toast */}
      {showSuccessToast && typeof document !== 'undefined' && createPortal(
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-[9999999] px-6 py-4 bg-emerald-600 text-white rounded-xl shadow-2xl flex items-center gap-3 text-sm font-medium"
        >
          <CheckCircle2 size={18} />
          <span>Video testimonial added successfully!</span>
        </motion.div>,
        document.body
      )}
    </section>
  );
};

export default VideoTestimonials;

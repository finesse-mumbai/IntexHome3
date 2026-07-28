import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Newspaper, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaPartner {
  id: string;
  img: string;
  companyName: string;
  link: string;
}

const PARTNERS_DATA: Record<string, MediaPartner[]> = {
  'Sri Lanka': [
    { id: 'MP_SL_01', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/textilevaluechain.png', companyName: "Textile Value Chain India", link: "https://textilevaluechain.in/" },
    { id: 'MP_SL_02', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/FVC.png', companyName: "Fashion Value Chain", link: "https://fashionvaluechain.com/" },
    { id: 'MP_SL_03', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/the-apparel-times.png', companyName: "The Apparel Times India", link: "https://timesinternational.in/the-apparel-times/" },
    { id: 'MP_SL_04', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/otgl-news.png', companyName: "OTGL News", link: "https://otglnews.com/" },
    { id: 'MP_SL_05', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/NMNlogohigh.png', companyName: "The Nippon Sewing Machine News", link: "https://www.nmn-news-japan.com/" },
    { id: 'MP_SL_06', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/textilelearnerlogo.png', companyName: "Textile Learner Bangladesh", link: "https://textilelearner.net/" },
    { id: 'MP_SL_07', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/textileinsights.png', companyName: "Textile Insights", link: "https://textileinsights.in/" },
    { id: 'MP_SL_08', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/Globy.png', companyName: "Globy", link: "https://globy.com/" }
  ],
  'Bangladesh': [
    { id: 'MP_BD_01', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/TextileFocus.png', companyName: "Textile Focus Bangladesh", link: "https://textilefocus.com/" },
    { id: 'MP_BD_02', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/BTJ.png', companyName: "Bangladesh Textile Journal Bangladesh", link: "https://bangladeshtextilejournal.com/" },
    { id: 'MP_BD_03', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/textile-network.png', companyName: "Textile Network", link: "https://textile-network.com/" },
    { id: 'MP_BD_04', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/textilevaluechain.png', companyName: "Textile Value Chain India", link: "https://textilevaluechain.in/" },
    { id: 'MP_BD_05', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/FVC.png', companyName: "Fashion Value Chain", link: "https://fashionvaluechain.com/" },
    { id: 'MP_BD_06', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/the-apparel-times.png', companyName: "The Apparel Times India", link: "https://timesinternational.in/the-apparel-times/" },
    { id: 'MP_BD_07', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/textilelearnerlogo.png', companyName: "Textile Learner Bangladesh", link: "https://textilelearner.net/" },
    { id: 'MP_BD_08', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/otgl-news.png', companyName: "OTGL News", link: "https://otglnews.com/" },
    { id: 'MP_BD_09', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/NMNlogohigh.png', companyName: "The Nippon Sewing Machine News", link: "https://www.nmn-news-japan.com/" },
    { id: 'MP_BD_10', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/textileinsights.png', companyName: "Textile Insights", link: "https://textileinsights.in/" },
    { id: 'MP_BD_11', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/Globy.png', companyName: "Globy", link: "https://globy.com/" }
  ]
};

const MEDIA_SLIDER_IMAGES = [
  {
    url: '/assets/img/GalleryBD/2025/13.png',
    title: 'Global Press & Media Alliance',
    caption: 'Covering International Textile Leadership'
  },
  {
    url: '/assets/img/GalleryBD/2025/15.png',
    title: 'Trade Journal & Digital Syndication',
    caption: 'Multi-Channel Regional Media Reach'
  },
  {
    url: '/assets/img/GalleryBD/2025/16.png',
    title: 'Show Highlights & Executive Interviews',
    caption: 'Official Press Coverage 2025/2026'
  },
  {
    url: '/assets/img/GalleryBD/2025/17.png',
    title: 'Global Circulation & Industry Reports',
    caption: '50+ Accredited Trade Publications'
  }
];

const MediaImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MEDIA_SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MEDIA_SLIDER_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MEDIA_SLIDER_IMAGES.length) % MEDIA_SLIDER_IMAGES.length);
  };

  const current = MEDIA_SLIDER_IMAGES[currentIndex];

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

      {/* Slide Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="px-3 py-1.5 bg-black/70 backdrop-blur-md text-xs font-mono font-black text-white tracking-widest uppercase border border-white/20">
          0{currentIndex + 1} // 0{MEDIA_SLIDER_IMAGES.length}
        </span>
      </div>

      {/* Caption Overlay */}
      <div className="absolute bottom-6 left-6 right-24 z-10 space-y-1">
        <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
          {current.title}
        </h4>
        <p className="text-xs font-mono font-bold text-archive-clay uppercase tracking-widest">
          {current.caption}
        </p>
      </div>

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

const MediaPartnerPage: React.FC = () => {
  const [activeShow, setActiveShow] = useState('SRI LANKA');
  const shows = ['SRI LANKA', 'BANGLADESH'];

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[14px] font-black tracking-[0.5em] text-archive-clay uppercase">Media Alliance // Registry</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              MEDIA <br />
              <span className="text-white">PARTNERS.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black text-archive-charcoal/80 leading-tight">
                Accessing the <span className="text-archive-clay">verified network</span> of global trade journals and industry news portals.
              </p>
            </div>

            {/* Show Tabs Selector */}
            <div className="flex border border-archive-charcoal/10 bg-white p-2">
              {shows.map((show) => (
                <button
                  key={show}
                  onClick={() => setActiveShow(show)}
                  className={`px-8 py-4 text-[14px] font-black tracking-widest transition-all ${activeShow === show ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                >
                  {show}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Partners */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {PARTNERS_DATA[activeShow === 'SRI LANKA' ? 'Sri Lanka' : 'Bangladesh'].map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.03 }}
                className="bg-white group relative aspect-square overflow-hidden border border-dotted flex flex-col hover:bg-archive-charcoal transition-all duration-700"
              >
                {/* Image Frame */}
                <div className="h-[58%] p-6 flex items-center justify-center relative bg-white group-hover:bg-white transition-colors duration-700">
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                    <img
                      src={partner.img}
                      alt={partner.companyName}
                      className="max-w-[100%] max-h-[100%] object-contain scale-110 transition-all duration-700 group-hover:scale-125"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${partner.companyName}&background=F3EBE8&color=2F2C2C&bold=true`;
                      }}
                    />
                  </div>
                </div>

                {/* Info Frame */}
                <div className="h-[42%] p-6 flex flex-col justify-between bg-archive-cream/30 group-hover:text-white transition-colors duration-700">
                  <div className="space-y-4">
                    <h3 className="text-md font-semibold tracking-tighter leading-[1.1] group-hover:text-archive-clay transition-colors duration-500">
                      {partner.companyName}
                    </h3>
                  </div>

                  <div className="pt-6 border-t border-archive-charcoal/5 group-hover:border-white/10 flex justify-between items-center">
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[14px] font-black tracking-[0.3em] text-archive-charcoal group-hover:text-white transition-colors group/btn"
                    >
                      VISIT WEBSITE
                    </a>
                    <ExternalLink size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform uppercase" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Narrative Section - Replaced Text with Media Image Slider & Equal Height Alignment */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Image Slider */}
          <div className="w-full h-full min-h-[480px]">
            <MediaImageSlider />
          </div>

          {/* Partner Protocol Box */}
          <div className="bg-archive-charcoal p-12 md:p-16 text-white h-full min-h-[480px] flex flex-col justify-between relative shadow-2xl border border-archive-charcoal/10 overflow-hidden">
            <div className="absolute -bottom-8 -right-8 opacity-5 pointer-events-none">
              <Newspaper size={200} />
            </div>

            <div className="space-y-4 relative z-10">
              <span className="text-archive-clay text-[14px] font-black tracking-[0.5em] uppercase">Partner Protocol</span>
              <h3 className="text-3xl md:text-5xl font-black leading-[0.95] uppercase">
                JOIN THE <br /> MEDIA ALLIANCE.
              </h3>
            </div>

            <div className="space-y-8 relative z-10 pt-6">
              <p className="text-[14px] font-bold tracking-[0.15em] text-white/60 leading-relaxed">
                Trade publications and industry digital portals interested in partnering for the 2026 Archive cycle may request official accreditation and media kit credentials.
              </p>
              <div>
                <button className="px-12 py-5 bg-archive-clay text-white font-black text-[14px] tracking-[0.3em] hover:bg-white hover:text-archive-charcoal transition-all">
                  APPLY FOR PARTNERSHIP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPartnerPage;

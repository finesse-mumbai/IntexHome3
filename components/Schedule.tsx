import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const UPCOMING_EVENTS = [
  {
    id: 'u1',
    date: '22 Jun 2027',
    title: 'VIP Opening Ceremony',
    location: 'ICCB, Dhaka, Bangladesh',
    logo: '/assets/OC LOGO.png',
    images: [
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
    ]
  },
  {
    id: 'u2',
    date: '22 Jun 2027',
    title: 'Interactive Business Forum Seminar Series (IBF)',
    location: 'ICCB, Dhaka, Bangladesh',
    logo: '/assets/img/output-onlinepngtools.png',
    images: [
      '/assets/img/glimpsesofibf/1.jpg',
      '/assets/img/glimpsesofibf/2.jpg',
      '/assets/img/glimpsesofibf/3.jpg',
      '/assets/img/glimpsesofibf/4.jpg',
      '/assets/img/glimpsesofibf/5.jpg',
      '/assets/img/glimpsesofibf/6.jpg',
      '/assets/img/glimpsesofibf/7.jpg',
      '/assets/img/glimpsesofibf/8.jpg',
    ]
  },
  {
    id: 'u3',
    date: '24 Jun 2027',
    title: 'B2B Meetings & Networking Session',
    location: 'ICCB, Dhaka, Bangladesh',
    logo: '/assets/B2B LOGO.png',
    images: [
      '/assets/img/GalleryBD/2024/large/4.jpg',
      '/assets/img/GalleryBD/2024/large/5.jpg',
      '/assets/img/GalleryBD/2024/large/15.jpg',
      '/assets/img/GalleryBD/2024/large/13.jpg',
      '/assets/img/GallerySL/2025/23.jpg',
      '/assets/img/GallerySL/2025/20.jpg',
      '/assets/img/GallerySL/2025/22.jpg',
      '/assets/img/GalleryBD/2024/large/6.jpg',
      '/assets/img/GalleryBD/2025/25.png',
      '/assets/img/GallerySL/2025/24.jpg'
    ]
  }
];

const EventImageSlider: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = Math.max(0, images.length - 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[290px] lg:min-h-[320px] p-3 overflow-hidden bg-archive-charcoal/5 group/slider flex flex-col justify-center">
      {/* 2 Images Visible Sliding Viewport */}
      <div className="overflow-hidden w-full h-full rounded-2xl">
        <div
          className="flex gap-3 h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${startIndex} * (50% + 6px)))`,
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="flex-none w-[calc(50%-6px)] h-[240px] sm:h-[280px] lg:h-[310px] relative rounded-2xl overflow-hidden bg-archive-charcoal shadow-sm group/item"
            >
              <img
                src={img}
                alt={`${title} photo ${idx + 1}`}
                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next Navigation Arrows */}
      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none z-10">
        <button
          onClick={handlePrev}
          aria-label="Previous images"
          className="p-2.5 rounded-full bg-archive-charcoal/80 hover:bg-archive-clay text-white backdrop-blur-sm transition-all pointer-events-auto shadow-md hover:scale-105"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next images"
          className="p-2.5 rounded-full bg-archive-charcoal/80 hover:bg-archive-clay text-white backdrop-blur-sm transition-all pointer-events-auto shadow-md hover:scale-105"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 inset-x-0 z-10 flex items-center justify-center gap-1.5 pointer-events-none">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={(e) => {
              e.stopPropagation();
              setStartIndex(dotIdx);
            }}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 pointer-events-auto ${
              startIndex === dotIdx
                ? 'w-6 bg-archive-clay'
                : 'w-1.5 bg-archive-charcoal/30 hover:bg-archive-charcoal/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Schedule: React.FC = () => {
  const navigateTo = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-[#FBF9F7] border-b border-archive-charcoal/10" id="schedule">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-10">

        {/* FULL WIDTH SECTION HEADER */}
        <div className="pb-6 border-b border-archive-charcoal/15">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-archive-charcoal tracking-tight leading-[0.95] uppercase">
            Events & <span className="text-archive-clay">Program.</span>
          </h2>
        </div>

        {/* FULL WIDTH EVENT BOXES (CARDS) */}
        <div className="space-y-8">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl border border-archive-charcoal/10 hover:border-archive-clay/40 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl grid grid-cols-1 lg:grid-cols-10 items-stretch group"
            >
              {/* LEFT SIDE OF BOX: Event Details & Action Buttons (40%) */}
              <div className="lg:col-span-4 p-7 sm:p-9 lg:p-10 flex flex-col justify-between space-y-6">
                {/* Date & Location Line */}
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-3.5 py-1.5 rounded-full bg-archive-clay/10 text-archive-clay font-bold tracking-wider uppercase">
                    {event.date}
                  </span>
                  <span className="font-semibold text-archive-charcoal/70">{event.location}</span>
                </div>

                {/* Logo & Title */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 py-2">
                  {event.logo && (
                    <div className="w-20 h-16 sm:w-24 sm:h-20 bg-archive-cream/40 rounded-xl p-2.5 flex items-center justify-center shrink-0 border border-archive-charcoal/5">
                      <img
                        src={event.logo}
                        alt="Logo"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}
                  <h3
                    onClick={() => {
                      if (event.id === 'u1') navigateTo('#vip-opening-ceremony');
                      else if (event.id === 'u2') navigateTo('#ibf-seminar-series');
                      else navigateTo('#ibf-details');
                    }}
                    className="text-xl sm:text-2xl md:text-3xl font-black text-archive-charcoal group-hover:text-archive-clay transition-colors leading-tight uppercase tracking-tight flex-1 cursor-pointer"
                  >
                    {event.title}
                  </h3>
                </div>

                {/* Action Button */}
                <div className="pt-2 flex items-center">
                  <button
                    onClick={() => {
                      if (event.id === 'u1') navigateTo('#vip-opening-ceremony');
                      else if (event.id === 'u2') navigateTo('#ibf-seminar-series');
                      else navigateTo('#ibf-details');
                    }}
                    className="px-6 py-3 bg-archive-charcoal hover:bg-archive-clay text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 group/btn shadow-sm"
                  >
                    <span>View Detail</span>
                    <ArrowUpRight size={14} className="text-white/70 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE OF BOX: 2-IMAGE SLIDER (60%) */}
              <div className="lg:col-span-6 relative overflow-hidden border-t lg:border-t-0 lg:border-l border-archive-charcoal/10 flex items-stretch">
                <EventImageSlider images={event.images} title={event.title} />
              </div>
            </div>
          ))}
        </div>

        {/* FULL WIDTH BRANDING OPPORTUNITIES BANNER */}
        <div className="p-8 sm:p-10 bg-archive-charcoal rounded-3xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-white/5">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-archive-clay uppercase block">
              Sponsorship & Partnerships
            </span>
            <h4 className="text-lg sm:text-xl font-bold tracking-wider uppercase">
              Branding Opportunities
            </h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Elevate your brand presence across South Asia's textile corridors. Partner with us for the 2026 Seminar Series and Networking Sessions.
            </p>
          </div>
          <button
            onClick={() => navigateTo('#branding-opportunities')}
            className="px-8 py-3.5 bg-archive-clay hover:bg-white text-white hover:text-archive-charcoal text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shrink-0 shadow-lg shadow-archive-clay/20"
          >
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default Schedule;

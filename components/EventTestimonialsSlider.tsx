import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { exhibitorstestBD, exhibitorstestSL } from '../constants/Exhibitortestimonial';
import { buyertestBD, buyertestSL } from '../constants/Buyertestimonial';

interface EventTestimonialCard {
  id: string;
  logo: string;
  name: string;
  designation: string;
  company: string;
  message: string;
  showName: string;
  year: string;
  category: 'EXHIBITOR' | 'BUYER';
}

interface EventTestimonialsSliderProps {
  region: 'BD' | 'SL' | 'IN';
  eventTitle?: string;
}

const EventTestimonialsSlider: React.FC<EventTestimonialsSliderProps> = ({ region, eventTitle }) => {
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'EXHIBITOR' | 'BUYER'>('ALL');
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const allItems = useMemo<EventTestimonialCard[]>(() => {
    const bdExhibitors: EventTestimonialCard[] = Object.entries(exhibitorstestBD).flatMap(([year, list]) =>
      (list as any[])
        .filter((item) => Boolean(item.para && item.para.trim()))
        .map((item, i) => ({
          id: `exh-bd-${year}-${i}`,
          logo: item.Img,
          name: item.compnay || 'Exhibitor',
          designation: item.designation || 'Representative',
          company: 'Intex Bangladesh',
          message: item.para,
          showName: 'INTEX BANGLADESH',
          year,
          category: 'EXHIBITOR',
        }))
    );

    const slExhibitors: EventTestimonialCard[] = Object.entries(exhibitorstestSL).flatMap(([year, list]) =>
      (list as any[])
        .filter((item) => Boolean(item.para && item.para.trim()))
        .map((item, i) => {
          const parts = (item.designation || '').split(',');
          return {
            id: `exh-sl-${year}-${i}`,
            logo: item.Img,
            name: parts[0]?.trim() || item.compnay || 'Exhibitor',
            designation: parts.slice(1).join(',').trim() || 'Representative',
            company: item.compnay || 'Intex Sri Lanka',
            message: item.para,
            showName: 'INTEX SRI LANKA',
            year,
            category: 'EXHIBITOR',
          };
        })
    );

    const bdBuyers: EventTestimonialCard[] = Object.entries(buyertestBD).flatMap(([year, list]) =>
      (list as any[])
        .filter((item) => Boolean(item.para && item.para.trim()))
        .map((item, i) => {
          const parts = (item.designation || '').split(',');
          return {
            id: `buy-bd-${year}-${i}`,
            logo: item.Img,
            name: item.compnay || parts[0]?.trim() || 'Buyer',
            designation: parts[0]?.trim() || 'Industry Leader',
            company: parts.slice(1).join(',').trim() || item.compnay || 'Intex Bangladesh',
            message: item.para,
            showName: 'INTEX BANGLADESH',
            year,
            category: 'BUYER',
          };
        })
    );

    const slBuyers: EventTestimonialCard[] = Object.entries(buyertestSL).flatMap(([year, list]) =>
      (list as any[])
        .filter((item) => Boolean(item.para && item.para.trim()))
        .map((item, i) => {
          const parts = (item.designation || '').split(',');
          return {
            id: `buy-sl-${year}-${i}`,
            logo: item.Img,
            name: item.compnay || parts[0]?.trim() || 'Buyer',
            designation: parts[0]?.trim() || 'Industry Leader',
            company: parts.slice(1).join(',').trim() || item.compnay || 'Intex Sri Lanka',
            message: item.para,
            showName: 'INTEX SRI LANKA',
            year,
            category: 'BUYER',
          };
        })
    );

    let list: EventTestimonialCard[] = [];
    if (region === 'BD') {
      list = [...bdExhibitors, ...bdBuyers];
    } else if (region === 'SL') {
      list = [...slExhibitors, ...slBuyers];
    } else if (region === 'IN') {
      list = [...bdExhibitors, ...slExhibitors, ...bdBuyers, ...slBuyers].filter(
        (item) =>
          item.designation.toLowerCase().includes('india') ||
          item.company.toLowerCase().includes('india') ||
          item.name.toLowerCase().includes('india') ||
          item.message.toLowerCase().includes('india')
      );
    }

    return list.sort((a, b) => Number(b.year) - Number(a.year));
  }, [region]);

  const filteredItems = useMemo(() => {
    if (filterCategory === 'ALL') return allItems;
    return allItems.filter((item) => item.category === filterCategory);
  }, [allItems, filterCategory]);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    setFilterCategory('ALL');
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'auto' });
    }
  }, [region]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
    const t = setTimeout(checkScroll, 100);
    return () => clearTimeout(t);
  }, [filteredItems]);

  useEffect(() => {
    if (isHovered || filteredItems.length <= 1) return;
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const step = (clientWidth + 24) / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, filteredItems.length]);

  const slideBy = (dir: -1 | 1) => {
    if (!sliderRef.current) return;
    const step = (sliderRef.current.clientWidth + 24) / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    sliderRef.current.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  if (allItems.length === 0) return null;

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-archive-charcoal/10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[3px] bg-archive-clay rounded" />
              <span className="text-xs md:text-sm font-bold text-archive-clay tracking-[0.2em] uppercase">
                Industry Voice {eventTitle ? `// ${eventTitle}` : ''}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-archive-charcoal uppercase tracking-tight leading-none">
              Testimonials<span className="text-archive-clay">.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between md:justify-end gap-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              {(['ALL', 'EXHIBITOR', 'BUYER'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 text-xs font-black tracking-widest uppercase border transition-all ${
                    filterCategory === cat
                      ? 'bg-archive-clay border-archive-clay text-white'
                      : 'bg-white border-archive-charcoal/15 text-archive-charcoal/60 hover:text-archive-charcoal hover:border-archive-charcoal/40'
                  }`}
                >
                  {cat === 'ALL' ? 'All' : `${cat}s`}
                </button>
              ))}
            </div>

            {/* Slider Prev / Next Controls */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => slideBy(-1)}
                disabled={!canScrollLeft}
                aria-label="Previous testimonials"
                className={`w-11 h-11 border flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'bg-archive-clay border-archive-clay text-white hover:bg-archive-charcoal hover:border-archive-charcoal cursor-pointer'
                    : 'bg-white border-archive-charcoal/15 text-archive-charcoal/25 cursor-not-allowed'
                }`}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => slideBy(1)}
                disabled={!canScrollRight}
                aria-label="Next testimonials"
                className={`w-11 h-11 border flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'bg-archive-clay border-archive-clay text-white hover:bg-archive-charcoal hover:border-archive-charcoal cursor-pointer'
                    : 'bg-white border-archive-charcoal/15 text-archive-charcoal/25 cursor-not-allowed'
                }`}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Card Slider Track */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="w-[88vw] sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-white p-8 md:p-10 group flex flex-col justify-between min-h-[340px] border border-dotted border-archive-charcoal/40"
              >
                <div className="space-y-7 flex-grow">
                  <div className="flex justify-between items-start gap-4">
                    <div className="w-24 h-24 md:w-28 md:h-28 border border-archive-charcoal/5 p-1.5 bg-archive-cream/30 flex items-center justify-center relative overflow-hidden group-hover:bg-white transition-colors duration-500">
                      <img
                        src={item.logo}
                        alt={item.name}
                        loading="lazy"
                        className="max-w-full max-h-full object-contain transition-all duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=DBD3D0&color=2F2C2C&bold=true`;
                        }}
                      />
                    </div>
                    <Quote size={20} className="text-archive-clay opacity-15 shrink-0" />
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-archive-charcoal tracking-tight group-hover:text-archive-clay transition-colors uppercase">
                        {item.name}
                      </h3>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-black tracking-widest text-archive-charcoal/40 uppercase">
                          {item.designation}
                        </span>
                        <span className="text-[13px] font-black tracking-widest text-archive-clay uppercase">
                          {item.company}
                        </span>
                      </div>
                    </div>

                    <p className="text-[14px] font-medium leading-relaxed text-archive-charcoal/80 tracking-tight">
                      "{item.message}"
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-archive-charcoal/5 flex justify-between items-center gap-3">
                  <div className="flex items-center gap-2 text-[13px] font-bold text-archive-charcoal/60 tracking-widest">
                    <div className="w-1.5 h-1.5 bg-archive-clay rotate-45 shrink-0" />
                    <span>{item.showName} | {item.year}</span>
                  </div>
                  <span className="text-[11px] font-black tracking-widest uppercase text-archive-charcoal/40">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTestimonialsSlider;

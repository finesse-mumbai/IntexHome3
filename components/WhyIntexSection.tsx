import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Zap, TrendingUp } from 'lucide-react';

const REGIONS = [
  {
    index: "01",
    country: "Sri Lanka",
    title: "The Strategic Apparel Hub",
    tagline: "ETHICAL · PREMIUM · SPECIALISED",
    desc: "Sri Lanka has established itself as one of the world's most respected apparel manufacturing destinations, known for ethical production, innovation-led manufacturing, premium quality standards, and specialised strengths in intimate wear, activewear, swimwear, and functional apparel.",
    node: "The country continues to play a vital role in premium global apparel sourcing and sustainable manufacturing leadership.",
    tags: ["Intimate Wear", "Activewear", "Swimwear", "Functional Apparel"],
    stat: { value: "~$5.7B", label: "Apparel Exports" },
    icon: Globe,
  },
  {
    index: "02",
    country: "Bangladesh",
    title: "The Manufacturing Giant",
    tagline: "SCALE · SOURCING · SUSTAINABLE",
    desc: "Bangladesh remains the world's second-largest apparel exporter, globally recognised for its scale, sourcing strength, competitive manufacturing ecosystem, and rapidly growing capabilities in MMF, sportswear, sustainable textiles, and value-added apparel production.",
    node: "With one of the world's largest vertically integrated garment industries and growing investments in green manufacturing, Bangladesh continues to attract global sourcing attention across every textile category.",
    tags: ["MMF", "Sportswear", "Knitwear", "Green Manufacturing"],
    stat: { value: "~$47B", label: "Textile Exports" },
    icon: TrendingUp,
  },
  {
    index: "03",
    country: "India",
    title: "The Design & Material Powerhouse",
    tagline: "DIVERSE · INNOVATIVE · ARTISANAL",
    desc: "India offers one of the world's most diverse textile ecosystems — from fibres, yarns, fabrics, handicrafts, and traditional textiles to technical textiles, MMF, sustainable innovations, performance materials, and advanced manufacturing capabilities.",
    node: "The country continues to play a vital role in premium global apparel sourcing and sustainable manufacturing leadership.",
    tags: ["Technical Textiles", "Handicrafts", "MMF", "Performance Materials"],
    stat: { value: "~$44B", label: "Textile Exports" },
    icon: Zap,
  }
];

const WhyIntexSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-archive-charcoal py-32 overflow-hidden" id="why-intex-home">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[15px] font-black tracking-[0.5em] text-archive-clay uppercase">Why Intex South Asia</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.85] text-white uppercase">
              A Pan-South Asian Textile<br />
              <span className="text-archive-clay">Powerhouse.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10 space-y-5">
            <p className="text-[15px] font-medium leading-relaxed text-white/50 tracking-wide">
              Intex South Asia is more than an exhibition — it is a strategic textile sourcing corridor connecting Bangladesh, Sri Lanka, and India: three of the world's most influential apparel and textile manufacturing markets.
            </p>
            <p className="text-[15px] font-medium leading-relaxed text-white/50 tracking-wide">
              17 successful editions. 70,000+ qualified trade buyers. A unified sourcing platform across one of the world's largest textile ecosystems.
            </p>
          </div>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5">
          {REGIONS.map((region, idx) => {
            const isHovered = hoveredIdx === idx;
            const Icon = region.icon;
            return (
              <motion.div
                key={region.country}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative flex flex-col overflow-hidden cursor-pointer"
                style={{ minHeight: '580px', background: '#ffffff' }}
              >
                {/* Top accent stripe - always visible */}
                <div className="absolute top-0 left-0 right-0 bg-archive-clay" style={{ height: '2px' }} />

                {/* Giant background index number */}
                <div
                  className="absolute bottom-0 right-0 font-black leading-none select-none pointer-events-none"
                  style={{
                    fontSize: '14rem',
                    color: 'transparent',
                    WebkitTextStroke: isHovered ? '1px rgba(238,117,57,0.25)' : '1px rgba(47,44,44,0.05)',
                    lineHeight: 1,
                    transform: isHovered ? 'translate(10px, 20px)' : 'translate(20px, 30px)',
                    transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {region.index}
                </div>

                {/* Left border accent */}
                <div
                  className="absolute left-0 top-0 w-[3px] bg-archive-clay origin-top"
                  style={{
                    height: '100%',
                    transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top',
                    transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />

                {/* Card content */}
                <div className="relative z-10 flex flex-col h-full p-10">

                  {/* Top row: icon + index label */}
                  <div className="flex justify-between items-start mb-10">
                    <div
                      className="w-12 h-12 flex items-center justify-center border"
                      style={{
                        borderColor: isHovered ? 'rgba(238,117,57,0.6)' : 'rgba(47,44,44,0.12)',
                        background: isHovered ? 'rgba(238,117,57,0.08)' : 'transparent',
                        transition: 'all 0.5s',
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: isHovered ? '#EE7539' : 'rgba(47,44,44,0.35)', transition: 'color 0.4s' }}
                      />
                    </div>
                    <span
                      className="font-black tracking-widest"
                      style={{
                        fontSize: '11px',
                        color: isHovered ? '#EE7539' : 'rgba(47,44,44,0.25)',
                        transition: 'color 0.5s',
                      }}
                    >
                      {region.index} / 03
                    </span>
                  </div>

                  {/* Country & title */}
                  <div className="mb-6">
                    <h3
                      className="font-black uppercase tracking-tighter leading-none mb-2"
                      style={{
                        fontSize: '2.8rem',
                        color: isHovered ? '#EE7539' : '#2F2C2C',
                        transition: 'color 0.5s',
                      }}
                    >
                      {region.country}
                    </h3>
                    <p
                      className="font-black tracking-[0.3em] uppercase"
                      style={{
                        fontSize: '11px',
                        color: isHovered ? 'rgba(47,44,44,0.8)' : 'rgba(47,44,44,0.4)',
                        transition: 'color 0.5s',
                      }}
                    >
                      {region.tagline}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="mb-7"
                    style={{
                      height: '1px',
                      background: isHovered ? 'rgba(238,117,57,0.5)' : 'rgba(47,44,44,0.1)',
                      transition: 'background 0.5s',
                    }}
                  />

                  {/* Description */}
                  <p
                    className="text-[15px] leading-relaxed font-medium mb-6 flex-1"
                    style={{
                      color: isHovered ? 'rgba(47,44,44,0.9)' : 'rgba(47,44,44,0.55)',
                      transition: 'color 0.5s',
                    }}
                  >
                    {region.desc}
                  </p>

                  {/* Strength tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {region.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-black uppercase tracking-widest px-3 py-1 border"
                        style={{
                          fontSize: '10px',
                          borderColor: isHovered ? 'rgba(238,117,57,0.5)' : 'rgba(47,44,44,0.15)',
                          color: isHovered ? '#EE7539' : 'rgba(47,44,44,0.4)',
                          background: isHovered ? 'rgba(238,117,57,0.06)' : 'transparent',
                          transition: 'all 0.4s',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover bottom glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: '8rem',
                    background: 'linear-gradient(to top, rgba(238,117,57,0.05), transparent)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.7s',
                  }}
                />
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
};

export default WhyIntexSection;

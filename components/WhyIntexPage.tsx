import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Globe, TrendingUp } from 'lucide-react';

// --- SVG Flag Components ---

const SriLankaFlag: React.FC<{ className?: string }> = ({ className = "w-16 h-10" }) => (
  <svg viewBox="0 0 600 360" className={`shadow-md overflow-hidden ${className}`}>
    <rect width="600" height="360" fill="#FFBE29" />
    <rect x="25" y="25" width="70" height="310" fill="#007A3D" />
    <rect x="105" y="25" width="70" height="310" fill="#EB7400" />
    <rect x="185" y="25" width="390" height="310" fill="#8D1B3D" />
    <path d="M 205 45 C 225 45, 235 65, 225 85 C 205 75, 200 55, 205 45 Z" fill="#FFBE29" />
    <path d="M 555 45 C 535 45, 525 65, 535 85 C 555 75, 560 55, 555 45 Z" fill="#FFBE29" />
    <path d="M 205 315 C 225 315, 235 295, 225 275 C 205 285, 200 305, 205 315 Z" fill="#FFBE29" />
    <path d="M 555 315 C 535 315, 525 295, 535 275 C 555 285, 560 305, 555 315 Z" fill="#FFBE29" />
    <g fill="#FFBE29">
      <path d="M 370 120 C 360 100, 390 90, 400 110 C 420 100, 430 130, 410 140 C 430 160, 410 190, 390 190 C 370 210, 340 190, 350 170 C 330 170, 330 140, 350 130 Z" />
      <path d="M 325 150 L 325 90 L 335 90 L 335 150 Z" />
      <rect x="315" y="130" width="30" height="8" rx="2" />
      <path d="M 325 90 L 330 75 L 335 90 Z" />
      <path d="M 430 180 C 470 180, 480 130, 465 110 C 455 125, 450 145, 435 155 Z" />
      <rect x="360" y="190" width="18" height="40" rx="4" />
      <rect x="400" y="190" width="18" height="40" rx="4" />
      <rect x="430" y="185" width="16" height="45" rx="4" />
    </g>
  </svg>
);

const BangladeshFlag: React.FC<{ className?: string }> = ({ className = "w-16 h-10" }) => (
  <svg viewBox="0 0 1000 600" className={`shadow-md overflow-hidden ${className}`}>
    <rect width="1000" height="600" fill="#006a4e" />
    <circle cx="450" cy="300" r="200" fill="#f42a41" />
  </svg>
);

const IndiaFlag: React.FC<{ className?: string }> = ({ className = "w-16 h-10" }) => (
  <svg viewBox="0 0 900 600" className={`shadow-md overflow-hidden ${className}`}>
    <rect width="900" height="200" fill="#FF9933" />
    <rect y="200" width="900" height="200" fill="#FFFFFF" />
    <rect y="400" width="900" height="200" fill="#138808" />
    <g transform="translate(450, 300)">
      <circle r="76" fill="none" stroke="#000080" strokeWidth="10" />
      <circle r="14" fill="#000080" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1="0"
            y1="0"
            x2={76 * Math.cos(angle)}
            y2={76 * Math.sin(angle)}
            stroke="#000080"
            strokeWidth="3.5"
          />
        );
      })}
    </g>
  </svg>
);

const REGIONS = [
  {
    index: "01",
    country: "Sri Lanka",
    tagline: "ETHICAL · PREMIUM · SPECIALISED",
    desc: "Sri Lanka has established itself as one of the world's most respected apparel manufacturing destinations, known for ethical production, innovation-led manufacturing, premium quality standards, and specialised strengths in intimate wear, activewear, swimwear, and functional apparel.",
    tags: ["Intimate Wear", "Activewear", "Swimwear", "Functional Apparel"],
    stat: { value: "~$5.7B", label: "Apparel Exports" },
    FlagComponent: SriLankaFlag,
    headerBg: "#EE7539",
    headerLeftWall: "#D65E22",
    headerTopRoof: "#FF8C52",
  },
  {
    index: "02",
    country: "Bangladesh",
    tagline: "SCALE · SOURCING · SUSTAINABLE",
    desc: "Bangladesh remains the world's second-largest apparel exporter, globally recognised for its scale, sourcing strength, competitive manufacturing ecosystem, and rapidly growing capabilities in MMF, sportswear, sustainable textiles, and value-added apparel production.",
    tags: ["MMF", "Sportswear", "Knitwear", "Green Manufacturing"],
    stat: { value: "~$47B", label: "Textile Exports" },
    FlagComponent: BangladeshFlag,
    headerBg: "#EE7539",
    headerLeftWall: "#D65E22",
    headerTopRoof: "#FF8C52",
  },
  {
    index: "03",
    country: "India",
    tagline: "DIVERSE · INNOVATIVE · ARTISANAL",
    desc: "India offers one of the world's most diverse textile ecosystems — from fibres, yarns, fabrics, handicrafts, and traditional textiles to technical textiles, MMF, sustainable innovations, performance materials, and advanced manufacturing capabilities.",
    tags: ["Technical Textiles", "Handicrafts", "MMF", "Performance Materials"],
    stat: { value: "~$44B", label: "Textile Exports" },
    FlagComponent: IndiaFlag,
    headerBg: "#EE7539",
    headerLeftWall: "#D65E22",
    headerTopRoof: "#FF8C52",
  }
];

const ADVANTAGES = [
  {
    icon: Target,
    title: "Regional Dominance",
    desc: "South Asia’s leading international textile sourcing platform with a strong footprint across Bangladesh, Sri Lanka, and India since 2015."
  },
  {
    icon: Globe,
    title: "GLOBAL MARKET ACCESS",
    desc: "Connecting international suppliers directly with South Asia’s most influential textile manufacturers, exporters, sourcing offices, and buying houses.",
    bgClass: "bg-white"
  },
  {
    icon: ShieldCheck,
    title: "INDUSTRY-BACKED PLATFORM",
    desc: "Strongly supported by government organisations, trade councils, export promotion bodies, chambers of commerce, and industry associations across multiple countries."
  },
  {
    icon: TrendingUp,
    title: "BUSINESS-FOCUSED NETWORKING",
    desc: "Facilitating focused B2B meetings, buyer-seller engagement, sourcing interactions, networking events, and business matchmaking opportunities.",
    bgClass: "bg-white"
  },
];

const WhyIntexPage: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto mb-32">
        <div className="flex">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              Why <span>Intex</span> <br />
              <span className="text-white">South Asia.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Pan-South Asian Dominance Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-start">
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <h2 className="text-xl md:text-3xl font-black tracking-tighter text-archive-charcoal leading-none">
                A PAN-SOUTH ASIAN TEXTILE <br /> <span className="text-archive-clay">POWERHOUSE.</span>
              </h2>
              <div className="h-[2px] w-12 bg-archive-clay"></div>
            </div>
            <p className="text-[14px] font-bold tracking-widest leading-relaxed text-archive-charcoal/60">
              Intex South Asia is more than an exhibition platform — it is a strategic textile sourcing network connecting the three most influential apparel and textile markets of South Asia: Bangladesh, Sri Lanka, and India.
            </p>
            <p className="text-[14px] font-bold tracking-widest leading-relaxed text-archive-charcoal/60">
              For over a decade, Intex has successfully enabled cross-border trade, regional sourcing integration, and meaningful business engagement across one of the world’s largest textile manufacturing ecosystems. With 17 successful editions and over 70,000 qualified trade buyers connected through the platform, Intex continues to bridge international suppliers with the heart of South Asia’s textile and apparel industry.
            </p>
            <p className="text-[14px] font-bold tracking-widest leading-relaxed text-archive-charcoal/60">
              Unlike conventional single-country exhibitions, Intex operates as a unified sourcing corridor across South Asia — creating direct access to manufacturers, exporters, buying houses, retailers, sourcing professionals, and decision-makers across multiple high-growth markets under one trusted platform.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Isometric Region Cards */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 pt-10 pb-24 px-8">
          {REGIONS.map((region, idx) => {
            const isHovered = hoveredIdx === idx;
            const FlagComponent = region.FlagComponent;
            return (
              <div
                key={region.country}
                className="relative py-8"
              >
                {/* 3D Isometric Skewed Container */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="relative flex flex-col cursor-pointer"
                  style={{
                    minHeight: '530px',
                    transform: isHovered
                      ? 'skewY(-10deg) translateY(-20px)'
                      : 'skewY(-10deg)',
                    transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                    zIndex: 10,
                  }}
                >
                  {/* 3D TOP ROOF FACE */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      top: '-20px',
                      left: '0px',
                      width: '100%',
                      height: '20px',
                      transform: 'skewX(45deg)',
                      transformOrigin: 'bottom',
                      background: region.headerTopRoof,
                      zIndex: 2,
                    }}
                  />

                  {/* 3D LEFT SIDE WALL FACE */}
                  <div
                    className="absolute pointer-events-none flex flex-col overflow-hidden"
                    style={{
                      top: '0px',
                      left: '-20px',
                      width: '20px',
                      height: '100%',
                      transform: 'skewY(45deg)',
                      transformOrigin: 'top right',
                      zIndex: 2,
                    }}
                  >
                    {/* Top Header 3D Left Side Wall */}
                    <div
                      className="h-[210px] w-full"
                      style={{ background: region.headerLeftWall }}
                    />
                    {/* Bottom Body 3D Left Side Wall */}
                    <div
                      className="flex-1 w-full bg-[#e2e8f0]"
                    />
                  </div>

                  {/* REALISTIC SUNLIGHT PARALLELOGRAM GROUND SHADOW */}
                  <div
                    className="absolute pointer-events-none transition-all duration-500"
                    style={{
                      top: isHovered ? 'calc(100% + 20px)' : '100%',
                      left: '-20px',
                      width: 'calc(100% + 20px)',
                      height: isHovered ? '150px' : '120px',
                      transformOrigin: 'top left',
                      transform: 'skewX(-50deg)',
                      background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.32) 0%, rgba(15, 23, 42, 0.14) 55%, rgba(15, 23, 42, 0) 100%)',
                      filter: isHovered ? 'blur(4px)' : 'blur(1.75px)',
                      opacity: isHovered ? 0.65 : 0.9,
                      zIndex: 0,
                    }}
                  />

                  {/* FRONT MAIN CARD FACE */}
                  <div className="relative z-10 flex flex-col h-full w-full bg-white overflow-hidden rounded-r-sm">
                    {/* TOP COLORED HEADER BLOCK (Vibrant Orange) */}
                    <div
                      className="p-8 flex flex-col items-center justify-center text-center space-y-3 bg-[#EE7539]"
                      style={{ height: '210px', background: region.headerBg }}
                    >
                      {/* Flag in Center Container */}
                      <div className="relative p-1.5 bg-white/10 backdrop-blur-md rounded-lg shadow-inner transform transition-transform duration-500 hover:scale-105">
                        <FlagComponent className="w-16 h-10 object-cover rounded shadow" />
                      </div>

                      {/* Country Title in White */}
                      <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none drop-shadow-sm">
                        {region.country}
                      </h3>

                      {/* Tagline / Subtitle */}
                      <p className="text-[11px] font-bold text-white/90 uppercase tracking-widest">
                        {region.tagline}
                      </p>
                    </div>

                    {/* BOTTOM WHITE BODY BLOCK */}
                    <div className="p-8 flex flex-col flex-1 bg-white justify-between space-y-6">
                      {/* Description Text */}
                      <p className="text-[14px] leading-relaxed font-medium text-slate-600">
                        {region.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {region.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-bold uppercase tracking-wider px-2.5 py-1 text-[10px] bg-slate-100 text-slate-600 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Export Stat Footer */}
                      <div className="pt-4 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {region.stat.label}
                        </span>
                        <span className="text-lg font-black text-[#EE7539]">
                          {region.stat.value}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="bg-archive-charcoal py-40 text-archive-cream border-y border-archive-clay/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-2xl md:text-3xl font-black leading-[0.9] text-white uppercase">
              The Epicenter of <br /> <span className="text-archive-clay">Textile Innovation.</span>
            </h2>
            <div className="space-y-6 text-[14px] font-bold tracking-[0.15em] leading-relaxed text-white/60">
              <p>
                South Asia today represents one of the most dynamic regions for textile manufacturing, sourcing, retail growth, and apparel innovation. Intex South Asia provides direct access to this rapidly evolving ecosystem by bringing together international suppliers, textile innovators, apparel manufacturers, sourcing professionals, buying houses, retailers, and industry leaders under one powerful platform.
              </p>
              <p>
                From raw materials and sustainable textiles to technical innovations, dyes & chemicals, trims, MMF, functional fabrics, and next-generation sourcing solutions — Intex enables businesses to discover new opportunities, strengthen supply chains, and build long-term regional partnerships.
              </p>
            </div>

          </div>

          <div className="relative aspect-[6/7] border border-white/10 p-3 group">
            <div className="w-full h-full border border-white/5 overflow-hidden">
              <img
                src="/assets/intex collage.jpg.jpeg"
                className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-[3000ms]"
                alt="Textile Manufacturing"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-archive-charcoal bg-archive-cream overflow-hidden z-10 hidden xl:flex p-2">
              <img src="/assets/squareImage.jpg.jpeg" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Grid */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-archive-charcoal/10 divide-y md:divide-y-0 md:divide-x divide-archive-charcoal/10">
          {ADVANTAGES.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-16 flex flex-col gap-10 hover:bg-archive-charcoal hover:text-white transition-all duration-700 group ${adv.bgClass || ''}`}
            >
              <adv.icon size={32} className="text-archive-clay" />
              <div className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight leading-none group-hover:text-archive-clay transition-colors uppercase">{adv.title}</h3>
                <p className="text-[14px] font-bold tracking-widest opacity-40 group-hover:opacity-100 transition-opacity leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyIntexPage;

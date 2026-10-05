import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    subheading: "The Premium Apparel Specialist",
    desc1: "Sri Lanka has built a global reputation for quality, ethical manufacturing and innovation-led apparel, with particular strengths in intimate wear, activewear, swimwear and functional apparel.",
    desc2: "Its sophisticated manufacturing base and sustainability credentials make Sri Lanka a high-value sourcing destination for brands seeking quality beyond scale.",
    tags: ["Intimate Wear", "Activewear", "Swimwear", "Functional Apparel"],
    stat: { value: "~$5.02B", label: "Apparel Exports" },
    FlagComponent: SriLankaFlag,
    headerBg: "#EE7539",
    headerLeftWall: "#D65E22",
    headerTopRoof: "#FF8C52",
  },
  {
    index: "02",
    country: "Bangladesh",
    tagline: "SCALE · SOURCING · SUSTAINABLE",
    subheading: "The Global Apparel Powerhouse",
    desc1: "Bangladesh is one of the world’s largest apparel manufacturing and export hubs, combining unmatched production scale, competitive sourcing and a powerful manufacturing ecosystem.",
    desc2: "Its rapid expansion into MMF, sportswear, sustainable textiles and value-added apparel is creating new opportunities across the entire textile supply chain.",
    tags: ["MMF", "Sportswear", "Knitwear", "Green Manufacturing"],
    stat: { value: "~$38.8B", label: "Garment Exports" },
    FlagComponent: BangladeshFlag,
    headerBg: "#EE7539",
    headerLeftWall: "#D65E22",
    headerTopRoof: "#FF8C52",
  },
  {
    index: "03",
    country: "India",
    tagline: "DIVERSE · INNOVATIVE · ARTISANAL",
    subheading: "The Textile & Material Powerhouse",
    desc1: "India brings extraordinary depth to the global textile industry—from fibres, yarns and fabrics to MMF, technical textiles, sustainable materials and advanced manufacturing solutions.",
    desc2: "Its vast domestic supply base, diverse capabilities and strong manufacturing heritage make India a strategic sourcing partner for the next generation of global apparel.",
    tags: ["Technical Textiles", "Handicrafts", "MMF", "Performance Materials"],
    stat: { value: "~$35.8B", label: "Textile Exports" },
    FlagComponent: IndiaFlag,
    headerBg: "#EE7539",
    headerLeftWall: "#D65E22",
    headerTopRoof: "#FF8C52",
  }
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
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="max-w-5xl space-y-12">
          {/* Main Headline & Intro */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-archive-charcoal uppercase leading-[1.05]">
              THE WORLD’S NEXT TEXTILE POWERHOUSE <br className="hidden md:inline" />
              <span className="text-archive-clay">ISN’T ONE MARKET. IT’S A REGION.</span>
            </h2>
            <p className="text-base md:text-lg font-medium leading-relaxed text-archive-charcoal/85 pt-2">
              Look at where global apparel is being made, sourced and scaled, and three markets stand out: India, Bangladesh and Sri Lanka. Together, they form the world’s second-largest textile and apparel market after China, representing a textile and apparel ecosystem worth US$80 billion+ in annual exports and a combined domestic market of more than US$245 billion—creating one of the most compelling sourcing opportunities in the global textile industry.
            </p>
          </div>

          {/* Three Markets Breakdown */}
          <div className="space-y-6">
            <p className="text-[15px] md:text-base leading-relaxed text-archive-charcoal/80 font-medium">
              <strong className="text-archive-charcoal font-bold text-base md:text-[17px]">Bangladesh brings scale.</strong> With US$38.8 billion in garment exports, RMG accounting for 81.5% of national exports, and a textile manufacturing market of approximately US$48.6 billion, the country is targeting US$100 billion in apparel exports by 2030. Its next growth phase is already moving beyond cotton, with rising demand for MMF, functional textiles, sustainable materials and higher-value products.
            </p>
            <p className="text-[15px] md:text-base leading-relaxed text-archive-charcoal/80 font-medium">
              <strong className="text-archive-charcoal font-bold text-base md:text-[17px]">Sri Lanka brings precision and premium manufacturing.</strong> Its textile and apparel exports reached approximately US$5.02 billion in 2025, growing 5.42% year-on-year, as the industry continues to build its reputation for quality, sustainability, innovation and high-value apparel. With an ambition to reach US$8 billion in apparel exports by 2030, the need for advanced materials, specialised inputs and manufacturing solutions is accelerating.
            </p>
            <p className="text-[15px] md:text-base leading-relaxed text-archive-charcoal/80 font-medium">
              <strong className="text-archive-charcoal font-bold text-base md:text-[17px]">India brings depth and diversity.</strong> With a domestic textile and apparel market valued at approximately US$194 billion in 2025–26, growing at around 5% annually, and nearly 80% of market activity driven by domestic consumption, India represents both a manufacturing powerhouse and a massive consumption opportunity. Textile and apparel exports, reached approximately US$35.8 billion in 2025–26, while the industry is targeting US$350 billion by 2030.
            </p>
          </div>

          {/* Subheading: Three Markets Strengths */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl md:text-3xl font-black tracking-tight text-archive-charcoal uppercase leading-tight">
              THREE MARKETS. THREE DIFFERENT STRENGTHS. <br className="hidden md:inline" />
              <span className="text-archive-clay">ONE EXTRAORDINARY SOURCING OPPORTUNITY.</span>
            </h3>
            <p className="text-[15px] md:text-base leading-relaxed text-archive-charcoal/80 font-medium">
              What makes South Asia particularly powerful is not simply the size of these individual markets, but the complementary nature of their textile ecosystems. From Bangladesh’s export-driven apparel manufacturing and Sri Lanka’s premium production capabilities to India’s vast fibre-to-fashion value chain, the region offers global suppliers multiple routes into the same rapidly evolving industry.
            </p>
            <p className="text-[15px] md:text-base leading-relaxed text-archive-charcoal/80 font-medium">
              For international suppliers, this means access to markets where production is expanding, sourcing strategies are diversifying, technology is advancing and demand for better materials and higher-value solutions is accelerating.
            </p>
          </div>

          {/* Subheading: Where Intex Comes In */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl md:text-3xl font-black tracking-tight text-archive-charcoal uppercase leading-tight">
              AND THAT IS WHERE <span className="text-archive-clay">INTEX SOUTH ASIA COMES IN.</span>
            </h3>
            <p className="text-[15px] md:text-base leading-relaxed text-archive-charcoal/80 font-medium">
              Intex connects this demand directly with the global supply community—bringing international manufacturers and suppliers of fibres, yarns, fabrics, denim, MMF, trims, accessories, sustainable materials, functional textiles, performance solutions and next-generation textile technologies face-to-face with manufacturers, exporters, sourcing houses, brands, buying offices and industry decision-makers.
            </p>
            <p className="text-[15px] md:text-base leading-relaxed text-archive-charcoal/80 font-medium">
              With 19 successful editions and 75,000+ qualified trade buyers, Intex has evolved into more than an exhibition. It is a strategic sourcing corridor into three of South Asia’s most important textile and apparel markets.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-archive-charcoal font-semibold italic bg-white/50 py-4 px-6 rounded-lg shadow-sm">
              South Asia is not waiting for the next chapter of global textile manufacturing. It is already writing it. Intex is where the global textile industry comes to be part of that growth.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Isometric Region Cards */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-16">
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
                    minHeight: '510px',
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
                    <div className="p-8 flex flex-col flex-1 bg-white space-y-4">
                      {/* Subheading */}
                      <h4 className="text-[14px] font-black text-archive-charcoal uppercase tracking-wider text-[#EE7539]">
                        {region.subheading}
                      </h4>

                      {/* Description Paragraphs */}
                      <div className="space-y-3.5 text-[13.5px] leading-relaxed font-medium text-slate-600">
                        <p>{region.desc1}</p>
                        <p>{region.desc2}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default WhyIntexPage;

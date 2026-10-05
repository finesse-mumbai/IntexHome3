import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Calendar,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IndonesiaFlag: React.FC<{ className?: string }> = ({ className = "w-7 h-5" }) => (
  <svg viewBox="0 0 900 600" className={`overflow-hidden rounded-sm shadow-sm ${className}`}>
    <rect width="900" height="300" fill="#CE1126" />
    <rect y="300" width="900" height="300" fill="#FFFFFF" />
  </svg>
);

const IntexAseanPage: React.FC = () => {
  const navigate = useNavigate();
  const [isKnowMoreOpen, setIsKnowMoreOpen] = useState(true);

  return (
    <div className="bg-[#0D0D11] text-white min-h-screen selection:bg-archive-clay selection:text-white relative overflow-hidden">
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#EE7539]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-[40%] right-[-100px] w-[600px] h-[600px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-[-100px] w-[600px] h-[600px] bg-[#EE7539]/10 blur-[170px] pointer-events-none rounded-full" />

      {/* ── 1. CINEMATIC HERO SECTION ── */}
      <section className="relative pt-36 pb-24 md:pb-32 px-6 md:px-12 max-w-[1500px] mx-auto">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Top Tag Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#EE7539] animate-ping" />
          <span className="text-[11px] md:text-xs font-mono font-bold tracking-[0.25em] text-[#EE7539] uppercase">
            INTEX SERIES OF EXHIBITIONS NOW EXPANDING TO ASEAN REGION
          </span>
        </motion.div>

        {/* Hero Title & Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <IndonesiaFlag className="w-8 h-5" />
              <span className="text-xs md:text-sm font-mono font-bold uppercase tracking-[0.3em] text-white/50">
                Intex ASEAN · 1st Edition
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight leading-[0.9] text-white">
              Intex <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE7539] via-[#FF8C52] to-amber-200">
                Indonesia
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl font-light text-white/75 max-w-2xl leading-relaxed pt-2">
              The international textile sourcing platform connecting global suppliers with ASEAN’s next generation of manufacturing.
            </p>

            {/* Glassmorphic Event Info Bar */}
            <div className="pt-4">
              <div className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#EE7539]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/40 block mb-1">
                    Host Nation
                  </span>
                  <div className="text-lg md:text-xl font-black uppercase text-white flex items-center gap-2">
                    <IndonesiaFlag className="w-6 h-4" />
                    <span>Indonesia</span>
                  </div>
                </div>

                <div className="sm:border-l sm:border-white/10 sm:pl-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/40 block mb-1 flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#EE7539]" /> Venue
                  </span>
                  <div className="text-lg md:text-xl font-black uppercase text-white">
                    Jakarta
                  </div>
                </div>

                <div className="sm:border-l sm:border-white/10 sm:pl-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/40 block mb-1 flex items-center gap-1.5">
                    <Calendar size={12} className="text-[#EE7539]" /> Date
                  </span>
                  <div className="text-lg md:text-xl font-normal text-[#EE7539]">
                    Announcing Soon
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => navigate('/#enquiry-form')}
                className="px-8 py-4 bg-gradient-to-r from-[#EE7539] to-[#D65E22] hover:brightness-110 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-xl shadow-lg shadow-[#EE7539]/20 transition-all flex items-center gap-2"
              >
                <span>Book Space in Jakarta</span>
                <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => navigate('/#contact')}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-xl backdrop-blur-md transition-all"
              >
                Contact Organiser
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual with Glow */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/15 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&q=80&w=1200"
                alt="Jakarta Skyline"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11] via-[#0D0D11]/30 to-transparent" />

              {/* Floating Glass Pill on Image */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-widest text-white/90">
                JIExpo · Jakarta
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#EE7539] font-bold block">
                  Strategic Gateway
                </span>
                <p className="text-base font-bold text-white tracking-wide">
                  Connecting Global Suppliers With Indonesia's Growing Manufacturing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PLATFORM OVERVIEW (MAGAZINE SPREAD) ── */}
      <section className="py-24 px-6 md:px-12 max-w-[1500px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Atmospheric Image with Woven Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/11] border border-white/15 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80&w=1200"
                alt="Fabrics & Textiles Sourcing"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0D0D11]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase text-white/80">
                  <Sparkles size={12} className="text-[#EE7539]" />
                  <span>Premium Fabric & Fibre Innovations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Rich Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#EE7539]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE7539]" />
              <span>Platform Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-[1.05]">
              Connecting the Global Industry with Indonesia & ASEAN.
            </h2>

            <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed font-normal">
              <p>
                Intex ASEAN is a new international platform connecting the global textile and apparel industry with the growing opportunities in Indonesia and the wider ASEAN region.
              </p>
              <p>
                The exhibition brings together leading suppliers of fabrics, fibres, yarns, MMF, denim, trims, accessories, sustainable textiles and apparel solutions with manufacturers, exporters, brands, sourcing companies and industry professionals.
              </p>
              <p>
                With Indonesia as its strategic gateway, Intex ASEAN helps businesses discover new markets, build sourcing partnerships and create long-term business connections. As the region’s textile and apparel industry evolves, the platform provides a focused marketplace to discover products, explore opportunities and build meaningful partnerships across ASEAN.
              </p>
            </div>

            {/* Sourcing Category Chips */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs font-medium text-white/80">
              {['Fabrics', 'Fibres', 'Yarns', 'MMF', 'Denim', 'Trims & Accessories', 'Sustainable Solutions'].map((cat) => (
                <span
                  key={cat}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:border-[#EE7539] transition-colors"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT US — INTEX ASEAN (EXPANDABLE DEEP DIVE) ── */}
      <section className="py-24 px-6 md:px-12 max-w-[1500px] mx-auto border-t border-white/10">
        <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-8 md:p-16 overflow-hidden">
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EE7539]/10 blur-[130px] pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#EE7539] block">
                About Us
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
                Intex ASEAN
              </h2>
            </div>

            {/* Interactive Toggle */}
            <button
              onClick={() => setIsKnowMoreOpen(!isKnowMoreOpen)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-[#EE7539] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase transition-all duration-300 self-start md:self-auto group"
            >
              <span>{isKnowMoreOpen ? 'CLOSE DETAILS' : 'CLICK TO KNOW MORE'}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${isKnowMoreOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Subtitle Statement */}
          <div className="py-8">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60 tracking-tight leading-snug max-w-5xl">
              THE INTERNATIONAL TEXTILE SOURCING PLATFORM CONNECTING GLOBAL SUPPLIERS WITH ASEAN'S NEXT GENERATION OF MANUFACTURING.
            </h3>
          </div>

          {/* Primary Opportunity Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12">
            <div className="lg:col-span-7 space-y-6 text-white/80 text-base md:text-lg font-light leading-relaxed">
              <p>
                Indonesia sits at the heart of one of the world’s most dynamic textile and apparel regions. With a large domestic market, established manufacturing capabilities, growing apparel exports and deep integration into global supply chains, Indonesia offers international textile suppliers a powerful entry point into ASEAN.
              </p>
              <p>
                The opportunity is substantial. Indonesia exported US$12.08 billion in textiles and apparel in 2025, while its textile fabric imports alone reached US$7.48 billion, reflecting the continued demand for international textile inputs and solutions. Its ready-made garment exports reached US$7.26 billion, with the United States, Japan, South Korea, Australia and Europe among its key markets.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/15">
                <img
                  src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=1200"
                  alt="Apparel Factory & Production"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white/80 uppercase tracking-wider">
                  ASEAN Sourcing Hub · Rapid Manufacturing Growth
                </div>
              </div>
            </div>
          </div>

          {/* Monumental Stats Strip */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EE7539] to-amber-300">
                US$12.08B
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-white/60">
                Textiles & Apparel Exports (2025)
              </div>
            </div>

            <div className="space-y-2 md:border-l md:border-white/10 md:pl-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EE7539] to-amber-300">
                US$7.48B
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-white/60">
                Textile Fabric Imports (Demand for Inputs)
              </div>
            </div>

            <div className="space-y-2 md:border-l md:border-white/10 md:pl-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EE7539] to-amber-300">
                US$7.26B
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-white/60">
                Ready-Made Garment (RMG) Exports
              </div>
            </div>
          </div>

          {/* Expandable Regional Section */}
          <AnimatePresence>
            {isKnowMoreOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden pt-10"
              >
                <div className="pt-8 border-t border-white/10 max-w-4xl space-y-4">
                  <span className="text-xs font-mono font-bold text-[#EE7539] uppercase tracking-widest block">
                    Regional Integration
                  </span>
                  <p className="text-base sm:text-lg font-light text-white/85 leading-relaxed">
                    Beyond Indonesia, ASEAN has emerged as a critical global apparel manufacturing and sourcing hub, with leading international brands maintaining extensive supplier networks across the region. At the same time, ASEAN continues to rely significantly on imported fabrics and synthetic fibres, creating opportunities for international suppliers to become part of the region’s evolving textile value chain.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── 4. WHY INTEX ASEAN? (ARCHITECTURAL 3-PILLAR CARDS) ── */}
      <section className="py-24 px-6 md:px-12 max-w-[1500px] mx-auto border-t border-white/10">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#EE7539] block">
                Strategic Value
              </span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
                Why Intex ASEAN?
              </h2>
            </div>
            <p className="text-sm font-mono text-white/40 uppercase tracking-widest max-w-md">
              Unlocking High-Growth Cross-Border Business Across South-East Asia
            </p>
          </div>

          {/* 3 Immersive Architectural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 01 */}
            <div className="relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#EE7539]/50 transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE7539]/10 blur-3xl pointer-events-none group-hover:bg-[#EE7539]/20 transition-all" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black font-mono text-[#EE7539]">01</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/60">
                    OPPORTUNITY
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-white tracking-tight leading-snug">
                  Unlocking Market Entry
                </h3>

                <p className="text-sm sm:text-base font-light text-white/70 leading-relaxed">
                  Intex ASEAN is created to unlock this opportunity. The platform connects international manufacturers and suppliers of fabrics, fibres, yarns, MMF, denim, trims, accessories, sustainable and functional textiles and other apparel solutions with Indonesian manufacturers, garment exporters, sourcing houses, brands and industry decision-makers.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono font-bold text-[#EE7539] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>Explore Sourcing</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#EE7539]/50 transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE7539]/10 blur-3xl pointer-events-none group-hover:bg-[#EE7539]/20 transition-all" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black font-mono text-[#EE7539]">02</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/60">
                    GATEWAY
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-white tracking-tight leading-snug">
                  Indonesia as Strategic Gateway
                </h3>

                <p className="text-sm sm:text-base font-light text-white/70 leading-relaxed">
                  With Indonesia as its strategic gateway, Intex ASEAN is designed to facilitate new market entry, sourcing partnerships, cross-border business and long-term supply-chain relationships across Indonesia and the wider ASEAN region.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono font-bold text-[#EE7539] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>Regional Footprint</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#EE7539]/50 transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE7539]/10 blur-3xl pointer-events-none group-hover:bg-[#EE7539]/20 transition-all" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black font-mono text-[#EE7539]">03</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/60">
                    EVOLUTION
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-white tracking-tight leading-snug">
                  Value Addition & Innovation
                </h3>

                <p className="text-sm sm:text-base font-light text-white/70 leading-relaxed">
                  As ASEAN's textile and apparel industry moves towards greater diversification, innovation, sustainability and value addition, Intex ASEAN brings the right markets, the right suppliers and the right business conversations together—creating a direct pathway into one of Asia's most important textile and apparel ecosystems.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono font-bold text-[#EE7539] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>Value Creation</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CURATED VISUAL STRIP ── */}
      <section className="py-20 px-6 md:px-12 max-w-[1500px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=900"
              alt="Fabrics and apparel collections"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono text-[#EE7539] uppercase tracking-widest block font-bold">
                Materials & Trims
              </span>
              <p className="text-sm font-bold text-white uppercase tracking-wide mt-1">
                Advanced Fabrics & Fibres
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&q=80&w=900"
              alt="Yarns and denim innovations"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono text-[#EE7539] uppercase tracking-widest block font-bold">
                Yarns & MMF
              </span>
              <p className="text-sm font-bold text-white uppercase tracking-wide mt-1">
                Sustainable Textile Value Chain
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=900"
              alt="Global trade network"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono text-[#EE7539] uppercase tracking-widest block font-bold">
                B2B Sourcing
              </span>
              <p className="text-sm font-bold text-white uppercase tracking-wide mt-1">
                Connecting International Buyers & Suppliers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. LUXURY GRAND CTA SECTION ── */}
      <section className="py-24 px-6 md:px-12 max-w-[1500px] mx-auto border-t border-white/10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1C1A22] via-[#141218] to-[#0D0D11] border border-white/15 p-10 sm:p-16 lg:p-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EE7539]/20 blur-[150px] pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#EE7539] uppercase tracking-wider">
                <IndonesiaFlag className="w-4 h-3" />
                <span>Jakarta · Intex ASEAN</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.02]">
                Ready to Expand into Indonesia & the ASEAN Region?
              </h2>

              <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
                Secure your place among premier international suppliers meeting Indonesian manufacturers, buying houses, and garment exporters in Jakarta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={() => navigate('/#enquiry-form')}
                className="px-10 py-5 bg-gradient-to-r from-[#EE7539] to-[#D65E22] hover:brightness-110 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-xl shadow-xl shadow-[#EE7539]/25 transition-all text-center"
              >
                Book Booth Space
              </button>
              <button
                onClick={() => navigate('/#contact')}
                className="px-10 py-5 bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-xl backdrop-blur-md transition-all text-center"
              >
                Contact Organiser
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntexAseanPage;

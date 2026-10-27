import React from 'react';
import {
  Calendar,
  Globe,
  ArrowUpRight,
  Users,
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const IntexAseanPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF8F5] text-archive-charcoal min-h-screen selection:bg-archive-clay selection:text-white pt-28 md:pt-36 pb-24 overflow-hidden">

      {/* ── 1. MASTER EVENT IDENTITY & HERO ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20">
        <div className="space-y-10">

          {/* Master Event Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-sm relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Title, Event Specs & CTA Buttons */}
              <div className="lg:col-span-7 space-y-8">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.92] text-archive-charcoal">
                  Intex Indonesia <span className="text-archive-clay">2027</span>
                </h1>

                {/* Event Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 max-w-lg">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <Calendar size={13} className="text-archive-clay" /> Event Date
                    </span>
                    <p className="text-lg sm:text-xl font-black text-slate-900 pt-0.5 leading-snug">
                      Dates Announcing Soon
                    </p>
                    <p className="text-xs text-slate-500 font-medium">Jakarta International Expo (JIExpo)</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <Globe size={13} className="text-archive-clay" /> Sourcing Hub
                    </span>
                    <p className="text-lg sm:text-xl font-black text-slate-900 pt-0.5 leading-snug">
                      Jakarta, Indonesia
                    </p>
                    <p className="text-xs text-slate-500 font-medium">ASEAN's Largest Economy</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => {
                      navigate('/#enquiry-form?event=indonesia');
                      window.scrollTo(0, 0);
                    }}
                    className="flex-1 py-4 px-6 bg-archive-clay hover:bg-archive-charcoal text-white transition-all duration-300 font-bold text-xs uppercase tracking-[0.2em] rounded-xl flex items-center justify-between group shadow-sm hover:shadow-lg"
                  >
                    <span>EXHIBITOR ENQUIRY</span>
                    <div className="w-7 h-7 bg-white/20 group-hover:bg-archive-clay rounded-lg flex items-center justify-center transition-colors">
                      <ArrowUpRight size={16} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
                    </div>
                  </button>

                  <Link
                    to="/buyer-registration?country=id"
                    className="flex-1 py-4 px-6 bg-archive-charcoal hover:bg-archive-clay text-white transition-all duration-300 font-bold text-xs uppercase tracking-[0.2em] rounded-xl flex items-center justify-between group shadow-sm hover:shadow-lg"
                  >
                    <span>BUYER REGISTRATION</span>
                    <div className="w-7 h-7 bg-white/10 group-hover:bg-archive-charcoal rounded-lg flex items-center justify-center transition-colors">
                      <Users size={16} className="text-white stroke-[2.5]" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Exhibition Image */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative w-full h-[180px] sm:h-[200px] rounded-2xl overflow-hidden shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200"
                    alt="Intex Indonesia 2027"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/intex collage.jpg.jpeg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Motto Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-archive-charcoal text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-archive-clay/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-snug">
                ONE REGION. NEW CONNECTIONS. A BIGGER FUTURE.
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-4xl font-normal">
                Intex ASEAN is where the connections built across South Asia begin a new chapter in Southeast Asia—bringing global textile supply closer to Indonesia’s manufacturing demand and opening new possibilities across the region.
              </p>
              <div className="pt-2 text-xs sm:text-sm font-mono font-bold tracking-widest text-archive-clay uppercase">
                INTEX ASEAN — CONNECTING MARKETS. STRENGTHENING SUPPLY CHAINS. EXPANDING POSSIBILITIES.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. WHY INTEX INDONESIA? & VALUE CHAIN ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-28">
        <div className="space-y-12">

          <div className="pb-4">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-archive-charcoal leading-none">
              Why Intex Indonesia?
            </h2>
          </div>

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Full Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-normal">
              <p>
                <strong className="text-slate-900 font-bold">Indonesia’s textile sector presents a compelling opportunity:</strong> a substantial manufacturing base, strong export ambitions and growing domestic demand, alongside continued reliance on imported fabrics, fibres, materials and machinery. Intex Indonesia is designed to help bridge these interconnected markets and supply chains.
              </p>
              <p>
                Building on Intex’s experience across South Asia, Intex Indonesia extends the platform into Southeast Asia, creating a new meeting point for international textile businesses and Indonesia’s evolving industrial landscape. It offers a regional perspective on sourcing, manufacturing and market development—recognising that the opportunities in Indonesia extend beyond national borders into the wider ASEAN ecosystem.
              </p>
              <p>
                The platform spans the textile value chain, including fibres and yarns, woven and knitted fabrics, denim, man-made fibres and blends, sustainable textiles, trims and accessories, textile chemicals and dyes, and more. Alongside business engagement, industry forums and B2B matchmaking are intended to encourage knowledge exchange, market understanding and meaningful commercial connections.
              </p>
              <p>
                For international companies, Intex Indonesia represents an opportunity to explore Indonesia’s textile market and establish a stronger regional presence. For Indonesian businesses, it creates a platform to engage with international developments, discover new capabilities and strengthen links with the global textile supply chain.
              </p>
            </div>

            {/* Right Column: Value-Chain Card */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl shadow-lg space-y-6">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-snug">
                The Complete Textile Value Chain Under One Roof
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Intex Indonesia brings together international suppliers, regional manufacturers, sourcing professionals and decision-makers across the textile ecosystem.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "Fibres, Yarns & Raw Materials",
                  "Knitted, Woven & Performance Fabrics",
                  "Denim & Speciality Textiles",
                  "Man-Made Fibres & Blends",
                  "Trims, Accessories & Embellishments",
                  "Textile Chemicals, Dyes & Auxiliaries",
                  "Machinery, Technology & Digital Solutions",
                  "Sustainable, Recycled & Circular Textiles",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-xl bg-[#FAF8F5] text-xs font-bold text-slate-800 flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-archive-clay flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. FIVE STRATEGIC DRIVERS ── */}
      <section className="bg-archive-charcoal text-white py-28 px-6 md:px-12 mb-28 relative">
        <div className="max-w-[1440px] mx-auto space-y-16">

          {/* Section Header */}
          <div className="space-y-3 pb-4">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Five Strategic Drivers
            </h2>
            <p className="text-lg sm:text-xl font-bold text-archive-clay tracking-tight">
              Why Global Suppliers Are Looking at Indonesia
            </p>
          </div>

          {/* 5 Architectural Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Pillar 01 */}
            <div className="p-8 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 space-y-4">
              <span className="text-3xl font-black font-mono text-archive-clay block">01</span>
              <h3 className="text-xl font-black uppercase text-white tracking-tight leading-snug">
                A Market Entering Its Next Growth Phase
              </h3>
              <p className="text-sm font-normal text-white/70 leading-relaxed">
                With textile exports reaching USD 12.08 billion in 2025 and ambitious long-term export targets, Indonesia is working to strengthen its position in the global textile industry. Its evolving manufacturing landscape creates opportunities for businesses looking to participate in the sector’s next phase.
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="p-8 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 space-y-4">
              <span className="text-3xl font-black font-mono text-archive-clay block">02</span>
              <h3 className="text-xl font-black uppercase text-white tracking-tight leading-snug">
                A Clear Supply-Chain Opportunity
              </h3>
              <p className="text-sm font-normal text-white/70 leading-relaxed">
                The reported USD 3.76 billion fabric trade deficit and 92% dependence on imported textile machinery highlight areas where international capabilities remain important to Indonesia’s manufacturing ecosystem.
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="p-8 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 space-y-4">
              <span className="text-3xl font-black font-mono text-archive-clay block">03</span>
              <h3 className="text-xl font-black uppercase text-white tracking-tight leading-snug">
                Modernisation and Industry Transformation
              </h3>
              <p className="text-sm font-normal text-white/70 leading-relaxed">
                As Indonesian manufacturers pursue greater productivity, competitiveness and production efficiency, the demand for modern manufacturing capabilities and Industry 4.0-compatible solutions is becoming increasingly relevant. The government’s Making Indonesia 4.0 initiative provides a broader framework for industrial modernisation.
              </p>
            </div>

            {/* Pillar 04 */}
            <div className="p-8 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 space-y-4">
              <span className="text-3xl font-black font-mono text-archive-clay block">04</span>
              <h3 className="text-xl font-black uppercase text-white tracking-tight leading-snug">
                A Gateway to the Wider ASEAN Region
              </h3>
              <p className="text-sm font-normal text-white/70 leading-relaxed">
                Located in Jakarta, Indonesia’s principal commercial centre, Intex Indonesia offers a strategic starting point for businesses exploring the country and the wider Southeast Asian market. Its significance lies not only in access to one national market, but also in the opportunity to build connections across a broader regional manufacturing network.
              </p>
            </div>

            {/* Pillar 05 */}
            <div className="p-8 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 space-y-4 md:col-span-2 lg:col-span-2">
              <span className="text-3xl font-black font-mono text-archive-clay block">05</span>
              <h3 className="text-xl font-black uppercase text-white tracking-tight leading-snug">
                A Platform Built on Regional Experience
              </h3>
              <p className="text-sm font-normal text-white/70 leading-relaxed max-w-3xl">
                Intex Indonesia builds on Intex’s established presence across South Asia, extending a proven regional exhibition platform into a new geography. The expansion reflects a larger ambition: to strengthen the links between textile markets, encourage cross-border industry engagement and create more connected opportunities for global textile trade.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. A MARKET IN NUMBERS ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-28">
        <div className="space-y-12">

          {/* Section Header */}
          <div className="space-y-3 pb-4">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-archive-charcoal leading-none">
              A Market in Numbers
            </h2>
            <p className="text-xl sm:text-2xl font-black text-archive-clay uppercase tracking-tight">
              Indonesia: A Textile Powerhouse in Transition
            </p>
          </div>

          {/* Report Dossier Cards */}
          <div className="space-y-8">

            {/* Chapter 01 */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
                1. Market Scale and Economic Contribution
              </h3>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed pt-2">
                <p>
                  Indonesia’s textile market is valued at USD 40.65 billion in 2025 and is projected to reach USD 47.36 billion by 2031, registering a CAGR of 2.79%. The textile and textile products (TPT) industry contributes nearly 1% to Indonesia’s GDP, employs approximately 4 million workers and generates around USD 12 billion in annual exports.
                </p>
                <p>
                  Meanwhile, manufacturing as a whole contributes 19.07% to GDP and accounts for 84.89% of Indonesia’s total exports. These figures underline the importance of textiles to Indonesia’s industrial economy—and the scale of opportunity as the sector continues to evolve.
                </p>
              </div>
            </div>

            {/* Chapter 02 */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
                2. Export Performance and Growth Ambitions
              </h3>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed pt-2">
                <p>
                  Indonesia’s textile and apparel exports reached USD 12.08 billion in 2025, recording year-on-year growth of 3.55% and a trade surplus of USD 3.45 billion. Ready-made garment exports rose 2.65% to USD 7.26 billion, with the United States accounting for 56.4% of apparel export volume. The industry also recorded 6.36% growth in Q2 2026, signalling a strengthening recovery.
                </p>
                <p>
                  Looking ahead, the Indonesian government has set an ambitious target to increase textile exports from USD 4 billion to USD 40 billion over the next decade, supported by a planned USD 6 billion investment in midstream production capacity. Achieving this ambition will depend on strengthening domestic capabilities, modernising production and deepening international industry partnerships.
                </p>
              </div>
            </div>

            {/* Chapter 03 */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
                3. Import Dependence and the Supply-Chain Gap
              </h3>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed pt-2">
                <p>
                  Despite its manufacturing strength, Indonesia continues to rely on international markets for significant portions of its textile requirements. Textile imports reached USD 8.57 billion in 2025, comprising USD 7.48 billion in textile fabrics and USD 1.09 billion in apparel and textile products. China remains the dominant supplier, followed by South Korea, Vietnam, Chinese Taipei, Hong Kong and India.
                </p>
                <p>
                  The imbalance is particularly evident in fabrics: Indonesia imported USD 4.56 billion in fabric in 2025, while exporting only USD 801 million, leaving a reported USD 3.76 billion fabric trade deficit. This reliance on imported fabrics, combined with gaps in domestic man-made fibre and speciality material capabilities, creates significant opportunities for international textile businesses.
                </p>
                <p>
                  Indonesia’s man-made fibres market was valued at USD 3.2 billion in 2024, with imports accounting for 21.3% of the total market size. Its textile machinery market, valued at USD 1.8 billion in 2024, is 92% dependent on imports, while domestic mills increasingly seek Industry 4.0-compatible equipment. Together, these figures point to a market where international supply and local manufacturing demand remain closely linked.
                </p>
              </div>
            </div>

            {/* Chapter 04 */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
                4. A Growing Domestic Market
              </h3>
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed pt-2">
                <p>
                  Indonesia’s apparel and footwear retail market reached IDR 201.2 trillion in 2025, supported by economic recovery, a growing middle-income segment and rising discretionary spending. The apparel market is projected to grow from USD 23.41 billion in 2025 to USD 31.22 billion by 2032, at a CAGR of 4.20%.
                </p>
                <p>
                  Digital commerce is also reshaping consumer demand. Fashion is Indonesia’s largest e-commerce category, with live-video commerce capturing approximately 25% of gross merchandise value. For the textile industry, this evolving retail landscape creates new possibilities for product innovation, responsiveness and growth across domestic and international markets.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default IntexAseanPage;

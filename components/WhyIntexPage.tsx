
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Globe, TrendingUp, ArrowRight, MapPin, Layers, Info } from 'lucide-react';

const REGIONS = [
  {
    country: "SRI LANKA",
    title: "The Strategic Hub",
    desc: "A cornerstone of high-end apparel manufacturing, known for ethical practices and specialized product categories like intimate wear and activewear.",
    node: "NODE_SL_01"
  },
  {
    country: "BANGLADESH",
    title: "The Manufacturing Giant",
    desc: "The world's second-largest apparel exporter, offering unparalleled scale and vertically integrated sourcing opportunities for global brands.",
    node: "NODE_BD_02"
  },
  {
    country: "INDIA",
    title: "The Design & Material Powerhouse",
    desc: "A diverse ecosystem providing everything from raw fibers and traditional textiles to cutting-edge sustainable innovations and massive domestic retail growth.",
    node: "NODE_IN_03"
  }
];

const ADVANTAGES = [
  {
    icon: Target,
    title: "Regional Dominance",
    desc: "South Asia's most influential and largest international textile sourcing show since 2015, with a footprint across Sri Lanka, Bangladesh, and India."
  },
  {
    icon: Globe,
    title: "Global Gateway",
    desc: "Serving as the primary entry point for international trade, connecting global suppliers with the heart of South Asia’s manufacturing ecosystem."
  },
  {
    icon: ShieldCheck,
    title: "Industry Endorsed",
    desc: "Strongly supported by government bodies, chambers of commerce, and trade councils, reinforcing its position as a trusted trade platform."
  },
  {
    icon: TrendingUp,
    title: "Trend Intelligence",
    desc: "Shaped by industry needs, the platform empowers stakeholders to stay aligned with evolving global sourcing trends and innovations."
  }
];

const WhyIntexPage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Strategic Reasoning // Matrix</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              WHY <span>INTEX</span> <br />
              <span className="text-white">SOUTH ASIA.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Pan-South Asian Dominance Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase tracking-tighter text-archive-charcoal leading-none">
                A PAN-SOUTH ASIAN <br /> <span className="text-archive-clay">POWERHOUSE.</span>
              </h2>
              <div className="h-[2px] w-12 bg-archive-clay"></div>
            </div>
            <p className="text-[12px] font-bold uppercase tracking-widest leading-relaxed text-archive-charcoal/60">
              Intex South Asia is unique in its ability to bridge the entire region. Unlike single-market shows, we operate as a unified trade corridor across the three most vital manufacturing hubs in the Indian subcontinent.
            </p>
            <div className="p-8 border border-archive-charcoal bg-white/50 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-3">
                <Info size={14} className="text-archive-clay" />
                <span className="text-[9px] font-black tracking-widest uppercase">Connectivity Protocol</span>
              </div>
              <p className="text-[10px] font-medium leading-relaxed uppercase tracking-widest">
                Each edition is strategically timed to align with the sourcing cycles of international brands and regional buying houses, ensuring maximum ROI for exhibitors.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-0 border border-archive-charcoal/10 divide-y md:divide-y-0 md:divide-x divide-archive-charcoal/10">
            {REGIONS.map((region, idx) => (
              <motion.div
                key={region.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-12 bg-white flex flex-col justify-between min-h-[450px] overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <MapPin size={40} className="text-archive-clay" />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-archive-charcoal leading-none">{region.country}</h3>
                    <p className="text-[10px] font-black tracking-widest text-archive-clay">{region.title}</p>
                  </div>
                </div>
                <p className="text-[11px] font-medium uppercase tracking-widest leading-relaxed text-archive-charcoal/50 group-hover:text-archive-charcoal transition-colors">
                  {region.desc}
                </p>
                <div className="pt-8 border-t border-archive-charcoal/5 flex justify-between items-center">
                  <span className="text-[8px] font-black tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-all">Regional_Hub</span>
                  <Layers size={14} className="opacity-0 group-hover:opacity-100 transition-all text-archive-clay" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="bg-archive-charcoal py-40 text-archive-cream border-y border-archive-clay/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-xs md:text-sm font-black uppercase leading-[0.9] text-white">
              The Epicenter of <br /> <span className="text-archive-clay">Textile Innovation.</span>
            </h2>
            <div className="space-y-6 text-sm font-bold uppercase tracking-[0.15em] leading-relaxed text-white/60">
              <p>
                South Asia is the world’s second-largest textile and apparel manufacturing hub. Intex South Asia is strategically positioned to leverage this massive ecosystem, providing a direct bridge between international suppliers and the region’s dominant manufacturers.
              </p>
              <p>
                Our platform is not just an exhibition; it is a business catalyst that has facilitated connections for over 70,000 qualified trade buyers across 17 editions.
              </p>
            </div>
            <div className="pt-8">
              <button className="px-10 py-6 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal transition-all">
                Download Impact Report
              </button>
            </div>
          </div>

          <div className="relative aspect-square border border-white/10 p-6 group">
            <div className="w-full h-full border border-white/5 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-[3000ms]"
                alt="Textile Manufacturing"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-archive-clay border border-archive-charcoal flex items-center justify-center p-8 hidden xl:flex">
              <span className="text-[10px] font-black tracking-widest text-white uppercase text-center">GATEWAY_ ACCESS_ PORTAL</span>
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
              className="p-16 flex flex-col gap-10 hover:bg-archive-charcoal hover:text-white transition-all duration-700 group"
            >
              <adv.icon size={32} className="text-archive-clay" />
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight leading-none group-hover:text-archive-clay transition-colors">{adv.title}</h3>
                <p className="text-[11px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 bg-white border-y border-archive-charcoal/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center text-center space-y-12">
          <div className="w-20 h-[1px] bg-archive-clay"></div>
          <h2 className="text-xs md:text-sm font-black uppercase tracking-tighter text-archive-charcoal">
            READY TO SCALE IN <br /> <span>SOUTH ASIA?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-12 py-6 bg-archive-charcoal text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-archive-clay transition-all flex items-center gap-4">
              Apply to Exhibit <ArrowRight size={14} />
            </button>
            <button className="px-12 py-6 border border-archive-charcoal text-archive-charcoal font-black text-[10px] tracking-[0.4em] uppercase hover:bg-archive-charcoal hover:text-white transition-all">
              Visitor Registration
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Technical Detail */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default WhyIntexPage;


import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Globe, TrendingUp, ArrowRight, MapPin, Layers, Info } from 'lucide-react';

const REGIONS = [
  {
    country: "Sri Lanka",
    title: "The Strategic Apparel Hub",
    desc: "Sri Lanka has established itself as one of the world’s most respected apparel manufacturing destinations, known for ethical production, innovation-led manufacturing, premium quality standards, and specialised strengths in intimate wear, activewear, swimwear, and functional apparel.",
    node: "The country continues to play a vital role in premium global apparel sourcing and sustainable manufacturing leadership."
  },
  {
    country: "Bangladesh",
    title: "The Manufacturing Giant",
    desc: "Bangladesh remains the world’s second-largest apparel exporter, globally recognised for its scale, sourcing strength, competitive manufacturing ecosystem, and rapidly growing capabilities in MMF, sportswear, sustainable textiles, and value-added apparel production.",
    node: "With one of the world’s largest vertically integrated garment industries and growing investments in green manufacturing, Bangladesh continues to attract global sourcing attention across every textile category."
  },
  {
    country: "India",
    title: "The Design & Material Powerhouse",
    desc: "India offers one of the world’s most diverse textile ecosystems — from fibres, yarns, fabrics, handicrafts, and traditional textiles to technical textiles, MMF, sustainable innovations, performance materials, and advanced manufacturing capabilities.",
    node: "The country continues to play a vital role in premium global apparel sourcing and sustainable manufacturing leadership."
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
  // {
  //   icon: ShieldCheck,
  //   title: "TREND & SOURCING INTELLIGENCE",
  //   desc: "Helping the industry stay aligned with changing global sourcing trends, sustainability demands, innovation-led manufacturing, and future textile developments."
  // },
];

const WhyIntexPage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto mb-32">
        <div className="flex ">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[14px] font-black tracking-[0.5em] text-archive-clay uppercase">Strategic Reasoning // Matrix</span>
            </div>
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
                A PAN-SOUTH ASIAN TEXTILE  <br /> <span className="text-archive-clay">POWERHOUSE.</span>
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

      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-40">

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
                  <h3 className="text-2xl font-black tracking-tighter text-archive-charcoal leading-none">{region.country}</h3>
                  <p className="text-[14px] mt-1 font-black tracking-widest text-archive-clay uppercase">{region.title}</p>
                </div>
              </div>
              <p className="text-[14px] font-medium tracking-widest leading-relaxed text-archive-charcoal/50 group-hover:text-archive-charcoal transition-colors">
                {region.desc}
              </p>
              <div className="pt-4 flex justify-between items-center">
                <span className="text-[14px] font-black tracking-widest opacity-40 group-hover:opacity-100 transition-all uppercase">{region.node}</span>
                <Layers size={14} className="opacity-0 group-hover:opacity-100 transition-all text-archive-clay" />
              </div>
            </motion.div>
          ))}
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
            <div className="pt-8">
              <button className="px-10 py-6 bg-archive-clay text-white font-black text-[14px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal transition-all">
                DOWNLOAD IMPACT REPORT
              </button>
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

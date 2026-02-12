
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, ArrowRight, ChevronDown, ChevronUp, FileText, Database, ShieldCheck, Clock } from 'lucide-react';

interface PressRelease {
  id: string;
  type: 'PRE-EVENT' | 'POST-EVENT';
  title: string;
  subtitle: string;
  location: string;
  content: string[];
  expandedContent: string[];
  quote?: {
    text: string;
    author: string;
  };
}

const PRESS_DATA: Record<string, PressRelease[]> = {
  'SRI LANKA': [
    {
      id: 'PR_SL_25_01',
      type: 'PRE-EVENT',
      title: 'Pre Event Press Release',
      subtitle: 'Intex Sri Lanka 2025 Set to Ignite the Textile & Apparel World – A Decade of Impact, Innovation & Industry Leadership',
      location: 'Colombo, Sri Lanka',
      content: [
        "The energy is rising, the industry is watching, and the countdown has officially begun. From 6–8 August 2025, Colombo will once again become the epicentre of South Asia’s textile and apparel universe as Intex Sri Lanka returns with its most powerful edition yet.",
        "Celebrating a decade of innovation, trust, and transformation, the 17th edition of Intex Sri Lanka is more than an exhibition — it’s a movement that has shaped the sourcing future of the region.",
        "Since its debut in 2015, Intex Sri Lanka has been a game-changer — bridging Sri Lanka’s world-renowned manufacturing strength with global textile producers and technology leaders."
      ],
      expandedContent: [
        "A key vertical within the show, the 3rd edition of INMAC – Smart Technology and Innovation in Gar-tex Machinery — INMAC 2025 brings together next-gen gar-tex machinery from Germany, China, India, and Taiwan, each showcasing their manufacturing edge.",
        "From AI-powered inspection systems (Germany) and digital print/dyeing tech (China) to smart stitching solutions (India) and energy-efficient fabric finishers (Taiwan), the pavilion spotlights how intelligent upgrades are reshaping textile production for a smarter, greener future.",
        "The Interactive Business Forum (IBF), in association with Moratuwa University Textile Association (MUTA), returns with a powerful line-up of trendsetters, policymakers, and business architects. Discussions on Apparel 2030, bio-based fibres, circularity, and smart clothing will move minds and markets."
      ],
      quote: {
        text: "“Intex Sri Lanka 2025 offers a unique opportunity for our apparel industry to connect with global suppliers, explore new innovations, and strengthen Sri Lanka’s position as a leading sourcing destination.”",
        author: "— Yohan Lawrence, Secretary General, JAAF"
      }
    },
    {
      id: 'PR_SL_25_02',
      type: 'POST-EVENT',
      title: 'Post Event Press Release',
      subtitle: 'Intex Sri Lanka 2025 Marks a Decade of Textile Excellence – Connecting Global Industry at the Heart of South Asia',
      location: 'BMICH, Colombo',
      content: [
        "The 10th edition of Intex Sri Lanka 2025 concluded on a resounding high, celebrating a decade of connecting global textile and apparel stakeholders. Held from 6th to 8th August 2025 at BMICH, Colombo, the event reaffirmed Sri Lanka’s position as South Asia’s textile sourcing hub.",
        "The show featured over 400 booths and 210 exhibitors from 15+ countries, including India, Sri Lanka, South Korea, Pakistan, Indonesia, China, Japan, and the UK, and drew 6,944 trade visitors and buyers."
      ],
      expandedContent: [
        "The grand opening ceremony was graced by Hon. Sunil Handunnetti, Minister of Industry & Entrepreneurship Development, along with senior representatives from India’s High Commission and JAAF.",
        "Strategic B2B meetings proved highly successful, including the Kasturi Cotton Bharat (KCB) Programme by TEXPROCIL, fostering co-branding and sustainable fiber sourcing between India and Sri Lanka.",
        "With remarkable participation and meaningful partnerships forged on the show floor, Intex Sri Lanka 2025 reaffirmed its stature as South Asia’s most impactful textile and apparel sourcing platform. The journey continues with Intex Sri Lanka 2026."
      ]
    }
  ],
  'BANGLADESH': [
    {
      id: 'PR_BD_25_01',
      type: 'PRE-EVENT',
      title: 'Pre Event Press Release',
      subtitle: 'Intex Bangladesh 2025: Empowering the Global Manufacturing Giant with Innovation',
      location: 'Dhaka, Bangladesh',
      content: [
        "Intex Bangladesh 2025 is scheduled to transform Dhaka into a global sourcing hub this June. As the world's second-largest apparel exporter, Bangladesh remains a critical node in the global textile matrix.",
        "This edition focuses on 'Manufacturing Resilience', bringing together over 200 international suppliers to meet the burgeoning needs of the local RMG sector.",
        "The show bridges the gap between global material innovation and local manufacturing prowess."
      ],
      expandedContent: [
        "The show will feature a dedicated 'Sustainable Material Zone' showcasing recycled fibers and organic cottons. Industry leaders from EU and USA will lead sessions on circular economy integration.",
        "The INMAC machinery pavilion will display high-speed automated sewing and cutting solutions tailored for large-scale export factories.",
        "Interactive forums will address the 'Apparel 2030' vision, focusing on automation and ethical sourcing protocols required for next-gen global supply chains."
      ]
    },
    {
      id: 'PR_BD_25_02',
      type: 'POST-EVENT',
      title: 'Post Event Press Release',
      subtitle: 'Record Footfall at Intex Bangladesh 2025 Signals Strong Recovery for Textile Sector',
      location: 'ICCB, Dhaka',
      content: [
        "The recently concluded Intex Bangladesh 2025 at ICCB Dhaka witnessed a record-breaking attendance of over 8,000 trade visitors.",
        "Exhibitors reported high satisfaction levels with a projected business volume exceeding $50 million initiated during the three-day event."
      ],
      expandedContent: [
        "The event saw significant participation from local buying houses and international sourcing offices representing top global brands.",
        "Sustainability was a key theme, with several MOUs signed between fiber innovators and large vertically integrated manufacturers in Bangladesh.",
        "Intex Bangladesh 2026 is already being planned to further strengthen the region's manufacturing backbone."
      ]
    }
  ]
};

const PressReleasePage: React.FC = () => {
  const [activeShow, setActiveShow] = useState('SRI LANKA');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const next = new Set(expandedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedIds(next);
  };

  const shows = Object.keys(PRESS_DATA);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Media Registry // News Manifest</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-serif font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              PRESS <br />
              <span className="text-outline" style={{ WebkitTextStroke: '2px #2F2C2C' }}>RELEASES.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-serif font-black uppercase text-archive-charcoal/80 leading-tight">
                Official <span className="text-archive-clay">journalistic records</span> documenting the evolution and impact of Intex South Asia.
              </p>
            </div>

            <div className="flex border border-archive-charcoal/10 bg-white p-2">
              {shows.map((show) => (
                <button
                  key={show}
                  onClick={() => { setActiveShow(show); setExpandedIds(new Set()); }}
                  className={`px-8 py-4 text-[10px] font-black tracking-widest uppercase transition-all ${activeShow === show ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                >
                  {show}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-px bg-archive-charcoal/10 border border-archive-charcoal/10"
          >
            {PRESS_DATA[activeShow].map((pr, idx) => (
              <div key={pr.id} className="bg-white p-12 md:p-24 relative group overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-1/2 right-12 -translate-y-1/2 text-[12rem] font-serif font-black text-archive-charcoal/[0.02] pointer-events-none select-none">
                  0{idx + 1}
                </div>

                <div className="max-w-4xl relative z-10 space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className={`px-4 py-1 text-[9px] font-black tracking-widest uppercase ${pr.type === 'PRE-EVENT' ? 'bg-archive-clay text-white' : 'bg-archive-charcoal text-white'}`}>
                        {pr.type}
                      </span>
                      <div className="w-8 h-px bg-archive-charcoal/10"></div>
                      <div className="flex items-center gap-2 text-[9px] font-mono font-black text-archive-charcoal/40 uppercase">
                        <Clock size={12} className="text-archive-clay" />
                        ARCHIVE_LOG // {pr.id}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-sm md:text-base font-serif font-black uppercase tracking-tighter leading-[0.95] text-archive-charcoal">
                        {pr.subtitle}
                      </h2>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-archive-clay uppercase tracking-widest">
                        <MapPinIcon size={12} />
                        {pr.location}
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none space-y-6">
                    {pr.content.map((p, i) => (
                      <p key={i} className="text-[15px] font-medium leading-relaxed text-archive-charcoal/80 uppercase tracking-widest">
                        {p}
                      </p>
                    ))}

                    <AnimatePresence>
                      {expandedIds.has(pr.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden space-y-6"
                        >
                          {pr.quote && (
                            <blockquote className="my-8 border-l-4 border-archive-clay pl-8 text-archive-charcoal bg-archive-cream/30 py-8 p-8 space-y-4">
                              <p className="text-xl md:text-2xl font-serif font-black uppercase tracking-tight leading-tight">
                                {pr.quote.text}
                              </p>
                              <footer className="text-[10px] font-black tracking-widest text-archive-clay uppercase text-right">
                                {pr.quote.author}
                              </footer>
                            </blockquote>
                          )}
                          {pr.expandedContent.map((p, i) => (
                            <p key={i} className="text-[15px] font-medium leading-relaxed text-archive-charcoal/80 uppercase tracking-widest">
                              {p}
                            </p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-8 border-t border-archive-charcoal/5">
                    <button
                      onClick={() => toggleExpand(pr.id)}
                      className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-archive-clay hover:text-archive-charcoal transition-all group/btn"
                    >
                      {expandedIds.has(pr.id) ? (
                        <>READ LESS <ChevronUp size={14} className="group-hover/btn:-translate-y-0.5 transition-transform" /></>
                      ) : (
                        <>READ MORE <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" /></>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Technical Shutter Notice */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-archive-clay">
              <Newspaper size={20} />
              <span className="text-[11px] font-black tracking-[0.4em] uppercase">Media Protocol</span>
            </div>
            <h3 className="text-xl font-serif font-black uppercase tracking-tight text-archive-charcoal leading-none">
              Official Inquiries <br /> & <span>Interview Requests.</span>
            </h3>
            <p className="text-[13px] font-bold uppercase tracking-widest leading-relaxed text-archive-charcoal/40">
              Credentialed media representatives may request high-fidelity image assets, video manifests, and exclusive executive interviews for the 2026 Archive cycle.
            </p>
            <button className="px-10 py-5 bg-archive-charcoal text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-archive-clay transition-all">
              Contact Media Desk
            </button>
          </div>

          <div className="bg-archive-charcoal p-16 text-white space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Database size={100} />
            </div>
            <div className="space-y-4">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em] uppercase">Archive Download</span>
              <h4 className="text-xl font-serif font-black uppercase leading-none">Download <br /> Media Kits.</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Show Logos", icon: ShieldCheck },
                { label: "Press Photos", icon: FileText },
                { label: "Post Reports", icon: Database },
                { label: "Brand Guidelines", icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/10 flex items-center justify-between hover:bg-white/5 cursor-pointer transition-all group">
                  <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                  <ArrowRight size={14} className="text-archive-clay group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Technical Detail */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10 mt-32">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

const MapPinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

export default PressReleasePage;

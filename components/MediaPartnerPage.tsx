
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Search, Database, ShieldCheck, Newspaper } from 'lucide-react';

interface MediaPartner {
  id: string;
  img: string;
  companyName: string;
  link: string;
}

const PARTNERS_DATA: Record<string, MediaPartner[]> = {
  'Sri Lanka': [
    { id: 'MP_SL_01', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/textilevaluechain.png', companyName: "Textile Value Chain India", link: "https://textilevaluechain.in/" },
    { id: 'MP_SL_02', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/FVC.png', companyName: "Fashion Value Chain", link: "https://fashionvaluechain.com/" },
    { id: 'MP_SL_03', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/the-apparel-times.png', companyName: "The Apparel Times India", link: "https://timesinternational.in/the-apparel-times/" },
    { id: 'MP_SL_04', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/otgl-news.png', companyName: "OTGL News", link: "https://otglnews.com/" },
    { id: 'MP_SL_05', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/NMNlogohigh.png', companyName: "The Nippon Sewing Machine News", link: "https://www.nmn-news-japan.com/" },
    { id: 'MP_SL_06', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/textilelearnerlogo.png', companyName: "Textile Learner Bangladesh", link: "https://textilelearner.net/" },
    { id: 'MP_SL_07', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/textileinsights.png', companyName: "Textile Insights", link: "https://textileinsights.in/" },
    { id: 'MP_SL_08', img: 'https://sl.intexsouthasia.com/assets/img/mediaPartner/Globy.png', companyName: "Globy", link: "https://globy.com/" }
  ],
  'Bangladesh': [
    { id: 'MP_BD_01', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/TextileFocus.png', companyName: "Textile Focus Bangladesh", link: "https://textilefocus.com/" },
    { id: 'MP_BD_02', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/BTJ.png', companyName: "Bangladesh Textile Journal Bangladesh", link: "https://bangladeshtextilejournal.com/" },
    { id: 'MP_BD_03', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/textile-network.png', companyName: "Textile Network", link: "https://textile-network.com/" },
    { id: 'MP_BD_04', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/textilevaluechain.png', companyName: "Textile Value Chain India", link: "https://textilevaluechain.in/" },
    { id: 'MP_BD_05', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/FVC.png', companyName: "Fashion Value Chain", link: "https://fashionvaluechain.com/" },
    { id: 'MP_BD_06', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/the-apparel-times.png', companyName: "The Apparel Times India", link: "https://timesinternational.in/the-apparel-times/" },
    { id: 'MP_BD_07', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/textilelearnerlogo.png', companyName: "Textile Learner Bangladesh", link: "https://textilelearner.net/" },
    { id: 'MP_BD_08', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/otgl-news.png', companyName: "OTGL News", link: "https://otglnews.com/" },
    { id: 'MP_BD_09', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/NMNlogohigh.png', companyName: "The Nippon Sewing Machine News", link: "https://www.nmn-news-japan.com/" },
    { id: 'MP_BD_10', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/textileinsights.png', companyName: "Textile Insights", link: "https://textileinsights.in/" },
    { id: 'MP_BD_11', img: 'https://bd.intexsouthasia.com/assets/img/mediaPartner/Globy.png', companyName: "Globy", link: "https://globy.com/" }
  ]
};

const MediaPartnerPage: React.FC = () => {
  const [activeShow, setActiveShow] = useState('SRI LANKA');
  const shows = ['SRI LANKA', 'BANGLADESH'];

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Media Alliance // Registry</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              MEDIA <br />
              <span className="text-white">PARTNERS.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black text-archive-charcoal/80 leading-tight">
                Accessing the <span className="text-archive-clay">verified network</span> of global trade journals and industry news portals.
              </p>
            </div>

            {/* Show Tabs Selector */}
            <div className="flex border border-archive-charcoal/10 bg-white p-2">
              {shows.map((show) => (
                <button
                  key={show}
                  onClick={() => setActiveShow(show)}
                  className={`px-8 py-4 text-[10px] font-black tracking-widest transition-all ${activeShow === show ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                >
                  {show}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Partners */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-archive-charcoal/10 border border-archive-charcoal/10"
          >
            {PARTNERS_DATA[activeShow === 'SRI LANKA' ? 'Sri Lanka' : 'Bangladesh'].map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.03 }}
                className="bg-white group relative aspect-square overflow-hidden flex flex-col hover:bg-archive-charcoal transition-all duration-700"
              >
                {/* Image Frame */}
                <div className="h-1/2 p-12 flex items-center justify-center relative bg-white group-hover:bg-white transition-colors duration-700">
                  <div className="w-full h-full  flex items-center justify-center relative overflow-hidden">
                    <img
                      src={partner.img}
                      alt={partner.companyName}
                      className="max-w-[80%] max-h-[80%] object-contain transition-all duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${partner.companyName}&background=F3EBE8&color=2F2C2C&bold=true`;
                      }}
                    />
                  </div>
                </div>

                {/* Info Frame */}
                <div className="h-1/2 p-10 flex flex-col justify-between bg-archive-cream/30 group-hover:text-white transition-colors duration-700">
                  <div className="space-y-4">

                    <h3 className="text-lg font-black tracking-tighter leading-[1.1] group-hover:text-archive-clay transition-colors duration-500">
                      {partner.companyName.toUpperCase()}
                    </h3>
                  </div>

                  <div className="pt-6 border-t border-archive-charcoal/5 group-hover:border-white/10 flex justify-between items-center">
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[9px] font-black tracking-[0.3em] text-archive-charcoal group-hover:text-white transition-colors group/btn"
                    >
                      VISIT WEBSITE <ExternalLink size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform uppercase" />
                    </a>
                    <Globe size={14} className="text-archive-charcoal/10 group-hover:text-archive-clay" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {(!PARTNERS_DATA[activeShow] || PARTNERS_DATA[activeShow].length === 0) && (
          <div className="py-60 flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[10px] font-black tracking-[0.5em] text-archive-charcoal/30 uppercase">NO PARTNER RECORDS FOUND FOR SELECTED NODE.</span>
          </div>
        )}
      </section>

      {/* Narrative Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black text-archive-clay leading-none uppercase">GLOBAL CIRCULATION.</h2>
              <div className="w-20 h-px bg-archive-clay"></div>
            </div>
            <div className="space-y-8">
              <p className="text-[12px] font-bold tracking-[0.15em] leading-relaxed text-archive-charcoal/60">
                Our media alliance network covers over 50+ international trade publications, digital newsletters, and technical journals. This ecosystem ensures that Intex South Asia updates reach the target demographic across Europe, South Asia, and the ASEAN region.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Partner Diversity", value: "30+ Global Journals" },
                  { label: "Content Syndication", value: "Technical Multi-Node" },
                  { label: "Market Reach", value: "EU, US, Asia" },
                  { label: "Audit Integrity", value: "Verified Publications" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2 border-l border-archive-charcoal/10 pl-6">
                    <span className="text-[8px] font-black tracking-widest opacity-40 block">{item.label}</span>
                    <span className="text-[11px] font-black text-archive-charcoal">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-archive-charcoal p-16 text-white space-y-12 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 opacity-5">
              <Newspaper size={200} />
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em]">Partner Protocol</span>
              <h3 className="text-xl font-black leading-none uppercase">JOIN THE <br /> MEDIA ALLIANCE.</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/40 leading-relaxed">
                Trade publications and industry digital portals interested in partnering for the 2026 Archive cycle may request official accreditation and media kit credentials.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal transition-all">
                  APPLY FOR PARTNERSHIP
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal hover:border-white transition-all flex items-center gap-3">
                  REGISTRY DATA <ShieldCheck size={14} className="uppercase" />
                </button>
              </div>
            </div>
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

export default MediaPartnerPage;

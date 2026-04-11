
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, FileText, Database, ShieldCheck } from 'lucide-react';

interface Newsletter {
  id: string;
  img: string;
  text: string;
  link: string;
}

const NEWSLETTER_DATA: Record<string, Newsletter[]> = {
  'Sri Lanka': [
    { id: 'NL_SL_01', text: 'Srilanka Emailer 01', img: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/srilanka-1.png', link: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/srilanka-1.html' },
    { id: 'NL_SL_02', text: 'Srilanka Emailer 02', img: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/srilanka-2.png', link: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/srilanka-2.html' },
    { id: 'NL_SL_03', text: 'Featured Exhibitors Sri Lanka', img: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/featured-exhibitors.png', link: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/featured-exhibitors-sri-lanka.html' },
    { id: 'NL_SL_04', text: 'PDEXCIL Pavilion', img: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/pdexcil-edm.png', link: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/pdexcil-pavilion.html' },
    { id: 'NL_SL_05', text: 'TEXPROCIL India Pavilion', img: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/texprocil.png', link: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/TEXPROCIL-INDIA-PAVILION.html' },
    { id: 'NL_SL_06', text: 'IBF Speakers Day 1', img: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/ibf-speakers-day-1.png', link: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/ibf-speakers-day-1.html' },
    { id: 'NL_SL_07', text: 'IBF Speakers Day 2', img: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/ibf-speakers-day-2.png', link: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/ibf-speakers-day-2.html' },
    { id: 'NL_SL_08', text: 'Trust Over Trends', img: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/Trust-over-trends.png', link: 'https://sl.intexsouthasia.com/assets/img/Edms-Newsletter/Trust-over-trends.html' },
  ],
  'Bangladesh': [
    { id: 'NL_BD_01', text: 'Official Announcement', img: 'https://bd.intexsouthasia.com/assets/img/Edms-Newsletter/announcement.png', link: 'https://bd.intexsouthasia.com/assets/img/Edms-Newsletter/announcement.html' },
    { id: 'NL_BD_02', text: 'Featured Exhibitors Dhaka', img: 'https://bd.intexsouthasia.com/assets/img/Edms-Newsletter/featured-exhibitors.png', link: 'https://bd.intexsouthasia.com/assets/img/Edms-Newsletter/featured-exhibitors-dhaka.html' },
    { id: 'NL_BD_03', text: 'IBF Combine Post', img: 'https://bd.intexsouthasia.com/assets/img/Edms-Newsletter/IBF-Combine-Post.png', link: 'https://bd.intexsouthasia.com/assets/img/Edms-Newsletter/IBF-Combine-Post.html' },
    { id: 'NL_BD_04', text: 'Apparel 2030 Insights', img: 'https://bd.intexsouthasia.com/assets/img/Edms-Newsletter/Apparel-2030.png', link: 'https://bd.intexsouthasia.com/assets/img/Edms-Newsletter/Apparel-2030.html' },
    { id: 'NL_BD_05', text: 'Industry Partner Eurofins', img: 'https://bd.intexsouthasia.com/assets/img/Edms-Newsletter/Industry-partner-eurofins.png', link: 'https://bd.intexsouthasia.com/assets/img/Edms-Newsletter/Industry-partner-eurofins.html' },
  ]
};

const NewsletterPage: React.FC = () => {
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
              <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Digital Archive // Communication</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              NEWSLETTER <br />
              <span className="text-white">ARCHIVE.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black text-archive-charcoal/80 leading-tight">
                ACCESSING THE <span className="text-archive-clay uppercase">TECHNICAL BULLETINS</span> AND INDUSTRY BROADCASTS FROM THE GLOBAL INTEX NETWORK.
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

      {/* Newsletter Grid */}
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
            {NEWSLETTER_DATA[activeShow === 'SRI LANKA' ? 'Sri Lanka' : 'Bangladesh'].map((nl, idx) => (
              <motion.div
                key={nl.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="bg-white group relative aspect-[4/5] overflow-hidden flex flex-col hover:bg-archive-charcoal transition-all duration-700"
              >
                {/* Image Layer */}
                <div className="h-2/3 relative overflow-hidden bg-archive-cream/30">
                  <img
                    src={nl.img}
                    alt={nl.text}
                    className="w-full h-full object-cover brightness-90 group-hover:scale-110 group-hover:brightness-50 transition-all duration-[2000ms]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal/20 to-transparent group-hover:from-archive-charcoal/60 transition-all"></div>

                  {/* Serial Overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 group-hover:bg-archive-clay transition-colors">
                    <span className="text-[9px] font-mono font-black text-archive-charcoal group-hover:text-white uppercase">EDM_{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Content Layer */}
                <div className="h-1/3 p-8 flex flex-col justify-between group-hover:text-white transition-colors duration-700">
                  <div className="space-y-4">

                    <h3 className="text-lg font-black tracking-tighter leading-tight group-hover:text-archive-clay transition-colors duration-500 line-clamp-2">
                      {nl.text.toUpperCase()}
                    </h3>
                  </div>

                  <div className="pt-6 flex justify-between items-center border-t border-archive-charcoal/5 group-hover:border-white/10">
                    <a
                      href={nl.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[9px] font-black tracking-[0.3em] text-archive-charcoal group-hover:text-white transition-colors group/btn"
                    >
                      VIEW DETAILS <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform uppercase" />
                    </a>
                    <FileText size={14} className="text-archive-charcoal/10 group-hover:text-archive-clay" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {(!NEWSLETTER_DATA[activeShow] || NEWSLETTER_DATA[activeShow].length === 0) && (
          <div className="py-60 flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[10px] font-black tracking-[0.5em] text-archive-charcoal/30 uppercase">NO BROADCAST RECORDS FOUND FOR SELECTED NODE.</span>
          </div>
        )}
      </section>

      {/* Info Protocols Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black text-archive-clay leading-none uppercase">GLOBAL BROADCASTS.</h2>
              <div className="w-20 h-px bg-archive-clay"></div>
            </div>
            <div className="space-y-8">
              <p className="text-[12px] font-bold tracking-[0.15em] leading-relaxed text-archive-charcoal/60">
                The Intex digital bulletin registry maintains a historical log of all official communications, show updates, and partner announcements. These records serve as a verified source of truth for exhibitors and trade visitors alike.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Circulation Volume", value: "100K+ Recipients" },
                  { label: "Content Fidelity", value: "Verified Official" },
                  { label: "Node Distribution", value: "Multinational" },
                  { label: "Audit Log", value: "Historical Registry" }
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
              <Database size={200} />
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em]">Subscription Matrix</span>
              <h3 className="text-xl font-black leading-none uppercase">JOIN THE <br /> INDUSTRY BROADCAST.</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/40 leading-relaxed">
                Receive priority technical specifications and show updates directly to your terminal. Authenticated registry for industry professionals only.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal transition-all">
                  SUBSCRIBE NOW
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal hover:border-white transition-all flex items-center gap-3">
                   REGISTRY PROTOCOL <ShieldCheck size={14} className="uppercase" />
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

export default NewsletterPage;

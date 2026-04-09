
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Clock, MapPin, Database, Layers, ArrowUpRight, Info } from 'lucide-react';

interface FactsheetItem {
  id: string;
  name: string;
  edition: string;
  logo: string;
  highlights?: string[];
  profile?: string;
  date: string;
  time: string;
  venue: string;
}

const FACTSHEET_DATA: FactsheetItem[] = [
  {
    id: 'FS_BD_18',
    name: 'INTEX BANGLADESH',
    edition: '18th Edition',
    logo: 'https://sl.intexsouthasia.com/_next/image?url=%2Fassets%2Fimg%2Forgb.png&w=384&q=75',
    highlights: [
      'Grand Opening Ceremony',
      'Country Pavilions',
      'Domestic + International Exhibitors',
      'Innovation & Trends Showcase',
      'Interactive Business Forum Seminar Series',
      'Buyer Delegations + International Hosted Buyers',
      'Hi-Tea Reception',
      'Trade Media Corner',
      'VIP Platinum Lounge for B2B Meetings'
    ],
    date: '18-19-20 June 2026',
    time: '10:00 AM - 06:00 PM',
    venue: 'ICCB, Dhaka, Bangladesh'
  },
  {
    id: 'FS_SL_19',
    name: 'INTEX SRI LANKA',
    edition: '19th Edition',
    logo: 'https://sl.intexsouthasia.com/_next/image?url=%2Fassets%2Fimg%2Forgi.png&w=384&q=75',
    highlights: [
      'Grand Opening Ceremony',
      'Country Pavilions',
      'Domestic + International Exhibitors',
      'Innovation & Trends Showcase',
      'Interactive Business Forum Seminar Series',
      'Textile Fashion Week',
      'Buyer Delegations + International Hosted Buyers',
      'Networking Reception',
      'Trade Media Corner',
      'VIP Platinum Lounge for B2B Meetings'
    ],
    date: '05-06-07 August 2026',
    time: '10:00 AM - 06:00 PM',
    venue: 'BMICH, Colombo, Sri Lanka'
  },
  {
    id: 'FS_INMAC_04',
    name: 'INMAC SRI LANKA',
    edition: '4th Edition',
    logo: 'https://sl.intexsouthasia.com/_next/image?url=%2Fassets%2Fimg%2FinMac.png&w=384&q=75',
    profile: 'InMac is an international exhibition showcasing cutting-edge advanced machinery and new technology to support the textile & garment industry in Bangladesh, Sri Lanka and the region. Held concurrently with Intex – The Premier International Textile Sourcing Show, InMac will offer domestic and overseas companies direct opportunity to launch their latest innovative products and solutions, connect with key decision makers and buyers, generate sales leads & enquiries & network with industry peers across the supply-chain & production value-chain of South Asia.',
    date: '05-06-07 August 2026',
    time: '10:00 AM - 06:00 PM',
    venue: 'BMICH, Colombo, Sri Lanka'
  }
];

const FactsheetPage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Technical Manifest // Statistics</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              FACT <br />
              <span className="text-white">SHEETS.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl font-black uppercase text-archive-charcoal/80 leading-tight">
                Detailed technical specifications and <span className="text-archive-clay">event intelligence</span> for the 2026 exhibition cycle.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-archive-charcoal opacity-40">
                <Database size={14} />
                <span>SYNC_STATUS: ACTIVE_MANIFEST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factsheet Cards */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-px bg-archive-charcoal/10 border border-archive-charcoal/10">
          {FACTSHEET_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="bg-white grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden group"
            >
              {/* Logo Column */}
              <div className="lg:col-span-3 p-12 flex flex-col justify-between border-r border-archive-charcoal/5 bg-archive-cream/10 transition-colors duration-700">
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-black text-archive-clay">{item.id}</span>
                    <Layers size={14} className="opacity-10 group-hover:opacity-100 transition-opacity text-archive-clay" />
                  </div>
                  <div className="p-8 border border-archive-charcoal/5 flex items-center justify-center aspect-square transition-all duration-700">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="text-[9px] font-black tracking-[0.4em] text-archive-clay uppercase mb-1">Status Protocol</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500"></div>
                    <span className="text-[10px] font-black uppercase">Active // Open</span>
                  </div>
                </div>
              </div>

              {/* Merged Content + Specs Column */}
              <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-3">
                {/* Main Content Section */}
                <div className="lg:col-span-2 p-12 md:p-16 border-r border-archive-charcoal/5 space-y-12">
                  <div className="space-y-4">
                    <span className="text-archive-clay text-[11px] font-black tracking-[0.5em] uppercase">{item.edition}</span>
                    <h2 className="text-xs md:text-sm font-black uppercase tracking-tighter text-archive-charcoal leading-none">
                      {item.name}
                    </h2>
                  </div>

                  {item.highlights && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-px bg-archive-clay"></div>
                        <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Show Highlights</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-archive-clay rotate-45 mt-1.5 shrink-0"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-archive-charcoal/70 leading-tight">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.profile && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-px bg-archive-clay"></div>
                        <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Show Profile</span>
                      </div>
                      <p className="text-[13px] font-medium uppercase tracking-[0.1em] leading-relaxed text-archive-charcoal/60">
                        {item.profile}
                      </p>
                    </div>
                  )}
                </div>

                {/* Specs Section */}
                <div className="lg:col-span-1 p-12 bg-archive-charcoal text-white flex flex-col justify-between">
                  <div className="space-y-10">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                        <Calendar size={18} className="text-archive-clay" />
                        <div className="space-y-1">
                          <span className="text-[8px] font-black uppercase tracking-widest opacity-40 block">Event Date</span>
                          <span className="text-xs font-bold uppercase tracking-widest">{item.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                        <Clock size={18} className="text-archive-clay" />
                        <div className="space-y-1">
                          <span className="text-[8px] font-black uppercase tracking-widest opacity-40 block">Event Time</span>
                          <span className="text-xs font-bold uppercase tracking-widest">{item.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MapPin size={18} className="text-archive-clay" />
                        <div className="space-y-1">
                          <span className="text-[8px] font-black uppercase tracking-widest opacity-40 block">Event Venue</span>
                          <span className="text-xs font-bold uppercase tracking-widest leading-snug">{item.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 space-y-4">
                    <button className="w-full bg-archive-clay text-white py-5 px-8 text-[9px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal transition-all flex items-center justify-between group/btn">
                      DOWNLOAD PDF <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                    </button>
                    <button className="w-full border border-white/20 text-white py-5 px-8 text-[9px] font-black tracking-[0.4em] uppercase hover:bg-white/5 transition-all flex items-center justify-between group/btn">
                      VIEW DETAILS <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Notice Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-10">
            <div className="flex items-center gap-4 text-archive-clay">
              <Info size={24} />
              <span className="text-[12px] font-black tracking-[0.5em] uppercase">Security Protocol</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase leading-none text-archive-charcoal">Verified Event <br /><span className="text-archive-clay">Documentation.</span></h3>
            <p className="text-[14px] font-bold uppercase tracking-widest leading-relaxed text-archive-charcoal/50">
              All data points indexed in these factsheets are verified by the Worldex India audit registry. For customized technical requirements or specialized data queries, contact our information desk.
            </p>
          </div>

          <div className="p-12 border border-archive-charcoal/10 bg-white space-y-8 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 opacity-5">
              <Database size={150} />
            </div>
            <div className="space-y-2">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.4em] uppercase">Master Archive</span>
              <h4 className="text-2xl font-black uppercase text-archive-charcoal">Download Global Factsheet.</h4>
            </div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-archive-charcoal/40 leading-relaxed max-w-md">
              Get the combined technical specifications for all South Asian nodes in a single high-fidelity document.
            </p>
            <button className="flex items-center gap-4 text-[10px] font-black tracking-[0.5em] uppercase text-archive-charcoal hover:text-archive-clay transition-colors group">
              GET MASTER RECORD <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Technical Shutter */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10 mt-32">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default FactsheetPage;

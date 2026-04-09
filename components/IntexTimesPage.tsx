
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Search, Database, ShieldCheck, Clock, Newspaper, ArrowUpRight } from 'lucide-react';

interface Bulletin {
  id: string;
  year: string;
  event: string;
  title: string;
  pdfLink: string;
  type: string;
}

const BULLETIN_DATA: Bulletin[] = [
  // SRI LANKA - 2025
  { id: 'IT_SL_25_01', year: '2025', event: 'SRI LANKA', title: "Intex Times - Day 1", pdfLink: "https://sl.intexsouthasia.com/assets/pdf/Intex-Times-Day-1-2025.pdf", type: 'Daily Bulletin' },
  { id: 'IT_SL_25_02', year: '2025', event: 'SRI LANKA', title: "Intex Times - Day 2", pdfLink: "https://sl.intexsouthasia.com/assets/pdf/Intex-Times-Day-2-2025.pdf", type: 'Daily Bulletin' },
  { id: 'IT_SL_25_03', year: '2025', event: 'SRI LANKA', title: "Intex Times - Day 3", pdfLink: "https://sl.intexsouthasia.com/assets/pdf/Intex-Times-Day-3-2025.pdf", type: 'Daily Bulletin' },

  // SRI LANKA - 2024
  { id: 'IT_SL_24_01', year: '2024', event: 'SRI LANKA', title: "Intex Times - Day 1", pdfLink: "https://sl.intexsouthasia.com/assets/Images/pdf/intex-srilanka-2024-day-1.pdf", type: 'Daily Bulletin' },
  { id: 'IT_SL_24_02', year: '2024', event: 'SRI LANKA', title: "Intex Times - Day 2 & 3", pdfLink: "https://sl.intexsouthasia.com/assets/Images/pdf/intex-srilanka-2024-day-2.pdf", type: 'Daily Bulletin' },

  // SRI LANKA - 2023
  { id: 'IT_SL_23_01', year: '2023', event: 'SRI LANKA', title: "Intex Times - Day 1", pdfLink: "https://sl.intexsouthasia.com/assets/Images/pdf/INTEXTIMES - DAY 1.pdf", type: 'Daily Bulletin' },
  { id: 'IT_SL_23_02', year: '2023', event: 'SRI LANKA', title: "Intex Times - Day 2", pdfLink: "https://sl.intexsouthasia.com/assets/Images/pdf/INTEXTIMES - DAY 2.pdf", type: 'Daily Bulletin' },
  { id: 'IT_SL_23_03', year: '2023', event: 'SRI LANKA', title: "Intex Times - Day 3", pdfLink: "https://sl.intexsouthasia.com/assets/Images/pdf/INTEXTIMES 2023-DAY3.pdf", type: 'Daily Bulletin' },

  // BANGLADESH - 2025
  { id: 'IT_BD_25_01', year: '2025', event: 'BANGLADESH', title: "Preview 1", pdfLink: "https://sl.intexsouthasia.com/assets/pdf/Intex-Times-2025.pdf", type: 'Event Preview' },
  { id: 'IT_BD_25_02', year: '2025', event: 'BANGLADESH', title: "Preview 2", pdfLink: "https://sl.intexsouthasia.com/assets/pdf/Intex-InMac-Times.pdf", type: 'Machinery Index' }
];

const IntexTimesPage: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState('ALL');
  const [activeYear, setActiveYear] = useState('ALL');

  const events = ['ALL', 'BANGLADESH', 'SRI LANKA'];
  const years = ['ALL', '2025', '2024', '2023'];

  const filteredBulletins = useMemo(() => {
    return BULLETIN_DATA.filter(item => {
      const eventMatch = activeEvent === 'ALL' || item.event === activeEvent;
      const yearMatch = activeYear === 'ALL' || item.year === activeYear;
      return eventMatch && yearMatch;
    });
  }, [activeEvent, activeYear]);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-24">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Chronological Archive // Daily Record</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              INTEX <br />
              <span className="text-white">TIMES.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 border-y border-archive-charcoal/10 py-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Operational Node</span>
              <div className="flex flex-wrap gap-2">
                {events.map(ev => (
                  <button
                    key={ev}
                    onClick={() => setActiveEvent(ev)}
                    className={`px-8 py-3 text-[10px] font-black tracking-widest uppercase border transition-all ${activeEvent === ev ? 'bg-archive-charcoal text-white border-archive-charcoal' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {ev}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Temporal Frame</span>
              <div className="flex flex-wrap gap-2">
                {years.map(yr => (
                  <button
                    key={yr}
                    onClick={() => setActiveYear(yr)}
                    className={`px-8 py-3 text-[10px] font-black tracking-widest uppercase border transition-all ${activeYear === yr ? 'bg-archive-clay border-archive-clay text-white' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Bulletins */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-archive-charcoal/10 border border-archive-charcoal/10">
          <AnimatePresence mode="popLayout">
            {filteredBulletins.map((bulletin, idx) => (
              <motion.div
                key={bulletin.id}
                layout
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.08
                }}
                className="bg-white group relative aspect-[3/5] overflow-hidden flex flex-col hover:bg-archive-charcoal transition-all duration-700 border border-archive-charcoal/5"
              >
                {/* Visual Preview Frame (PDF Preview) increased height by ~30% */}
                <div className="h-[320px] relative overflow-hidden bg-archive-cream/30 p-6 group-hover:p-4 transition-all duration-700">
                  <div className="w-full h-full border border-archive-charcoal/5 flex items-center justify-center relative overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-all duration-700">
                    <iframe
                      src={`${bulletin.pdfLink}#view=FitH&toolbar=0&navpanes=0`}
                      className="w-full h-full border-0"
                      title={bulletin.title}
                    />
                    <div className="absolute inset-0 bg-archive-charcoal/5 group-hover:bg-transparent pointer-events-none transition-colors"></div>
                  </div>
                  {/* Serial Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 group-hover:bg-archive-clay transition-colors z-10 shadow-sm">
                    <span className="text-[9px] font-mono font-black text-archive-charcoal group-hover:text-white uppercase tracking-tighter">{bulletin.id}</span>
                  </div>
                </div>

                <div className="flex-1 p-8 flex flex-col justify-between group-hover:text-white transition-colors duration-700">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black tracking-widest text-archive-clay uppercase">{bulletin.event} // {bulletin.year}</span>
                        <div className="w-4 h-px bg-archive-clay opacity-30 group-hover:w-8 transition-all"></div>
                      </div>
                      <h3 className="text-xl font-black uppercase text-archive-charcoal tracking-tighter leading-tight group-hover:text-white transition-colors duration-500">
                        {bulletin.title}
                      </h3>
                    </div>
                  </div>

                  <div className="relative z-10 pt-10 border-t border-archive-charcoal/5 group-hover:border-white/10 mt-auto flex justify-end items-end">
                    <a
                      href={bulletin.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-5 bg-archive-charcoal text-white group-hover:bg-archive-clay transition-all flex items-center gap-4 text-[9px] font-black tracking-[0.3em] uppercase"
                    >
                      READ <Download size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredBulletins.length === 0 && (
          <div className="py-60 flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-charcoal/30">No bulletins indexed for selected node.</span>
          </div>
        )}
      </section>

      {/* Intelligence Protocol Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase text-archive-clay leading-none">Journalistic Integrity.</h2>
              <div className="w-20 h-px bg-archive-clay"></div>
            </div>
            <div className="space-y-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] leading-relaxed text-archive-charcoal/60">
                The Intex Times serves as the official daily record for the South Asian textile summits. Every edition is a technical specimen documenting show-floor activity, executive insights, and material innovations revealed during the exhibition cycle.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Audit Source", value: "Official Editorial" },
                  { label: "Content Fidelity", value: "Verified Press" },
                  { label: "Node Tracking", value: "Day-by-Day Logs" },
                  { label: "Historical Link", value: "Permanent Index" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2 border-l border-archive-charcoal/10 pl-6">
                    <span className="text-[8px] font-black tracking-widest uppercase opacity-40 block">{item.label}</span>
                    <span className="text-[11px] font-black uppercase text-archive-charcoal">{item.value}</span>
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
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em] uppercase">Press Registry</span>
              <h3 className="text-xl font-black uppercase leading-none">Access the Full <br /> Editorial Server.</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 leading-relaxed">
                Require high-fidelity print assets or historical editorial data from the Intex Times archive? Authenticated media partners may request terminal access to our master document server.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal transition-all">
                  Contact Editorial Desk
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal hover:border-white transition-all flex items-center gap-3">
                  Sync Protocol <ShieldCheck size={14} />
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

export default IntexTimesPage;

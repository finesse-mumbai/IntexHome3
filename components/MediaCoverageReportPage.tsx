
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Search, Database, ShieldCheck, ArrowRight, BarChart3 } from 'lucide-react';

interface ReportSpecimen {
  id: string;
  title: string;
  url: string;
  year: string;
  event: string;
  fileSize: string;
}

const REPORT_DATA: ReportSpecimen[] = [
  {
    id: 'REP_BD_25_LOG',
    title: "Media Coverage Report - 2025",
    url: "https://bd.intexsouthasia.com/assets/pdf/MEDIA-COVERAGE-2025.pdf",
    year: "2025",
    event: "BANGLADESH",
    fileSize: "3.8 MB"
  },
  {
    id: 'REP_SL_25_LOG',
    title: "Media Coverage Report - 2025",
    url: "https://sl.intexsouthasia.com/assets/pdf/MEDIA-COVERAGE-2025.pdf",
    year: "2025",
    event: "SRI LANKA",
    fileSize: "4.1 MB"
  },
  {
    id: 'REP_GL_24_LOG',
    title: "Media Coverage Report - 2024",
    url: "https://sl.intexsouthasia.com/assets/pdf/MEDIA-COVERAGE-2024.pdf",
    year: "2024",
    event: "GLOBAL",
    fileSize: "5.2 MB"
  },
  {
    id: 'REP_IN_24_LOG',
    title: "Media Coverage Report - 2024",
    url: "https://sl.intexsouthasia.com/assets/pdf/MEDIA-COVERAGE-2024.pdf",
    year: "2024",
    event: "INDIA",
    fileSize: "2.9 MB"
  }
];

const MediaCoverageReportPage: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState('ALL');
  const [activeYear, setActiveYear] = useState('ALL');

  const events = ['ALL', 'BANGLADESH', 'SRI LANKA', 'INDIA', 'GLOBAL'];
  const years = ['ALL', '2025', '2024'];

  const filteredReports = useMemo(() => {
    return REPORT_DATA.filter(item => {
      const eventMatch = activeEvent === 'ALL' || item.event === activeEvent;
      const yearMatch = activeYear === 'ALL' || item.year === activeYear;
      return eventMatch && yearMatch;
    });
  }, [activeEvent, activeYear]);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden font-sans">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-24">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Public Relations // Audit Archive</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-serif font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              COVERAGE <br />
              <span className="text-outline" style={{ WebkitTextStroke: '2px #2F2C2C' }}>REPORTS.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 border-y border-archive-charcoal/10 py-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Event Cluster</span>
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
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Archive Cycle</span>
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

      {/* Reports Grid with Bottom-to-Top Animation */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-archive-charcoal/10 border border-archive-charcoal/10">
          <AnimatePresence mode="popLayout">
            {filteredReports.map((report, idx) => (
              <motion.div
                key={report.id}
                layout
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.05
                }}
                className="bg-white group p-6 md:p-8 flex flex-col justify-between h-[500px] relative overflow-hidden hover:bg-archive-charcoal transition-all duration-700"
              >
                {/* Background Decor */}
                <div className="absolute -bottom-8 -right-8 text-[12rem] font-serif font-black text-archive-charcoal/[0.02] group-hover:text-white/[0.03] select-none pointer-events-none transition-colors duration-700">
                  {report.year.slice(2)}
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="w-full">
                    {report.url && report.url !== '#' ? (
                      <div className="w-full h-48 mb-6 border border-archive-charcoal/10 bg-archive-cream/30 p-2 group-hover:border-archive-clay transition-colors">
                        <iframe
                          src={`${report.url}#view=FitH&toolbar=0&navpanes=0`}
                          className="w-full h-full border border-archive-charcoal/5 shadow-sm bg-white"
                          title={report.title}
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 mb-6 border border-archive-charcoal/10 flex items-center justify-center text-archive-clay group-hover:bg-archive-clay group-hover:text-white group-hover:border-archive-clay transition-all duration-500">
                        <BarChart3 size={20} strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="text-[9px] font-black tracking-widest text-archive-clay uppercase">{report.event} // {report.year}</span>
                      <h3 className="text-lg font-serif font-black uppercase text-archive-charcoal tracking-tighter leading-[1] group-hover:text-white transition-colors duration-500">
                        {report.title}
                      </h3>
                    </div>
                    <div className="w-12 h-px bg-archive-clay/40 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>

                <div className="relative z-10 pt-6 border-t border-archive-charcoal/5 group-hover:border-white/10 mt-auto flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FileText size={12} className="text-archive-clay" />
                      <span className="text-[8px] font-black tracking-widest text-archive-charcoal/30 group-hover:text-white/30 uppercase">PDF_MANIFEST</span>
                    </div>
                    <span className="text-[12px] font-black text-archive-charcoal group-hover:text-archive-clay transition-colors">{report.fileSize}</span>
                  </div>
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-5 bg-archive-charcoal text-white group-hover:bg-archive-clay transition-all flex items-center gap-4 text-[9px] font-black tracking-[0.3em] uppercase"
                  >
                    DOWNLOAD <Download size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredReports.length === 0 && (
          <div className="py-60 flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-charcoal/30">No reports indexed for selected filters.</span>
          </div>
        )}
      </section>

      {/* Intelligence Protocol Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-serif font-black uppercase text-archive-clay leading-none">Journalistic Verification.</h2>
              <div className="w-20 h-px bg-archive-clay"></div>
            </div>
            <div className="space-y-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] leading-relaxed text-archive-charcoal/60">
                The Media Coverage Reports are compiled by independent audit agencies to document the reach and impact of Intex South Asia across digital, print, and broadcast channels. Every mention is indexed for historical transparency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Audit Depth", value: "Multi-Platform Index" },
                  { label: "Reach Analytics", value: "Verified Impressions" },
                  { label: "Node Coverage", value: "Global Distribution" },
                  { label: "Archive Status", value: "Publicly Accessible" }
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
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em] uppercase">Press Desk</span>
              <h3 className="text-xl font-serif font-black uppercase leading-none">Request Custom <br /> Impact Data.</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 leading-relaxed">
                Require specific regional media analysis or exhibitor-exclusive impact reports? Our public relations department facilitates custom technical data requests for verified partners.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal transition-all">
                  Contact Media Relations
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal hover:border-white transition-all flex items-center gap-3">
                  Registry Audit <ShieldCheck size={14} />
                </button>
              </div>
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

export default MediaCoverageReportPage;

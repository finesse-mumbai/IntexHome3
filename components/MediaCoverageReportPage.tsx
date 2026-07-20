import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, BarChart3, Search, Database, ShieldCheck, Mail, Phone, UserCheck } from 'lucide-react';

interface MediaReport {
  id: string;
  event: string;
  year: string;
  title: string;
  fileSize: string;
  url: string;
}

const REPORTS_DATA: MediaReport[] = [
  { id: 'REP_BD_24', event: 'Intex Bangladesh', year: '2024', title: 'Post Show PR Report 2024', fileSize: '1.2 MB', url: 'https://sl.intexsouthasia.com/assets/pdf/Intex-Bangladesh-2024-Post-Show-PR-Report.pdf' },
  { id: 'REP_SL_24', event: 'Intex Sri Lanka', year: '2024', title: 'Media Coverage Report 2024', fileSize: '2.5 MB', url: 'https://sl.intexsouthasia.com/assets/pdf/Intex-Sri-Lanka-2024-Media-Coverage-Report.pdf' },
  { id: 'REP_BD_23', event: 'Intex Bangladesh', year: '2023', title: 'Media Coverage Report 2023', fileSize: '3.1 MB', url: 'https://bd.intexsouthasia.com/assets/pdf/Intex-Bangladesh-2023-Media-Coverage-Report.pdf' },
  { id: 'REP_SL_23', event: 'Intex Sri Lanka', year: '2023', title: 'Media Coverage Report 2023', fileSize: '1.9 MB', url: 'https://sl.intexsouthasia.com/assets/pdf/Intex-Sri-Lanka-2023-Media-Coverage-Report.pdf' },
  { id: 'REP_SL_22', event: 'Intex Sri Lanka', year: '2022', title: 'Media Coverage Report 2022', fileSize: '2.2 MB', url: 'https://sl.intexsouthasia.com/assets/pdf/Intex-Sri-Lanka-2022-Media-Coverage-Report.pdf' },
];

const MediaCoverageReportPage: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState('ALL');
  const [activeYear, setActiveYear] = useState('ALL');

  const events = useMemo(() => {
    return ['ALL', ...Array.from(new Set(REPORTS_DATA.map(r => r.event)))];
  }, []);

  const years = useMemo(() => {
    return ['ALL', ...Array.from(new Set(REPORTS_DATA.map(r => r.year)))].sort((a, b) => b.localeCompare(a));
  }, []);

  const filteredReports = useMemo(() => {
    return REPORTS_DATA.filter(report => {
      const matchEvent = activeEvent === 'ALL' || report.event === activeEvent;
      const matchYear = activeYear === 'ALL' || report.year === activeYear;
      return matchEvent && matchYear;
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
              <span className="text-[14px] font-black tracking-[0.5em] text-archive-clay">Public Relations // Audit Archive</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              COVERAGE <br />
              <span className="text-white">REPORTS.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 border-y border-archive-charcoal/10 py-12">
            <div className="space-y-4">
              <span className="text-[14px] font-black tracking-widest opacity-40">Event Cluster</span>
              <div className="flex flex-wrap gap-2">
                {events.map(ev => (
                  <button
                    key={ev}
                    onClick={() => setActiveEvent(ev)}
                    className={`px-8 py-3 text-[14px] font-black tracking-widest border transition-all ${activeEvent === ev ? 'bg-archive-charcoal text-white border-archive-charcoal' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {ev}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[14px] font-black tracking-widest opacity-40">Archive Cycle</span>
              <div className="flex flex-wrap gap-2">
                {years.map(yr => (
                  <button
                    key={yr}
                    onClick={() => setActiveYear(yr)}
                    className={`px-8 py-3 text-[14px] font-black tracking-widest border transition-all ${activeYear === yr ? 'bg-archive-clay border-archive-clay text-white' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-white group p-6 md:p-8 flex flex-col justify-between h-[600px] relative overflow-hidden hover:bg-archive-charcoal transition-all duration-700"
              >
                {/* Background Decor */}
                <div className="absolute -bottom-8 -right-8 text-[12rem] font-black text-archive-charcoal/[0.02] group-hover:text-white/[0.03] select-none pointer-events-none transition-colors duration-700">
                  {report.year.slice(2)}
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="w-full">
                    {report.url && report.url !== '#' ? (
                      <div className="w-full h-72 mb-6 border border-archive-charcoal/10 bg-archive-cream/30 p-2 group-hover:border-archive-clay transition-colors">
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
                      <span className="text-[14px] font-black tracking-widest text-archive-clay uppercase">{report.event} // {report.year}</span>
                      <h3 className="text-lg font-black text-archive-charcoal tracking-tighter leading-[1] group-hover:text-white transition-colors duration-500">
                        {report.title}
                      </h3>
                    </div>

                  </div>
                </div>

                <div className="relative z-10 pt-6 border-t border-archive-charcoal/5 group-hover:border-white/10 mt-auto flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">

                      <span className="text-[14px] font-black tracking-widest text-archive-charcoal/30 group-hover:text-white/30 uppercase">PDF Manifest</span>
                    </div>
                    <span className="text-[14px] font-black text-archive-charcoal group-hover:text-archive-clay transition-colors">{report.fileSize}</span>
                  </div>
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-5 bg-archive-charcoal text-white group-hover:bg-archive-clay transition-all flex items-center gap-4 text-[14px] font-black tracking-[0.3em]"
                  >
                    DOWNLOAD <Download size={14} className="uppercase" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredReports.length === 0 && (
          <div className="py-60 flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[14px] font-black tracking-[0.5em] text-archive-charcoal/30 uppercase">NO REPORTS INDEXED FOR SELECTED FILTERS.</span>
          </div>
        )}
      </section>

      {/* Intelligence Protocol Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-[14px] font-black text-archive-clay leading-none uppercase">JOURNALISTIC VERIFICATION.</h2>
              <div className="w-20 h-px bg-archive-clay"></div>
            </div>
            <div className="space-y-8">
              <p className="text-[14px] font-bold tracking-[0.15em] leading-relaxed text-archive-charcoal/60">
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
                    <span className="text-[14px] font-black tracking-widest opacity-40 block">{item.label}</span>
                    <span className="text-[14px] font-black text-archive-charcoal">{item.value}</span>
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
              <span className="text-archive-clay text-[14px] font-black tracking-[0.5em]">Press Desk</span>
              <h3 className="text-xl font-black leading-none uppercase">Request Custom <br /> Impact Data.</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-[14px] font-bold tracking-[0.2em] text-white/40 leading-relaxed">
                Require specific regional media analysis or exhibitor-exclusive impact reports? Our public relations department facilitates custom technical data requests for verified partners.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-archive-clay text-white font-black text-[14px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal transition-all">
                  CONTACT MEDIA RELATIONS
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black text-[14px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal hover:border-white transition-all flex items-center gap-3">
                  REGISTRY AUDIT <ShieldCheck size={14} className="uppercase" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaCoverageReportPage;

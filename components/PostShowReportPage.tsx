
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, Search, Database, ShieldCheck, History, ArrowUpRight, BarChart3 } from 'lucide-react';

interface PostShowReport {
  id: string;
  img: string;
  text: string;
  link: string;
  year: string;
}

const REPORT_DATA: PostShowReport[] = [
  { id: 'PSR_SL_25', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/POST-SHOW-REPORT-INTEX-SRILANKA-2025.jpg', text: 'Post Show Report 2025', link: "https://online.intexsouthasia.com/books/lkqm/", year: '2025' },
  { id: 'PSR_24_01', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/PSR-1.png', text: 'Post Show Report 2024', link: "https://online.intexsouthasia.com/books/aeai/", year: '2024' },
  { id: 'PSR_24_02', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/Intex-Sri-Lanka-2024-Post-Show-Report-1.png', text: 'Post Show Report 2024', link: "https://online.intexsouthasia.com/books/criu/", year: '2024' },
  { id: 'PSR_24_03', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/Intex-Bangladesh-2024-Post-Show-Report-1_cover.png', text: 'Post Show Report 2024', link: "https://online.intexsouthasia.com/books/mihj/", year: '2024' },
  { id: 'PSR_23_01', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/POST-SHOW-REPORT-INTEX-s1.jpg', text: 'Post Show Report 2023', link: "https://online.intexsouthasia.com/books/juqc/", year: '2023' },
  { id: 'PSR_23_02', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/ps-report-2023-2.png', text: 'Post Show Report 2023', link: "https://online.intexsouthasia.com/books/dxkv/", year: '2023' },
  { id: 'PSR_23_03', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/post-report-2023.png', text: 'Post Show Report 2023', link: "https://online.intexsouthasia.com/books/wxtm/", year: '2023' },
  { id: 'PSR_22_01', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/ps-report-2022-1.png', text: 'Post Show Report 2022', link: "https://online.intexsouthasia.com/books/htkh/", year: '2022' },
  { id: 'PSR_22_02', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/ps-report-2022.png', text: 'Post Show Report 2022', link: "https://online.intexsouthasia.com/books/uxcr/", year: '2022' },
  { id: 'PSR_21_01', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/ps-report-2021-1.png', text: 'Post Show Report 2021', link: "https://online.intexsouthasia.com/books/pxzd/", year: '2021' },
  { id: 'PSR_21_02', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/ps-report-2021-2.jpg', text: 'Post Show Report 2021', link: "https://online.intexsouthasia.com/books/mwes/", year: '2021' },
  { id: 'PSR_19_01', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/ps-report-2019.png', text: 'Post Show Report 2019', link: "https://online.intexsouthasia.com/books/lkfh/", year: '2019' },
  { id: 'PSR_18_01', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/ps-report-2018.png', text: 'Post Show Report 2018', link: "https://sl.intexsouthasia.com/assets/post-show-report/mobile/index.html#p=1", year: '2018' },
  { id: 'PSR_17_01', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/ps-report-2017.png', text: 'Post Show Report 2017', link: "https://online.intexsouthasia.com/books/mubt/", year: '2017' },
  { id: 'PSR_16_01', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/ps-report-2016.png', text: 'Post Show Report 2016', link: "https://online.anyflip.com/ovon/hmqi/mobile/index.html#p=1", year: '2016' },
  { id: 'PSR_15_01', img: 'https://sl.intexsouthasia.com/assets/img/postshowreport/ps-report-2015.png', text: 'Post Show Report 2015', link: "https://online.intexsouthasia.com/books/wmxu/", year: '2015' }
];

const PostShowReportPage: React.FC = () => {
  const [filterYear, setFilterYear] = useState('ALL');

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(REPORT_DATA.map(r => r.year))).sort((a, b) => b.localeCompare(a));
    return ['ALL', ...uniqueYears];
  }, []);

  const filteredReports = useMemo(() => {
    return filterYear === 'ALL'
      ? REPORT_DATA
      : REPORT_DATA.filter(r => r.year === filterYear);
  }, [filterYear]);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              POST SHOW <br className="hidden lg:inline" />
              <span className="text-white">REPORTS.</span>
            </h1>
          </div>

          <div className="flex flex-wrap border border-archive-charcoal/10 bg-white p-1 shrink-0 max-w-full">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setFilterYear(yr)}
                className={`px-4 md:px-6 py-3 text-[13px] md:text-[14px] font-black tracking-widest transition-all uppercase ${filterYear === yr ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={filterYear}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filteredReports.map((report, idx) => (
              <motion.div
                key={report.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.03 }}
                className="bg-white group relative aspect-[3/5] overflow-hidden flex flex-col hover:bg-archive-charcoal transition-all duration-700"
              >
                {/* Visual Frame */}
                <div className="h-[100%] relative overflow-hidden bg-archive-cream/30 p-6 group-hover:p-4 transition-all duration-700">
                  <div className="w-full h-full border border-archive-charcoal/5 flex items-center justify-center relative overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-all duration-700">
                    <img
                      src={report.img}
                      alt={report.text}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:filter-none group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${report.text}&background=F3EBE8&color=2F2C2C&bold=true`;
                      }}
                    />
                    <div className="absolute inset-0 bg-archive-charcoal/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 bg-archive-charcoal text-white px-3 py-1 text-[14px] font-mono font-black z-10 group-hover:bg-archive-clay transition-colors shadow-sm">
                    {report.year}
                  </div>
                </div>

                {/* Info Frame */}
                <div className="h-[25%] p-6 flex flex-col justify-between group-hover:text-white transition-colors duration-700">
                  <div className="space-y-2">

                    <h3 className="text-lg font-black tracking-tighter leading-tight group-hover:text-archive-clay transition-colors duration-500 line-clamp-2">
                      {report.text}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-archive-charcoal/5 group-hover:border-white/10 flex justify-between items-center">
                    <a
                      href={report.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[14px] font-black tracking-[0.15em] text-archive-charcoal group-hover:text-white transition-colors group/btn"
                    >
                      READ REPORT
                    </a>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform uppercase" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredReports.length === 0 && (
          <div className="py-60 flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[14px] font-black tracking-[0.5em] text-archive-charcoal/30 uppercase">No archive records found for selected node.</span>
          </div>
        )}
      </section>



      {/* Decorative Technical Detail */}
      <div className="h-4  relative overflow-hidden opacity-10">
        <div className="absolute inset-0"></div>
      </div>
    </div>
  );
};

export default PostShowReportPage;


import React from 'react';
import { motion } from 'framer-motion';
import { Database, AlertCircle, ArrowUpRight, Search, Lock } from 'lucide-react';

const SHOWS = [
  {
    id: 'NODE_BD_26',
    name: 'Intex Bangladesh',
    location: 'ICCB, Dhaka',
    status: 'Upcoming',
    year: '2026',
    date: '28-30 May',
    pdf: 'https://bd.intexsouthasia.com/assets/pdf/Exhibitor-List-Intex-Bangladesh-2025.pdf'
  },
  {
    id: 'NODE_SL_26',
    name: 'Intex Sri Lanka',
    location: 'BMICH, Colombo',
    status: 'Upcoming',
    year: '2026',
    date: '12-14 August',
    pdf: null
  },
  {
    id: 'NODE_IN_26',
    name: 'Intex India',
    location: 'New Delhi',
    status: 'Upcoming',
    year: '2026',
    date: '03-05 December',
    pdf: null
  }
];

const ExhibitorListPage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Registry // Directory Index</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              Exhibitor <br />
              <span className="text-white">Lists.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black text-archive-charcoal/80 leading-tight">
                Accessing the <span className="text-archive-clay">verified manifest</span> of participating manufacturers for the 2026 global cycle.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-end">
              <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-archive-charcoal opacity-40">
                <Database size={14} />
                <span>SYSTEM STATUS: COMPILING DATASETS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show Modules Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SHOWS.map((show, idx) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative h-[600px] border border-archive-charcoal/10 bg-white p-12 flex flex-col justify-between overflow-hidden"
            >
              {/* Background ID Decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-archive-charcoal/[0.02] select-none pointer-events-none group-hover:text-archive-clay/[0.05] transition-colors duration-700">
                0{idx + 1}
              </div>

              <div className="space-y-10 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-xl font-mono font-black text-archive-clay bg-archive-clay/20 px-2 rounded">{show.date}</span>

                  </div>
                  <Lock size={16} className="text-archive-charcoal/10 group-hover:text-archive-clay transition-colors" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-black tracking-tighter leading-[0.9] text-archive-charcoal group-hover:text-archive-clay transition-colors duration-500">
                    {show.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-archive-charcoal/40 tracking-widest">
                    <Search size={10} />
                    {show.location.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-12">
                {show.pdf ? (
                  <div className="w-full h-[300px] border border-archive-charcoal/10 bg-white p-1">
                    <iframe
                      src={`${show.pdf}#view=FitH`}
                      title={`${show.name} Exhibitor List`}
                      className="w-full h-full border-0"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-12 border border-dashed border-archive-charcoal/10 bg-archive-cream/30 h-[300px]">
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="text-base md:text-lg font-black tracking-tighter text-archive-charcoal"
                    >
                      {show.status.toUpperCase()}
                    </motion.div>
                    <span className="mt-4 text-[9px] font-black tracking-[0.4em] text-archive-clay">Cycle // {show.year}</span>
                  </div>
                )}

                <div className="pt-8 border-t border-archive-charcoal/5 flex justify-between items-center group-hover:border-archive-clay/20 transition-colors">
                  <span className="text-[11px] font-black tracking-widest text-archive-charcoal/30">
                    {show.pdf ? 'Download PDF' : 'Status'}
                  </span>
                  {show.pdf ? (
                    <a
                      href={show.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-archive-charcoal group-hover:text-archive-clay transition-all"
                    >
                      VIEW LIST <ArrowUpRight size={14} className="uppercase" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-black tracking-[0.3em] text-archive-charcoal/40">
                      UPCOMING
                    </span>
                  )}
                </div>
              </div>

              {/* Technical Scanline effect */}
              <motion.div
                className="absolute inset-x-0 h-[1px] bg-archive-clay/10 z-[5] pointer-events-none"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Notice Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-3xl border-l border-archive-clay pl-12 space-y-8">
          <div className="flex items-center gap-4 text-archive-clay">
            <AlertCircle size={20} />
             <span className="text-[11px] font-black tracking-[0.4em] uppercase">Security Protocol</span>
          </div>
          <p className="text-[14px] font-bold tracking-widest leading-relaxed text-archive-charcoal/60">
            The 2026 exhibitor databases are currently undergoing verification and indexing. Access to the full manifest is restricted until the formal release protocol is initiated. Registered buyers will receive prioritized credentials for early access.
          </p>
          <button className="px-10 py-5 bg-archive-charcoal text-white font-black text-[10px] tracking-[0.4em] hover:bg-archive-clay transition-all">
            REQUEST EARLY ACCESS CREDENTIALS
          </button>
        </div>
      </section>

      {/* Decorative Technical Shutter */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10 mt-32">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default ExhibitorListPage;

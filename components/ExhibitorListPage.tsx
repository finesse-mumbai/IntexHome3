
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
            <div className="lg:col-span-5">
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
              className="group relative border border-archive-charcoal/10 bg-archive-charcoal overflow-hidden flex flex-col"
            >
              {/* Orange Accent Strip */}
              <div className="h-1.5 bg-archive-clay w-full"></div>

              {/* Header Info */}
              <div className="p-10 space-y-6 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black tracking-[0.5em] text-archive-clay uppercase">Show 0{idx + 1}</span>
                  <span className="text-[9px] font-black tracking-widest text-white/30 uppercase">{show.year}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter leading-[0.9] text-white">
                    {show.name}
                  </h3>
                  <div className="text-[10px] font-bold text-white/40 tracking-widest">
                    {show.location.toUpperCase()}
                  </div>
                </div>

                <div className="inline-block bg-archive-clay/20 px-4 py-2">
                  <span className="text-lg font-mono font-black text-archive-clay">{show.date}</span>
                </div>
              </div>

              {/* PDF / Upcoming Section */}
              <div className="px-10 pb-4">
                {show.pdf ? (
                  <div className="w-full h-[220px] border border-white/10 bg-white p-1">
                    <iframe
                      src={`${show.pdf}#view=FitH`}
                      title={`${show.name} Exhibitor List`}
                      className="w-full h-full border-0"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center border border-dashed border-white/10 bg-white/5 h-[220px]">
                    <span className="text-base font-black tracking-tighter text-white/30">
                      {show.status.toUpperCase()}
                    </span>
                    <span className="mt-2 text-[9px] font-black tracking-[0.4em] text-archive-clay/60">COMING SOON</span>
                  </div>
                )}
              </div>

              {/* Bottom Action */}
              <div className="p-10 pt-6 border-t border-white/5 flex justify-between items-center">
                {show.pdf ? (
                  <a
                    href={show.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-white hover:text-archive-clay transition-all"
                  >
                    DOWNLOAD PDF <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/20">
                    UPCOMING
                  </span>
                )}
              </div>
            </motion.div>
          ))}
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

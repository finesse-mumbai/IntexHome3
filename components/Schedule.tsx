
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Calendar, Clock, ArrowUpRight, ChevronRight, ChevronLeft } from 'lucide-react';

const UPCOMING_EVENTS = [
  {
    id: 'u1',
    date: '18',
    month: 'JUN',
    day: 'THURSDAY',
    time: '10:00 - 18:00',
    title: 'INTEX BANGLADESH 2026: Opening Ceremony',
    location: 'ICCB, Dhaka, Bangladesh',
  },
  {
    id: 'u2',
    date: '05',
    month: 'AUG',
    day: 'WEDNESDAY',
    time: '10:00 - 18:00',
    title: 'INTEX SRI LANKA 2026: Networking Night',
    location: 'BMICH, Colombo, Sri Lanka',
  }
];

const PAST_EVENTS = [
  { id: 'p1', date: '07', month: 'DEC', day: '2024', title: 'Intex India: New Delhi Edition', location: 'IICC, Dwarka, India' },
  { id: 'p2', date: '09', month: 'AUG', day: '2024', title: 'Intex Sri Lanka: 13th Edition', location: 'BMICH, Colombo' },
  { id: 'p3', date: '30', month: 'MAY', day: '2024', title: 'Intex Bangladesh: Dhaka Series', location: 'ICCB, Dhaka' },
  { id: 'p4', date: '07', month: 'DEC', day: '2023', title: 'Intex India: Greater Noida', location: 'IEML, India' },
  { id: 'p5', date: '10', month: 'AUG', day: '2023', title: 'Intex Sri Lanka: Anniversary Expo', location: 'BMICH, Colombo' },
  { id: 'p6', date: '16', month: 'JUN', day: '2023', title: 'Intex Bangladesh: Summer Edition', location: 'ICCB, Dhaka' },
  { id: 'p7', date: '08', month: 'DEC', day: '2022', title: 'Intex India: Mumbai Edition', location: 'Jio World Convention Centre' },
  { id: 'p8', date: '27', month: 'JUL', day: '2022', title: 'Intex Sri Lanka: Post-Pandemic Revival', location: 'BMICH, Colombo' },
  { id: 'p9', date: '16', month: 'JUN', day: '2022', title: 'Intex Bangladesh: Hybrid Expo', location: 'ICCB, Dhaka' },
  { id: 'p10', date: '14', month: 'NOV', day: '2019', title: 'Intex South Asia: Global Sourcing', location: 'BMICH, Colombo' },
  { id: 'p11', date: '17', month: 'NOV', day: '2018', title: 'Intex South Asia: 4th Edition', location: 'BMICH, Colombo' },
  { id: 'p12', date: '15', month: 'NOV', day: '2017', title: 'Intex South Asia: Innovation Hub', location: 'BMICH, Colombo' },
];

const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const currentData = activeTab === 'Upcoming' ? UPCOMING_EVENTS : PAST_EVENTS;

  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden border-b border-archive-charcoal/10" id="schedule">
      {/* 50/50 Background Split */}
      <div className="absolute inset-0 flex flex-row">
        <div className="w-1/2 h-full bg-white"></div>
        <div className="w-1/2 h-full bg-archive-charcoal"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 relative z-10">

        {/* LEFT SIDE: CONTROL (White Background Side) */}
        <div className="p-12 md:p-24 flex flex-col justify-between bg-white/80 backdrop-blur-sm lg:bg-transparent">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-archive-clay"></div>
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Event Registry</span>
              </div>
              <h2 className="text-xl md:text-4xl font-serif font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
                Events & <br /> <span>Program.</span>
              </h2>
            </div>

            <div className="max-w-xs space-y-6">
              <p className="text-[11px] font-bold tracking-widest text-archive-charcoal/60 uppercase leading-relaxed">
                Strategic sessions, technical forums, and industry mixers indexed for the current and historical cycles.
              </p>
            </div>

            <div className="flex flex-col border border-archive-charcoal divide-y divide-archive-charcoal max-w-sm">
              {['01. Upcoming', '02. Past'].map((tab) => {
                const tabName = tab.split(' ')[1];
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tabName)}
                    className={`p-8 text-left text-[11px] font-black tracking-[0.3em] uppercase transition-all flex justify-between items-center group ${activeTab === tabName ? 'bg-archive-clay text-white' : 'text-archive-charcoal hover:bg-archive-clay/5'}`}
                  >
                    <span>{tab}</span>
                    <Plus size={14} className={`transition-transform duration-500 ${activeTab === tabName ? 'rotate-45' : 'group-hover:rotate-90'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-12 flex flex-col items-start gap-4">

            <button className="text-[10px] font-black tracking-[0.4em] uppercase text-archive-charcoal border-b border-archive-clay/40 pb-2 hover:border-archive-clay transition-all flex items-center gap-3">
              View  All  Event Reports <ArrowUpRight size={12} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: LIST (Charcoal Background Side) */}
        <div className="p-12 md:p-24 flex flex-col justify-center space-y-12 bg-archive-charcoal/95 lg:bg-transparent overflow-hidden">
          <div className="space-y-2 shrink-0">
            <div className="flex justify-between items-end border-b border-white/20 pb-4">
              <span className="text-[10px] font-black tracking-[0.4em] text-archive-clay uppercase">{activeTab.toUpperCase()} RECORDS</span>
              <span className="text-[9px] font-mono text-white/80 uppercase">Upcoming Events: {currentData.length}</span>
            </div>
          </div>

          {/* Scrollable Container for 10+ items */}
          <div className={`flex-1 overflow-y-auto custom-scroll pr-6 space-y-16 ${activeTab === 'Past' ? 'max-h-[600px]' : ''}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                {currentData.map((event, idx) => (
                  <div
                    key={event.id}
                    className="group flex flex-col md:flex-row gap-10 items-start md:items-center border-l border-white/10 pl-8 hover:border-archive-clay transition-colors"
                  >
                    <div className="shrink-0 space-y-2 text-left w-24">
                      <div className="text-2xl font-serif font-black text-archive-clay leading-none">{event.date}</div>
                      <div className="text-[10px] font-black tracking-widest text-white/40 uppercase leading-none">
                        {event.month} <br /> {event.day}
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        {activeTab === 'Upcoming' && (
                          <div className="flex items-center gap-3 text-[9px] font-mono text-white/30 uppercase">
                            <Clock size={10} />
                            <span>{(event as any).time}</span>
                            <span className="opacity-20">|</span>
                            <span>ROOM_0{idx + 1}</span>
                          </div>
                        )}
                        <h3 className="text-lg md:text-xl font-serif font-black uppercase  leading-tight text-white group-hover:text-archive-clay transition-colors">
                          {event.title}
                        </h3>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 max-w-sm">
                          {event.location}
                        </p>
                        {activeTab === 'Upcoming' && (
                          <button className="flex items-center gap-4 group/btn whitespace-nowrap">
                            <div className="w-8 h-[1px] bg-white/20 group-hover/btn:bg-archive-clay group-hover/btn:w-12 transition-all"></div>
                            <span className="text-[12px] font-black tracking-widest uppercase text-white/90 group-hover/btn:text-white">Register Now</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pt-8 shrink-0">
            <div className="p-8 border border-white/10 bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-archive-clay/5 rotate-45 translate-x-16 -translate-y-16"></div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="space-y-2 text-center md:text-left">
                  <h4 className="text-[10px] font-black tracking-[0.3em] text-white uppercase">BRANDING OPPORTUNITIES</h4>
                  <p className="text-[8px] font-mono text-white/40 uppercase">Partner with us for the 2026 Seminar Series.</p>
                </div>
                <button className="px-6 py-3 bg-white text-archive-charcoal text-[9px] font-black uppercase tracking-widest hover:bg-archive-clay hover:text-white transition-all">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(217, 149, 120, 0.4); }
      `}</style>
    </section>
  );
};

export default Schedule;

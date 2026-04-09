
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Calendar, Clock, ArrowUpRight, ChevronRight, ChevronLeft } from 'lucide-react';

const IMG_BANGLADESH = 'C:/Users/USER/.gemini/antigravity/brain/f0c47ca4-7bcb-4ba8-811e-6f48582e7c15/bangladesh_textile_seminar_1775733738037.png';
const IMG_RECEPTION = 'C:/Users/USER/.gemini/antigravity/brain/f0c47ca4-7bcb-4ba8-811e-6f48582e7c15/sri_lanka_networking_reception_1775733756935.png';
const IMG_PANEL = 'C:/Users/USER/.gemini/antigravity/brain/f0c47ca4-7bcb-4ba8-811e-6f48582e7c15/textile_industry_panel_1775733775537.png';

const UPCOMING_EVENTS = [
  {
    id: 'u1',
    date: '18',
    month: 'JUN',
    day: '2026',
    time: '10:00 - 18:00',
    title: 'Interactive Business Forum Seminar Series (IBF)',
    location: 'ICCB, Dhaka, Bangladesh',
    image: IMG_BANGLADESH
  }
];

const PAST_EVENTS = [
  { id: 'p25-bg-1', date: '26', month: 'JUN', day: '2025', time: '4.00 pm to 5.00 pm', title: 'IBF: AI & Adaptability of Technology', location: 'Hall 4 ICCB Dhaka', image: IMG_BANGLADESH },
  { id: 'p25-bg-2', date: '27', month: 'JUN', day: '2025', time: '4.00 pm to 5.00 pm', title: 'IBF: Tariffs & Industry Outlook', location: 'Hall 4 ICCB Dhaka', image: IMG_PANEL },
  { id: 'p25-sl-1', date: '06', month: 'AUG', day: '2025', time: '2.00 pm to 4.00 pm', title: 'Panel: Apparel 2030', location: 'Mihilaka Medura', image: IMG_PANEL },
  { id: 'p25-sl-2', date: '07', month: 'AUG', day: '2025', time: '2.00 pm to 4.00 pm', title: 'Panel: Trust Over Trends', location: 'Mihilaka Medura', image: IMG_PANEL },
  { id: 'p25-sl-3', date: '07', month: 'AUG', day: '2025', time: 'EVENING', title: 'Fashion Fiesta Networking Reception', location: 'ITC Ratnadipa, Colombo', image: IMG_RECEPTION },
  { id: 'p25-sl-4', date: '06', month: 'AUG', day: '2025', time: '11:30 AM – 12:30 PM', title: 'KASTURI COTTON BHARAT (KCB) PROGRAMME', location: 'Tulip & Saffron Hall, BMICH', image: IMG_BANGLADESH },
  { id: 'p25-sl-5', date: '07', month: 'AUG', day: '2025', time: '09:30 AM – 11:30 PM', title: 'B2B Interaction: Indonesia Textile Delegation', location: 'Tulip & Saffron Hall, BMICH', image: IMG_RECEPTION },
  { id: 'p24-bg-1', date: '30', month: 'MAY', day: '2024', time: '4.00 pm to 5.00 pm', title: 'IBF: Panel Discussion on RMG Exports $100B', location: 'Hall 4 ICCB Dhaka', image: IMG_PANEL },
  { id: 'p24-bg-2', date: '31', month: 'MAY', day: '2024', time: '4.00 pm to 5.00 pm', title: 'IBF: Bangladesh - A Role Model for Green Industry', location: 'Hall 4 ICCB Dhaka', image: IMG_BANGLADESH },
  { id: 'p24-sl-1', date: '08', month: 'AUG', day: '2024', time: '2.00 pm to 4.00 pm', title: 'IBF: Global RMG Industry & Synthetic Knit', location: 'Mihilaka Medura', image: IMG_PANEL },
  { id: 'p25-sl-f', date: '08', month: 'AUG', day: '2025', time: '09:30 AM – 11:30 PM', title: '1st India Sri Lanka Textile Forum', location: 'Lavender, BMICH', image: IMG_BANGLADESH },
];

const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const currentData = activeTab === 'Upcoming' ? UPCOMING_EVENTS : PAST_EVENTS;

  return (
    <section className="relative py-32 bg-white overflow-hidden border-b border-archive-charcoal/10" id="schedule">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="bg-white rounded-[40px] overflow-hidden border-[3px] border-archive-clay shadow-[0_40px_80px_-20px_rgba(238,117,57,0.1)] relative min-h-[800px] flex items-stretch">

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 relative z-10">

            {/* LEFT SIDE: CONTROL (White Background) */}
            <div className="p-12 md:p-24 flex flex-col justify-between border-r border-archive-clay/10 bg-white">
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-archive-clay"></div>
                    <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Event Registry</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] text-archive-charcoal">
                    Events & <br /> <span className="text-archive-clay">Program.</span>
                  </h2>
                </div>

                <div className="max-w-xs space-y-6">
                  <p className="text-[11px] font-bold tracking-widest text-archive-charcoal/60 uppercase leading-relaxed">
                    Strategic sessions, technical forums, and industry mixers indexed for the current and historical cycles.
                  </p>
                </div>

                <div className="flex flex-col border border-archive-charcoal/10 divide-y divide-archive-charcoal/10 max-w-sm rounded-2xl overflow-hidden">
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

            {/* RIGHT SIDE: LIST (Orange Background) */}
            <div className="p-12 md:p-24 flex flex-col justify-center space-y-12 bg-archive-clay relative overflow-hidden">
              {/* Decorative background texture */}
              <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

              <div className="relative z-10 space-y-2 shrink-0">
                <div className="flex justify-between items-end border-b border-white/20 pb-4">
                  <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">{activeTab.toUpperCase()} RECORDS</span>
                  <span className="text-[9px] font-mono text-white/50 uppercase">Active entries: {currentData.length}</span>
                </div>
              </div>

              {/* Scrollable Container */}
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
                        className="group flex flex-col md:flex-row gap-8 items-start md:items-center border-l border-white/10 pl-8 hover:border-white transition-colors"
                      >
                        <div className="shrink-0 space-y-2 text-left w-24">
                          <div className="text-3xl font-black text-white leading-none">{event.date}</div>
                          <div className="text-[10px] font-black tracking-widest text-white/40 uppercase leading-none">
                            {event.month} <br /> {event.day}
                          </div>
                        </div>

                        <div className="flex-1 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 text-[9px] font-mono text-white/40 uppercase">
                              <Clock size={10} />
                              <span>{(event as any).time || '10:00 - 18:00'}</span>
                              <span className="opacity-20">|</span>
                              <span>ROOM_0{idx + 1}</span>
                            </div>
                            <h3 className="text-sm md:text-base font-black uppercase leading-tight text-white group-hover:text-white/80 transition-colors">
                              {event.title}
                            </h3>
                          </div>

                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 max-w-sm">
                              {event.location}
                            </p>
                            {activeTab === 'Upcoming' && (
                              <button className="flex items-center gap-4 group/btn whitespace-nowrap">
                                <div className="w-8 h-[1px] bg-white/20 group-hover/btn:bg-white group-hover/btn:w-12 transition-all"></div>
                                <span className="text-[12px] font-black tracking-widest uppercase text-white group-hover/btn:text-white">Register Now</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Branding Callout Removed/Simplified for new box layout if needed, or kept as is */}
              <div className="pt-8 shrink-0">
                <div className="p-8 border border-white/10 bg-white/5 relative overflow-hidden rounded-2xl">
                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="space-y-2 text-center md:text-left">
                      <h4 className="text-[10px] font-black tracking-[0.3em] text-white uppercase">BRANDING OPPORTUNITIES</h4>
                      <p className="text-[8px] font-mono text-white/40 uppercase">Partner with us for the 2026 Seminar Series.</p>
                    </div>
                    <button className="px-6 py-3 bg-white text-archive-clay text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(238, 117, 57, 0.4); }
      `}</style>
    </section>
  );
};

export default Schedule;

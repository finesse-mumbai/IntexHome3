
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Calendar, Clock, ArrowUpRight, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';

const IMG_BANGLADESH = 'C:/Users/USER/.gemini/antigravity/brain/f0c47ca4-7bcb-4ba8-811e-6f48582e7c15/bangladesh_textile_seminar_1775733738037.png';
const IMG_RECEPTION = 'C:/Users/USER/.gemini/antigravity/brain/f0c47ca4-7bcb-4ba8-811e-6f48582e7c15/sri_lanka_networking_reception_1775733756935.png';
const IMG_PANEL = 'C:/Users/USER/.gemini/antigravity/brain/f0c47ca4-7bcb-4ba8-811e-6f48582e7c15/textile_industry_panel_1775733775537.png';

const UPCOMING_EVENTS = [
  {
    id: 'u1',
    date: '18',
    month: 'Jun',
    day: '2026',
    time: '10:00 - 18:00',
    title: 'Interactive Business Forum Seminar Series (IBF)',
    location: 'ICCB, Dhaka, Bangladesh',
    image: IMG_BANGLADESH
  },
  {
    id: 'u2',
    date: '07',
    month: 'Aug',
    day: '2025',
    time: '17:30 - 19:30',
    title: 'Networking Seminar: Future of Sustainable Textiles',
    location: 'BMICH, Colombo, Sri Lanka',
    image: IMG_RECEPTION
  }
];

const PAST_EVENTS = [
  { id: 'p25-bg-1', date: '26', month: 'Jun', day: '2025', time: '4.00 pm to 5.00 pm', title: 'IBF: AI & Adaptability of Technology', location: 'Hall 4 ICCB Dhaka', image: IMG_BANGLADESH },
  { id: 'p25-bg-2', date: '27', month: 'Jun', day: '2025', time: '4.00 pm to 5.00 pm', title: 'IBF: Tariffs & Industry Outlook', location: 'Hall 4 ICCB Dhaka', image: IMG_PANEL },
  { id: 'p25-sl-1', date: '06', month: 'Aug', day: '2025', time: '2.00 pm to 4.00 pm', title: 'Panel: Apparel 2030', location: 'Mihilaka Medura', image: IMG_PANEL },
  { id: 'p25-sl-2', date: '07', month: 'Aug', day: '2025', time: '2.00 pm to 4.00 pm', title: 'Panel: Trust Over Trends', location: 'Mihilaka Medura', image: IMG_PANEL },
  { id: 'p25-sl-3', date: '07', month: 'Aug', day: '2025', time: 'Evening', title: 'Fashion Fiesta Networking Reception', location: 'ITC Ratnadipa, Colombo', image: IMG_RECEPTION },
  { id: 'p25-sl-4', date: '06', month: 'Aug', day: '2025', time: '11:30 am – 12:30 pm', title: 'Kasturi Cotton Bharat (KCB) Programme', location: 'Tulip & Saffron Hall, BMICH', image: IMG_BANGLADESH },
  { id: 'p25-sl-5', date: '07', month: 'Aug', day: '2025', time: '09:30 am – 11:30 pm', title: 'B2B Interaction: Indonesia Textile Delegation', location: 'Tulip & Saffron Hall, BMICH', image: IMG_RECEPTION },
  { id: 'p24-bg-1', date: '30', month: 'May', day: '2024', time: '4.00 pm to 5.00 pm', title: 'IBF: Panel Discussion on RMG Exports $100B', location: 'Hall 4 ICCB Dhaka', image: IMG_PANEL },
  { id: 'p24-bg-2', date: '31', month: 'May', day: '2024', time: '4.00 pm to 5.00 pm', title: 'IBF: Bangladesh - A Role Model for Green Industry', location: 'Hall 4 ICCB Dhaka', image: IMG_BANGLADESH },
  { id: 'p24-sl-1', date: '08', month: 'Aug', day: '2024', time: '2.00 pm to 4.00 pm', title: 'IBF: Global RMG Industry & Synthetic Knit', location: 'Mihilaka Medura', image: IMG_PANEL },
  { id: 'p25-sl-f', date: '08', month: 'Aug', day: '2025', time: '09:30 am – 11:30 pm', title: '1st India Sri Lanka Textile Forum', location: 'Lavender, BMICH', image: IMG_BANGLADESH },
];

const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);

  const currentData = activeTab === 'Upcoming' ? UPCOMING_EVENTS : PAST_EVENTS;
  const hoveredEvent = currentData.find(e => e.id === hoveredEventId) || currentData[0];

  return (
    <section className="relative py-32 bg-white overflow-hidden border-b border-archive-charcoal/10" id="schedule">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="bg-white rounded-[40px] overflow-hidden border-[3px] border-archive-charcoal/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] relative min-h-[800px] flex items-stretch">

          <div className="w-full grid grid-cols-1 lg:grid-cols-[3.5fr_6.5fr] relative z-10">

            {/* LEFT SIDE: CONTROL (Image & Navigation) */}
            <div className="relative border-r border-archive-charcoal/10 bg-white overflow-hidden flex flex-col">
              {/* Background Image Preview */}
              <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredEvent?.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <img
                      src={hoveredEvent?.image}
                      alt="Event Preview"
                      className="w-full h-full object-cover opacity-60 transition-all duration-700"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white" />
              </div>

              <div className="relative z-10 p-12 md:p-24 flex-1 flex flex-col justify-between">
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-[1px] bg-archive-clay"></div>
                      <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Event Registry</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-[0.9] text-archive-charcoal uppercase">
                      Events & <br /> <span className="text-archive-clay">Program.</span>
                    </h2>
                  </div>

                  <div className="max-w-xs space-y-6">
                    <p className="text-[11px] font-bold tracking-widest text-archive-charcoal/60 leading-relaxed">
                      Strategic sessions, technical forums, and industry mixers indexed for the current and historical cycles.
                    </p>
                  </div>

                  <div className="flex flex-col border border-archive-charcoal/10 divide-y divide-archive-charcoal/10 max-w-sm rounded-2xl overflow-hidden uppercase bg-white/80 backdrop-blur-md">
                    {['01. Upcoming', '02. Past'].map((tab) => {
                      const tabName = tab.split(' ')[1];
                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tabName)}
                          className={`p-8 text-left text-[11px] font-black tracking-[0.3em] transition-all flex justify-between items-center group uppercase ${activeTab === tabName ? 'bg-archive-clay text-white' : 'text-archive-charcoal hover:bg-archive-clay/5'}`}
                        >
                          <span>{tab.toUpperCase()}</span>
                          <Plus size={14} className={`transition-transform duration-500 ${activeTab === tabName ? 'rotate-45' : 'group-hover:rotate-90'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-12 flex flex-col items-start gap-4">
                  <button className="text-[10px] font-black tracking-[0.4em] text-archive-charcoal border-b border-archive-clay/40 pb-2 hover:border-archive-clay transition-all flex items-center gap-3">
                    View All Event Reports <ArrowUpRight size={12} className="uppercase" />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: LIST (Cream Background) */}
            <div className="p-4 md:p-6 flex flex-col justify-center space-y-8 bg-archive-cream relative overflow-hidden border-l border-archive-charcoal/10 border-r border-archive-charcoal/10">
              {/* Decorative background texture */}
              <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

              <div className="relative z-10 space-y-2 shrink-0">
                <div className="flex justify-between items-end border-b border-archive-charcoal/20 pb-4">
                  <span className="text-[20px] font-black tracking-[0.2em] text-archive-charcoal uppercase">{activeTab} Records</span>
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
                        onMouseEnter={() => setHoveredEventId(event.id)}
                        onMouseLeave={() => setHoveredEventId(null)}
                        className="group relative bg-white/80 backdrop-blur-sm rounded-[32px] overflow-hidden border border-archive-charcoal/10 hover:border-archive-clay/40 transition-all duration-700 shadow-sm hover:shadow-2xl"
                      >

                        <div className="relative z-10 flex flex-col divide-y divide-archive-charcoal/5">
                          {/* ROW 1: Date & Location */}
                          <div className="py-3 px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/40">
                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-3">
                                <Calendar size={14} className="text-archive-clay" />
                                <div className="flex items-baseline gap-2">
                                  <span className="text-[10px] font-black text-archive-charcoal leading-none group-hover:text-archive-clay transition-colors">{event.date}</span>
                                  <span className="text-[10px] font-black tracking-widest text-archive-charcoal/40 uppercase">
                                    {event.month} {event.day}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <MapPin size={14} className="text-archive-clay" />
                              <span className="text-[10px] font-black tracking-widest text-archive-charcoal/40 uppercase">{event.location}</span>
                            </div>
                          </div>

                          {/* ROW 2: Logo & Branding */}
                          <div className="p-2 grid grid-cols-2 items-center gap-10">
                            <div className="w-full h-26 flex items-center justify-center">
                              <img
                                src="https://bd.intexsouthasia.com/assets/img/output-onlinepngtools.png"
                                alt="Event Logo"
                                className="h-full w-auto  transition-all duration-700 object-contain"
                              />
                            </div>
                            <h3 className="text-[13px] md:text-lg font-black leading-tight text-archive-charcoal group-hover:text-archive-clay transition-colors uppercase tracking-tight">
                              {event.title}
                            </h3>
                          </div>

                          {/* ROW 3: Action Buttons */}
                          <div className="p-3 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                            {activeTab === 'Upcoming' && (
                              <>
                                <a
                                  href="#ibf-details"
                                  className="group/btn relative w-fit overflow-hidden py-2 px-5 border border-archive-charcoal/10 rounded-full flex items-center gap-4 transition-all hover:bg-archive-clay hover:border-archive-clay"
                                >
                                  <span className="relative z-10 text-[9px] font-black tracking-[0.3em] text-archive-charcoal group-hover/btn:text-white transition-colors uppercase">View Detail</span>
                                  <ArrowUpRight size={14} className="relative z-10 text-archive-clay group-hover/btn:text-white transition-colors" />
                                  <div className="absolute inset-0 bg-archive-clay translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                                </a>
                                <button className="group/btn relative w-fit overflow-hidden py-2 px-5 bg-archive-charcoal rounded-full flex items-center justify-center transition-all hover:bg-archive-clay">
                                  <span className="relative z-10 text-[9px] font-black tracking-[0.3em] text-white transition-colors uppercase">Register Now</span>
                                  <div className="absolute inset-0 bg-archive-clay translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Branding Callout */}
              <div className="pt-4 shrink-0">
                <div className="p-8 bg-archive-charcoal relative overflow-hidden rounded-[24px] shadow-2xl">
                  {/* Decorative Glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-archive-clay/20 blur-[100px]" />

                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="space-y-2 text-center md:text-left">
                      <h4 className="text-[10px] font-black tracking-[0.3em] text-white uppercase">Branding Opportunities</h4>
                      <p className="text-[8px] font-mono text-white/40">Partner with us for the 2026 Seminar Series.</p>
                    </div>
                    <button className="px-10 py-4 bg-archive-clay text-white text-[10px] font-black tracking-[0.2em] rounded-xl hover:bg-white hover:text-archive-charcoal transition-all duration-500 uppercase shadow-lg shadow-archive-clay/20">
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

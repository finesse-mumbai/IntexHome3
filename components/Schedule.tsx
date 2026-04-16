
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
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-8 bg-archive-cream relative overflow-hidden border-l border-archive-charcoal/10 border-r border-archive-charcoal/10">
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
                        className="group relative flex flex-col lg:flex-row items-stretch bg-white/80 backdrop-blur-sm rounded-[32px] overflow-hidden border border-archive-charcoal/10 hover:border-archive-clay/40 transition-all duration-700 shadow-sm hover:shadow-2xl"
                      >
                        {/* COLUMN 1: BRANDING LEAD */}
                        <div className="w-full lg:w-48 bg-white p-10 flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-archive-charcoal/5 group-hover:bg-archive-clay transition-all duration-700">
                          <motion.div 
                            whileHover={{ scale: 1.15 }}
                            className="relative w-32 h-20 flex items-center justify-center py-4"
                          >
                            <img 
                              src="https://bd.intexsouthasia.com/assets/img/output-onlinepngtools.png" 
                              alt="Event Logo" 
                              className="w-full h-full object-contain group-hover:scale-110 transition-all duration-700" 
                            />
                          </motion.div>
                          
                          {/* Ticket Notch Logic */}
                          <div className="hidden lg:block absolute -right-3 top-0 bottom-0 py-12 flex flex-col justify-between items-center pointer-events-none z-10">
                             <div className="w-6 h-6 rounded-full bg-archive-cream border border-archive-charcoal/10 -mt-6" />
                             <div className="flex-1 w-px border-r-2 border-dashed border-archive-charcoal/10" />
                             <div className="w-6 h-6 rounded-full bg-archive-cream border border-archive-charcoal/10 -mb-6" />
                          </div>
                        </div>

                        {/* COLUMN 2: DATE TRACK */}
                        <div className="p-10 lg:w-32 flex flex-col justify-center items-center text-center bg-archive-charcoal/[0.02] border-r border-archive-charcoal/5 relative">
                          <div className="text-5xl font-black text-archive-charcoal leading-none group-hover:text-archive-clay transition-colors">{event.date}</div>
                          <div className="text-[10px] font-black tracking-widest text-archive-charcoal/40 leading-none uppercase mt-3">
                            {event.month} <br /> {event.day}
                          </div>
                        </div>

                        {/* COLUMN 3: CONTENT & ACTIONS */}
                        <div className="flex-1 p-10 space-y-8 flex flex-col justify-center">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-[9px] font-mono text-archive-charcoal/40">
                              <MapPin size={10} className="text-archive-clay" />
                              <span className="uppercase font-black tracking-widest">{event.location}</span>
                            </div>
                            <h3 className="text-lg md:text-xl font-black leading-tight text-archive-charcoal group-hover:text-archive-clay transition-colors uppercase tracking-tight max-w-lg">
                              {event.title}
                            </h3>
                          </div>

                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-6 border-t border-archive-charcoal/5 w-full">
                            {activeTab === 'Upcoming' && (
                              <>
                                <a 
                                  href="#ibf-details"
                                  className="text-[9px] font-black tracking-[0.2em] text-archive-charcoal/40 hover:text-archive-clay transition-all duration-500 uppercase underline underline-offset-8"
                                >
                                  View Detail
                                </a>
                                <button className="flex items-center gap-4 group/btn whitespace-nowrap bg-archive-charcoal text-white px-6 py-2 rounded-full hover:bg-archive-clay transition-all duration-500 shadow-xl hover:shadow-archive-clay/20">
                                  <span className="text-[9px] font-black tracking-[0.2em] uppercase">Register Now</span>
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Hover Accent Bar */}
                        <div className="absolute top-0 bottom-0 left-0 w-1 bg-archive-clay scale-y-0 group-hover:scale-y-100 transition-transform origin-center duration-500 opacity-0 group-hover:opacity-100"></div>
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

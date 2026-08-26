import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Clock, MapPin, Database, Layers, ArrowUpRight, Info } from 'lucide-react';

interface FactsheetItem {
  id: string;
  name: string;
  edition: string;
  logo: string;
  highlights?: string[];
  profile?: string;
  date: string;
  time: string;
  venue: string;
}

const FACTSHEET_DATA: FactsheetItem[] = [
  {
    id: 'FS_BD_18',
    name: 'Intex Bangladesh',
    edition: '18th Edition',
    logo: 'https://sl.intexsouthasia.com/_next/image?url=%2Fassets%2Fimg%2Forgb.png&w=384&q=75',
    highlights: [
      'Grand Opening Ceremony',
      'Country Pavilions',
      'Domestic + International Exhibitors',
      'Innovation & Trends Showcase',
      'Interactive Business Forum Seminar Series',
      'Buyer Delegations + International Hosted Buyers',
      'Hi-Tea Reception',
      'Trade Media Corner',
      'VIP Platinum Lounge for B2B Meetings'
    ],
    date: '18-19-20 June 2026',
    time: '10:00 AM - 06:00 PM',
    venue: 'ICCB, Dhaka, Bangladesh'
  },
  {
    id: 'FS_SL_19',
    name: 'Intex Sri Lanka',
    edition: '19th Edition',
    logo: 'https://sl.intexsouthasia.com/_next/image?url=%2Fassets%2Fimg%2Forgi.png&w=384&q=75',
    highlights: [
      'Grand Opening Ceremony',
      'Country Pavilions',
      'Domestic + International Exhibitors',
      'Innovation & Trends Showcase',
      'Interactive Business Forum Seminar Series',
      'Textile Fashion Week',
      'Buyer Delegations + International Hosted Buyers',
      'Networking Reception',
      'Trade Media Corner',
      'VIP Platinum Lounge for B2B Meetings'
    ],
    date: '05-06-07 August 2026',
    time: '10:00 AM - 06:00 PM',
    venue: 'BMICH, Colombo, Sri Lanka'
  },
  {
    id: 'FS_IN_17',
    name: 'Intex India',
    edition: '17th Edition',
    logo: 'https://sl.intexsouthasia.com/_next/image?url=%2Fassets%2Fimg%2Forgi.png&w=384&q=75',
    highlights: [
      'Grand Opening Ceremony',
      'Country Pavilions',
      'Domestic + International Exhibitors',
      'Innovation & Trends Showcase',
      'Interactive Business Forum Seminar Series',
      'Buyer Delegations + International Hosted Buyers',
      'Networking & B2B Matchmaking',
      'Trade Media Corner',
      'VIP Platinum Lounge for B2B Meetings'
    ],
    date: '03-04-05 December 2026',
    time: '10:00 AM - 06:00 PM',
    venue: 'IICC, New Delhi, India'
  }
];

const FactsheetPage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              FACT <br />
              <span className="text-white">SHEETS.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Factsheet Cards */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-px bg-archive-charcoal/10 ">
          {FACTSHEET_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="bg-white grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden group"
            >
              {/* Logo Column */}
              <div className="lg:col-span-3 bg-white p-12 flex flex-col justify-between border-r border-archive-charcoal/5  transition-colors duration-700">
                <div className="space-y-8 bg-white">
                  <div className="flex items-center justify-center aspect-square transition-all duration-700">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Merged Content + Specs Column */}
              <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-3">
                {/* Main Content Section */}
                <div className="lg:col-span-2 p-12 md:p-16 border-r border-archive-charcoal/5 space-y-12">
                  <div className="space-y-4">
                    <span className="text-archive-clay text-[15px] font-black tracking-[0.5em] uppercase">{item.edition}</span>
                    <h2 className="text-[15px] md:text-2xl font-black tracking-tighter text-archive-charcoal leading-none uppercase">
                      {item.name}
                    </h2>
                  </div>

                  {item.highlights && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-px bg-archive-clay"></div>
                        <span className="text-[15px] font-black tracking-widest opacity-40 uppercase">Show Highlights</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-archive-clay rotate-45 mt-1.5 shrink-0"></div>
                            <span className="text-[15px] font-bold tracking-widest text-archive-charcoal/70 leading-tight uppercase">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.profile && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-px bg-archive-clay"></div>
                        <span className="text-[15px] font-black tracking-widest opacity-40 uppercase">Show Profile</span>
                      </div>
                      <p className="text-[15px] font-medium tracking-[0.1em] leading-relaxed text-archive-charcoal/60">
                        {item.profile}
                      </p>
                    </div>
                  )}
                </div>

                {/* Specs Section */}
                <div className="lg:col-span-1 p-12 bg-archive-charcoal text-white flex flex-col justify-between">
                  <div className="space-y-10">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                        <Calendar size={18} className="text-archive-clay" />
                        <div className="space-y-1">
                          <span className="text-[15px] font-black tracking-widest opacity-40 block uppercase">Event Date</span>
                          <span className="text-[15px] font-bold tracking-widest">{item.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                        <Clock size={18} className="text-archive-clay" />
                        <div className="space-y-1">
                          <span className="text-[15px] font-black tracking-widest opacity-40 block uppercase">Event Time</span>
                          <span className="text-[15px] font-bold tracking-widest">{item.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MapPin size={18} className="text-archive-clay" />
                        <div className="space-y-1">
                          <span className="text-[15px] font-black tracking-widest opacity-40 block uppercase">Event Venue</span>
                          <span className="text-[15px] font-bold tracking-widest leading-snug">{item.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 space-y-4">
                    <button className="w-full bg-archive-clay text-white py-5 px-8 text-[15px] font-black tracking-[0.4em] hover:bg-white hover:text-archive-charcoal transition-all flex items-center justify-between group/btn">
                      DOWNLOAD PDF <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform uppercase" />
                    </button>
                    <button className="w-full border border-white/20 text-white py-5 px-8 text-[15px] font-black tracking-[0.4em] hover:bg-white/5 transition-all flex items-center justify-between group/btn">
                      REGISTER NOW <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform uppercase" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default FactsheetPage;

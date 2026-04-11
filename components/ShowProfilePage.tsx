
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database } from 'lucide-react';

const ShowProfilePage: React.FC = () => {
  const stats = [
    { value: '17', label: 'Editions', desc: 'Successfully Completed' },
    { value: '3,000+', label: 'Exhibitors', desc: 'Global Manufacturers' },
    { value: '20+', label: 'Exhibiting Countries', desc: 'International Presence' },
    { value: '70,000+', label: 'Buyers', desc: 'Qualified Trade Visitors' },
    { value: '40+', label: 'Buying Countries', desc: 'Sourcing Worldwide' },
  ];

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Identity // Records</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.8] text-archive-charcoal uppercase">
              Show <br /> <span className="text-archive-clay">Profile.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-xs font-black leading-none text-archive-charcoal uppercase">About The Show</h2>
                <div className="w-12 h-[2px] bg-archive-clay"></div>
                <div className="space-y-6 text-[13px] font-medium tracking-[0.1em] leading-relaxed text-archive-charcoal/80">
                  <p>
                    Since its launch in 2015, Intex has evolved into the region’s most influential and largest international textile sourcing show in South Asia, with a strong presence across Sri Lanka, Bangladesh, and India. Over the course of 17 successful editions, the platform has consistently brought together the global textile community at the heart of South Asia’s manufacturing ecosystem.
                  </p>
                  <p>
                    Intex has connected over 70,000+ qualified trade buyers from more than 40 countries with 3,000+ international textile exhibitors, enabling meaningful business engagement across fibres, fabrics, trims, dyes and chemicals, technology, and allied services. Shaped by industry needs, the platform empowers stakeholders to discover innovation, build strategic partnerships, and stay aligned with evolving global sourcing trends.
                  </p>
                  <p>
                    Today, Intex is firmly established as a must-attend annual event for the textile and apparel industry, trusted by manufacturers, brands, and sourcing leaders worldwide. The show is widely supported and endorsed by government bodies, chambers of commerce, trade councils, and industry associations across South Asia and key global markets reinforcing its position as the region’s gateway to international textile trade.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <button className="flex-1 px-10 py-6 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] hover:bg-archive-charcoal transition-all flex items-center justify-center gap-4">
                  BUYER REGISTRATION <ArrowRight size={14} className="uppercase" />
                </button>
                <button className="flex-1 px-10 py-6 border border-archive-charcoal text-archive-charcoal font-black text-[10px] tracking-[0.4em] hover:bg-archive-charcoal hover:text-white transition-all">
                  EXHIBITOR ENQUIRY
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] border border-archive-charcoal p-4 group cursor-pointer overflow-hidden">
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200"
                    className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-[2000ms]"
                    alt="Textile Archive"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border border-white flex items-center justify-center backdrop-blur-sm group-hover:bg-archive-clay group-hover:text-white group-hover:border-archive-clay transition-all">
                      <Database size={32} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-archive-charcoal bg-archive-cream flex items-center justify-center p-8 z-10 hidden xl:flex">
                <span className="text-[10px] font-black tracking-widest text-center text-archive-charcoal/40 uppercase">Specimen_Ref: IX_PRFL_017</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-archive-charcoal py-40 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto text-center space-y-20">
          <div className="space-y-6">
            <span className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Electronic Intelligence</span>
            <h2 className="text-sm md:text-2xl font-black text-white tracking-tighter uppercase">The Motion Archive.</h2>
          </div>

          <div className="relative aspect-video max-w-5xl mx-auto border border-white/20 p-2 overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-archive-clay pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-archive-clay pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border border-archive-charcoal/10 divide-y md:divide-y-0 md:divide-x divide-archive-charcoal/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 flex flex-col items-center justify-center text-center group hover:bg-archive-charcoal hover:text-archive-cream transition-all duration-700"
            >
              <span className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-6 text-archive-charcoal group-hover:text-archive-cream">
                {stat.value}
              </span>
              <div className="space-y-2">
                <h4 className="text-[11px] font-black tracking-[0.4em] text-archive-clay">
                   {stat.label.toUpperCase()}
                </h4>
                <p className="text-[8px] font-mono opacity-40 group-hover:opacity-100 transition-opacity">
                  {stat.desc.toUpperCase()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decorative Technical Streamer */}
      <div className="h-4 bg-archive-charcoal overflow-hidden relative opacity-10">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default ShowProfilePage;

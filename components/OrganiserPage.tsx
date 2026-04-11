
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Download, Award, Briefcase, Users, Mail } from 'lucide-react';

const EXHIBITIONS = [
  {
    id: 'ex-bg',
    title: 'Intex Bangladesh',
    date: '18-19-20 June, 2026',
    location: 'ICCB, Dhaka',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ex-sl',
    title: 'Intex Sri Lanka',
    date: '5-6-7 August 2026',
    location: 'BMICH, Colombo',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ex-in',
    title: 'Intex India',
    date: 'Announcing Soon',
    location: 'New Delhi',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  }
];

const OrganiserPage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Header Branding Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-24">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-24"
          >
            <div className="w-48 h-48 border border-archive-charcoal bg-white p-6 flex items-center justify-center shrink-0">
              <img
                src="https://bd.intexsouthasia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworldexlogo.f357cfde.png&w=256&q=75"
                alt="Worldex India Logo"
                className="max-w-full h-auto"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-[1px] bg-archive-clay"></div>
                <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Organiser Registry</span>
              </div>
              <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.9] text-archive-charcoal max-w-2xl uppercase">
                Worldex India Exhibition & <span >Promotion Pvt. Ltd.</span>
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-archive-charcoal text-archive-cream py-32 border-y border-archive-clay/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase">
              About   <span className="text-archive-clay"> Us.</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-white/10 text-center bg-white/5">
                <div className="text-4xl font-black text-archive-clay">21+</div>
                <div className="text-[8px] font-black tracking-widest opacity-40 uppercase">Years Experience</div>
              </div>
              <div className="p-6 border border-white/10 text-center bg-white/5">
                <div className="text-4xl font-black text-archive-clay">Global</div>
                <div className="text-[8px] font-black tracking-widest opacity-40 uppercase">Expertise</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-[14px] md:text-[18px] font-medium tracking-widest leading-relaxed text-white/80">
              Incorporated in 2004, Worldex India Exhibition & Promotion Pvt. Ltd., is headquartered in Mumbai with a supporting branch office in New Delhi. With over 21 years of global experience, we specialise in bridging the gap between manufacturers and buyers, creating direct connections between quality suppliers from around the world with home-grown entrepreneurs.
            </p>
            <p className="text-[12px] font-bold tracking-widest leading-relaxed text-white/40">
              We provide premium standards of service and solutions as show organisers and trade promoters. We successfully organise and represent international trade promotions in India, Southeast Asia and European markets, through our close industry connects and support from leading Government Agencies, Chambers of Commerce, Federations and Trade Associations. We have been closely working and representing international trade bodies for more than 10 years in our region such as Hong Kong Trade Development Council (HKTDC), Taiwan Textile Federation (TTF) and China Council for Promotion of International Trade (CCPIT).
            </p>
            <div className="pt-12 flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal transition-all flex items-center justify-center gap-4">
                VISIT WEBSITE <Globe size={14} className="uppercase" />
              </button>
              <button className="px-10 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] hover:bg-archive-clay hover:border-archive-clay transition-all flex items-center justify-center gap-4">
                DOWNLOAD BROCHURE <Download size={14} className="uppercase" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Exhibitions Grid */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-archive-clay"></div>
            <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Upcoming Events</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-archive-charcoal uppercase">
            Exhibition <span>Calendar.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-archive-charcoal/10">
          {EXHIBITIONS.map((ex, idx) => (
            <motion.div
              key={ex.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group border-r last:border-r-0 border-archive-charcoal/10 relative h-[500px] overflow-hidden bg-white"
            >
              <div className="absolute inset-0 transition-all duration-[2000ms] group-hover:scale-110 group-hover:filter-none">
                <img src={ex.imageUrl} className="w-full h-full object-cover group-hover:opacity-100" />
                <div className="absolute inset-0 bg-archive-charcoal/80 group-hover:bg-archive-charcoal/20 transition-all duration-700"></div>
              </div>

              <div className="relative z-10 h-full p-12 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">

                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black leading-[0.9] uppercase">{ex.title}</h3>
                    <p className="text-archive-clay text-[10px] font-black tracking-widest uppercase">{ex.location}</p>
                  </div>
                  <div className="h-px w-12 bg-white/20 group-hover:w-full transition-all duration-700"></div>
                  <p className="text-[12px] font-bold tracking-[0.2em] opacity-60">{ex.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decorative Shutter Detail */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default OrganiserPage;

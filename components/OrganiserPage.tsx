import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EXHIBITIONS = [
  {
    id: 'ex-bg',
    title: 'Intex Bangladesh',
    edition: '17th Edition',
    date: '18-19-20 June, 2026',
    location: 'ICCB, Dhaka',
    imageUrl: '/assets/bangladesh.png'
  },
  {
    id: 'ex-sl',
    title: 'Intex Sri Lanka',
    edition: '17th Edition',
    date: '5-6-7 August 2026',
    location: 'BMICH, Colombo',
    imageUrl: '/assets/sri%20lanka.jpg.jpeg'
  },
  {
    id: 'ex-in',
    title: 'Intex India',
    edition: '17th Edition',
    date: 'Announcing Soon',
    location: 'New Delhi',
    imageUrl: '/assets/india.jpg.jpeg'
  }
];

const OrganiserPage: React.FC = () => {
  const navigate = useNavigate();

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
              <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.9] text-archive-charcoal max-w-2xl uppercase">
                Worldex India Exhibition & <span>Promotion Pvt. Ltd.</span>
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
              About <span className="text-archive-clay"> Us.</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-white/10 text-center bg-white/5">
                <div className="text-4xl font-black text-archive-clay">21+</div>
                <div className="text-[14px] font-black tracking-widest opacity-40 uppercase">Years Experience</div>
              </div>
              <div className="p-6 border border-white/10 text-center bg-white/5">
                <div className="text-4xl font-black text-archive-clay">Global</div>
                <div className="text-[14px] font-black tracking-widest opacity-40 uppercase">Expertise</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-[14px] md:text-[18px] font-medium tracking-widest leading-relaxed text-white/80">
              Incorporated in 2004, Worldex India Exhibition & Promotion Pvt. Ltd., is headquartered in Mumbai with a supporting branch office in New Delhi. With over 21 years of global experience, we specialise in bridging the gap between manufacturers and buyers, creating direct connections between quality suppliers from around the world with home-grown entrepreneurs.
            </p>
            <p className="text-[14px] md:text-[18px] font-medium tracking-widest leading-relaxed text-white/80">
              We provide premium standards of service and solutions as show organisers and trade promoters. We successfully organise and represent international trade promotions in India, Southeast Asia and European markets, through our close industry connects and support from leading Government Agencies, Chambers of Commerce, Federations and Trade Associations. We have been closely working and representing international trade bodies for more than 10 years in our region such as Hong Kong Trade Development Council (HKTDC), Taiwan Textile Federation (TTF) and China Council for Promotion of International Trade (CCPIT).
            </p>
            <div className="pt-12 flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-archive-clay text-white font-black text-[14px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal transition-all flex items-center justify-center gap-4">
                VISIT WEBSITE <Globe size={14} className="uppercase" />
              </button>
              <button className="px-10 py-5 border border-white/20 text-white font-black text-[14px] tracking-[0.4em] hover:bg-archive-clay hover:border-archive-clay transition-all flex items-center justify-center gap-4">
                DOWNLOAD BROCHURE <Download size={14} className="uppercase" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Exhibitions Section - Formatted like Home Page Sourcing Registry */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="mb-16 space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-archive-charcoal uppercase leading-[0.95]">
              Upcoming <br />
              <span className="text-archive-clay">Exhibitions.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXHIBITIONS.map((ex, idx) => (
            <motion.div
              key={ex.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[480px] overflow-hidden bg-archive-charcoal shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-8 text-white"
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 transition-all duration-[2000ms] group-hover:scale-110">
                <img
                  src={ex.imageUrl}
                  alt={ex.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161414] via-[#161414]/70 to-transparent"></div>
              </div>

              {/* Card Header Tag */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-xs font-mono font-bold text-archive-clay uppercase tracking-wider border border-white/10">
                  0{idx + 1}
                </span>
              </div>

              {/* Card Footer Info & View Details Button */}
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-black leading-[0.95] uppercase group-hover:text-archive-clay transition-colors">
                    {ex.title}
                  </h3>
                  <p className="text-archive-clay text-xs font-bold tracking-widest uppercase">
                    Event Venue: {ex.location}
                  </p>
                  <p className="text-white/80 text-xs font-bold tracking-wider uppercase">
                    Event Date: {ex.date}
                  </p>
                </div>

                <button
                  onClick={() => {
                    navigate('/#event/' + ex.id);
                    window.scrollTo(0, 0);
                  }}
                  className="w-full py-4 bg-archive-clay hover:bg-white text-white hover:text-archive-charcoal transition-all duration-300 font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 group/btn"
                >
                  <span>VIEW DETAILS</span>
                  <div className="w-6 h-6 bg-white/20 group-hover/btn:bg-archive-clay group-hover/btn:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrganiserPage;

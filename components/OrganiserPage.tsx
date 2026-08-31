import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Download, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EXHIBITIONS = [
  {
    id: 'ex-bg',
    title: 'Intex Bangladesh',
    edition: '17th Edition',
    date: '22-23-24 June, 2027',
    location: 'ICCB, Dhaka',
    imageUrl: '/assets/bangladesh.png'
  },
  {
    id: 'ex-sl',
    title: 'Intex Sri Lanka',
    edition: '17th Edition',
    date: '4-5-6 August 2027',
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

      {/* Upcoming Exhibitions Section - Styled Exactly Like Home Page Upcoming Event Boxes */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] text-archive-charcoal uppercase">
            Upcoming <br /><span className="text-archive-clay">Exhibitions.</span>
          </h2>
        </div>

        {/* Multi-Layered Stacked Plate Container */}
        <div className="relative group/plates">
          {/* Layer 1: Bottom White Plate */}
          <div className="absolute inset-0 bg-white rounded-[32px] -rotate-[1.95deg] -skew-y-[1.95deg] shadow-xl transition-transform duration-1000 group-hover/plates:-rotate-[2.6deg]" />

          {/* Layer 2: Middle Dark Plate (#2f2c2c) */}
          <div className="absolute inset-0 bg-[#2f2c2c] rounded-[28px] -rotate-[1.3deg] -skew-y-[1.3deg] shadow-2xl transition-transform duration-1000 group-hover/plates:-rotate-[1.95deg] overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
            />
          </div>

          {/* Layer 3: Top Accent Plate */}
          <div className="absolute inset-x-[-10px] inset-y-[-10px] bg-white/5 backdrop-blur-[2px] rounded-[24px] -rotate-[0.65deg] -skew-y-[0.65deg] border border-white/10 pointer-events-none transition-transform duration-1000 group-hover/plates:-rotate-[1.3deg]" />

          {/* Main Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 rotate-[1.3deg] skew-y-[1.3deg] p-6 md:p-12">
            {EXHIBITIONS.map((ex, idx) => (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.15,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="group relative h-[600px] overflow-hidden bg-archive-charcoal rounded-xl"
              >
                {/* Image Layer */}
                <img
                  src={ex.imageUrl}
                  alt={ex.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal via-archive-charcoal/60 to-transparent opacity-90" />

                {/* Technical Overlay */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <span className="block text-[40px] font-black text-white/10 leading-none tabular-nums">0{idx + 1}</span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-4xl font-black text-white leading-[0.9] group-hover:tracking-wider transition-all duration-700">
                        {ex.title.split(' ')[0]} <br /> {ex.title.split(' ')[1]}
                      </h3>

                      <div className="space-y-3">
                        <div className="flex flex-col">
                          <span className="text-[14px] font-bold text-white/40 tracking-widest uppercase">Event Date</span>
                          <span className="text-[14px] font-black text-white tracking-wider uppercase">{ex.date}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-bold text-white/40 tracking-widest uppercase">Event Venue</span>
                          <div className="flex items-center gap-2">
                            <MapPin size={12} className="text-archive-clay" />
                            <span className="text-[14px] font-black text-white tracking-wider uppercase">{ex.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        navigate(`/#event/${ex.id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="w-full bg-white group/btn relative overflow-hidden py-4 px-6 flex items-center justify-between transition-all hover:bg-archive-clay"
                    >
                      <span className="relative z-10 text-[14px] font-black text-archive-charcoal group-hover:text-white tracking-[0.4em] transition-colors uppercase">VIEW DETAILS</span>
                      <ArrowUpRight size={16} className="relative z-10 text-archive-clay group-hover:text-white transition-colors" />
                      <div className="absolute inset-0 bg-archive-clay translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                  </div>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganiserPage;

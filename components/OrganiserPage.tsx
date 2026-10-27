import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Download } from 'lucide-react';

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
          <div className="lg:col-span-8 space-y-6">
            <p className="text-[15px] md:text-[16px] font-medium leading-relaxed text-white/85">
              Worldex India Exhibition & Promotion Pvt. Ltd. is a vertically integrated international trade promotion company, established in 2004, with headquarters in Mumbai and a branch office in New Delhi. For more than 21 years, Worldex India has been building bridges between businesses, markets and opportunities—connecting global suppliers with buyers and helping Indian enterprises access international markets.
            </p>
            <p className="text-[15px] md:text-[16px] font-medium leading-relaxed text-white/80">
              Our business goes beyond organising exhibitions. We conceptualise, develop and deliver international B2B trade shows, conferences, summits, seminars, buyer-seller meets, business-matching programmes and inbound and outbound trade missions across India, South Asia and international markets. We also represent international trade bodies and exhibition organisers, working closely with governments, export councils, chambers of commerce, federations and industry associations to create meaningful business platforms.
            </p>
            <p className="text-[15px] md:text-[16px] font-medium leading-relaxed text-white/80">
              With an integrated in-house ecosystem covering exhibition management, sales and marketing, PR and publicity, content development, market research, creative and design, digital marketing, website and mobile-app development, logistics, production and exhibition services, Worldex India provides end-to-end solutions from concept to execution.
            </p>
            <p className="text-[15px] md:text-[16px] font-medium leading-relaxed text-white/80">
              Our capabilities also extend into trade publications, e-commerce and digital business platforms, enabling businesses to remain connected beyond the physical exhibition floor. Through technology-led initiatives and business-matching solutions, we continue to build new ways for companies to discover partners, generate leads and expand their international networks.
            </p>
            <p className="text-[15px] md:text-[16px] font-medium leading-relaxed text-white/80">
              Over the years, Worldex India has built strong relationships with leading international organisations and trade bodies, including Hong Kong Trade Development Council (HKTDC), Taiwan Textile Federation (TTF) and China Council for the Promotion of International Trade (CCPIT), among others. These partnerships, combined with our regional network and industry relationships, enable us to open doors to new markets and create opportunities that extend well beyond the exhibition itself.
            </p>

            <div className="pt-4 space-y-4">
              <h3 className="text-xl md:text-2xl font-black uppercase text-archive-clay tracking-tight leading-snug">
                WE DON'T JUST ORGANISE EVENTS. <span className="text-white">WE CREATE MARKET ACCESS.</span>
              </h3>
              <p className="text-[15px] md:text-[16px] font-medium leading-relaxed text-white/80">
                From bringing international suppliers into high-growth South Asian markets to taking Indian businesses into emerging and developed global markets, Worldex India exists to create genuine connections, generate business opportunities and turn international trade potential into real-world partnerships.
              </p>
            </div>

            <div className="p-5 border-l-2 border-archive-clay bg-white/5 rounded-r mt-4">
              <p className="text-[14px] md:text-[16px] font-bold text-white tracking-wider uppercase">
                21+ years. Global networks. Integrated capabilities. One purpose — to connect businesses to the world.
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-6">
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

    </div>
  );
};

export default OrganiserPage;

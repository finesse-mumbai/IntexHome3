
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Zap, Cpu, Terminal } from 'lucide-react';

const BASE_URL = 'https://bd.intexsouthasia.com/assets/img/industrypartner/';

const INDUSTRY_PARTNERS = [
  { img: 'CITI.png', name: 'CITI India', link: 'https://citiindia.org/' },
  { img: 'JAAF.png', name: 'JAAF', link: '#' },
  { img: 'mkma.png', name: 'MKMA', link: 'https://mkma.org/' },
  { img: 'Eurocham.png', name: 'Eurocham BD', link: 'https://eurocham-bd.org/' },
  { img: 'USBCCI.png', name: 'USBCCI', link: '#' },
  { img: 'BGCCI.png', name: 'BGCCI', link: 'http://www.bgcci.com/' },
  { img: 'LABCCI.png', name: 'LABCCI', link: 'http://www.lab-chamber.com/' },
  { img: 'KBCCI.png', name: 'KBCCI', link: '#' },
  { img: 'IBCCI.png', name: 'IBCCI', link: 'http://www.ibcci.net/' },
  { img: 'BKDOA.png', name: 'BKDOA', link: 'https://www.facebook.com/BKDOA' },
  { img: 'Buyers-Council.png', name: 'Buyers Council', link: 'https://buyerscouncil.org/' },
  { img: 'TNFMA.png', name: 'TNFMA', link: 'https://www.tnfma.com/' }
];

const Partners: React.FC = () => {
  // Triple the items for a truly infinite feel
  const extendedPartners = [...INDUSTRY_PARTNERS, ...INDUSTRY_PARTNERS, ...INDUSTRY_PARTNERS];

  return (
    <section className="py-8 bg-archive-cream relative overflow-hidden" id="partners">


      <div className="max-w-[1440px] mx-auto px-12 mb-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black uppercase text-archive-clay">Industry Partners</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-archive-charcoal leading-[0.9]">
              PARTNERSHIP <br /> <span className="text-archive-clay">NETWORK.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 max-w-sm text-left lg:text-right py-2">
            <div className="flex items-center gap-3 text-archive-clay">
              <ShieldCheck size={14} />
              <span className="text-[9px] font-black tracking-widest uppercase">Global Specimen Directory</span>
            </div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-archive-charcoal/40 leading-relaxed">
              Archived records of certified textile councils and international trade federations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-12 mb-12 relative z-10 space-y-10">
        {/* INTERNATIONAL PAVILION ORGANISERS */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/10 pb-6">
            <div className="flex items-center gap-4">
               <h3 className="text-lg font-black uppercase text-archive-charcoal leading-none mt-1">
                 International Pavilion Organisers
               </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INDUSTRY_PARTNERS.slice(0, 4).map((partner, i) => (
              <StaticPartnerSpecimen key={`p-org-${i}`} partner={partner} />
            ))}
          </div>
        </div>

        {/* NODAL TRADE PARTNERS */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/10 pb-6">
            <div className="flex items-center gap-4">
               <h3 className="text-lg font-black uppercase text-archive-charcoal leading-none mt-1">
                 Nodal Trade Partners
               </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INDUSTRY_PARTNERS.slice(4, 7).map((partner, i) => (
              <StaticPartnerSpecimen key={`nodal-${i}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      {/* INDUSTRY PARTNERS TITLE */}
      <div className="max-w-[1440px] mx-auto px-12 relative z-10 mb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/10 pb-6">
          <div className="flex items-center gap-4">
             <h3 className="text-lg font-black uppercase text-archive-charcoal leading-none mt-1">
               Industry Partners
             </h3>
          </div>
        </div>
      </div>

      {/* The Premium Marquee Slider Area */}
      <div className="relative">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden relative">
          {/* Side Masks for Seamless Fade */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-archive-cream to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-archive-cream to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex py-6"
            animate={{ x: [0, "-33.333%"] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {extendedPartners.map((partner, i) => (
              <PartnerSpecimen key={`row1-${i}`} partner={partner} />
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
};

const PartnerSpecimen: React.FC<{ partner: any }> = ({ partner }) => {
  return (
    <a
      href={partner.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-4 md:mx-6 w-48 md:w-56 h-28 border border-black/5 bg-white rounded-xl flex items-center justify-center p-6 group/specimen relative overflow-hidden transition-all duration-700"
    >
      <div className="absolute inset-x-0 bottom-0 h-1 bg-archive-clay scale-x-0 group-hover/specimen:scale-x-100 transition-transform duration-500 origin-left"></div>
      <img
        src={`${BASE_URL}${partner.img}`}
        alt={partner.name}
        className="max-w-full max-h-full object-contain opacity-100 group-hover/specimen:scale-105 transition-all duration-700 relative z-10"
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${partner.name}&background=2F2C2C&color=F3EBE8&bold=true`;
        }}
      />
    </a>
  );
};

const StaticPartnerSpecimen: React.FC<{ partner: any }> = ({ partner }) => {
  return (
    <a
      href={partner.link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-32 border border-black/5 bg-white rounded-xl flex items-center justify-center p-8 group/static relative overflow-hidden transition-all duration-700"
    >
      <div className="absolute inset-x-0 bottom-0 h-1 bg-archive-clay scale-x-0 group-hover/static:scale-x-100 transition-transform duration-500 origin-left"></div>
      <img
        src={`${BASE_URL}${partner.img}`}
        alt={partner.name}
        className="max-w-full max-h-full object-contain opacity-100 hover:scale-105 transition-all duration-500 relative z-10"
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${partner.name}&background=2F2C2C&color=F3EBE8&bold=true`;
        }}
      />
    </a>
  );
};

export default Partners;

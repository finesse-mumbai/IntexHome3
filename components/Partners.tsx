
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
    <section className="py-16 bg-white relative overflow-hidden" id="partners">


      <div className="max-w-[1440px] mx-auto px-12 mb-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Partnership Network</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase text-archive-charcoal leading-[0.9]">
              INDUSTRY <br /> <span className="text-archive-clay">PARTNERS.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 max-w-sm text-left lg:text-right border-l lg:border-l-0 lg:border-r border-black/5 pl-8 lg:pl-0 lg:pr-8 py-2">
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

      {/* The Premium Marquee Slider Area */}
      <div className="relative">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden relative">
          {/* Side Masks for Seamless Fade */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

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
      className="mx-12 w-48 md:w-56 h-24 flex items-center justify-center group/specimen relative"
    >
      {/* Invisible Hover Area with subtle reveal */}
      <div className="absolute inset-0 border border-dotted border-black/0 group-hover/specimen:border-black/10 transition-all duration-500 scale-110 group-hover/specimen:scale-100"></div>

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

export default Partners;

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Handshake, Search } from 'lucide-react';

type PartnerEvent = 'Bangladesh' | 'Sri Lanka';

type Partner = {
  id: string;
  name: string;
  country?: string;
  link?: string;
  img: string;
  event: PartnerEvent;
  group: 'Industry Partners';
};

const PARTNERS: Partner[] = [
  { id: 'bd-ind-citi', event: 'Bangladesh', group: 'Industry Partners', name: 'Confederation of Indian Textile Industry (CITI)', country: 'India', link: 'https://citiindia.org/', img: '/assets/img/industrypartner/CITI.png' },
  { id: 'bd-ind-jaaf', event: 'Bangladesh', group: 'Industry Partners', name: 'JAAF', country: 'Sri Lanka', link: '#', img: '/assets/img/industrypartner/JAAF.png' },
  { id: 'bd-ind-mkma', event: 'Bangladesh', group: 'Industry Partners', name: 'Malaysian Knitting Manufacturers Association (MKMA)', country: 'Malaysia', link: 'https://mkma.org/', img: '/assets/img/industrypartner/mkma.png' },
  { id: 'bd-ind-usbcci', event: 'Bangladesh', group: 'Industry Partners', name: 'U.S. Bangladesh Chamber of Commerce & Industry (USBCCI)', country: 'New York', img: '/assets/img/industrypartner/USBCCI.png' },
  { id: 'bd-ind-bgcci', event: 'Bangladesh', group: 'Industry Partners', name: 'The Bangladesh-German Chamber of Commerce & Industry (BGCCI)', country: 'Bangladesh', link: 'http://www.bgcci.com/', img: '/assets/img/industrypartner/BGCCI.png' },
  { id: 'bd-ind-labcci', event: 'Bangladesh', group: 'Industry Partners', name: 'LATIN AMERICA - BANGLADESH CHAMBER OF COMMERCE AND INDUSTRY', country: 'Bangladesh', link: 'http://www.lab-chamber.com/', img: '/assets/img/industrypartner/LABCCI.png' },
  { id: 'bd-ind-kbcci', event: 'Bangladesh', group: 'Industry Partners', name: 'Korea Bangladesh Chamber of Commerce & Industry (KBCCI)', country: 'Bangladesh', link: 'https://www.kbcci.net/', img: '/assets/img/industrypartner/KBCCI.png' },
  { id: 'bd-ind-ibcci', event: 'Bangladesh', group: 'Industry Partners', name: 'India-Bangladesh Chamber of Commerce and Industry', country: 'Bangladesh', link: 'http://www.ibcci.net/', img: '/assets/img/industrypartner/IBCCI.png' },
  { id: 'bd-ind-bkdoa', event: 'Bangladesh', group: 'Industry Partners', name: 'Bangladesh Knit Dyeing Owners Association', country: 'Bangladesh', link: 'https://www.facebook.com/BKDOA', img: '/assets/img/industrypartner/BKDOA.png' },
  { id: 'bd-ind-buyer-council', event: 'Bangladesh', group: 'Industry Partners', name: 'Buyer Council', link: '#', img: '/assets/img/industrypartner/Buyers-Council.png' },
  { id: 'bd-ind-tnfma', event: 'Bangladesh', group: 'Industry Partners', name: 'TamilNadu Fabrics Manufacturers Association (TNFMA)', country: 'India', link: 'https://www.tnfma.com/', img: '/assets/img/industrypartner/TNFMA.png' },
  { id: 'bd-ind-aacci', event: 'Bangladesh', group: 'Industry Partners', name: 'Asian African Chamber of Commerce & Industry (AACCI)', link: 'http://www.asianafrican.org/', img: '/assets/img/industrypartner/AACCI.png' },
  { id: 'bd-ind-ccwe', event: 'Bangladesh', group: 'Industry Partners', name: 'Ceylon Chamber of Women Entrepreneurs', link: 'https://www.ccwe.lk/', img: '/assets/img/industrypartner/ccwe-logo.png' },
  { id: 'bd-ind-tai', event: 'Bangladesh', group: 'Industry Partners', name: 'The Textile Association (India)', link: 'https://www.textileassociationindia.org/', img: '/assets/img/industrypartner/tai.png' },

  { id: 'sl-ind-citi', event: 'Sri Lanka', group: 'Industry Partners', name: 'Confederation of Indian Textile Industry (CITI)', country: 'India', link: 'https://citiindia.org/', img: '/assets/img/industry-partners/CITI.png' },
  { id: 'sl-ind-jaaf', event: 'Sri Lanka', group: 'Industry Partners', name: 'JAAF', country: 'Sri Lanka', link: 'https://www.srilankaapparel.com/', img: '/assets/img/industry-partners/JAAF.png' },
  { id: 'sl-ind-mkma', event: 'Sri Lanka', group: 'Industry Partners', name: 'Malaysian Knitting Manufacturers Association (MKMA)', country: 'Malaysia', link: 'https://mkma.org/', img: '/assets/img/industry-partners/mkma.png' },
  { id: 'sl-ind-slaba', event: 'Sri Lanka', group: 'Industry Partners', name: 'Sri Lanka Apparel Brands Association (SLABA)', country: 'Sri Lanka', link: 'http://srilankabrands.com/', img: '/assets/img/industry-partners/SABA.png' },
  { id: 'sl-ind-slaea', event: 'Sri Lanka', group: 'Industry Partners', name: 'SLAEA', country: 'Sri Lanka', link: 'https://www.srilanka-apparel.com/', img: '/assets/img/industry-partners/SLAEA.png' },
  { id: 'sl-ind-slasa', event: 'Sri Lanka', group: 'Industry Partners', name: 'Sri Lanka Apparel Sourcing Association (SLASA)', country: 'Sri Lanka', link: 'https://srilankaapparelsourcing.com/', img: '/assets/img/industry-partners/SLASA.png' },
  { id: 'sl-ind-faama', event: 'Sri Lanka', group: 'Industry Partners', name: 'Fabric & Apparel Accessory Manufacturers Association (FAAMA)', country: 'Sri Lanka', link: 'https://faama.lk/', img: '/assets/img/industry-partners/new-faama.png' },
  { id: 'sl-ind-slcge', event: 'Sri Lanka', group: 'Industry Partners', name: 'Sri Lanka Chamber of Garment Exporters (SLCGE)', country: 'Sri Lanka', link: 'https://www.srilankagarments.com/', img: '/assets/img/industry-partners/Chambers.png' },
  { id: 'sl-ind-tnfma', event: 'Sri Lanka', group: 'Industry Partners', name: 'TamilNadu Fabrics Manufacturers Association (TNFMA)', country: 'India', link: 'https://www.tnfma.com/', img: '/assets/img/industry-partners/tnfma.png' },
  { id: 'sl-ind-aacci', event: 'Sri Lanka', group: 'Industry Partners', name: 'Asian African Chamber of Commerce & Industry (AACCI)', link: 'http://www.asianafrican.org/', img: '/assets/img/industrypartner/AACCI.png' },
  { id: 'sl-ind-ccwe', event: 'Sri Lanka', group: 'Industry Partners', name: 'Ceylon Chamber of Women Entrepreneurs', link: 'https://www.ccwe.lk/', img: '/assets/img/industrypartner/ccwe-logo.png' },
  { id: 'sl-ind-ftzma', event: 'Sri Lanka', group: 'Industry Partners', name: 'Free Trade Zone Manufacturers Association (FTZMA)', country: 'Sri Lanka', link: 'https://ftzma.lk/', img: '/assets/img/industry-partners/FTZMA.png' },
  { id: 'sl-ind-slcbcc', event: 'Sri Lanka', group: 'Industry Partners', name: 'SLCBCC', country: 'Sri Lanka', link: 'https://www.slcbcc.lk/', img: '/assets/img/industrypartner/SLCBCC.png' },
  { id: 'sl-ind-tai', event: 'Sri Lanka', group: 'Industry Partners', name: 'The Textile Association (India)', link: 'https://www.textileassociationindia.org/', img: '/assets/img/industry-partners/tai.png' },
];

const GROUPS: Partner['group'][] = [
  'Industry Partners',
];

export default function IndustryPartnersPage() {
  const [activeEvent, setActiveEvent] = useState<'ALL' | PartnerEvent>('ALL');

  const filteredPartners = useMemo(() => {
    return PARTNERS.filter((partner) => activeEvent === 'ALL' || partner.event === activeEvent);
  }, [activeEvent]);

  return (
    <div className="min-h-screen bg-archive-cream pt-32 pb-24 overflow-hidden">
      <section className="mx-auto mb-20 max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-archive-charcoal">
              INDUSTRY <br className="hidden lg:inline" />
              <span className="text-white">PARTNERS.</span>
            </h1>
          </div>

          <div className="flex border border-archive-charcoal/10 bg-white p-2 shrink-0">
            {(['ALL', 'Bangladesh', 'Sri Lanka'] as const).map((event) => (
              <button
                key={event}
                onClick={() => setActiveEvent(event)}
                className={`px-8 py-4 text-[14px] font-black tracking-widest transition-all uppercase ${activeEvent === event
                    ? 'bg-archive-charcoal text-white'
                    : 'text-archive-charcoal/40 hover:text-archive-charcoal'
                  }`}
              >
                {event.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="space-y-16"
          >
            {GROUPS.map((group) => {
              const partners = filteredPartners.filter((partner) => partner.group === group);
              if (!partners.length) return null;

              return (
                <div key={group} className="space-y-6">

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {partners.map((partner, idx) => (
                      <PartnerCard key={partner.id} partner={partner} idx={idx} />
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {!filteredPartners.length && (
          <div className="flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 py-40 text-center">
            <Search size={40} className="mb-6 text-archive-clay/20" />
            <span className="text-[15px] font-black uppercase tracking-[0.5em] text-archive-charcoal/30">NO PARTNERS INDEXED.</span>
          </div>
        )}
      </section>
    </div>
  );
}

const PartnerCard: React.FC<{ partner: Partner; idx: number }> = ({ partner, idx }) => {
  const href = partner.link && partner.link !== '#' ? partner.link : undefined;
  const titleCaseName = partner.name
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: idx * 0.03 }}
      className="group flex h-[300px] flex-col justify-between border border-archive-charcoal/10 bg-white p-7 shadow-sm transition-all duration-500 hover:bg-archive-charcoal"
    >
      <div className="flex h-36 items-center justify-center border border-archive-charcoal/10 p-5 transition-colors group-hover:border-white/20">
        <img
          src={partner.img}
          alt={partner.name}
          className="max-h-full max-w-full object-contain"
          onError={(event) => {
            (event.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=2F2C2C&color=F3EBE8&bold=true`;
          }}
        />
      </div>
      <div className="space-y-4 pt-3">
        <div className="space-y-2">
          <h3 className="text-[15px] font-semibold leading-tight tracking-tight text-archive-charcoal transition-colors group-hover:text-white">
            {titleCaseName}
          </h3>
        </div>
        <div className="flex items-center justify-between border-t border-archive-charcoal/5 pt-4 group-hover:border-white/10">
          <span className="text-[15px] font-black uppercase tracking-widest text-archive-charcoal/60 group-hover:text-archive-clay">Visit Website</span>
          {href && (
            <ArrowUpRight size={14} className="text-archive-clay" />
          )}
        </div>
      </div>
    </motion.div>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
};

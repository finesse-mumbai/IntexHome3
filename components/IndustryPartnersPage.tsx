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
  group: 'International Pavilion Organisers' | 'Nodal Trade Partners' | 'Supported By' | 'In Association With' | 'Industry Partners';
};

const PARTNERS: Partner[] = [
  { id: 'bd-ipo-texprocil', event: 'Bangladesh', group: 'International Pavilion Organisers', name: 'The Cotton Textiles Export Promotion Council', country: 'India', link: 'https://texprocil.org/', img: '/assets/img/industrypartner/texprocil-1.png' },
  { id: 'bd-ipo-pdexcil', event: 'Bangladesh', group: 'International Pavilion Organisers', name: 'Powerloom Development And Export Promotion Council', country: 'India', link: 'https://www.pdexcil.org/', img: '/assets/img/industrypartner/PDEXCIL.png' },
  { id: 'bd-ipo-fieo', event: 'Bangladesh', group: 'International Pavilion Organisers', name: 'Federation of Indian Export Organisations', country: 'India', link: 'https://fieo.org/', img: '/assets/img/industrypartner/fieo.png' },
  { id: 'bd-ipo-thti', event: 'Bangladesh', group: 'International Pavilion Organisers', name: 'THTI - Thailand Textile Institute', country: 'Thailand', link: 'https://www.thaitextile.org/th/home/', img: '/assets/img/industrypartner/THTI.png' },

  { id: 'bd-nodal-bkmea', event: 'Bangladesh', group: 'Nodal Trade Partners', name: 'BKMEA', link: 'https://new.bkmea.com/', img: '/assets/img/industrypartner/BKMEA-1.png' },
  { id: 'bd-nodal-bgba', event: 'Bangladesh', group: 'Nodal Trade Partners', name: 'BGBA', link: 'https://www.bgbabd.org/', img: '/assets/img/industrypartner/BGBA.png' },

  { id: 'bd-supported-bagma', event: 'Bangladesh', group: 'Supported By', name: 'Bangladesh Apparel General Managers Association', link: 'https://www.bagma.net/', img: '/assets/img/supportedby/BAGMA.png' },
  { id: 'bd-supported-mba', event: 'Bangladesh', group: 'Supported By', name: 'Merchandising Brotherhood Association Bangladesh', link: 'https://www.facebook.com/mbabd.org/', img: '/assets/img/supportedby/marchandising.png' },
  { id: 'bd-supported-bmsa', event: 'Bangladesh', group: 'Supported By', name: 'Bangladesh Merchandiser & Supplier Association (BMSA)', link: 'https://www.facebook.com/groups/281104344686829/', img: '/assets/img/supportedby/BMSA.png' },
  { id: 'bd-supported-bmac', event: 'Bangladesh', group: 'Supported By', name: 'Bangladesh Merchandisers Association & Community', link: 'https://www.facebook.com/groups/709058794419545/', img: '/assets/img/supportedby/BMAC.png' },

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

  { id: 'sl-ipo-texprocil', event: 'Sri Lanka', group: 'International Pavilion Organisers', name: 'The Cotton Textiles Export Promotion Council', country: 'India', link: 'https://texprocil.org/', img: '/assets/img/industrypartner/texprocil-1.png' },
  { id: 'sl-ipo-pdexcil', event: 'Sri Lanka', group: 'International Pavilion Organisers', name: 'Powerloom Development And Export Promotion Council', country: 'India', link: 'https://www.pdexcil.org/', img: '/assets/img/industrypartner/PDEXCIL.png' },
  { id: 'sl-ipo-matexil', event: 'Sri Lanka', group: 'International Pavilion Organisers', name: 'Manmade and Technical Textiles Export Promotion Council (MATEXIL)', link: 'https://www.matexil.org/', img: '/assets/img/industrypartner/matexil.png' },
  { id: 'sl-ipo-kotra', event: 'Sri Lanka', group: 'International Pavilion Organisers', name: 'Korea Trade-Investment Promotion Agency (KOTRA)', link: 'https://www.kotra.or.kr/english/index.do', img: '/assets/img/industry-partners/kotra.png' },
  { id: 'sl-ipo-korea', event: 'Sri Lanka', group: 'International Pavilion Organisers', name: 'Korea Textile Trade Association', img: '/assets/img/industry-partners/korea-textile-trade-association.png' },

  { id: 'sl-supported-ttf', event: 'Sri Lanka', group: 'Supported By', name: 'Taiwan Textile Federation Taiwan', link: '#', img: '/assets/img/industry-partners/TTF.png' },
  { id: 'sl-supported-faama', event: 'Sri Lanka', group: 'Supported By', name: 'Fabric & Apparel Accessory Manufacturers Association (FAAMA)', link: 'https://faama.lk/', img: '/assets/img/industry-partners/new-faama.png' },
  { id: 'sl-supported-thti', event: 'Sri Lanka', group: 'Supported By', name: 'THTI - Thailand Textile Institute', country: 'Thailand', link: 'https://www.thaitextile.org/th/home/', img: '/assets/img/industrypartner/THTI.png' },
  { id: 'sl-supported-jetro', event: 'Sri Lanka', group: 'Supported By', name: 'Japan External Trade Organization (JETRO) Japan', link: 'https://www.jetro.go.jp/en/', img: '/assets/img/industry-partners/jetro.png' },

  { id: 'sl-assoc-edb', event: 'Sri Lanka', group: 'In Association With', name: 'Export Development Board', country: 'Sri Lanka', link: 'https://www.srilankabusiness.com/', img: '/assets/img/industry-partners/EDB.png' },

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
  'International Pavilion Organisers',
  'Nodal Trade Partners',
  'Supported By',
  'In Association With',
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
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-archive-clay"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-archive-clay">Alliance Registry // Trade Network</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-archive-charcoal">
              INDUSTRY <br />
              <span className="text-white">PARTNERS.</span>
            </h1>
          </div>

          <div className="flex flex-col gap-8 border-y border-archive-charcoal/10 py-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-sm font-bold leading-relaxed tracking-[0.15em] text-archive-charcoal/60">
              Official partner records from Intex Bangladesh and Intex Sri Lanka, covering pavilion organisers, nodal trade partners, supporting bodies, and industry associations.
            </p>
            <div className="flex flex-wrap gap-2">
              {(['ALL', 'Bangladesh', 'Sri Lanka'] as const).map((event) => (
                <button
                  key={event}
                  onClick={() => setActiveEvent(event)}
                  className={`border px-8 py-3 text-[10px] font-black tracking-widest transition-all ${
                    activeEvent === event
                      ? 'border-archive-charcoal bg-archive-charcoal text-white'
                      : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'
                  }`}
                >
                  {event.toUpperCase()}
                </button>
              ))}
            </div>
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
                  <div className="flex items-center justify-between gap-6 border-b border-archive-charcoal/10 pb-5">
                    <div className="flex items-center gap-3">
                      <Handshake size={16} className="text-archive-clay" />
                      <h2 className="text-lg font-black uppercase leading-none tracking-tight text-archive-charcoal">{group}</h2>
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-archive-charcoal/30">{partners.length.toString().padStart(2, '0')} RECORDS</span>
                  </div>

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
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-archive-charcoal/30">NO PARTNERS INDEXED.</span>
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
      className="group flex h-[360px] flex-col justify-between border border-archive-charcoal/10 bg-white p-7 shadow-sm transition-all duration-500 hover:bg-archive-charcoal"
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
      <div className="space-y-4 pt-8">
        <div className="space-y-2">
          <span className="text-[9px] font-black uppercase tracking-widest text-archive-clay">{partner.event}{partner.country ? ` // ${partner.country}` : ''}</span>
          <h3 className="text-sm font-semibold leading-tight tracking-tight text-archive-charcoal transition-colors group-hover:text-white">
            {titleCaseName}
          </h3>
        </div>
        <div className="flex items-center justify-between border-t border-archive-charcoal/5 pt-4 group-hover:border-white/10">
          <span className="text-[8px] font-black uppercase tracking-widest text-archive-charcoal/60 group-hover:text-archive-clay">Visit Website</span>
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

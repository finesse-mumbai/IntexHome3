import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Users, 
  Globe, 
  ShieldCheck, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  FileText, 
  Layers, 
  Tag, 
  X,
  Calendar,
  MapPin,
  Check,
  Calculator,
  Plus,
  Minus,
  Briefcase,
  Star,
  FileCheck,
  ChevronRight,
  Info
} from 'lucide-react';

interface PartnershipPackage {
  id: string;
  title: string;
  category: 'PREMIUM' | 'ONSITE' | 'DIGITAL';
  price: string;
  numericPrice: number;
  subPrice?: string;
  description: string;
  specs?: string;
  highlights: string[];
  recommended?: boolean;
}

const SHOW_GUIDES: Record<string, { title: string; location: string; date: string; pdfUrl: string; size: string }> = {
  'BANGLADESH': {
    title: 'Intex Bangladesh Branding Manifest',
    location: 'ICCB, Dhaka',
    date: '22-23-24 June 2027',
    pdfUrl: 'https://bd.intexsouthasia.com/assets/pdf/Branding-Partnership-Opportunities.pdf',
    size: '3.0 MB'
  },
  'SRI LANKA': {
    title: 'Intex Sri Lanka Branding Manifest',
    location: 'BMICH, Colombo',
    date: '04-05-06 August 2027',
    pdfUrl: 'https://sl.intexsouthasia.com/assets/pdf/Branding-Partnership-Opportunities.pdf',
    size: '2.5 MB'
  }
};

const STATS = [
  { label: 'Editions Executed', value: '17', sub: 'Across South Asia' },
  { label: 'Exhibiting Companies', value: '3,000+', sub: 'Global Suppliers' },
  { label: 'Exhibiting Nations', value: '20+', sub: 'International Hubs' },
  { label: 'Verified Trade Buyers', value: '70,000+', sub: 'Decision Makers' },
  { label: 'Buyer Origin Countries', value: '40+', sub: 'Global Sourcing' }
];

const PACKAGES: PartnershipPackage[] = [
  {
    id: 'pkg-bag',
    title: 'Official Bag Partner',
    category: 'PREMIUM',
    price: '$7,500',
    numericPrice: 7500,
    description: 'Exclusive logo branding on all official trade visitor bags handed to every attendee.',
    highlights: [
      'Maximum Visibility — Every attendee becomes a walking advertisement',
      'Strong Brand Recall — Repeated exposure throughout the 3-day expo',
      'Enhanced Credibility — High-tier placement on the official show bag',
      'Long-Term Impact — Extended utility & brand visibility post-event'
    ],
    recommended: true
  },
  {
    id: 'pkg-lanyard',
    title: 'Lanyard Partner',
    category: 'PREMIUM',
    price: '$5,000',
    numericPrice: 5000,
    description: 'Official brand logo printed continuously on neck lanyards worn by all visitors and VIPs.',
    highlights: [
      'High Impact — Your brand worn by every single trade visitor',
      'Event-Wide Presence — Constant visibility on show floor & press photos',
      'Media Exposure — Featured prominently in official event photography'
    ],
    recommended: true
  },
  {
    id: 'pkg-badge',
    title: 'Badge Partner',
    category: 'PREMIUM',
    price: '$5,000',
    numericPrice: 5000,
    description: 'Prominent logo placement on all official visitor, exhibitor, and press entry badges.',
    highlights: [
      'Seen by every visitor, buyer, exhibitor, and VIP at registration',
      'Continuous brand engagement across all three show days',
      'Establishes immediate market authority and credibility'
    ]
  },
  {
    id: 'pkg-notebook',
    title: 'Notebook Partner',
    category: 'ONSITE',
    price: '$3,000',
    numericPrice: 3000,
    description: 'Co-branded session notebooks distributed across IB F seminars and VIP delegate kits.',
    highlights: [
      'Extensive Reach — Logo on seminar notebooks used by VIP delegates',
      'High Utility — Kept and referenced long after the event concludes',
      'Targeted Audience — Directly reaches senior sourcing directors'
    ]
  },
  {
    id: 'pkg-bottle',
    title: 'Water Bottle Branding',
    category: 'ONSITE',
    price: '$2,500',
    numericPrice: 2500,
    description: 'Custom branded water bottles placed in buyer lounges, seminar halls, and VIP areas.',
    highlights: [
      'Wide Reach — Free branded water bottles for all buyers & exhibitors',
      'Strategic Placement — Positioned in high-traffic lounges & halls',
      'High Frequency Touchpoint — Constant physical brand interaction'
    ]
  },
  {
    id: 'pkg-kit',
    title: 'Buyer Kit Inserts',
    category: 'ONSITE',
    price: '$2,000',
    numericPrice: 2000,
    specs: 'A4 Flyer to be provided by Partner',
    description: 'Your promotional A4 corporate brochure inserted into official buyer registration bags.',
    highlights: [
      'Direct Access — Literature delivered directly into buyer hands',
      'Targeted Touchpoint — 100% reach to pre-registered trade buyers',
      'High Lead Conversion — High retention rate among sourcing heads'
    ]
  },
  {
    id: 'pkg-led',
    title: 'LED Wall Video Branding',
    category: 'DIGITAL',
    price: '$1,500',
    numericPrice: 1500,
    subPrice: '$750 Rotational (Up to 5 videos of 30s each)',
    specs: 'HD Screen Size: 8ft x 6ft at Main Entrance',
    description: 'High-definition motion video advertising displayed at the main exhibition hall entrance.',
    highlights: [
      'High-Impact Motion — Captures immediate visitor attention on entry',
      'Prime Location — Positioned at high-traffic entry corridors',
      'Dynamic Content — Showcase product videos & brand commercials'
    ]
  },
  {
    id: 'pkg-flex',
    title: 'Self-Standing Flex Banners',
    category: 'ONSITE',
    price: '$1,000',
    numericPrice: 1000,
    specs: 'Package of 3 Banners (3ft x 6ft each)',
    description: 'Strategically positioned self-standing flex banners at prime entrance zones.',
    highlights: [
      'Prime Positioning — Placed at high-traffic hall entry points',
      'Targeted Exposure — Direct visual visibility for all incoming buyers',
      'Large Format — Bold typography & high-definition graphic impact'
    ]
  },
  {
    id: 'pkg-times',
    title: 'Intex Times Newspaper AD',
    category: 'DIGITAL',
    price: '$1,000',
    numericPrice: 1000,
    subPrice: '$400 Quarter Page AD',
    specs: 'Published daily during fair days',
    description: 'Print display advertisement in the official Intex Times daily exhibition newspaper.',
    highlights: [
      'Daily Print Distribution — Handed out directly at exhibition doors',
      'Editorial Integration — Positioned alongside daily show news',
      'High Retention Value — Read by trade buyers and VIP delegations'
    ]
  },
  {
    id: 'pkg-web',
    title: 'Web Banner Listing',
    category: 'DIGITAL',
    price: '$500',
    numericPrice: 500,
    specs: '337px x 94px (3 Months Online Listing)',
    description: 'Prominent digital web banner placement on the official Intex South Asia web portal.',
    highlights: [
      '24/7 Global Access — Reach buyers pre-registering online globally',
      'Targeted Digital Impressions — Direct traffic to your web catalog',
      'Extended Duration — Active online presence for 3 full months'
    ]
  }
];

const PAST_PARTNERS = [
  { name: 'Oritain', logo: 'https://sl.intexsouthasia.com/assets/img/partners/oritain.png', tag: 'Origin Verification' },
  { name: 'Kasturi Cotton Bharat', logo: 'https://sl.intexsouthasia.com/assets/img/partners/kasturi.png', tag: 'Traceability Partner' },
  { name: 'Control Union', logo: 'https://sl.intexsouthasia.com/assets/img/partners/controlunion.png', tag: 'Sustainability Certification' },
  { name: 'Eurofins', logo: 'https://sl.intexsouthasia.com/assets/img/partners/eurofins.png', tag: 'Testing & Inspection' },
  { name: 'Super Dry (Incubic)', logo: 'https://sl.intexsouthasia.com/assets/img/partners/superdry.png', tag: 'Desiccant Solutions' }
];

const BrandingOpportunitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'PREMIUM' | 'ONSITE' | 'DIGITAL'>('ALL');
  const [activeShow, setActiveShow] = useState<'BANGLADESH' | 'SRI LANKA'>('BANGLADESH');
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [inquiryPackage, setInquiryPackage] = useState<PartnershipPackage | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeGuide = SHOW_GUIDES[activeShow];

  const filteredPackages = selectedCategory === 'ALL' 
    ? PACKAGES 
    : PACKAGES.filter(p => p.category === selectedCategory);

  const togglePackage = (id: string) => {
    setSelectedPackages(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const calculatedTotal = selectedPackages.reduce((acc, id) => {
    const item = PACKAGES.find(p => p.id === id);
    return acc + (item ? item.numericPrice : 0);
  }, 0);

  const openInquiryModal = (pkg?: PartnershipPackage) => {
    setInquiryPackage(pkg || null);
    setShowModal(true);
    setSubmitted(false);
  };

  return (
    <div className="bg-archive-cream text-archive-charcoal min-h-screen pt-28 pb-24 overflow-hidden selection:bg-archive-clay selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 pb-12 border-b border-archive-charcoal/10">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-archive-clay/10 text-archive-clay text-xs font-black tracking-[0.25em] uppercase rounded-full">
              <Sparkles size={14} /> Sponsorship Manifest 2026
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              BRANDING & <br />
              <span className="text-archive-clay">PARTNERSHIPS.</span>
            </h1>

            <p className="text-base md:text-xl font-medium text-archive-charcoal/70 leading-relaxed">
              Maximize your brand visibility across South Asia's premier textile sourcing ecosystem. Connect directly with over 70,000+ verified trade buyers, manufacturers, and international sourcing hubs.
            </p>
          </div>

          {/* Show Selection & PDF Asset Switcher Box */}
          <div className="w-full lg:w-[420px] bg-white p-6 rounded-2xl shadow-xl space-y-5 border border-archive-charcoal/10 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black tracking-widest text-archive-clay uppercase flex items-center gap-2">
                <FileText size={16} /> Select Show Deck
              </span>
              <div className="flex bg-archive-cream p-1 rounded-lg">
                {(['BANGLADESH', 'SRI LANKA'] as const).map(show => (
                  <button
                    key={show}
                    onClick={() => setActiveShow(show)}
                    className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase transition-all rounded ${
                      activeShow === show ? 'bg-archive-charcoal text-white shadow' : 'text-archive-charcoal/60 hover:text-archive-charcoal'
                    }`}
                  >
                    {show}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeShow}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-black uppercase text-archive-charcoal">{activeGuide.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs font-bold text-archive-charcoal/60">
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-archive-clay" /> {activeGuide.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-archive-clay" /> {activeGuide.date}</span>
                  </div>
                </div>

                <a
                  href={activeGuide.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-archive-clay hover:bg-archive-charcoal text-white text-xs font-black tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 rounded-xl shadow group"
                >
                  <span>DOWNLOAD PDF DECK ({activeGuide.size})</span>
                  <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 2. STACKED MULTI-PLATE STATS FRAME (Signature Industrial Plate Design) */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-28">
        <div className="relative group/plates">
          {/* Layer 1: Bottom White Plate */}
          <div className="absolute inset-0 bg-white rounded-[28px] -rotate-[1.5deg] -skew-y-[1.5deg] shadow-xl transition-transform duration-700 group-hover/plates:-rotate-[2deg]" />

          {/* Layer 2: Middle Dark Plate (#2f2c2c) */}
          <div className="absolute inset-0 bg-[#2f2c2c] rounded-[24px] -rotate-[1deg] -skew-y-[1deg] shadow-2xl transition-transform duration-700 group-hover/plates:-rotate-[1.5deg] overflow-hidden">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
            />
          </div>

          {/* Main Grid Content Inside Stacked Plate */}
          <div className="relative z-10 rotate-[1deg] skew-y-[1deg] p-8 md:p-14 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-black tracking-[0.3em] text-archive-clay uppercase">Reach & Impact</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight text-white">
                  The Region's Most Influential Sourcing Platform
                </h2>
                <p className="text-sm font-medium text-white/70 leading-relaxed">
                  Over 17 successful editions, Intex South Asia has united global suppliers with regional garment manufacturers, retail chains, and international buying offices.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {STATS.map((s, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center space-y-1 border border-white/10 hover:border-archive-clay transition-all">
                    <div className="text-2xl md:text-3xl font-black text-archive-clay">{s.value}</div>
                    <div className="text-[11px] font-black uppercase tracking-wider text-white leading-tight">{s.label}</div>
                    <div className="text-[9px] font-bold uppercase text-white/40">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION CARDS */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-md space-y-4 hover:shadow-xl transition-all border border-archive-charcoal/5">
            <div className="w-12 h-12 bg-archive-clay/10 text-archive-clay flex items-center justify-center rounded-xl font-black text-xl">
              01
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-archive-charcoal">
              Enhanced Professional Visibility
            </h3>
            <p className="text-sm font-medium text-archive-charcoal/70 leading-relaxed">
              Trade fairs are high-value venues to showcase your brand and increase professional visibility by empowering your company to communicate the value proposition of your products directly to decision-makers.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-md space-y-4 hover:shadow-xl transition-all border border-archive-charcoal/5">
            <div className="w-12 h-12 bg-archive-clay/10 text-archive-clay flex items-center justify-center rounded-xl font-black text-xl">
              02
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-archive-charcoal">
              Global Audience & Long-Term ROI
            </h3>
            <p className="text-sm font-medium text-archive-charcoal/70 leading-relaxed">
              Branding at an international trade fair like Intex allows you to maximize exposure to a global audience, enabling high-value lead generation and long-term business partnerships across South Asia.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SPONSORSHIP OPPORTUNITIES CATALOG GRID */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-28 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-archive-charcoal/10">
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.3em] text-archive-clay uppercase">Catalog Offerings</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-archive-charcoal">
              Partnership Opportunities
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white p-2 rounded-xl shadow-sm border border-archive-charcoal/5">
            {(['ALL', 'PREMIUM', 'ONSITE', 'DIGITAL'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs font-black tracking-[0.2em] uppercase transition-all rounded-lg ${
                  selectedCategory === cat 
                    ? 'bg-archive-clay text-white shadow-md' 
                    : 'text-archive-charcoal/60 hover:text-archive-charcoal hover:bg-archive-cream'
                }`}
              >
                {cat === 'ALL' ? 'All Packages' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const isSelected = selectedPackages.includes(pkg.id);
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`bg-white rounded-2xl p-8 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border ${
                  isSelected ? 'border-archive-clay bg-archive-clay/5' : 'border-archive-charcoal/10'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-archive-clay text-white px-4 py-1 text-[10px] font-black tracking-[0.2em] uppercase rounded-bl-xl shadow-md">
                    ★ Premium Option
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[11px] font-black tracking-[0.2em] text-archive-clay uppercase block">
                      {pkg.category} BRANDING
                    </span>
                    <h3 className="text-2xl font-black text-archive-charcoal uppercase tracking-tight leading-snug">
                      {pkg.title}
                    </h3>
                  </div>

                  {/* Price Box */}
                  <div className="p-4 bg-archive-cream/70 rounded-xl space-y-1 border border-archive-charcoal/5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl md:text-3xl font-black text-archive-charcoal">
                        {pkg.price}
                      </span>
                      <span className="text-[10px] font-bold text-archive-charcoal/50 uppercase">Inclusive of Taxes</span>
                    </div>
                    {pkg.subPrice && (
                      <div className="text-xs font-bold text-archive-clay tracking-wide uppercase">
                        {pkg.subPrice}
                      </div>
                    )}
                    {pkg.specs && (
                      <div className="text-[11px] font-bold text-archive-charcoal/60 uppercase pt-1">
                        {pkg.specs}
                      </div>
                    )}
                  </div>

                  <p className="text-xs font-medium text-archive-charcoal/70 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-black tracking-wider text-archive-charcoal/40 uppercase block">Key Benefits</span>
                    <div className="space-y-2">
                      {pkg.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs font-bold text-archive-charcoal/80">
                          <Check size={14} className="text-archive-clay shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => openInquiryModal(pkg)}
                    className="w-full py-4 bg-archive-clay hover:bg-archive-charcoal text-white text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 rounded-xl shadow-md group/btn"
                  >
                    <span>BOOK OPPORTUNITY</span>
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => togglePackage(pkg.id)}
                    className={`w-full py-2.5 text-[11px] font-black tracking-widest uppercase transition-all flex items-center justify-center gap-2 rounded-lg border ${
                      isSelected 
                        ? 'bg-archive-charcoal text-white border-archive-charcoal' 
                        : 'bg-white text-archive-charcoal/60 border-archive-charcoal/20 hover:border-archive-clay hover:text-archive-clay'
                    }`}
                  >
                    {isSelected ? <Minus size={12} /> : <Plus size={12} />}
                    <span>{isSelected ? 'Remove from Bundle' : 'Add to Bundle Estimate'}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. INTERACTIVE BUNDLE ESTIMATOR BAR */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-28">
        <div className="bg-archive-charcoal text-white rounded-2xl p-8 md:p-12 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-archive-clay text-xs font-black tracking-[0.3em] uppercase">
                <Calculator size={16} /> Customized Sponsorship Bundle
              </div>
              <h3 className="text-2xl md:text-4xl font-black uppercase">Bundle Cost Estimator</h3>
              <p className="text-xs font-bold text-white/60 uppercase">
                Select multiple sponsorship categories above to calculate your customized marketing budget.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl border border-white/10 text-right shrink-0 min-w-[240px]">
              <span className="text-[10px] font-bold text-white/50 uppercase block">Total Estimated Cost</span>
              <span className="text-3xl md:text-5xl font-black text-archive-clay">${calculatedTotal.toLocaleString()}</span>
              <span className="text-[10px] font-bold text-white/40 block mt-1">{selectedPackages.length} Opportunity(s) Selected</span>
            </div>
          </div>

          {selectedPackages.length > 0 ? (
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {selectedPackages.map(id => {
                  const item = PACKAGES.find(p => p.id === id);
                  return (
                    <span key={id} className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase rounded-full flex items-center gap-2">
                      {item?.title} ({item?.price})
                      <button onClick={() => togglePackage(id)} className="hover:text-archive-clay"><X size={12} /></button>
                    </span>
                  );
                })}
              </div>

              <button
                onClick={() => openInquiryModal()}
                className="px-8 py-3.5 bg-archive-clay hover:bg-white hover:text-archive-charcoal text-white font-black text-xs uppercase tracking-[0.2em] transition-all rounded-lg shadow shrink-0"
              >
                REQUEST BUNDLE MANIFEST
              </button>
            </div>
          ) : (
            <div className="pt-4 border-t border-white/10 text-xs font-bold text-white/40 uppercase">
              Click "+ Add to Bundle Estimate" on any package above to combine multiple opportunities.
            </div>
          )}
        </div>
      </section>

      {/* 6. PAST BRANDING PARTNERS SHOWCASE */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-28 space-y-12">
        <div className="space-y-4 text-center">
          <span className="text-xs font-black tracking-[0.3em] text-archive-clay uppercase">Industry Leadership</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-archive-charcoal">
            Our Branding Partners of 2025
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {PAST_PARTNERS.map((partner, pIdx) => (
            <motion.div 
              key={pIdx}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 shadow-sm hover:shadow-xl border border-archive-charcoal/5 group"
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="font-black text-archive-charcoal text-lg uppercase tracking-tight hidden group-hover:inline-block">
                  {partner.name}
                </span>
              </div>
              <span className="text-[11px] font-bold text-archive-charcoal/60 uppercase tracking-wider pt-2 border-t border-archive-charcoal/5 w-full">
                {partner.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. IMPORTANT GUIDELINES */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-28">
        <div className="bg-white rounded-2xl p-8 md:p-12 space-y-8 shadow-md border border-archive-charcoal/5">
          <div className="flex items-center gap-3 pb-4 border-b border-archive-charcoal/10">
            <Info size={20} className="text-archive-clay" />
            <h3 className="text-xl font-black uppercase tracking-wider text-archive-charcoal">Important Sponsorship Guidelines</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-medium text-archive-charcoal/80">
            <div className="flex items-start gap-3 p-4 bg-archive-cream/40 rounded-xl">
              <CheckCircle2 size={16} className="text-archive-clay shrink-0 mt-0.5" />
              <span>All high-resolution artwork and creatives must be provided directly by the Partner.</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-archive-cream/40 rounded-xl">
              <CheckCircle2 size={16} className="text-archive-clay shrink-0 mt-0.5" />
              <span>All print branding artworks must be submitted at least <strong>30 days prior</strong> to the event for approval and printing.</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-archive-cream/40 rounded-xl">
              <CheckCircle2 size={16} className="text-archive-clay shrink-0 mt-0.5" />
              <span>Branding elements and specifications can be customized per client requirements upon request.</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-archive-cream/40 rounded-xl">
              <CheckCircle2 size={16} className="text-archive-clay shrink-0 mt-0.5" />
              <span>Sponsorship categories are subject to availability and final written confirmation from Worldex India.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIRECT CONTACT & BOOKING BLOCK */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="bg-archive-charcoal text-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black tracking-[0.3em] text-archive-clay uppercase">Direct Partnership Desk</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Bespoke Sponsorship Requests
              </h2>
              <p className="text-base text-white/80 font-medium leading-relaxed max-w-xl">
                Connect directly with our Operations & Marketing leadership to discuss customized sponsorship packages tailored to your brand's specific regional objectives.
              </p>

              <div className="pt-4 space-y-3 text-sm font-bold">
                <div className="text-white uppercase font-black text-lg">
                  Mr. Zahir Merchant
                </div>
                <div className="text-white/60 uppercase text-xs">
                  Sr. Head - Operations & Marketing
                </div>
                <div className="flex flex-wrap gap-6 pt-2">
                  <a href="tel:+919820028359" className="flex items-center gap-2 text-archive-clay hover:underline font-black">
                    <Phone size={16} /> +91 9820028359
                  </a>
                  <a href="mailto:zahir@worldexindia.com" className="flex items-center gap-2 text-archive-clay hover:underline font-black">
                    <Mail size={16} /> zahir@worldexindia.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white text-archive-charcoal p-8 rounded-2xl shadow-2xl space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight text-archive-charcoal">
                Book Sponsorship Opportunity
              </h3>
              
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }} 
                className="space-y-4"
              >
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-archive-charcoal/60 block mb-1">Company Name</label>
                  <input required type="text" placeholder="Your Brand / Company" className="w-full p-3 border border-archive-charcoal/20 rounded-lg text-xs font-bold focus:outline-none focus:border-archive-clay" />
                </div>
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-archive-charcoal/60 block mb-1">Contact Email</label>
                  <input required type="email" placeholder="name@company.com" className="w-full p-3 border border-archive-charcoal/20 rounded-lg text-xs font-bold focus:outline-none focus:border-archive-clay" />
                </div>
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-archive-charcoal/60 block mb-1">Phone / WhatsApp</label>
                  <input required type="tel" placeholder="+91 0000000000" className="w-full p-3 border border-archive-charcoal/20 rounded-lg text-xs font-bold focus:outline-none focus:border-archive-clay" />
                </div>

                {submitted ? (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-bold text-sm">
                    ✓ Inquiry Sent Successfully! Our team will get in touch shortly.
                  </div>
                ) : (
                  <button type="submit" className="w-full py-4 bg-archive-clay text-white text-xs font-black tracking-[0.2em] uppercase hover:bg-archive-charcoal transition-all rounded-lg shadow-lg">
                    SUBMIT SPONSORSHIP REQUEST
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOOKING MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-archive-charcoal max-w-lg w-full rounded-2xl p-8 space-y-6 relative shadow-2xl"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-archive-charcoal/40 hover:text-archive-charcoal p-1"
              >
                <X size={20} />
              </button>

              <div className="space-y-2">
                <span className="text-[11px] font-black tracking-[0.2em] text-archive-clay uppercase block">Sponsorship Inquiry</span>
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  {inquiryPackage ? inquiryPackage.title : 'Custom Sponsorship Manifest'}
                </h3>
                {inquiryPackage && (
                  <div className="text-sm font-black text-archive-clay">
                    Price: {inquiryPackage.price}
                  </div>
                )}
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  setTimeout(() => setShowModal(false), 2000);
                }} 
                className="space-y-4"
              >
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-archive-charcoal/60 block mb-1">Your Name</label>
                  <input required type="text" placeholder="Full Name" className="w-full p-3 border border-archive-charcoal/20 rounded-lg text-xs font-bold focus:outline-none focus:border-archive-clay" />
                </div>
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-archive-charcoal/60 block mb-1">Company Name</label>
                  <input required type="text" placeholder="Company / Brand" className="w-full p-3 border border-archive-charcoal/20 rounded-lg text-xs font-bold focus:outline-none focus:border-archive-clay" />
                </div>
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-archive-charcoal/60 block mb-1">Email Address</label>
                  <input required type="email" placeholder="name@company.com" className="w-full p-3 border border-archive-charcoal/20 rounded-lg text-xs font-bold focus:outline-none focus:border-archive-clay" />
                </div>
                <div>
                  <label className="text-[11px] font-black uppercase tracking-wider text-archive-charcoal/60 block mb-1">Phone Number</label>
                  <input required type="tel" placeholder="+91 0000000000" className="w-full p-3 border border-archive-charcoal/20 rounded-lg text-xs font-bold focus:outline-none focus:border-archive-clay" />
                </div>

                {submitted ? (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-bold text-sm">
                    ✓ Request Received! We will contact you right away.
                  </div>
                ) : (
                  <button type="submit" className="w-full py-4 bg-archive-clay text-white text-xs font-black tracking-[0.2em] uppercase hover:bg-archive-charcoal transition-all rounded-lg shadow-lg">
                    CONFIRM & SUBMIT INQUIRY
                  </button>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BrandingOpportunitiesPage;

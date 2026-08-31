import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowUpRight, 
  Globe, 
  Phone, 
  Mail, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Layers, 
  ShieldCheck, 
  FileText, 
  Tag, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface TimingRow {
  date: string;
  day: string;
  hours: string;
}

interface ContactPerson {
  name: string;
  phone: string;
}

interface FactsheetItem {
  id: string;
  countryCode: 'BD' | 'SL' | 'IN';
  name: string;
  edition: string;
  logo: string;
  theme: string;
  date: string;
  time: string;
  venue: string;
  venueFull: string;
  website: string;
  pdfUrl: string;
  regUrl: string;
  timings: TimingRow[];
  highlights: string[];
  countries: string[];
  categories: string[];
  buyerProfiles: string[];
  formatRules: string[];
  boothContacts: ContactPerson[];
  showContacts: ContactPerson[];
  email: string;
}

const FACTSHEET_DATA: FactsheetItem[] = [
  {
    id: 'FS_BD_18',
    countryCode: 'BD',
    name: 'Intex Bangladesh',
    edition: '18th Edition',
    logo: 'https://sl.intexsouthasia.com/_next/image?url=%2Fassets%2Fimg%2Forgb.png&w=384&q=75',
    theme: 'The Premier International Textile Sourcing Show of South Asia',
    date: '22-23-24 June, 2027',
    time: '10:00 AM - 07:00 PM',
    venue: 'ICCB, Dhaka, Bangladesh',
    venueFull: 'International Convention City Bashundhara (ICCB), Dhaka',
    website: 'bd.intexsouthasia.com',
    pdfUrl: 'https://bd.intexsouthasia.com/assets/pdf/Brochure.pdf',
    regUrl: 'https://portal.intexfair.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=bd',
    timings: [
      { date: '22 June', day: 'Tuesday', hours: '10.00 a.m. - 7.00 p.m.' },
      { date: '23 June', day: 'Wednesday', hours: '10.00 a.m. - 7.00 p.m.' },
      { date: '24 June', day: 'Thursday', hours: '10.00 a.m. - 6.00 p.m.' }
    ],
    highlights: [
      'Grand Opening Ceremony',
      'Country Pavilions',
      'Domestic + International Exhibitors',
      'Innovation & Trends Showcase',
      'Interactive Business Forum Seminar Series',
      'Buyer Delegations + International Hosted Buyers',
      'Hi-Tea Reception',
      'Trade Media Corner',
      'VIP Platinum Lounge for B2B Meetings'
    ],
    countries: [
      'India', 'Sri Lanka', 'Bangladesh', 'Thailand', 'Indonesia', 'Malaysia', 
      'Vietnam', 'China', 'Korea', 'Taiwan', 'Hong Kong', 'Turkey', 
      'Italy', 'UK', 'Egypt', 'USA', 'and more...'
    ],
    categories: [
      'Fibres', 'Yarns', 'Apparel Fabrics', 'Denim Fabrics', 
      'Clothing Accessories', 'Design Studios', 'Trends & Fashion Forecasters', 'Allied Services', 'and more...'
    ],
    buyerProfiles: [
      'Apparel Manufacturers',
      'Apparel Exporters',
      'Apparel Brands',
      'Buying Houses & International Sourcing Offices',
      'Buying Agents',
      'Fashion Labels',
      'Design Studios',
      'Fashion Designers',
      'Importers, Distributors & Wholesalers',
      'Intimate & Undergarments Brands',
      'Textile Manufacturers & Exporters',
      'Government & Trade Body Representatives',
      'Apparel Retailers & E-tailers',
      'Sales & Marketing Consultants',
      'Textile Trading Houses and more'
    ],
    formatRules: [
      'Business to Business (B2B)',
      'For Trade Visitors with a Valid Business Card (By pre-registration online & on-site registration)',
      'Rights of Admission Reserved',
      'No Registration Fees',
      'Entry below 18 years will not be permitted'
    ],
    boothContacts: [
      { name: 'Marian Freiter', phone: '+91 8007525035' },
      { name: 'Prashant Savle', phone: '+91 7977343487' }
    ],
    showContacts: [
      { name: 'Zahir Merchant', phone: '+91 7506028359' },
      { name: 'Karan Solanki', phone: '+91 9833849850' }
    ],
    email: 'intexfair@worldexindia.com'
  },
  {
    id: 'FS_SL_19',
    countryCode: 'SL',
    name: 'Intex Sri Lanka',
    edition: '19th Edition',
    logo: 'https://sl.intexsouthasia.com/_next/image?url=%2Fassets%2Fimg%2Forgi.png&w=384&q=75',
    theme: 'The Premier International Textile Sourcing Show of South Asia',
    date: '04-05-06 August, 2027',
    time: '10:00 AM - 07:00 PM',
    venue: 'BMICH, Colombo, Sri Lanka',
    venueFull: 'Bandaranaike Memorial International Conference Hall (BMICH), Colombo',
    website: 'sl.intexsouthasia.com',
    pdfUrl: 'https://sl.intexsouthasia.com/assets/pdf/Brochure.pdf',
    regUrl: 'https://portal.intexfair.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=sl',
    timings: [
      { date: '04 August', day: 'Wednesday', hours: '10.00 a.m. - 7.00 p.m.' },
      { date: '05 August', day: 'Thursday', hours: '10.00 a.m. - 7.00 p.m.' },
      { date: '06 August', day: 'Friday', hours: '10.00 a.m. - 6.00 p.m.' }
    ],
    highlights: [
      'Grand Opening Ceremony',
      'Country Pavilions',
      'Domestic + International Exhibitors',
      'Innovation & Trends Showcase',
      'Interactive Business Forum Seminar Series',
      'Textile Fashion Week',
      'Buyer Delegations + International Hosted Buyers',
      'Networking Reception',
      'Trade Media Corner',
      'VIP Platinum Lounge for B2B Meetings'
    ],
    countries: [
      'India', 'Sri Lanka', 'Bangladesh', 'Thailand', 'Indonesia', 'Malaysia', 
      'Vietnam', 'China', 'Korea', 'Taiwan', 'Hong Kong', 'Turkey', 
      'Italy', 'UK', 'Egypt', 'USA', 'and more...'
    ],
    categories: [
      'Fibres', 'Yarns', 'Apparel Fabrics', 'Denim Fabrics', 
      'Clothing Accessories', 'Design Studios', 'Trends & Fashion Forecasters', 'Allied Services', 'and more...'
    ],
    buyerProfiles: [
      'Apparel Manufacturers',
      'Apparel Exporters',
      'Apparel Brands',
      'Buying Houses & International Sourcing Offices',
      'Buying Agents',
      'Fashion Labels',
      'Design Studios',
      'Fashion Designers',
      'Importers, Distributors & Wholesalers',
      'Intimate & Undergarments Brands',
      'Textile Manufacturers & Exporters',
      'Government & Trade Body Representatives',
      'Apparel Retailers & E-tailers',
      'Sales & Marketing Consultants',
      'Textile Trading Houses and more'
    ],
    formatRules: [
      'Business to Business (B2B)',
      'For Trade Visitors with a Valid Business Card (By pre-registration online & on-site registration)',
      'Rights of Admission Reserved',
      'No Registration Fees',
      'Entry below 18 years will not be permitted'
    ],
    boothContacts: [
      { name: 'Marian Freiter', phone: '+91 8007525035' },
      { name: 'Prashant Savle', phone: '+91 7977343487' }
    ],
    showContacts: [
      { name: 'Zahir Merchant', phone: '+91 7506028359' },
      { name: 'Karan Solanki', phone: '+91 9833849850' }
    ],
    email: 'intexfair@worldexindia.com'
  },
  {
    id: 'FS_IN_17',
    countryCode: 'IN',
    name: 'Intex India',
    edition: '17th Edition',
    logo: 'https://sl.intexsouthasia.com/_next/image?url=%2Fassets%2Fimg%2Forgi.png&w=384&q=75',
    theme: 'The Premier International Textile Sourcing Show of South Asia',
    date: '03-04-05 December, 2026',
    time: '10:00 AM - 07:00 PM',
    venue: 'IICC, New Delhi, India',
    venueFull: 'Yashobhoomi (IICC), Dwarka, New Delhi',
    website: 'in.intexsouthasia.com',
    pdfUrl: 'https://in.intexsouthasia.com/assets/pdf/Brochure.pdf',
    regUrl: 'https://portal.intexfair.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=in',
    timings: [
      { date: '03 December', day: 'Thursday', hours: '10.00 a.m. - 7.00 p.m.' },
      { date: '04 December', day: 'Friday', hours: '10.00 a.m. - 7.00 p.m.' },
      { date: '05 December', day: 'Saturday', hours: '10.00 a.m. - 6.00 p.m.' }
    ],
    highlights: [
      'Grand Opening Ceremony',
      'Country Pavilions',
      'Domestic + International Exhibitors',
      'Innovation & Trends Showcase',
      'Interactive Business Forum Seminar Series',
      'Buyer Delegations + International Hosted Buyers',
      'Networking & B2B Matchmaking',
      'Trade Media Corner',
      'VIP Platinum Lounge for B2B Meetings'
    ],
    countries: [
      'India', 'Sri Lanka', 'Bangladesh', 'Thailand', 'Indonesia', 'Malaysia', 
      'Vietnam', 'China', 'Korea', 'Taiwan', 'Hong Kong', 'Turkey', 
      'Italy', 'UK', 'Egypt', 'USA', 'and more...'
    ],
    categories: [
      'Fibres', 'Yarns', 'Apparel Fabrics', 'Denim Fabrics', 
      'Clothing Accessories', 'Design Studios', 'Trends & Fashion Forecasters', 'Allied Services', 'and more...'
    ],
    buyerProfiles: [
      'Apparel Manufacturers',
      'Apparel Exporters',
      'Apparel Brands',
      'Buying Houses & International Sourcing Offices',
      'Buying Agents',
      'Fashion Labels',
      'Design Studios',
      'Fashion Designers',
      'Importers, Distributors & Wholesalers',
      'Intimate & Undergarments Brands',
      'Textile Manufacturers & Exporters',
      'Government & Trade Body Representatives',
      'Apparel Retailers & E-tailers',
      'Sales & Marketing Consultants',
      'Textile Trading Houses and more'
    ],
    formatRules: [
      'Business to Business (B2B)',
      'For Trade Visitors with a Valid Business Card (By pre-registration online & on-site registration)',
      'Rights of Admission Reserved',
      'No Registration Fees',
      'Entry below 18 years will not be permitted'
    ],
    boothContacts: [
      { name: 'Marian Freiter', phone: '+91 8007525035' },
      { name: 'Prashant Savle', phone: '+91 7977343487' }
    ],
    showContacts: [
      { name: 'Zahir Merchant', phone: '+91 7506028359' },
      { name: 'Karan Solanki', phone: '+91 9833849850' }
    ],
    email: 'intexfair@worldexindia.com'
  }
];

const FactsheetPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('ALL');

  const filteredShows = selectedTab === 'ALL' 
    ? FACTSHEET_DATA 
    : FACTSHEET_DATA.filter(item => item.countryCode === selectedTab);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-archive-charcoal/10 pb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              FACT <br />
              <span className="text-white">SHEETS.</span>
            </h1>
          </div>

          {/* Show Switcher Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/60 p-2 border border-archive-charcoal/10 rounded-sm">
            <button
              onClick={() => setSelectedTab('ALL')}
              className={`px-6 py-3 text-[12px] font-black tracking-[0.14em] transition-all uppercase ${
                selectedTab === 'ALL'
                  ? 'bg-archive-charcoal text-white shadow-md'
                  : 'text-archive-charcoal/60 hover:text-archive-charcoal hover:bg-black/5'
              }`}
            >
              All Shows
            </button>
            <button
              onClick={() => setSelectedTab('BD')}
              className={`px-6 py-3 text-[12px] font-black tracking-[0.14em] transition-all uppercase ${
                selectedTab === 'BD'
                  ? 'bg-archive-clay text-white shadow-md'
                  : 'text-archive-charcoal/60 hover:text-archive-charcoal hover:bg-black/5'
              }`}
            >
              Bangladesh
            </button>
            <button
              onClick={() => setSelectedTab('SL')}
              className={`px-6 py-3 text-[12px] font-black tracking-[0.14em] transition-all uppercase ${
                selectedTab === 'SL'
                  ? 'bg-archive-clay text-white shadow-md'
                  : 'text-archive-charcoal/60 hover:text-archive-charcoal hover:bg-black/5'
              }`}
            >
              Sri Lanka
            </button>
            <button
              onClick={() => setSelectedTab('IN')}
              className={`px-6 py-3 text-[12px] font-black tracking-[0.14em] transition-all uppercase ${
                selectedTab === 'IN'
                  ? 'bg-archive-clay text-white shadow-md'
                  : 'text-archive-charcoal/60 hover:text-archive-charcoal hover:bg-black/5'
              }`}
            >
              India
            </button>
          </div>
        </div>
      </section>

      {/* Factsheet Cards */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-16">
          {filteredShows.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="bg-white border border-archive-charcoal/10 shadow-xl overflow-hidden group"
            >
              {/* Card Header Banner */}
              <div className="bg-archive-charcoal text-white p-6 md:p-8 border-b border-white/10">
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none">
                  {item.name}
                </h2>
                <p className="text-[12px] font-bold tracking-[0.14em] text-white/60 uppercase mt-2">
                  {item.theme}
                </p>
              </div>

              {/* Main Card Body Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Logo & Main Actions */}
                <div className="lg:col-span-3 bg-archive-cream/40 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-archive-charcoal/10 flex flex-col justify-between space-y-8">
                  <div className="space-y-8">
                    {/* Official Logo Box */}
                    <div className="bg-white p-6 border border-archive-charcoal/10 shadow-sm flex items-center justify-center min-h-[160px]">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="max-w-full h-auto max-h-28 object-contain"
                      />
                    </div>

                    {/* Venue & Date Summary */}
                    <div className="space-y-4 text-archive-charcoal">
                      <div className="flex items-start gap-3">
                        <Calendar size={18} className="text-archive-clay mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[11px] font-black tracking-[0.14em] text-archive-charcoal/50 block uppercase">Dates</span>
                          <span className="text-[14px] font-black tracking-[0.035em] uppercase">{item.date}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-archive-clay mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[11px] font-black tracking-[0.14em] text-archive-charcoal/50 block uppercase">Venue</span>
                          <span className="text-[13px] font-bold tracking-[0.035em] leading-snug uppercase block">{item.venueFull}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA Buttons */}
                  <div className="space-y-3 pt-6 border-t border-archive-charcoal/10">
                    <a
                      href={item.regUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-archive-clay text-white py-4 px-6 text-[12px] font-black tracking-[0.21em] hover:bg-archive-charcoal transition-all flex items-center justify-between group/btn shadow-md uppercase"
                    >
                      REGISTER NOW <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border border-archive-charcoal/30 text-archive-charcoal py-4 px-6 text-[12px] font-black tracking-[0.21em] hover:bg-archive-charcoal hover:text-white transition-all flex items-center justify-between group/btn uppercase"
                    >
                      DOWNLOAD PDF <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Complete PDF Content Details */}
                <div className="lg:col-span-9 p-8 md:p-12 space-y-12 bg-white">
                  
                  {/* 1. Exhibition Timings Breakdown Table */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-archive-clay"></div>
                      <span className="text-[12px] font-black tracking-[0.21em] text-archive-clay uppercase">
                        Exhibition Timings & Schedule
                      </span>
                    </div>
                    <div className="overflow-x-auto border border-archive-charcoal/10">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-archive-charcoal text-white text-[12px] font-black tracking-[0.14em] uppercase border-b border-archive-charcoal/10">
                            <th className="py-3.5 px-6 border-r border-white/10">Fair Dates</th>
                            <th className="py-3.5 px-6 border-r border-white/10">Fair Days</th>
                            <th className="py-3.5 px-6">Opening Hours</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-archive-charcoal/10 text-[13px] font-bold text-archive-charcoal/80">
                          {item.timings.map((t, tIdx) => (
                            <tr key={tIdx} className={tIdx % 2 === 0 ? 'bg-white' : 'bg-archive-cream/30'}>
                              <td className="py-3.5 px-6 border-r border-archive-charcoal/10 font-black tracking-[0.035em] uppercase">{t.date}</td>
                              <td className="py-3.5 px-6 border-r border-archive-charcoal/10 tracking-[0.035em] uppercase">{t.day}</td>
                              <td className="py-3.5 px-6 tracking-[0.035em] uppercase text-archive-clay font-black">{t.hours}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 2. Show Highlights */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-archive-clay"></div>
                      <span className="text-[12px] font-black tracking-[0.21em] text-archive-clay uppercase">
                        Show Highlights
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3 p-3.5 bg-archive-cream/60 rounded-sm">
                          <CheckCircle2 size={15} className="text-archive-clay shrink-0 mt-0.5" />
                          <span className="text-[12px] font-bold tracking-[0.035em] text-archive-charcoal/80 leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Major Exhibiting Countries / Regions */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-archive-clay"></div>
                      <span className="text-[12px] font-black tracking-[0.21em] text-archive-clay uppercase">
                        Major Exhibiting Countries / Regions
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.countries.map((country, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="px-4 py-2.5 bg-archive-charcoal/5 text-archive-charcoal text-[12px] font-bold tracking-[0.035em] rounded-sm"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4. Major Exhibiting Categories */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-archive-clay"></div>
                      <span className="text-[12px] font-black tracking-[0.21em] text-archive-clay uppercase">
                        Major Exhibiting Categories
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.categories.map((cat, catIdx) => (
                        <span 
                          key={catIdx} 
                          className="px-4 py-2.5 bg-archive-clay/10 text-archive-clay font-black text-[12px] tracking-[0.035em] rounded-sm"
                        >
                          ◆ {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 5. Buyers' Profile */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-archive-clay"></div>
                      <span className="text-[12px] font-black tracking-[0.21em] text-archive-clay uppercase">
                        Buyers' Profile
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {item.buyerProfiles.map((buyer, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-3 p-3 bg-archive-cream/50 text-[12px] font-bold tracking-[0.035em] text-archive-charcoal/80 rounded-sm">
                          <div className="w-1.5 h-1.5 bg-archive-clay shrink-0 rotate-45"></div>
                          <span>{buyer}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 6. Exhibition Format & Guidelines */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-archive-clay"></div>
                      <span className="text-[12px] font-black tracking-[0.21em] text-archive-clay uppercase">
                        Exhibition Format & Admission
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.formatRules.map((rule, rIdx) => (
                        <div key={rIdx} className="p-4 bg-archive-charcoal text-white rounded-sm space-y-1">
                          <div className="flex items-center gap-2 text-archive-clay font-black text-[11px] tracking-[0.14em] uppercase">
                            <ShieldCheck size={14} /> Rule #{rIdx + 1}
                          </div>
                          <p className="text-[12px] font-bold tracking-[0.035em] text-white/90 leading-snug">
                            {rule}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 7. Contact Information for Participation & Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {/* For Booth Participation */}
                    <div className="p-6 bg-archive-cream/40 border border-archive-charcoal/10 space-y-4">
                      <div className="flex items-center gap-3 pb-3 border-b border-archive-charcoal/10">
                        <Building2 size={18} className="text-archive-clay" />
                        <h4 className="text-[13px] font-black tracking-[0.14em] text-archive-charcoal uppercase">
                          For Booth Participation
                        </h4>
                      </div>
                      <div className="space-y-3">
                        {item.boothContacts.map((c, cIdx) => (
                          <div key={cIdx} className="flex items-center justify-between text-[12px] font-bold tracking-[0.035em]">
                            <span className="text-archive-charcoal/70">{c.name}:</span>
                            <a href={`tel:${c.phone}`} className="text-archive-clay hover:underline font-black">
                              {c.phone}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* For Show Information */}
                    <div className="p-6 bg-archive-cream/40 border border-archive-charcoal/10 space-y-4">
                      <div className="flex items-center gap-3 pb-3 border-b border-archive-charcoal/10">
                        <Mail size={18} className="text-archive-clay" />
                        <h4 className="text-[13px] font-black tracking-[0.14em] text-archive-charcoal uppercase">
                          For Show Information
                        </h4>
                      </div>
                      <div className="space-y-3">
                        {item.showContacts.map((c, cIdx) => (
                          <div key={cIdx} className="flex items-center justify-between text-[12px] font-bold tracking-[0.035em]">
                            <span className="text-archive-charcoal/70">{c.name}:</span>
                            <a href={`tel:${c.phone}`} className="text-archive-clay hover:underline font-black">
                              {c.phone}
                            </a>
                          </div>
                        ))}
                        <div className="pt-2 border-t border-archive-charcoal/10 flex items-center justify-between text-[12px] font-bold tracking-[0.035em]">
                          <span className="text-archive-charcoal/70">Email Us:</span>
                          <a href={`mailto:${item.email}`} className="text-archive-clay hover:underline font-black">
                            {item.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FactsheetPage;

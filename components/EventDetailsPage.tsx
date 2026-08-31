import React from 'react';
import { ArrowLeft, MapPin, Calendar, Building2, CheckCircle2, Users, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../constants';

interface EventData {
  id: string;
  title: string;
  subtitle: string;
  edition: string;
  date: string;
  location: string;
  venue: string;
  country: string;
  imageUrl: string;
  region: string;
  overview: string;
  stats: {
    exhibitors: string;
    buyers: string;
    countries: string;
    categories: string;
  };
  exhibitorBenefits: string[];
  buyerBenefits: string[];
}

const EVENTS_DATABASE: Record<string, EventData> = {
  'ex-bg': {
    id: 'ex-bg',
    title: 'Intex Bangladesh',
    subtitle: 'The Premier International Textile Sourcing Show of South Asia',
    edition: '17th Edition',
    date: '22-23-24 June, 2027',
    location: 'Dhaka, Bangladesh',
    venue: 'International Convention City Bashundhara (ICCB)',
    country: 'Bangladesh',
    imageUrl: '/assets/bangladesh.png',
    region: 'Intex South Asia',
    overview: 'Intex Bangladesh is the leading international textile sourcing exhibition connecting global suppliers with Bangladesh’s USD 45+ Billion garment manufacturing industry. Bringing together international suppliers of yarns, fabrics, denim, and apparel accessories with major ready-made garment (RMG) exporters, global buying houses, and fashion brands.',
    stats: {
      exhibitors: '350+',
      buyers: '14,000+',
      countries: '18+',
      categories: '08'
    },
    exhibitorBenefits: [
      'Direct access to Bangladesh RMG export leaders and decision-makers',
      'Pre-scheduled B2B matchmaking meetings with verified international buyers',
      'Showcase latest textile innovations to top apparel brand sourcing heads',
      'Expand market share in one of the world’s fastest-growing garment hubs'
    ],
    buyerBenefits: [
      'Source high-quality fibers, yarns, and fabrics from global manufacturers',
      'Discover sustainable, eco-certified, and recycled textile products',
      'Connect with international suppliers offering competitive order terms',
      'Gain market insights at the Intex Business Forum (IBF) seminars'
    ]
  },
  'ex-sl': {
    id: 'ex-sl',
    title: 'Intex Sri Lanka',
    subtitle: 'The Strategic Textile & Sourcing Marketplace of South Asia',
    edition: '17th Edition',
    date: '4-5-6 August 2027',
    location: 'Colombo, Sri Lanka',
    venue: 'Bandaranaike Memorial International Conference Hall (BMICH)',
    country: 'Sri Lanka',
    imageUrl: '/assets/sri lanka.jpg.jpeg',
    region: 'Intex South Asia',
    overview: 'Intex Sri Lanka serves as the primary international sourcing bridge for Sri Lanka’s high-value ethical apparel manufacturing sector. Renowned for premium lingerie, sportswear, activewear, and sustainable apparel, Intex Sri Lanka brings global fabric and yarn innovators directly to Sri Lankan apparel giants.',
    stats: {
      exhibitors: '250+',
      buyers: '9,500+',
      countries: '15+',
      categories: '08'
    },
    exhibitorBenefits: [
      'Partner with Sri Lanka’s top ethical apparel exporters',
      'Target niche, high-value activewear and intimate apparel manufacturers',
      'Network with regional sourcing heads from USA, EU, and UK apparel brands',
      'Promote high-margin functional and technical fabric collections'
    ],
    buyerBenefits: [
      'Access premium technical, functional, and sustainable textiles',
      'Meet certified international suppliers adhering to ESG compliance',
      'Streamline supply chain lead times with direct manufacturer contracts',
      'Attend technical workshops on future textile trends'
    ]
  },
  'ex-in': {
    id: 'ex-in',
    title: 'Intex India',
    subtitle: 'The Gateway to India’s USD 150+ Billion Textile & Apparel Ecosystem',
    edition: '17th Edition',
    date: 'Announcing Soon',
    location: 'New Delhi, India',
    venue: 'Pragati Maidan Exhibition Centre',
    country: 'India',
    imageUrl: '/assets/india.jpg.jpeg',
    region: 'Intex South Asia',
    overview: 'Intex India is the flagship trade exhibition uniting international yarn, fabric, and accessory manufacturers with India’s massive domestic market and booming export sectors. Held in New Delhi, the event attracts top retail chains, garment manufacturers, brand owners, and international buying offices.',
    stats: {
      exhibitors: '400+',
      buyers: '18,000+',
      countries: '22+',
      categories: '08'
    },
    exhibitorBenefits: [
      'Capitalize on India’s booming domestic apparel retail market',
      'Connect with major Indian garment export conglomerates',
      'Establish distribution networks across North & West India',
      'Leverage national trade association partnerships'
    ],
    buyerBenefits: [
      'Evaluate comprehensive fabric and yarn collections under one roof',
      'Negotiate direct factory prices with global textile mills',
      'Discover innovative sustainable fabric blends and finishes',
      'Participate in exclusive VIP buyer lounge networking'
    ]
  },
  'ex-id': {
    id: 'ex-id',
    title: 'Intex Indonesia',
    subtitle: 'Expanding Intex Horizons into South-East Asia’s Apparel Hub',
    edition: '1st Edition',
    date: 'Announcing Soon',
    location: 'Jakarta, Indonesia',
    venue: 'Jakarta International Expo (JIExpo)',
    country: 'Indonesia',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000',
    region: 'Intex Asia',
    overview: 'Intex Indonesia marks the landmark expansion of the Intex global footprint into ASEAN’s largest economy. Designed to connect global textile manufacturers with Indonesia’s rapidly growing garment manufacturing ecosystem, connecting international suppliers with regional apparel brands, mills, and trading houses.',
    stats: {
      exhibitors: '200+',
      buyers: '8,000+',
      countries: '12+',
      categories: '08'
    },
    exhibitorBenefits: [
      'First-mover advantage in South-East Asia’s premier new sourcing hub',
      'Connect with Indonesian garment factories supplying global markets',
      'Establish brand presence in the ASEAN regional corridor',
      'Tap into growing ASEAN intra-regional textile trade'
    ],
    buyerBenefits: [
      'First access to international fabric mills expanding in South-East Asia',
      'Discover competitive sourcing partners for MMF and technical textiles',
      'Establish direct supply contracts ahead of official regional launches',
      'Bespoke match-making service for international buying delegations'
    ]
  }
};

interface EventDetailsPageProps {
  eventId?: string;
}

const EventDetailsPage: React.FC<EventDetailsPageProps> = ({ eventId = 'ex-bg' }) => {
  const navigate = useNavigate();
  const event = EVENTS_DATABASE[eventId] || EVENTS_DATABASE['ex-bg'];

  const handleExhibitorClick = () => {
    navigate('/#exhibitor-profile');
    window.scrollTo(0, 0);
  };

  const handleBuyerClick = () => {
    navigate('/#buyers-profile');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-28 pb-32">
      {/* Top Back Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-10">
        <button
          onClick={() => {
            navigate('/#exhibitions');
            window.scrollTo(0, 0);
          }}
          className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-widest text-archive-clay hover:text-archive-charcoal transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Exhibitions</span>
        </button>
      </div>

      {/* Hero Header Section - Clean & Borderless */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20">
        <div className="relative rounded-2xl overflow-hidden min-h-[480px] bg-archive-charcoal flex flex-col justify-end p-8 md:p-16">
          {/* Hero Image Overlay */}
          <img
            src={event.imageUrl}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161414] via-[#161414]/70 to-transparent" />

          {/* Hero Information */}
          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="flex items-center gap-3 text-xs font-mono font-black text-archive-clay uppercase tracking-widest">
              <span>{event.edition}</span>
              <span>•</span>
              <span>{event.region}</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
              {event.title}
            </h1>

            <p className="text-base md:text-xl font-medium text-white/80 leading-relaxed max-w-3xl">
              {event.subtitle}
            </p>

            {/* Event Meta Details Line */}
            <div className="flex flex-wrap items-center gap-8 pt-4 text-xs font-bold text-white/90 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-archive-clay" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-archive-clay" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Building2 size={14} />
                <span>{event.venue}</span>
              </div>
            </div>

            {/* Direct Navigation Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={handleExhibitorClick}
                className="px-8 py-4 bg-archive-clay hover:bg-white text-white hover:text-archive-charcoal transition-all duration-300 font-black text-xs uppercase tracking-[0.2em] rounded flex items-center gap-3 group"
              >
                <span>EXHIBITOR PROFILE & ENQUIRY</span>
                <div className="w-6 h-6 bg-white/20 group-hover:bg-archive-clay group-hover:text-white rounded flex items-center justify-center transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </button>

              <button
                onClick={handleBuyerClick}
                className="px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-archive-charcoal transition-all duration-300 font-black text-xs uppercase tracking-[0.2em] rounded backdrop-blur-sm flex items-center gap-3 group"
              >
                <span>BUYER PROFILE & REGISTRATION</span>
                <div className="w-6 h-6 bg-archive-clay text-white rounded flex items-center justify-center transition-colors">
                  <Users size={14} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Overview Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px] bg-archive-clay" />
          <span className="text-xs font-mono font-black text-archive-clay tracking-[0.3em] uppercase">Event Brief</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <h2 className="lg:col-span-5 text-3xl md:text-4xl font-black text-archive-charcoal uppercase leading-tight">
            Strategic Textile Marketplace
          </h2>
          <p className="lg:col-span-7 text-base md:text-lg text-archive-charcoal/80 leading-relaxed font-normal">
            {event.overview}
          </p>
        </div>
      </section>

      {/* Product Categories - Uses Exact CATEGORIES Data from /#exhibitor-profile */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24 space-y-12">
        <div className="border-b border-archive-charcoal/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-archive-clay" />
              <span className="text-xs font-mono font-black text-archive-clay tracking-[0.3em] uppercase">Sourcing Categories</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-archive-charcoal uppercase tracking-tight">
              Exhibitor Profile Categories
            </h3>
          </div>
        </div>

        {/* Categories Grid (Matching ExhibitorProfilePage /#exhibitor-profile style & content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white group relative overflow-hidden flex flex-col h-full rounded-xl shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Layer */}
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-black shrink-0">
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-full object-cover brightness-50 group-hover:scale-110 group-hover:brightness-[0.35] transition-all duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal via-transparent to-transparent opacity-60"></div>

                {/* Tech Number Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-black/40 backdrop-blur-md flex items-center justify-center rounded">
                    <span className="text-xs font-mono font-black text-white">{(idx + 1).toString().padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight group-hover:text-archive-clay transition-colors">
                    {cat.title}
                  </h4>
                </div>
              </div>

              {/* Content Layer */}
              <div className="p-6 bg-white group-hover:bg-archive-charcoal transition-all duration-500 flex-1">
                <p className="text-xs font-medium leading-relaxed text-archive-charcoal/70 group-hover:text-white/80 line-clamp-3">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Exhibit & Why Visit */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-8 border-t border-archive-charcoal/15">
          {/* Exhibitor Section */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-black text-archive-clay uppercase tracking-widest block">
                FOR EXHIBITORS
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-archive-charcoal uppercase">
                Why Exhibit at {event.title}?
              </h3>
            </div>

            <div className="space-y-4">
              {event.exhibitorBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm font-medium text-archive-charcoal/80">
                  <CheckCircle2 size={16} className="text-archive-clay shrink-0 mt-1" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleExhibitorClick}
              className="px-8 py-4 bg-archive-clay hover:bg-archive-charcoal text-white transition-colors font-black text-xs uppercase tracking-[0.2em] rounded flex items-center gap-3 group"
            >
              <span>EXPLORE EXHIBITOR PROFILE</span>
              <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </button>
          </div>

          {/* Visitor Section */}
          <div className="space-y-8 lg:border-l lg:border-archive-charcoal/10 lg:pl-16">
            <div className="space-y-3">
              <span className="text-xs font-mono font-black text-archive-clay uppercase tracking-widest block">
                FOR TRADE BUYERS
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-archive-charcoal uppercase">
                Why Visit {event.title}?
              </h3>
            </div>

            <div className="space-y-4">
              {event.buyerBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm font-medium text-archive-charcoal/80">
                  <CheckCircle2 size={16} className="text-archive-clay shrink-0 mt-1" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleBuyerClick}
              className="px-8 py-4 bg-archive-charcoal text-white transition-colors font-black text-xs uppercase tracking-[0.2em] rounded flex items-center gap-3 group"
            >
              <span>EXPLORE BUYERS PROFILE</span>
              <div className="w-6 h-6 bg-archive-clay rounded flex items-center justify-center">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailsPage;

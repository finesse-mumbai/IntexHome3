import React, { useState, useRef } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Users, 
  ArrowUpRight, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  videoUrl?: string;
  region: string;
  overview: string;
  whyTitle?: string;
  headline?: string;
  paragraphs?: string[];
  keyTakeaway?: string;
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
    videoUrl: '/assets/website video intex  Copy 03.mp4',
    region: 'Intex South Asia',
    overview: 'Bangladesh is one of the defining forces in global apparel manufacturing. Built on an immense production ecosystem and a formidable export industry, the country is entering its next chapter—one shaped by diversification, higher-value manufacturing and an evolving role in the global textile supply chain.',
    whyTitle: 'WHY INTEX BANGLADESH',
    headline: 'BE WHERE THE WORLD’S APPAREL INDUSTRY IS BEING MADE.',
    paragraphs: [
      'Bangladesh is one of the defining forces in global apparel manufacturing. Built on an immense production ecosystem and a formidable export industry, the country is entering its next chapter—one shaped by diversification, higher-value manufacturing and an evolving role in the global textile supply chain.',
      'For businesses looking to understand where global apparel production is headed, Bangladesh is more than a manufacturing destination. Bangladesh Apparel exports reached US$38.7 billion in FY2025–26, with an industry ambition of US$100 billion in RMG exports by 2035. It is a market where the next generation of textile demand is taking shape. Through its established presence in Bangladesh, Intex brings the market into a wider international sourcing conversation, strengthening the connections that support new opportunities, industry growth and cross-border trade.'
    ],
    keyTakeaway: 'Bangladesh: Where manufacturing scale meets the next wave of textile opportunity.',
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
    videoUrl: '/assets/website video intex  Copy 03.mp4',
    region: 'Intex South Asia',
    overview: 'Sri Lanka has carved out a distinctive place in global apparel manufacturing through quality, responsible production, technical expertise and a strong culture of innovation. Its strength lies in moving beyond volume to create specialised, higher-value products for an increasingly demanding global market.',
    whyTitle: 'WHY INTEX SRI LANKA',
    headline: 'A MARKET DEFINED BY WHAT IT CAN CREATE, NOT JUST WHAT IT CAN PRODUCE.',
    paragraphs: [
      'Sri Lanka has carved out a distinctive place in global apparel manufacturing through quality, responsible production, technical expertise and a strong culture of innovation. Its strength lies in moving beyond volume to create specialised, higher-value products for an increasingly demanding global market.',
      'Sri Lankan Apparel exports generated approximately US$5.05 billion in 2024, with the industry targeting US$7 billion by 2030. As the industry pursues its next phase of growth, innovation, sustainability and deeper value-chain integration are becoming even more important. Intex Sri Lanka has grown alongside this evolution, connecting the market to a wider international textile ecosystem and reinforcing its place in South Asia’s sourcing landscape.',
      'For businesses looking beyond scale towards specialisation, Sri Lanka offers a compelling story of manufacturing excellence and future-ready growth.'
    ],
    keyTakeaway: 'Sri Lanka: Where quality, innovation and responsible manufacturing converge.',
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
    videoUrl: '/assets/website video intex  Copy 03.mp4',
    region: 'Intex South Asia',
    overview: 'Few markets bring together the breadth, depth and diversity of India’s textile ecosystem. From its rich manufacturing heritage to emerging material technologies, expanding domestic demand and growing global ambitions, India is shaping a new chapter in textile and apparel development.',
    whyTitle: 'WHY INTEX INDIA',
    headline: 'THE FUTURE OF TEXTILES WILL BE SUSTAINABLE. FASHIONABLE. FUNCTIONAL.',
    paragraphs: [
      'Few markets bring together the breadth, depth and diversity of India’s textile ecosystem. From its rich manufacturing heritage to emerging material technologies, expanding domestic demand and growing global ambitions, India is shaping a new chapter in textile and apparel development. The domestic textile and apparel market is projected to grow from approximately US$147 billion in FY2024–25 to US$250 billion by 2030.',
      'But the opportunity is no longer defined by scale alone. The industry is evolving towards materials and products that are sustainable in their impact, fashionable in their appeal and functional in their performance. This is where India’s next growth story takes shape—and where Intex India finds its relevance.',
      'As part of the wider Intex South Asia network, Intex India reflects a market moving forward: embracing innovation, responding to changing demand and strengthening its role in the global textile economy.'
    ],
    keyTakeaway: 'India: Where material innovation meets the next generation of textile demand.',
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
    venue: 'Jakarta International Expo (JIExpo) Kemayoran, Jakarta, Indonesia',
    country: 'Indonesia',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000',
    videoUrl: '/assets/website video intex  Copy 03.mp4',
    region: 'Intex ASEAN',
    overview: 'Indonesia represents the powerhouse of the ASEAN economy, driven by immense domestic industrial consumption, robust infrastructure development, and a rapidly expanding apparel manufacturing sector.',
    whyTitle: 'WHY INTEX INDONESIA',
    headline: 'THE NEW FRONTIER OF ASEAN TEXTILE & APPAREL EXPANSION.',
    paragraphs: [
      'Indonesia represents the powerhouse of the ASEAN economy, driven by immense domestic industrial consumption, robust infrastructure development, and a rapidly expanding apparel manufacturing sector.',
      'As global brands and manufacturers seek diversified sourcing hubs across South-East Asia, Intex Indonesia provides direct access to Indonesia\'s premier mills, factories, and trade associations.'
    ],
    keyTakeaway: 'Indonesia: Where regional ASEAN manufacturing power connects with global sourcing.',
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
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const event = EVENTS_DATABASE[eventId] || EVENTS_DATABASE['ex-bg'];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleExhibitorClick = () => {
    const eventParam =
      eventId === 'ex-bd' ? 'bangladesh' :
      eventId === 'ex-sl' ? 'srilanka' :
      eventId === 'ex-in' ? 'india' :
      eventId === 'ex-id' ? 'indonesia' : 'srilanka';
    navigate(`/#enquiry-form?event=${eventParam}`);
    window.scrollTo(0, 0);
  };

  const handleBuyerClick = () => {
    const countryCode =
      eventId === 'ex-bd' ? 'bd' :
      eventId === 'ex-in' ? 'in' :
      eventId === 'ex-id' ? 'id' : 'sl';
    navigate(`/#buyer-registration?country=${countryCode}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#FAF8F5] text-archive-charcoal min-h-screen pt-28 pb-32">
      {/* 1. Sleek Navigation Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-archive-charcoal/10">
          <button
            onClick={() => {
              navigate('/#exhibitions');
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.15em] text-archive-charcoal hover:text-archive-clay transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform text-archive-clay stroke-[2.5]" />
            <span>Back to All Exhibitions</span>
          </button>
        </div>
      </div>

      {/* 2. Hero Cinematic Video & Event Identity Showcase */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16">
        <div className="space-y-10">
          {/* Autoplay Highlight Video Container */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-video max-h-[560px] w-full bg-black shadow-2xl group">
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/website video intex  Copy 03.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/20" />


            {/* Audio Toggle Control */}
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute highlight video" : "Mute highlight video"}
              className="absolute bottom-5 right-5 h-11 px-4 rounded-full bg-black/75 hover:bg-archive-clay text-white backdrop-blur-md flex items-center gap-2.5 transition-all text-xs font-bold tracking-wider uppercase shadow-xl group-hover:scale-105"
            >
              {isMuted ? (
                <>
                  <VolumeX size={16} className="text-white stroke-[2.5]" />
                  <span className="hidden sm:inline">Unmute Audio</span>
                </>
              ) : (
                <>
                  <Volume2 size={16} className="text-emerald-400 stroke-[2.5]" />
                  <span className="hidden sm:inline text-emerald-400">Audio Active</span>
                </>
              )}
            </button>
          </div>

          {/* Master Event Identity & Actions Grid */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Edition, Title & Subtitle */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-archive-clay/10 text-archive-clay text-xs font-bold tracking-wider uppercase rounded">
                    {event.edition}
                  </span>
                  <span className="text-archive-charcoal/40 text-xs">•</span>
                  <span className="text-xs font-bold tracking-wider uppercase text-archive-charcoal">
                    {event.region}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-archive-charcoal uppercase tracking-tight leading-[0.95]">
                  {event.title}
                </h1>

                <p className="text-base md:text-xl font-medium text-archive-charcoal leading-relaxed max-w-2xl">
                  {event.subtitle}
                </p>
              </div>

              {/* Right Column: CTA Action Buttons */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
                <button
                  onClick={handleExhibitorClick}
                  className="w-full py-4 px-8 bg-archive-clay hover:bg-archive-charcoal text-white transition-all duration-300 font-bold text-xs uppercase tracking-[0.2em] rounded-xl flex items-center justify-between group shadow-sm hover:shadow-lg"
                >
                  <span>EXHIBITOR ENQUIRY</span>
                  <div className="w-7 h-7 bg-white/20 group-hover:bg-archive-clay rounded-lg flex items-center justify-center transition-colors">
                    <ArrowUpRight size={16} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
                  </div>
                </button>

                <button
                  onClick={handleBuyerClick}
                  className="w-full py-4 px-8 bg-archive-charcoal hover:bg-archive-clay text-white transition-all duration-300 font-bold text-xs uppercase tracking-[0.2em] rounded-xl flex items-center justify-between group shadow-sm hover:shadow-lg"
                >
                  <span>BUYER REGISTRATION</span>
                  <div className="w-7 h-7 bg-white/10 group-hover:bg-archive-charcoal rounded-lg flex items-center justify-center transition-colors">
                    <Users size={16} className="text-white stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>

            {/* Event Meta Specifications Ribbon */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 mt-8 border-t border-archive-charcoal/10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] flex items-center justify-center shrink-0">
                  <Calendar size={20} className="text-archive-clay stroke-[2.5]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs uppercase font-bold tracking-wider text-archive-charcoal block">Dates</span>
                  <p className="text-base font-semibold text-archive-charcoal">{event.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-archive-clay stroke-[2.5]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs uppercase font-bold tracking-wider text-archive-charcoal block">Location</span>
                  <p className="text-base font-semibold text-archive-charcoal">{event.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] flex items-center justify-center shrink-0">
                  <Building2 size={20} className="text-archive-clay stroke-[2.5]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs uppercase font-bold tracking-wider text-archive-charcoal block">Official Venue</span>
                  <p className="text-base font-semibold text-archive-charcoal">{event.venue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Exhibition Metrics Band */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-xs space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-archive-charcoal block">Exhibitors</span>
            <div className="text-3xl md:text-4xl font-black text-archive-charcoal tracking-tight">
              {event.stats.exhibitors}
            </div>
            <p className="text-xs md:text-sm text-archive-charcoal font-medium">Global textile suppliers & mills</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xs space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-archive-charcoal block">Trade Buyers</span>
            <div className="text-3xl md:text-4xl font-black text-archive-clay tracking-tight">
              {event.stats.buyers}
            </div>
            <p className="text-xs md:text-sm text-archive-charcoal font-medium">Apparel exporters & buying houses</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xs space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-archive-charcoal block">Countries</span>
            <div className="text-3xl md:text-4xl font-black text-archive-charcoal tracking-tight">
              {event.stats.countries}
            </div>
            <p className="text-xs md:text-sm text-archive-charcoal font-medium">International sourcing delegations</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xs space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-archive-charcoal block">Categories</span>
            <div className="text-3xl md:text-4xl font-black text-archive-charcoal tracking-tight">
              {event.stats.categories}
            </div>
            <p className="text-xs md:text-sm text-archive-charcoal font-medium">Core textile & yarn exhibits</p>
          </div>
        </div>
      </section>

      {/* 4. Editorial Market Brief (Why Intex Regional Node) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24">
        <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-14 shadow-sm space-y-10">
          {/* Section Sub-header */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[3px] bg-archive-clay rounded" />
            <span className="text-sm md:text-base font-bold text-archive-clay tracking-[0.15em] uppercase">
              {event.whyTitle || 'Strategic Market Brief'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Headline & Takeaway Callout */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-archive-charcoal uppercase leading-[1.02] tracking-tight">
                {event.headline || 'Strategic Textile Marketplace'}
              </h2>

              {event.keyTakeaway && (
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border-l-4 border-archive-clay space-y-2.5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs uppercase font-bold text-archive-clay tracking-wider">
                    <Sparkles size={15} className="stroke-[2.5]" />
                    <span>Key Market Thesis</span>
                  </div>
                  <p className="text-base font-semibold text-archive-charcoal leading-snug">
                    {event.keyTakeaway}
                  </p>
                </div>
              )}
            </div>

            {/* Right Detailed Paragraphs */}
            <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-archive-charcoal leading-relaxed font-normal">
              {event.paragraphs && event.paragraphs.length > 0 ? (
                event.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed font-normal text-archive-charcoal">
                    {para}
                  </p>
                ))
              ) : (
                <p className="font-normal text-archive-charcoal">{event.overview}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dual Executive Value Pillars: Exhibitors vs Buyers */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Exhibitor Advantage Card */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm flex flex-col justify-between space-y-8 relative overflow-hidden group transition-all">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-archive-clay/10 text-archive-clay font-bold text-xs uppercase tracking-wider">
                  For Exhibitors
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-archive-charcoal uppercase tracking-tight">
                Why Exhibit at {event.title}?
              </h3>

              <div className="space-y-3.5 pt-2">
                {event.exhibitorBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-sm md:text-base font-medium text-archive-charcoal leading-snug">
                    <div className="w-5 h-5 rounded-full bg-archive-clay/10 text-archive-clay flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="stroke-[2.5]" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-archive-charcoal/10">
              <button
                onClick={handleExhibitorClick}
                className="w-full py-4 px-6 bg-[#FAF8F5] hover:bg-archive-clay hover:text-white text-archive-charcoal rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Reserve Booth Space</span>
                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Sourcing Advantage Card */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm flex flex-col justify-between space-y-8 relative overflow-hidden group transition-all">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-archive-charcoal/10 text-archive-charcoal font-bold text-xs uppercase tracking-wider">
                  For Trade Buyers
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-archive-charcoal uppercase tracking-tight">
                Why Visit {event.title}?
              </h3>

              <div className="space-y-3.5 pt-2">
                {event.buyerBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-sm md:text-base font-medium text-archive-charcoal leading-snug">
                    <div className="w-5 h-5 rounded-full bg-archive-charcoal/10 text-archive-charcoal flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="stroke-[2.5]" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-archive-charcoal/10">
              <button
                onClick={handleBuyerClick}
                className="w-full py-4 px-6 bg-archive-charcoal hover:bg-archive-clay text-white rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Pre-Register as Buyer</span>
                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailsPage;


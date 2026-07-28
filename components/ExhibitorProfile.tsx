import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Exhibition {
  id: string;
  title: string;
  edition: string;
  date: string;
  location: string;
  imageUrl: string;
  category: string;
  region: 'Intex South Asia' | 'Intex Asia';
}

const SOUTH_ASIA_EXHIBITIONS: Exhibition[] = [
  {
    id: 'ex-bg',
    title: 'Intex Bangladesh',
    edition: '17th Edition',
    date: '18-19-20 June, 2026',
    location: 'ICCB, Dhaka',
    imageUrl: '/assets/bangladesh.png',
    category: 'Fibres & Yarns',
    region: 'Intex South Asia'
  },
  {
    id: 'ex-sl',
    title: 'Intex Sri Lanka',
    edition: '17th Edition',
    date: '5-6-7 August 2026',
    location: 'BMICH, Colombo',
    imageUrl: '/assets/sri lanka.jpg.jpeg',
    category: 'Fabrics & Accessories',
    region: 'Intex South Asia'
  },
  {
    id: 'ex-in',
    title: 'Intex India',
    edition: '17th Edition',
    date: 'Announcing Soon',
    location: 'New Delhi',
    imageUrl: '/assets/india.jpg.jpeg',
    category: 'Denim & Apparel',
    region: 'Intex South Asia'
  }
];

const ASIA_EXHIBITIONS: Exhibition[] = [
  {
    id: 'ex-id',
    title: 'Intex Indonesia',
    edition: '1st Edition',
    date: 'Announcing Soon',
    location: 'Jakarta',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000',
    category: 'Textiles & Apparel',
    region: 'Intex Asia'
  }
];

const TypewriterText: React.FC<{ text: string; delay?: number; deleteDelay?: number; pauseTime?: number }> = ({
  text,
  delay = 70,
  deleteDelay = 35,
  pauseTime = 1800
}) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentIndex < text.length) {
      // Typing phase
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    } else if (!isDeleting && currentIndex === text.length) {
      // Finished typing -> Pause then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting phase
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, deleteDelay);
    } else if (isDeleting && currentIndex === 0) {
      // Finished deleting -> Pause then start re-typing
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, delay, deleteDelay, pauseTime, text]);

  return (
    <span className="font-mono text-base md:text-lg lg:text-xl font-black text-archive-clay uppercase tracking-widest inline-flex items-center gap-1">
      <span>{displayedText}</span>
      <span className="inline-block w-2.5 h-5 bg-archive-clay animate-pulse ml-0.5" />
    </span>
  );
};

const ExhibitorProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-archive-cream py-24 md:py-32 overflow-hidden border-b border-archive-charcoal/10 group space-y-24" id="exhibitions">

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 space-y-24">

        {/* Section Main Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-archive-clay"></div>
            <span className="text-[14px] font-black tracking-[0.5em] text-archive-clay uppercase">Sourcing Registry</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] text-archive-charcoal uppercase">
            Upcoming <br /><span className="text-archive-clay">Exhibitions.</span>
          </h2>
        </div>

        {/* REGION 1: INTEX SOUTH ASIA */}
        <div className="space-y-8">
          {/* Subheader (No circle dot) */}
          <div className="flex items-center gap-3 border-b border-archive-charcoal/10 pb-4">
            <h3 className="text-xl md:text-2xl font-black tracking-wider text-archive-charcoal uppercase">
              Intex South Asia
            </h3>
            <span className="text-xs font-bold px-2.5 py-1 bg-archive-clay/10 text-archive-clay rounded-md uppercase tracking-widest">
              3 Shows
            </span>
          </div>

          {/* Multi-Layered Stacked Plate Background (50% Less Rounded: 32px / 28px / 24px) */}
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

            {/* Main Content Grid (No Card Ground Shadows) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 rotate-[1.3deg] skew-y-[1.3deg] p-6 md:p-12">
              {SOUTH_ASIA_EXHIBITIONS.map((ex, idx) => (
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
                        <div className="inline-block px-3 py-1 bg-archive-clay">
                          <span className="text-[14px] font-black text-white tracking-[0.2em] uppercase">{ex.edition}</span>
                        </div>
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
        </div>

        {/* REGION 2: INTEX ASIA (EXPANSION FEATURE SPOTLIGHT - CLEAN & PREMIUM) */}
        <div className="space-y-8 pt-8">
          {/* Subheader */}
          <div className="flex flex-wrap items-center gap-4 border-b border-archive-charcoal/10 pb-4">
            <h3 className="text-xl md:text-2xl font-black tracking-wider text-archive-charcoal uppercase">
              Intex Asia
            </h3>
            <TypewriterText text="NEW REGION · GLOBAL EXPANSION" delay={70} />
          </div>

          {/* Main Outer Box for Intex Asia (Clean & Premium) */}
          <div className="relative group/asiaFrame">
            {/* Subtle Directional Ground Shadow */}
            <div
              className="absolute pointer-events-none transition-all duration-500 rounded-b-2xl"
              style={{
                top: '100%',
                left: '-20px',
                width: 'calc(100% + 20px)',
                height: '140px',
                transformOrigin: 'top left',
                transform: 'skewX(-50deg)',
                background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.15) 55%, rgba(15, 23, 42, 0) 100%)',
                filter: 'blur(3px)',
                opacity: 0.95,
                zIndex: 0,
              }}
            />

            {/* Inner Content Container - Clean Matte Charcoal & Soft Halo */}
            <div className="relative z-10 bg-[#1A1818] rounded-2xl p-6 md:p-12 border border-white/10 overflow-hidden">
              {/* Soft Ambient Warm Accent Light */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-archive-clay/10 rounded-full blur-[120px] pointer-events-none" />

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 relative z-10">
                {/* Left Card: Intex Indonesia */}
                <div className="lg:col-span-5">
                  {ASIA_EXHIBITIONS.map((ex) => (
                    <motion.div
                      key={ex.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="group relative h-[520px] overflow-hidden rounded-xl bg-archive-charcoal"
                    >
                      {/* Image Layer */}
                      <img
                        src={ex.imageUrl}
                        alt={ex.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-75 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141212] via-[#141212]/60 to-transparent" />

                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold px-3 py-1 bg-archive-clay text-white uppercase tracking-widest rounded">
                            {ex.edition}
                          </span>
                          <span className="text-xs font-mono text-white/50 tracking-widest uppercase">
                            01 // NEW SHOW
                          </span>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-3">
                            <h4 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight">
                              {ex.title}
                            </h4>

                            <div className="flex items-center gap-6 pt-1 text-xs font-medium text-white/70">
                              <div>
                                <span className="text-white/40 block text-[10px] uppercase tracking-wider font-bold">Venue</span>
                                <span className="font-bold text-white flex items-center gap-1">
                                  <MapPin size={12} className="text-archive-clay" /> {ex.location}
                                </span>
                              </div>
                              <div className="w-[1px] h-6 bg-white/15" />
                              <div>
                                <span className="text-white/40 block text-[10px] uppercase tracking-wider font-bold">Date</span>
                                <span className="font-bold text-archive-clay">{ex.date}</span>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              navigate(`/#event/${ex.id}`);
                              window.scrollTo(0, 0);
                            }}
                            className="w-full py-3.5 px-6 bg-white hover:bg-archive-clay text-archive-charcoal hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-[0.25em] rounded flex items-center justify-between group/btn"
                          >
                            <span>VIEW DETAILS</span>
                            <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column: Clean Premium Expansion Overview */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-8 py-2">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-archive-clay animate-pulse" />
                      <span className="text-xs font-mono font-bold text-archive-clay tracking-[0.3em] uppercase">
                        EXPANSION CORRIDOR
                      </span>
                    </div>

                    <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.05]">
                      Expanding <br />
                      <span className="text-white/40">Across Asia.</span>
                    </h4>

                    <p className="text-sm md:text-base font-normal text-white/70 leading-relaxed max-w-xl">
                      Intex is extending its international sourcing footprint into South-East Asia's primary textile manufacturing markets. Connecting global suppliers with high-growth regional buyers.
                    </p>
                  </div>

                  {/* Clean Destinations Display */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-widest block">
                      Target Destinations
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3.5 py-1.5 bg-archive-clay/20 text-archive-clay text-xs font-bold uppercase tracking-wider rounded">
                        Indonesia (Active)
                      </span>
                      <span className="px-3.5 py-1.5 bg-white/5 text-white/70 text-xs font-medium uppercase tracking-wider rounded">
                        Vietnam
                      </span>
                      <span className="px-3.5 py-1.5 bg-white/5 text-white/70 text-xs font-medium uppercase tracking-wider rounded">
                        Thailand
                      </span>
                      <span className="px-3.5 py-1.5 bg-white/5 text-white/70 text-xs font-medium uppercase tracking-wider rounded">
                        Cambodia
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                        Exhibitor Opportunities
                      </span>
                      <p className="text-sm font-bold text-white tracking-wide uppercase">
                        Book Your Space in Upcoming Asia Editions
                      </p>
                    </div>
                    <button className="px-6 py-3.5 bg-archive-clay hover:bg-white text-white hover:text-archive-charcoal transition-all duration-300 font-bold text-xs uppercase tracking-[0.2em] rounded flex items-center gap-2 shrink-0 group/btn">
                      <span>EXHIBIT IN ASIA</span>
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExhibitorProfile;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroEventCard {
  id: string;
  title: string;
  edition: string;
  date: string;
  location: string;
  venue: string;
  route: string;
  /** ISO start date; when set and in the future, the card shows a countdown */
  startsAt?: string;
  /** Highlights the card as the next upcoming show */
  featured?: boolean;
  /** Solid black card instead of the frosted white one */
  dark?: boolean;
}

const SOUTH_ASIA_EVENTS: HeroEventCard[] = [
  {
    id: 'ex-bg',
    title: 'INTEX Bangladesh',
    edition: '17th Edition',
    date: '22-23-24 June, 2027',
    location: 'Dhaka, Bangladesh',
    venue: 'ICCB, Dhaka',
    route: '/#event/ex-bg',
    startsAt: '2027-06-22T10:00:00+06:00',
    featured: true,
  },
  {
    id: 'ex-sl',
    title: 'INTEX Sri Lanka',
    edition: '17th Edition',
    date: '4-5-6 August, 2027',
    location: 'Colombo, Sri Lanka',
    venue: 'BMICH, Colombo',
    route: '/#event/ex-sl',
    startsAt: '2027-08-04T10:00:00+05:30',
  },
  {
    id: 'ex-in',
    title: 'INTEX India',
    edition: '17th Edition',
    date: 'Dates & Venue Announcing Soon',
    location: '',
    venue: '',
    route: '/#event/ex-in',
  },
];

const ASEAN_EVENT: HeroEventCard = {
  id: 'ex-id',
  title: 'INTEX Indonesia',
  edition: '1st Edition',
  date: 'Dates Announcing Soon',
  location: 'Jakarta, Indonesia',
  venue: 'JIExpo, Jakarta',
  route: '/#event/ex-id',
  dark: true,
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const daysUntil = (iso?: string): number | null => {
  if (!iso) return null;
  const days = Math.ceil((new Date(iso).getTime() - Date.now()) / 86_400_000);
  return days > 0 ? days : null;
};

const EventCard: React.FC<{ ev: HeroEventCard; onOpen: (route: string) => void }> = ({ ev, onOpen }) => {
  const days = daysUntil(ev.startsAt);
  const dark = !!ev.dark;

  return (
    <div
      onClick={() => onOpen(ev.route)}
      className={`group relative h-full cursor-pointer rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_-12px_rgba(47,44,44,0.25)] hover:shadow-2xl ${
        dark ? 'bg-archive-charcoal hover:bg-[#3a3636]' : 'bg-white/50 backdrop-blur-xl hover:bg-archive-charcoal'
      }`}
    >
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-block whitespace-nowrap px-2.5 py-1 rounded-full bg-archive-clay/15 group-hover:bg-archive-clay/25 text-archive-clay text-[10px] font-black uppercase tracking-wider transition-colors">
            {ev.edition}
          </span>
          {ev.featured ? (
            <span className="flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-full bg-archive-charcoal group-hover:bg-archive-clay text-white text-[10px] font-black uppercase tracking-wider transition-colors">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-archive-clay group-hover:bg-white animate-ping" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-archive-clay group-hover:bg-white" />
              </span>
              Next Show
            </span>
          ) : (
            <ArrowUpRight
              size={18}
              className={`${dark ? 'text-white/50' : 'text-archive-charcoal/40'} group-hover:text-archive-clay group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`}
            />
          )}
        </div>

        <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${dark ? 'text-white' : 'text-archive-charcoal'} group-hover:text-white transition-colors leading-tight`}>
          {ev.title}
        </h2>
      </div>

      <div className="space-y-4">
        <div className={`space-y-2 text-xs ${dark ? 'text-white/75' : 'text-archive-charcoal/80'} group-hover:text-white/80 font-medium transition-colors`}>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-archive-clay shrink-0" />
            <span>{ev.date}</span>
          </div>
          {ev.venue && (
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-archive-clay shrink-0" />
              <span>{ev.venue}</span>
            </div>
          )}
          {days !== null && (
            <div className="pt-1 text-[11px] font-black uppercase tracking-wider text-archive-charcoal group-hover:text-archive-clay transition-colors">
              Starts in <span className="tabular-nums">{days}</span> days
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(ev.route);
          }}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
            ev.featured
              ? 'bg-archive-clay text-white group-hover:bg-white group-hover:text-archive-charcoal'
              : dark
              ? 'bg-white text-archive-charcoal group-hover:bg-archive-clay group-hover:text-white'
              : 'bg-white/80 text-archive-charcoal group-hover:bg-archive-clay group-hover:text-white'
          }`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const go = (route: string) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white flex flex-col justify-center">
      {/* ── CURVED ORANGE GRADIENT BEHIND THE SHOW BOXES ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-0 w-full h-[58%] pointer-events-none"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroCurveFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCD9C2" />
            <stop offset="45%" stopColor="#F59A62" />
            <stop offset="100%" stopColor="#EE7539" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 C260,30 460,300 760,350 C1050,395 1250,170 1440,0 L1440,600 L0,600 Z"
          fill="url(#heroCurveFill)"
        />
      </svg>

      {/* ── UNIFIED HERO CONTENT ── */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-16 space-y-12">
        <div className="space-y-6">
          {/* MAIN HEADING + SUBHEADING */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: EASE }}
            className="flex flex-col items-center gap-3 sm:gap-4 text-center"
          >
            <h1 className="w-full whitespace-nowrap text-[clamp(2rem,7.5vw,6.5rem)] font-sora font-extrabold tracking-tight leading-none text-archive-clay">
              INTEX Exhibitions
            </h1>
            <h2 className="w-full text-[clamp(1.1rem,3.6vw,3rem)] font-sora font-bold tracking-tight leading-tight text-archive-charcoal">
              Across South Asia &amp; ASEAN
            </h2>
          </motion.div>

          {/* Tagline + main actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <p className="max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-archive-charcoal/75">
              The premier international textile &amp; apparel sourcing shows, connecting global suppliers with
              serious buyers across South Asia and ASEAN.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => go('/buyer-registration')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-archive-clay hover:bg-archive-charcoal text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_10px_30px_-10px_rgba(238,117,57,0.8)] transition-colors"
              >
                Register as Buyer
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => go('/enquiry-form')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-archive-charcoal text-archive-charcoal hover:bg-archive-charcoal hover:text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-colors"
              >
                Exhibitor Enquiry
              </button>
            </div>
          </motion.div>
        </div>

        {/* BELOW: 2-COLUMN SPLIT (70% IN SOUTH ASIA | 30% IN ASEAN) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch"
        >
          {/* LEFT 70%: IN SOUTH ASIA (BD, SL, IND) */}
          <div className="w-full lg:w-[70%] flex flex-col gap-4">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
              {SOUTH_ASIA_EVENTS.map((ev) => (
                <EventCard key={ev.id} ev={ev} onOpen={go} />
              ))}
            </div>
          </div>

          {/* RIGHT 30%: IN ASEAN (INTEX INDONESIA) */}
          <div className="w-full lg:w-[30%] flex flex-col gap-4">

            <div className="flex-1">
              <EventCard ev={ASEAN_EVENT} onOpen={go} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

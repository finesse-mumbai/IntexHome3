import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  FileText,
  Globe2,
  Layers3,
  MapPin,
  Play,
  Sparkles,
  Users,
} from 'lucide-react';
import { CATEGORIES, GALLERY_ITEMS, RESOURCES, TESTIMONIALS } from '../constants';

const HERO_VIDEO = '/assets/website video intex  Copy 03.mp4';

const SHOWS = [
  {
    city: 'Colombo',
    country: 'Sri Lanka',
    date: '06-08 Aug 2025',
    venue: 'BMICH',
    image: '/assets/img/GallerySL/2025/1.jpg',
  },
  {
    city: 'Dhaka',
    country: 'Bangladesh',
    date: '2026 Edition',
    venue: 'International Convention City',
    image: '/assets/img/GalleryBD/2025/7.png',
  },
  {
    city: 'South Asia',
    country: 'Regional Sourcing',
    date: '17+ Editions',
    venue: 'Textile supply chain network',
    image: '/assets/intex collage.jpg.jpeg',
  },
];

const METRICS = [
  { value: '17+', label: 'successful editions' },
  { value: '15+', label: 'participating countries' },
  { value: '400+', label: 'booths across editions' },
  { value: '6,900+', label: 'trade visitors in 2025' },
];

const PATHWAYS = [
  {
    title: 'For Exhibitors',
    text: 'Launch collections, meet verified sourcing heads, and convert South Asian demand into serious business conversations.',
    cta: 'Book Booth',
    href: '#info-kit',
  },
  {
    title: 'For Buyers',
    text: 'Discover fabrics, yarns, trims, accessories, denim, MMF, and innovations from global textile suppliers in one focused marketplace.',
    cta: 'Register Visit',
    href: '#buyers-profile',
  },
];

const Home2Page: React.FC = () => {
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);
  const categories = CATEGORIES.slice(0, 8);

  return (
    <div className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-10 pt-32 md:px-12 md:pb-14">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover brightness-[0.42] contrast-125">
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(8,8,8,0.95))]"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#080808,transparent)]"></div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-3 backdrop-blur-md">
              <Sparkles size={16} className="text-archive-clay" />
              <span className="text-[14px] font-black uppercase tracking-[0.35em] text-white/70">
                Textile sourcing platform of South Asia
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl text-5xl font-black uppercase leading-[0.82] tracking-tight md:text-[8rem]"
            >
              Where global textile supply meets South Asia.
            </motion.h1>

            <div className="grid max-w-5xl gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-3xl text-base font-medium leading-relaxed text-white/70 md:text-xl">
                Intex connects international textile manufacturers with apparel producers, buying houses, brands,
                retailers, sourcing offices, and trade bodies across Sri Lanka, Bangladesh, and the wider region.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a
                  href="https://portal.intexfair.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=sl&source_name="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-5 bg-archive-clay px-7 py-5 text-[15px] font-black uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-[#111111]"
                >
                  Buyer Registration <ArrowUpRight size={16} />
                </a>
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center justify-between gap-5 bg-white/10 px-7 py-5 text-[15px] font-black uppercase tracking-[0.28em] text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#111111]"
                >
                  Exhibitor Enquiry <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/10">
            {METRICS.map((item) => (
              <div key={item.label} className="bg-black/40 p-6 backdrop-blur-md">
                <div className="text-4xl font-black tracking-tight text-archive-clay md:text-5xl">{item.value}</div>
                <p className="mt-3 text-[14px] font-black uppercase tracking-[0.25em] text-white/55">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionKicker label="Upcoming market nodes" />
          <div className="mt-8 grid gap-px bg-white/10 lg:grid-cols-3">
            {SHOWS.map((show) => (
              <a key={show.city} href="#show-profile" className="group relative min-h-[520px] overflow-hidden bg-[#111111]">
                <img src={show.image} alt={`${show.country} event`} className="absolute inset-0 h-full w-full object-cover brightness-[0.58] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.88))]"></div>
                <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-8">
                  <div className="flex items-center justify-between text-[14px] font-black uppercase tracking-[0.25em] text-white/65">
                    <span>{show.date}</span>
                    <ArrowUpRight size={18} className="text-archive-clay" />
                  </div>
                  <div>
                    <p className="mb-3 flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.24em] text-archive-clay">
                      <MapPin size={14} /> {show.city}
                    </p>
                    <h2 className="text-4xl font-black uppercase leading-none tracking-tight md:text-5xl">{show.country}</h2>
                    <p className="mt-5 max-w-sm text-[14px] font-medium leading-relaxed text-white/65">{show.venue}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="space-y-7">
            <SectionKicker label="Why Intex" />
            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
              A serious sourcing floor, not a generic trade show.
            </h2>
            <p className="max-w-xl text-base font-medium leading-relaxed text-white/65">
              The platform is designed around verified business intent: suppliers with export-ready collections,
              buyers with active sourcing mandates, and markets that depend on reliable cross-border textile supply.
            </p>
          </div>
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {[
              ['Curated Supply', 'Yarns, fibres, fabrics, denim, trims, accessories, dyes, software, and allied services.'],
              ['Verified Demand', 'Buying houses, apparel exporters, manufacturers, brands, retailers, and sourcing offices.'],
              ['Regional Depth', 'Built across Sri Lanka, Bangladesh, and India with a decade of market familiarity.'],
              ['Business Format', 'A focused B2B environment for launches, meetings, intelligence, and partnerships.'],
            ].map(([title, text], index) => (
              <div key={title} className="bg-white/[0.06] p-8 backdrop-blur-md">
                <div className="mb-8 flex h-12 w-12 items-center justify-center bg-archive-clay text-white">
                  {[Layers3, Users, Globe2, BadgeCheck].map((Icon, iconIndex) => iconIndex === index && <Icon key={title} size={20} />)}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
                <p className="mt-4 text-[14px] font-medium leading-relaxed text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionKicker label="Product universe" />
          <div className="mt-8 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category.id} className="group relative min-h-[320px] overflow-hidden bg-[#111111]">
                <img src={category.imageUrl} alt={category.title} className="absolute inset-0 h-full w-full object-cover brightness-[0.44] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.9))]"></div>
                <div className="relative z-10 flex min-h-[320px] flex-col justify-end p-6">
                  <h3 className="text-2xl font-black uppercase leading-none tracking-tight">{category.title}</h3>
                  <p className="mt-4 line-clamp-3 text-[14px] font-medium leading-relaxed text-white/60">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-px bg-white/10 lg:grid-cols-2">
          {PATHWAYS.map((pathway) => (
            <a key={pathway.title} href={pathway.href} className="group bg-white/[0.06] p-8 backdrop-blur-md transition-colors hover:bg-white/[0.1] md:p-12">
              <h2 className="text-4xl font-black uppercase tracking-tight md:text-6xl">{pathway.title}</h2>
              <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-white/65">{pathway.text}</p>
              <span className="mt-12 inline-flex items-center gap-4 bg-archive-clay px-7 py-5 text-[14px] font-black uppercase tracking-[0.28em] text-white">
                {pathway.cta} <ArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <SectionKicker label="Visual proof" />
              <h2 className="mt-8 text-4xl font-black uppercase leading-none tracking-tight md:text-7xl">
                The floor has its own momentum.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-relaxed text-white/65">
              Real images from the show archive reveal the density of meetings, product discovery, delegations,
              booths, media, and business energy around the platform.
            </p>
          </div>
          <div className="mt-10 grid gap-1 md:grid-cols-4">
            {[
              '/assets/img/GallerySL/2025/1.jpg',
              '/assets/img/GalleryBD/2025/10.png',
              '/assets/img/GallerySL/2024/8.jpg',
              '/assets/img/GallerySL/2023/12.png',
            ].map((image, index) => (
              <a key={image} href="#photo-gallery" className={`group relative overflow-hidden bg-white/10 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img src={image} alt="Intex gallery moment" className="h-full min-h-[260px] w-full object-cover brightness-[0.72] transition-transform duration-700 group-hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <SectionKicker label="Industry voices" />
          <div className="mt-8 grid gap-px bg-white/10 lg:grid-cols-3">
            {featuredTestimonials.map((item) => (
              <article key={item.id} className="flex min-h-[360px] flex-col justify-between bg-white/[0.06] p-8 backdrop-blur-md">
                <p className="text-lg font-medium leading-relaxed text-white/75">"{item.quote}"</p>
                <div className="pt-8">
                  <h3 className="text-base font-black uppercase tracking-tight text-archive-clay">{item.author}</h3>
                  <p className="mt-2 text-[14px] font-black uppercase tracking-[0.22em] text-white/45">{item.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-1 lg:grid-cols-[1fr_1fr]">
          <div className="bg-archive-clay p-8 text-white md:p-12">
            <h2 className="text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">Move from interest to action.</h2>
            <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-white/80">
              Download the show material, review the reports, or open the relevant registration path.
            </p>
          </div>
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {RESOURCES.map((resource) => (
              <a key={resource.id} href={resource.id === 'faq' ? '#faq' : '#info-kit'} className="group flex min-h-[150px] flex-col justify-between bg-white/[0.06] p-6 backdrop-blur-md transition-colors hover:bg-white/[0.1]">
                <FileText size={22} className="text-archive-clay" />
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight">{resource.title}</h3>
                  <p className="mt-2 text-[14px] font-medium leading-relaxed text-white/55">{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-1 md:grid-cols-3">
          {GALLERY_ITEMS.slice(0, 3).map((item) => (
            <a key={item.id} href="#photo-gallery" className="group flex items-center justify-between bg-white/[0.06] p-6 backdrop-blur-md transition-colors hover:bg-white/[0.1]">
              <div>
                <p className="text-[14px] font-black uppercase tracking-[0.24em] text-white/40">{item.year}</p>
                <h3 className="mt-2 text-xl font-black uppercase tracking-tight">{item.title}</h3>
              </div>
              <Play size={18} className="text-archive-clay" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

const SectionKicker: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-4">
    <div className="h-px w-12 bg-archive-clay"></div>
    <span className="text-[14px] font-black uppercase tracking-[0.4em] text-archive-clay">{label}</span>
  </div>
);

export default Home2Page;

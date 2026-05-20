
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Calendar, MapPin, Fingerprint, Globe, Search, UserCheck } from 'lucide-react';

interface BuyerTestimonial {
  id: string;
  logo: string;
  name: string;
  designation: string;
  company: string;
  country: string;
  message: string;
  showName: string;
  dates: string;
  showCountry: string;
  year: number;
}

const BUYERS_TESTIMONIALS: BuyerTestimonial[] = [
  // 2025 Records
  {
    id: 'BT_25_01',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/buyer-testimonials/2025/norlanka.png',
    name: 'Lalindu',
    designation: 'Sourcing and Technical Department',
    company: 'Norlanka',
    country: 'Sri Lanka',
    message: "This is the third time we have visited Intex Sri Lanka, and we have found a lot of newness in terms of fabrics. We discovered many potential exhibitors who can cater to our requirements and help us grow our business in terms of quality and service.",
    showName: 'Intex Sri Lanka',
    dates: '10-12 August',
    showCountry: 'Sri Lanka',
    year: 2025
  },
  {
    id: 'BT_25_02',
    logo: 'https://bd.intexsouthasia.com/assets/img/testimonials/buyer-testimonials/2025/mayoral.png',
    name: 'Imran Khan',
    designation: 'Country Manager',
    company: 'Mayoral',
    country: 'Bangladesh',
    message: "Intex is very professional, with multiple product categories and a wide variety of products on display. I am particularly keen to explore kidswear, especially for winter wear. Thank you, and all the very best.",
    showName: 'Intex Bangladesh',
    dates: '18-20 June',
    showCountry: 'Bangladesh',
    year: 2025
  },
  {
    id: 'BT_25_03',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/buyer-testimonials/2025/bernatali.png',
    name: 'Ruhan Rodrigues',
    designation: 'General Manager',
    company: 'Bernatali Sourcing Studios Pvt Ltd',
    country: 'Sri Lanka',
    message: "I have been visiting Intex for a long time, both since it started in Sri Lanka and also in India. I am very impressed by the number of exhibitors, the services, and the offerings for the industry.",
    showName: 'Intex Sri Lanka',
    dates: '10-12 August',
    showCountry: 'Sri Lanka',
    year: 2025
  },
  {
    id: 'BT_25_04',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/buyer-testimonials/2025/russian-association-of-fahsion.png',
    name: 'Natalia',
    designation: 'Development Director',
    company: 'Russian Association of Fashion and Industry',
    country: 'Russia',
    message: "We are here for the second time, visiting with a group of Russian buyers to explore the opportunities in this market. We are particularly interested in natural fabrics, and we find Intex Sri Lanka to be a valuable platform.",
    showName: 'Intex Sri Lanka',
    dates: '10-12 August',
    showCountry: 'Sri Lanka',
    year: 2025
  },
  {
    id: 'BT_25_05',
    logo: 'https://sl.intexsouthasia.com/assets/img/Download-Logo.png',
    name: 'Ishara Wijemanne',
    designation: 'Head of Marketing and Sales',
    company: 'Garment Services Ltd',
    country: 'Sri Lanka',
    message: "I am here to look at the new fabrics, it’s really nice to have an exhibition like this for us to see what’s happening in the textile world. Having an exhibition of this scale, with all the amazing suppliers here, is fantastic.",
    showName: 'Intex Sri Lanka',
    dates: '10-12 August',
    showCountry: 'Sri Lanka',
    year: 2025
  },
  // 2024 Records
  {
    id: 'BT_24_01',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/buyer-testimonials/star.png',
    name: 'Representative',
    designation: 'Purchasing Team',
    company: 'Star Garments',
    country: 'Sri Lanka',
    message: "We found lots of interesting fabrics and mills for our future development. Overall it’s a positive experience to be here at Intex.",
    showName: 'Intex Sri Lanka',
    dates: '07-09 August',
    showCountry: 'Sri Lanka',
    year: 2024
  },
  {
    id: 'BT_24_02',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/buyer-testimonials/brandix.png',
    name: 'Sourcing Team',
    designation: 'Management',
    company: 'Brandix Group',
    country: 'Sri Lanka',
    message: "Our whole team came here at Intex across 3 days. It was really a great experience. We found many suppliers who we are looking forward to work in the future.",
    showName: 'Intex Sri Lanka',
    dates: '07-09 August',
    showCountry: 'Sri Lanka',
    year: 2024
  },
  {
    id: 'BT_24_03',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/buyer-testimonials/amante.png',
    name: 'Design Lead',
    designation: 'Design Department',
    company: 'Amante / Timex Garments',
    country: 'Sri Lanka',
    message: "It’s a very insightful exhibition. We are still going through, but we managed to get contacts of quite a few suppliers which will be useful for our future work. Thank you Intex for organizing this.",
    showName: 'Intex Sri Lanka',
    dates: '07-09 August',
    showCountry: 'Sri Lanka',
    year: 2024
  },
  {
    id: 'BT_24_04',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/buyer-testimonials/mas.png',
    name: 'Sourcing Manager',
    designation: 'Procurement',
    company: 'MAS Intimates',
    country: 'Sri Lanka',
    message: "We are looking for athleisure and sportswear. So this show was very helpful where we can find all in one location. Mostly we are having supplier visits, but here together we have a very good variation.",
    showName: 'Intex Sri Lanka',
    dates: '07-09 August',
    showCountry: 'Sri Lanka',
    year: 2024
  },
  {
    id: 'BT_24_05',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/buyer-testimonials/sigma.png',
    name: 'Mr. Abbas Addhara',
    designation: 'Indian Buyer Delegation Organiser',
    company: 'SIGMA / English Colors',
    country: 'India',
    message: "Congratulation to the whole team of Intex. I am deeply impressed by the exhibitors, their collections, the variety from different countries. I am leading a delegation with 14 eminent businessmen from South India.",
    showName: 'Intex Sri Lanka',
    dates: '07-09 August',
    showCountry: 'Sri Lanka',
    year: 2024
  }
];

const BuyersTestimonialPage: React.FC = () => {
  const [filterLocation, setFilterLocation] = useState('ALL');
  const [filterYear, setFilterYear] = useState('ALL');

  const filteredData = useMemo(() => {
    return BUYERS_TESTIMONIALS.filter(item => {
      const locationMatch = filterLocation === 'ALL' || item.showCountry.toUpperCase() === filterLocation;
      const yearMatch = filterYear === 'ALL' || item.year.toString() === filterYear;
      return locationMatch && yearMatch;
    });
  }, [filterLocation, filterYear]);

  const locations = ['ALL', 'BANGLADESH', 'SRI LANKA'];
  const years = ['ALL', '2025', '2024'];

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Buyer Registry // Feedback</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              Buyer <br />
              <span className="text-white">Testimonials.</span>
            </h1>
          </div>

          {/* Logic Filters */}
          <div className="flex flex-col lg:flex-row gap-12 border-y border-archive-charcoal/10 py-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest opacity-40">Sourcing Node</span>
              <div className="flex flex-wrap gap-2">
                {locations.map(loc => (
                  <button
                    key={loc}
                    onClick={() => setFilterLocation(loc)}
                    className={`px-8 py-3 text-[10px] font-black tracking-widest border transition-all ${filterLocation === loc ? 'bg-archive-charcoal text-white border-archive-charcoal' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {loc.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest opacity-40">Archive Cycle</span>
              <div className="flex gap-2">
                {years.map(yr => (
                  <button
                    key={yr}
                    onClick={() => setFilterYear(yr)}
                    className={`px-8 py-3 text-[10px] font-black tracking-widest border transition-all ${filterYear === yr ? 'bg-archive-clay border-archive-clay text-white' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Testimonials */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.02 }}
                  className="bg-white p-10 md:p-12 group flex flex-col min-h-[300px] border border-dotted border-archive-charcoal/40"
                >
                  <div className="space-y-8 flex-grow">
                    <div className="flex justify-between items-start">
                      <div className="w-28 h-28 border border-archive-charcoal/5 p-1.5 bg-archive-cream/30 flex items-center justify-center relative overflow-hidden group-hover:bg-white transition-colors duration-500">
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="max-w-full max-h-full object-contain transition-all duration-700"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${item.company}&background=F3EBE8&color=2F2C2C&bold=true`;
                          }}
                        />
                      </div>
                      <Quote size={20} className="text-archive-clay opacity-10" />
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-lg font-black text-archive-charcoal tracking-tight group-hover:text-archive-clay transition-colors uppercase">{item.name}</h3>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black tracking-widest text-archive-charcoal/40 uppercase">{item.designation}</span>
                          <span className="text-[9px] font-black tracking-widest text-archive-clay uppercase">{item.company}</span>
                        </div>
                      </div>

                      <p className="text-[13px] font-medium leading-relaxed text-archive-charcoal/80 tracking-tight">
                        "{item.message}"
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-archive-charcoal/5 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-[9px] font-bold text-archive-charcoal/60 tracking-widest">
                      <div className="w-1.5 h-1.5 bg-archive-clay rotate-45"></div>
                      {item.showName.toUpperCase()} | {item.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="h-[400px] flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center bg-white/50">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[10px] font-black tracking-[0.5em] text-archive-charcoal/30 uppercase">No matching buyer records found.</span>
            <button
              onClick={() => { setFilterLocation('ALL'); setFilterYear('ALL'); }}
              className="mt-8 px-8 py-4 border border-archive-charcoal text-[10px] font-black tracking-widest hover:bg-archive-charcoal hover:text-white transition-all"
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </section>

      {/* Decorative Technical Shutter */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10 mt-40">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default BuyersTestimonialPage;

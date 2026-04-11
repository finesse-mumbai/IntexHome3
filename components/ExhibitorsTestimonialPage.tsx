import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Calendar, Fingerprint, Globe, Search } from 'lucide-react';

interface Testimonial {
  id: string;
  logo: string;
  name: string;
  designation: string;
  company: string;
  country: string;
  message: string;
  showName: string;
  year: number;
  region: string;
}

const TESTIMONIALS_CONTENT: Testimonial[] = [
  // BANGLADESH
  {
    id: 'ET_BD_01',
    logo: 'https://bd.intexsouthasia.com/assets/img/exhibitortestinomial/lvw.png',
    name: 'LVW Group Co. Ltd',
    designation: 'Representative',
    company: 'LVW Group Co. Ltd',
    country: 'Thailand',
    message: "The show has been quite good for us. Over the past two days there have been many agents and buyers showing interest and talking to us. We have connected with them and hopefully we can do business with them in the future. The buyer quality is really good at this show. They have high standards and so do we, so I think we can handle business here.",
    showName: 'Intex Bangladesh',
    year: 2024,
    region: 'BANGLADESH'
  },
  {
    id: 'ET_BD_02',
    logo: 'https://bd.intexsouthasia.com/assets/img/exhibitortestinomial/Hoahan.png',
    name: 'Suzhou Haohan Textile Technology Co. Ltd',
    designation: 'Representative',
    company: 'Suzhou Haohan Textile Technology Co. Ltd',
    country: 'China',
    message: "This is our second time exhibiting at Intex Bangladesh and this year I have observed many more buyers than last time, so I can see that the market is growing faster. My experience here is good. In fact, we are extremely busy just collecting visiting cards of the buyers who are visiting our booth. After this fair, I shall connect and visit their offices to discuss further business with them.",
    showName: 'Intex Bangladesh',
    year: 2024,
    region: 'BANGLADESH'
  },
  {
    id: 'ET_BD_03',
    logo: 'https://bd.intexsouthasia.com/assets/img/exhibitortestinomial/nvtex.png',
    name: 'NSV Sourcing',
    designation: 'Representative',
    company: 'NSV Sourcing',
    country: 'Bangladesh',
    message: "We have our office in Bangladesh for the last 18 years but we are participating in a fair for the first time and the experience here at Intex is good. The market is growing and we are growing along with the Bangladesh market. I feel there are still a lot of opportunities for us to grow. This is a good platform as there are new companies and new customers coming up all the time hence we are connecting with new buyers, new customers and new contacts at Intex Bangladesh.",
    showName: 'Intex Bangladesh',
    year: 2024,
    region: 'BANGLADESH'
  },
  {
    id: 'ET_BD_04',
    logo: 'https://bd.intexsouthasia.com/assets/img/exhibitortestinomial/ganga.png',
    name: 'Ganga Acrowools Ltd.',
    designation: 'Representative',
    company: 'Ganga Acrowools Ltd.',
    country: 'India',
    message: "Intex has been tremendous. We have got to meet so many new customers, big customers and new brands from across the globe. I mean, we have met brands from Germany, from Japan and some from the US as well. Overall, we got to meet many international brands at this one location.",
    showName: 'Intex Bangladesh',
    year: 2024,
    region: 'BANGLADESH'
  },
  {
    id: 'ET_BD_05',
    logo: 'https://bd.intexsouthasia.com/assets/img/exhibitortestinomial/sulochna.png',
    name: 'Sulochana Spinning Mills',
    designation: 'Representative',
    company: 'Sulochana Spinning Mills',
    country: 'India',
    message: "This is the 4th time we are participating in Intex Bangladesh. The show has always been encouraging for us and we get good walk-ins. We are already doing nominated business in Bangladesh and yes, overall, we see good opportunity. Sustainability is something which has more focus now-a-days and since Sulochana is a company focused on sustainability, I think there are lot of opportunities and everyone over here is very interested and keen to look at and understand our sustainable activities which is a great thing.",
    showName: 'Intex Bangladesh',
    year: 2024,
    region: 'BANGLADESH'
  },
  {
    id: 'ET_BD_06',
    logo: 'https://bd.intexsouthasia.com/assets/img/exhibitortestinomial/nivada.png',
    name: 'Nahar Textile Pvt Ltd',
    designation: 'Representative',
    company: 'Nahar Textile Pvt Ltd',
    country: 'India',
    message: "Good footfall, good lead generation and we are getting the right buyers in this field, so we are very happy with participating at Intex. Quality of buyers has been good and we are very pleased to get buyers with a range of experience from management level to junior level. So that's a good mix overall.",
    showName: 'Intex Bangladesh',
    year: 2024,
    region: 'BANGLADESH'
  },
  // SRI LANKA 2025
  {
    id: 'ET_SL_25_01',
    logo: 'https://sl.intexsouthasia.com/assets/img/exhibitortestinomial/UmiTextile.png',
    name: 'Binisha',
    designation: 'Export Manager',
    company: 'Ummi Textile',
    country: 'Pakistan',
    message: "It has been a great experience being part of Intex Sri Lanka. We had the chance to meet a lot of potential buyers, and the response has been really positive. We are glad to be here and are excited about the business opportunities this platform offers.",
    showName: 'Intex Sri Lanka',
    year: 2025,
    region: 'SRI LANKA'
  },
  {
    id: 'ET_SL_25_02',
    logo: 'https://sl.intexsouthasia.com/assets/img/exhibitortestinomial/OwnWayTextile.png',
    name: 'Own Way Textile',
    designation: 'Representative',
    company: 'Own Way Textile',
    country: 'Taiwan - PRC',
    message: "We specialize in functional activewear fabrics. This was our first time participating in Intex Sri Lanka, and it has been a good show. We look forward to participating again next year.",
    showName: 'Intex Sri Lanka',
    year: 2025,
    region: 'SRI LANKA'
  },
  {
    id: 'ET_SL_25_03',
    logo: 'https://sl.intexsouthasia.com/assets/img/exhibitortestinomial/Modacrea.png',
    name: 'Jeanette Lee',
    designation: 'Management',
    company: 'Modecrea',
    country: 'Korea',
    message: "Our specialty is in print design. We develop our own textile designs and print them on various gowns, swimwear, innerwear, woven, and knit fabrics. At Intex, we had many visitors requesting our authentic designs, especially for swimwear and innerwear. We have received a great response from buyers and connected with many of them during the event. Therefore, we are definitely looking forward to participating in next year’s Intex Sri Lanka.",
    showName: 'Intex Sri Lanka',
    year: 2025,
    region: 'SRI LANKA'
  },
  {
    id: 'ET_SL_25_04',
    logo: 'https://sl.intexsouthasia.com/assets/img/exhibitortestinomial/LiJunTextile.png',
    name: 'Ramond',
    designation: 'Representative',
    company: 'Li Jun (HK) Industrial Co. Ltd',
    country: 'Hong Kong - PRC',
    message: "We are primarily into knitting fabrics of lilac and polyester base, and this being our first time exhibiting at Intex Sri Lanka, I am honored to say it has been a very good opportunity to recommend our products to the people of Sri Lanka. Thank you.",
    showName: 'Intex Sri Lanka',
    year: 2025,
    region: 'SRI LANKA'
  },
  {
    id: 'ET_SL_25_05',
    logo: 'https://sl.intexsouthasia.com/assets/img/exhibitortestinomial/HeroZippers.png',
    name: 'Sohan Gamagre',
    designation: 'General Manager',
    company: 'Hero Zipper',
    country: 'Sri Lanka',
    message: "We have been in the business since 1997 and are one of the biggest zipper manufacturers in Sri Lanka. Intex has been very useful to us, as we are meeting a lot of potential buyers. I would like to wish Worldex and Intex all the best, and we look forward to joining Intex again next year.",
    showName: 'Intex Sri Lanka',
    year: 2025,
    region: 'SRI LANKA'
  },
  {
    id: 'ET_SL_25_06',
    logo: 'https://sl.intexsouthasia.com/assets/img/exhibitortestinomial/LeMeriteExports.png',
    name: 'Representative',
    designation: 'Management',
    company: 'Le Merite Exports',
    country: 'India',
    message: "We are exporters of yarn and grey fabrics, supplying around 1,500 to 20,000 cotton yarns to major countries such as Bangladesh, Korea, Turkey, Iran, and Egypt. Recognized as a major export house, we are now exploring Sri Lanka to understand the market potential for our products. This is the second time we have exhibited with Intex, and we have connected with a few potential customers. Thank you, Intex.",
    showName: 'Intex Sri Lanka',
    year: 2025,
    region: 'SRI LANKA'
  },
  {
    id: 'ET_SL_25_07',
    logo: 'https://sl.intexsouthasia.com/assets/img/exhibitortestinomial/Shramanji-Industries.png',
    name: 'Dhruv',
    designation: 'Managing Director',
    company: 'Sharmanji Industries Pvt. Ltd',
    country: 'India',
    message: "Our goal was to connect with more buyers and the market in Sri Lanka, and we have been meeting many good buyers and suppliers at the show. We will definitely attend Intex again next year, as it has been a great platform. We would also recommend it to others.",
    showName: 'Intex Sri Lanka',
    year: 2025,
    region: 'SRI LANKA'
  },
  {
    id: 'ET_SL_25_08',
    logo: 'https://sl.intexsouthasia.com/assets/img/exhibitortestinomial/ABPF.png',
    name: 'Linda Chuai',
    designation: 'Management',
    company: 'Phoenix Flame Holdings LTD',
    country: 'China',
    message: "This is our first time here, and we hope to connect with the right customers in Sri Lanka. I am very pleased to have chosen this exhibition, as I have heard a lot of good things about it. This exhibition is truly excellent, and I wish it great success. I believe it will help Chinese companies, as well as fabric and accessories suppliers, to find the right customers here. Thank you",
    showName: 'Intex Sri Lanka',
    year: 2025,
    region: 'SRI LANKA'
  },
  // SRI LANKA 2024
  {
    id: 'ET_SL_24_01',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/exhibitor-testimonials/heyleys.png',
    name: 'Rohan Goonetilleke',
    designation: 'Managing Director/CEO',
    company: 'Hayleys Fabric PLC',
    country: 'Sri Lanka',
    message: "We are the largest manufacturers of knitted fabrics in Sri Lanka with 40% market share and are supplying fabrics to the top 5 to 6 global brands that are sourcing from Sri Lanka. At Intex, we have found a useful forum for our company to be known internationally. This exhibition has been fruitful for us as from day one we have seen a lot of interest from visitors attending the show who are specially coming to visit our stall.",
    showName: 'Intex Sri Lanka',
    year: 2024,
    region: 'SRI LANKA'
  },
  {
    id: 'ET_SL_24_02',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/exhibitor-testimonials/amf.png',
    name: 'Zohaib Mehboob',
    designation: 'Marketing Manager',
    company: 'Artistic Fabric Mills',
    country: 'Pakistan',
    message: "We are one of the leading denim fabric mills in Pakistan mainly working with USA buyers but we have also been working in Sri Lanka with Hirdaramani, Orit Apparels, Indochine, etc. We are here to connect with the domestic and export market buyers in Sri Lanka. The exhibition is really good for us and the high level of customer interest and footfall has been very promising.",
    showName: 'Intex Sri Lanka',
    year: 2024,
    region: 'SRI LANKA'
  },
  {
    id: 'ET_SL_24_03',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/exhibitor-testimonials/sambandam.png',
    name: 'Mr. S. Dinakaran',
    designation: 'Managing Director',
    company: 'Sambandam Spinning Mills Limited',
    country: 'India',
    message: "Over the last two days we have received a lot of footfalls from Sri Lanka buyers who are very interested in our sustainability products and new products. I am looking forward to even more buyers visiting us in the coming days.",
    showName: 'Intex Sri Lanka',
    year: 2024,
    region: 'SRI LANKA'
  },
  {
    id: 'ET_SL_24_04',
    logo: 'https://sl.intexsouthasia.com/assets/img/testimonials/exhibitor-testimonials/rrr.png',
    name: 'Mr. Somwang Boonthongrungtawee',
    designation: 'CEO',
    company: 'Numrung Rayon Co. Ltd.',
    country: 'Thailand',
    message: "We are a nylon yarn spinning company and we actually have a few customers here, but this is the first time we are exhibiting at Intex Sri Lanka. I am pleased to say that in the past 2 days, we have found many new customers interested in our new technology dope dyed-yarn which is a sustainable and eco-friendly product. WIth the positive response we are getting, we are very happy to be here and hope to come back next year.",
    showName: 'Intex Sri Lanka',
    year: 2024,
    region: 'SRI LANKA'
  },
];

const ExhibitorsTestimonialPage: React.FC = () => {
  const [filterLocation, setFilterLocation] = useState('ALL');
  const [filterYear, setFilterYear] = useState('ALL');

  const filteredData = useMemo(() => {
    return TESTIMONIALS_CONTENT.filter(item => {
      const locationMatch = filterLocation === 'ALL' || item.region.toUpperCase() === filterLocation;
      const yearMatch = filterYear === 'ALL' || item.year.toString() === filterYear;
      return locationMatch && yearMatch;
    });
  }, [filterLocation, filterYear]);



  const locations = ['ALL', 'BANGLADESH', 'SRI LANKA'];
  const years = ['ALL', '2025', '2024'];

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Title */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Exhibitor Voices // Database</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              Exhibitor <br />
              <span className="text-white">Testimonials.</span>
            </h1>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-12 border-y border-archive-charcoal/10 py-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest opacity-40">Show Location</span>
              <div className="flex flex-wrap gap-2">
                {locations.map(loc => (
                  <button
                    key={loc}
                    onClick={() => setFilterLocation(loc)}
                    className={`px-8 py-3 text-[10px] font-black tracking-widest border transition-all ${filterLocation === loc ? 'bg-archive-clay border-archive-clay text-white' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {loc.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest opacity-40">Select Years</span>
              <div className="flex gap-2">
                {years.map(yr => (
                  <button
                    key={yr}
                    onClick={() => setFilterYear(yr)}
                    className={`px-8 py-3 text-[10px] font-black tracking-widest border transition-all ${filterYear === yr ? 'bg-archive-charcoal border-archive-charcoal text-white' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto min-h-[500px]">
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-archive-charcoal/10 border border-archive-charcoal/10">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-10 md:p-12 group flex flex-col min-h-[300px]"
              >
                <div className="space-y-8 flex-grow">
                  <div className="flex justify-between items-start">
                    <div className="w-20 h-20 border border-archive-charcoal/5 p-4 bg-archive-cream/30 flex items-center justify-center relative overflow-hidden group-hover:bg-white transition-colors duration-500">
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
                  <div className="flex items-center gap-2 text-[9px] font-bold text-archive-charcoal/30 tracking-widest">
                    <div className="w-1.5 h-1.5 bg-archive-clay rotate-45"></div>
                    {item.showName.toUpperCase()} | {item.year}
                  </div>
                  <div className="flex items-center gap-1 text-[8px] font-bold text-archive-charcoal/20">
                    <Globe size={10} />
                    {item.country.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[400px] flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center bg-white/50">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[10px] font-black tracking-[0.5em] text-archive-charcoal/30 uppercase">Null record result for selected filters.</span>
            <button
              onClick={() => { setFilterLocation('ALL'); setFilterYear('ALL'); }}
              className="mt-8 px-8 py-4 border border-archive-charcoal text-[10px] font-black tracking-widest hover:bg-archive-charcoal hover:text-white transition-all"
            >
              RESET MATRIX FILTERS
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

export default ExhibitorsTestimonialPage;

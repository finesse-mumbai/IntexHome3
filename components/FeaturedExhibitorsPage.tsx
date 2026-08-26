import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedExhibitor {
  id: string;
  name: string;
  logo: string;
  country: string;
  category: string;
  booth: string;
}

const FEATURED_DATA: Record<string, FeaturedExhibitor[]> = {
  'BANGLADESH': [
    { id: 'FE_BD_01', name: 'Alok Industries', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Alok-Industries.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_02', name: 'Bansal Spinning Mills', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Bansal-Spinning-Mills.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_03', name: 'Credence Ecofibre', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Credence.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_04', name: 'Eco Spin Yarns', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Eco-Spin.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_05', name: 'Envision Exports', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Envision.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_06', name: 'GEP Spinning', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/GEP-Spinning.png', country: 'Thailand', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_07', name: 'Indo Globetex', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Indo-Globetex.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_08', name: 'Jiashan Xincheng Garment Accessories', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Jiashan-Xincheng.png', country: 'China', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_09', name: 'Lahoti Overseas', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/lahoti.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_10', name: 'LeMerite Exports', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/LeMerite.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_11', name: 'LVW Group', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/LVWGroup.png', country: 'Thailand', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_12', name: 'KS Spinning Mills', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/KS-Spinning.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_13', name: 'Texmine India - KINGDOM Holdings', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/KINGDOM.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_14', name: 'Manan Textech Global', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Manan-Textech.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_15', name: 'Milan Group India', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Milan-Group.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_16', name: 'Mingda New Material', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Mingda.png', country: 'Bangladesh', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_17', name: 'M.R.Global Resources', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/M-R-global-resources.png', country: 'Bangladesh', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_18', name: 'Neeva Tradelink Llp', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Neeva-Tradelink.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_19', name: 'Ningbo Baina Fashion', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Ningbo-Baina-Fashion.png', country: 'China', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_20', name: 'Oasis Textiles', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Oasis-Textiles.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_21', name: 'Pinak Texport', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Pinak-Texport.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_22', name: 'Positex', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Positex.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_23', name: 'RSB Cottex', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/RSB.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_24', name: 'Salona Cotspin', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Salona-Cotspin.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_25', name: 'Shaoxing Keqiao Hongxing Textile', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Shaoxing-Keqiao-Hongxing.png', country: 'China', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_26', name: 'Shreeji Cotfab Ltd/Coloron Yarns', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Shreeji-Cotfab.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_27', name: 'Siddhi Sales Corp.', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Siddhi-Sales.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_28', name: 'S P Yarns', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/spyarn.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_29', name: 'Square Corporation', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/4-square-corporation-Shortcut-2.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_30', name: 'Sulochana Cotton Spinning Mills', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Sulochana.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_31', name: 'Suzhou Hong Zhi Kun Textile Science and Technology', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Suzhou-Hong-Zhi-Kun.png', country: 'China', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_32', name: 'Suzhou Xihe Textile Technology', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Suzhou-Xihe.png', country: 'China', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_33', name: 'Talisman Performance Ltd.', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Talisman-Performance.png', country: 'Bangladesh', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_34', name: 'Texperts', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Texperts.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_35', name: 'Usha Yarns', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Usha-Yarns.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_36', name: 'Velcord Textiles', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Velcord-Textiles.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_37', name: 'VP Tex Pvt. Ltd.', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/VP-Tex.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_38', name: 'Winsome Textile Industries', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Winsome.png', country: 'India', category: 'Textile', booth: 'TBA' },
    { id: 'FE_BD_39', name: 'Xiamen Fashion Knitting', logo: 'https://bd.intexsouthasia.com/assets/img/faeturedexhibitor/Xiamen-Fashion-Knitting.png', country: 'China', category: 'Textile', booth: 'TBA' },
  ],
  'SRI LANKA': [
    { id: 'FE_SL_01', name: 'Alpine Expo Tex', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Alpine.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_02', name: 'Cotton Council International', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Cotton-Council.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_03', name: 'Grasim Industries', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Grasim-Industries.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_04', name: 'Hunaram Processing', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Hunaram-Processing.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_05', name: 'KANODIA', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/kanodia.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_06', name: 'MARUTI TEXPROCESS INDIA PVT. LTD.', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/maruti.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_07', name: 'Oasis Textiles', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Oasis Textiles.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_08', name: 'Perfect Filament Limited', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/perfect.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_09', name: 'PVM Enterprises', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/PVM-Enterprises.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_10', name: 'Rasik Vatika', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Rasik-Vatika.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_11', name: 'RSWM Limited', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/rswm.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_12', name: 'Sambandam Spinning Mills', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Sambandam Spinning Mills.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_13', name: 'Siddhi Knitfab', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Siddhi-Knitfab.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_14', name: 'Siyarams Silk Mills', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/siyarams.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_15', name: 'SK Exports', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/SK-Exports.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_16', name: 'SV Yarns', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Sv-Yarns-Logo.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_17', name: 'Texin India', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Texin India.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_18', name: 'Toplight Fabrics', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/Toplight Fabrics Pvt Ltd.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
    { id: 'FE_SL_19', name: 'VP Tex', logo: 'https://sl.intexsouthasia.com/assets/img/exhibitor-logo/vptex.png', country: 'Sri Lanka', category: 'Textile', booth: 'TBA' },
  ]
};

const FeaturedExhibitorsPage: React.FC = () => {
  const [activeShow, setActiveShow] = useState('BANGLADESH');
  const scrollRef = useRef<HTMLDivElement>(null);

  const shows = Object.keys(FEATURED_DATA);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Reset scroll position on active show change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [activeShow]);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Header Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              Featured <br className="hidden lg:inline" />
              <span className="text-white">Exhibitors.</span>
            </h1>
          </div>

          {/* Show Tabs Selector */}
          <div className="flex flex-col sm:flex-row border border-archive-charcoal/10 bg-white p-2 shrink-0">
            {shows.map((show) => {
              const dates: Record<string, string> = {
                'BANGLADESH': '18-20 JUNE, 2026',
                'SRI LANKA': '5-7 AUGUST 2026'
              };
              return (
                <button
                  key={show}
                  onClick={() => setActiveShow(show)}
                  className={`px-8 py-4 text-[15px] font-black tracking-widest transition-all uppercase ${activeShow === show ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                >
                  INTEX {show}
                  <span className="opacity-60 font-bold block mt-1">{dates[show]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto min-h-[480px] relative group/slider">
        {/* Navigation Buttons */}
        <div className="absolute left-6 md:left-12 top-[180px] -translate-y-1/2 z-20 flex gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="w-14 h-14 bg-white/90 hover:bg-archive-charcoal hover:text-white border border-archive-charcoal/10 flex items-center justify-center transition-all duration-300 shadow-lg text-archive-charcoal backdrop-blur-md rounded-full"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className="absolute right-6 md:right-12 top-[180px] -translate-y-1/2 z-20 flex gap-2">
          <button
            onClick={() => handleScroll('right')}
            className="w-14 h-14 bg-white/90 hover:bg-archive-charcoal hover:text-white border border-archive-charcoal/10 flex items-center justify-center transition-all duration-300 shadow-lg text-archive-charcoal backdrop-blur-md rounded-full"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeShow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Horizontal Scroll Area */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 pt-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {FEATURED_DATA[activeShow].map((ex) => (
                <div
                  key={ex.id}
                  className="flex-shrink-0 w-[340px] snap-start bg-white group/card relative overflow-hidden flex flex-col h-[400px] border border-archive-charcoal/10 hover:bg-archive-charcoal transition-all duration-700 shadow-sm hover:shadow-md"
                >
                  {/* Logo Frame */}
                  <div className="h-[68%] p-4 flex items-center justify-center relative bg-white transition-colors duration-700">
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                      <img
                        src={ex.logo}
                        alt={ex.name}
                        className="w-[280px] h-[200px] max-w-full max-h-full object-contain transition-all duration-700 group-hover/card:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${ex.name}&background=F3EBE8&color=2F2C2C&bold=true`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Info Frame */}
                  <div className="h-[32%] flex flex-col justify-between p-6 bg-archive-cream/30 group-hover/card:text-white transition-colors duration-700">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight leading-snug group-hover/card:text-archive-clay transition-colors duration-500 line-clamp-2">
                        {ex.name}
                      </h3>
                    </div>

                    <div className="pt-4 border-t border-archive-charcoal/5 group-hover/card:border-white/10 flex gap-2 items-center w-full">
                      <span className="text-[15px] font-black tracking-widest uppercase">Visit Website</span>
                      <ArrowUpRight size={14} className="text-archive-clay transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default FeaturedExhibitorsPage;

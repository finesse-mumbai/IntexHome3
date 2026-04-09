
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Database, LayoutGrid, Fingerprint } from 'lucide-react';

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
  ],
  'INDIA': [
    { id: 'FE_IN_01', name: 'Raymond Luxury', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400', country: 'India', category: 'Suiting Fabrics', booth: 'I-501' },
    { id: 'FE_IN_02', name: 'Arvind Limited', logo: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=400', country: 'India', category: 'Denim Solutions', booth: 'I-202' },
    { id: 'FE_IN_03', name: 'Birla Cellulose', logo: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400', country: 'India', category: 'Man-made Fibres', booth: 'I-101' },
    { id: 'FE_IN_04', name: 'Grasim Industries', logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400', country: 'India', category: 'Industrial Textiles', booth: 'I-303' },
    { id: 'FE_IN_05', name: 'Trident Group', logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400', country: 'India', category: 'Home Textiles', booth: 'I-404' },
  ]
};

const FeaturedExhibitorsPage: React.FC = () => {
  const [activeShow, setActiveShow] = useState('BANGLADESH');

  const shows = Object.keys(FEATURED_DATA);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Header Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Elite Registry // Node Selection</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              FEATURED <br />
              <span className="text-white">EXHIBITORS.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black uppercase text-archive-charcoal/80 leading-tight">
                Showcasing the <span className="text-archive-clay">strategic leaders</span> driving textile innovation across the South Asian matrix.
              </p>
            </div>

            {/* Show Tabs Selector */}
            <div className="flex border border-archive-charcoal/10 bg-white p-2">
              {shows.map((show) => (
                <button
                  key={show}
                  onClick={() => setActiveShow(show)}
                  className={`px-8 py-4 text-[10px] font-black tracking-widest uppercase transition-all ${activeShow === show ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                >
                  INTEX {show}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-l border-archive-charcoal/10"
          >
            {FEATURED_DATA[activeShow].map((ex, idx) => (
              <motion.div
                key={ex.id}
                className="bg-white group relative overflow-hidden flex flex-col h-[340px] border-b border-r border-archive-charcoal/10 hover:bg-archive-charcoal transition-all duration-700"
              >
                {/* Logo Frame */}
                {/* Logo Frame */}
                <div className="h-[60%] p-12 flex items-center justify-center relative bg-white group-hover:bg-white transition-colors duration-700">
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                    <img
                      src={ex.logo}
                      alt={ex.name}
                      className="w-[150px] h-[180px] object-contain transition-all duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${ex.name}&background=F3EBE8&color=2F2C2C&bold=true`;
                      }}
                    />

                  </div>
                </div>

                {/* Info Frame */}
                <div className="h-[40%] flex flex-col  gap-3 bg-archive-cream/30 group-hover:text-white transition-colors duration-700">
                  <div>
                    <h3 className="text-xl font-black py-4 pl-4 uppercase tracking-tighter leading-none group-hover:text-archive-clay transition-colors duration-500">
                      {ex.name}
                    </h3>
                  </div>

                  <div className="pt-4 pl-4 border-t border-archive-charcoal/5 group-hover:border-white/10 flex gap-4 w-full">
                    <div className="flex  gap-2">
                      <LayoutGrid size={12} className="text-archive-clay" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Visit Website</span>
                    </div>
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all text-archive-clay" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Technical CTA Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="bg-archive-charcoal p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <ShieldCheck size={200} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-center">
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center gap-4">
                <Database size={16} className="text-archive-clay" />
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Exhibition Management</span>
              </div>
              <h2 className="text-xs md:text-sm font-black uppercase tracking-tighter leading-[0.9]">
                Get your brand <br /> <span className="text-archive-clay">indexed as featured.</span>
              </h2>
              <p className="text-[12px] font-bold uppercase tracking-widest leading-relaxed text-white/40 max-w-xl">
                Featured exhibitors receive priority placement across all digital directories, physical signage, and post-show media coverage.
                Enquire today to elevate your visibility in the 2026 Archive.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <button className="w-full lg:w-auto px-12 py-6 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal transition-all">
                Apply for Featured Status
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Shutter Detail */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default FeaturedExhibitorsPage;

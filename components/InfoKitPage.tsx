
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Layout, PenTool, Database, ArrowRight, ShieldCheck, FileCheck } from 'lucide-react';

interface InfoKitAsset {
  id: string;
  type: 'BROCHURE' | 'LOGO' | 'FORM';
  title: string;
  description: string;
  downloadUrl: string;
  fileSize: string;
}

const KIT_DATA: Record<string, InfoKitAsset[]> = {
  'BANGLADESH': [
    { id: 'BD_KIT_01', type: 'BROCHURE', title: 'Show Brochure', description: 'Comprehensive guide to Intex Bangladesh 2026 including floor plans and exhibitor profiles.', downloadUrl: 'https://bd.intexsouthasia.com/assets/pdf/Brochure.pdf', fileSize: '4.2 MB' },
    { id: 'BD_KIT_02', type: 'LOGO', title: 'Event Logo', description: 'Vector and raster assets for marketing and branding integration.', downloadUrl: 'https://bd.intexsouthasia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ff36e4e2.png&w=384&q=75', fileSize: '1.8 MB' },
    { id: 'BD_KIT_03', type: 'FORM', title: 'Booth Application Form', description: 'Mandatory technical registration document for space reservation.', downloadUrl: 'https://bd.intexsouthasia.com/assets/pdf/application-form.pdf', fileSize: '0.5 MB' },
  ],
  'SRI LANKA': [
    { id: 'SL_KIT_01', type: 'BROCHURE', title: 'Show Brochure', description: 'The definitive 17th Edition guide for the Colombo summit.', downloadUrl: 'https://sl.intexsouthasia.com/assets/pdf/Brochure.pdf', fileSize: '3.9 MB' },
    { id: 'SL_KIT_02', type: 'LOGO', title: 'Event Logo', description: 'Official branding toolkit for media and partners.', downloadUrl: 'https://sl.intexsouthasia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ff36e4e2.png&w=384&q=75', fileSize: '2.1 MB' },
    { id: 'SL_KIT_03', type: 'FORM', title: 'Booth Application Form', description: 'Verified space booking protocol for Sri Lanka 2026.', downloadUrl: 'https://sl.intexsouthasia.com/assets/pdf/application-form.pdf', fileSize: '0.6 MB' },
  ],

};

const InfoKitPage: React.FC = () => {
  const [activeShow, setActiveShow] = useState('BANGLADESH');
  const shows = Object.keys(KIT_DATA);

  const getIcon = (type: string) => {
    switch (type) {
      case 'BROCHURE': return <FileText size={24} strokeWidth={1.5} />;
      case 'LOGO': return <Layout size={24} strokeWidth={1.5} />;
      case 'FORM': return <PenTool size={24} strokeWidth={1.5} />;
      default: return <Database size={24} strokeWidth={1.5} />;
    }
  };

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-24">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">Technical Inventory // Asset Kit</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              INFO <br />
              <span className="text-white">KITS.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black text-archive-charcoal/80 leading-tight">
                ACCESSING THE <span className="text-archive-clay uppercase">VERIFIED ASSET MANIFEST</span> FOR UPCOMING GLOBAL EXHIBITION NODES.
              </p>
            </div>

            <div className="flex border border-archive-charcoal/10 bg-white p-2">
              {shows.map((show) => (
                <button
                  key={show}
                  onClick={() => setActiveShow(show)}
                  className={`px-8 py-4 text-[10px] font-black tracking-widest transition-all ${activeShow === show ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                >
                  {show.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Asset Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {KIT_DATA[activeShow].map((asset, idx) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white group p-4 md:p-8 flex flex-col justify-between h-[500px] relative overflow-hidden hover:bg-archive-charcoal transition-all duration-700"
              >
                {/* Background Decor */}
                <div className="absolute -bottom-8 -right-8 text-[10rem] font-black text-archive-charcoal/[0.03] group-hover:text-white/[0.03] select-none pointer-events-none transition-colors duration-700">
                  0{idx + 1}
                </div>

                <div className="space-y-12 relative z-10">
                  <div className="w-full">
                    {asset.downloadUrl && asset.downloadUrl !== '#' ? (
                      <div className="w-full h-64 mb-2 border border-archive-charcoal/10 bg-archive-cream/30 overflow-hidden relative group-hover:border-archive-clay transition-colors">
                        {asset.type === 'LOGO' ? (
                          <img
                            src={asset.downloadUrl}
                            alt={asset.title}
                            className="w-full h-full object-contain p-8 mix-blend-multiply"
                          />
                        ) : (
                          <iframe
                            src={`${asset.downloadUrl}#view=FitH&toolbar=0&navpanes=0`}
                            className="w-full h-full border-0"
                            title={asset.title}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="w-16 h-16 border border-archive-charcoal/10 flex items-center justify-center text-archive-clay group-hover:bg-archive-clay group-hover:text-white group-hover:border-archive-clay transition-all duration-500 mb-8">
                        {getIcon(asset.type)}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">

                    <h3 className="text-xl font-black text-archive-charcoal tracking-tighter leading-none group-hover:text-white transition-colors duration-500 uppercase">
                      {asset.title.toUpperCase()}
                    </h3>

                  </div>
                </div>

                <div className="relative z-10 border-t border-archive-charcoal/5 group-hover:border-white/10 flex justify-between items-end">

                  <a
                    href={asset.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 w-full bg-archive-charcoal text-white group-hover:bg-archive-clay transition-all flex items-center justify-between gap-4 text-[9px] font-black tracking-[0.3em]"
                  >
                    <span>DOWNLOAD</span> <Download size={14} className="uppercase" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>




    </div>
  );
};

export default InfoKitPage;

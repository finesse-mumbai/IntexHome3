
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
    { id: 'BD_KIT_01', type: 'BROCHURE', title: 'Official Show Brochure', description: 'Comprehensive guide to Intex Bangladesh 2026 including floor plans and exhibitor profiles.', downloadUrl: 'https://bd.intexsouthasia.com/assets/pdf/Brochure.pdf', fileSize: '4.2 MB' },
    { id: 'BD_KIT_02', type: 'LOGO', title: 'High-Res Event Logo', description: 'Vector and raster assets for marketing and branding integration.', downloadUrl: 'https://bd.intexsouthasia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ff36e4e2.png&w=384&q=75', fileSize: '1.8 MB' },
    { id: 'BD_KIT_03', type: 'FORM', title: 'Booth Application Form', description: 'Mandatory technical registration document for space reservation.', downloadUrl: 'https://bd.intexsouthasia.com/assets/pdf/application-form.pdf', fileSize: '0.5 MB' },
  ],
  'SRI LANKA': [
    { id: 'SL_KIT_01', type: 'BROCHURE', title: 'Official Show Brochure', description: 'The definitive 17th Edition guide for the Colombo summit.', downloadUrl: 'https://sl.intexsouthasia.com/assets/pdf/Brochure.pdf', fileSize: '3.9 MB' },
    { id: 'SL_KIT_02', type: 'LOGO', title: 'High-Res Event Logo', description: 'Official branding toolkit for media and partners.', downloadUrl: 'https://sl.intexsouthasia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ff36e4e2.png&w=384&q=75', fileSize: '2.1 MB' },
    { id: 'SL_KIT_03', type: 'FORM', title: 'Booth Application Form', description: 'Verified space booking protocol for Sri Lanka 2026.', downloadUrl: 'https://sl.intexsouthasia.com/assets/pdf/application-form.pdf', fileSize: '0.6 MB' },
  ],
  'INDIA': [
    { id: 'IN_KIT_01', type: 'BROCHURE', title: 'Official Show Brochure', description: 'New Delhi edition technical manual and sourcing index.', downloadUrl: '#', fileSize: '4.5 MB' },
    { id: 'IN_KIT_02', type: 'LOGO', title: 'High-Res Event Logo', description: 'Master identity assets for the Indian node.', downloadUrl: '#', fileSize: '1.5 MB' },
    { id: 'IN_KIT_03', type: 'FORM', title: 'Booth Application Form', description: 'Official registry protocol for the New Delhi exhibition.', downloadUrl: '#', fileSize: '0.4 MB' },
  ]
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
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Technical Inventory // Asset Kit</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              INFO <br />
              <span className="text-white">KITS.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black uppercase text-archive-charcoal/80 leading-tight">
                Accessing the <span className="text-archive-clay">verified asset manifest</span> for upcoming global exhibition nodes.
              </p>
            </div>

            <div className="flex border border-archive-charcoal/10 bg-white p-2">
              {shows.map((show) => (
                <button
                  key={show}
                  onClick={() => setActiveShow(show)}
                  className={`px-8 py-4 text-[10px] font-black tracking-widest uppercase transition-all ${activeShow === show ? 'bg-archive-charcoal text-white' : 'text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                >
                  {show}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-archive-charcoal/10 border border-archive-charcoal/10"
          >
            {KIT_DATA[activeShow].map((asset, idx) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white group p-12 md:p-16 flex flex-col justify-between h-[550px] relative overflow-hidden hover:bg-archive-charcoal transition-all duration-700"
              >
                {/* Background Decor */}
                <div className="absolute -bottom-8 -right-8 text-[10rem] font-black text-archive-charcoal/[0.03] group-hover:text-white/[0.03] select-none pointer-events-none transition-colors duration-700">
                  0{idx + 1}
                </div>

                <div className="space-y-12 relative z-10">
                  <div className="w-full">
                    {asset.downloadUrl && asset.downloadUrl !== '#' ? (
                      <div className="w-full h-48 mb-8 border border-archive-charcoal/10 bg-archive-cream/30 overflow-hidden relative group-hover:border-archive-clay transition-colors">
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

                    <h3 className="text-xl font-black uppercase text-archive-charcoal tracking-tighter leading-none group-hover:text-white transition-colors duration-500">
                      {asset.title}
                    </h3>
                    <div className="w-10 h-px bg-archive-clay/40 group-hover:w-full transition-all duration-700"></div>
                  </div>

                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] leading-relaxed text-archive-charcoal/40 group-hover:text-white/60 transition-colors">
                    {asset.description}
                  </p>
                </div>

                <div className="relative z-10 pt-10 border-t border-archive-charcoal/5 group-hover:border-white/10 mt-auto flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[8px] font-black tracking-widest text-archive-charcoal/30 group-hover:text-white/30 uppercase block">Size Protocol</span>
                    <span className="text-[11px] font-black text-archive-charcoal group-hover:text-archive-clay transition-colors">{asset.fileSize}</span>
                  </div>
                  <a
                    href={asset.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-archive-charcoal text-white group-hover:bg-archive-clay transition-all flex items-center gap-4 text-[9px] font-black tracking-[0.3em] uppercase"
                  >
                    DOWNLOAD <Download size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Info Protocol Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase text-archive-clay leading-none">Security & Distribution.</h2>
              <div className="w-20 h-px bg-archive-clay"></div>
            </div>
            <div className="space-y-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] leading-relaxed text-archive-charcoal/60">
                The Intex digital asset registry ensures all marketing and technical materials are synchronized with the latest show specifications. Use only official assets for external trade communications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Fidelity Standard", value: "Print-Ready Assets" },
                  { label: "Update Protocol", value: "Real-time Sync" },
                  { label: "Access Rights", value: "Verified Partners" },
                  { label: "Document Status", value: "Current 2026 Manifest" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2 border-l border-archive-charcoal/10 pl-6">
                    <span className="text-[8px] font-black tracking-widest uppercase opacity-40 block">{item.label}</span>
                    <span className="text-[11px] font-black uppercase text-archive-charcoal">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-archive-charcoal p-16 text-white space-y-12 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 opacity-5">
              <ShieldCheck size={200} />
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em] uppercase">Registration Desk</span>
              <h3 className="text-xl font-black uppercase leading-none">Custom Info <br /> Requests.</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 leading-relaxed">
                Require specialized technical datasets, custom booth layouts, or specific material sourcing reports? Contact our registry management for authorized data access.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal transition-all">
                  Request Credentials
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal hover:border-white transition-all flex items-center gap-3">
                  Registry Audit <FileCheck size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Technical Detail */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10 mt-32">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default InfoKitPage;

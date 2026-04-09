
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Award, Zap, ShieldCheck, Database, ArrowRight, FileText, Target } from 'lucide-react';

interface BrandingKit {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  fileSize: string;
  status: string;
}

const BRANDING_DATA: Record<string, BrandingKit[]> = {
  'SRI LANKA': [
    {
      id: 'BR_SL_26_MASTER',
      title: 'Branding Partnership Opportunities',
      description: 'Comprehensive guide to strategic branding opportunities for the 19th Edition in Colombo.',
      pdfUrl: 'https://sl.intexsouthasia.com/assets/pdf/Branding-Partnership-Opportunities.pdf',
      fileSize: '2.5 MB',
      status: 'OPEN'
    }
  ],
  'BANGLADESH': [
    {
      id: 'BR_BD_26_MASTER',
      title: 'Branding Partnership Opportunities',
      description: 'Dominant visibility protocols for the Dhaka edition. Connect with the world\'s second-largest apparel manufacturing hub.',
      pdfUrl: 'https://bd.intexsouthasia.com/assets/pdf/Branding-Partnership-Opportunities.pdf',
      fileSize: '3.0 MB',
      status: 'OPEN'
    }
  ],
  'INDIA': [
    {
      id: 'BR_IN_26_MASTER',
      title: 'New Delhi Alpha Program',
      description: 'Premium branding integration for the upcoming Indian node.',
      pdfUrl: '#',
      fileSize: 'TBD',
      status: 'SOON'
    }
  ]
};

const BrandingOpportunitiesPage: React.FC = () => {
  const [activeShow, setActiveShow] = useState('SRI LANKA');
  const shows = Object.keys(BRANDING_DATA);
  const activeKit = BRANDING_DATA[activeShow][0];

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-24">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Marketing Matrix // Partnership</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              BRANDING <br />
              <span className="text-white">OPPORTUNITIES.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black uppercase text-archive-charcoal/80 leading-tight">
                Elevate your <span className="text-archive-clay">global presence</span> through strategic partnership protocols across the Intex network.
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

      {/* Featured Opportunity */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeShow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-archive-charcoal/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* PDF Preview Side */}
              <div className="h-[500px] lg:h-[700px] bg-archive-charcoal/5 relative border-b lg:border-b-0 lg:border-r border-archive-charcoal/10 group p-8 lg:p-12">
                {activeKit.pdfUrl && activeKit.pdfUrl !== '#' ? (
                  <iframe
                    src={`${activeKit.pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
                    className="w-full h-full border border-archive-charcoal/10 shadow-sm bg-white"
                    title={activeKit.title}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center gap-6">
                    <Zap size={48} className="text-archive-charcoal/20" strokeWidth={1} />
                    <span className="text-archive-charcoal/40 text-[10px] font-black tracking-widest uppercase">Preview Unavailable</span>
                  </div>
                )}
                {/* Overlay only if no interaction wanted? User asked for preview on UI. Assuming interaction implies scroll. */}
              </div>

              {/* Info Side */}
              <div className="p-12 md:p-20 flex flex-col justify-between relative overflow-hidden bg-white">
                <div className="space-y-12 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-mono font-black text-archive-clay">{activeKit.id}</span>
                      <div className={`px-3 py-1 w-fit text-[8px] font-black uppercase tracking-widest ${activeKit.status === 'OPEN' ? 'bg-green-500/10 text-green-500' : 'bg-archive-clay/10 text-archive-clay'}`}>
                        Status // {activeKit.status}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-archive-charcoal tracking-tighter leading-[0.9]">
                      {activeKit.title}
                    </h3>
                    <div className="w-24 h-px bg-archive-clay/40"></div>
                    <p className="text-sm md:text-base font-medium uppercase tracking-[0.1em] leading-relaxed text-archive-charcoal/60 max-w-lg">
                      {activeKit.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-12 border-t border-archive-charcoal/5 mt-12 flex flex-col sm:flex-row justify-between items-end gap-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FileText size={12} className="text-archive-clay" />
                      <span className="text-[9px] font-black tracking-widest text-archive-charcoal/30 uppercase">Specimen Manifest</span>
                    </div>
                    <span className="text-[12px] font-black text-archive-charcoal">{activeKit.fileSize} PDF Asset</span>
                  </div>
                  {activeKit.pdfUrl && activeKit.pdfUrl !== '#' ? (
                    <a
                      href={activeKit.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-12 py-6 bg-archive-charcoal text-white hover:bg-archive-clay transition-all flex items-center justify-between gap-6 text-[10px] font-black tracking-[0.4em] uppercase group"
                    >
                      DOWNLOAD KIT <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                    </a>
                  ) : (
                    <button disabled className="w-full sm:w-auto px-12 py-6 bg-archive-charcoal/10 text-archive-charcoal/40 cursor-not-allowed flex items-center justify-between gap-6 text-[10px] font-black tracking-[0.4em] uppercase">
                      COMING SOON
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Strategic Value Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase text-archive-clay leading-none">Partnership Integrity.</h2>
              <div className="w-20 h-px bg-archive-clay"></div>
            </div>
            <div className="space-y-8">
              <p className="text-[13px] font-bold uppercase tracking-[0.15em] leading-relaxed text-archive-charcoal/60">
                Our branding protocols are designed to ensure maximum synergy between partner identities and the high-end industrial aesthetic of Intex South Asia. Every touchpoint is a technical specimen of brand excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { label: "Reach Delta", value: "Multi-Node Visibility" },
                  { label: "Targeting", value: "High-Value Buyers" },
                  { label: "Asset Quality", value: "4K Video & Print" },
                  { label: "Verification", value: "Audited Impression Data" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2 border-l border-archive-charcoal/10 pl-6">
                    <span className="text-[8px] font-black tracking-widest uppercase opacity-40 block">{item.label}</span>
                    <span className="text-[12px] font-black uppercase text-archive-charcoal">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-archive-charcoal p-16 text-white space-y-12 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 opacity-5">
              <Target size={200} />
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em] uppercase">Executive Portal</span>
              <h3 className="text-xl font-black uppercase leading-none">Custom Alpha <br /> Partnerships.</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 leading-relaxed">
                Require a bespoke sponsorship manifest tailored to specific regional goals or product launches? Our partnership desk facilitates high-tier technical integration for global leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal transition-all">
                  Request Consultation
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal hover:border-white transition-all flex items-center gap-3">
                  Registry Audit <ShieldCheck size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Shutter */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10 mt-32">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default BrandingOpportunitiesPage;

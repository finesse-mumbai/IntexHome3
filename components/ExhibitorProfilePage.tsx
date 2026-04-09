
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Plus, Cpu, Database, Info, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

const ExhibitorProfilePage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Technical Catalog // 2025</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              EXHIBITOR <br />
              <span className="text-white">PROFILES.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl font-black uppercase text-archive-charcoal/80 leading-tight">
                A specialized directory of <span className="text-archive-clay">global manufacturing powerhouses</span> spanning the entire textile value chain.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-end">
              <div className="flex items-center gap-8 border border-archive-charcoal/10 p-6 bg-white/50 backdrop-blur-sm">
                <div className="text-center px-4 border-r border-archive-charcoal/10">
                  <div className="text-3xl font-black text-archive-clay">08</div>
                  <div className="text-[8px] font-black tracking-widest uppercase opacity-40">Categories</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-3xl font-black text-archive-clay">3K+</div>
                  <div className="text-[8px] font-black tracking-widest uppercase opacity-40">Exhibitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid - Detailed Expansion of Home Style */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-archive-charcoal/10 border border-archive-charcoal/10">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white group relative aspect-[4/5] overflow-hidden flex flex-col"
            >
              {/* Image Layer */}
              <div className="h-2/3 relative overflow-hidden bg-black">
                <img
                  src={cat.imageUrl}
                  alt={cat.title}
                  className="w-full h-full object-cover brightness-50 group-hover:scale-110 group-hover:brightness-[0.3] transition-all duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal via-transparent to-transparent opacity-60"></div>

                {/* Tech Overlays */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                    <span className="text-[10px] font-mono font-black text-white">{(idx + 1).toString().padStart(2, '0')}</span>
                  </div>

                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-archive-clay transition-colors">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Content Layer */}
              <div className="h-1/3 p-8 flex flex-col justify-between bg-white group-hover:bg-archive-charcoal transition-all duration-500">
                <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed text-archive-charcoal/50 group-hover:text-white/60 line-clamp-3">
                  {cat.description}
                </p>

                <div className="pt-6 flex justify-between items-center border-t border-archive-charcoal/5 group-hover:border-white/10">
                  <button className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-archive-clay hover:text-white transition-colors group/btn">
                    Download Brochure <ArrowUpRight size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                  <Layers size={14} className="text-archive-charcoal/20 group-hover:text-archive-clay" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Footer Informational Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase text-archive-clay leading-none">Sourcing Excellence.</h2>
              <div className="w-20 h-px bg-archive-clay"></div>
            </div>
            <div className="space-y-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] leading-relaxed text-archive-charcoal/60">
                The Intex exhibitor registry is a hand-picked collection of manufacturers who meet stringent quality and ethical standards. From raw fibers to high-tech software, every specimen in our archive represents the peak of textile engineering.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Verified manufacturing units from 20+ countries",
                  "Sustainability-certified material suppliers",
                  "Pioneers in high-performance functional textiles",
                  "Industry 4.0 apparel technology providers"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-archive-charcoal">
                    <div className="w-1.5 h-1.5 bg-archive-clay rotate-45"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-archive-charcoal p-16 text-white space-y-12 relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Database size={80} />
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em] uppercase">Booth Enquiry</span>
              <h3 className="text-4xl font-black uppercase leading-none">Secure your space <br /> in the 2026 Archive.</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 leading-relaxed">
                Join the most influential sourcing show in South Asia. Limited premium booth spaces are now available for our upcoming editions in Dhaka, Colombo, and New Delhi.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal transition-all">
                  Enquire Now
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal hover:border-white transition-all">
                  Download Kit
                </button>
              </div>
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

export default ExhibitorProfilePage;


import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Search, Database, Calendar, MapPin, Camera, X, Layers, LayoutGrid } from 'lucide-react';

interface GalleryAsset {
  id: string;
  url: string;
  year: string;
  event: 'BANGLADESH' | 'SRI LANKA';
}

// Structuring the raw paths into technical specimens
const GALLERY_DATA: GalleryAsset[] = [
  // 2025 - BD Focus
  ...Array.from({ length: 40 }, (_, i) => ({
    id: `GAL_BD_25_${i + 1}`,
    url: `https://sl.intexsouthasia.com/assets/img/Gallery/2025/${i + 1}.jpg`,
    year: '2025',
    event: 'BANGLADESH' as const
  })),
  // 2024 - SL/BD Mixed
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `GAL_MIX_24_${i + 1}`,
    url: `https://sl.intexsouthasia.com/assets/img/Gallery/2024/large/${i + 1}.jpg`,
    year: '2024',
    event: 'SRI LANKA' as const
  })),
  // 2023 - SL/BD Mixed
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `GAL_MIX_23_${i + 1}`,
    url: `https://sl.intexsouthasia.com/assets/img/Gallery/2023/large/${i + 1}.jpg`,
    year: '2023',
    event: 'SRI LANKA' as const
  })),
  // 2022
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `GAL_MIX_22_${i + 1}`,
    url: `https://sl.intexsouthasia.com/assets/img/Gallery/2022/large/${i + 1}.jpg`,
    year: '2022',
    event: 'SRI LANKA' as const
  })),
  // 2019
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `GAL_MIX_19_${i + 1}`,
    url: `https://sl.intexsouthasia.com/assets/img/Gallery/2019/large/${i + 1}.jpg`,
    year: '2019',
    event: 'SRI LANKA' as const
  })),
  // 2018 - 2015 Archives
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `GAL_HIST_18_${i + 1}`,
    url: `https://sl.intexsouthasia.com/assets/img/Gallery/2018/large/${i + 1}.jpg`,
    year: '2018',
    event: 'BANGLADESH' as const
  }))
];

const PhotoGalleryPage: React.FC = () => {
  const [filterEvent, setFilterEvent] = useState<'ALL' | 'BANGLADESH' | 'SRI LANKA'>('ALL');
  const [filterYear, setFilterYear] = useState('ALL');
  const [selectedAsset, setSelectedAsset] = useState<GalleryAsset | null>(null);

  const years = ['ALL', '2025', '2024', '2023', '2022', '2019', '2018'];
  const events = ['ALL', 'BANGLADESH', 'SRI LANKA'];

  const filteredAssets = useMemo(() => {
    return GALLERY_DATA.filter(asset => {
      const eventMatch = filterEvent === 'ALL' || asset.event === filterEvent;
      const yearMatch = filterYear === 'ALL' || asset.year === filterYear;
      return eventMatch && yearMatch;
    });
  }, [filterEvent, filterYear]);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Visual Archive // Light Manifest</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              PHOTO <br />
              <span className="text-white">GALLERY.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 border-y border-archive-charcoal/10 py-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Regional Registry</span>
              <div className="flex flex-wrap gap-2">
                {events.map(ev => (
                  <button
                    key={ev}
                    onClick={() => setFilterEvent(ev as any)}
                    className={`px-8 py-3 text-[10px] font-black tracking-widest uppercase border transition-all ${filterEvent === ev ? 'bg-archive-charcoal text-white border-archive-charcoal' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {ev}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Cycle Timeline</span>
              <div className="flex flex-wrap gap-2">
                {years.map(yr => (
                  <button
                    key={yr}
                    onClick={() => setFilterYear(yr)}
                    className={`px-8 py-3 text-[10px] font-black tracking-widest uppercase border transition-all ${filterYear === yr ? 'bg-archive-clay border-archive-clay text-white' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid with "Fly Up" Animation */}
      <section className="px-6 md:px-12 max-w-[90vw] mx-auto min-h-[600px]">
        <div className="grid grid-cols-2 gap-px bg-archive-charcoal/10 border border-archive-charcoal/10">
          <AnimatePresence mode="popLayout">
            {filteredAssets.slice(0, 50).map((asset, idx) => (
              <motion.div
                key={asset.id}
                layout
                initial={{ opacity: 0, y: 200 + Math.random() * 300 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200, scale: 0.8 }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: Math.random() * 0.5
                }}
                className="bg-white group relative aspect-square overflow-hidden cursor-crosshair border border-transparent hover:border-archive-clay transition-colors duration-500"
                onClick={() => setSelectedAsset(asset)}
              >
                <img
                  src={asset.url}
                  alt={asset.id}
                  className="w-full h-full object-cover brightness-[0.85] group-hover:scale-105 group-hover:brightness-[0.4] transition-all duration-[1200ms] ease-out"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${asset.id}&background=F3EBE8&color=2F2C2C&bold=true`;
                  }}
                />

                {/* Refined Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-between items-start translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[7px] font-black tracking-widest border border-white/30 px-2 py-1 bg-black/20 uppercase backdrop-blur-sm">Specimen_{asset.id.split('_').pop()}</span>
                    <div className="w-8 h-8 rounded-full bg-archive-clay/20 border border-archive-clay/40 flex items-center justify-center backdrop-blur-md">
                      <Maximize2 size={12} className="text-white" />
                    </div>
                  </div>
                  <div className="space-y-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-archive-clay rounded-full shadow-[0_0_8px_rgba(180,140,110,0.8)]"></div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-archive-clay">{asset.event}</span>
                    </div>
                    <p className="text-[11px] font-black uppercase tracking-tighter">{asset.year} Visual Registry</p>
                  </div>
                </div>

                {/* Technical Corner Detail */}
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/0 group-hover:border-white/40 transition-colors duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredAssets.length === 0 && (
          <div className="py-60 flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-charcoal/30">Registry null result for selected node.</span>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-archive-charcoal/98 backdrop-blur-2xl flex items-center justify-center p-6 md:p-24"
            onClick={() => setSelectedAsset(null)}
          >
            <button className="absolute top-12 right-12 text-white/40 hover:text-white text-4xl font-light transition-colors group">
              <X size={40} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl aspect-square md:aspect-video bg-black relative border border-white/5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedAsset.url}
                className="w-full h-full object-contain hover:grayscale-0 transition-all duration-1000"
                alt={selectedAsset.id}
              />

              <div className="absolute -bottom-24 left-0 w-full flex justify-between items-end">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Camera size={14} className="text-archive-clay" />
                    <span className="text-archive-clay text-[10px] font-black tracking-[0.5em] uppercase">Archive Master Specimen // {selectedAsset.id}</span>
                  </div>
                  <h2 className="text-sm md:text-base font-black uppercase text-white tracking-tighter leading-none">
                    {selectedAsset.event} <span className="text-white/40">{selectedAsset.year} RECORD</span>
                  </h2>
                </div>
                <div className="flex gap-10 text-white/40 text-[10px] font-black tracking-widest uppercase">
                  <div className="flex flex-col gap-1 items-end">
                    <span className="opacity-40">System_Sync</span>
                    <span className="text-green-500 font-mono">VERIFIED</span>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <span className="opacity-40">Resolution</span>
                    <span className="text-white">HD_MASTER</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Narrative Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-black uppercase text-archive-clay leading-none">Static Heritage.</h2>
              <div className="w-20 h-px bg-archive-clay"></div>
            </div>
            <div className="space-y-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] leading-relaxed text-archive-charcoal/60">
                Our visual registry documents the tactile and architectural evolution of Intex South Asia. Spanning over a decade, these specimens represent the pinnacle of regional trade networking and material innovation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Archive Volume", value: "2000+ Master Assets" },
                  { label: "Asset Fidelity", value: "HD Technical Records" },
                  { label: "Indexing Status", value: "Publicly Accessible" },
                  { label: "System Sync", value: "Real-time Node Update" }
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
            <div className="absolute -bottom-8 -right-8 opacity-5">
              <LayoutGrid size={200} />
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.5em] uppercase">Media Request Terminal</span>
              <h3 className="text-xl font-black uppercase leading-none">Access the Full <br /> Visual Inventory.</h3>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 leading-relaxed">
                Require high-fidelity RAW files for publication or technical industry reports? Authenticated media partners may request terminal access to the full 10-year master visual registry.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal transition-all">
                  Request Terminal Access
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal hover:border-white transition-all flex items-center gap-3">
                  Sync Registry <Layers size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Technical Shutter */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default PhotoGalleryPage;

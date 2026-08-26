
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image as ImageIcon, Video, Youtube, Maximize2, Search, Database, Globe, Calendar, ArrowUpRight } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'IMAGE' | 'VIDEO';
  url: string;
  thumbnail?: string;
  title: string;
  country: string;
  year: number;
  eventName: string;
}

const MEDIA_DATA: MediaItem[] = [
  // BANGLADESH VIDEOS
  { id: 'MC_BD_25_01', type: 'VIDEO', url: "https://www.youtube.com/embed/1tH6rQob_g8", title: "Intex Dhaka Highlights", country: "Bangladesh", year: 2025, eventName: "Intex Bangladesh 2025" },
  { id: 'MC_BD_25_02', type: 'VIDEO', url: "https://www.youtube.com/embed/1tH6rQob_g8", title: "Channel 24 Coverage", country: "Bangladesh", year: 2025, eventName: "Intex Bangladesh 2025" },
  { id: 'MC_BD_24_01', type: 'VIDEO', url: "https://www.youtube.com/embed/wuVEgtI1lVA", title: "Post Show Report", country: "Bangladesh", year: 2024, eventName: "Intex Bangladesh 2024" },
  { id: 'MC_BD_24_02', type: 'VIDEO', url: "https://www.youtube.com/embed/jF5hgOrMOys", title: "Industry Insights", country: "Bangladesh", year: 2024, eventName: "Intex Bangladesh 2024" },
  { id: 'MC_BD_23_01', type: 'VIDEO', url: "https://www.youtube.com/embed/wGI9HA0n1c4", title: "Grand Opening", country: "Bangladesh", year: 2023, eventName: "Intex Bangladesh 2023" },

  // SRI LANKA IMAGES (MAPPED FROM PROVIDED LIST)
  ...Array.from({ length: 12 }, (_, i) => ({
    id: `MC_SL_25_${i + 1}`,
    type: 'IMAGE' as const,
    url: `https://sl.intexsouthasia.com/assets/img/media-coverage/${i + 1}.png`,
    title: `Media Snapshot ${i + 1}`,
    country: "Sri Lanka",
    year: 2025,
    eventName: "Intex Sri Lanka 2025"
  })),

  // SRI LANKA VIDEOS
  { id: 'MC_SL_24_01', type: 'VIDEO', url: "https://www.youtube.com/embed/U7EjFuynbdk", title: "Exhibitor Interviews", country: "Sri Lanka", year: 2024, eventName: "Intex Sri Lanka 2024" },
  { id: 'MC_SL_24_02', type: 'VIDEO', url: "https://www.youtube.com/embed/2GRe7bpO-LQ", title: "Show Floor Tour", country: "Sri Lanka", year: 2024, eventName: "Intex Sri Lanka 2024" },
  { id: 'MC_SL_23_01', type: 'VIDEO', url: "https://www.youtube.com/embed/cZ0YJsICb7U", title: "Press Briefing", country: "Sri Lanka", year: 2023, eventName: "Intex Sri Lanka 2023" },
  { id: 'MC_SL_23_02', type: 'VIDEO', url: "https://www.youtube.com/embed/LHcnMNdY0-I", title: "Visual Diary", country: "Sri Lanka", year: 2023, eventName: "Intex Sri Lanka 2023" }
];

const MediaCoveragePage: React.FC = () => {
  const navigate = useNavigate();
  const [filterLocation, setFilterLocation] = useState('ALL');
  const [filterYear, setFilterYear] = useState('ALL');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredData = useMemo(() => {
    return MEDIA_DATA.filter(item => {
      const locMatch = filterLocation === 'ALL' || item.country === filterLocation;
      const yearMatch = filterYear === 'ALL' || item.year.toString() === filterYear;
      return locMatch && yearMatch;
    });
  }, [filterLocation, filterYear]);

  const locations = ['ALL', 'BANGLADESH', 'SRI LANKA'];
  const years = ['ALL', '2025', '2024', '2023'];

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              MEDIA <br />
              <span className="text-white">COVERAGE.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 border-y border-archive-charcoal/10 py-12">
            <div className="space-y-4">
              <span className="text-[14px] font-black tracking-widest opacity-40">Exhibition Country</span>
              <div className="flex flex-wrap gap-2">
                {locations.map(loc => (
                  <button
                    key={loc}
                    onClick={() => setFilterLocation(loc)}
                    className={`px-8 py-3 text-[14px] font-black tracking-widest border transition-all ${filterLocation === loc ? 'bg-archive-charcoal text-white border-archive-charcoal' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[14px] font-black tracking-widest opacity-40">Exhibition Year</span>
              <div className="flex flex-wrap gap-2">
                {years.map(yr => (
                  <button
                    key={yr}
                    onClick={() => setFilterYear(yr)}
                    className={`px-8 py-3 text-[14px] font-black tracking-widest border transition-all ${filterYear === yr ? 'bg-archive-clay border-archive-clay text-white' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Media */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.03 }}
                className="bg-white group relative aspect-square overflow-hidden flex flex-col hover:bg-archive-charcoal transition-all duration-700"
                onClick={() => setSelectedMedia(item)}
              >
                {/* Visual Content Frame */}
                <div className="flex-1 relative overflow-hidden bg-archive-cream/30">
                  {item.type === 'VIDEO' ? (
                    <iframe
                      src={item.url}
                      title={item.title}
                      className="w-full h-full border-0 object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover brightness-90 group-hover:scale-110 group-hover:brightness-50 transition-all duration-[2000ms]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                  )}


                </div>

                {/* Info Frame */}
                <div className="p-8 flex flex-col justify-between group-hover:text-white transition-colors duration-700 h-1/3">
                  <div className="space-y-3">

                    <h3 className="text-lg font-black tracking-tighter leading-[0.9] group-hover:text-archive-clay transition-colors duration-500 line-clamp-2 pb-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-archive-charcoal/5 group-hover:border-white/10 flex justify-between items-center">
                    <div className="flex  w-full justify-between">
                      <div className="flex items-center gap-2">
                        <Globe size={10} className="text-archive-clay" />
                        <span className="text-[14px] font-black uppercase">{item.country}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={10} className="text-archive-clay" />
                        <span className="text-[14px] font-black">{item.year}</span>
                      </div>
                    </div>
                    <Maximize2 size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredData.length === 0 && (
          <div className="py-60 flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[14px] font-black tracking-[0.5em] text-archive-charcoal/30 uppercase">NO MATCHING MEDIA RECORDS FOUND.</span>
          </div>
        )}
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-archive-charcoal/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-24"
            onClick={() => setSelectedMedia(null)}
          >
            <button className="absolute top-12 right-12 text-white/40 hover:text-white text-4xl font-light transition-colors">&times;</button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-6xl aspect-video bg-black relative group"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'VIDEO' ? (
                <iframe
                  className="w-full h-full hover:grayscale-0 transition-all duration-700"
                  src={selectedMedia.url + "?autoplay=1&mute=0"}
                  title={selectedMedia.title}
                  allowFullScreen
                />
              ) : (
                <img src={selectedMedia.url} className="w-full h-full object-contain" alt={selectedMedia.title} />
              )}

              <div className="absolute -bottom-24 left-0 w-full flex justify-between items-end">
                <div className="space-y-4">
                  <span className="text-archive-clay text-[14px] font-black tracking-[0.5em] uppercase">{selectedMedia.eventName}</span>
                  <h2 className="text-[14px] md:text-base font-black text-white tracking-tighter uppercase">{selectedMedia.title.toUpperCase()}</h2>
                </div>
                <div className="flex gap-10 text-white/40 text-[14px] font-black tracking-widest">
                  <div className="flex flex-col gap-1 items-end">
                    <span className="opacity-40">Ref_ID</span>
                    <span className="text-white font-mono">{selectedMedia.id}</span>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <span className="opacity-40">Archive_Node</span>
                    <span className="text-white">{selectedMedia.country}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-width Rectangular Media Registration Box */}
      <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="bg-archive-charcoal p-12 md:p-16 text-white relative overflow-hidden shadow-2xl border border-archive-charcoal/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
            <Video size={240} />
          </div>

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-archive-clay"></div>
              <span className="text-archive-clay text-[14px] font-black tracking-[0.5em] uppercase">Press Desk</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase leading-[0.95]">
              Media <span className="text-archive-clay">Registration.</span>
            </h3>
            <p className="text-[14px] md:text-base font-bold tracking-widest text-white/50 leading-relaxed">
              Journalists and industry analysts may request access to our master visual server for high-fidelity assets, unedited footage, and executive interview manifests.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => {
                navigate('/media-registration');
                window.scrollTo(0, 0);
              }}
              className="px-10 py-5 bg-archive-clay text-white font-black text-[14px] tracking-[0.3em] hover:bg-white hover:text-archive-charcoal transition-all uppercase shadow-xl"
            >
              CLICK HERE FOR MEDIA REGISTRATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaCoveragePage;

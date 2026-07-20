import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Video, Youtube, Maximize2, Search, Database, Calendar, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface VideoRecord {
  id: string;
  year: string;
  url: string;
  event: string;
  title: string;
}

const VIDEO_ARCHIVE: VideoRecord[] = [
  // SRI LANKA Node
  { id: 'VID_SL_24', year: "2024", url: "https://www.youtube.com/embed/nwWELI2tK0c", event: "Sri Lanka", title: "Intex Sri Lanka 2024 Highlights" },
  { id: 'VID_SL_23', year: "2023", url: "https://www.youtube.com/embed/ow0PVSukAao", event: "Sri Lanka", title: "Intex Sri Lanka 2023 Highlights" },
  { id: 'VID_SL_22', year: "2022", url: "https://www.youtube.com/embed/zSL06CywXLQ", event: "Sri Lanka", title: "Intex Sri Lanka 2022 Highlights" },
  { id: 'VID_SL_19', year: "2019", url: "https://www.youtube.com/embed/RiLCNrYHLtE", event: "Sri Lanka", title: "Intex Sri Lanka 2019 Highlights" },

  // BANGLADESH Node
  { id: 'VID_BD_24', year: "2024", url: "https://www.youtube.com/embed/id-aZ_cv-10", event: "Bangladesh", title: "Intex Bangladesh 2024 Highlights" },
  { id: 'VID_BD_23', year: "2023", url: "https://www.youtube.com/embed/xLKhuLPzti8", event: "Bangladesh", title: "Intex Bangladesh 2023 Highlights" },
  { id: 'VID_BD_18', year: "2018", url: "https://www.youtube.com/embed/lN_1aeyFBXs", event: "Bangladesh", title: "Intex Bangladesh 2018 Highlights" },
  { id: 'VID_BD_17', year: "2017", url: "https://www.youtube.com/embed/jwMWUkB8-D4", event: "Bangladesh", title: "Intex Bangladesh 2017 Highlights" },
  { id: 'VID_BD_16', year: "2016", url: "https://www.youtube.com/embed/MBDlirZWSqU", event: "Bangladesh", title: "Intex Bangladesh 2016 Highlights" },
];

const PostShowVideoPage: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState('ALL');
  const [activeYear, setActiveYear] = useState('ALL');
  const [focusedVideo, setFocusedVideo] = useState<VideoRecord | null>(null);

  const events = ['ALL', 'SRI LANKA', 'BANGLADESH'];
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(VIDEO_ARCHIVE.map(v => v.year))).sort((a, b) => b.localeCompare(a));
    return ['ALL', ...uniqueYears];
  }, []);

  const filteredVideos = useMemo(() => {
    return VIDEO_ARCHIVE.filter(v => {
      const eventMatch = activeEvent === 'ALL' || v.event === activeEvent;
      const yearMatch = activeYear === 'ALL' || v.year === activeYear;
      return eventMatch && yearMatch;
    });
  }, [activeEvent, activeYear]);

  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Page Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[14px] font-black tracking-[0.5em] text-archive-clay uppercase">Motion Archive // Post Show Highlights</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] text-archive-charcoal uppercase">
              POST SHOW <br />
              <span className="text-white">VIDEOS.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 border-y border-archive-charcoal/10 py-12">
            <div className="space-y-4">
              <span className="text-[14px] font-black tracking-widest opacity-40">Regional Node</span>
              <div className="flex flex-wrap gap-2">
                {events.map(ev => (
                  <button
                    key={ev}
                    onClick={() => setActiveEvent(ev)}
                    className={`px-8 py-3 text-[14px] font-black tracking-widest border transition-all ${activeEvent === ev ? 'bg-archive-charcoal text-white border-archive-charcoal' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {ev}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[14px] font-black tracking-widest opacity-40">Cycle Year</span>
              <div className="flex flex-wrap gap-2">
                {years.map(yr => (
                  <button
                    key={yr}
                    onClick={() => setActiveYear(yr)}
                    className={`px-8 py-3 text-[14px] font-black tracking-widest border transition-all ${activeYear === yr ? 'bg-archive-clay border-archive-clay text-white' : 'border-archive-charcoal/10 text-archive-charcoal/40 hover:text-archive-charcoal'}`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.05
                }}
                className="bg-white group p-10 flex flex-col justify-between h-[520px] relative overflow-hidden hover:bg-archive-charcoal transition-all duration-700 cursor-pointer"
                onClick={() => setFocusedVideo(video)}
              >
                {/* Visual Preview Frame */}
                <div className="h-2/3 relative overflow-hidden bg-archive-charcoal/5 border border-archive-charcoal/5 group-hover:border-white/10 transition-colors">
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* Content Frame */}
                <div className="h-1/3 pt-10 flex flex-col justify-between group-hover:text-white transition-colors duration-700">
                  <div className="space-y-4">
                    <h3 className="text-xl font-black tracking-tighter leading-none group-hover:text-archive-clay transition-colors duration-500 line-clamp-2">
                      {video.title}
                    </h3>
                  </div>

                  <div className="pt-6 border-t w-full flex justify-between border-archive-charcoal/5 group-hover:border-white/10 flex justify-between items-center">
                    <div className="flex gap-8">
                      <div className="flex items-center gap-2">
                        <MapPin size={15} className="text-archive-clay" />
                        <span className="text-[14px] font-black text-black/50">{video.event}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={15} className="text-archive-clay" />
                        <span className="text-[14px] font-black text-black/50">{video.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-[14px] font-black tracking-widest text-archive-clay  transition-all">
                      WATCH <ArrowUpRight size={15} className="uppercase" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredVideos.length === 0 && (
          <div className="py-60 flex flex-col items-center justify-center border border-dashed border-archive-charcoal/20 text-center">
            <Search size={40} className="text-archive-clay/20 mb-6" />
            <span className="text-[14px] font-black tracking-[0.5em] text-archive-charcoal/30 uppercase">No matching highlight tapes found.</span>
          </div>
        )}
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {focusedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-archive-charcoal/98 backdrop-blur-2xl flex items-center justify-center p-6 md:p-24"
            onClick={() => setFocusedVideo(null)}
          >
            <button className="absolute top-12 right-12 text-white/40 hover:text-white text-4xl font-light transition-colors">&times;</button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="w-full max-w-6xl aspect-video bg-black relative border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full hover:grayscale-0 transition-all duration-1000"
                src={`${focusedVideo.url}?autoplay=1&mute=0`}
                title={focusedVideo.title}
                allowFullScreen
              />

              <div className="absolute -bottom-24 left-0 w-full flex justify-between items-end">
                <div className="space-y-4">
                  <span className="text-archive-clay text-[14px] font-black tracking-[0.5em] uppercase">Archive Master Record // {focusedVideo.year}</span>
                  <h2 className="text-[14px] md:text-base font-black text-white tracking-tighter uppercase">{focusedVideo.title}</h2>
                </div>
                <div className="flex gap-12 text-white/40 text-[14px] font-black tracking-widest">
                  <div className="flex flex-col gap-1 items-end">
                    <span className="opacity-40">System_Status</span>
                    <span className="text-green-500">Live Streaming</span>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <span className="opacity-40">Source_Node</span>
                    <span className="text-white">{focusedVideo.event}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Technical Detail */}
      <div className="h-4 relative overflow-hidden opacity-10">
        <div className="absolute inset-0"></div>
      </div>
    </div>
  );
};

export default PostShowVideoPage;

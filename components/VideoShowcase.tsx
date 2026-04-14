
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Activity, MonitorPlay, X, ArrowLeft, ArrowRight } from 'lucide-react';

const VIDEOS = [
    { 
        id: 'v1', 
        title: 'Strategic Forum Highlights', 
        role: 'Intex Sourcing', 
        url: 'https://www.youtube.com/embed/VCDUdLZfZeY',
        youtubeId: 'VCDUdLZfZeY' 
    },
    { 
        id: 'v2', 
        title: 'Global Industry Summit', 
        role: 'Industry Mixer', 
        url: 'https://www.youtube.com/embed/KmkzgC3-KAQ',
        youtubeId: 'KmkzgC3-KAQ' 
    },
    { 
        id: 'v3', 
        title: 'Archival Highlight Record', 
        role: 'Show Highlights', 
        url: 'https://www.youtube.com/embed/nwWELI2tK0c',
        youtubeId: 'nwWELI2tK0c' 
    },
];

const VideoShowcase: React.FC = () => {
    const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setActiveVideoIndex((prev) => (prev !== null ? (prev + 1) % VIDEOS.length : 0));
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setActiveVideoIndex((prev) => (prev !== null ? (prev - 1 + VIDEOS.length) % VIDEOS.length : VIDEOS.length - 1));
    };

    const Modal = () => {
        if (activeVideoIndex === null) return null;
        const currentVideo = VIDEOS[activeVideoIndex];

        return createPortal(
            <AnimatePresence>
                <div className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        onClick={() => setActiveVideoIndex(null)}
                    />
                    
                    {/* Header Controls */}
                    <div className="absolute top-6 left-6 right-6 md:top-10 md:left-10 md:right-10 flex justify-between items-center z-[100000]">
                         <div className="text-white bg-white/5 backdrop-blur-md px-6 py-2 border border-white/10 rounded-full hidden md:block">
                             <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Highlight Specimen: </span>
                             <span className="text-[10px] font-black tracking-widest uppercase">0{activeVideoIndex + 1} // 03</span>
                         </div>
                         
                         <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={() => setActiveVideoIndex(null)}
                            className="w-12 h-12 md:w-14 md:h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-archive-clay hover:text-white transition-all group"
                        >
                            <X size={28} className="group-hover:rotate-90 transition-transform duration-500" />
                        </motion.button>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="fixed left-4 md:left-10 top-1/2 -translate-y-1/2 z-[100000] w-12 h-12 md:w-16 md:h-16 bg-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 hover:bg-white hover:text-black transition-all group shadow-2xl"
                    >
                        <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 z-[100000] w-12 h-12 md:w-16 md:h-16 bg-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 hover:bg-white hover:text-black transition-all group shadow-2xl"
                    >
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <motion.div
                        key={activeVideoIndex}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        className="relative w-[95vw] max-w-[1100px] aspect-video bg-black rounded-2xl md:rounded-[32px] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.8)] border border-white/10 z-[99999]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`${currentVideo.url}?autoplay=1&rel=0&modestbranding=1`}
                            title="Show Highlight Player"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        
                        {/* Title Overlay in Modal */}
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none hidden md:block">
                            <h3 className="text-xl font-black text-white uppercase tracking-widest">{currentVideo.title}</h3>
                        </div>
                    </motion.div>
                </div>
            </AnimatePresence>,
            document.body
        );
    };

    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden border-b border-zinc-100" id="video-showcase">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-archive-clay"></div>
                            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Motion Registry</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black uppercase text-archive-charcoal leading-[0.9]">
                            Show <br /> <span className="text-archive-clay">Highlights.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-5 max-w-sm text-left lg:text-right py-2">
                        <div className="flex items-center gap-3 text-archive-clay">
                            <MonitorPlay size={14} />
                            <span className="text-[9px] font-black tracking-widest uppercase">Digital Specimen Directory</span>
                        </div>
                        <button
                            onClick={() => window.location.hash = '#post-show-video'}
                            className="group flex items-center gap-3 px-6 py-3 border border-archive-clay text-archive-clay text-[10px] font-black tracking-widest uppercase hover:bg-archive-clay hover:text-white transition-all duration-300"
                        >
                            View All Highlights
                            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Static Grid Layout */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {VIDEOS.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                            onClick={() => setActiveVideoIndex(index)}
                        >
                            {/* Video Card Container */}
                            <div className="aspect-video bg-archive-charcoal rounded-[24px] overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-700 border-[2px] border-transparent group-hover:border-archive-clay group-hover:shadow-[0_40px_80px_-20px_rgba(238,117,57,0.25)]">
                                {/* YouTube Thumbnail */}
                                <img 
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-archive-charcoal/30 group-hover:bg-transparent transition-colors duration-700"></div>

                                {/* Play Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-archive-clay/90 backdrop-blur-md rounded-full flex items-center justify-center text-white transform transition-all duration-500 scale-90 group-hover:scale-100 shadow-xl">
                                        <Play size={24} fill="currentColor" strokeWidth={0} />
                                    </div>
                                </div>

                                {/* Premium Corner Accent */}
                                <div className="absolute bottom-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                     <Activity size={18} className="text-white animate-pulse" />
                                </div>
                            </div>

            <div className="mt-8 space-y-2">
                <h4 className="text-[12px] md:text-[13px] font-black uppercase tracking-[0.2em] text-archive-charcoal group-hover:text-archive-clay transition-colors">
                    {video.title}
                </h4>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-archive-charcoal/30 block">
                    {video.role}
                </span>
            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Modal />
        </section>
    );
};

export default VideoShowcase;


import React from 'react';
import { motion } from 'framer-motion';
import { Play, Activity, Cpu, MonitorPlay } from 'lucide-react';

const VIDEOS = [
    { id: 'v1', title: 'Strategic Forum Highlights', role: 'Intex Sourcing', url: 'https://www.youtube.com/embed/VCDUdLZfZeY?si=FfhkVBLTd9dFvNsD' },
    { id: 'v2', title: 'Global Industry Summit', role: 'Industry Mixer', url: 'https://www.youtube.com/embed/KmkzgC3-KAQ?si=xZbyR14qqO03uglI' },
    { id: 'v3', title: 'Archival Highlight Record', role: 'Show Highlights', url: 'https://www.youtube.com/embed/nwWELI2tK0c?si=Ms9iHQ7pI_Kycqlc' },
    { id: 'v4', title: 'Textile Innovation Log', role: 'Keynote Session', url: 'https://www.youtube.com/embed/nwWELI2tK0c?si=Ms9iHQ7pI_Kycqlc' },
];

const VideoShowcase: React.FC = () => {
    // Triple the items for a truly infinite feel
    const extendedVideos = [...VIDEOS, ...VIDEOS, ...VIDEOS];

    return (
        <section className="py-32 bg-white overflow-hidden border-b border-archive-charcoal/10" id="video-showcase">
            <div className="max-w-[1440px] mx-auto px-12 mb-20 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-archive-clay"></div>
                            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Motion Registry</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] text-archive-charcoal">
                            Visual <br /> <span className="text-archive-clay">Highlights.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-6 max-w-sm text-left lg:text-right border-l lg:border-l-0 lg:border-r border-black/5 pl-8 lg:pl-0 lg:pr-8 py-2">
                        <div className="flex items-center gap-3 text-archive-clay">
                            <MonitorPlay size={14} />
                            <span className="text-[9px] font-black tracking-widest uppercase">Digital Specimen Directory</span>
                        </div>
                        <p className="text-[11px] font-bold tracking-widest uppercase text-archive-charcoal/40 leading-relaxed">
                            Curated audio-visual artifacts documenting the evolution of global textile sourcing and strategic forums.
                        </p>
                    </div>
                </div>
            </div>

            {/* Infinite Horizontal Marquee */}
            <div className="relative">
                <div className="flex overflow-hidden py-10 relative">

                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: [0, "-33.333%"] }}
                        transition={{
                            duration: 50,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {extendedVideos.map((video, idx) => (
                            <div
                                key={`${video.id}-${idx}`}
                                className="w-[450px] shrink-0 group relative"
                            >
                                {/* Video Container with 3px permanent orange border */}
                                <div className="aspect-video bg-archive-charcoal rounded-[24px] overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_50px_100px_-20px_rgba(238,117,57,0.3)] transition-all duration-700 border-[3px] border-archive-clay">
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 scale-[1.01] group-hover:scale-105"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />

                                    {/* Play Overlay (Still useful as a visual indicator, though iframe handles play) */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="p-4 bg-archive-clay/40 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
                                            <Play size={20} fill="white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-1">
                                    <div className="flex items-center gap-2">
                                        <Activity size={10} className="text-archive-clay" />
                                        <h4 className="text-[11px] font-black uppercase tracking-widest text-archive-charcoal">{video.title}</h4>
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-archive-charcoal/40 pl-5">{video.role}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;

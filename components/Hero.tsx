import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center pt-32 pb-24 overflow-hidden selection:bg-archive-clay selection:text-white">
      <div className="relative z-10 w-[90vw] max-w-[1600px] mx-auto pl-8 pr-4">

        {/* 3D ISOMETRIC SKEWED SINGLE VIDEO BUILDING BOX */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-[82vh] min-h-[500px] flex flex-col cursor-pointer"
          style={{
            transform: isHovered
              ? 'skewY(-6deg) translateY(-18px)'
              : 'skewY(-6deg)',
            transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            zIndex: 10,
          }}
        >

          {/* 3D TOP ROOF FACE */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-15px',
              left: '0px',
              width: '100%',
              height: '15px',
              transform: 'skewX(45deg)',
              transformOrigin: 'bottom left',
              background: '#f1f5f9',
              zIndex: 2,
            }}
          />

          {/* 3D LEFT SIDE WALL FACE */}
          <div
            className="absolute pointer-events-none flex flex-col overflow-hidden"
            style={{
              top: '0px',
              left: '-15px',
              width: '15px',
              height: '100%',
              transform: 'skewY(45deg)',
              transformOrigin: 'top right',
              zIndex: 2,
              background: '#cbd5e1',
            }}
          />

          {/* REALISTIC SUNLIGHT GROUND SHADOW */}
          <div
            className="absolute pointer-events-none transition-all duration-500"
            style={{
              top: isHovered ? 'calc(100% + 15px)' : '100%',
              left: '-15px',
              width: 'calc(100% + 15px)',
              height: isHovered ? '150px' : '110px',
              transformOrigin: 'top left',
              transform: 'skewX(-45deg)',
              background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.12) 60%, rgba(15, 23, 42, 0) 100%)',
              filter: isHovered ? 'blur(5px)' : 'blur(2.5px)',
              opacity: isHovered ? 0.75 : 0.9,
              zIndex: 0,
            }}
          />

          {/* FRONT MAIN CARD FACE CONTAINING 100% EDGE-TO-EDGE VIDEO */}
          <div className="relative z-10 flex flex-col h-full w-full bg-black overflow-hidden rounded-r-sm shadow-2xl border-r border-b border-slate-200">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover brightness-[0.9]"
            >
              <source src="/assets/website video intex  Copy 03.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/20 transition-colors"
                title={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <div className="w-[1px] h-4 bg-white/30"></div>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/20 transition-colors"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

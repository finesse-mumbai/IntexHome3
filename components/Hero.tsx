import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
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
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* ── HERO VIDEO ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="https://assets.bee2bee.asia/events/wofx/INTEX%20WEBSITE%20HOME%20PAGE%201.mp4" type="video/mp4" />
        <source src="/assets/INTEX%20WEBSITE%20HOME%20PAGE%201.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* ── VIDEO CONTROLS (BOTTOM-RIGHT) ── */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-black/50 hover:bg-archive-clay text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
          aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-black/50 hover:bg-archive-clay text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </section>
  );
};

export default Hero;

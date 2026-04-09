
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-archive-charcoal text-white px-12 overflow-hidden border-b border-archive-charcoal">
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        {/* Cinematic MP4 Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        >
          <source src="https://www.wofxworldexpo.com/assests/WOFX-Short-Video-2025.mp4" type="video/mp4" />
          Your browser does not support the video tag why its not.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-archive-charcoal/80 via-transparent to-archive-charcoal"></div>
      </div>

      <div className="relative z-10 space-y-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <span className="text-[10px] font-black tracking-[0.8em] uppercase text-archive-clay">The Past is Our Future</span>
          <div className="relative w-full max-w-none flex items-center justify-center -mt-40">
            <svg viewBox="0 0 6500 450" className="w-[85vw] h-auto overflow-visible select-none pointer-events-none">
              <defs>
                <clipPath id="heroTextClip">
                  <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    initial={{ letterSpacing: "0.15em", opacity: 0 }}
                    animate={{ letterSpacing: "0.01em", opacity: 1 }}
                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                    className=" font-black uppercase text-[450px]"
                  >
                    Intex South Asia
                  </motion.text>
                </clipPath>
              </defs>
              <foreignObject x="0" y="0" width="100%" height="100%" clipPath="url(#heroTextClip)" className="overflow-visible">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover contrast-[1.8] brightness-125 saturate-[1.3]"
                >
                  <source src="https://www.wofxworldexpo.com/assests/WOFX-Short-Video-2025.mp4" type="video/mp4" />
                </video>
              </foreignObject>
            </svg>
          </div>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white opacity-60">
            The Premier International Textile Sourcing Shows of South Asia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal border border-archive-clay transition-all">
            Buyer Registration
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-archive-charcoal border border-white/30 hover:border-white transition-all">
            Exhibitor Enquiry
          </button>
        </motion.div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-24 flex gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`w-2 h-2 border border-white ${i === 0 ? 'bg-archive-clay border-archive-clay' : 'bg-transparent'}`}></div>
        ))}
      </div>

      {/* Decorative lines */}
      <div className="absolute top-1/2 left-12 -translate-y-1/2 w-10 h-[1px] bg-archive-clay/40"></div>
      <div className="absolute top-1/2 right-12 -translate-y-1/2 w-10 h-[1px] bg-archive-clay/40"></div>
    </section>
  );
};

export default Hero;

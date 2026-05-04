
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
          <source src="/assets/website video intex  Copy 03.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-archive-charcoal/80 via-transparent to-archive-charcoal"></div>
      </div>

      <div className="relative z-10 space-y-8 max-w-7xl mt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >

          <div className="relative w-full max-w-none flex items-center justify-center -mt-40">
            <svg viewBox="0 0 8500 450" className="w-[85vw] h-auto overflow-visible select-none pointer-events-none">
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                initial={{ letterSpacing: "0.15em", opacity: 0 }}
                animate={{ letterSpacing: "0.01em", opacity: 1 }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-black text-[400px] fill-white"
              >
                INTEX SERIES OF EXHIBITION
              </motion.text>
            </svg>
          </div>
          <p className="text-[14px] font-bold tracking-[0.2em] text-white opacity-60 uppercase">
            THE PREMIER INTERNATIONAL TEXTILE SOURCING SHOWS OF SOUTH ASIA
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 pt-10">
            {['Bangladesh', 'Sri Lanka', 'India'].map((country) => (
              <div key={country} className="flex flex-col items-center gap-3 group">
                <span className="text-[12px] font-black tracking-[0.4em] text-white uppercase transition-colors group-hover:text-archive-clay">
                  {country}
                </span>
                <div className="w-8 h-[1px] bg-archive-clay/40 group-hover:w-full group-hover:bg-archive-clay transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-10 py-5 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal border border-archive-clay transition-all uppercase">
            BUYER REGISTRATION
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white font-black text-[10px] tracking-[0.4em] hover:bg-white hover:text-archive-charcoal border border-white/30 hover:border-white transition-all uppercase">
            EXHIBITOR ENQUIRY
          </button>
        </motion.div>
      </div>



    </section>
  );
};

export default Hero;

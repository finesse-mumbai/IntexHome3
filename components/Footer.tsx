import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const brandName = "INTEX SOUTH ASIA";
  const gridImages = Array.from({ length: 48 }, (_, i) => GALLERY_ITEMS[i % GALLERY_ITEMS.length].imageUrl);

  return (
    <>
      <footer className="relative  overflow-hidden group" id="footer">
        {/* Background Layer: Static Perspective Grid (Fully Clear in Middle) */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="flex flex-wrap justify-center gap-2 w-[120%] -ml-[10%] -mt-[5%]"
            style={{
              transform: 'rotate(-5deg) skewX(2deg)',
            }}
          >
            {gridImages.map((src, i) => (
              <div key={i} className="w-[10%] aspect-square overflow-hidden border border-archive-charcoal/5">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div> */}

        {/* High-Contrast Viewfinder Mask: Clear Center Slot, Solid White Edges on all 4 sides */}
        {/* <div className="absolute inset-0 z-10 pointer-events-none bg-white/20" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_10%,_white_50%,_white_100%)]" />
 
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10 opacity-100" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 opacity-100" /> */}

        {/* <div className="max-w-[1440px] mx-auto px-12 text-center relative z-20">
          <div className="mb-16">
            <div className="flex items-center justify-center mx-auto mb-6">
              <img src="/assets/logo-dark.webp" alt="Intex South Asia" className="h-16 w-auto" />
            </div>
            <h2 className="text-lg font-black tracking-tighter text-archive-charcoal uppercase">INTEX SOUTH ASIA</h2>
          </div>

          <div className="max-w-xl mx-auto mb-16 space-y-8 text-left">
            <div className="flex border-2 border-archive-clay rounded-full p-1.5 bg-white/10 backdrop-blur-sm shadow-xl shadow-archive-clay/5">
              <div className="w-14 flex items-center justify-center text-archive-clay">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="ENTER EMAIL ADDRESS..."
                className="flex-1 px-4 py-4 text-[10px] font-black tracking-widest bg-transparent outline-none text-archive-charcoal placeholder:text-archive-charcoal/40 uppercase"
              />
              <button className="h-12 w-12 flex items-center justify-center bg-archive-clay text-archive-cream rounded-full hover:bg-archive-charcoal transition-all shrink-0 shadow-lg">
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="flex justify-center gap-10 text-archive-charcoal opacity-40">
              <Facebook size={18} className="cursor-pointer hover:text-archive-clay hover:opacity-100 transition-all" />
              <Twitter size={18} className="cursor-pointer hover:text-archive-clay hover:opacity-100 transition-all" />
              <Instagram size={18} className="cursor-pointer hover:text-archive-clay hover:opacity-100 transition-all" />
              <Linkedin size={18} className="cursor-pointer hover:text-archive-clay hover:opacity-100 transition-all" />
            </div>
          </div>

          <div className="pt-12 border-t border-archive-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black tracking-[0.4em] text-archive-charcoal opacity-60">
            <span>COPYRIGHT © 2025 INTEX SOUTH ASIA. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-10">
              <a href="#" className="hover:text-archive-clay transition-colors uppercase">PRIVACY POLICY</a>
              <a href="#" className="hover:text-archive-clay transition-colors uppercase">TERMS OF SERVICE</a>
            </div>
          </div>
        </div> */}
      </footer>

      {/* 
        High-Precision Video-In-Text Clipping
        Inspired by the provided "Ocean" example but adapted for the brand theme.
      */}
      <section className="relative w-full h-[25vh] md:h-[35vh] bg-black overflow-hidden flex items-center justify-center">
        {/* Background Video Layer */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover contrast-125"
        >
          <source src="https://www.wofxworldexpo.com/assests/WOFX-Short-Video-2025.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black mix-blend-multiply flex items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ letterSpacing: "1em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.1em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[8vw] font-black leading-none text-white whitespace-nowrap text-center m-0 p-0"
          >
            {brandName}
          </motion.h1>
        </div>
      </section>
    </>
  );
};

export default Footer;

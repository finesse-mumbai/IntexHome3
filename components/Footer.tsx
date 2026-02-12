
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const brandName = "INTEX SOUTH ASIA";

  return (
    <>
      <footer className="bg-archive-cream py-24 border-t border-archive-charcoal relative z-10">
        <div className="max-w-[1440px] mx-auto px-12 text-center">
          <div className="mb-16">
            <div className="w-20 h-20 bg-archive-charcoal text-archive-clay flex items-center justify-center mx-auto mb-6">
              <span className="font-serif font-black text-4xl">IX</span>
            </div>
            <h2 className="text-lg font-serif font-black uppercase tracking-tighter text-archive-charcoal">INTEX SOUTH ASIA</h2>
          </div>

          <div className="max-w-xl mx-auto mb-16 space-y-8">
            <div className="flex border border-archive-charcoal p-2 bg-archive-cream">
              <div className="w-14 flex items-center justify-center border-r border-archive-charcoal text-archive-clay">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Enter Email Address..."
                className="flex-1 px-6 py-4 text-[10px] font-black tracking-widest uppercase bg-transparent outline-none text-archive-charcoal placeholder:text-archive-charcoal/40"
              />
              <button className="px-8 bg-archive-clay text-archive-cream hover:bg-archive-charcoal transition-all">
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

          <div className="pt-12 border-t border-archive-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black tracking-[0.4em] uppercase text-archive-charcoal opacity-60">
            <span>Copyright © 2025 Intex South Asia. All Rights Reserved.</span>
            <div className="flex gap-10">
              <a href="#" className="hover:text-archive-clay transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-archive-clay transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
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
            className="text-[8vw] font-serif font-black leading-none text-white whitespace-nowrap text-center uppercase m-0 p-0"
          >
            {brandName}
          </motion.h1>
        </div>
      </section>
    </>
  );
};

export default Footer;

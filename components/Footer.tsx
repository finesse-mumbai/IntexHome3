import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { CornerRightUp, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
  </svg>
);

const Footer: React.FC = () => {
  const brandName = 'INTEX SOUTH ASIA';

  return (
    <>
      <footer className="relative flex flex-col overflow-hidden bg-[#111111] selection:bg-archive-clay selection:text-[#111111]" id="footer">
        <div className="relative z-10 bg-[#111111]">
          <div className="relative mx-auto w-[95%]">
            <div className="grid grid-cols-1 md:grid-cols-[33%_1fr]">
              <div className="flex min-h-[260px] flex-col justify-center bg-black/10 p-10">
                <span className="mb-8 block text-[16px] font-black uppercase tracking-[0.1em] text-archive-clay">
                  Organised By
                </span>
                <div className="max-w-[280px]">
                  <img
                    src="https://bd.intexsouthasia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworldexlogo.f357cfde.png&w=256&q=75"
                    alt="Worldex Logo"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="relative flex flex-col justify-between p-10  bg-black/10">
                <div className="relative z-10 max-w-[400px] pt-2">
                  <p className="text-[15px] font-normal leading-relaxed text-white/90">
                    309, Parvati Premises, Sun Mill Complex,<br />
                    Lower Parel (W), Mumbai - 400 013, India
                  </p>
                </div>

                <h1 className="absolute bottom-0 left-0 translate-y-[40%] select-none text-[18vw] font-[1000] uppercase leading-none tracking-tighter text-archive-clay md:text-[14rem]">
                  Address
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 bg-[#111111] shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
          <div className="mx-auto w-[95%] bg-[#111111]">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="group flex cursor-pointer items-center justify-center p-5 px-8 transition-colors hover:bg-archive-clay/5">
                <span className="block text-center text-lg font-semibold tracking-tighter text-archive-clay md:text-[22px]">
                  +(91)-(22) 40376700 - 36
                </span>
              </div>
              <div className="group flex cursor-pointer items-center justify-center overflow-hidden p-5 px-8 transition-colors hover:bg-archive-clay/5">
                <span className="block truncate text-center text-lg font-semibold lowercase leading-none tracking-tighter text-archive-clay md:text-[22px]">
                  intexfair@worldexindia.com
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-between gap-8 bg-black/10 p-8 md:flex-row md:p-10">
                <div>
                  <h2 className="mb-6 text-2xl font-semibold uppercase leading-none tracking-tighter text-archive-clay md:text-[31px]">
                    Quick Links
                  </h2>
                  <ul className="space-y-4">
                    {[
                      'Booth Booking Enquiry',
                      'Show Brochure',
                      'Application Form',
                      'Post Show Report',
                      'Fact Sheet',
                      'Privacy Policy',
                    ].map((link) => (
                      <li key={link}>
                        <button className="group/link flex items-center gap-3 text-left text-sm font-normal text-white transition-all duration-300 hover:text-archive-clay">
                          <span className="h-[2px] w-0 bg-archive-clay transition-all duration-300 group-hover/link:w-3"></span>
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-row items-center gap-5 pt-0 md:flex-col md:pt-4">
                  <SocialIcon icon={<Instagram size={20} />} />
                  <SocialIcon icon={<XIcon size={16} />} active />
                  <SocialIcon icon={<Facebook size={20} />} />
                  <SocialIcon icon={<MessageCircle size={20} />} />
                  <SocialIcon icon={<Linkedin size={20} />} />
                </div>
              </div>

              <div className="relative flex min-h-[380px] flex-col  bg-black/10">
                <div className="mb-28 p-8 md:p-10">
                  <h2 className="mb-5 text-2xl font-semibold uppercase leading-none tracking-tighter text-archive-clay md:text-[31px]">
                    About Intex
                  </h2>
                  <p className="mb-10 max-w-[480px] text-[15px] font-normal leading-relaxed text-white">
                    Intex South Asia is a leading international textile sourcing platform connecting global textile
                    suppliers with apparel manufacturers, buying houses, brands, and trade buyers across South Asia.
                  </p>
                </div>

                <div className="group bg-black/10 absolute bottom-0 left-0 flex h-[160px] w-full cursor-pointer items-center justify-between  px-14 transition-all">
                  <span className="text-[68px] font-[1000] uppercase leading-none tracking-tighter text-archive-clay">Home</span>
                  <div className="p-6  text-white transition-transform duration-500 group-hover:scale-110">
                    <CornerRightUp className="h-18 w-18 stroke-[2px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-30 w-full py-2.5 text-center">
            <p className="text-md font-normal text-white">(c) Intex South Asia 2026 | All Rights Reserved</p>
          </div>
        </div>
      </footer>

      <section className="relative flex h-[15vh] w-full items-center justify-center overflow-hidden bg-archive-clay md:h-[20vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover contrast-125"
        >
          <source src="/assets/website video intex  Copy 03.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mix-blend-multiply">
          <motion.h1
            initial={{ letterSpacing: '1em', opacity: 0 }}
            whileInView={{ letterSpacing: '0.1em', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="m-0 whitespace-nowrap p-0 text-center text-[8vw] font-black leading-none text-white"
          >
            {brandName}
          </motion.h1>
        </div>
      </section>
    </>
  );
};

function SocialIcon({ icon, active = false }: { icon: ReactNode; active?: boolean }) {
  return (
    <button
      className={`group/icon relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 ${active
        ? 'scale-110 bg-archive-clay text-[#111] shadow-[0_0_20px_rgba(238,117,57,0.2)]'
        : 'bg-white/5 text-white/50 hover:bg-archive-clay/5 hover:text-archive-clay'
        }`}
    >
      <div className="absolute inset-0 scale-0 rounded-full opacity-0 transition-all duration-700 group-hover/icon:scale-125"></div>
      {icon}
    </button>
  );
}

export default Footer;

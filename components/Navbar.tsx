
import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: "Home", link: "#home" },
  {
    label: "Show",
    link: "#",
    children: [
      { label: "Show Profile", link: "#show-profile" },
      { label: "Why Intex South Asia", link: "#why-intex" },
      { label: "About Organiser", link: "#organiser" },
      { label: "IBF Seminar Series", link: "#home" },
      { label: "Promotion Activities", link: "#promotion-activities" },
      { label: "Industry Partners", link: "#home" },
    ],
  },
  {
    label: "Exhibitor",
    link: "#",
    children: [
      { label: "Exhibitor Profile", link: "#exhibitor-profile" },
      { label: "Featured Exhibitors", link: "#featured-exhibitors" },
      { label: "Exhibitor's Testimonial", link: "#exhibitors-testimonial" },
      { label: "Booth Booking Enquiry", link: "#home" },
      { label: "Hotel & Travel", link: "#hotels-travel" },
    ],
  },
  {
    label: "Buyer",
    link: "#",
    children: [
      { label: "Buyers Profile", link: "#buyers-profile" },
      { label: "Buyer's Testimonial", link: "#buyers-testimonial" },
      { label: "Exhibitor's List", link: "#exhibitor-list" },
      { label: "Visitor Registration", link: "#home" },
      { label: "Hotel & Travel", link: "#hotels-travel" },
    ],
  },
  {
    label: "Media",
    link: "#",
    children: [
      { label: "Newsletters", link: "#newsletters" },
      { label: "Press Release", link: "#press-release" },
      { label: "Media Coverage", link: "#media-coverage" },
      { label: "Media Partners", link: "#media-partners" },
      { label: "Media Registration", link: "#home" },
    ],
  },
  {
    label: "Download",
    link: "#",
    children: [
      { label: "Show Info Kit", link: "#info-kit" },
      { label: "Factsheet", link: "#factsheet" },
      { label: "Branding Opportunities", link: "#branding-opportunities" },
      { label: "Media Coverage Report", link: "#media-coverage-report" },
      { label: "InDyChem Brochure", link: "#", external: true },
      { label: "FAQ – Exhibitors | Buyers", link: "#home" },
    ],
  },
  {
    label: "Flashback",
    link: "#",
    children: [
      { label: "Post Show Reports", link: "#post-show-reports" },
      { label: "Post Show Video", link: "#post-show-video" },
      { label: "Photo Gallery", link: "#photo-gallery" },
      { label: "Intex Times", link: "#intex-times" },
    ],
  }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white backdrop-blur-md border-b border-archive-charcoal/10 py-2' : 'bg-transparent py-5'}`}>
        <div className="max-w-[1440px] mx-auto px-12 flex justify-between items-center">
          <div className="flex items-center gap-20">
            <div className="flex items-center cursor-pointer group" onClick={() => window.location.hash = '#home'}>
              <img
                src={isScrolled ? "/assets/logo-dark.webp" : "/assets/logo-light.png"}
                alt="Intex South Asia"
                className="w-[130px] h-auto transition-all duration-500 group-hover:scale-105"
              />
            </div>

            <div className={`hidden lg:flex gap-14 text-[13px] font-black tracking-[0.25em] transition-colors ${isScrolled ? 'text-archive-charcoal' : 'text-white'}`}>
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative group/item"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.link}
                    className="hover:text-archive-clay transition-all flex items-center gap-2 py-4 relative group"
                  >
                    {item.label}
                    {item.children && <ChevronDown size={10} className="opacity-40 group-hover:rotate-180 transition-transform duration-500" />}
                    <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-archive-clay transition-all duration-500 group-hover:w-full"></span>
                  </a>

                  <AnimatePresence>
                    {activeDropdown === item.label && item.children && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-[-50px] w-[280px] bg-archive-cream text-archive-charcoal p-4 z-[70] overflow-hidden border border-archive-charcoal/10"
                      >
                        <div className="flex flex-col gap-4">
                          {item.children.map((child, idx) => (
                            <a
                              key={child.label}
                              href={child.link}
                              className="text-[11px] font-black tracking-widest hover:text-archive-clay hover:pl-2 transition-all flex items-center justify-between group/sub"
                            >
                              {child.label}
                              <ArrowRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex items-center gap-10 transition-colors ${isScrolled ? 'text-archive-charcoal' : 'text-white'}`}>
            <a
              href="https://portal.intexfair.com/login.php"
              target="_blank"
              className="hidden sm:flex flex-col items-end gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group hover:text-archive-clay"
            >
              <span className="text-[10px] font-black tracking-widest">Login</span>
              <div className="w-12 h-px bg-current transition-colors"></div>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center z-[110]"
            >
              <div className="flex flex-col gap-1.5 w-6 overflow-hidden">
                <motion.div
                  animate={isMenuOpen ? { rotate: 45, y: 4.5, backgroundColor: '#d99578' } : { rotate: 0, y: 0, backgroundColor: isScrolled ? '#2F2C2C' : '#FFFFFF' }}
                  className="w-full h-[2px] origin-center"
                />
                <motion.div
                  animate={isMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, backgroundColor: isScrolled ? '#2F2C2C' : '#FFFFFF' }}
                  className="w-full h-[2px]"
                />
                <motion.div
                  animate={isMenuOpen ? { rotate: -45, y: -4.5, backgroundColor: '#d99578' } : { rotate: 0, y: 0, backgroundColor: isScrolled ? '#2F2C2C' : '#FFFFFF' }}
                  className="w-full h-[2px] origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-archive-cream z-[100] flex flex-col pt-40 px-12 md:px-24 pb-12 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <a
                    href={item.link}
                    onClick={() => !item.children && setIsMenuOpen(false)}
                    className="text-2xl md:text-4xl font-serif font-black text-archive-charcoal hover:text-archive-clay transition-all flex items-center gap-8"
                  >
                    <span className="text-[12px] font-mono opacity-20 font-black">0{idx + 1}</span>
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

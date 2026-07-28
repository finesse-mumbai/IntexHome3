import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Globe,
  Mail,
  Phone,
  Info,
  HelpCircle,
  Building2,
  Presentation,
  TrendingUp,
  Users,
  UserCheck,
  Star,
  MessageSquareQuote,
  CalendarCheck,
  Hotel,
  UsersRound,
  ListFilter,
  UserPlus,
  Newspaper,
  Tv,
  Share2,
  BadgeCheck,
  FolderDown,
  FileSpreadsheet,
  Target,
  BarChart3,
  Video,
  Image as ImageIcon,
  FileText,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  {
    label: "Show",
    link: "/",
    children: [
      { label: "Show Profile", link: "/show-profile", icon: Info },
      { label: "Why Intex South Asia", link: "/why-intex", icon: HelpCircle },
      { label: "About Organiser", link: "/organiser", icon: Building2 },
      { label: "IBF Seminar Series", link: "/ibf-seminar-series", icon: Presentation },
      { label: "Industry Partners", link: "/industry-partners", icon: Users },
    ],
  },
  {
    label: "Exhibitor",
    link: "/",
    children: [
      { label: "Exhibitor Profile", link: "/exhibitor-profile", icon: UserCheck },
      { label: "Featured Exhibitors", link: "/featured-exhibitors", icon: Star },
      { label: "Exhibitor's Testimonial", link: "/exhibitors-testimonial", icon: MessageSquareQuote },
      { label: "Booth Booking Enquiry", link: "https://sl.intexsouthasia.com/enquiry-form", external: true, icon: CalendarCheck },
      { label: "Hotel & Travel", link: "/hotels-travel", icon: Hotel },
    ],
  },
  {
    label: "Promotion",
    link: "/",
    children: [
      { label: "Blogs", link: "/blogs", icon: FileText },
      { label: "Intex Times", link: "/intex-times", icon: Newspaper },
      { label: "Promotion Activities", link: "/promotion-activities", icon: TrendingUp },
    ],
  },
  {
    label: "Buyer",
    link: "/",
    children: [
      { label: "Buyers Profile", link: "/buyers-profile", icon: UsersRound },
      { label: "Buyer's Testimonial", link: "/buyers-testimonial", icon: MessageSquareQuote },
      { label: "Visitor Registration", link: "https://portal.intexfair.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=sl&source_name=", external: true, icon: UserPlus },
      { label: "Hotel & Travel", link: "/hotels-travel", icon: Hotel },
    ],
  },
  {
    label: "Media",
    link: "/",
    children: [
      { label: "Press Release", link: "/press-release", icon: Newspaper },
      { label: "Media Coverage", link: "/media-coverage", icon: Tv },
      { label: "Media Partners", link: "/media-partners", icon: Share2 },
      { label: "Media Registration", link: "/", icon: BadgeCheck },
    ],
  },
  {
    label: "Download",
    link: "/",
    children: [
      { label: "Show Info Kit", link: "/info-kit", icon: FolderDown },
      { label: "Factsheet", link: "/factsheet", icon: FileSpreadsheet },
      { label: "Branding Opportunities", link: "/branding-opportunities", icon: Target },
      { label: "Media Coverage Report", link: "/media-coverage-report", icon: BarChart3 },
      { label: "FAQ - Exhibitors | Buyers", link: "/faq", icon: HelpCircle },
    ],
  },
  {
    label: "Flashback",
    link: "/",
    children: [
      { label: "Post Show Reports", link: "/post-show-reports", icon: FileSpreadsheet },
      { label: "Post Show Video", link: "/post-show-video", icon: Video },
      { label: "Photo Gallery", link: "/photo-gallery", icon: ImageIcon },
    ],
  }
];

// ─────────────────────────────────────────────
// Sub-component: RollingText (character-by-character hover roll)
// ─────────────────────────────────────────────

function RollingText({ text }: { text: string }) {
  return (
    <span className="relative flex whitespace-pre overflow-hidden">
      {text.split('').map((char, i) => (
        <span key={i} className="relative inline-block" style={{ height: '1.15em', lineHeight: '1.15em' }}>
          <span
            className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 18}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
          <span
            className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
            style={{ transitionDelay: `${i * 18}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when hamburger menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // GSAP stagger when expanded
  useEffect(() => {
    const gsap = typeof window !== 'undefined' ? (window as any).gsap : null;
    if (gsap && !isScrolled && menuLinksRef.current) {
      const links = menuLinksRef.current.querySelectorAll('.nav-link-item');
      gsap.killTweensOf(links);
      gsap.fromTo(
        links,
        { opacity: 0, y: -6, filter: 'blur(3px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.4,
          stagger: 0.04,
          ease: 'power2.out',
          delay: 0.1,
        }
      );
    }
  }, [isScrolled]);

  const springConfig = { type: 'spring', stiffness: 220, damping: 22, mass: 1 };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const gsap = typeof window !== 'undefined' ? (window as any).gsap : null;
    if (!gsap) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const gsap = typeof window !== 'undefined' ? (window as any).gsap : null;
    if (!gsap) return;
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1.2,0.4)' });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Morphing Capsule Container */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          layout
          transition={springConfig}
          style={{ overflow: 'visible' }}
          className={[
            'pointer-events-auto flex items-center justify-between rounded-full shadow-xl backdrop-blur-xl transition-all duration-300',
            isScrolled
              ? 'w-[90%] md:w-[440px] max-w-[460px] px-7 py-4 bg-white/90 text-archive-charcoal h-20'
              : 'w-full max-w-[1240px] px-6 py-2 bg-white/85 text-archive-charcoal h-16',
          ].join(' ')}
        >
          {/* Logo */}
          <motion.div layout="position" className="flex items-center gap-2 cursor-pointer group">
            <Link to="/" className="flex items-center">
              <img
                src="/assets/logo-dark.webp"
                alt="Intex South Asia"
                className={`h-auto transition-all duration-500 group-hover:scale-105 ${
                  isScrolled ? 'w-[95px]' : 'w-[125px]'
                }`}
              />
            </Link>
          </motion.div>

          {/* Desktop Nav Items (Only visible when NOT scrolled) */}
          <AnimatePresence mode="popLayout">
            {!isScrolled && (
              <motion.div
                key="expanded-menu"
                ref={menuLinksRef}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'visible' }}
                className="hidden lg:flex items-center gap-8 font-black text-[14px] tracking-[0.05em] text-archive-clay overflow-visible"
              >
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="relative group/item"
                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.link}
                      className="nav-link-item flex items-center gap-1.5 py-2 group hover:text-archive-charcoal transition-colors"
                    >
                      <RollingText text={item.label} />
                      {item.children && (
                        <ChevronDown
                          size={10}
                          className="opacity-50 group-hover:rotate-180 transition-transform duration-300"
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu with Child Icons */}
                    <AnimatePresence>
                      {activeDropdown === item.label && item.children && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-[-30px] w-[280px] bg-white/95 backdrop-blur-xl text-archive-charcoal p-4 z-[70] rounded-2xl shadow-2xl border border-archive-charcoal/10"
                        >
                          <div className="flex flex-col gap-2.5">
                            {item.children.map((child) => {
                              const ChildIcon = child.icon;
                              return child.external ? (
                                <a
                                  key={child.label}
                                  href={child.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[13px] font-bold tracking-normal hover:text-archive-clay transition-all flex items-center justify-between group/sub py-1"
                                >
                                  <span className="flex items-center gap-3">
                                    {ChildIcon && (
                                      <div className="w-7 h-7 rounded-lg bg-archive-clay/10 text-archive-clay group-hover/sub:bg-archive-clay group-hover/sub:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                                        <ChildIcon size={14} />
                                      </div>
                                    )}
                                    <span>{child.label}</span>
                                  </span>
                                  <ArrowRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                                </a>
                              ) : (
                                <Link
                                  key={child.label}
                                  to={child.link}
                                  className="text-[13px] font-bold tracking-normal hover:text-archive-clay transition-all flex items-center justify-between group/sub py-1"
                                >
                                  <span className="flex items-center gap-3">
                                    {ChildIcon && (
                                      <div className="w-7 h-7 rounded-lg bg-archive-clay/10 text-archive-clay group-hover/sub:bg-archive-clay group-hover/sub:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                                        <ChildIcon size={14} />
                                      </div>
                                    )}
                                    <span>{child.label}</span>
                                  </span>
                                  <ArrowRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right Action Section */}
          <div className="flex items-center gap-3">
            {/* Login CTA (Only visible when NOT scrolled) */}
            <AnimatePresence mode="popLayout">
              {!isScrolled && (
                <motion.div
                  key="login-cta"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="hidden sm:block"
                >
                  <a
                    href="https://portal.intexfair.com/login.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-archive-clay text-white font-bold text-xs tracking-wide hover:bg-archive-charcoal transition-all duration-300 shadow-md group/btn"
                  >
                    <span>Login</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hamburger Button (Always visible when scrolled, mobile when expanded) */}
            <motion.button
              layout="position"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                isMenuOpen
                  ? 'bg-archive-clay text-white'
                  : isScrolled
                  ? 'bg-archive-charcoal/10 text-archive-charcoal hover:bg-archive-charcoal/20 flex'
                  : 'bg-archive-charcoal/10 text-archive-charcoal hover:bg-archive-charcoal/20 lg:hidden'
              }`}
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Fullscreen Mobile / Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-start pt-24 px-4 select-none"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-archive-charcoal/40 backdrop-blur-md"
            />

            {/* Floating Glass Menu Card */}
            <motion.div
              initial={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              exit={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              className="relative z-10 w-full max-w-[520px] max-h-[82vh] rounded-3xl bg-white/95 backdrop-blur-2xl shadow-2xl flex flex-col overflow-y-auto px-8 py-8 text-archive-charcoal border border-white/50 [&::-webkit-scrollbar]:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6 w-full">
                <div className="flex justify-between items-center pb-3 border-b border-archive-charcoal/10">
                  <span className="text-xs font-black tracking-widest uppercase text-archive-clay">
                    Intex Navigation
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 rounded-full text-archive-charcoal/60 hover:text-archive-charcoal"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="flex flex-col gap-5">
                  {NAV_ITEMS.map((item, idx) => (
                    <div key={item.label} className="flex flex-col gap-2">
                      <Link
                        to={item.link}
                        onClick={() => !item.children && setIsMenuOpen(false)}
                        className="group flex items-center justify-between text-2xl font-black text-archive-charcoal hover:text-archive-clay transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-xs font-mono opacity-40">0{idx + 1}</span>
                          <RollingText text={item.label} />
                        </span>
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>

                      {/* Sub Items with Child Icons */}
                      {item.children && (
                        <div className="grid grid-cols-2 gap-2.5 pl-7 pt-1 pb-2">
                          {item.children.map((sub) => {
                            const SubIcon = sub.icon;
                            return sub.external ? (
                              <a
                                key={sub.label}
                                href={sub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xs font-semibold text-archive-charcoal/80 hover:text-archive-clay transition-colors flex items-center gap-2 py-1"
                              >
                                {SubIcon && <SubIcon size={14} className="text-archive-clay/80 shrink-0" />}
                                <span>{sub.label}</span>
                              </a>
                            ) : (
                              <Link
                                key={sub.label}
                                to={sub.link}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xs font-semibold text-archive-charcoal/80 hover:text-archive-clay transition-colors flex items-center gap-2 py-1"
                              >
                                {SubIcon && <SubIcon size={14} className="text-archive-clay/80 shrink-0" />}
                                <span>{sub.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer details inside menu */}
                <div className="mt-4 pt-4 border-t border-archive-charcoal/10 flex flex-col gap-2 text-xs font-bold text-archive-charcoal/60">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-archive-clay" />
                    <span>intex@worldexindia.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-archive-clay" />
                    <span>South Asia Premier Textile Sourcing Shows</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

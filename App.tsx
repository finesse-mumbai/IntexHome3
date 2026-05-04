
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Schedule from './components/Schedule';
import ExhibitorProfile from './components/ExhibitorProfile';
import BuyerProfile from './components/BuyerProfile';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Partners from './components/Partners';
import SocialFeed from './components/SocialFeed';
import BuyerCategories from './components/BuyerCategories';
import Gallery from './components/Gallery';
import VideoShowcase from './components/VideoShowcase';
import Footer from './components/Footer';
import RevealWrapper from './components/RevealWrapper';
import ShowProfilePage from './components/ShowProfilePage';
import OrganiserPage from './components/OrganiserPage';
import WhyIntexPage from './components/WhyIntexPage';
import PromotionActivitiesPage from './components/PromotionActivitiesPage';
import ExhibitorProfilePage from './components/ExhibitorProfilePage';
import FeaturedExhibitorsPage from './components/FeaturedExhibitorsPage';
import ExhibitorsTestimonialPage from './components/ExhibitorsTestimonialPage';
import HotelsTravelPage from './components/HotelsTravelPage';
import BuyerProfilePage from './components/BuyerProfilePage';
import BuyersTestimonialPage from './components/BuyersTestimonialPage';
import ExhibitorListPage from './components/ExhibitorListPage';
import NewsletterPage from './components/NewsletterPage';
import PressReleasePage from './components/PressReleasePage';
import MediaCoveragePage from './components/MediaCoveragePage';
import MediaPartnerPage from './components/MediaPartnerPage';
import InfoKitPage from './components/InfoKitPage';
import FactsheetPage from './components/FactsheetPage';
import BrandingOpportunitiesPage from './components/BrandingOpportunitiesPage';
import MediaCoverageReportPage from './components/MediaCoverageReportPage';
import PostShowReportPage from './components/PostShowReportPage';
import PostShowVideoPage from './components/PostShowVideoPage';
import PhotoGalleryPage from './components/PhotoGalleryPage';
import IntexTimesPage from './components/IntexTimesPage';
import TestimonialPlaybackPage from './components/TestimonialPlaybackPage';
import IBFDetailsPage from './components/IBFDetailsPage';

import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentPath === '#show-profile') {
      return <ShowProfilePage />;
    }
    if (currentPath === '#organiser') {
      return <OrganiserPage />;
    }
    if (currentPath === '#why-intex') {
      return <WhyIntexPage />;
    }
    if (currentPath === '#promotion-activities') {
      return <PromotionActivitiesPage />;
    }
    if (currentPath === '#exhibitor-profile') {
      return <ExhibitorProfilePage />;
    }
    if (currentPath === '#featured-exhibitors') {
      return <FeaturedExhibitorsPage />;
    }
    if (currentPath === '#exhibitors-testimonial') {
      return <ExhibitorsTestimonialPage />;
    }
    if (currentPath === '#hotels-travel') {
      return <HotelsTravelPage />;
    }
    if (currentPath === '#buyers-profile') {
      return <BuyerProfilePage />;
    }
    if (currentPath === '#buyers-testimonial') {
      return <BuyersTestimonialPage />;
    }
    if (currentPath === '#exhibitor-list') {
      return <ExhibitorListPage />;
    }
    if (currentPath === '#newsletters') {
      return <NewsletterPage />;
    }
    if (currentPath === '#press-release') {
      return <PressReleasePage />;
    }
    if (currentPath === '#media-coverage') {
      return <MediaCoveragePage />;
    }
    if (currentPath === '#media-partners') {
      return <MediaPartnerPage />;
    }
    if (currentPath === '#info-kit') {
      return <InfoKitPage />;
    }
    if (currentPath === '#factsheet') {
      return <FactsheetPage />;
    }
    if (currentPath === '#branding-opportunities') {
      return <BrandingOpportunitiesPage />;
    }
    if (currentPath === '#media-coverage-report') {
      return <MediaCoverageReportPage />;
    }
    if (currentPath === '#post-show-reports') {
      return <PostShowReportPage />;
    }
    if (currentPath === '#post-show-video') {
      return <PostShowVideoPage />;
    }
    if (currentPath === '#photo-gallery') {
      return <PhotoGalleryPage />;
    }
    if (currentPath === '#intex-times') {
      return <IntexTimesPage />;
    }
    if (currentPath === '#testimonial-playback') {
      return <TestimonialPlaybackPage />;
    }
    if (currentPath === '#ibf-details') {
      return <IBFDetailsPage />;
    }

    return (
      <>
        <RevealWrapper text="WELCOME." subtext="SYS_BOOT // 2025" type="slide" direction="up">
          <Hero />
        </RevealWrapper>

        <RevealWrapper text="ARCHIVE." subtext="REG_ID // 01" type="center-split-h" delay={0.2}>
          <section className="bg-archive-cream py-32 border-b border-archive-charcoal/10 overflow-hidden" id="about">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-4">
                  <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase">About Us</span>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-[0.9] text-archive-charcoal uppercase">
                    Archive of <br /> South Asia.
                  </h2>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-black leading-tight text-archive-charcoal">
                    THE PREMIER INTERNATIONAL TEXTILE SOURCING SHOWS OF SOUTH ASIA.
                  </h3>
                  <div className="space-y-4">
                    <p className="text-archive-charcoal text-xs leading-relaxed max-w-lg tracking-widest font-medium opacity-80">
                      Since its inception in 2015, Intex has grown into South Asia’s most influential international B2B textile and apparel sourcing platform, with a strong footprint across Sri Lanka, Bangladesh, and India. Designed to connect global suppliers with serious buyers, Intex has consistently enabled high-value sourcing, strategic partnerships, and seamless cross-border trade across the region. Recognized as a trusted industry platform, Intex brings together textile manufacturers, garment producers, sourcing heads, retailers, and global brands under one roof. The show presents a comprehensive showcase of the textile value chain—from yarns, fabrics, denim, trims, and accessories to emerging segments such as MMF (man-made fibres), performance textiles, sportswear, knitwear, and sustainable materials, reflecting the evolving demands of the global market.
                    </p>
                    <AnimatePresence>
                      {isAboutExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden space-y-4"
                        >
                          <p className="text-archive-charcoal text-xs leading-relaxed max-w-lg tracking-widest font-medium opacity-80">
                            Over the years, Intex has facilitated thousands of successful B2B engagements, strengthening regional supply chains and supporting the consistent growth of the apparel and textile industry. With a focused approach to quality exhibitors, verified buyers, and meaningful networking, it has established itself as a preferred destination for sourcing, collaboration, and market intelligence.
                          </p>
                          <p className="text-archive-charcoal text-xs leading-relaxed max-w-lg tracking-widest font-medium opacity-80">
                            As South Asia continues to play a pivotal role in global textile manufacturing, Intex stands at the forefront—bridging markets, building trust, and shaping the future of textile and apparel sourcing.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button 
                      onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                      className="text-[10px] font-black tracking-[0.2em] text-archive-clay uppercase hover:underline block"
                    >
                      {isAboutExpanded ? 'Read Less' : 'Read Full'}
                    </button>
                  </div>
                  <button className="px-10 py-5 bg-archive-clay text-archive-cream font-black text-[10px] tracking-[0.4em] hover:bg-archive-charcoal hover:text-archive-cream transition-all uppercase">
                    VIEW HIGHLIGHTS
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 relative flex justify-end">
                <div className="relative w-full max-w-[600px] flex justify-end">
                  <div className="w-[80%] aspect-[3/4] border border-archive-charcoal overflow-hidden bg-archive-charcoal/5">
                    <img src="/assets/intex collage.jpg.jpeg" className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="absolute top-1/4 -left-12 w-[60%] aspect-square border border-archive-charcoal bg-archive-cream overflow-hidden z-10 p-2">
                    <img src="/assets/squareImage.jpg.jpeg" className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealWrapper>

        <RevealWrapper text="METRICS." subtext="REG_ID // 06" type="center-split-h" amount={0.2}>
          <Stats />
        </RevealWrapper>

        <RevealWrapper text="EVENTS." subtext="REG_ID // 02" type="bands-v" amount={0.3}>
          <ExhibitorProfile />
        </RevealWrapper>


        <RevealWrapper text="VISUAL ARCHIVE." subtext="REG_ID // 05" type="slide" direction="left" amount={0.3} textSize="text-4xl md:text-8xl">
          <Gallery />
        </RevealWrapper>

        <RevealWrapper text="TIMELINE." subtext="REG_ID // 03" type="center-split-v" delay={0.15}>
          <Schedule />
        </RevealWrapper>

        {/* 
        <RevealWrapper text="EXHIBITORS." subtext="REG_ID // 04" type="bands-h" amount={0.25}>
          <BuyerProfile />
        </RevealWrapper>
        */}

        <RevealWrapper text="VOICES." subtext="REG_ID // 07" type="bands-v" amount={0.2}>
          <Testimonials />
        </RevealWrapper>

        <RevealWrapper text="MOTION." subtext="REG_ID // 08" type="slide" direction="right" amount={0.3}>
          <VideoShowcase />
        </RevealWrapper>

        {/* 
        <RevealWrapper text="BUYERS." subtext="REG_ID // 08" type="center-split-h" amount={0.2}>
          <BuyerCategories />
        </RevealWrapper>
        */}

        <RevealWrapper text="PARTNERS." subtext="REG_ID // 09" type="bands-h" amount={0.4}>
          <Partners />
        </RevealWrapper>

        <RevealWrapper text="SOCIAL INTELLIGENCE." subtext="REG_ID // 10" type="slide" direction="up" amount={0.3}>
          <SocialFeed />
        </RevealWrapper>

        <RevealWrapper text="RESOURCES." subtext="REG_ID // 11" type="slide" direction="down" amount={0.4}>
          <Resources />
        </RevealWrapper>
      </>
    );
  };

  return (
    <div className="bg-archive-cream text-archive-charcoal selection:bg-archive-clay selection:text-white min-h-screen relative">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="fixed inset-0 z-[200] bg-archive-charcoal flex items-center justify-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white text-6xl md:text-9xl font-black tracking-tighter"
        >
          Intex<span className="text-archive-clay">.</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-archive-clay z-[110] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;

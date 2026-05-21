import React, { useEffect, useRef } from "react";

export default function BlogCottonToMmfPage() {
  const containerRef = useRef<HTMLElement>(null);

  const initGSAP = () => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      // @ts-ignore
      const gsap = window.gsap;
      // @ts-ignore
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".blog-hero-content", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" });
      gsap.from(".blog-hero-image", { scale: 1.1, opacity: 0, duration: 1.5, ease: "power2.out", delay: 0.3 });

      const reveals = gsap.utils.toArray(".gsap-reveal");
      // @ts-ignore
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          y: 50, opacity: 0, duration: 1, ease: "power3.out",
        });
      });
    }
  };

  useEffect(() => {
    // Slight delay to ensure GSAP is loaded if from CDN
    setTimeout(initGSAP, 100);
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <a href="#blogs" className="text-[#F27B35] font-semibold flex items-center gap-2 mb-8 hover:underline blog-hero-content">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blogs
        </a>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 blog-hero-content">
          From Cotton to MMF: How Bangladesh’s Garment Exports Are Entering a <span className="text-[#F27B35]">New Growth Era</span>
        </h1>
        
        <div className="flex items-center gap-4 text-slate-500 text-sm mb-10 blog-hero-content">
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Industry Evolution</span>
          <span>May 12, 2026</span>
          <span>•</span>
          <span>11 min read</span>
        </div>

        <div className="w-full h-[500px] relative rounded-3xl overflow-hidden mb-12 blog-hero-image">
          <img 
            src="/assets/img/Blogs/blog13.png" 
            alt="Bangladesh Garment Industry Shift"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8 gsap-reveal">
            The Bangladesh garment industry in 2026 is entering a transformative phase marked by a decisive shift toward man-made fibre (MMF)-based garment production, signaling a structural evolution that is reshaping the country’s global export identity.
          </p>

          <p className="gsap-reveal">
            We are witnessing a powerful realignment in the ready-made garment (RMG) sector, where traditional cotton-based exports are gradually yielding ground to high-value, performance-oriented MMF apparel. This transition is not merely cyclical but deeply strategic, reflecting changing global consumption patterns, rising demand for functional garments, and the need for diversification in export portfolios. 
          </p>

          <p className="gsap-reveal">
            As MMF-based garment exports record an impressive 14.1% growth, the industry is demonstrating resilience and adaptability, positioning Bangladesh as a dynamic and future-ready player in the global apparel market.
          </p>

          <h2 className="gsap-reveal mt-12">The Pivot to High-Value Segments</h2>
          <p className="gsap-reveal">
            The growth in MMF-based garment exports, which have reached approximately $3.68 billion, underscores a critical shift toward higher-margin product categories such as activewear, athleisure, outerwear, and technical garments. These segments offer superior durability, flexibility, and performance features that align with evolving consumer expectations across key markets including the EU and the US.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img 
              src="/assets/img/Blogs/blog14.png" 
              alt="High-Performance Apparel Production"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="gsap-reveal">
            As global apparel consumption increasingly favors MMF—accounting for over 60% of total fibre usage worldwide—Bangladesh’s strategic pivot positions it to capture a significantly larger share of this expanding segment. This evolution reflects a deliberate move from volume-driven production toward value-driven manufacturing.
          </p>

          <h2 className="gsap-reveal mt-12">Backward Linkage and Supply Chain Resilience</h2>
          <p className="gsap-reveal">
            The rapid expansion of MMF-based garment production has been accompanied by a rise in the import of man-made fibres, synthetic yarns, and fabrics, highlighting structural gaps within the domestic supply chain. Bangladesh currently relies heavily on imported MMF inputs, primarily from China and India.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img 
              src="/assets/img/Blogs/blog15.png" 
              alt="Industrial Textile Supply Chain"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="gsap-reveal">
            This presents an immense opportunity to enhance domestic value addition. Developing robust backward linkage industries capable of supporting local MMF production is essential to reduce costs, improve supply chain resilience, and strengthen the country’s overall industrial ecosystem.
          </p>

          <h2 className="gsap-reveal mt-12">Innovation-Driven Textile Solutions</h2>
          <p className="gsap-reveal">
            The global shift toward MMF is driven by performance, sustainability, and market dynamics. MMF garments provide moisture management, wrinkle resistance, and durability, making them ideal for sportswear and technical textiles. Volatility in cotton pricing has further accelerated this transition.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img 
              src="/assets/img/Blogs/blog16.png" 
              alt="Innovation in Synthetic Fibres"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="gsap-reveal">
            For Bangladesh, this represents a unique opportunity to reposition itself as a leader in innovative, high-performance garment production. By investing in advanced technologies and synthetic fibre production, the country can enhance its competitiveness in high-value segments. Projections suggest that garment exports could reach $95 billion by 2030, driven largely by MMF products.
          </p>

          <h2 className="gsap-reveal mt-12">Advanced Machinery and Automation</h2>
          <p className="gsap-reveal">
            The evolution of MMF-based manufacturing is closely linked with advancements in machinery. Adoption of automated sewing systems, advanced dyeing machines, and precision cutting technologies is transforming production lines into highly optimized operations. The integration of AI and IoT technologies enables real-time monitoring and data-driven decision-making.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img 
              src="/assets/img/Blogs/blog18.png" 
              alt="Advanced Garment Manufacturing Technology"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="gsap-reveal">
            In conclusion, the 14.1% growth in MMF-based garment exports marks the beginning of a new era for Bangladesh’s RMG industry. By strengthening backward linkages and embracing sustainable practices, Bangladesh is well-positioned to transition into a value-driven global apparel powerhouse.
          </p>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden gsap-reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Experience the Transformation</h3>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
              Join global leaders at Intex Bangladesh in Dhaka from 18-20 June 2026 to engage with the latest innovations in MMF and apparel technology.
            </p>
            
            <a 
              href="#enquiry-form" 
              className="inline-block px-12 py-5 bg-[#F27B35] text-white font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/20"
            >
              Intex 2026 Registration
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

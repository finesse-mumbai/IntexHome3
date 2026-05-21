import React, { useEffect, useRef } from "react";

export default function BlogTopForeignBuyersPage() {
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
    setTimeout(initGSAP, 100);
  }, []);

  const buyers = [
    { rank: 1, name: "H&M", country: "Sweden" },
    { rank: 2, name: "Inditex (Zara)", country: "Spain" },
    { rank: 3, name: "Primark", country: "Ireland" },
    { rank: 4, name: "Bestseller", country: "Denmark" },
    { rank: 5, name: "Marks & Spencer", country: "United Kingdom" },
    { rank: 6, name: "C&A", country: "Netherlands" },
    { rank: 7, name: "Uniqlo", country: "Japan" },
    { rank: 8, name: "LPP", country: "Poland" },
    { rank: 9, name: "Next", country: "United Kingdom" },
    { rank: 10, name: "Pepco", country: "Poland" },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white pt-32 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4">
        <a 
          href="#blogs" 
          className="text-[#F27B35] font-semibold flex items-center gap-2 mb-8 hover:underline blog-hero-content"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blogs
        </a>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 blog-hero-content">
          The Top 10 Foreign Companies Purchasing <span className="text-[#F27B35]">Bangladeshi Garments</span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 blog-hero-content">
          Global Sourcing Powerhouses Driving the Apparel Industry
        </p>

        <div className="flex items-center gap-4 text-slate-500 text-sm mb-8 blog-hero-content">
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Market Intelligence</span>
          <span>May 9, 2026</span>
          <span>•</span>
          <span>12 min read</span>
        </div>

        <div className="w-full h-[450px] relative rounded-3xl overflow-hidden mb-12 blog-hero-image shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200" 
            alt="Bangladesh Garment Sourcing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-slate">
        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 gsap-reveal">Bangladesh’s Garment Industry: A Global Sourcing Giant</h2>
        <p className="gsap-reveal">
          Bangladesh has firmly established itself as one of the world’s leading apparel manufacturing hubs, exporting ready-made garments (RMG) worth $45 billion in FY 2025. The country continues to attract thousands of global buyers due to its competitive pricing, large-scale production capabilities, skilled workforce, and improving compliance standards. 
        </p>
        
        <div className="bg-orange-50 border-l-4 border-[#F27B35] p-8 my-10 rounded-r-2xl gsap-reveal">
          <p className="text-slate-800 font-bold m-0 text-xl">
            Among these buyers, the top 10 foreign companies alone account for nearly 29% of total exports, representing approximately $10.5 billion in garment sourcing.
          </p>
        </div>

        <h2 className="text-4xl font-black text-slate-900 mt-20 mb-12 text-center uppercase tracking-tighter gsap-reveal">
          Top 10 Foreign Companies Purchasing Bangladeshi Garments
        </h2>

        {/* 1. H&M */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 gsap-reveal">1. H&M – The Largest Buyer of Bangladeshi Garments</h3>
          <p className="gsap-reveal">
            H&M stands as the single largest buyer, sourcing garments worth approximately $2.59 billion annually from Bangladesh. The company collaborates with over 200 factories, ensuring a massive supply chain that supports its global retail network. With more than 1,000 stores across 44 countries and online availability in over 60 markets, H&M distributes Bangladeshi-made garments worldwide. Daily shipments exceed 2,000 consignments, reflecting unmatched sourcing scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 gsap-reveal">
            <div className="rounded-2xl overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800" alt="H&M Retail" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=800" alt="H&M Apparel" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* 2. Inditex */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 gsap-reveal">2. Inditex – Rapidly Expanding Sourcing from Bangladesh</h3>
          <p className="gsap-reveal">
            Inditex, the Spanish retail giant behind brands like Zara, Bershka, and Massimo Dutti, ranks as the second-largest buyer with sourcing valued at $2.18 billion. The company works with more than 250 factories in Bangladesh, producing a wide range of garments from basics to high-fashion outerwear. These products are distributed across 13 countries, with Spain being the primary destination.
          </p>
          <div className="rounded-3xl overflow-hidden h-80 my-10 gsap-reveal">
            <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000" alt="Zara Fashion" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* 3. Primark */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 gsap-reveal">3. Primark – High-Volume, Low-Cost Apparel Leader</h3>
          <p className="gsap-reveal">
            Primark secures the third position, sourcing approximately $1.12 billion worth of garments. Known for its affordable fashion model, Primark depends heavily on Bangladesh’s ability to produce large volumes at low costs. With 451 retail stores globally, the brand continues to leverage Bangladesh as a key sourcing destination for maintaining its competitive pricing strategy.
          </p>
          <div className="rounded-3xl overflow-hidden h-80 my-10 gsap-reveal">
            <img src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=1000" alt="Primark Budget Fashion" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* 4. Bestseller */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 gsap-reveal">4. Bestseller – A Strong Player in Mid-Value Apparel</h3>
          <p className="gsap-reveal">
            Bestseller, a Danish multinational company, sources garments worth around $790 million from Bangladesh. The company stands out with an average price of $4.66 per garment, making it one of the higher-paying buyers among the top 10. With sourcing spread across 95 factories and sales in 11 countries, Bestseller reflects Bangladesh’s growing capability to deliver mid- to premium-quality apparel.
          </p>
        </section>

        {/* 5. Marks & Spencer */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 gsap-reveal">5. Marks & Spencer – A Major UK-Based Buyer</h3>
          <p className="gsap-reveal">
            Marks & Spencer (M&S) sources approximately $780 million worth of garments, equivalent to around 210 million pieces annually. The majority of these products are sold in the United Kingdom, highlighting a strong trade connection. With an average price of $3.74 per piece and sourcing from over 50 factories, M&S continues to expand its presence in Bangladesh.
          </p>
          <div className="rounded-3xl overflow-hidden h-80 my-10 gsap-reveal">
            <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000" alt="M&S Quality Apparel" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* 6. C&A */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 gsap-reveal">6. C&A – Increasing Dependence on Bangladesh</h3>
          <p className="gsap-reveal">
            C&A, the Dutch multinational retailer, has significantly increased its sourcing share from Bangladesh, now exceeding 50% of its total garment supply. The company purchases around $720 million worth of garments, totaling nearly 200 million pieces annually.
          </p>
          <div className="rounded-3xl overflow-hidden h-80 my-10 gsap-reveal">
            <img src="https://images.unsplash.com/photo-1540959733332-e94e270b2d42?q=80&w=1000" alt="C&A Sourcing" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* 7. Uniqlo */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 gsap-reveal">7. Uniqlo – Leading in Higher-Value Garments</h3>
          <p className="gsap-reveal">
            Uniqlo, part of Japan’s Fast Retailing Group, sources approximately $710 million worth of garments from Bangladesh. With an average price of $5.41 per piece, it records the highest sourcing value per garment among the top 10 buyers.
          </p>
        </section>

        {/* 8. LPP */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 gsap-reveal">8. LPP – Expanding European Market Reach</h3>
          <p className="gsap-reveal">
            LPP, a Polish fashion retailer, sources garments worth approximately $654.4 million from Bangladesh through a network of around 250 factories. Its brands, including Reserved, Cropp, and Sinsay, are present in 40 countries.
          </p>
          <div className="rounded-3xl overflow-hidden h-80 my-10 gsap-reveal">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000" alt="LPP Reserved" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* 9 & 10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-slate-50 p-8 rounded-3xl gsap-reveal">
            <h3 className="text-xl font-bold text-slate-900 mb-4">9. Next</h3>
            <p className="text-sm">
              Sourcing more than $500 million worth of garments annually from Bangladesh. This includes approximately 160 million pieces, with an average price of $3.24 per garment.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl gsap-reveal">
            <h3 className="text-xl font-bold text-slate-900 mb-4">10. Pepco</h3>
            <p className="text-sm">
              Sourcing worth around $460 million annually at an average price of just $1.75 per piece. Pepco leverages Bangladesh’s unmatched strength in ultra-low-cost production.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mt-20 mb-6 gsap-reveal">Other Notable Global Buyers</h2>
        <p className="gsap-reveal">
          Beyond the top 10, several global brands continue to source garments from Bangladesh. Walmart directly sourced garments worth approximately $400 million, while brands such as Adidas, Ralph Lauren, and Lululemon focus on smaller volumes but higher-value garments.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 gsap-reveal">Pricing Dynamics Across Market Segments</h2>
        <p className="gsap-reveal">
          Mass-market retailers typically source products priced between $1.75 and $3 per piece, while mid-tier brands operate within the $3 to $5 range. Premium brands exceed this threshold, and niche luxury segments can reach prices between $300 and $500 per piece.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 gsap-reveal">Why Bangladesh Remains a Preferred Sourcing Destination</h2>
        <ul className="gsap-reveal list-none p-0">
          {['Competitive production costs', 'Large-scale manufacturing capabilities', 'Highly skilled workforce', 'Fast fashion efficiency', 'Improvements in compliance and sustainability'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 mb-4 bg-slate-50 p-4 rounded-xl">
              <span className="w-6 h-6 bg-[#F27B35] rounded-full flex items-center justify-center text-white text-xs">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 gsap-reveal">Future Outlook: A Rising Global Influence</h2>
        <p className="gsap-reveal">
          The industry is gradually shifting from a cost-focused model to a value-added manufacturing ecosystem. Increased participation in international textile exhibitions, sourcing fairs, and B2B trade shows will further boost visibility and global engagement.
        </p>

        <div className="mt-20 p-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] text-white text-center gsap-reveal shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Explore Textile Opportunities in Bangladesh</h3>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg relative z-10">
            Connect with leading manufacturers and discover innovative textile solutions at Intex.
          </p>
          <a 
            href="#enquiry-form" 
            className="inline-block px-12 py-5 bg-[#F27B35] text-white font-extrabold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-xl relative z-10"
          >
            Booth Booking Enquiry
          </a>
        </div>
      </div>
    </main>
  );
}

import React, { useEffect, useRef } from "react";

export default function BlogSustainableCottonPage() {
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

  return (
    <main ref={containerRef} className="min-h-screen bg-white pt-32 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <a href="#blogs" className="text-[#F27B35] font-semibold flex items-center gap-2 mb-8 hover:underline blog-hero-content">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blogs
        </a>

        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 blog-hero-content">
          Global Cotton Demand Evolution: <span className="text-[#F27B35]">Why Certified Sustainable Cotton is Reshaping Sourcing Strategies</span>
        </h1>

        <div className="flex items-center gap-4 text-slate-500 text-[14px] mb-8 blog-hero-content">
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Sustainability Report</span>
          <span>May 7, 2026</span>
          <span>•</span>
          <span>10 min read</span>
        </div>

        <div className="w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden mb-12 blog-hero-image">
          <img
            src="/assets/img/Blogs/blog01.png"
            alt="Sustainable Cotton Sourcing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-slate">
        <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8 gsap-reveal">
          The global textile and apparel industry is undergoing a nuanced transformation where man-made fibers (MMF) continue to expand their share; however, parallelly, a strong and strategic demand for certified, organic, and sustainable cotton is accelerating across premium and responsible fashion segments.
        </p>

        <p className="gsap-reveal">
          This shift is not contradictory but complementary—while MMF dominates volume-driven categories, cotton is increasingly becoming the fiber of choice for sustainability-led collections, high-value apparel, and conscious consumer markets. We are witnessing a clear bifurcation in global demand patterns, where brands are not merely choosing fibers based on cost, but on traceability, environmental impact, and long-term brand positioning.
        </p>

        <div className="my-12 rounded-3xl overflow-hidden gsap-reveal">
          <img src="/assets/img/Blogs/blog02.png" alt="Traceability in Cotton" className="w-full h-auto shadow-lg" />
          <p className="text-[14px] text-center text-slate-500 mt-4 italic">Traceability and certified systems are becoming mandatory requirements for global markets.</p>
        </div>

        <p className="gsap-reveal">
          The rise of organic and certified cotton textiles is being driven by stringent global compliance frameworks and evolving consumer awareness. Markets across Europe and North America are actively prioritizing sourcing strategies that align with ESG benchmarks, making traceability no longer optional but a mandatory requirement.
        </p>

        <p className="gsap-reveal">
          Cotton that is verifiable in origin, responsibly cultivated, and processed under certified systems is gaining strong traction. This has led to a growing preference for certified cotton-based garments, particularly in categories such as essentials, premium basics, childrenswear, and sustainable fashion lines. As a result, global brands are restructuring their sourcing ecosystems to integrate reliable, transparent cotton supply chains, creating a significant opportunity for manufacturing hubs like Bangladesh.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 gsap-reveal">The Epicenter of Textile Manufacturing: Asia-Pacific</h2>
        <p className="gsap-reveal">
          The Asia-Pacific region continues to dominate the global cotton ecosystem, accounting for over 70% of both production and consumption growth. This dominance is powered by the presence of large-scale textile and garment manufacturing economies such as China, India, and Bangladesh. Within this ecosystem, Bangladesh plays a pivotal role as one of the largest garment exporters globally, with its strength rooted in large-scale production capabilities, competitive costing, and deep integration with global retail supply chains.
        </p>

        <div className="my-12 rounded-3xl overflow-hidden gsap-reveal">
          <img src="/assets/img/Blogs/blog03.png" alt="Manufacturing Growth" className="w-full h-auto shadow-lg" />
        </div>

        <p className="gsap-reveal">
          Bangladesh, in particular, stands out as one of the largest importers of raw cotton globally, driven by its robust ready-made garment (RMG) sector. Alongside Vietnam, it is expected to remain a key import hub, sourcing massive volumes of cotton to sustain its export-oriented apparel industry. This dependence on imported cotton highlights a critical factor—the need for consistent, high-quality, and traceable cotton supply.
        </p>

        <div className="my-12 rounded-3xl overflow-hidden gsap-reveal">
          <img src="/assets/img/Blogs/blog04.png" alt="Cotton Sourcing" className="w-full h-auto shadow-lg" />
        </div>

        <p className="gsap-reveal">
          As global buyers tighten sourcing requirements, Bangladeshi manufacturers are increasingly required to ensure that their raw material sourcing aligns with international sustainability standards, without compromising on cost efficiency or scalability.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 gsap-reveal">Global Brand Sourcing: The Driving Force</h2>
        <p className="gsap-reveal">
          The demand surge for sustainable cotton is further reinforced by global brands that have strong sourcing bases in Bangladesh, including H&M, Zara, Primark, Walmart, and Target. These brands are actively increasing their focus on sustainable and traceable cotton-based product lines, particularly as part of their long-term environmental commitments.
        </p>

        <div className="bg-orange-50 border-l-4 border-[#F27B35] p-8 my-12 rounded-r-3xl gsap-reveal">
          <p className="text-slate-800 font-bold italic text-lg m-0">
            "Bangladesh currently contributes approximately 6–7% of global apparel exports, and for many global brands, a significant share of sourcing—often between 20% to 40% in key categories—originates from Bangladeshi manufacturers."
          </p>
        </div>

        <p className="gsap-reveal">
          At the same time, increasing scrutiny around microplastic pollution from synthetic fibers is influencing both policy and consumer behavior. While MMF continues to dominate certain segments due to cost and performance advantages, there is a growing push from regulators and sustainability advocates to reduce reliance on non-biodegradable materials.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 gsap-reveal">From Commodity to Value-Added Material</h2>
        <p className="gsap-reveal">
          In this evolving landscape, the focus is no longer just on cotton as a commodity, but on cotton as a certified, traceable, and value-added raw material. This is where structured initiatives like Kasturi Cotton gain relevance. Designed to align with global expectations, it emphasizes quality benchmarking, traceability, and standardization, making it highly suitable for manufacturers catering to international buyers.
        </p>

        <div className="my-12 rounded-3xl overflow-hidden gsap-reveal">
          <img src="/assets/img/Blogs/blog05.png" alt="Intex Bangladesh Trade Fair" className="w-full h-auto shadow-lg" />
          <p className="text-[14px] text-center text-slate-500 mt-4 italic">Platforms like Intex Bangladesh facilitate critical connections in the textile value chain.</p>
        </div>

        <p className="gsap-reveal">
          Further strengthening this ecosystem, TEXPROCIL is bringing a strong presence through the India Pavilion at Intex, alongside 50+ leading Indian companies showcasing a diverse portfolio of cotton, yarns, and textile innovations. Key participants include Manan Textech Global Pvt. Ltd., Salona Cotspin Ltd., Square Corporation, Sulochana Cotton Spinning Mills Pvt. Ltd., and Gimatex Industries Pvt. Ltd., among others.
        </p>

        <p className="gsap-reveal">
          Events like Intex Bangladesh, recognized as a leading textile trade fair in Dhaka and a prominent international textile show in Bangladesh, provide a comprehensive platform where manufacturers can explore certified cotton options, engage with global suppliers, and stay aligned with emerging sourcing trends.
        </p>

        <div className="mt-16 p-10 bg-slate-900 rounded-3xl text-white text-center gsap-reveal">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Build a Future-Ready Supply Chain</h3>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Align with the global transition toward responsible and traceable textiles. Meet 50+ leading cotton suppliers at Intex Bangladesh.
          </p>
          <a
            href="https://portal.intexfair.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=sl&source_name="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#F27B35] text-white font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 text-[15px]"
          >
            Register as a Visitor
          </a>
        </div>
      </div>
    </main>
  );
}

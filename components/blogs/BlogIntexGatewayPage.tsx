import React, { useEffect, useRef } from "react";

export default function BlogIntexGatewayPage() {
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
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <a href="#blogs" className="text-[#F27B35] font-semibold flex items-center gap-2 mb-8 hover:underline blog-hero-content">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blogs
        </a>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 blog-hero-content">
          Why Intex Is Your Smartest Gateway to the <span className="text-[#F27B35]">South Asia Textile Market</span>
        </h1>
        
        <div className="flex items-center gap-4 text-slate-500 text-sm mb-10 blog-hero-content">
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Industry Platform</span>
          <span>May 12, 2026</span>
          <span>•</span>
          <span>7 min read</span>
        </div>

        <div className="w-full h-[500px] relative rounded-3xl overflow-hidden mb-12 blog-hero-image">
          <img 
            src="/assets/img/Blogs/blog02.png" 
            alt="Intex South Asia Trade Fair"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8 gsap-reveal">
            Entering a new market is never just about opportunity. It is about access, timing, and trust. South Asia today offers one of the most exciting growth stories in global textiles and apparel, but it is also a market where relationships matter.
          </p>

          <p className="gsap-reveal">
            Understanding demand is critical, and where the right connections can define long term success. This is exactly where Intex makes the difference.
          </p>

          <h2 className="gsap-reveal mt-12">Building a Decade of Trust</h2>
          <p className="gsap-reveal">
            Over the last decade, Intex has quietly built something that most platforms cannot replicate. It has built trust. With more than ten years of consistent presence across key markets like Bangladesh and Sri Lanka, Intex has developed a deep understanding of how the textile ecosystem in this region truly works.
          </p>

          <p className="gsap-reveal">
            This is not just surface level knowledge. It comes from years of engaging with manufacturers, exporters, buying houses, and global suppliers who return to the platform because it delivers results.
          </p>

          <div className="bg-orange-50 p-8 rounded-3xl border-l-4 border-[#F27B35] my-12 gsap-reveal">
            <h3 className="text-2xl font-bold text-slate-900 mt-0">A Curated Business Environment</h3>
            <p className="text-slate-700 m-0">
              What sets Intex apart is that it does not operate as a generic exhibition. It functions as a carefully curated business environment. Every edition is designed with a clear focus on bringing the right people together.
            </p>
          </div>

          <p className="gsap-reveal">
            This means that exhibitors are not left hoping for the right visitors to walk in. Instead, they meet pre-qualified buyers who are actively sourcing and are ready to engage in serious business conversations.
          </p>

          <h2 className="gsap-reveal mt-12">Direct Access to Decision Makers</h2>
          <p className="gsap-reveal">
            Over the years, Intex has built a strong and verified database of thousands of national and international buyers. These are not just names on a list. They include sourcing heads, factory owners, product development teams, and decision makers who influence procurement across the textile value chain.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img 
              src="/assets/img/Blogs/blog03.png" 
              alt="B2B Meetings at Intex"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="gsap-reveal">
            When these buyers attend Intex, they do so with intent. They come to discover new suppliers, explore innovations, and build partnerships that can support their evolving sourcing needs.
          </p>

          <h2 className="gsap-reveal mt-12">Aligning with Market Evolution</h2>
          <p className="gsap-reveal">
            Another strength of Intex lies in its deep understanding of market demand. South Asia is no longer just about large scale production of basic garments. The demand has evolved toward man made fibers, functional textiles, sustainable materials, and value added products.
          </p>

          <p className="gsap-reveal">
            Intex has consistently aligned itself with these shifts. This ensures that exhibitors are not just showcasing products, but presenting solutions that are relevant to what buyers are actively looking for.
          </p>

          <h2 className="gsap-reveal mt-12">Structured Engagement</h2>
          <p className="gsap-reveal">
            The platform also goes beyond traditional exhibition formats by creating structured opportunities for engagement. Through hosted buyer programmes, curated B2B meetings, and international buyer delegations, Intex ensures that meaningful conversations happen in a focused and efficient manner.
          </p>

          <p className="gsap-reveal">
            These are not chance encounters. They are planned interactions that allow both buyers and exhibitors to explore real business possibilities within a short span of time.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img 
              src="/assets/img/Blogs/blog04.png" 
              alt="Industry Networking"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="gsap-reveal mt-12">Industry Backing and Credibility</h2>
          <p className="gsap-reveal">
            Intex is strongly supported by leading industry associations, trade bodies, and international partners. This backing adds a layer of credibility and structure that is essential in markets like South Asia. It ensures that the platform is not only well connected but also aligned with industry priorities.
          </p>

          <p className="gsap-reveal">
            For any company looking to expand into this region, the question is not whether there is demand. The demand is already there. The real question is how quickly and effectively you can connect with it.
          </p>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden gsap-reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Join the Next Edition</h3>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
              Unlock your gateway to the South Asia textile market. Connect with over 10,000+ verified buyers.
            </p>
            
            <a 
              href="#enquiry-form" 
              className="inline-block px-12 py-5 bg-[#F27B35] text-white font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/20"
            >
              Exhibitor Registration
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

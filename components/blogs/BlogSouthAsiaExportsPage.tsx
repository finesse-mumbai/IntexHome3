import React, { useEffect, useRef } from "react";

export default function BlogSouthAsiaExportsPage() {
  const containerRef = useRef<HTMLElement>(null);

  const initGSAP = () => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      // @ts-ignore
      const gsap = window.gsap;
      // @ts-ignore
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Hero Animation
      gsap.from(".blog-hero-content", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".blog-hero-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.3,
      });

      // Content Reveal Animations
      const reveals = gsap.utils.toArray(".gsap-reveal");
      // @ts-ignore
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Special highlight animation
      gsap.from(".gsap-highlight", {
        scrollTrigger: {
          trigger: ".gsap-highlight",
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });
    }
  };

  useEffect(() => {
    setTimeout(initGSAP, 100);
  }, []);

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
          $45B Exports. World-Class Manufacturing. Rising Demand: <span className="text-[#F27B35]">South Asia Is Where You Need to Be</span>
        </h1>

        <div className="flex items-center gap-4 text-slate-500 text-[14px] mb-8 blog-hero-content">
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Industry Analysis</span>
          <span>May 9, 2026</span>
          <span>•</span>
          <span>10 min read</span>
        </div>

        <div className="w-full h-[450px] relative rounded-3xl overflow-hidden mb-12 blog-hero-image shadow-2xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?auto=format&fit=crop&q=80&w=1200"
            alt="South Asia Textile Industry Hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-slate">
        <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8 gsap-reveal">
          There’s a clear shift happening in global sourcing and it is no longer subtle. Buyers, brands, and sourcing heads across the world are steadily turning their focus toward South Asia. Not as a backup option, but as a priority. And when you look at the numbers, the capabilities, and the momentum, it becomes very clear why this region is attracting so much attention.
        </p>

        <p className="gsap-reveal">
          Take Bangladesh, for example. With apparel exports crossing $45 billion annually, it has firmly established itself as one of the world’s largest garment manufacturing hubs. But what makes this market truly interesting for suppliers is not just what it exports, but what it needs to import to sustain that scale.
        </p>

        <div className="bg-orange-50 border-l-4 border-[#F27B35] p-8 my-10 rounded-r-2xl gsap-highlight shadow-sm">
          <p className="text-slate-800 font-bold italic text-xl m-0 leading-relaxed">
            "Bangladesh imports over $12 billion worth of textile raw materials and inputs annually, with major sourcing coming from China, India, and Hong Kong alone contributing several billion dollars each."
          </p>
        </div>

        <p className="gsap-reveal">
          This includes fabrics, yarns, fibers, and value-added materials that are critical for production. In fact, monthly textile imports crossed BDT 80,000 million (approx. $700+ million) in late 2025, showing a sharp rise and consistent dependency on imports.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 gsap-reveal">The Real Shift: Man-Made Fibers</h2>
        <p className="gsap-reveal">
          The real shift, however, is happening in man-made fibers and performance materials. Imports of polyester staple fiber and viscose have seen strong growth, with viscose imports alone rising by over 30% year-on-year, driven by demand for sportswear and high-performance apparel. This clearly signals one thing: <strong>Bangladesh is moving beyond cotton and actively looking for advanced materials.</strong>
        </p>

        <p className="gsap-reveal">
          Walk into any major manufacturing cluster in Dhaka or Chittagong, and you will see scale like nowhere else. But behind that scale lies a massive sourcing gap. The country still imports a significant share of its woven fabrics, technical textiles, and specialty inputs. This creates a continuous and growing opportunity for global suppliers who can bring innovation, speed, and consistency.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 gsap-reveal">Sri Lanka: Strategic & Premium</h2>
        <p className="gsap-reveal">
          Then there is Sri Lanka, smaller in size but extremely strategic in positioning. Sri Lanka’s apparel exports are valued at around $5–6 billion annually, but its strength lies in premium segments such as lingerie, activewear, and technical apparel. What is important here is that Sri Lanka is even more import dependent when it comes to raw materials and technology.
        </p>

        <p className="gsap-reveal">
          The country relies heavily on imported fabrics, trims, and machinery to maintain its high-quality manufacturing standards. Imports of machinery and mechanical appliances alone form a significant share of total imports, accounting for nearly 18% of overall import value, reflecting continuous investment in advanced production capabilities.
        </p>

        <p className="gsap-reveal">
          This directly connects to a major opportunity area for suppliers in garment machinery, textile processing technology, and value-added inputs. As Sri Lanka positions itself as a premium and sustainable manufacturing hub, the need for advanced machinery, automation, and high-performance materials continues to grow.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 gsap-reveal">Unmatched Scale Meets High-Value Specialization</h2>
        <p className="gsap-reveal">
          Together, these two markets represent something incredibly powerful. One offers unmatched scale, while the other offers high-value specialization. And both are heavily dependent on imports to sustain their growth.
        </p>

        <p className="gsap-reveal font-semibold text-[#F27B35] text-2xl">
          But here is where it gets even more interesting.
        </p>

        <p className="gsap-reveal">
          Demand is not just growing. It is evolving. The biggest shift in recent years has been toward man-made fibers, performance textiles, recycled materials, and functional fabrics. Categories like athleisure, sportswear, and outdoor apparel are driving this change. These segments require innovation, whether it is moisture-wicking fabrics, stretch materials, or lightweight constructions. South Asian manufacturers are actively investing to meet this demand, but they still rely on global suppliers to bridge the gap.
        </p>

        <p className="gsap-reveal">
          At the same time, accessories, trims, and value-added components are seeing strong growth. Buyers are no longer sourcing just fabrics. They are looking for complete solutions. Faster turnaround times, flexibility in smaller batches, and integrated sourcing are becoming the new standard.
        </p>

        <p className="gsap-reveal">
          Another major driver is diversification. Global brands are actively reducing dependence on single-country sourcing strategies. South Asia, with its strong manufacturing base, competitive costs, and favorable trade access to key markets, is emerging as the most reliable alternative.
        </p>

        <p className="gsap-reveal">
          And there is also a strong domestic story. Rising incomes, urbanization, and a growing middle class are pushing consumption higher across the region. This creates a dual advantage: Export-driven growth supported by increasing internal demand.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 gsap-reveal">The Center of Opportunity</h2>
        <p className="gsap-reveal">
          So where does that leave global textile suppliers? <strong>Right at the center of opportunity.</strong>
        </p>

        <p className="gsap-reveal">
          Because while the demand is strong, the region still relies heavily on imports for high-quality fabrics, specialty yarns, technical textiles, and advanced machinery. Bangladesh alone works with hundreds of verified importers and over 300 active buyers in textile sourcing, indicating a highly active and competitive import ecosystem. Sri Lanka, with its premium positioning, depends even more on global sourcing partnerships.
        </p>

        <p className="gsap-reveal text-xl font-bold text-slate-800">
          In simple terms, the buyers are here, the demand is real, and the gap is wide open.
        </p>

        <p className="gsap-reveal">
          But entering these markets is not just about showing up. It is about showing up in the right place, in front of the right people, at the right time.
        </p>

        <div className="bg-slate-50 p-10 rounded-3xl my-16 border border-slate-100 gsap-reveal">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">That is exactly where Intex South Asia changes the game.</h3>
          <p className="mb-6">
            Over the years, Intex has built a reputation not just as an exhibition, but as a serious business platform. It brings together decision-makers including factory owners, sourcing heads, buying offices, and importers under one roof. These are not casual visitors. These are professionals with clear sourcing needs and active buying intent.
          </p>
          <p className="mb-6">
            What makes Intex different is its focused B2B approach. From structured matchmaking to curated buyer delegations, every element is designed to create real business connections. Exhibitors do not just showcase. They engage, negotiate, and build partnerships.
          </p>
          <p>
            For companies looking to enter Bangladesh and Sri Lanka, this is not just an opportunity. It is the most efficient entry point. Instead of spending months trying to understand the market and build connections, Intex brings the entire ecosystem to you in just a few days.
          </p>
        </div>

        <p className="gsap-reveal text-2xl font-bold text-slate-900 mb-6">
          And timing matters.
        </p>

        <p className="gsap-reveal">
          As South Asia continues its shift toward higher-value products, sustainable solutions, and advanced materials, the need for global suppliers will only grow stronger. Early movers will always have the advantage. Because in markets like these, visibility turns into trust, and trust turns into long-term business.
        </p>

        <p className="gsap-reveal text-xl text-slate-800 font-medium italic">
          South Asia is no longer just a manufacturing base. It is a high-growth, high-demand ecosystem that is shaping the future of global apparel sourcing.
        </p>

        <p className="gsap-reveal text-2xl font-extrabold text-[#F27B35] mt-12 mb-16">
          And if you are serious about being part of that future, there is really only one question left: Are you in the market, or are you watching it grow from the outside?
        </p>

        <div className="mt-20 p-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] text-white text-center gsap-reveal shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F27B35]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Join the Future of Textiles?</h3>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg relative z-10">
            Secure your presence at the region's most powerful B2B sourcing platform and connect with the leaders of the South Asian textile industry.
          </p>
          <a
            href="#enquiry-form"
            className="inline-block px-12 py-5 bg-[#F27B35] text-white font-extrabold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-xl relative z-10"
          >
            Inquire for Booth Booking
          </a>
        </div>
      </div>
    </main>
  );
}

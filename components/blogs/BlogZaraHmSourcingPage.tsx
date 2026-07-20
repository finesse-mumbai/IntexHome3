import React, { useEffect, useRef } from "react";

export default function BlogZaraHmSourcingPage() {
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
          Where Do Zara & H&M Source Their Clothes in 2026—and Why Is Bangladesh Becoming the <span className="text-[#F27B35]">World’s Go-To Apparel Hub?</span>
        </h1>

        <div className="flex items-center gap-4 text-slate-500 text-[14px] mb-10 blog-hero-content">
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Market Trends</span>
          <span>May 12, 2026</span>
          <span>•</span>
          <span>10 min read</span>
        </div>

        <div className="w-full h-[500px] relative rounded-3xl overflow-hidden mb-12 blog-hero-image">
          <img
            src="/assets/img/Blogs/blog6.png"
            alt="Zara and H&M Sourcing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8 gsap-reveal">
            Walk into any Zara or H&M, and you’ll find collections that feel global, fast-moving, and trend-driven. But behind the racks and runway-inspired styles lies a powerful sourcing network that spans continents. In 2026, one country is standing out more than ever in that network—Bangladesh.
          </p>

          <p className="gsap-reveal">
            So where do Zara and H&M really source from? And why is Bangladesh rapidly becoming the backbone of global apparel manufacturing?
          </p>

          <p className="gsap-reveal">
            The answer lies in a mix of scale, cost efficiency, skilled labor, and evolving manufacturing capabilities—all of which Bangladesh is delivering at a level the global fashion industry can no longer ignore.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img
              src="/assets/img/Blogs/blog8.png"
              alt="Bangladesh Apparel Manufacturing Scale"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="gsap-reveal">
            Zara, owned by Inditex, follows a hybrid sourcing model. While it produces a significant portion of its fast-fashion lines closer to Europe (Spain, Portugal, Turkey, and Morocco) for speed, it heavily relies on Asia—especially Bangladesh—for basic garments, large-volume production, and cost-sensitive categories. On the other hand, H&M has built one of the most diversified sourcing networks in the world, working with over 700 independent suppliers across Asia and Europe, with Bangladesh consistently ranking among its top three sourcing destinations.
          </p>

          <p className="gsap-reveal">
            And the numbers tell a compelling story. Bangladesh exported apparel worth over $47 billion in 2025, maintaining its position as the second-largest garment exporter globally, just behind China. But in a significant shift in global trade dynamics, Bangladesh has now surpassed China to become the second-largest apparel exporter to the United States in early 2026, signaling a major realignment in sourcing strategies. This milestone reflects not just cost competitiveness, but growing trust among global buyers.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img
              src="/assets/img/Blogs/blog7.png"
              alt="Global Sourcing Shift"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="gsap-reveal">
            One of the biggest reasons global brands like Zara and H&M are increasing their sourcing from Bangladesh is cost advantage. Labor costs in Bangladesh remain among the lowest in the world for large-scale garment production, often 30–40% lower than China. But what makes Bangladesh different today is that it is no longer just about low cost—it is about value for money. Manufacturers are now delivering better quality, compliance, and efficiency while maintaining competitive pricing.
          </p>

          <p className="gsap-reveal">
            The backbone of this growth is Bangladesh’s massive workforce. The country employs over 4 million workers in the garment sector, making it one of the largest industrial employers globally. What was once considered low-skilled labor has evolved into a semi-skilled and highly specialized workforce, particularly in categories like knitwear, denim, and increasingly, value-added apparel such as athleisure and performance wear. For brands like H&M, which emphasize volume and consistency, this level of workforce reliability is crucial.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img
              src="/assets/img/Blogs/blog9.png"
              alt="Skilled Workforce in Bangladesh"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="gsap-reveal">
            Another major factor driving sourcing decisions is manufacturing scale and infrastructure. Bangladesh is home to more than 3,500 garment factories, many of which are now among the most modern and sustainable production units in the world. In fact, the country has over 200 LEED-certified green garment factories, the highest number globally. This is a key reason why sustainability-focused brands are strengthening their partnerships in Bangladesh. Zara and H&M, both of which have made strong commitments to sustainability, increasingly rely on suppliers that meet strict environmental and compliance standards.
          </p>

          <p className="gsap-reveal">
            Connectivity and logistics have also improved significantly. Strategic investments in ports, roads, and industrial zones have enhanced Bangladesh’s ability to handle large export volumes efficiently. The country’s proximity to major shipping routes and its integration into global supply chains make it an attractive sourcing destination. While lead times may still be longer than nearshoring options, the trade-off in cost and scale continues to work strongly in Bangladesh’s favor.
          </p>

          <p className="gsap-reveal">
            What is particularly interesting is how Bangladesh is moving up the value chain. Traditionally known for basic garments like T-shirts and trousers, the country is now expanding into high-value segments, including lingerie, outerwear, and technical textiles. This shift aligns perfectly with the evolving needs of global brands that are looking to balance cost with innovation. Zara, for instance, increasingly sources structured garments and fashion basics from Bangladesh, while H&M continues to expand its sourcing across multiple product categories.
          </p>

          <p className="gsap-reveal">
            The shift away from China has also accelerated Bangladesh’s rise. Rising labor costs, geopolitical tensions, and supply chain diversification strategies have prompted global buyers to reduce their dependence on China. Bangladesh has emerged as a natural alternative, offering scale without compromising cost efficiency. Vietnam and India are also part of this shift, but Bangladesh’s specialization in apparel gives it a distinct competitive edge.
          </p>

          <p className="gsap-reveal">
            However, the growth story is not without challenges. Issues such as energy costs, infrastructure bottlenecks, and global demand fluctuations continue to impact the sector. Additionally, increasing pressure on compliance and worker welfare means manufacturers must continuously upgrade their operations. But despite these challenges, Bangladesh has shown remarkable resilience, adapting quickly to global shifts and maintaining its position as a reliable sourcing destination.
          </p>

          <p className="gsap-reveal">
            For global buyers and sourcing professionals, the implications are clear. Bangladesh is no longer just an option—it is a strategic necessity. The country offers a rare combination of cost competitiveness, manufacturing expertise, sustainability leadership, and scalability, making it one of the most important pillars of the global textile supply chain.
          </p>

          <div className="bg-slate-50 p-8 rounded-3xl border-l-4 border-[#F27B35] my-12 gsap-reveal">
            <p className="text-slate-700 m-0 font-medium italic">
              "Bangladesh is no longer just a sourcing destination; it is a strategic partner for the world's leading fashion brands, delivering scale and sustainability in equal measure."
            </p>
          </div>

          <p className="gsap-reveal">
            This transformation is also highly visible at international sourcing platforms like the Intex textile trade fair, where suppliers from Bangladesh showcase their latest capabilities, innovations, and product developments. Events like these provide buyers with direct access to manufacturers, helping them understand not just pricing, but also quality, compliance, and production capabilities in real time.
          </p>

          <p className="gsap-reveal">
            As the global fashion industry continues to evolve, sourcing decisions are becoming more strategic than ever. Brands like Zara and H&M are not just looking for suppliers—they are looking for long-term partners who can deliver consistency, innovation, and sustainability at scale. And in 2026, Bangladesh is proving that it can do exactly that.
          </p>

          <p className="text-xl font-bold text-slate-900 mt-12 gsap-reveal">
            The racks may change every season, but behind the scenes, one thing is becoming increasingly clear—the future of global apparel sourcing is being stitched in Bangladesh.
          </p>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden gsap-reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">Experience the Future of Sourcing</h3>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
              Join industry leaders at Intex Bangladesh to discover the latest in apparel manufacturing and textile innovation.
            </p>

            <a
              href="#enquiry-form"
              className="inline-block px-12 py-5 bg-[#F27B35] text-white font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/20"
            >
              Connect with Suppliers
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

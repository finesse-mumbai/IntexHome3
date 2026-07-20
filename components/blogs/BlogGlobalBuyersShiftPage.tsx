import React, { useEffect, useRef } from "react";

export default function BlogGlobalBuyersShiftPage() {
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
          Why Are Global Buyers Moving Textile Sourcing to <span className="text-[#F27B35]">South Asia in 2026?</span>
        </h1>

        <div className="flex items-center gap-4 text-slate-500 text-[14px] mb-10 blog-hero-content">
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Regional Insights</span>
          <span>May 12, 2026</span>
          <span>•</span>
          <span>9 min read</span>
        </div>

        <div className="w-full h-[500px] relative rounded-3xl overflow-hidden mb-12 blog-hero-image">
          <img
            src="/assets/img/Blogs/blog12.png"
            alt="Textile Sourcing in South Asia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8 gsap-reveal">
            The shift didn’t happen overnight—but if you look closely at how global brands are sourcing today, one pattern stands out clearly: South Asia is becoming the center of gravity for textile sourcing decisions.
          </p>

          <p className="gsap-reveal">
            From boardrooms in Europe to sourcing teams in the United States, conversations are increasingly revolving around India, Bangladesh, and Sri Lanka—not just as alternatives, but as primary sourcing destinations. This transformation is being driven by a powerful mix of cost efficiency, innovation, sustainability, and resilience, and it is reshaping how the global textile supply chain operates.
          </p>

          <p className="gsap-reveal">
            The scale of this shift is backed by strong numbers. The global textile and apparel market, valued at approximately $1.8 trillion, is projected to grow to nearly $2.6 trillion by 2030, reflecting steady expansion and rising consumer demand. Within this, the Asia-Pacific region already commands over 55% of global textile production, with South Asia emerging as one of the fastest-growing contributors.
          </p>

          <p className="gsap-reveal">
            Countries like Bangladesh have crossed $45 billion in apparel exports, while India continues to export textiles and apparel worth over $35 billion annually. Sri Lanka, though smaller in scale, has carved out a niche as a high-value apparel manufacturing hub, focusing on premium segments rather than mass production.
          </p>

          <p className="gsap-reveal">
            What is particularly interesting is that the nature of sourcing itself is changing. Buyers are no longer chasing the lowest cost—they are prioritizing value, reliability, and long-term partnerships. This is where South Asia is gaining a decisive edge. Sri Lanka, for instance, has built a reputation for ethical manufacturing, compliance, and precision-driven production, making it highly attractive for premium global brands.
          </p>

          <p className="gsap-reveal">
            At the same time, global supply chains are being restructured. The disruptions caused by the pandemic exposed the risks of overdependence on single sourcing regions, prompting brands to diversify. South Asia has naturally emerged as a preferred destination due to its strong manufacturing base, skilled workforce, and ability to adapt quickly.
          </p>

          <div className="bg-[#F27B35]/5 p-8 rounded-3xl border-l-4 border-[#F27B35] my-12 gsap-reveal">
            <p className="text-slate-800 m-0 font-semibold">
              Sustainability has become another defining force in global sourcing. The textile industry is responsible for nearly 10% of global carbon emissions and around 20% of industrial water pollution, making environmental responsibility a top priority for brands.
            </p>
          </div>

          <p className="gsap-reveal">
            South Asia, particularly Sri Lanka, has responded with significant investments in sustainable manufacturing. From carbon-neutral factories to energy-efficient production processes, the region is aligning itself with global ESG expectations. These efforts are not just theoretical—they are actively showcased at platforms like international textile fairs, where sustainability is integrated into product development and supply chain practices.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img
              src="/assets/img/Blogs/blog10.png"
              alt="Sustainable Textile Manufacturing"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="gsap-reveal">
            Another major trend shaping the industry is the rapid growth of technical textiles and man-made fibres (MMF). These segments now account for nearly 30% of the global textile market, with demand rising across sectors such as sportswear, healthcare, and industrial applications. South Asia is investing heavily in these areas, moving beyond traditional cotton-based production to embrace innovation-driven textile solutions.
          </p>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img
              src="/assets/img/Blogs/blog11.png"
              alt="Technical Textiles Innovation"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="gsap-reveal">
            Despite this shift towards higher value, South Asia continues to maintain a strong cost advantage. Production costs remain significantly lower than in Western markets, while the region’s scale and efficiency ensure competitive pricing. What makes this combination powerful is the ability to offer premium quality at accessible costs, a balance that is difficult to replicate elsewhere.
          </p>

          <p className="gsap-reveal">
            In this increasingly complex sourcing landscape, physical platforms have regained importance. Digital interactions can initiate conversations, but real decisions are often made face-to-face. This is why events like textile exhibitions in Colombo or Dhaka are becoming critical touchpoints for global buyers. These platforms allow businesses to evaluate suppliers firsthand, understand product quality, and build trust—elements that are essential for long-term partnerships.
          </p>

          <p className="gsap-reveal">
            Within this ecosystem, the Intex textile trade fair has emerged as a highly focused and strategic sourcing platform. Unlike broader exhibitions, Intex brings together a curated mix of suppliers and serious buyers, creating an environment where meaningful business interactions take place. It serves as a gateway not just to a single country, but to the wider South Asian textile market.
          </p>

          <p className="gsap-reveal">
            What makes South Asia’s rise particularly compelling is that it is not driven by a single factor—it is the result of multiple strengths coming together. The region offers scale, skill, sustainability, and strategic relevance at a time when the global textile industry is undergoing significant change.
          </p>

          <p className="gsap-reveal">
            South Asia is not just participating in the global textile industry—it is actively shaping its future. And for those looking to stay competitive, the smartest move is to be where the action is already unfolding.
          </p>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden gsap-reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">Stay Ahead in Sourcing</h3>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
              Engage with the South Asian textile ecosystem at the Intex trade fair. Connect with reliable suppliers and explore the latest industry trends.
            </p>

            <a
              href="#enquiry-form"
              className="inline-block px-12 py-5 bg-[#F27B35] text-white font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/20"
            >
              Register for Next Event
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

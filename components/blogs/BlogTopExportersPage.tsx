import React, { useEffect, useRef } from "react";

export default function BlogTopExportersPage() {
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

  const exporters = [
    {
      name: "Ha-Meem Group",
      subtitle: "A Leader in Denim and Woven Garments",
      description: "Ha-Meem Group stands as one of the largest garment exporters in Bangladesh, widely known for its dominance in denim and woven apparel. With multiple factories and a vast workforce, the company produces high volumes while maintaining quality standards required by global fashion brands."
    },
    {
      name: "DBL Group",
      subtitle: "From Basic Apparel to Value-Added Manufacturing",
      description: "DBL Group has evolved into a vertically integrated apparel manufacturer, producing everything from basic T-shirts to high-value garments. Its ability to move up the value chain highlights the shift in Bangladesh’s garment sector toward more sophisticated production."
    },
    {
      name: "Palmal Group",
      subtitle: "Growth Driven by Manufacturing Excellence",
      description: "Palmal Group has built a strong export presence through consistent manufacturing quality and operational efficiency. Its journey reflects the broader growth of Bangladesh’s garment industry from traditional setups to modern production environments."
    },
    {
      name: "Square Fashions Limited",
      subtitle: "Strength in Fabric-to-Garment Integration",
      description: "Square Fashions Limited benefits from strong backward linkages in yarn and fabric production, enabling seamless garment manufacturing. This integration ensures better quality control and faster production cycles."
    },
    {
      name: "Mohammadi Group",
      subtitle: "Diversified Apparel Production",
      description: "Mohammadi Group is known for its wide range of garment products, including sweaters and woven apparel. Its diversified manufacturing capabilities allow it to cater to multiple global markets."
    },
    {
      name: "Beximco Apparels",
      subtitle: "Large-Scale Industrial Manufacturing",
      description: "Beximco Apparels is one of the most recognized names in Bangladesh’s garment sector, operating at a massive scale. The company’s production strength and global reach make it a key contributor to the country’s export success."
    },
    {
      name: "Viyellatex Group",
      subtitle: "Knitwear Expertise and Sustainable Practices",
      description: "Viyellatex Group specializes in knitwear and has built a reputation for quality and sustainable manufacturing. Its integrated operations enable efficient production across various stages of garment manufacturing."
    },
    {
      name: "AKH Group",
      subtitle: "Compliance and Worker-Centric Manufacturing",
      description: "AKH Group is known for maintaining high compliance standards and a strong focus on worker welfare. Its manufacturing practices align with global expectations, making it a preferred partner for international brands."
    },
    {
      name: "Epyllion Group",
      subtitle: "High-Volume Knitwear Production",
      description: "Epyllion Group is a major knitwear exporter with significant production capacity. Its focus on efficiency and quality has helped it secure long-term relationships with global buyers."
    },
    {
      name: "Bitopi Group",
      subtitle: "Emerging Strength in Apparel Exports",
      description: "Bitopi Group represents the new wave of garment exporters in Bangladesh, growing rapidly through efficient production systems and strong buyer connections."
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <a href="#blogs" className="text-[#F27B35] font-semibold flex items-center gap-2 mb-8 hover:underline blog-hero-content">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blogs
        </a>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 blog-hero-content">
          Top 10 Garment Exporters in Bangladesh: <span className="text-[#F27B35]">Industry Leaders Powering Global Apparel</span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-8 blog-hero-content max-w-2xl">
          Meet the giants of the industry. A deep dive into the top 10 exporters in Bangladesh that are setting new standards in quality and scale.
        </p>

        <div className="flex items-center gap-4 text-slate-500 text-sm mb-8 blog-hero-content">
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Industry Leaders</span>
          <span>May 12, 2026</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        <div className="w-full h-[450px] relative rounded-3xl overflow-hidden mb-12 blog-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1558444479-c8f010528c32?w=1200&q=80" 
            alt="Bangladesh Garment Manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-12 gsap-reveal">
            Bangladesh has become a cornerstone of the global apparel industry, firmly holding its position as the world’s second-largest exporter of readymade garments. The country’s rise is rooted in its ability to combine large-scale manufacturing, competitive pricing, skilled labor, and strong global buyer relationships.
          </p>

          <p className="gsap-reveal">
            Over the years, Bangladesh has transitioned from basic apparel production to a more sophisticated, value-driven manufacturing ecosystem that caters to leading international fashion brands. Today, the strength of the industry lies in its top garment exporters—companies that have scaled operations, improved compliance, and embraced innovation in garment manufacturing processes such as sewing, knitting, dyeing, washing, and finishing.
          </p>

          <div className="space-y-12 my-16">
            {exporters.map((exporter, index) => (
              <div key={index} className="gsap-reveal bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-orange-200 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-black text-orange-200">{(index + 1).toString().padStart(2, '0')}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mt-0 mb-2">{exporter.name}</h2>
                    <h3 className="text-[#F27B35] text-lg font-semibold mb-4">{exporter.subtitle}</h3>
                    <p className="text-slate-600 leading-relaxed m-0">{exporter.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F27B35]/5 p-8 rounded-3xl border-l-4 border-[#F27B35] my-12 gsap-reveal">
            <h2 className="text-2xl font-bold text-slate-900 mt-0">Conclusion: Bangladesh’s Garment Exporters Driving Global Apparel Supply</h2>
            <p className="text-slate-700 m-0">
              These top garment exporters highlight the strength and resilience of Bangladesh’s apparel manufacturing sector. Their success is built on efficient production processes, strong supply chain management, and the ability to meet evolving global fashion demands. As the industry continues to grow, Bangladesh is not only maintaining its competitive edge but also moving toward higher-value, more sustainable garment manufacturing.
            </p>
          </div>

          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden my-12 gsap-reveal">
            <img 
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&q=80" 
              alt="Sustainable Apparel Production"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden gsap-reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F27B35]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Discover the Industry at Intex South Asia 2026</h3>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
              To connect with leading garment manufacturers and explore the latest developments in apparel production, don’t miss Intex Bangladesh in Dhaka, from 18–19–20 June 2026. This premier sourcing platform brings the entire textile and garment industry together under one roof—offering unmatched opportunities for networking, sourcing, and business growth.
            </p>
            <p className="text-white font-medium mb-10">
              Be part of the future of apparel manufacturing—all under one roof.
            </p>
            
            <a 
              href="#enquiry-form" 
              className="inline-block px-12 py-5 bg-[#F27B35] text-white font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/20"
            >
              Register for Intex 2026
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

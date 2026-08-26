import React from "react";
import BlogList from "./BlogList";

export const blogs = [
  {
    id: 2,
    heading: "Global Cotton Demand Evolution: Why Certified Sustainable Cotton is Reshaping Sourcing Strategies for Bangladeshi Manufacturers",
    excerpt: "Sustainability is no longer optional. Learn how certified organic and sustainable cotton is transforming the Bangladeshi garment sector.",
    image: "/assets/img/Blogs/blog01.png",
    link: "/blogs/sustainable-cotton",
  },
  {
    id: 1,
    heading: "$45B Exports. World-Class Manufacturing. Rising Demand: South Asia Is Where You Need to Be.",
    excerpt: "Global sourcing is shifting toward South Asia. With $45B in exports and a massive sourcing gap, discover why this region is the ultimate priority for global textile suppliers.",
    image: "/assets/img/Blogs/blog05.png",
    link: "/blogs/south-asia-exports",
  },
  {
    id: 3,
    heading: "The Top 10 Foreign Companies Purchasing Bangladeshi Garments: Global Sourcing Powerhouses Driving the Apparel Industry",
    excerpt: "Who are the biggest players in the game? We profile the top 10 international brands that rely on Bangladesh for their global supply chains.",
    image: "/assets/img/Blogs/blog7.png",
    link: "/blogs/top-foreign-buyers",
  },
  {
    id: 4,
    heading: "Top 10 Garment Exporters in Bangladesh: Industry Leaders Powering Global Apparel",
    excerpt: "Meet the giants of the industry. A deep dive into the top 10 exporters in Bangladesh that are setting new standards in quality and scale.",
    image: "/assets/img/Blogs/blog8.png",
    link: "/blogs/top-exporters",
  },
  {
    id: 5,
    heading: "Where Do Zara & H&M Source Their Clothes in 2026—and Why Is Bangladesh Becoming the World’s Go-To Apparel Hub",
    excerpt: "Exploring the sourcing strategies of global retail giants and the competitive advantages that make Bangladesh their preferred destination.",
    image: "/assets/img/Blogs/blog6.png",
    link: "/blogs/zara-hm-sourcing",
  },
  {
    id: 6,
    heading: "Why Are Global Buyers Quietly Moving Textile Sourcing to South Asia in 2026",
    excerpt: "The silent shift is happening. Uncover the economic and strategic factors driving global buyers toward the South Asian textile market.",
    image: "/assets/img/Blogs/blog12.png",
    link: "/blogs/global-buyers-shift",
  },
  {
    id: 7,
    heading: "Why Intex Is Your Smartest Gateway to the South Asia Textile Market",
    excerpt: "Connecting industry leaders and innovators. Discover how Intex fairs provide the ultimate platform for business growth in the region.",
    image: "/assets/img/Blogs/blog02.png",
    link: "/blogs/intex-gateway",
  },
  {
    id: 8,
    heading: "From Cotton to MMF: How Bangladesh’s Garment Exports Are Entering a New Growth Era",
    excerpt: "The decisive shift toward man-made fibre (MMF) production is reshaping Bangladesh's global export identity and signaling a new era of growth.",
    image: "/assets/img/Blogs/blog13.png",
    link: "/blogs/cotton-to-mmf",
  }
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-archive-cream pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-archive-charcoal mb-4 tracking-tight uppercase">
            Latest <span className="text-archive-clay">Insights.</span>
          </h1>
          <p className="text-archive-charcoal/70 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, market reports, and strategic shifts in the South Asian textile and garment landscape.
          </p>
          <div className="w-24 h-1.5 bg-archive-clay mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Blogs List */}
        <BlogList blogs={blogs} />
      </div>
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "./BlogsPage";

export default function HomeBlogs() {
  const topBlogs = blogs.slice(0, 3);

  return (
    <section className="bg-archive-cream py-24 border-t border-archive-charcoal/10" id="home-blogs">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 p-2">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] font-black tracking-[0.5em] text-archive-clay uppercase mb-4 block">
              Market Intelligence
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] text-archive-charcoal uppercase">
              Intex <br /> Blogs.
            </h2>
          </div>
          <Link
            to="/blogs"
            className="px-8 py-4 bg-archive-charcoal text-archive-cream font-black text-[10px] tracking-[0.4em] hover:bg-archive-clay transition-all uppercase whitespace-nowrap"
          >
            Read All Blogs
          </Link>
        </div>

        <div className="flex flex-col space-y-12">
          {topBlogs.map((blog, index) => (
            <article
              key={blog.id}
              className="group flex flex-col md:flex-row bg-white p-2 rounded-3xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image Section - 50% Width */}
              <div className="relative w-full md:w-1/2 h-96 overflow-hidden order-1 md:order-none">
                <img
                  src={blog.image}
                  alt={blog.heading}
                  className="w-full h-full object-cover transition-transform rounded-xl duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Section - 50% Width */}
              <div className="p-8 md:p-12 flex flex-col justify-center flex-1 md:w-1/2 order-2 md:order-none">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 leading-tight group-hover:text-archive-clay transition-colors">
                  {blog.heading}
                </h3>
                <p className="text-slate-600 text-base md:text-lg mb-8 line-clamp-4 leading-relaxed">
                  {blog.excerpt}
                </p>
                <div>
                  <Link
                    to={blog.link}
                    className="inline-flex items-center gap-3 px-8 py-3 bg-archive-clay text-white font-semibold text-sm  tracking-widest rounded-full hover:bg-archive-charcoal transition-all shadow-xl shadow-orange-500/20 group/link"
                  >
                    Read Full
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transform transition-transform group-hover/link:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

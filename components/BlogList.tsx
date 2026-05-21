import React, { useEffect, useRef, useState } from "react";

interface Blog {
  id: number;
  heading: string;
  excerpt: string;
  image: string;
  link: string;
}

interface BlogCardProps {
  blog: Blog;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, index }) => {
  const cardRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`relative group p-2 bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-slate-100 flex flex-col md:flex-row reveal ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background Number */}
      <div className="absolute top-[-10px] left-[-5px] text-8xl md:text-9xl font-black text-[#F27B35]/10 select-none pointer-events-none z-0 transform -rotate-12 -skew-x-12 pl-3">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Left Side: Content */}
      <div className="relative flex-1 p-6 md:p-10 flex flex-col justify-center z-10">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 leading-tight group-hover:text-[#F27B35] transition-colors">
          {blog.heading}
        </h2>
        <p className="text-slate-600 mb-6 line-clamp-2 text-sm md:text-base">
          {blog.excerpt}
        </p>
        <div>
          <a
            href={blog.link}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#F27B35] text-white font-semibold rounded-full hover:bg-[#d96d2b] transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            Read Full
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-[400px] h-[250px] md:h-auto relative overflow-hidden rounded-2xl">
        <img
          src={blog.image}
          alt={blog.heading}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </article>
  );
};

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="space-y-8">
      {blogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index} />
      ))}
    </div>
  );
}

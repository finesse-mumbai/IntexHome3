import React, { useState, useEffect } from 'react';
import {
  Linkedin,
  Facebook,
  Instagram,
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  ExternalLink,
  Loader2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FEED_CONFIG,
  OFFICIAL_LINKS,
  BRAND_AVATAR,
  REAL_LINKEDIN_POSTS,
  REAL_FACEBOOK_POSTS,
  REAL_INSTAGRAM_POSTS,
  SocialPost
} from '../constants/socialFeedData';

const SocialFeed: React.FC = () => {
  // Feed States
  const [linkedinPosts, setLinkedinPosts] = useState<SocialPost[]>(REAL_LINKEDIN_POSTS);
  const [facebookPosts, setFacebookPosts] = useState<SocialPost[]>(REAL_FACEBOOK_POSTS);
  const [instagramPosts, setInstagramPosts] = useState<SocialPost[]>(REAL_INSTAGRAM_POSTS);

  // Loading States
  const [loading, setLoading] = useState({
    linkedin: false,
    facebook: false,
    instagram: false
  });

  // Track liked status locally for micro-interactions
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});

  // Helper to handle dynamic RSS fetching via a free proxy
  const fetchRssFeed = async (rssUrl: string): Promise<SocialPost[]> => {
    // Using rss2json free service (no registration required for basic parsing)
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
    if (!response.ok) throw new Error("Failed to fetch RSS");
    const data = await response.json();
    if (data.status !== "ok") throw new Error(data.message || "Failed to parse RSS");

    return data.items.slice(0, 5).map((item: any, idx: number) => {
      let content = item.content || item.description || "";
      // Strip HTML tags for clean rendering
      content = content.replace(/<\/?[^>]+(>|$)/g, "").trim();

      // Parse or find media URL
      let mediaUrl = "";
      if (item.enclosure && item.enclosure.link) {
        mediaUrl = item.enclosure.link;
      } else if (item.thumbnail) {
        mediaUrl = item.thumbnail;
      } else {
        const imgMatch = (item.content || item.description || "").match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) mediaUrl = imgMatch[1];
      }

      // Fix XML HTML entity encoding in query parameters (e.g., converting &amp; to &)
      // This is crucial as LinkedIn's image CDNs will reject the URL with a 403 error if the signature & params are malformed.
      if (mediaUrl) {
        mediaUrl = mediaUrl.replace(/&amp;/g, '&');
      }

      // Grayscale/thematic fallbacks if no image found in item
      if (!mediaUrl) {
        const fallbacks = [
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
        ];
        mediaUrl = fallbacks[idx % fallbacks.length];
      }

      // Readable pub date
      let dateStr = "Recent Update";
      if (item.pubDate) {
        try {
          const d = new Date(item.pubDate);
          dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        } catch (e) { }
      }

      return {
        id: item.guid || `rss-${idx}-${Math.random()}`,
        authorName: "Intex South Asia",
        authorHandle: "textile-sourcing-platform",
        authorAvatar: BRAND_AVATAR,
        timestamp: dateStr,
        content: content.length > 280 ? content.substring(0, 277) + "..." : content,
        mediaUrl,
        postUrl: item.link || OFFICIAL_LINKS.linkedin,
        likes: Math.floor(Math.random() * 15) + 5, // Random number between 5 and 20
        comments: Math.floor(Math.random() * 5) + 1, // Random number between 1 and 5
        shares: Math.floor(Math.random() * 4) + 1 // Random number between 1 and 4
      };
    });
  };

  // Helper to handle Facebook JSON Feeds (like from rss.app v1.1 API)
  const fetchFacebookJsonFeed = async (apiUrl: string): Promise<SocialPost[]> => {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch Facebook JSON feed");
    const data = await response.json();
    const items = data.items || [];

    return items.slice(0, 5).map((item: any, idx: number) => {
      let dateStr = "Recent";
      if (item.date_published) {
        try {
          const d = new Date(item.date_published);
          dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        } catch (e) { }
      }

      let mediaUrl = item.image || "";
      if (mediaUrl) {
        mediaUrl = mediaUrl.replace(/&amp;/g, '&');
      }

      if (!mediaUrl) {
        mediaUrl = "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=600";
      }

      return {
        id: item.id || `fb-${idx}`,
        authorName: "Intex South Asia",
        authorHandle: "IntexSouthAsia",
        authorAvatar: data.favicon || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=150&h=150",
        timestamp: dateStr,
        content: item.content_text || item.title || "Click to see our latest post on Facebook!",
        mediaUrl,
        postUrl: item.url || OFFICIAL_LINKS.facebook,
        likes: Math.floor(Math.random() * 15) + 5, // Random number between 5 and 20
        comments: Math.floor(Math.random() * 5) + 1, // Random number between 1 and 5
        shares: Math.floor(Math.random() * 4) + 1 // Random number between 1 and 4
      };
    });
  };

  // Helper to handle Behold.so or standard Instagram feeds
  const fetchInstagramFeed = async (apiUrl: string): Promise<SocialPost[]> => {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch Instagram feed");
    const data = await response.json();

    // Behold returns posts inside `data.posts` or as a top-level array
    const postsArray = Array.isArray(data) ? data : (data.posts || data.data || []);
    const profileAvatar = data.profilePictureUrl || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=150&h=150";
    const authorHandleName = data.username || "intex_south_asia";

    return postsArray.slice(0, 5).map((item: any, idx: number) => {
      let dateStr = "Recent";
      if (item.timestamp) {
        try {
          const d = new Date(item.timestamp);
          dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        } catch (e) { }
      }

      // Check Behold optimized medium size URL first, then fall back to thumbnail or raw media
      const mediaUrl = item.sizes?.medium?.mediaUrl || item.thumbnailUrl || item.mediaUrl || item.media_url || "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=600";

      return {
        id: item.id || `ig-${idx}`,
        authorName: authorHandleName,
        authorHandle: authorHandleName,
        authorAvatar: profileAvatar,
        timestamp: dateStr,
        content: item.caption || "Click to see our latest visual showcase on Instagram!",
        mediaUrl,
        postUrl: item.permalink || item.url || OFFICIAL_LINKS.instagram,
        likes: Math.floor(Math.random() * 15) + 5, // Random number between 5 and 20
        comments: Math.floor(Math.random() * 5) + 1, // Random number between 1 and 5
      };
    });
  };

  // Load live feeds if URLs are supplied, otherwise stay on robust fallbacks
  useEffect(() => {
    const loadFeeds = async () => {
      // 1. LinkedIn Feed
      if (FEED_CONFIG.linkedinRssUrl) {
        setLoading(prev => ({ ...prev, linkedin: true }));
        try {
          const posts = (await fetchRssFeed(FEED_CONFIG.linkedinRssUrl)).map(post => ({
            ...post,
            authorAvatar: BRAND_AVATAR
          }));
          if (posts.length > 0) setLinkedinPosts(posts);
        } catch (err) {
          console.warn("Failed to fetch LinkedIn feed, falling back to curated posts:", err);
        } finally {
          setLoading(prev => ({ ...prev, linkedin: false }));
        }
      }

      // 2. Facebook Feed
      if (FEED_CONFIG.facebookRssUrl) {
        setLoading(prev => ({ ...prev, facebook: true }));
        try {
          let posts: SocialPost[] = [];
          if (FEED_CONFIG.facebookRssUrl.endsWith('.json') || FEED_CONFIG.facebookRssUrl.includes('/v1.1/')) {
            posts = await fetchFacebookJsonFeed(FEED_CONFIG.facebookRssUrl);
          } else {
            posts = await fetchRssFeed(FEED_CONFIG.facebookRssUrl);
          }
          if (posts.length > 0) setFacebookPosts(posts);
        } catch (err) {
          console.warn("Failed to fetch Facebook feed, falling back to curated posts:", err);
        } finally {
          setLoading(prev => ({ ...prev, facebook: false }));
        }
      }

      // 3. Instagram Feed
      if (FEED_CONFIG.instagramFeedApiUrl) {
        setLoading(prev => ({ ...prev, instagram: true }));
        try {
          const posts = await fetchInstagramFeed(FEED_CONFIG.instagramFeedApiUrl);
          if (posts.length > 0) setInstagramPosts(posts);
        } catch (err) {
          console.warn("Failed to fetch Instagram feed, falling back to curated posts:", err);
        } finally {
          setLoading(prev => ({ ...prev, instagram: false }));
        }
      }
    };

    loadFeeds();
  }, []);

  // Handle Like local toggling
  const handleLike = (e: React.MouseEvent, postId: string, defaultLikes: number) => {
    e.stopPropagation(); // Avoid triggering open card

    setLikedPosts(prev => {
      const currentlyLiked = prev[postId] || false;
      const nextState = !currentlyLiked;

      setLikeCounts(counts => ({
        ...counts,
        [postId]: (counts[postId] !== undefined ? counts[postId] : defaultLikes) + (nextState ? 1 : -1)
      }));

      return {
        ...prev,
        [postId]: nextState
      };
    });
  };

  const getLikesCount = (postId: string, defaultLikes: number) => {
    return likeCounts[postId] !== undefined ? likeCounts[postId] : defaultLikes;
  };

  // Helper to render skeleton loading
  const renderSkeleton = () => (
    <div className="flex flex-col space-y-6 p-6 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-black/5 rounded-full" />
        <div className="space-y-2 flex-1">
          <div className="h-3 bg-black/5 rounded w-1/3" />
          <div className="h-2 bg-black/5 rounded w-1/4" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-black/5 rounded w-full" />
        <div className="h-3 bg-black/5 rounded w-5/6" />
      </div>
      <div className="aspect-video bg-black/5 rounded-xl" />
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden bg-archive-cream" id="social">
      <style>{`
        @keyframes verticalMarquee {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-marquee {
          animation: verticalMarquee linear infinite;
        }
      `}</style>

      {/* SKEWED PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-archive-cream shadow-[0_0_100px_rgba(0,0,0,0.03)] origin-center overflow-hidden"
        >
          <div
            className="absolute inset-0 grid"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(125px, 1fr))', gridAutoRows: '125px' }}
          >
            {Array.from({ length: 300 }).map((_, i) => (
              <div key={i} className="w-full h-full border border-black/[0.03] relative bg-white overflow-hidden" />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-6">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] text-archive-charcoal">
            Social Network <br /> <span className="text-archive-clay">Feed Insight.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LINKEDIN FEED */}
          <div className="lg:col-span-4 bg-white/70 backdrop-blur-2xl border-[4.2px] border-double border-black/10 rounded-[24px] shadow-xl flex flex-col overflow-hidden h-[550px] relative">
            {/* Header */}
            <div className="p-5 border-b border-black/5 bg-white/40 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Linkedin size={20} className="text-[#0A66C2]" fill="currentColor" strokeWidth={0} />
                <span className="text-[14px] font-black tracking-widest uppercase text-archive-charcoal leading-none mt-1">LinkedIn Activity</span>
              </div>
              <a
                href={OFFICIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-archive-charcoal/40 hover:text-[#0A66C2] transition-colors"
                title="Open Official LinkedIn"
              >
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Scrolling Area */}
            <div className="flex-1 overflow-hidden relative px-6 w-full group [mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)]">
              {loading.linkedin ? (
                <div className="h-full flex flex-col justify-center items-center gap-3 text-archive-charcoal/40">
                  <Loader2 className="animate-spin" size={24} />
                  <span className="text-[14px] font-semibold uppercase tracking-wider">Syncing LinkedIn...</span>
                </div>
              ) : (
                <div
                  className="flex flex-col space-y-8 pb-8 mt-4 animate-vertical-marquee group-hover:[animation-play-state:paused]"
                  style={{ animationDuration: '30s' }}
                >
                  {/* Render Set 1 & Set 2 for an infinite loop */}
                  {[...linkedinPosts, ...linkedinPosts].map((post, idx) => {
                    const uniqueKey = `li-item-${post.id}-${idx}`;
                    const isLiked = likedPosts[post.id] || false;
                    return (
                      <div
                        key={uniqueKey}
                        onClick={() => window.open(post.postUrl, '_blank', 'noopener,noreferrer')}
                        className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5 transition-opacity hover:opacity-100"
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-black/5 relative">
                                <img src={post.authorAvatar} alt="Profile" className="w-full h-full object-contain bg-white p-1" />
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <h4 className="text-[14px] font-black uppercase text-archive-charcoal leading-none">{post.authorName}</h4>
                                </div>
                                <span className="text-[14px] font-bold tracking-widest text-archive-charcoal/40 uppercase">{post.timestamp}</span>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                          </div>

                          <p className="text-[14px] text-archive-charcoal/80 leading-relaxed font-medium whitespace-pre-line">
                            {post.content}
                          </p>

                          <div className="aspect-video bg-archive-cream/50 rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.01] transition-transform duration-500">
                            <img src={post.mediaUrl} className="w-full h-full object-cover transition-all duration-500" alt="Post graphic" />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="bg-white/95 px-3 py-1.5 rounded-full text-[14px] font-black uppercase tracking-widest text-archive-charcoal flex items-center gap-1 shadow-md">
                                View Post <ExternalLink size={10} />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                          <button
                            onClick={(e) => handleLike(e, post.id, post.likes)}
                            className={`flex items-center gap-2 hover:text-[#0A66C2] transition-colors ${isLiked ? 'text-[#0A66C2]' : ''}`}
                          >
                            <ThumbsUp size={16} className={isLiked ? 'fill-current' : ''} />
                            <span className="text-[14px] font-bold">{getLikesCount(post.id, post.likes)}</span>
                          </button>
                          <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors">
                            <MessageCircle size={16} />
                            <span className="text-[14px] font-bold">{post.comments}</span>
                          </div>
                          <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><Share2 size={16} /></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* FACEBOOK TIMELINE */}
          <div className="lg:col-span-4 bg-white/70 backdrop-blur-2xl border-[4.2px] border-double border-black/10 rounded-[24px] shadow-xl flex flex-col overflow-hidden h-[550px] relative">
            {/* Header */}
            <div className="p-5 border-b border-black/5 bg-white/40 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Facebook size={20} className="text-[#1877F2]" fill="currentColor" strokeWidth={0} />
                <span className="text-[14px] font-black tracking-widest uppercase text-archive-charcoal leading-none mt-1">Facebook Timeline</span>
              </div>
              <a
                href={OFFICIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-archive-charcoal/40 hover:text-[#1877F2] transition-colors"
                title="Open Official Facebook"
              >
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Scrolling Area */}
            <div className="flex-1 overflow-hidden relative px-6 w-full group [mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)]">
              {loading.facebook ? (
                <div className="h-full flex flex-col justify-center items-center gap-3 text-archive-charcoal/40">
                  <Loader2 className="animate-spin" size={24} />
                  <span className="text-[14px] font-semibold uppercase tracking-wider">Syncing Facebook...</span>
                </div>
              ) : (
                <div
                  className="flex flex-col space-y-8 pb-8 mt-4 animate-vertical-marquee group-hover:[animation-play-state:paused]"
                  style={{ animationDuration: '35s' }}
                >
                  {[...facebookPosts, ...facebookPosts].map((post, idx) => {
                    const uniqueKey = `fb-item-${post.id}-${idx}`;
                    const isLiked = likedPosts[post.id] || false;
                    return (
                      <div
                        key={uniqueKey}
                        onClick={() => window.open(post.postUrl, '_blank', 'noopener,noreferrer')}
                        className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5 transition-opacity hover:opacity-100"
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-black/5 relative">
                                <img src={post.authorAvatar} alt="Profile" className="w-full h-full object-contain bg-white p-1" />
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <h4 className="text-[14px] font-black uppercase text-archive-charcoal leading-none">{post.authorName}</h4>
                                </div>
                                <span className="text-[14px] font-bold tracking-widest text-archive-charcoal/40 uppercase">{post.timestamp}</span>
                              </div>
                            </div>
                            <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                          </div>

                          <p className="text-[14px] text-archive-charcoal/80 leading-relaxed font-medium whitespace-pre-line">
                            {post.content}
                          </p>

                          <div className="aspect-video bg-archive-cream/50 rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.01] transition-transform duration-500">
                            <img src={post.mediaUrl} className="w-full h-full object-cover transition-all duration-500" alt="Post graphic" />
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="bg-white/95 px-3 py-1.5 rounded-full text-[14px] font-black uppercase tracking-widest text-archive-charcoal flex items-center gap-1 shadow-md">
                                View Post <ExternalLink size={10} />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                          <button
                            onClick={(e) => handleLike(e, post.id, post.likes)}
                            className={`flex items-center gap-2 hover:text-[#1877F2] transition-colors ${isLiked ? 'text-[#1877F2]' : ''}`}
                          >
                            <ThumbsUp size={16} className={isLiked ? 'fill-current' : ''} />
                            <span className="text-[14px] font-bold">{getLikesCount(post.id, post.likes)}</span>
                          </button>
                          <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors">
                            <MessageCircle size={16} />
                            <span className="text-[14px] font-bold">{post.comments}</span>
                          </div>
                          <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><Share2 size={16} /></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* INSTAGRAM FEED */}
          <div className="lg:col-span-4 bg-white/70 backdrop-blur-2xl border-[4.2px] border-double border-black/10 rounded-[24px] shadow-xl flex flex-col overflow-hidden h-[550px] relative">
            {/* Header */}
            <div className="p-5 border-b border-black/5 bg-white/40 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-md flex items-center justify-center text-white shrink-0">
                  <Instagram size={14} />
                </div>
                <span className="text-[14px] font-black tracking-widest uppercase text-archive-charcoal leading-none mt-1">Instagram Feed</span>
              </div>
              <a
                href={OFFICIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-archive-charcoal/40 hover:text-archive-clay transition-colors"
                title="Open Official Instagram"
              >
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Scrolling Area */}
            <div className="flex-1 overflow-hidden relative px-6 w-full group [mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)]">
              {loading.instagram ? (
                <div className="h-full flex flex-col justify-center items-center gap-3 text-archive-charcoal/40">
                  <Loader2 className="animate-spin" size={24} />
                  <span className="text-[14px] font-semibold uppercase tracking-wider">Syncing Instagram...</span>
                </div>
              ) : (
                <div
                  className="flex flex-col space-y-8 pb-8 mt-4 animate-vertical-marquee group-hover:[animation-play-state:paused]"
                  style={{ animationDuration: '40s' }}
                >
                  {[...instagramPosts, ...instagramPosts].map((post, idx) => {
                    const uniqueKey = `ig-item-${post.id}-${idx}`;
                    const isLiked = likedPosts[post.id] || false;
                    return (
                      <div
                        key={uniqueKey}
                        onClick={() => window.open(post.postUrl, '_blank', 'noopener,noreferrer')}
                        className="group flex flex-col gap-4 cursor-pointer pb-8 border-b border-black/5 transition-opacity hover:opacity-100"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-black/5 relative">
                              <div className="w-full h-full bg-white flex items-center justify-center text-archive-clay overflow-hidden">
                                <img src={post.authorAvatar} alt="Profile" className="w-full h-full object-contain bg-white p-1" />
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-1">
                                <h4 className="text-[14px] font-black uppercase text-archive-charcoal leading-none">{post.authorName}</h4>
                              </div>
                              <span className="text-[14px] font-bold text-archive-charcoal/30 uppercase tracking-widest">{post.timestamp}</span>
                            </div>
                          </div>
                          <ExternalLink size={12} className="text-archive-charcoal/30 group-hover:text-archive-clay transition-colors" />
                        </div>

                        <div className="aspect-square rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.01] transition-transform duration-500">
                          <img src={post.mediaUrl} className="w-full h-full object-cover transition-all duration-500" alt="Instagram creative" />
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white/95 px-3 py-1.5 rounded-full text-[14px] font-black uppercase tracking-widest text-archive-charcoal flex items-center gap-1 shadow-md">
                              View on IG <ExternalLink size={10} />
                            </span>
                          </div>
                        </div>

                        <p className="text-[14px] font-bold text-archive-charcoal/80 uppercase tracking-wide leading-relaxed whitespace-pre-line">
                          {post.content.length > 150 ? post.content.substring(0, 147) + "..." : post.content}
                        </p>

                        <div className="flex gap-4 text-archive-charcoal/50">
                          <button
                            onClick={(e) => handleLike(e, post.id, post.likes)}
                            className={`flex items-center gap-1.5 hover:text-archive-clay transition-colors ${isLiked ? 'text-archive-clay' : ''}`}
                          >
                            <ThumbsUp size={16} className={isLiked ? 'fill-current' : ''} />
                            <span className="text-[14px] font-bold">{getLikesCount(post.id, post.likes)}</span>
                          </button>
                          <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors">
                            <MessageCircle size={16} />
                            <span className="text-[14px] font-bold">{post.comments}</span>
                          </div>
                          <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors"><Share2 size={16} /></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialFeed;

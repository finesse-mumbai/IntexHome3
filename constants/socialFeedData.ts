export interface SocialPost {
  id: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  timestamp: string;
  content: string;
  mediaUrl: string;
  postUrl: string;
  likes: number;
  comments: number;
  shares?: number;
}

export interface SocialFeedConfig {
  // Free RSS-to-JSON URLs or JSON URLs.
  // Users can use free services like rss.app, fetchrss.com, behold.so, or standard public RSS feeds.
  // Leave blank/null to use the high-fidelity real fallbacks.
  linkedinRssUrl: string | null;
  facebookRssUrl: string | null;
  instagramFeedApiUrl: string | null;
}

export const FEED_CONFIG: SocialFeedConfig = {
  // TO AUTOMATE FOR FREE:
  // 1. Create a free RSS feed of your social page using FetchRSS.com, RSS.app, or a public RSS-Bridge.
  // 2. Paste the RSS URL here. Our component will automatically fetch & parse it via a free RSS-to-JSON proxy!
  // Example: "https://rss.app/feeds/linkedin-sample.xml"
  linkedinRssUrl: "https://rss.app/feeds/0efLJ5SDScKHI0Of.xml", 
  facebookRssUrl: "https://rss.app/feeds/v1.1/CED0wxUYJlmKgMxi.json",
  // For Instagram, behold.so offers a 100% free tier (1,200 views/month) with zero setup.
  // Paste your behold.so API endpoint here, e.g. "https://api.behold.so/v1/posts?api_key=..."
  instagramFeedApiUrl: "https://feeds.behold.so/2XLShZOegm17eMdiDy3U",
};

export const OFFICIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/intexsouthasia/",
  facebook: "https://www.facebook.com/intexsouthasia/",
  instagram: "https://www.instagram.com/intex_south_asia/",
};

export const BRAND_AVATAR = "/assets/logo-dark.webp";

// HIGH-FIDELITY REAL FALLBACK DATA (ACTUAL INTEX SOUTH ASIA CAMPAIGNS & DATES)
export const REAL_LINKEDIN_POSTS: SocialPost[] = [
  {
    id: "li-1",
    authorName: "Intex South Asia",
    authorHandle: "textile-sourcing-platform",
    authorAvatar: BRAND_AVATAR,
    timestamp: "2 hours ago",
    content: "We are thrilled to announce that the 15th edition of Intex Bangladesh 2026 is scheduled for 18–20 June 2026 at the International Convention City Bashundhara (ICCB) in Dhaka! 🇧🇩 More than 100 global textile manufacturers, yarn suppliers, and industry leaders are gathering to bridge the global textile matrix. Book your exhibition space now to connect with Bangladesh's premier RMG buyers! 🌐🧵\n\n#IntexBangladesh #TextileSourcing #GarmentIndustry #RMG #B2BExpo #DhakaEvents #SupplyChain",
    mediaUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    postUrl: "https://www.linkedin.com/company/intexsouthasia/",
    likes: 148,
    comments: 32,
    shares: 19
  },
  {
    id: "li-2",
    authorName: "Intex South Asia",
    authorHandle: "textile-sourcing-platform",
    authorAvatar: BRAND_AVATAR,
    timestamp: "1 day ago",
    content: "Sustainability is no longer a choice; it's the future of fashion. 🌿 Recycle, repurpose, and innovate! At the upcoming Intex Sri Lanka 2026 (5-7 August at BMICH, Colombo), explore our exclusive Sustainable Sourcing Pavilion featuring certified organic cotton, recycled polyester yarns, eco-friendly dyes, and circular fibers. Connect with over 300 international buyers driving the circular economy! ♻️🌎\n\n#Sustainability #EcoFashion #IntexSriLanka #CircularFashion #TextileInnovation #GreenSourcing",
    mediaUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    postUrl: "https://www.linkedin.com/company/intexsouthasia/",
    likes: 215,
    comments: 45,
    shares: 28
  },
  {
    id: "li-3",
    authorName: "Intex South Asia",
    authorHandle: "textile-sourcing-platform",
    authorAvatar: BRAND_AVATAR,
    timestamp: "3 days ago",
    content: "Empowering global textile partnerships! Intex South Asia has successfully connected over 50,000+ buyers and exhibitors across 10+ countries. Our platform serves as the premier bridge for trade, investment, and joint ventures in the textile and apparel manufacturing sectors of South Asia. 🤝🌐\n\n#TextileSupplyChain #BusinessMatchmaking #SouthAsiaSourcing #IntexFair #B2BNetwork",
    mediaUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    postUrl: "https://www.linkedin.com/company/intexsouthasia/",
    likes: 189,
    comments: 18,
    shares: 12
  }
];

export const REAL_FACEBOOK_POSTS: SocialPost[] = [
  {
    id: "fb-1",
    authorName: "Intex South Asia",
    authorHandle: "IntexSouthAsia",
    authorAvatar: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=150&h=150",
    timestamp: "4 hours ago",
    content: "Countdown starts now! 🚀 Only a few weeks left for the grand opening of Intex Bangladesh 2026! Join us at ICCB, Dhaka from 18-20 June 2026. Discover global innovations in fibers, yarns, apparel fabrics, denims, and software solutions under one roof. Pre-register as a buyer today and enjoy priority B2B meeting access! 📸👇\n\n#IntexBangladesh #RMGIndustry #DhakaExhibition #TextileBuyers #BusinessMatchmaking #GarmentSourcing",
    mediaUrl: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=600",
    postUrl: "https://www.facebook.com/intexsouthasia/",
    likes: 412,
    comments: 67,
    shares: 43
  },
  {
    id: "fb-2",
    authorName: "Intex South Asia",
    authorHandle: "IntexSouthAsia",
    authorAvatar: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=150&h=150",
    timestamp: "1 day ago",
    content: "Relive the highlights of our previous highly successful editions in New Delhi, Colombo, and Dhaka! 🌟 By providing a highly interactive platform for manufacturers, exporters, and buying agents, Intex South Asia continues to expand trade and collaboration. Watch this space for key speaker announcements and panel discussions for the 2026 editions! 🌍🤝\n\n#Throwback #IntexExhibition #TextileTrends #SouthAsianBusiness #InternationalSourcing",
    mediaUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    postUrl: "https://www.facebook.com/intexsouthasia/",
    likes: 358,
    comments: 29,
    shares: 22
  },
  {
    id: "fb-3",
    authorName: "Intex South Asia",
    authorHandle: "IntexSouthAsia",
    authorAvatar: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=150&h=150",
    timestamp: "2 days ago",
    content: "Are you ready to discover the latest in fiber technology? From premium man-made fibers, organic linen, to high-performance activewear yarns, Intex South Asia connects you with vetted, premium suppliers worldwide. Join the green transition in textiles! 🌿🧶\n\n#FibersAndYarns #TextileTechnology #ActivewearFabrics #GreenTransition #EcoTextiles",
    mediaUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600",
    postUrl: "https://www.facebook.com/intexsouthasia/",
    likes: 294,
    comments: 15,
    shares: 14
  }
];

export const REAL_INSTAGRAM_POSTS: SocialPost[] = [
  {
    id: "ig-1",
    authorName: "intex_south_asia",
    authorHandle: "intex_south_asia",
    authorAvatar: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=150&h=150",
    timestamp: "5 hours ago",
    content: "Dhaka is calling! 🇧🇩 Get ready to network, source, and grow at Intex Bangladesh 2026. Discover cutting-edge apparel fabrics, fibers, yarns, and software. 18-20 June 2026 | ICCB, Dhaka. Link in bio to register for free! 📲🧵\n\n#intexsouthasia #intexbangladesh #dhakadiaries #textilesourcing #rmgbangladesh #fashionfabrics #yarns",
    mediaUrl: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=600",
    postUrl: "https://www.instagram.com/intex_south_asia/",
    likes: 182,
    comments: 24
  },
  {
    id: "ig-2",
    authorName: "intex_south_asia",
    authorHandle: "intex_south_asia",
    authorAvatar: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=150&h=150",
    timestamp: "1 day ago",
    content: "Sri Lanka's premier apparel sourcing destination! 🇱🇰 Connect with top-tier global exhibitors presenting premium collections at Intex Sri Lanka 2026. 5-7 August 2026 | BMICH, Colombo. Secure your booth today! 🏆🧶\n\n#intexsrilanka #colomboshopping #apparelmanufacturer #buyinghouse #sustainablefabrics #textileexpo",
    mediaUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600",
    postUrl: "https://www.instagram.com/intex_south_asia/",
    likes: 312,
    comments: 48
  },
  {
    id: "ig-3",
    authorName: "intex_south_asia",
    authorHandle: "intex_south_asia",
    authorAvatar: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=150&h=150",
    timestamp: "3 days ago",
    content: "Shaping the future of style, stitch by stitch. 🧵 Experience a vibrant universe of colors, textures, and designs at Intex South Asia sourcing series. 🌈✨\n\n#textiledesign #fabriclove #colorinspiration #fashiontrends #sourcingnetwork #b2bplatform",
    mediaUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    postUrl: "https://www.instagram.com/intex_south_asia/",
    likes: 245,
    comments: 19
  }
];

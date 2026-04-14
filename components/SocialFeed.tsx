import React, { useMemo } from 'react';
import { Linkedin, Facebook, Twitter, Youtube, Instagram, ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const BACKGROUND_IMAGES = [
  "https://sl.intexsouthasia.com/assets/img/Gallery/2025/21.jpg",
  "https://sl.intexsouthasia.com/assets/img/Gallery/2025/8.jpg",
  "https://sl.intexsouthasia.com/assets/img/Gallery/2025/14.jpg",
  "https://sl.intexsouthasia.com/assets/img/Gallery/2025/32.jpg",
  "https://sl.intexsouthasia.com/assets/img/Gallery/2025/25.jpg",
  "https://sl.intexsouthasia.com/assets/img/Gallery/2025/11.jpg"
];

const SocialFeed: React.FC = () => {
  const gridTiles = useMemo(() => {
    return Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      hasImage: Math.random() > 0.5,
      image: BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)]
    }));
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="social">
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
          {/* Main Skewed Light Plate */}
          <motion.div 
              initial={{ rotate: -5, scale: 1.2 }}
              whileInView={{ rotate: -3, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-white border border-black/5 shadow-[0_0_100px_rgba(0,0,0,0.03)] origin-center overflow-hidden"
          >
              <div 
                  className="absolute inset-0 grid" 
                  style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gridAutoRows: '180px' }}
              >
                  {gridTiles.map((tile) => (
                      <div key={tile.id} className="w-full h-full border border-black/[0.03] relative bg-white overflow-hidden">
                          {tile.hasImage && (
                              <img 
                                src={tile.image} 
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover" 
                              />
                          )}
                      </div>
                  ))}
              </div>
          </motion.div>

      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm py-2 px-4 shadow-sm w-fit">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Social Intelligence</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black uppercase leading-[0.9] text-archive-charcoal bg-white/60 backdrop-blur-sm py-4 px-6 shadow-sm w-fit">
              DIGITAL <span className="text-archive-clay">ENGAGEMENT.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LINKEDIN MOCK FEED */}
          <div className="lg:col-span-4 bg-white/70 backdrop-blur-2xl border-[3px] border-double border-black/10 rounded-[24px] shadow-xl flex flex-col overflow-hidden h-[550px] relative">
            {/* Feed Header */}
            <div className="p-5 border-b border-black/5 bg-white/40 backdrop-blur-md sticky top-0 z-20 flex items-center gap-3">
                <Linkedin size={20} className="text-[#0A66C2]" fill="currentColor" strokeWidth={0} />
                <span className="text-[11px] font-black tracking-widest uppercase text-archive-charcoal leading-none mt-1">LinkedIn Activity</span>
            </div>

            {/* Auto-scrolling Marquee Area */}
            <div className="flex-1 overflow-hidden relative px-6 w-full group [mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)]">
                <div 
                    className="flex flex-col space-y-8 pb-8 mt-4 animate-vertical-marquee group-hover:[animation-play-state:paused]"
                    style={{ animationDuration: '25s' }}
                >
                   {/* SET 1 */}
                   <div className="flex flex-col space-y-8">
                        {/* POST 1 */}
                        <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white shrink-0">
                                            <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                                        </div>
                                        <div>
                                            <h4 className="text-[12px] font-black uppercase text-archive-charcoal leading-none">Intex South Asia</h4>
                                            <span className="text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase">2 hours ago</span>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                                </div>
                                
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 leading-relaxed font-medium">
                                    We are thrilled to announce new strategic partnerships at the upcoming South Asian textile symposium. Stay tuned as we bridge the global textile matrix! 🌐✨ <br/><br/>
                                    <span className="text-[#0A66C2]">#TextileSourcing #IntexSouthAsia</span>
                                </p>

                                <div className="aspect-video bg-archive-cream/50 rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                                </div>
                            </div>

                            <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">124</span></div>
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">28</span></div>
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><Share2 size={16} /></div>
                            </div>
                        </div>

                        {/* POST 2 */}
                        <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white shrink-0">
                                            <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                                        </div>
                                        <div>
                                            <h4 className="text-[12px] font-black uppercase text-archive-charcoal leading-none">Intex South Asia</h4>
                                            <span className="text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase">1 day ago</span>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                                </div>
                                
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 leading-relaxed font-medium">
                                    Join industry leaders in driving the circular economy forward. Over 300 international buyers have already reserved their spots. Have you? 🌿♻️<br/><br/>
                                    <span className="text-[#0A66C2]">#B2B #Sustainability #Textiles</span>
                                </p>

                                <div className="aspect-[4/3] bg-archive-cream/50 rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                                </div>
                            </div>

                            <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">412</span></div>
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">89</span></div>
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><Share2 size={16} /></div>
                            </div>
                        </div>
                   </div>

                   {/* SET 2 (DUPLICATE FOR LOOP) */}
                   <div className="flex flex-col space-y-8">
                        <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white shrink-0">
                                            <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                                        </div>
                                        <div>
                                            <h4 className="text-[12px] font-black uppercase text-archive-charcoal leading-none">Intex South Asia</h4>
                                            <span className="text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase">2 hours ago</span>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                                </div>
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 leading-relaxed font-medium">
                                    We are thrilled to announce new strategic partnerships at the upcoming South Asian textile symposium. Stay tuned as we bridge the global textile matrix! 🌐✨ <br/><br/>
                                    <span className="text-[#0A66C2]">#TextileSourcing #IntexSouthAsia</span>
                                </p>
                                <div className="aspect-video bg-archive-cream/50 rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                                </div>
                            </div>
                            <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">124</span></div>
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">28</span></div>
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><Share2 size={16} /></div>
                            </div>
                        </div>

                        <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white shrink-0">
                                            <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                                        </div>
                                        <div>
                                            <h4 className="text-[12px] font-black uppercase text-archive-charcoal leading-none">Intex South Asia</h4>
                                            <span className="text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase">1 day ago</span>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                                </div>
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 leading-relaxed font-medium">
                                    Join industry leaders in driving the circular economy forward. Over 300 international buyers have already reserved their spots. Have you? 🌿♻️<br/><br/>
                                    <span className="text-[#0A66C2]">#B2B #Sustainability #Textiles</span>
                                </p>
                                <div className="aspect-[4/3] bg-archive-cream/50 rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                                </div>
                            </div>
                            <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">412</span></div>
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">89</span></div>
                                <div className="flex items-center gap-2 hover:text-[#0A66C2] transition-colors"><Share2 size={16} /></div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
          </div>

          {/* FACEBOOK MOCK FEED */}
          <div className="lg:col-span-4 bg-white/70 backdrop-blur-2xl border-[3px] border-double border-black/10 rounded-[24px] shadow-xl flex flex-col overflow-hidden h-[550px] relative">
            {/* Feed Header */}
            <div className="p-5 border-b border-black/5 bg-white/40 backdrop-blur-md sticky top-0 z-20 flex items-center gap-3">
                <Facebook size={20} className="text-[#1877F2]" fill="currentColor" strokeWidth={0} />
                <span className="text-[11px] font-black tracking-widest uppercase text-archive-charcoal leading-none mt-1">Facebook Timeline</span>
            </div>

            {/* Auto-scrolling Marquee Area */}
            <div className="flex-1 overflow-hidden relative px-6 w-full group [mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)]">
                <div
                    className="flex flex-col space-y-8 pb-8 mt-12 animate-vertical-marquee group-hover:[animation-play-state:paused]"
                    style={{ animationDuration: '30s' }}
                >
                    {/* SET 1 */}
                    <div className="flex flex-col space-y-8">
                        {/* POST 1 */}
                        <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white shrink-0">
                                            <Facebook size={20} fill="currentColor" strokeWidth={0} />
                                        </div>
                                        <div>
                                            <h4 className="text-[12px] font-black uppercase text-archive-charcoal leading-none">Intex South Asia</h4>
                                            <span className="text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase">5 hours ago</span>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                                </div>
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 leading-relaxed font-medium">
                                    Catch exclusive behind-the-scenes glimpses from our exhibitor preparatory session! 📸 A record number of international pavilions are getting ready to showcase their latest innovations. <br/><br/>
                                    <span className="text-[#1877F2]">#IntexUpdate #TextileExpo</span>
                                </p>
                                <div className="aspect-video rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                                </div>
                            </div>
                            <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">342</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">56</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><Share2 size={16} /></div>
                            </div>
                        </div>

                        {/* POST 2 */}
                        <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white shrink-0">
                                            <Facebook size={20} fill="currentColor" strokeWidth={0} />
                                        </div>
                                        <div>
                                            <h4 className="text-[12px] font-black uppercase text-archive-charcoal leading-none">Intex South Asia</h4>
                                            <span className="text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase">2 days ago</span>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                                </div>
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 leading-relaxed font-medium">
                                    Over 450 exhibitors confirming their attendance logic for the massive sourcing event of the decade. Do not miss your chance to connect with these global giants.<br/><br/>
                                    <span className="text-[#1877F2]">#Apparel #FabricNews</span>
                                </p>
                                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                                </div>
                            </div>
                            <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">894</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">211</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><Share2 size={16} /></div>
                            </div>
                        </div>
                    </div>

                    {/* SET 2 (DUPLICATE FOR LOOP) */}
                    <div className="flex flex-col space-y-8">
                        {/* POST 1 */}
                        <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white shrink-0">
                                            <Facebook size={20} fill="currentColor" strokeWidth={0} />
                                        </div>
                                        <div>
                                            <h4 className="text-[12px] font-black uppercase text-archive-charcoal leading-none">Intex South Asia</h4>
                                            <span className="text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase">5 hours ago</span>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                                </div>
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 leading-relaxed font-medium">
                                    Catch exclusive behind-the-scenes glimpses from our exhibitor preparatory session! 📸 A record number of international pavilions are getting ready to showcase their latest innovations. <br/><br/>
                                    <span className="text-[#1877F2]">#IntexUpdate #TextileExpo</span>
                                </p>
                                <div className="aspect-video rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                                </div>
                            </div>
                            <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">342</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">56</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><Share2 size={16} /></div>
                            </div>
                        </div>

                        {/* POST 2 */}
                        <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white shrink-0">
                                            <Facebook size={20} fill="currentColor" strokeWidth={0} />
                                        </div>
                                        <div>
                                            <h4 className="text-[12px] font-black uppercase text-archive-charcoal leading-none">Intex South Asia</h4>
                                            <span className="text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase">2 days ago</span>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                                </div>
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 leading-relaxed font-medium">
                                    Over 450 exhibitors confirming their attendance logic for the massive sourcing event of the decade. Do not miss your chance to connect with these global giants.<br/><br/>
                                    <span className="text-[#1877F2]">#Apparel #FabricNews</span>
                                </p>
                                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                                </div>
                            </div>
                            <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">894</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">211</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><Share2 size={16} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* SECONDARY SOCIAL CHANNELS */}
          <div className="lg:col-span-4 flex flex-col gap-4">
              <a href="#" className="flex-1 flex items-center justify-between bg-white/70 backdrop-blur-2xl border-[3px] border-double border-black/10 p-6 rounded-[24px] group relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                  <div className="relative z-10 flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/50 backdrop-blur-sm shadow-sm rounded-full flex items-center justify-center text-black group-hover:bg-white transition-colors duration-500 shrink-0">
                          <Twitter size={20} fill="currentColor" strokeWidth={0} />
                      </div>
                      <div>
                          <h4 className="text-[13px] lg:text-sm font-black uppercase text-archive-charcoal group-hover:text-white transition-colors duration-500">X (Twitter)</h4>
                          <span className="text-[8px] lg:text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase group-hover:text-white/60 transition-colors duration-500">Follow @IntexSouthAsia</span>
                      </div>
                  </div>
              </a>

              <a href="#" className="flex-1 flex items-center justify-between bg-white/70 backdrop-blur-2xl border-[3px] border-double border-black/10 p-6 rounded-[24px] group relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-[#FF0000] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                  <div className="relative z-10 flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/50 backdrop-blur-sm shadow-sm rounded-full flex items-center justify-center text-[#FF0000] group-hover:bg-white transition-colors duration-500 shrink-0">
                          <Youtube size={20} fill="currentColor" strokeWidth={0} />
                      </div>
                      <div>
                          <h4 className="text-[13px] lg:text-sm font-black uppercase text-archive-charcoal group-hover:text-white transition-colors duration-500">YouTube</h4>
                          <span className="text-[8px] lg:text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase group-hover:text-white/60 transition-colors duration-500">Subscribe for Videos</span>
                      </div>
                  </div>
              </a>

              <a href="#" className="flex-1 flex items-center justify-between bg-white/70 backdrop-blur-2xl border-[3px] border-double border-black/10 p-6 rounded-[24px] group relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                  <div className="relative z-10 flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/50 backdrop-blur-sm shadow-sm rounded-full flex items-center justify-center text-[#ee2a7b] group-hover:bg-white group-hover:text-[#ee2a7b] transition-colors duration-500 shrink-0">
                          <Instagram size={20} />
                      </div>
                      <div>
                          <h4 className="text-[13px] lg:text-sm font-black uppercase text-archive-charcoal group-hover:text-white transition-colors duration-500">Instagram</h4>
                          <span className="text-[8px] lg:text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase group-hover:text-white/60 transition-colors duration-500">View visual insights</span>
                      </div>
                  </div>
              </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialFeed;

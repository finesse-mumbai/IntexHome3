import React from 'react';
import { Linkedin, Facebook, Instagram, ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialFeed: React.FC = () => {

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
          {/* Main Skewed Light Plate */}
          <motion.div 
              initial={{ rotate: -5, scale: 1.2 }}
              whileInView={{ rotate: -3, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-archive-cream shadow-[0_0_100px_rgba(0,0,0,0.03)] origin-center overflow-hidden"
          >
              <div 
                  className="absolute inset-0 grid" 
                  style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(125px, 1fr))', gridAutoRows: '125px' }}
              >
                  {Array.from({ length: 300 }).map((_, i) => (
                      <div key={i} className="w-full h-full border border-black/[0.03] relative bg-white overflow-hidden">
                          {/* Background Grid Cells */}
                      </div>
                  ))}
              </div>
          </motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 space-y-16">
        <div className="flex flex-col items-start text-left space-y-6">
            <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-archive-clay"></div>
                <span className="text-[10px] font-black uppercase text-archive-clay tracking-[0.3em]">Social Intelligence</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] text-archive-charcoal">
              PARTNERSHIP <br /> <span className="text-archive-clay">NETWORK.</span>
            </h2>
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
                        {/* Duplicate content from set 1 */}
                        <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm">
                                            <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                                        </div>
                                        <div>
                                            <h4 className="text-[11px] font-black uppercase text-archive-charcoal leading-none">Intex South Asia</h4>
                                            <span className="text-[8px] font-bold tracking-widest text-archive-charcoal/40 uppercase">Global Strategic Update</span>
                                        </div>
                                    </div>
                                    <MoreHorizontal size={20} className="text-archive-charcoal/30 hover:text-black hidden sm:block" />
                                </div>
                                <p className="text-[11px] text-archive-charcoal/80 leading-relaxed font-medium">
                                    Bridging the global textile matrix! Stay tuned for strategic partnerships at the upcoming symposium. 🌐✨
                                </p>
                                <div className="aspect-video bg-archive-cream/30 rounded-xl overflow-hidden border border-black/5">
                                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                                </div>
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
                                    Catch exclusive behind-the-scenes glimpses from our exhibitor preparatory session! 📸 A record number of pavilions are arriving. <br/><br/>
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
                                            <span className="text-[9px] font-bold tracking-widest text-archive-charcoal/40 uppercase">1 day ago</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 leading-relaxed font-medium">
                                    Strategic sourcing starts here. With over 15 countries represented, Intex South Asia is the global textile bridge. 🌍🌐
                                </p>
                                <div className="aspect-video rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                                </div>
                            </div>
                            <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">521</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">89</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><Share2 size={16} /></div>
                            </div>
                        </div>

                        {/* POST 3 */}
                        <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5">
                            <div className="space-y-4">
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 leading-relaxed font-medium">
                                    Sustainable fibers taking center stage! Join the green revolution in textiles at our dedicated pavilion. 🌿🧶
                                </p>
                                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-black/5 relative group-hover:scale-[1.02] transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                                </div>
                            </div>
                            <div className="flex gap-6 mt-6 text-archive-charcoal/50">
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">128</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">12</span></div>
                                <div className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"><Share2 size={16} /></div>
                            </div>
                        </div>
                    </div>

                    {/* SET 2 (DUPLICATE FOR LOOP) */}
                    <div className="flex flex-col space-y-8">
                         {/* Duplicate of Set 1 for marquee */}
                         <div className="group flex flex-col justify-between cursor-pointer pb-8 border-b border-black/5 opacity-40">
                            <div className="space-y-4">
                                <p className="text-[11px] md:text-xs text-archive-charcoal/80 font-medium">Updating live feed...</p>
                                <div className="aspect-video rounded-xl bg-archive-cream/20 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* INSTAGRAM MOCK FEED */}
          <div className="lg:col-span-4 bg-white/70 backdrop-blur-2xl border-[3px] border-double border-black/10 rounded-[24px] shadow-xl flex flex-col overflow-hidden h-[550px] relative">
            {/* Feed Header */}
            <div className="p-5 border-b border-black/5 bg-white/40 backdrop-blur-md sticky top-0 z-20 flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-md flex items-center justify-center text-white">
                  <Instagram size={14} />
                </div>
                <span className="text-[11px] font-black tracking-widest uppercase text-archive-charcoal leading-none mt-1">Instagram Feed</span>
            </div>

            {/* Auto-scrolling Marquee Area */}
            <div className="flex-1 overflow-hidden relative px-6 w-full group [mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)]">
                <div 
                    className="flex flex-col space-y-8 pb-8 mt-12 animate-vertical-marquee group-hover:[animation-play-state:paused]"
                    style={{ animationDuration: '35s' }}
                >
                    <div className="flex flex-col space-y-8">
                        {/* POST 1 */}
                        <div className="group flex flex-col gap-4 cursor-pointer pb-8 border-b border-black/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full border border-archive-clay p-[1px]">
                                  <div className="w-full h-full rounded-full bg-archive-clay/10 flex items-center justify-center text-archive-clay">
                                    <Instagram size={16} />
                                  </div>
                                </div>
                                <h4 className="text-[11px] font-black uppercase text-archive-charcoal">intex_south_asia</h4>
                            </div>
                            <div className="aspect-square rounded-xl overflow-hidden border border-black/5">
                                <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                            </div>
                            <div className="flex gap-4 text-archive-charcoal/50">
                                <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">89</span></div>
                                <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">14</span></div>
                                <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors"><Share2 size={16} /></div>
                            </div>
                            <p className="text-[10px] font-bold text-archive-charcoal/70 uppercase tracking-wider">The future of fashion starts with the right fiber. 🧵✨</p>
                        </div>

                        {/* POST 2 */}
                        <div className="group flex flex-col gap-4 cursor-pointer pb-8 border-b border-black/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full border border-archive-clay p-[1px]">
                                  <div className="w-full h-full rounded-full bg-archive-clay/10 flex items-center justify-center text-archive-clay">
                                    <Instagram size={16} />
                                  </div>
                                </div>
                                <h4 className="text-[11px] font-black uppercase text-archive-charcoal">intex_south_asia</h4>
                            </div>
                            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-black/5">
                                <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                            </div>
                            <div className="flex gap-4 text-archive-charcoal/50">
                                <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">245</span></div>
                                <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">32</span></div>
                                <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors"><Share2 size={16} /></div>
                            </div>
                            <p className="text-[10px] font-bold text-archive-charcoal/70 uppercase tracking-wider">Showcasing the vibrant colors of South Asia. 🌈🎨</p>
                        </div>

                        {/* POST 3 */}
                        <div className="group flex flex-col gap-4 cursor-pointer pb-8 border-b border-black/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full border border-archive-clay p-[1px]">
                                  <div className="w-full h-full rounded-full bg-archive-clay/10 flex items-center justify-center text-archive-clay">
                                    <Instagram size={16} />
                                  </div>
                                </div>
                                <h4 className="text-[11px] font-black uppercase text-archive-charcoal">intex_south_asia</h4>
                            </div>
                            <div className="aspect-video rounded-xl overflow-hidden border border-black/5">
                                <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-80" />
                            </div>
                            <div className="flex gap-4 text-archive-charcoal/50">
                                <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors"><ThumbsUp size={16} /> <span className="text-[10px] font-bold">112</span></div>
                                <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors"><MessageCircle size={16} /> <span className="text-[10px] font-bold">8</span></div>
                                <div className="flex items-center gap-1.5 hover:text-archive-clay transition-colors"><Share2 size={16} /></div>
                            </div>
                            <p className="text-[10px] font-bold text-archive-charcoal/70 uppercase tracking-wider">Innovation in every stitch. See you at Intex! 📍🤝</p>
                        </div>
                    </div>

                    {/* SET 2 (DUPLICATE) */}
                    <div className="flex flex-col space-y-8">
                         <div className="group flex flex-col gap-4 pb-8 border-b border-black/5 opacity-40">
                            <div className="aspect-square rounded-xl bg-archive-cream/10 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialFeed;

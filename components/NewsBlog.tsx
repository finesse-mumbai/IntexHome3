
import React from 'react';
import { motion } from 'framer-motion';

const NewsBlog: React.FC = () => {
   return (
      <section className="py-40 bg-archive-cream border-b border-archive-charcoal" id="blog">
         <div className="max-w-[1440px] mx-auto px-12">
            <div className="text-center mb-24 space-y-4">
               <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">News Blog</span>
               <h2 className="text-lg font-serif font-black tracking-tighter uppercase text-archive-charcoal">
                  Latest From Our Blog
               </h2>
               <div className="w-12 h-[2px] bg-archive-clay mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-1px bg-archive-charcoal border border-archive-charcoal">
               {/* Card 1 - Image Heavy */}
               <div className="md:col-span-4 bg-archive-cream flex flex-col group p-6">
                  <div className="aspect-[4/5] border border-archive-charcoal overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className="pt-8 space-y-4">
                     <span className="text-[9px] font-black tracking-widest uppercase text-archive-clay">Admin _ Press Release</span>
                     <h3 className="text-lg font-serif font-black uppercase leading-tight text-archive-charcoal group-hover:text-archive-clay transition-colors">Celebrating Authentic Marathon at Our Museum</h3>
                     <p className="text-[10px] font-medium leading-relaxed uppercase tracking-widest text-archive-charcoal opacity-70">Explain to you how all this mistaken idea of denouncing pleasure...</p>
                     <div className="pt-4 flex justify-between items-center text-[9px] font-black tracking-widest border-t border-archive-charcoal/10">
                        <span className="text-archive-clay hover:underline cursor-pointer">READ MORE +</span>
                        <span className="text-archive-charcoal opacity-40">21.10.2025</span>
                     </div>
                  </div>
               </div>

               {/* Card 2 - Center Quote Section */}
               <div className="md:col-span-4 bg-archive-cream flex flex-col">
                  <div className="flex-1 bg-archive-clay/5 p-12 flex flex-col justify-center items-center text-center relative group">
                     <div className="text-4xl font-serif font-black text-archive-clay opacity-10 absolute top-4 left-4">“</div>
                     <p className="text-lg font-serif font-black uppercase leading-tight mb-8 text-archive-charcoal group-hover:text-archive-clay transition-colors">
                        "While I stand & regard it, the indifference to myself shown by a work of art in itself is art"
                     </p>
                     <button className="text-[10px] font-black tracking-[0.4em] uppercase border-b border-archive-clay pb-2 text-archive-clay hover:opacity-60 transition-opacity">Read More +</button>
                  </div>
                  <div className="h-64 border-t border-archive-charcoal overflow-hidden brightness-50">
                     <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                  </div>
               </div>

               {/* Card 3 - Image Heavy */}
               <div className="md:col-span-4 bg-archive-cream flex flex-col group p-6 border-l border-archive-charcoal">
                  <div className="aspect-[4/5] border border-archive-charcoal overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className="pt-8 space-y-4">
                     <span className="text-[9px] font-black tracking-widest uppercase text-archive-clay">Admin _ Press Release</span>
                     <h3 className="text-lg font-serif font-black uppercase leading-tight text-archive-charcoal group-hover:text-archive-clay transition-colors">The Impact of Material Innovation in Modern Art</h3>
                     <p className="text-[10px] font-medium leading-relaxed uppercase tracking-widest text-archive-charcoal opacity-70">Explain to you how all this mistaken idea of denouncing pleasure...</p>
                     <div className="pt-4 flex justify-between items-center text-[9px] font-black tracking-widest border-t border-archive-charcoal/10">
                        <span className="text-archive-clay hover:underline cursor-pointer">READ MORE +</span>
                        <span className="text-archive-charcoal opacity-40">21.10.2025</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default NewsBlog;

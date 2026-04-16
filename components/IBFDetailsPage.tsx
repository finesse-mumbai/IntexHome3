import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, Play, Target, Award, Zap } from 'lucide-react';

const IBFDetailsPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-archive-cream min-h-screen selection:bg-archive-clay selection:text-white overflow-hidden">
      
      {/* 1. CINEMATIC KINETIC HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-archive-charcoal">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: yParallax }} className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=2400" 
               className="w-full h-full object-cover opacity-60"
               alt="Fashion Background"
             />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-archive-charcoal via-transparent to-archive-charcoal/40" />
        </div>

        {/* Kinetic Typography */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-[0.03] select-none">
          <div className="text-[20vw] font-black leading-none whitespace-nowrap -ml-20">INTELLIGENCE intelligence INTELLIGENCE</div>
          <div className="text-[20vw] font-black leading-none whitespace-nowrap ml-40 text-transparent border-t border-b border-white italic">FASHION fashion FASHION</div>
          <div className="text-[20vw] font-black leading-none whitespace-nowrap -ml-10">FUTURE future FUTURE</div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-12 text-center space-y-12">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="flex flex-col items-center gap-8"
           >
             <div className="px-6 py-2 bg-archive-clay text-white text-[10px] font-black tracking-[0.6em] uppercase">
                Seminar Series // 2025
             </div>
             
             <div className="relative">
                <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-white uppercase italic">
                  AI <span className="text-archive-clay">IN</span> <br />
                  FASHION.
                </h1>
                <div className="absolute -top-12 -right-12 w-32 h-32 border border-white/10 rounded-full flex items-center justify-center">
                   <div className="w-20 h-20 bg-white p-2">
                      <img src="https://bd.intexsouthasia.com/assets/img/output-onlinepngtools.png" alt="IBF Logo" className="w-full h-full object-contain" />
                   </div>
                </div>
             </div>

             <p className="text-lg md:text-2xl font-black text-white/40 tracking-[0.2em] uppercase max-w-2xl">
               Reinventing the Fabric of Tomorrow through Intelligence and Sustainability.
             </p>
           </motion.div>
        </div>

        {/* Decorative Scroller */}
        <div className="absolute bottom-12 left-12 flex flex-col items-start gap-4">
           <div className="w-px h-24 bg-gradient-to-t from-archive-clay to-transparent" />
           <span className="text-[9px] font-black tracking-[0.5em] text-white/30 uppercase vertical-text">Explore Archive</span>
        </div>
      </section>

      {/* 2. TECHNICAL SPECIFICATION (OVERVIEW) */}
      <section className="py-48 px-12 relative">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
           <div className="lg:col-span-5 relative">
              <div className="sticky top-32 space-y-12">
                 <div className="space-y-6">
                    <span className="text-archive-clay text-[10px] font-black tracking-[0.6em] uppercase block">01 // Protocol</span>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-archive-charcoal uppercase">
                      The Interactive <br /> Business Forum.
                    </h2>
                 </div>
                 <p className="text-sm font-bold tracking-[0.1em] leading-relaxed text-archive-charcoal/60 max-w-sm uppercase">
                   A high-frequency knowledge exchange network connecting global thought leaders with regional manufacturing powerhouses.
                 </p>
                 <div className="w-24 h-px bg-archive-clay" />
              </div>
           </div>

           <div className="lg:col-span-7 space-y-32">
              <div className="p-16 bg-white border border-archive-charcoal/10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-full h-full bg-archive-clay/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-700" />
                 <div className="relative z-10 space-y-10">
                    <p className="text-xl md:text-3xl font-black text-archive-charcoal leading-tight uppercase tracking-tight">
                      "IBF brings together top industry experts to share cutting-edge insights on global trends. This year’s spotlight is on AI in Fashion — revolutionizing the design-to-consumer ecosystem."
                    </p>
                    <div className="grid grid-cols-2 gap-12 pt-10 border-t border-archive-charcoal/5">
                       <div className="space-y-2">
                          <span className="text-[8px] font-black text-archive-clay tracking-widest uppercase">Focus Vector A</span>
                          <span className="text-xs font-black text-archive-charcoal uppercase">AI Implementation</span>
                       </div>
                       <div className="space-y-2">
                          <span className="text-[8px] font-black text-archive-clay tracking-widest uppercase">Focus Vector B</span>
                          <span className="text-xs font-black text-archive-charcoal uppercase">Tariff Dynamics</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { icon: <Target />, label: "Strategy", value: "Global Trend Alignment" },
                  { icon: <Award />, label: "Quality", value: "Certified Expertise" },
                  { icon: <Zap />, label: "Speed", value: "Rapid Market Adaptation" },
                  { icon: <Clock />, label: "History", value: "10 Years of Insights" }
                ].map((item, i) => (
                  <div key={i} className="p-10 border border-archive-charcoal/10 hover:border-archive-clay transition-all duration-500 bg-white group">
                    <div className="text-archive-clay mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform">{item.icon}</div>
                    <span className="text-[9px] font-black tracking-widest text-archive-charcoal/30 uppercase">{item.label}</span>
                    <h4 className="text-lg font-black text-archive-charcoal uppercase mt-2">{item.value}</h4>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* 3. SESSIONS ARCHIVE (TECHNICAL DATA SHEETS) */}
      <section className="bg-white py-48 border-y border-archive-charcoal/10 relative">
        {/* Background Tape */}
        <div className="absolute top-0 left-0 w-full h-8 bg-archive-charcoal/5 flex items-center overflow-hidden pointer-events-none">
          <div className="flex gap-20 whitespace-nowrap text-[10px] font-black text-archive-charcoal/20 uppercase tracking-[1em] animate-scroll">
            <span>TECHNICAL SPECIFICATION // SESSION DATA // 2025</span>
            <span>TECHNICAL SPECIFICATION // SESSION DATA // 2025</span>
            <span>TECHNICAL SPECIFICATION // SESSION DATA // 2025</span>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32">
             <div className="space-y-4">
               <span className="text-archive-clay text-[10px] font-black tracking-[0.6em] uppercase">02 // Schedule</span>
               <h2 className="text-6xl font-black tracking-tighter text-archive-charcoal uppercase leading-none">The Sessions.</h2>
             </div>
             <p className="text-[10px] font-black text-archive-charcoal/40 uppercase tracking-widest border-l-2 border-archive-clay pl-6 py-2">
               Synchronized for <br /> Dhaka Node // 2025
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-archive-charcoal/10 border border-archive-charcoal/10 h-max">
            {/* Session Card 01 */}
            <div className="bg-white p-12 md:p-20 space-y-16 group hover:translate-y-[-10px] transition-all duration-700">
               <div className="flex justify-between items-start">
                  <div className="px-4 py-1 bg-archive-clay text-white text-[8px] font-black tracking-widest uppercase">DHAKA_IBF_25A</div>
                  <span className="text-[10px] font-mono text-archive-charcoal/40">TS_001</span>
               </div>
               
               <div className="space-y-8">
                  <h3 className="text-3xl md:text-5xl font-black text-archive-charcoal tracking-tighter leading-[0.9] uppercase group-hover:text-archive-clay transition-colors">
                    AI & Adaptability <br /> of Technology.
                  </h3>
                  <div className="flex flex-wrap gap-10">
                     <div className="flex items-center gap-3">
                        <Calendar size={12} className="text-archive-clay" />
                        <span className="text-[10px] font-black text-archive-charcoal/60 uppercase">26/06/2025</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Clock size={12} className="text-archive-clay" />
                        <span className="text-[10px] font-black text-archive-charcoal/60 uppercase">16:00 - 17:00</span>
                     </div>
                  </div>
               </div>

               <div className="space-y-8 pt-12 border-t border-archive-charcoal/5">
                 <span className="text-[9px] font-black tracking-[0.4em] text-archive-clay uppercase">Panel Manifest</span>
                 <div className="grid gap-6">
                    {[
                      { name: "Minhazul Hoque", role: "Director, BKMEA" },
                      { name: "Abrar Hossain Sayem", role: "President, BAYLA" },
                      { name: "Ahsan Mahmood", role: "CEO, Nordic Sourcing" }
                    ].map((s, i) => (
                      <div key={i} className="flex justify-between items-center group/item hover:pl-4 transition-all duration-300">
                        <p className="font-black text-archive-charcoal text-[13px] uppercase tracking-tighter">{s.name}</p>
                        <p className="text-[9px] font-mono text-archive-charcoal/30 uppercase">{s.role}</p>
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            {/* Session Card 02 */}
            <div className="bg-archive-charcoal p-12 md:p-20 space-y-16 group text-white hover:translate-y-[-10px] transition-all duration-700">
               <div className="flex justify-between items-start">
                  <div className="px-4 py-1 bg-white text-archive-charcoal text-[8px] font-black tracking-widest uppercase">DHAKA_IBF_25B</div>
                  <span className="text-[10px] font-mono text-white/40">TS_002</span>
               </div>
               
               <div className="space-y-8">
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[0.9] uppercase group-hover:text-archive-clay transition-colors">
                    Tariffs & Industry <br /> Outlook.
                  </h3>
                  <div className="flex flex-wrap gap-10">
                     <div className="flex items-center gap-3">
                        <Calendar size={12} className="text-archive-clay" />
                        <span className="text-[10px] font-black text-white/60 uppercase">27/06/2025</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Clock size={12} className="text-archive-clay" />
                        <span className="text-[10px] font-black text-white/60 uppercase">16:00 - 17:00</span>
                     </div>
                  </div>
               </div>

               <div className="space-y-8 pt-12 border-t border-white/5">
                 <span className="text-[9px] font-black tracking-[0.4em] text-archive-clay uppercase">Panel Manifest</span>
                 <div className="grid gap-6">
                    {[
                      { name: "Mohammed Sohel", role: "Director, BGMEA" },
                      { name: "AKM Saifur Rahman", role: "VP, BGBA" },
                      { name: "Masud Kabir", role: "MD, Motex Fashion" }
                    ].map((s, i) => (
                      <div key={i} className="flex justify-between items-center group/item hover:pl-4 transition-all duration-300">
                        <p className="font-black text-white text-[13px] uppercase tracking-tighter">{s.name}</p>
                        <p className="text-[9px] font-mono text-white/30 uppercase">{s.role}</p>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISUAL GLIMPSES (EXPERIMENTAL GRID) */}
      <section className="py-48 px-12">
        <div className="max-w-[1440px] mx-auto space-y-32">
           <div className="flex flex-col items-center gap-8 text-center">
              <span className="text-archive-clay text-[10px] font-black tracking-[0.8em] uppercase">03 // Archive</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-archive-charcoal uppercase italic">The Glimpses.</h2>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
             {[...Array(12)].map((_, i) => (
               <div key={i} className={`relative group aspect-[3/4] overflow-hidden bg-archive-charcoal/5 border border-archive-charcoal/10 ${i % 3 === 0 ? 'md:col-span-2 md:aspect-video' : ''}`}>
                  <div className="absolute inset-0 z-0 bg-archive-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
                     <span className="text-[8px] font-black text-white tracking-[0.5em] uppercase">Capture // 0{i+1}</span>
                     <span className="text-[10px] font-black text-white/40 uppercase">IBF Seminar 2025</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-100 transition-opacity duration-700">
                     <img src="https://bd.intexsouthasia.com/assets/img/output-onlinepngtools.png" className="w-12 filter invert grayscale" alt="IBF Logo" />
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 5. FOOTER CALLOUT */}
      <section className="px-12 pb-64">
        <div className="max-w-[1440px] mx-auto bg-archive-charcoal rounded-[48px] p-24 md:p-48 text-center space-y-16 relative overflow-hidden group">
           {/* Decorative Grid */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           
           <div className="relative z-10 space-y-8">
              <span className="text-archive-clay text-[12px] font-black tracking-[1em] uppercase block">Finalize Protocol</span>
              <h2 className="text-5xl md:text-[8rem] font-black tracking-tighter text-white leading-[0.85] uppercase italic">
                Secure Your <br /> Visibility.
              </h2>
           </div>

           <div className="relative z-10 flex flex-col md:flex-row justify-center gap-8">
              <button 
                onClick={() => window.location.hash = '#home'}
                className="px-16 py-8 bg-white text-archive-charcoal font-black text-[12px] tracking-[0.5em] uppercase hover:bg-archive-clay hover:text-white transition-all duration-500 shadow-2xl"
              >
                Return to Dashboard
              </button>
              <button className="px-16 py-8 border border-white/20 text-white font-black text-[12px] tracking-[0.5em] uppercase hover:bg-white hover:text-archive-charcoal transition-all duration-500">
                Partner Protocols
              </button>
           </div>
        </div>
      </section>

      <style>{`
        .vertical-text { writing-mode: vertical-rl; transform: rotate(180deg); }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 30s linear infinite; }
      `}</style>
    </div>
  );
};

export default IBFDetailsPage;

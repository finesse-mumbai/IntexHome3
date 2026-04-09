
import React from 'react';
import { Play, CheckCircle } from 'lucide-react';

const MemberSection: React.FC = () => {
  return (
    <section className="bg-archive-cream py-32 border-b border-archive-charcoal relative">
      <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Large Frame Placeholder */}
        <div className="relative aspect-video group cursor-pointer border-4 border-archive-clay/10 bg-archive-cream p-6">
          <div className="w-full h-full border border-archive-charcoal overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-archive-cream border border-archive-charcoal flex items-center justify-center group-hover:bg-archive-clay group-hover:text-archive-cream group-hover:border-archive-clay transition-all">
                <Play size={32} />
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 aspect-[4/3] border-[12px] border-archive-clay/20 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Membership</span>
            <h2 className="text-3xl font-black tracking-tighter leading-none uppercase text-archive-charcoal">
              Become a <br /> <span>Member of Intex</span>
            </h2>
          </div>

          <ul className="space-y-6">
            {[
              'Unlimited General Admission to Archives',
              'Free Tickets to Special Exhibitions',
              'Access to Member Entrance'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-6 text-[10px] font-black tracking-[0.2em] uppercase text-archive-bronze">
                <CheckCircle size={18} strokeWidth={3} className="text-archive-clay" />
                {item}
              </li>
            ))}
          </ul>

          <button className="px-12 py-6 bg-archive-charcoal text-archive-cream font-black text-[10px] tracking-[0.4em] uppercase hover:bg-archive-clay hover:text-archive-cream border border-archive-charcoal hover:border-archive-clay transition-all">
            Become a Member
          </button>
        </div>
      </div>

      {/* Measuring Tape Detail */}
      <div className="absolute bottom-0 left-0 right-0 h-4 measuring-tape opacity-20"></div>
    </section>
  );
};

export default MemberSection;


import React from 'react';
import { motion } from 'framer-motion';
import { MailOpen, Zap, MessageSquare, Share2, Handshake, Newspaper, Headphones, Tv, ArrowRight } from 'lucide-react';

const ACTIVITIES = [
  {
    icon: MailOpen,
    title: "Direct Invitations",
    desc: "Personalized physical invitations sent to high-profile decision makers and procurement heads globally, ensuring a verified VIP presence.",
    id: "ACT_DIR_01"
  },
  {
    icon: Zap,
    title: "Electronic Invitations",
    desc: "Targeted HTML email campaigns reaching over 100,000+ industry professionals within our proprietary global database.",
    id: "ACT_ELE_02"
  },
  {
    icon: MessageSquare,
    title: "SMS & WhatsApp",
    desc: "Instant update protocols and direct mobile communication channels to facilitate high engagement with registered trade attendees.",
    id: "ACT_MOB_03"
  },
  {
    icon: Share2,
    title: "Digital & Social Media",
    desc: "Aggressive multi-platform marketing across LinkedIn, Instagram, and Facebook targeting specific textile manufacturing clusters.",
    id: "ACT_DIG_04"
  },
  {
    icon: Handshake,
    title: "Industry Associations Tie-ups",
    desc: "Strategic alliances with 50+ international trade councils, chambers of commerce, and textile federations worldwide.",
    id: "ACT_ASN_05"
  },
  {
    icon: Newspaper,
    title: "Press & Media Engagements",
    desc: "Curated press releases, media conferences, and dedicated interviews to amplify show visibility across global textile news outlets.",
    id: "ACT_PRS_06"
  },
  {
    icon: Headphones,
    title: "Tele Marketing",
    desc: "Dedicated multilingual helpdesk operations for direct verification, registration assistance, and attendance confirmation of trade buyers.",
    id: "ACT_TEL_07"
  },
  {
    icon: Tv,
    title: "Trade Media",
    desc: "Extensive visibility through advertisements and technical editorials in leading textile and apparel trade journals and digital portals.",
    id: "ACT_TRD_08"
  }
];

const PromotionActivitiesPage: React.FC = () => {
  return (
    <div className="bg-archive-cream min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Outreach // Protocols</span>
            </div>
            <h1 className="text-2xl md:text-[4vw] font-serif font-black tracking-tighter uppercase leading-[0.85] text-archive-charcoal">
              PROMOTION <br />
              <span>ACTIVITIES</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-12 space-y-5">
            <p className="text-xl md:text-3xl font-serif font-black uppercase text-archive-charcoal leading-tight">
              A multi-channel <span className="text-archive-clay">marketing matrix</span> designed for maximum trade impact.
            </p>
          </div>

        </div>
      </section>

      {/* Activities Grid */}
      <section className="border-t border-archive-charcoal/10 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-archive-charcoal/10">
          {ACTIVITIES.map((activity, idx) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`p-16 flex flex-col justify-between h-[500px] group transition-all duration-700 border-b border-r border-archive-charcoal/10 ${[0, 2, 5, 7].includes(idx) ? 'bg-archive-clay text-white hover:bg-archive-charcoal' : 'bg-white text-archive-charcoal hover:bg-archive-charcoal hover:text-white'}`}
            >
              <div className="space-y-12">
                <div className="flex justify-between items-start">
                  <div className={`w-16 h-16 border flex items-center justify-center transition-all duration-500 ${[0, 2, 5, 7].includes(idx) ? 'bg-white text-archive-clay border-white' : 'border-archive-charcoal/10 text-archive-clay group-hover:bg-archive-clay group-hover:text-white group-hover:border-archive-clay'}`}>
                    <activity.icon size={28} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className={`text-xl font-serif font-black uppercase tracking-tighter leading-none transition-colors ${[0, 2, 5, 7].includes(idx) ? 'text-white group-hover:text-white' : 'group-hover:text-archive-clay'}`}>{activity.title}</h3>
                  <div className={`transition-all duration-700 ${[0, 2, 5, 7].includes(idx) ? 'w-full bg-white/40 h-px' : 'w-10 h-px bg-archive-clay/40 group-hover:w-full'}`}></div>
                </div>
              </div>

              <p className={`text-[11px] font-bold uppercase tracking-widest leading-relaxed transition-colors ${[0, 2, 5, 7].includes(idx) ? 'text-white/80 group-hover:text-white' : 'text-archive-charcoal/40 group-hover:text-white/70'}`}>
                {activity.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-40 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col items-center text-center space-y-10">
        <div className="w-20 h-px bg-archive-clay"></div>
        <h2 className="text-base md:text-2xl font-serif font-black uppercase tracking-tighter text-archive-charcoal">
          DRIVE <span>ENGAGEMENT.</span> <br />
          <span >SECURE VOLUME.</span>
        </h2>
        <button className="px-12 py-6 bg-archive-clay text-white font-black text-[10px] tracking-[0.4em] uppercase hover:bg-archive-charcoal transition-all flex items-center gap-4">
          Partner with Intex South Asia <ArrowRight size={14} />
        </button>
      </section>

      {/* Decorative Technical Detail */}
      <div className="h-4 bg-archive-charcoal relative overflow-hidden opacity-10">
        <div className="absolute inset-0 measuring-tape"></div>
      </div>
    </div>
  );
};

export default PromotionActivitiesPage;

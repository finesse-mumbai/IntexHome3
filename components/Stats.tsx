
import React from 'react';
import { motion } from 'framer-motion';
import { Archive, Users, Award, Grid } from 'lucide-react';

const statsData = [
  { icon: Archive, value: '38', label: 'EXHIBITIONS', desc: 'Has Been Held' },
  { icon: Users, value: '14k', label: 'VISITORS', desc: 'In Last Year' },
  { icon: Award, value: '16', label: 'AWARDS', desc: 'Have Received' },
  { icon: Grid, value: '2k', label: 'COLLECTIONS', desc: 'Of Art & Designs' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-archive-cream border-b border-archive-charcoal/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-archive-charcoal/10 border-x border-archive-charcoal/10 bg-white">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-16 text-center group hover:bg-archive-charcoal hover:text-archive-cream transition-all duration-500 flex flex-col items-center"
            >
              <stat.icon size={32} strokeWidth={1} className="mb-8 text-archive-clay opacity-60 group-hover:opacity-100" />
              <div className="flex items-center gap-4">
                <h3 className="text-7xl font-black leading-none text-archive-charcoal group-hover:text-archive-cream">{stat.value}</h3>
                <div className="text-left">
                  <p className="text-[10px] font-black tracking-[0.5em] uppercase leading-tight text-archive-charcoal group-hover:text-archive-clay">{stat.label}</p>
                  <p className="text-[8px] font-bold tracking-widest opacity-60 uppercase whitespace-nowrap text-archive-charcoal group-hover:text-archive-cream">{stat.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

import React from 'react';
import { motion } from 'framer-motion';
import { Archive, Users, Globe, ShoppingBag, MapPin } from 'lucide-react';

const statsData = [
  { icon: Archive, value: '17', label: 'EDITIONS', desc: 'SUCCESSFULLY COMPLETED' },
  { icon: Users, value: '3,000+', label: 'EXHIBITORS', desc: 'GLOBAL MANUFACTURERS' },
  { icon: Globe, value: '20+', label: 'EXHIBITING COUNTRIES', desc: 'INTERNATIONAL PRESENCE' },
  { icon: ShoppingBag, value: '70,000+', label: 'BUYERS', desc: 'QUALIFIED TRADE VISITORS' },
  { icon: MapPin, value: '40+', label: 'BUYING COUNTRIES', desc: 'SOURCING WORLDWIDE' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-archive-cream border-b border-archive-charcoal/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-archive-charcoal/10 border-x border-archive-charcoal/10 bg-white">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-16 text-center group hover:bg-archive-charcoal hover:text-archive-cream transition-all duration-500 flex flex-col items-center"
            >
              <stat.icon size={32} strokeWidth={1} className="mb-6 text-archive-clay opacity-60 group-hover:opacity-100" />
              <h3 className="text-4xl md:text-5xl font-black leading-none text-archive-charcoal group-hover:text-archive-cream mb-4">{stat.value}</h3>
              <p className="text-[10px] font-black tracking-[0.5em] uppercase leading-tight text-archive-charcoal group-hover:text-archive-clay">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

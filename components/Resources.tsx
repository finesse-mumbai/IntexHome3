
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart3, History, HelpCircle, Download, ArrowUpRight } from 'lucide-react';
import { RESOURCES } from '../constants';

const iconMap: Record<string, any> = {
  FileText,
  BarChart3,
  History,
  HelpCircle,
};

const Resources: React.FC = () => {
  return (
    <section className="py-32 bg-white text-archive-charcoal border-t border-archive-charcoal/5 relative overflow-hidden" id="resources">
      {/* Large background decorative text */}
      <div className="absolute top-0 right-0 h-full flex items-center pointer-events-none select-none">
        <span className="text-[12vw] font-black text-archive-charcoal opacity-[0.02] rotate-90 leading-none uppercase tracking-tighter">RESOURCE</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">Asset Library</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] text-archive-charcoal">
              Resource <br /><span className="text-archive-clay">Inventory.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-6 max-w-xs text-right border-r border-black/5 pr-8 py-2">
            <p className="text-[10px] font-bold tracking-widest text-archive-charcoal/40 uppercase leading-relaxed">
              Proprietary datasets, technical specifications, and post-exhibition intelligence for the global textile matrix.
            </p>
            <div className="w-12 h-[1px] bg-archive-clay/40"></div>
          </div>
        </div>

        {/* Premium Modular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESOURCES.map((resource, index) => (
            <ResourceModule key={resource.id} resource={resource} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResourceModule: React.FC<{ resource: any; index: number }> = ({ resource, index }) => {
  const IconComponent = iconMap[resource.icon];
  const isOrange = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative min-h-[450px] p-12 flex flex-col justify-between rounded-3xl border border-archive-charcoal/10 overflow-hidden cursor-pointer transition-all duration-700 ${isOrange ? 'bg-archive-clay text-white' : 'bg-white text-archive-charcoal hover:bg-archive-cream'}`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t ${isOrange ? 'from-black/10' : 'from-archive-clay/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

      {/* Center Icon & Title */}
      <div className="relative z-10 space-y-10">
        <div className={`relative w-16 h-16 border ${isOrange ? 'border-white/20 bg-white/10' : 'border-archive-charcoal/10 bg-archive-cream'} flex items-center justify-center text-archive-clay transition-all duration-500 group-hover:border-archive-clay group-hover:bg-archive-clay group-hover:text-white`}>
          {IconComponent && <IconComponent size={24} strokeWidth={1.5} className={isOrange ? 'text-white' : 'text-archive-clay'} />}

          {/* Decorative Brackets */}
          <div className={`absolute -top-1 -left-1 w-2 h-2 border-t border-l ${isOrange ? 'border-white' : 'border-archive-clay'} group-hover:opacity-100 transition-opacity`}></div>
          <div className={`absolute -bottom-1 -right-1 w-2 h-2 border-b border-r ${isOrange ? 'border-white' : 'border-archive-clay'} group-hover:opacity-100 transition-opacity`}></div>
        </div>

        <div className="space-y-4">
          <h3 className={`text-xl font-black uppercase tracking-tighter leading-[0.8] transition-colors duration-500 ${isOrange ? 'text-white group-hover:text-white/80' : 'text-archive-charcoal group-hover:text-archive-clay'}`}>
            {resource.title}
          </h3>
          <p className={`text-[10px] font-bold tracking-widest leading-relaxed uppercase transition-colors duration-500 ${isOrange ? 'text-white/80 group-hover:text-white' : 'text-archive-charcoal/60 group-hover:text-archive-charcoal'}`}>
            {resource.description}
          </p>
        </div>
      </div>

      <div className="relative z-10 pt-8 mt-12">
        <div className={`flex w-full items-center justify-center gap-4 py-3 px-8 rounded-full transition-all duration-500 ${isOrange ? 'bg-white/10 text-white hover:bg-white hover:text-archive-clay' : 'bg-gray-100 text-archive-charcoal hover:bg-archive-clay hover:text-white'}`}>
          <span className="text-[9px] font-black tracking-[0.2em] uppercase">VIEW DETAILS</span>
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </div>
      </div>

      {/* Subtle Border Glow on Hover */}
      <div className={`absolute inset-0 border-[3px] ${isOrange ? 'border-white/40' : 'border-archive-clay'} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
    </motion.div>
  );
};

export default Resources;

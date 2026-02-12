
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
    <section className="py-40 bg-archive-charcoal text-archive-cream border-t border-archive-clay/20 relative overflow-hidden" id="resources">
      {/* Large background decorative text */}
      <div className="absolute top-0 right-0 h-full flex items-center pointer-events-none select-none">
        <span className="text-[12vw] font-black text-white opacity-[0.01] rotate-90 leading-none uppercase tracking-tighter">RESOURCE</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-archive-clay"></div>
              <span className="text-[10px] font-black tracking-[0.8em] text-archive-clay uppercase">Digital Inventory</span>
            </div>
            <h2 className="text-sm md:text-4xl font-serif font-black tracking-tighter uppercase  leading-[0.7] text-archive-cream">
              ASSET <br /><span className="text-outline" style={{ WebkitTextStroke: '1px rgba(243, 235, 232, 0.2)' }}>LIBRARY.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-4 max-w-xs text-right">
            <p className="text-[10px] font-bold tracking-widest text-archive-cream/40 uppercase leading-relaxed">
              Proprietary datasets, technical specifications, and post-exhibition intelligence for the global textile matrix.
            </p>
            <div className="w-12 h-[1px] bg-archive-clay/40"></div>
          </div>
        </div>

        {/* Premium Modular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
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
  const serial = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative min-h-[450px] border-r last:border-r-0 border-white/10 p-12 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-700 bg-white/5"
    >
      {/* Background Gradient - Now Initial instead of only on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-archive-clay/15 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>




      {/* Center Icon & Title */}
      <div className="relative z-10 space-y-10">
        <div className="relative w-16 h-16 border border-white/20 flex items-center justify-center text-archive-clay transition-all duration-500 group-hover:border-archive-clay group-hover:bg-archive-clay group-hover:text-archive-charcoal bg-archive-charcoal/50">
          {IconComponent && <IconComponent size={24} strokeWidth={1.5} />}

          {/* Decorative Brackets */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-archive-clay group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-archive-clay group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-serif font-black uppercase tracking-tighter leading-[0.8] text-archive-cream group-hover:text-archive-clay transition-colors duration-500">
            {resource.title}
          </h3>
          <p className="text-[10px] font-bold tracking-widest leading-relaxed text-archive-cream/60 group-hover:text-archive-cream uppercase transition-colors duration-500">
            {resource.description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="relative z-10 pt-8 flex items-center justify-between border-t border-white/20 mt-12 overflow-hidden">
        <div className="flex items-center gap-4">
          <Download size={14} className="text-archive-clay opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="text-[9px] font-black tracking-[0.3em] uppercase text-archive-cream/60 group-hover:text-archive-cream transition-colors">GET_DOCUMENT</span>
        </div>
        <ArrowUpRight size={18} className="text-archive-clay translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" />
      </div>

      {/* Hover Spotlight Element */}
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-archive-clay/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

      {/* Subtle Border Glow on Hover */}
      <div className="absolute inset-0 border border-archive-clay/0 group-hover:border-archive-clay/30 transition-colors duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

export default Resources;

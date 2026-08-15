import React from 'react';
import { Gem, RotateCcw, Truck, ShieldCheck } from 'lucide-react';
import { TRUST_FEATURES } from '../data/store';

export const TrustStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'diamond':
        return <Gem className="w-5 h-5 text-[#DFFF00]" />;
      case 'return':
        return <RotateCcw className="w-5 h-5 text-[#DFFF00]" />;
      case 'truck':
        return <Truck className="w-5 h-5 text-[#DFFF00]" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-[#DFFF00]" />;
      default:
        return <Gem className="w-5 h-5 text-[#DFFF00]" />;
    }
  };

  return (
    <section className="w-full bg-[#050505] py-6 sm:py-8 border-b border-[#18181B]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Bordered Container with 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-[#222226] bg-[#0A0A0C] divide-y sm:divide-y-0 sm:divide-x divide-[#222226] overflow-hidden">
          {TRUST_FEATURES.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 sm:p-5 lg:p-6 hover:bg-[#111115] transition-colors"
            >
              {/* Boxed Icon */}
              <div className="w-12 h-12 rounded-xl border border-[#27272A] bg-[#050505] flex items-center justify-center shrink-0 shadow-inner">
                {getIcon(item.icon)}
              </div>

              {/* Text Info */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-[13px] font-black tracking-wide text-white uppercase font-sans">
                  {item.title}
                </span>
                <span className="text-[11px] font-medium text-[#8E8E93] mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Users, Star, ShieldCheck, Headphones, Plus } from 'lucide-react';
import { BenefitItem } from '../data/store';

interface BenefitCardProps {
  benefit: BenefitItem;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-5 h-5 text-black" strokeWidth={2.5} />;
      case 'star':
        return <Star className="w-5 h-5 text-black fill-current" strokeWidth={2.5} />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-black" strokeWidth={2.5} />;
      case 'headphones':
        return <Headphones className="w-5 h-5 text-black" strokeWidth={2.5} />;
      default:
        return <Star className="w-5 h-5 text-black" />;
    }
  };

  return (
    <div
      className="relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1.5 h-[220px] sm:h-[240px]"
      style={{ backgroundColor: benefit.accentBg }}
    >
      {/* Top Icon */}
      <div className="flex items-center justify-start">
        {getIcon(benefit.icon)}
      </div>

      {/* Center Metric & Title */}
      <div className="my-auto pt-2">
        <span className="text-3xl sm:text-4xl lg:text-[42px] font-black font-display text-black tracking-tight leading-none block">
          {benefit.metric}
        </span>
        <span className="text-xs sm:text-[13px] font-black tracking-wide text-black uppercase font-sans mt-1.5 block">
          {benefit.title}
        </span>
      </div>

      {/* Bottom Row: Squiggly Line + Black '+' Button */}
      <div className="flex items-center justify-between pt-2">
        {/* Squiggly SVG soundwave line */}
        <div className="w-20 sm:w-24 opacity-80">
          <svg viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M2 12 C 10 2, 18 22, 28 12 C 38 2, 46 22, 56 12 C 66 2, 74 22, 84 12 C 90 6, 94 16, 98 12"
              stroke="#050505"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Circular Black '+' Button */}
        <div className="w-6 h-6 rounded-full bg-[#050505] flex items-center justify-center text-white shrink-0 hover:scale-110 transition-transform">
          <Plus className="w-3.5 h-3.5 stroke-[3]" />
        </div>
      </div>
    </div>
  );
};

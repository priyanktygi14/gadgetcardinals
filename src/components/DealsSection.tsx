import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CRAZY_DEALS, DealItem, SITE_BRAND } from '../data/store';
import { DealCard } from './DealCard';

interface DealsSectionProps {
  onAddToCart: (deal: DealItem) => void;
  onExploreDeals: () => void;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  onAddToCart,
  onExploreDeals,
}) => {
  const [dealList, setDealList] = useState(CRAZY_DEALS);

  const handleNext = () => {
    setDealList((prev) => {
      const next = [...prev];
      const first = next.shift();
      if (first) next.push(first);
      return next;
    });
  };

  const handlePrev = () => {
    setDealList((prev) => {
      const next = [...prev];
      const last = next.pop();
      if (last) next.unshift(last);
      return next;
    });
  };

  return (
    <section id="shop" className="relative w-full overflow-hidden bg-[#050505] py-12 sm:py-16 lg:py-20 border-b border-[#18181B]">
      
      {/* Massive Background Watermark 'DEALS' */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] lg:text-[280px] font-black font-display tracking-tighter text-[#121215] select-none pointer-events-none z-0 opacity-40 uppercase">
        DEALS
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Editorial Headline & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight leading-[0.9] select-none mb-3">
              <span className="text-[#F5F5F5] block">
                {SITE_BRAND.dealsHeading.line1}
              </span>
              <span className="text-[#F5F5F5] block">
                {SITE_BRAND.dealsHeading.line2}
              </span>
              <span className="text-[#DFFF00] block tracking-normal text-3xl sm:text-4xl lg:text-5xl mt-1">
                {SITE_BRAND.dealsHeading.highlight}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-sm mb-6 sm:mb-8">
              {SITE_BRAND.dealsHeading.description}
            </p>

            <div>
              <button
                onClick={onExploreDeals}
                className="px-7 py-3.5 bg-[#DFFF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-sm flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(223,255,0,0.35)]"
              >
                <span>EXPLORE DEALS</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

          </div>

          {/* Right Column: 3 Deal Cards + Carousel Controls */}
          <div className="lg:col-span-8 relative">
            
            {/* Carousel Navigation Arrows */}
            <div className="flex items-center justify-between absolute -top-10 right-0 sm:right-2 z-20 gap-2 mb-4">
              <button
                onClick={handlePrev}
                aria-label="Previous Deals"
                className="w-9 h-9 rounded-full border border-[#27272A] bg-[#0E0E10] flex items-center justify-center text-white hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Deals"
                className="w-9 h-9 rounded-full border border-[#27272A] bg-[#0E0E10] flex items-center justify-center text-white hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Cards Grid / Carousel */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 items-center pt-2 sm:pt-0">
              {dealList.map((deal) => (
                <DealCard
                  key={deal.id}
                  deal={deal}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

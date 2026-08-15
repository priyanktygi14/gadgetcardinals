import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES, CategoryItem } from '../data/store';
import { CategoryCard } from './CategoryCard';

interface CategoryStripProps {
  onSelectCategory: (category: CategoryItem) => void;
}

export const CategoryStrip: React.FC<CategoryStripProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="w-full bg-[#050505] py-8 sm:py-12 border-b border-[#18181B]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* 6-Column Layout (1 Intro Card + 5 Categories) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          
          {/* Intro Card (Choose Your Vibe) */}
          <div className="flex flex-col justify-between p-5 rounded-2xl border border-[#222226] bg-[#0A0A0C] hover:border-[#33333A] transition-all h-[240px] sm:h-[260px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-black font-display text-white tracking-wide uppercase leading-tight">
                  CHOOSE YOUR<br />VIBE
                </h3>
                <ArrowUpRight className="w-4 h-4 text-[#71717A]" />
              </div>

              <div className="space-y-1 text-xs text-[#8E8E93] leading-relaxed">
                <p>Premium Quality.</p>
                <p>Insane Prices.</p>
                <p>Zero Compromise.</p>
              </div>
            </div>

            {/* Bottom Tag with Neon Yellow brackets */}
            <div className="pt-2">
              <span className="text-[11px] font-black tracking-widest text-[#DFFF00] font-mono uppercase">
                [ FIRST COPY ]
              </span>
            </div>
          </div>

          {/* 5 Product Category Cards */}
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelect={onSelectCategory}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

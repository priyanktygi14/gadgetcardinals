import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CategoryItem } from '../data/store';

interface CategoryCardProps {
  category: CategoryItem;
  onSelect: (category: CategoryItem) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(category)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl h-[240px] sm:h-[260px]"
      style={{ backgroundColor: category.accentBg }}
    >
      {/* Top Content: Title, Subtitle, and Circular Arrow Button */}
      <div className="p-4 flex items-start justify-between z-10">
        <div>
          <h3 
            className="text-lg sm:text-xl font-black font-display tracking-tight uppercase"
            style={{ color: category.textColor }}
          >
            {category.title}
          </h3>
          <p 
            className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase opacity-90 mt-0.5"
            style={{ color: category.textColor }}
          >
            {category.subtitle}
          </p>
        </div>

        {/* Black Circular Arrow Button */}
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#050505] flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all shadow-md">
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      </div>

      {/* Product Cutout Image (positioned cleanly at bottom) */}
      <div className="relative w-full h-[150px] sm:h-[165px] flex items-end justify-center overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105 select-none"
        />
      </div>
    </div>
  );
};

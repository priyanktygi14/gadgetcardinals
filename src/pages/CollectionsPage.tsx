import React from 'react';
import { CATEGORIES } from '../data/store';
import { ArrowRight, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CollectionsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#050505] min-h-screen py-10 sm:py-14">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-[#6D28FF]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#6D28FF] uppercase font-mono">
              CURATED FIRST COPY LINES
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight text-white leading-none">
            EXPLORE <span className="text-[#6D28FF]">COLLECTIONS</span>
          </h1>
          <p className="text-sm sm:text-base text-[#8E8E93] mt-3 max-w-xl">
            Explore dedicated product lines engineered with the same chassis materials, colors, and design standards as authentic Apple flagships.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/shop?category=${cat.title}`)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] min-h-[360px]"
              style={{ backgroundColor: cat.accentBg }}
            >
              {/* Header Info */}
              <div className="z-10">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-black tracking-widest uppercase font-mono px-3 py-1 rounded-full bg-black/20"
                    style={{ color: cat.textColor }}
                  >
                    {cat.itemCount} PRODUCTS
                  </span>
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>

                <h2
                  className="text-3xl sm:text-4xl font-black font-display tracking-tight uppercase mt-4"
                  style={{ color: cat.textColor }}
                >
                  {cat.title}
                </h2>
                <p
                  className="text-xs sm:text-sm font-bold tracking-wide uppercase opacity-90 mt-1"
                  style={{ color: cat.textColor }}
                >
                  {cat.subtitle}
                </p>
                <p
                  className="text-xs opacity-80 mt-3 max-w-xs line-clamp-2"
                  style={{ color: cat.textColor }}
                >
                  {cat.description}
                </p>
              </div>

              {/* Bottom Large Product Cutout */}
              <div className="relative w-full h-[180px] flex items-end justify-center mt-6">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-110 select-none drop-shadow-xl"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

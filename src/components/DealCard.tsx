import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { DealItem } from '../data/store';

interface DealCardProps {
  deal: DealItem;
  onAddToCart: (deal: DealItem) => void;
}

export const DealCard: React.FC<DealCardProps> = ({ deal, onAddToCart }) => {
  const isFeatured = deal.featured;

  // Format INR price helper
  const formatPrice = (amount: number) => {
    return '₹' + amount.toLocaleString('en-IN');
  };

  if (isFeatured) {
    // Featured Center Purple iPhone Card
    return (
      <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#6D28FF] p-5 sm:p-6 text-white shadow-[0_0_40px_rgba(109,40,255,0.45)] transition-all duration-300 hover:scale-[1.02] min-h-[420px] sm:min-h-[460px] z-20 group">
        
        {/* Top Header with Orange Discount Starburst Badge */}
        <div className="flex items-start justify-between relative z-10">
          <div className="bg-[#FF7A00] text-white font-black text-xs px-2.5 py-1 rounded-md shadow-md starburst-badge flex items-center justify-center w-12 h-12 -ml-1 -mt-1 select-none">
            {deal.discountBadge}
          </div>
          <span className="text-[10px] font-black tracking-widest uppercase font-mono px-3 py-1 rounded-full bg-black/30 text-white backdrop-blur-sm">
            FEATURED DEAL
          </span>
        </div>

        {/* Product Image Cutout Stage */}
        <div className="relative my-auto flex items-center justify-center py-4">
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full max-h-[220px] sm:max-h-[260px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.75)] select-none group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Bottom Details with Price and Yellow Cart Button */}
        <div className="flex items-end justify-between relative z-10 pt-3 border-t border-white/15">
          <div>
            <h3 className="text-lg sm:text-xl font-black font-display tracking-tight text-white uppercase">
              {deal.title}
            </h3>
            <p className="text-xs text-[#E9D5FF] font-medium mb-1.5">
              {deal.subtitle}
            </p>
            <div className="flex items-baseline gap-2.5">
              <span className="text-xl sm:text-2xl font-black font-mono text-white">
                {formatPrice(deal.price)}
              </span>
              <span className="text-xs font-semibold text-[#D8B4FE] line-through">
                {formatPrice(deal.originalPrice)}
              </span>
            </div>
          </div>

          {/* Yellow Circular Cart Button */}
          <button
            onClick={() => onAddToCart(deal)}
            aria-label={`Add ${deal.title} to cart`}
            className="w-12 h-12 rounded-full bg-[#DFFF00] text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(223,255,0,0.6)] shrink-0"
          >
            <ShoppingCart className="w-5 h-5 fill-current stroke-[2.5]" />
          </button>
        </div>

      </div>
    );
  }

  if (deal.id === 'apple-watch-series-8') {
    // Right Neon Yellow Apple Watch Card
    return (
      <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#DFFF00] p-5 text-black shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[380px] sm:min-h-[420px] group">
        
        {/* Top Header with Discount Badge on Right */}
        <div className="flex items-start justify-between relative z-10">
          <span className="text-[10px] font-black tracking-widest uppercase font-mono px-2.5 py-1 rounded-full bg-black/10 text-black">
            LIMITED STOCK
          </span>
          <div className="bg-[#050505] text-[#DFFF00] font-black text-[11px] px-2.5 py-1 rounded-md shadow starburst-badge flex items-center justify-center w-11 h-11 -mr-1 -mt-1 select-none">
            {deal.discountBadge}
          </div>
        </div>

        {/* Product Image Cutout */}
        <div className="relative my-auto flex items-center justify-center py-3">
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full max-h-[190px] sm:max-h-[220px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] select-none group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Bottom Details with Dark Add to Cart Button */}
        <div className="flex items-end justify-between relative z-10 pt-3 border-t border-black/10">
          <div>
            <h3 className="text-base sm:text-lg font-black font-display tracking-tight text-black uppercase">
              {deal.title}
            </h3>
            <p className="text-xs text-black/75 font-bold mb-1">
              {deal.subtitle}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-black font-mono text-black">
                {formatPrice(deal.price)}
              </span>
              <span className="text-xs font-semibold text-black/50 line-through">
                {formatPrice(deal.originalPrice)}
              </span>
            </div>
          </div>

          <button
            onClick={() => onAddToCart(deal)}
            aria-label={`Add ${deal.title} to cart`}
            className="w-10 h-10 rounded-full bg-[#050505] text-[#DFFF00] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md shrink-0"
          >
            <ShoppingCart className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    );
  }

  // Left AirPods Pro Card (Dark Card with Top Yellow Tag)
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0C0C0E] border border-[#222226] p-5 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-[#33333A] min-h-[380px] sm:min-h-[420px] group">
      
      {/* Top Header with Discount Badge on Left */}
      <div className="flex items-start justify-between relative z-10">
        <div className="bg-[#DFFF00] text-black font-black text-[11px] px-2 py-0.5 rounded-md shadow starburst-badge flex items-center justify-center w-11 h-11 -ml-1 -mt-1 select-none">
          {deal.discountBadge}
        </div>
        <span className="text-[10px] font-black tracking-widest uppercase font-mono px-2.5 py-1 rounded-full bg-[#18181D] text-[#A1A1AA] border border-[#27272A]">
          TOP AUDIO
        </span>
      </div>

      {/* Product Image Cutout */}
      <div className="relative my-auto flex items-center justify-center py-3">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full max-h-[190px] sm:max-h-[220px] object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.85)] select-none group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Bottom Details with Yellow Cart Button */}
      <div className="flex items-end justify-between relative z-10 pt-3 border-t border-[#1F1F24]">
        <div>
          <h3 className="text-base sm:text-lg font-black font-display tracking-tight text-white uppercase">
            {deal.title}
          </h3>
          <p className="text-xs text-[#A1A1AA] font-medium mb-1">
            {deal.subtitle}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-lg sm:text-xl font-black font-mono text-white">
              {formatPrice(deal.price)}
            </span>
            <span className="text-xs font-semibold text-[#71717A] line-through">
              {formatPrice(deal.originalPrice)}
            </span>
          </div>
        </div>

        <button
          onClick={() => onAddToCart(deal)}
          aria-label={`Add ${deal.title} to cart`}
          className="w-10 h-10 rounded-full bg-[#DFFF00] text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(223,255,0,0.4)] shrink-0"
        >
          <ShoppingCart className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

    </div>
  );
};

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
      <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#6D28FF] p-6 text-white shadow-[0_0_40px_rgba(109,40,255,0.4)] transition-all duration-300 hover:scale-[1.02] min-h-[400px] sm:min-h-[440px] z-20">
        
        {/* Top Header with Orange Discount Badge */}
        <div className="flex items-start justify-between relative z-10">
          <div className="bg-[#FF7A00] text-white font-black text-xs px-2.5 py-1 rounded-md shadow-md starburst-badge flex items-center justify-center w-12 h-12 -ml-2 -mt-2">
            {deal.discountBadge}
          </div>
        </div>

        {/* Product Image Cutout */}
        <div className="relative my-auto flex items-center justify-center py-3">
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full max-h-[220px] sm:max-h-[250px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] select-none hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Bottom Details with Price and Yellow Cart Button */}
        <div className="flex items-end justify-between relative z-10 pt-3">
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
            className="w-11 h-11 rounded-full bg-[#DFFF00] text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(223,255,0,0.6)]"
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
      <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#DFFF00] p-5 text-black shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[350px] sm:min-h-[390px]">
        
        {/* Top Header with Discount Badge on Right */}
        <div className="flex items-start justify-end relative z-10">
          <div className="bg-[#050505] text-[#DFFF00] font-black text-[11px] px-2.5 py-1 rounded-md shadow starburst-badge flex items-center justify-center w-11 h-11 -mr-1 -mt-1">
            {deal.discountBadge}
          </div>
        </div>

        {/* Product Image Cutout */}
        <div className="relative my-auto flex items-center justify-center py-3">
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full max-h-[190px] sm:max-h-[210px] object-contain drop-shadow-[0_12px_25px_rgba(0,0,0,0.35)] select-none hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Bottom Details */}
        <div className="relative z-10 pt-2">
          <h3 className="text-base sm:text-lg font-black font-display tracking-tight text-black uppercase">
            {deal.title}
          </h3>
          <p className="text-xs text-black/70 font-bold mb-1">
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

      </div>
    );
  }

  // Left AirPods Pro Card (Dark Card with Top Yellow Tag)
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0C0C0E] border border-[#222226] p-5 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[350px] sm:min-h-[390px]">
      
      {/* Top Header with Discount Badge on Left */}
      <div className="flex items-start justify-start relative z-10">
        <div className="bg-[#DFFF00] text-black font-black text-[11px] px-2 py-0.5 rounded-md shadow starburst-badge flex items-center justify-center w-11 h-11 -ml-1 -mt-1">
          {deal.discountBadge}
        </div>
      </div>

      {/* Product Image Cutout */}
      <div className="relative my-auto flex items-center justify-center py-3">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full max-h-[190px] sm:max-h-[210px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] select-none hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Bottom Details */}
      <div className="relative z-10 pt-2">
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

    </div>
  );
};

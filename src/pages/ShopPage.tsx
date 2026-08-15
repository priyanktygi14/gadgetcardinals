import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, Product } from '../data/store';
import { ShoppingCart, Star, Filter, ArrowUpDown } from 'lucide-react';

interface ShopPageProps {
  onAddToCart: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const selectedCategory = searchParams.get('category') || 'All';
  const [sortBy, setSortBy] = useState<'featured' | 'low-high' | 'high-low' | 'rating'>('featured');

  const categories = ['All', 'iPhone', 'MacBook', 'iPad', 'AirPods', 'Watch'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'low-high') return a.price - b.price;
      if (sortBy === 'high-low') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, sortBy]);

  const handleCategoryChange = (cat: string) => {
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const formatPrice = (val: number) => '₹' + val.toLocaleString('en-IN');

  return (
    <div className="w-full bg-[#050505] min-h-screen py-10 sm:py-14">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Editorial Page Header */}
        <div className="mb-10 lg:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#DFFF00] uppercase font-mono">
              [ OFFICIAL CATALOG ]
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight text-white leading-none">
            SHOP ALL <span className="text-[#DFFF00]">FIRST COPIES</span>
          </h1>
          <p className="text-sm sm:text-base text-[#8E8E93] mt-3 max-w-xl">
            Flawless 1:1 master grade replicas. Real aerospace-grade metals, Retina glass, and high-fidelity acoustics.
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-[#09090C] border border-[#1F1F24] mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-black tracking-wider uppercase transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#DFFF00] text-black shadow-[0_0_15px_rgba(223,255,0,0.3)]'
                      : 'bg-[#121216] text-[#A1A1AA] hover:text-white hover:bg-[#1C1C22]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-3 self-end lg:self-auto">
            <div className="flex items-center gap-2 text-xs font-bold text-[#71717A]">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>SORT:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              aria-label="Sort products by"
              className="bg-[#121216] border border-[#27272A] rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-[#DFFF00]"
            >
              <option value="featured">Featured First</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-[#222226] bg-[#09090C] p-16 text-center">
            <Filter className="w-12 h-12 text-[#3F3F46] mx-auto mb-4" />
            <h3 className="text-xl font-black font-display text-white uppercase">
              No First-Copy Products Found
            </h3>
            <p className="text-sm text-[#71717A] mt-2">
              Try adjusting your category or filter selection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0B0B0E] border border-[#1E1E24] p-5 hover:border-[#3F3F46] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                {/* Top Row: Discount Badge & Category Tag */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black tracking-widest text-[#71717A] uppercase font-mono">
                    {product.category}
                  </span>
                  <div
                    className="font-black text-[11px] px-2.5 py-0.5 rounded-md shadow starburst-badge flex items-center justify-center"
                    style={{ backgroundColor: product.badgeBg, color: product.badgeTextColor }}
                  >
                    {product.discountBadge}
                  </div>
                </div>

                {/* Product Image Stage */}
                <div
                  onClick={() => navigate(`/product/${product.slug}`)}
                  className="relative my-4 flex items-center justify-center h-[200px] cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] select-none group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info & CTA */}
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-1 text-xs">
                    <div className="flex items-center text-[#FBBF24]">
                      <Star className="w-3.5 h-3.5 fill-current stroke-none" />
                    </div>
                    <span className="text-xs font-bold text-white font-mono">{product.rating}</span>
                    <span className="text-[11px] text-[#71717A]">({product.reviewsCount})</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    onClick={() => navigate(`/product/${product.slug}`)}
                    className="text-base font-black font-display tracking-tight text-white uppercase truncate cursor-pointer hover:text-[#DFFF00] transition-colors"
                  >
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#8E8E93] truncate mb-3">
                    {product.subtitle}
                  </p>

                  {/* Price & Add to Cart Button */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#18181D]">
                    <div className="flex flex-col">
                      <span className="text-lg font-black font-mono text-white">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-[11px] font-semibold text-[#71717A] line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      aria-label={`Add ${product.title} to cart`}
                      className="px-3.5 py-2.5 rounded-xl bg-[#DFFF00] text-black font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(223,255,0,0.3)]"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>ADD</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

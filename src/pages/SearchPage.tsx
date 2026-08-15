import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, Product } from '../data/store';
import { Search, ShoppingCart, Star, X } from 'lucide-react';

interface SearchPageProps {
  onAddToCart: (product: Product) => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({ onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(query);

  const results = PRODUCTS.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchParams({ q: inputValue.trim() });
    } else {
      setSearchParams({});
    }
  };

  const handleQuickKeyword = (kw: string) => {
    setInputValue(kw);
    setSearchParams({ q: kw });
  };

  const formatPrice = (val: number) => '₹' + val.toLocaleString('en-IN');

  return (
    <div className="w-full bg-[#050505] min-h-screen py-10 sm:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#DFFF00] uppercase font-mono">
              [ INSTANT PRODUCT SEARCH ]
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
            SEARCH <span className="text-[#DFFF00]">FIRST COPIES</span>
          </h1>
        </div>

        {/* Large Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="relative max-w-3xl mb-8">
          <div className="relative flex items-center">
            <Search className="w-6 h-6 text-[#DFFF00] absolute left-5" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setSearchParams(e.target.value.trim() ? { q: e.target.value.trim() } : {});
              }}
              placeholder="Search iPhones, AirPods, Apple Watches, MacBooks, iPads..."
              autoFocus
              className="w-full pl-14 pr-12 py-4 sm:py-5 bg-[#09090C] border border-[#27272A] rounded-2xl text-white text-sm sm:text-base placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00] shadow-xl"
            />
            {inputValue && (
              <button
                type="button"
                onClick={() => {
                  setInputValue('');
                  setSearchParams({});
                }}
                className="absolute right-4 w-8 h-8 rounded-full bg-[#1A1A22] text-[#A1A1AA] hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>

        {/* Quick Suggestion Pills */}
        <div className="flex items-center gap-2 flex-wrap mb-10 text-xs">
          <span className="font-bold text-[#71717A] uppercase">TRENDING:</span>
          {['iPhone 14 Pro Max', 'AirPods Pro', 'Apple Watch Ultra', 'MacBook Pro', 'Deep Purple', 'Titanium'].map((kw) => (
            <button
              key={kw}
              onClick={() => handleQuickKeyword(kw)}
              className="px-3.5 py-1.5 rounded-full bg-[#121216] border border-[#222226] text-[#A1A1AA] hover:text-white hover:border-[#DFFF00] transition-colors"
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Result Stats */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#18181B] text-xs font-bold uppercase tracking-wider text-[#8E8E93]">
          <span>
            {query ? `SHOWING ${results.length} RESULTS FOR "${query}"` : `ALL PRODUCTS (${PRODUCTS.length})`}
          </span>
        </div>

        {/* Product Grid */}
        {results.length === 0 ? (
          <div className="rounded-3xl border border-[#222226] bg-[#09090C] p-16 text-center max-w-xl mx-auto">
            <Search className="w-12 h-12 text-[#3F3F46] mx-auto mb-4" />
            <h3 className="text-xl font-black font-display text-white uppercase">
              No Matching Products Found
            </h3>
            <p className="text-xs sm:text-sm text-[#71717A] mt-2 mb-6">
              We couldn't find any first-copy products matching "{query}". Try checking for spelling errors or search a broader term.
            </p>
            <button
              onClick={() => {
                setInputValue('');
                setSearchParams({});
              }}
              className="px-6 py-3 bg-[#DFFF00] text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:brightness-110"
            >
              VIEW ALL PRODUCTS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#09090C] border border-[#1E1E24] p-5 hover:border-[#3F3F46] transition-all duration-300 hover:-translate-y-1.5"
              >
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

                <div
                  onClick={() => navigate(`/product/${product.slug}`)}
                  className="relative my-4 flex items-center justify-center h-[180px] cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] select-none group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1 mb-1 text-xs text-[#FBBF24]">
                    <Star className="w-3.5 h-3.5 fill-current stroke-none" />
                    <span className="font-bold text-white font-mono">{product.rating}</span>
                  </div>

                  <h3
                    onClick={() => navigate(`/product/${product.slug}`)}
                    className="text-base font-black font-display tracking-tight text-white uppercase truncate cursor-pointer hover:text-[#DFFF00] transition-colors"
                  >
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#8E8E93] truncate mb-3">
                    {product.subtitle}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#18181D]">
                    <span className="text-lg font-black font-mono text-white">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="px-3.5 py-2 rounded-xl bg-[#DFFF00] text-black font-extrabold text-xs tracking-wider uppercase flex items-center gap-1 hover:brightness-110 active:scale-95 transition-all"
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

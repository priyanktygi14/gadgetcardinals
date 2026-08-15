import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, Product } from '../data/store';
import { ShoppingCart, Star, ShieldCheck, RotateCcw, Truck, Zap, Check, ArrowRight, Package } from 'lucide-react';

interface ProductDetailPageProps {
  onAddToCart: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onAddToCart }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions ? product.storageOptions[0] : '');
  const [pincode, setPincode] = useState('');
  const [pincodeChecked, setPincodeChecked] = useState(false);

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  const formatPrice = (val: number) => '₹' + val.toLocaleString('en-IN');

  const handleBuyNow = () => {
    onAddToCart(product);
    navigate('/cart');
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setPincodeChecked(true);
    }
  };

  return (
    <div className="w-full bg-[#050505] min-h-screen py-10 sm:py-14">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#71717A] mb-8 font-semibold">
          <a href="/" className="hover:text-white transition-colors">HOME</a>
          <span>/</span>
          <a href={`/shop?category=${product.category}`} className="hover:text-white transition-colors uppercase">{product.category}</a>
          <span>/</span>
          <span className="text-[#DFFF00] uppercase truncate">{product.title}</span>
        </div>

        {/* Main Product Showcase: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Gallery */}
          <div className="lg:col-span-6 sticky top-24 flex flex-col items-center">
            
            {/* Main Active Stage */}
            <div className="relative w-full h-[380px] sm:h-[480px] rounded-3xl bg-[#09090C] border border-[#222226] p-8 flex items-center justify-center overflow-hidden">
              {/* Starburst Discount Badge */}
              <div 
                className="absolute top-6 left-6 z-20 font-black text-xs px-3 py-1 rounded-md shadow starburst-badge flex items-center justify-center w-12 h-12"
                style={{ backgroundColor: product.badgeBg, color: product.badgeTextColor }}
              >
                {product.discountBadge}
              </div>

              {/* Verified 1:1 Badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-[#27272A] text-[11px] font-bold text-[#DFFF00] font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>1:1 FIRST COPY</span>
              </div>

              {/* Active Image */}
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] select-none hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-3 mt-4 overflow-x-auto w-full pb-2">
              {product.galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-2xl border p-2 bg-[#0C0C10] flex items-center justify-center shrink-0 transition-all ${
                    selectedImage === img
                      ? 'border-[#DFFF00] shadow-[0_0_12px_rgba(223,255,0,0.4)]'
                      : 'border-[#222226] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Details & Purchasing Controls */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            
            {/* Category & Ratings */}
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-black tracking-widest text-[#DFFF00] uppercase font-mono">
                [ {product.category} FIRST COPY ]
              </span>
              <div className="flex items-center gap-1.5 text-xs">
                <div className="flex items-center text-[#FBBF24]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                  ))}
                </div>
                <span className="font-bold text-white font-mono">{product.rating}</span>
                <span className="text-[#71717A]">({product.reviewsCount} verified reviews)</span>
              </div>
            </div>

            {/* Product Title & Subtitle */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight mb-2">
              {product.title}
            </h1>
            <p className="text-sm text-[#A1A1AA] font-medium mb-6">
              {product.subtitle}
            </p>

            {/* Price Box */}
            <div className="flex items-baseline gap-4 p-5 rounded-2xl bg-[#09090C] border border-[#1F1F24] mb-6">
              <span className="text-3xl sm:text-4xl font-black font-mono text-white">
                {formatPrice(product.price)}
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#71717A] line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="ml-auto text-xs font-black tracking-wider text-[#DFFF00] bg-[#DFFF00]/10 border border-[#DFFF00]/30 px-3 py-1 rounded-full uppercase">
                Save {product.discountBadge}
              </span>
            </div>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="text-xs font-black tracking-wider text-white uppercase block mb-2.5">
                  COLOR: <span className="text-[#DFFF00]">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                        selectedColor === c.name
                          ? 'border-[#DFFF00] bg-[#141418] text-white shadow-[0_0_10px_rgba(223,255,0,0.3)]'
                          : 'border-[#27272A] bg-[#09090C] text-[#8E8E93] hover:text-white'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/40"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selector */}
            {product.storageOptions && (
              <div className="mb-6">
                <label className="text-xs font-black tracking-wider text-white uppercase block mb-2.5">
                  STORAGE / SIZE: <span className="text-[#DFFF00]">{selectedStorage}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.storageOptions.map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedStorage(st)}
                      className={`px-4 py-2 rounded-xl border text-xs font-bold font-mono transition-all ${
                        selectedStorage === st
                          ? 'border-[#DFFF00] bg-[#141418] text-[#DFFF00] shadow-[0_0_10px_rgba(223,255,0,0.3)]'
                          : 'border-[#27272A] bg-[#09090C] text-[#8E8E93] hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dual CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => onAddToCart(product)}
                className="py-4 rounded-xl bg-[#14141A] border border-[#27272A] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:border-[#DFFF00] hover:text-[#DFFF00] active:scale-95 transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>ADD TO CART</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="py-4 rounded-xl bg-[#DFFF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(223,255,0,0.4)]"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>BUY NOW</span>
              </button>
            </div>

            {/* Delivery Pincode Checker */}
            <div className="p-4 rounded-2xl bg-[#09090C] border border-[#1F1F24] mb-8">
              <span className="text-xs font-black tracking-wider text-white uppercase block mb-2">
                CHECK DELIVERY ESTIMATE
              </span>
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit Pincode"
                  maxLength={6}
                  className="flex-1 px-4 py-2 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs font-mono placeholder:text-[#71717A] focus:outline-none focus:border-[#DFFF00]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1E1E24] text-white font-bold text-xs rounded-xl hover:bg-[#2A2A34] transition-colors"
                >
                  CHECK
                </button>
              </form>
              {pincodeChecked && (
                <div className="mt-2.5 flex items-center gap-2 text-xs text-[#DFFF00] font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Delivery to {pincode} by Tuesday (Free Express Shipping)</span>
                </div>
              )}
            </div>

            {/* Guarantee Badges */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#09090C] border border-[#1F1F24]">
              <div className="flex items-center gap-2.5 text-xs text-[#A1A1AA]">
                <Package className="w-4 h-4 text-[#DFFF00] shrink-0" />
                <span>Original Apple Box Included</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#A1A1AA]">
                <ShieldCheck className="w-4 h-4 text-[#DFFF00] shrink-0" />
                <span>1 Year Free Warranty</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#A1A1AA]">
                <RotateCcw className="w-4 h-4 text-[#DFFF00] shrink-0" />
                <span>7 Days Easy Return</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#A1A1AA]">
                <Truck className="w-4 h-4 text-[#DFFF00] shrink-0" />
                <span>Fast & Safe Doorstep Delivery</span>
              </div>
            </div>

          </div>

        </div>

        {/* Technical Specs & Features Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pt-10 border-t border-[#18181B]">
          
          {/* Features Column */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-black font-display uppercase tracking-wide text-white mb-4">
              PRODUCT HIGHLIGHTS
            </h3>
            <ul className="space-y-3">
              {product.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                  <div className="w-5 h-5 rounded-full bg-[#DFFF00] text-black flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications Table */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-black font-display uppercase tracking-wide text-white mb-4">
              MASTER SPECIFICATIONS
            </h3>
            <div className="rounded-2xl border border-[#222226] bg-[#09090C] divide-y divide-[#1F1F24] overflow-hidden">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between p-3.5 text-xs">
                  <span className="font-bold text-[#8E8E93]">{key}</span>
                  <span className="font-semibold text-white font-mono text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-10 border-t border-[#18181B]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white">
                SIMILAR <span className="text-[#DFFF00]">FIRST COPIES</span>
              </h3>
              <button
                onClick={() => navigate('/shop')}
                className="text-xs font-bold tracking-wider text-[#DFFF00] uppercase flex items-center gap-1 hover:underline"
              >
                <span>VIEW ALL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    navigate(`/product/${rel.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-5 rounded-3xl bg-[#09090C] border border-[#222226] hover:border-[#3F3F46] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="h-44 flex items-center justify-center mb-4">
                    <img src={rel.image} alt={rel.title} className="max-h-full object-contain drop-shadow-md" />
                  </div>
                  <div>
                    <h4 className="text-base font-black font-display text-white uppercase truncate">{rel.title}</h4>
                    <span className="text-sm font-black font-mono text-[#DFFF00] mt-1 block">
                      {formatPrice(rel.price)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

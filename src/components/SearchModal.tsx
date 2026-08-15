import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { CRAZY_DEALS, DealItem } from '../data/store';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (deal: DealItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = CRAZY_DEALS.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex justify-center items-start">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#0C0C10] border border-[#27272A] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl z-10">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#1F1F24] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#DFFF00]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search iPhone, AirPods, Apple Watch, MacBooks..."
            autoFocus
            className="w-full bg-transparent text-white text-sm sm:text-base placeholder:text-[#71717A] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="p-4 text-center text-xs text-[#71717A]">
              Try searching for <span className="text-[#DFFF00]">"iPhone"</span>, <span className="text-[#6D28FF]">"AirPods"</span>, or <span className="text-[#FF7A00]">"Apple Watch"</span>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#71717A]">
              No products found matching "{query}"
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-3 rounded-xl border border-[#1E1E24] bg-[#08080A] hover:bg-[#14141A] hover:border-[#3F3F46] flex items-center justify-between cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.cardImage}
                    alt={product.title}
                    className="w-12 h-12 object-contain bg-[#111116] p-1 rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-sans">{product.title}</h4>
                    <p className="text-xs text-[#8E8E93]">{product.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black font-mono text-[#DFFF00]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#71717A]" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

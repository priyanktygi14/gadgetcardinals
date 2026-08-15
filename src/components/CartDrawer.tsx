import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { DealItem } from '../data/store';

export interface CartItem extends DealItem {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const formatPrice = (val: number) => '₹' + val.toLocaleString('en-IN');

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#09090C] border-l border-[#222226] text-white flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#18181B] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#DFFF00]" />
              <h2 className="text-lg font-black font-display tracking-wide uppercase">
                YOUR CART ({items.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center text-white hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <ShoppingBag className="w-12 h-12 text-[#3F3F46] mb-3" />
                <p className="text-sm font-semibold text-[#71717A]">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2 bg-[#DFFF00] text-black font-bold text-xs rounded uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-[#222226] bg-[#0E0E12] flex gap-4 items-center"
                >
                  <img
                    src={item.cardImage}
                    alt={item.title}
                    className="w-16 h-16 object-contain bg-[#141418] p-1 rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white truncate font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8E8E93] truncate">{item.subtitle}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-black font-mono text-[#DFFF00]">
                        {formatPrice(item.price)}
                      </span>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#27272A] rounded-lg bg-[#050505]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-[#A1A1AA] hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#A1A1AA] hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[#71717A] hover:text-[#FF2FA8] transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#18181B] bg-[#0A0A0C] space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#8E8E93] font-medium">Subtotal</span>
                <span className="text-lg font-black font-mono text-white">
                  {formatPrice(totalAmount)}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#8E8E93]">
                <span>Shipping & Taxes</span>
                <span className="text-[#DFFF00] font-bold uppercase">Free Express</span>
              </div>
              
              <button
                onClick={onCheckout}
                className="w-full py-3.5 bg-[#DFFF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(223,255,0,0.35)]"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

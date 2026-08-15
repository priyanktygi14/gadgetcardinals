import React, { useState } from 'react';
import { CartItem } from '../components/CartDrawer';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CartPageProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Form states for checkout
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'upi',
  });

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = discountApplied ? Math.round(subtotal * 0.1) : 0;
  const grandTotal = subtotal - discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'CARTEL10' || coupon.trim().toUpperCase() === 'CRAZY10') {
      setDiscountApplied(true);
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (shippingInfo.name && shippingInfo.phone && shippingInfo.address && shippingInfo.pincode) {
      setOrderComplete(true);
      onClearCart();
    }
  };

  const formatPrice = (val: number) => '₹' + val.toLocaleString('en-IN');

  if (orderComplete) {
    return (
      <div className="w-full bg-[#050505] min-h-screen py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-[#DFFF00] text-black flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(223,255,0,0.5)]">
            <CheckCircle className="w-10 h-10 stroke-[3]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white mb-2">
            ORDER CONFIRMED!
          </h1>
          <p className="text-sm sm:text-base text-[#A1A1AA] mb-4 font-medium">
            Thank you {shippingInfo.name}! Your first-copy order <span className="text-[#DFFF00] font-mono">#GC-{Math.floor(100000 + Math.random() * 900000)}</span> has been placed.
          </p>
          <p className="text-xs text-[#71717A] max-w-md mx-auto mb-8">
            You will receive tracking updates and delivery dispatch notification on WhatsApp (+91 {shippingInfo.phone}).
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="px-8 py-4 bg-[#DFFF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(223,255,0,0.35)]"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#050505] min-h-screen py-10 sm:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingBag className="w-4 h-4 text-[#DFFF00]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#DFFF00] uppercase font-mono">
              [ YOUR SHOPPING CART ]
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white">
            SHOPPING <span className="text-[#DFFF00]">CART</span> ({items.reduce((a, b) => a + b.quantity, 0)})
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-[#222226] bg-[#09090C] p-16 text-center max-w-2xl mx-auto">
            <ShoppingBag className="w-16 h-16 text-[#3F3F46] mx-auto mb-4" />
            <h2 className="text-2xl font-black font-display text-white uppercase mb-2">
              YOUR CART IS CURRENTLY EMPTY
            </h2>
            <p className="text-xs sm:text-sm text-[#71717A] mb-8">
              Explore our master grade 1:1 first-copy Apple products catalog and add items.
            </p>
            <button
              onClick={() => navigate('/shop')}
              className="px-8 py-4 bg-[#DFFF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(223,255,0,0.35)]"
            >
              EXPLORE CATALOG
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Cart Items Table */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-3xl bg-[#09090C] border border-[#222226] flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={item.cardImage}
                      alt={item.title}
                      className="w-20 h-20 object-contain bg-[#111116] p-2 rounded-2xl shrink-0"
                    />
                    <div>
                      <h3 className="text-base font-black font-display text-white uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#8E8E93]">{item.subtitle}</p>
                      <span className="text-sm font-black font-mono text-[#DFFF00] mt-1 block">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#18181B]">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[#27272A] rounded-xl bg-[#050505] p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center text-[#A1A1AA] hover:text-white"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold font-mono text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#A1A1AA] hover:text-white"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Total for Item */}
                    <span className="text-base font-black font-mono text-white min-w-[90px] text-right">
                      {formatPrice(item.price * item.quantity)}
                    </span>

                    {/* Delete */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#71717A] hover:text-[#FF2FA8] transition-colors p-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Coupon Code Strip */}
              <div className="p-6 rounded-3xl bg-[#09090C] border border-[#222226] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-black tracking-wider text-white uppercase block">
                    HAVE A DISCOUNT COUPON?
                  </span>
                  <span className="text-[11px] text-[#71717A]">
                    Use coupon code <span className="text-[#DFFF00] font-mono font-bold">CARTEL10</span> for 10% off.
                  </span>
                </div>
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter Coupon"
                    className="px-4 py-2.5 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs font-mono uppercase focus:outline-none focus:border-[#DFFF00]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#1E1E24] text-white font-bold text-xs rounded-xl hover:bg-[#DFFF00] hover:text-black transition-colors"
                  >
                    APPLY
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Order Summary & Checkout Form */}
            <div className="lg:col-span-4">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#09090C] border border-[#222226] space-y-6">
                <h3 className="text-xl font-black font-display text-white uppercase pb-4 border-b border-[#18181B]">
                  ORDER SUMMARY
                </h3>

                <div className="space-y-3 text-xs text-[#A1A1AA]">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="text-white font-mono font-bold">{formatPrice(subtotal)}</span>
                  </div>

                  {discountApplied && (
                    <div className="flex justify-between text-[#DFFF00]">
                      <span>Cartel 10% Discount</span>
                      <span className="font-mono font-bold">-{formatPrice(discountAmount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Express Doorstep Delivery</span>
                    <span className="text-[#DFFF00] font-bold uppercase">FREE</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Warranty & Inspection</span>
                    <span className="text-[#DFFF00] font-bold uppercase">INCLUDED</span>
                  </div>

                  <div className="flex justify-between text-base font-black text-white pt-4 border-t border-[#18181B]">
                    <span>Total Amount</span>
                    <span className="text-xl font-mono text-[#DFFF00]">{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                {/* Checkout Trigger / Form */}
                {!isCheckingOut ? (
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full py-4 bg-[#DFFF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(223,255,0,0.35)]"
                  >
                    <span>CHECKOUT NOW</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>
                ) : (
                  <form onSubmit={handlePlaceOrder} className="space-y-4 pt-4 border-t border-[#18181B] animate-fade-in">
                    <h4 className="text-xs font-black tracking-wider text-white uppercase">
                      DELIVERY ADDRESS
                    </h4>
                    
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={shippingInfo.name}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00]"
                    />

                    <input
                      type="tel"
                      required
                      placeholder="10-digit Phone Number *"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00]"
                    />

                    <textarea
                      required
                      rows={2}
                      placeholder="Street Address / Flat / Landmark *"
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00]"
                    />

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        placeholder="City *"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00]"
                      />
                      <input
                        type="text"
                        required
                        maxLength={6}
                        placeholder="Pincode *"
                        value={shippingInfo.pincode}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#121216] border border-[#27272A] rounded-xl text-white text-xs placeholder:text-[#52525B] focus:outline-none focus:border-[#DFFF00]"
                      />
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="text-[11px] font-black text-[#8E8E93] uppercase block">
                        PAYMENT METHOD
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setShippingInfo({ ...shippingInfo, paymentMethod: 'upi' })}
                          className={`p-2 rounded-xl border text-xs font-bold text-center ${
                            shippingInfo.paymentMethod === 'upi'
                              ? 'border-[#DFFF00] bg-[#141418] text-[#DFFF00]'
                              : 'border-[#27272A] text-[#71717A]'
                          }`}
                        >
                          UPI / GPay / QR
                        </button>
                        <button
                          type="button"
                          onClick={() => setShippingInfo({ ...shippingInfo, paymentMethod: 'cod' })}
                          className={`p-2 rounded-xl border text-xs font-bold text-center ${
                            shippingInfo.paymentMethod === 'cod'
                              ? 'border-[#DFFF00] bg-[#141418] text-[#DFFF00]'
                              : 'border-[#27272A] text-[#71717A]'
                          }`}
                        >
                          Cash on Delivery
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#DFFF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(223,255,0,0.35)] mt-4"
                    >
                      <span>CONFIRM ORDER ({formatPrice(grandTotal)})</span>
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  </form>
                )}

                {/* Trust Note */}
                <div className="flex items-center gap-2 text-[11px] text-[#71717A] pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFFF00] shrink-0" />
                  <span>256-Bit Encrypted Secure Payment & Fast Dispatch</span>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

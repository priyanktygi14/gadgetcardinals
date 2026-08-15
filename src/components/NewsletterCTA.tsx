import React, { useState } from 'react';
import { ArrowRight, ArrowDownRight, CheckCircle2 } from 'lucide-react';
import { SITE_BRAND } from '../data/store';

export const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#050505] py-8 sm:py-12 border-b border-[#18181B]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Neon Yellow Card Container */}
        <div className="relative rounded-3xl bg-[#DFFF00] p-6 sm:p-8 lg:p-10 overflow-hidden shadow-[0_0_50px_rgba(223,255,0,0.25)]">
          
          {/* Top-Right Hazard Stripes Accent */}
          <div className="absolute top-0 right-0 w-32 sm:w-48 h-5 sm:h-6 bg-hazard-stripes" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Bold Display Headline */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black font-display uppercase tracking-tight leading-[0.88] text-black select-none">
                <span>{SITE_BRAND.newsletter.title1}</span>
                <br />
                <span>{SITE_BRAND.newsletter.title2}</span>
              </h2>
            </div>

            {/* Center: Description Text */}
            <div className="lg:col-span-3">
              <p className="text-xs sm:text-sm font-bold text-black/80 leading-snug">
                {SITE_BRAND.newsletter.description}
              </p>
            </div>

            {/* Right: Email Input & Black Subscribe Button + Pink Arrow Badge */}
            <div className="lg:col-span-5 flex items-center gap-3 sm:gap-4">
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-[#E5FF26] border border-black/30 rounded-lg text-black placeholder:text-black/50 text-xs sm:text-sm font-semibold focus:outline-none focus:border-black transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#050505] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 hover:bg-black/90 active:scale-95 transition-all shrink-0"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>

              {/* Hot Pink Angled Arrow Accent Badge */}
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[#FF2FA8] items-center justify-center text-black shrink-0 shadow-md">
                <ArrowDownRight className="w-6 h-6 stroke-[3]" />
              </div>

            </div>

          </div>

          {/* Success Feedback message */}
          {subscribed && (
            <div className="mt-4 flex items-center gap-2 text-black font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-black" />
              <span>Welcome to the Cartel! Check your inbox for your 10% coupon code.</span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

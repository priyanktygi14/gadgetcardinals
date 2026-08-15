import React from 'react';
import { Zap, Award, Gem, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#050505] min-h-screen py-10 sm:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Editorial Hero */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#DFFF00] uppercase font-mono">
              [ THE CARTEL STORY ]
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight text-white leading-[0.9]">
            REDEFINING <span className="text-[#DFFF00]">PREMIUM TECH.</span><br />
            ZERO COMPROMISE.
          </h1>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed mt-6 max-w-2xl">
            We founded <span className="text-white font-bold">The Gadget Cardinals</span> on a simple conviction: you shouldn’t have to pay astronomical markups to enjoy the pinnacle of Apple design, titanium weight, and audio brilliance.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="p-8 rounded-3xl bg-[#09090C] border border-[#222226] flex flex-col justify-between hover:border-[#DFFF00] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#DFFF00] flex items-center justify-center text-black mb-6 shadow-[0_0_15px_rgba(223,255,0,0.4)]">
              <Gem className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-xl font-black font-display uppercase text-white tracking-wide mb-2">
                1:1 Precision Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                Every chassis matches authentic Apple prototypes down to the gram. We use identical aerospace titanium, surgical stainless steel, and ceramic glass coatings.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#09090C] border border-[#222226] flex flex-col justify-between hover:border-[#6D28FF] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#6D28FF] flex items-center justify-center text-white mb-6 shadow-[0_0_15px_rgba(109,40,255,0.5)]">
              <Zap className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-xl font-black font-display uppercase text-white tracking-wide mb-2">
                Fluid OS & Display Power
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                Enjoy 120Hz ProMotion screen fluidity, seamless dynamic island interaction, True Tone color calibration, and instant MagSafe charging.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#09090C] border border-[#222226] flex flex-col justify-between hover:border-[#FF2FA8] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#FF2FA8] flex items-center justify-center text-black mb-6 shadow-[0_0_15px_rgba(255,47,168,0.4)]">
              <Award className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-xl font-black font-display uppercase text-white tracking-wide mb-2">
                1-Year Full Warranty
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                Confidence backed by real support. If anything hardware-related fails within 365 days, we replace your device with door-to-door courier service.
              </p>
            </div>
          </div>

        </div>

        {/* Massive Stats Banner */}
        <div className="rounded-3xl bg-[#0E0E14] border border-[#222226] p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-4xl sm:text-5xl font-black font-display text-[#DFFF00] font-mono">10,000+</span>
              <p className="text-xs font-bold text-[#8E8E93] uppercase tracking-wider mt-2">Delivered Orders</p>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-black font-display text-[#6D28FF] font-mono">98.4%</span>
              <p className="text-xs font-bold text-[#8E8E93] uppercase tracking-wider mt-2">Positive Reviews</p>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-black font-display text-[#20D9E8] font-mono">24/7</span>
              <p className="text-xs font-bold text-[#8E8E93] uppercase tracking-wider mt-2">WhatsApp Support</p>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-black font-display text-[#FF2FA8] font-mono">1 Year</span>
              <p className="text-xs font-bold text-[#8E8E93] uppercase tracking-wider mt-2">Doorstep Warranty</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#DFFF00] text-black flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_50px_rgba(223,255,0,0.25)]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight">
              READY FOR THE CRAZY EXPERIENCE?
            </h2>
            <p className="text-sm font-bold text-black/80 mt-1">
              Explore the latest first-copy iPhones, AirPods, and Apple Watches today.
            </p>
          </div>
          <button
            onClick={() => navigate('/shop')}
            className="px-8 py-4 bg-[#050505] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl flex items-center gap-2 hover:bg-black/90 active:scale-95 transition-all shrink-0"
          >
            <span>EXPLORE SHOP</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

      </div>
    </div>
  );
};

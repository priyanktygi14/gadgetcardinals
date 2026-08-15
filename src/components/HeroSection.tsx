import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SITE_BRAND } from '../data/store';

interface HeroSectionProps {
  onShopNowClick: () => void;
  onViewCollectionClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopNowClick,
  onViewCollectionClick,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 border-b border-[#18181B]">
      
      {/* Decorative Left Side Vertical Stripe Bar */}
      <div className="hidden xl:block absolute left-4 top-12 bottom-12 w-2.5 bg-hazard-stripes-purple opacity-70 rounded-full" />

      {/* Decorative Background Ambient Glows */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#DFFF00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-32 right-10 w-80 h-80 bg-[#6D28FF]/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center z-20">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#A1A1AA] uppercase">
                {SITE_BRAND.eyebrow}
              </span>
            </div>

            {/* Editorial Multi-color Headline */}
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[7.6rem] font-black uppercase tracking-tight leading-[0.88] select-none font-display mb-4 sm:mb-6">
              <span className="text-[#F5F5F5] flex items-center gap-3">
                {SITE_BRAND.heroHeading.line1}
                <svg className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 inline-block fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.66-7.8-11.87-14.28-5.84-9.02-10.45-19.38-13.82-31.08-3.37-11.7-5.06-23.08-5.06-34.14 0-14.7 3.59-26.68 10.77-35.94 7.18-9.26 16.5-13.98 27.96-14.16 4.35 0 9.27 1.15 14.76 3.46 5.49 2.31 9.38 3.53 11.66 3.66 2.07 0 6.09-1.29 12.06-3.87 5.97-2.58 11.22-3.75 15.75-3.52 11.21.6 20.35 4.7 27.42 12.3-9.9 5.99-14.73 14.3-14.49 24.95.24 8.35 3.37 15.28 9.39 20.81 6.02 5.53 13.39 8.78 22.11 9.75-2.28 6.74-5.07 13.62-8.37 20.65zm-38.64-106.6c.11-7.85 2.87-14.9 8.28-21.15 5.41-6.25 11.96-9.87 19.65-10.86.32 1.41.49 2.8.49 4.17 0 7.74-2.88 15.02-8.64 21.84-5.76 6.82-12.68 10.48-20.76 10.98-.22-1.63-.33-3.23-.33-4.8-.01-.06-.01-.12.31-.18z"/>
                </svg>
              </span>
              <span className="text-[#DFFF00] block tracking-normal">
                {SITE_BRAND.heroHeading.line2}
              </span>
              <span className="text-[#6D28FF] block tracking-normal">
                {SITE_BRAND.heroHeading.line3}
              </span>
              <span className="text-[#F5F5F5] block tracking-normal">
                {SITE_BRAND.heroHeading.line4}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-lg leading-relaxed mb-6 sm:mb-8">
              {SITE_BRAND.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
              {/* Primary Yellow CTA */}
              <button
                onClick={onShopNowClick}
                className="px-7 py-3.5 bg-[#DFFF00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-sm flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(223,255,0,0.35)]"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              {/* Secondary View Collection Link */}
              <button
                onClick={onViewCollectionClick}
                className="px-5 py-3.5 text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 hover:text-[#DFFF00] transition-colors"
              >
                <span>VIEW COLLECTION</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Satisfaction Pill Badge */}
            <div className="w-fit flex items-center gap-3 py-2 px-3.5 rounded-lg border border-[#27272A] bg-[#0E0E10]/80 backdrop-blur-sm tech-corner-tl tech-corner-br">
              <span className="text-sm sm:text-base font-black text-[#FF2FA8] font-mono">
                {SITE_BRAND.heroSatisfaction.stat}
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-white uppercase leading-tight">
                  {SITE_BRAND.heroSatisfaction.title}
                </span>
                <span className="text-[9px] font-semibold text-[#71717A] uppercase leading-tight">
                  {SITE_BRAND.heroSatisfaction.subtitle}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Hero Product Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]">
            
            {/* Technical HUD Details */}
            <div className="absolute top-2 right-4 text-[#20D9E8] font-mono text-[10px] tracking-widest hidden sm:block opacity-60">
              ⌜ HUD-01 ⌝
            </div>
            <div className="absolute -bottom-2 left-6 text-[#DFFF00] font-mono text-[10px] tracking-widest hidden sm:block opacity-60">
              ⌞ 48.24° ⌟
            </div>

            {/* Dotted Grid Matrices */}
            <div className="absolute top-6 left-12 w-16 h-12 bg-tech-dots opacity-40" />
            <div className="absolute bottom-10 right-8 w-20 h-16 bg-tech-dots-cyan opacity-40" />

            {/* Neon Yellow Angled Polygonal Backplate */}
            <div 
              className="absolute w-[78%] h-[92%] bg-[#DFFF00] rounded-3xl shadow-[0_0_60px_rgba(223,255,0,0.35)] transform rotate-[-7deg] translate-x-4 sm:translate-x-8 z-0"
              style={{
                clipPath: 'polygon(14% 0%, 100% 6%, 86% 100%, 0% 92%)'
              }}
            />

            {/* Purple Scalloped Starburst Badge */}
            <div className="absolute top-2 sm:top-6 right-2 sm:right-6 z-30 transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-[#6D28FF] starburst-badge flex flex-col items-center justify-center p-2 text-center shadow-[0_0_20px_rgba(109,40,255,0.7)]">
                <span className="text-[9px] sm:text-[11px] font-black text-white font-bebas leading-tight tracking-wider">
                  CRAZY
                </span>
                <span className="text-[9px] sm:text-[11px] font-black text-white font-bebas leading-tight tracking-wider">
                  DEALS
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-white font-bebas leading-tight tracking-wide">
                  INSIDE
                </span>
              </div>
            </div>

            {/* Layered Products Container */}
            <div className="relative z-10 w-full max-w-[500px] h-[380px] sm:h-[460px] flex items-center justify-center">
              
              {/* 1. Main Center iPhone 14 Pro Max Deep Purple */}
              <div className="relative z-20 w-[64%] sm:w-[68%] h-auto flex items-center justify-center">
                <img
                  src="/assets/hero/iphone-purple-hero.png"
                  alt="iPhone 14 Pro Max Deep Purple"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] select-none hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* 2. Floating AirPods Pro on Left */}
              <div className="absolute left-[0%] sm:left-[2%] top-[34%] z-30 w-[34%] sm:w-[36%] animate-float-slow">
                <img
                  src="/assets/hero/airpods-hero.png"
                  alt="AirPods Pro with MagSafe Charging Case"
                  className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] select-none hover:scale-110 transition-transform duration-300"
                  loading="eager"
                />
              </div>

              {/* 3. Angled Apple Watch on Right */}
              <div className="absolute right-[0%] sm:right-[2%] bottom-[6%] z-30 w-[42%] sm:w-[46%]">
                <img
                  src="/assets/hero/watch-hero.png"
                  alt="Apple Watch with Midnight Sport Loop"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] select-none hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

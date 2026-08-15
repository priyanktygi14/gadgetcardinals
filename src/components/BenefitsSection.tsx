import React from 'react';
import { BENEFITS, SITE_BRAND } from '../data/store';
import { BenefitCard } from './BenefitCard';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#050505] py-12 sm:py-16 lg:py-20 border-b border-[#18181B]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight leading-[0.9] select-none mb-3">
              <span className="text-[#F5F5F5] block">
                {SITE_BRAND.benefitsHeading.line1}
              </span>
              <span className="text-[#F5F5F5] block">
                {SITE_BRAND.benefitsHeading.line2}
              </span>
              <span className="text-[#6D28FF] block">
                {SITE_BRAND.benefitsHeading.line3}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] font-medium leading-relaxed">
              {SITE_BRAND.benefitsHeading.subtitle}
            </p>
          </div>

          {/* Right Column: 4 Stat Cards + Hazard Strip */}
          <div className="lg:col-span-8 relative flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 w-full">
              {BENEFITS.map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>

            {/* Vertical Hazard Stripe Bar on Far Right */}
            <div className="hidden 2xl:block absolute -right-8 top-0 bottom-0 w-3.5 bg-hazard-stripes rounded-full opacity-80" />
          </div>

        </div>
      </div>
    </section>
  );
};

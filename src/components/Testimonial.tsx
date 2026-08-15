import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/store';

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full bg-[#050505] py-8 sm:py-12 border-b border-[#18181B]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Testimonial Dark Card */}
        <div className="rounded-3xl border border-[#222226] bg-[#0A0A0D] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* Left: Giant Purple Quotation Mark + Review Text */}
          <div className="flex items-start gap-4 sm:gap-6 flex-1">
            {/* Giant Purple Quote Mark */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#6D28FF] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(109,40,255,0.4)]">
              <span className="text-4xl sm:text-5xl font-black text-white font-serif leading-none select-none mt-2">
                “
              </span>
            </div>

            {/* Review Quote */}
            <p className="text-base sm:text-lg lg:text-xl font-medium text-[#E4E4E7] leading-relaxed max-w-3xl">
              "{current.quote}"
            </p>
          </div>

          {/* Right: Author, Stars & Navigation Controls */}
          <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-8 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-[#222226] pt-4 lg:pt-0 lg:pl-8">
            
            {/* Author & Stars */}
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-wider text-white uppercase font-sans">
                {current.author}
              </span>
              <div className="flex items-center gap-1 mt-1 text-[#FBBF24]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                ))}
              </div>
            </div>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full border border-[#27272A] bg-[#050505] flex items-center justify-center text-white hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full border border-[#27272A] bg-[#050505] flex items-center justify-center text-white hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

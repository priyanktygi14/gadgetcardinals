import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../data/store';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenMobileMenu,
}) => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050505]/95 backdrop-blur-md border-b border-[#18181B] py-3.5 px-4 sm:px-6 lg:px-12 transition-all">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex flex-col tracking-tighter leading-none select-none group">
          <span className="text-[11px] sm:text-[13px] font-black tracking-widest text-[#F5F5F5] uppercase font-sans">
            THE GADGET
          </span>
          <span className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-wider text-[#F5F5F5] font-display uppercase group-hover:text-[#DFFF00] transition-colors">
            CARDINALS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative flex flex-col items-center py-1 text-xs lg:text-[13px] font-semibold tracking-wider transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-[#8E8E93] hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 w-1.5 h-1.5 bg-[#DFFF00] rounded-full shadow-[0_0_8px_#DFFF00]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 sm:gap-3.5">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="w-10 h-10 rounded-full border border-[#27272A] bg-[#0E0E10] flex items-center justify-center text-white hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors"
          >
            <Search className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Cart Button with Purple Badge */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="relative w-10 h-10 rounded-full border border-[#27272A] bg-[#0E0E10] flex items-center justify-center text-white hover:border-[#6D28FF] transition-colors"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#6D28FF] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(109,40,255,0.8)] border border-[#050505]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Menu Button (Neon Yellow Block with 3 Black Bars) */}
          <button
            onClick={onOpenMobileMenu}
            aria-label="Open Navigation Menu"
            className="w-10 h-10 rounded-lg bg-[#DFFF00] text-black flex flex-col items-center justify-center gap-1 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(223,255,0,0.3)]"
          >
            <span className="w-4.5 h-[2.2px] bg-[#050505] rounded-full" />
            <span className="w-4.5 h-[2.2px] bg-[#050505] rounded-full" />
            <span className="w-4.5 h-[2.2px] bg-[#050505] rounded-full" />
          </button>
        </div>

      </div>
    </header>
  );
};

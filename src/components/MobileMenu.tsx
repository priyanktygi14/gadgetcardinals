import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SITE_BRAND } from '../data/store';
import { InstagramIcon, TwitterIcon, DiscordIcon, YoutubeIcon } from './SocialIcons';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex w-full sm:w-80">
        <div className="w-full bg-[#070709] border-l border-[#222226] text-white p-6 flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#18181B]">
              <Link to="/" onClick={onClose} className="flex flex-col">
                <span className="text-[10px] font-black tracking-widest text-[#A1A1AA] uppercase">
                  THE GADGET
                </span>
                <span className="text-xl font-black font-display text-white uppercase">
                  CARDINALS
                </span>
              </Link>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center text-white hover:border-[#DFFF00] hover:text-[#DFFF00]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="mt-8 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-2 text-lg font-black font-display tracking-wider uppercase text-[#E4E4E7] hover:text-[#DFFF00] transition-colors border-b border-[#141418]"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#71717A]" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials & Info */}
          <div className="space-y-4 pt-6 border-t border-[#18181B]">
            <p className="text-xs text-[#71717A] leading-relaxed">
              {SITE_BRAND.footer.description}
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:text-white">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:text-white">
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:text-white">
                <DiscordIcon className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:text-white">
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

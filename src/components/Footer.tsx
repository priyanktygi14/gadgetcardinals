import React from 'react';
import { FOOTER_LINKS, SITE_BRAND } from '../data/store';
import { InstagramIcon, TwitterIcon, DiscordIcon, YoutubeIcon } from './SocialIcons';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050505] pt-14 pb-8 border-t border-[#18181B] text-[#A1A1AA]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Grid: Brand + 3 Link Columns + Download App Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
            <div>
              {/* Brand Logo */}
              <Link to="/" className="flex flex-col tracking-tighter leading-none select-none mb-4">
                <span className="text-xs font-black tracking-widest text-[#F5F5F5] uppercase font-sans">
                  THE GADGET
                </span>
                <span className="text-2xl font-black tracking-wider text-[#F5F5F5] font-display uppercase hover:text-[#DFFF00] transition-colors">
                  CARDINALS
                </span>
              </Link>

              {/* Brand Description */}
              <p className="text-xs text-[#8E8E93] leading-relaxed max-w-xs">
                {SITE_BRAND.footer.description}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#27272A] bg-[#0E0E10] flex items-center justify-center text-white hover:border-[#FF2FA8] hover:text-[#FF2FA8] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-[#27272A] bg-[#0E0E10] flex items-center justify-center text-white hover:border-[#20D9E8] hover:text-[#20D9E8] transition-colors"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Discord"
                className="w-9 h-9 rounded-full border border-[#27272A] bg-[#0E0E10] flex items-center justify-center text-white hover:border-[#6D28FF] hover:text-[#6D28FF] transition-colors"
              >
                <DiscordIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-[#27272A] bg-[#0E0E10] flex items-center justify-center text-white hover:border-[#FF7A00] hover:text-[#FF7A00] transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black tracking-widest text-white uppercase mb-4 font-sans">
              SHOP
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-[#DFFF00] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black tracking-widest text-white uppercase mb-4 font-sans">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-[#DFFF00] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black tracking-widest text-white uppercase mb-4 font-sans">
              HELP
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_LINKS.help.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-[#DFFF00] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App Panel */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[#222226] bg-[#0A0A0D] p-4 flex flex-col justify-between h-full min-h-[140px]">
              <div>
                <h4 className="text-[11px] font-black tracking-wider text-white uppercase font-sans">
                  DOWNLOAD OUR APP
                </h4>
                <p className="text-[10px] text-[#71717A] font-medium mt-0.5">
                  Coming Soon
                </p>
              </div>

              {/* App Store / Google Play Stylized Icon Badges */}
              <div className="flex items-center gap-2 mt-4">
                <div className="w-9 h-9 rounded-xl bg-[#DFFF00] flex items-center justify-center text-black font-black text-xs shadow-[0_0_10px_rgba(223,255,0,0.3)]">
                  🤖
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#6D28FF] flex items-center justify-center text-white font-black text-xs shadow-[0_0_10px_rgba(109,40,255,0.4)]">
                  ⚡
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="border-t border-[#18181B] pt-6 flex flex-col sm:flex-row items-center justify-center text-[11px] text-[#71717A]">
          <p>{SITE_BRAND.footer.copyright}</p>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';

export function HouseOfTeaLogo({ 
  size = "md", 
  variant = "inline", // "inline" | "arch" | "badge"
  showArabic = true, 
  showMotto = true, 
  className = "" 
}) {
  const sizeMap = {
    xs: { px: 32, fontTitle: "text-base", fontArabic: "text-sm" },
    sm: { px: 44, fontTitle: "text-lg", fontArabic: "text-base" },
    md: { px: 60, fontTitle: "text-xl sm:text-2xl", fontArabic: "text-lg sm:text-xl" },
    lg: { px: 84, fontTitle: "text-2xl sm:text-3xl", fontArabic: "text-xl sm:text-2xl" },
    xl: { px: 110, fontTitle: "text-3xl sm:text-4xl", fontArabic: "text-2xl sm:text-3xl" },
  };

  const { px, fontTitle, fontArabic } = sizeMap[size] || sizeMap.md;

  if (variant === "arch") {
    return (
      <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
        {/* Mihrab / Arch Card matching brand identity */}
        <div className="rounded-t-[42px] sm:rounded-t-[52px] bg-white pt-3 sm:pt-4 px-3 sm:px-4 pb-2.5 sm:pb-3 shadow-2xl border-4 border-[#E8D5C4] flex flex-col items-center">
          <div 
            style={{ width: px, height: px }}
            className="rounded-full overflow-hidden shadow-xl ring-2 ring-amber-400 group-hover:scale-105 transition-transform"
          >
            <img 
              src="/assets/images/house-of-tea-logo.jpg" 
              alt="House of Tea Logo - بيت الشاي" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          {showArabic && (
            <div className="mt-2 font-arabic font-black text-[#A4451A] text-lg sm:text-xl tracking-tight leading-none">
              بيت الشاي
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Real Circular Logo Badge */}
      <div 
        style={{ width: px, height: px }}
        className="relative rounded-full overflow-hidden shadow-xl ring-2 ring-amber-400/80 bg-black shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <img 
          src="/assets/images/house-of-tea-logo.jpg" 
          alt="House of Tea Logo - بيت الشاي" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Brand Typography */}
      <div>
        <div className="flex items-center gap-2">
          <span className={`font-black tracking-tight text-white font-sans ${fontTitle}`}>
            HOUSE OF <span className="text-[#A4451A]">TEA</span>
          </span>
          {showArabic && (
            <span className={`font-arabic font-black text-[#A4451A] ${fontArabic}`}>
              بيت الشاي
            </span>
          )}
        </div>

        {showMotto && (
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] tracking-widest uppercase font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
              Since 2000
            </span>
            <span className="text-[10px] tracking-wider text-orange-200/90 font-medium uppercase hidden sm:inline">
              Feel The Power of Tea
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function BrandHeaderGraphic({ className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      {/* Pure CSS/SVG theme header in warm amber and beige */}
      <div className="relative w-full h-24 sm:h-32 bg-[#A4451A] flex items-center justify-between px-6 overflow-hidden">
        <div className="flex items-center gap-4 z-10">
          <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#C5922C] shadow-md bg-black">
            <img
              src="/assets/images/house-of-tea-logo.jpg"
              alt="House of Tea"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-white font-black text-xl leading-none">HOUSE OF TEA</h2>
            <span className="text-[#E8D5C4] font-arabic font-bold text-lg">بيت الشاي</span>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#E8D5C4] transform -skew-x-12 translate-x-10 pointer-events-none opacity-80" />
      </div>
    </div>
  );
}

export default HouseOfTeaLogo;

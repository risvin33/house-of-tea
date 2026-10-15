import React from 'react';

export default function BranchMap({ branches = [], selectedBranch, onSelectBranch }) {
  return (
    <div className="relative w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden border border-[#3C1518] bg-[#1F0E08] shadow-2xl flex flex-col">
      {/* Map visual simulated with interactive radar grid & warm amber pins */}
      <div className="relative flex-1 bg-[#150A06] overflow-hidden select-none">
        
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #A4451A 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Decorative topographic / road curves */}
        <svg className="absolute inset-0 w-full h-full stroke-[#A4451A]/20 pointer-events-none" fill="none">
          <path d="M -50 200 Q 250 80, 500 240 T 1100 180" strokeWidth="2.5" />
          <path d="M 100 -20 Q 300 350, 700 300 T 1200 450" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M 0 450 Q 400 380, 800 500" strokeWidth="2" />
        </svg>

        {/* Ambient Radar sweep rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#A4451A]/15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#A4451A]/10 pointer-events-none" />

        {/* Map Pins for each branch */}
        {branches.map((branch, index) => {
          const branchPositions = {
            "br-01": { top: '38%', left: '36%' },
            "br-02": { top: '48%', left: '42%' },
            "br-03": { top: '24%', left: '52%' },
            "br-04": { top: '44%', left: '40%' },
            "br-05": { top: '34%', left: '46%' },
            "br-06": { top: '30%', left: '32%' },
            "br-07": { top: '32%', left: '58%' },
            "br-08": { top: '36%', left: '26%' },
            "br-09": { top: '40%', left: '54%' },
            "br-10": { top: '56%', left: '36%' },
            "br-11": { top: '18%', left: '48%' },
            "br-12": { top: '52%', left: '48%' },
            "br-13": { top: '70%', left: '60%' },
            "br-14": { top: '64%', left: '30%' },
            "br-15": { top: '16%', left: '66%' },
            "br-16": { top: '14%', left: '74%' },
            "br-17": { top: '72%', left: '44%' },
            "br-18": { top: '12%', left: '84%' },
            "br-19": { top: '42%', left: '30%' },
          };
          const pos = branchPositions[branch.id] || { 
            top: `${20 + (index * 7) % 65}%`, 
            left: `${20 + (index * 13) % 70}%` 
          };
          const isSelected = selectedBranch?.id === branch.id;
          const shortName = branch.name
            .replace(/^House of Tea - /i, "")
            .replace(/^Bait Al Shay - /i, "")
            .replace(/^Shy Rukn - /i, "");

          return (
            <div
              key={branch.id}
              onClick={() => onSelectBranch && onSelectBranch(branch)}
              style={{ top: pos.top, left: pos.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
            >
              <div className="relative flex items-center justify-center">
                {/* Ping animation when active */}
                {isSelected && (
                  <span className="absolute inline-flex h-12 w-12 rounded-full bg-[#A4451A] opacity-40 animate-ping" />
                )}

                {/* Pin badge */}
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold shadow-xl transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#A4451A] text-white scale-110 ring-4 ring-[#A4451A]/40 shadow-lg shadow-[#A4451A]/40'
                      : 'bg-[#1F0E08]/90 text-orange-200 border border-[#3C1518] hover:bg-[#2C1810] hover:border-[#A4451A] hover:scale-105'
                  }`}
                >
                  <span className="text-xs">🫖</span>
                  <span className="whitespace-nowrap">{shortName}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Selected Branch Details Overlay Card */}
        {selectedBranch && (
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-96 rounded-2xl bg-[#1F0E08]/95 backdrop-blur-xl p-4 border border-[#A4451A]/50 shadow-2xl z-20 transition-all animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#A4451A]">
                  Active House of Tea Hub
                </span>
                <h4 className="font-bold text-white text-sm mt-0.5">{selectedBranch.name}</h4>
                <p className="text-xs text-slate-300 mt-1">📍 {selectedBranch.address}</p>
                <p className="text-xs text-orange-300 mt-0.5 font-mono">🕒 {selectedBranch.hours}</p>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#A4451A]/20 border border-[#A4451A]/40 text-orange-200 text-[10px] font-bold whitespace-nowrap">
                {selectedBranch.status}
              </span>
            </div>

            {/* Quick action buttons */}
            <div className="mt-3 pt-3 border-t border-[#3C1518] flex items-center justify-between text-xs">
              <span className="text-amber-400 font-semibold">★ {selectedBranch.rating} ({selectedBranch.reviewsCount})</span>
              <a 
                href={`tel:${selectedBranch.phone}`}
                className="text-[#C5922C] hover:underline font-bold flex items-center gap-1"
              >
                <span>Call Branch</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Map Control Bar */}
      <div className="bg-[#1F0E08] px-5 py-3.5 border-t border-[#3C1518] flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#A4451A] animate-pulse" />
          <span className="text-orange-100 font-medium">Interactive GCC Radar &bull; {branches.length} Flagship Hubs</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">Click pin to view Drive-thru &amp; Hours</span>
          <button
            onClick={() => onSelectBranch && onSelectBranch(branches[0])}
            className="text-[#C5922C] hover:text-orange-300 font-bold"
          >
            Reset View
          </button>
        </div>
      </div>
    </div>
  );
}

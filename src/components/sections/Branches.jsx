import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { BRANCHES, CITIES } from "@/data/branches";
import BranchCard from "@/components/branches/BranchCard";
import BranchMap from "@/components/branches/BranchMap";
import Reveal from "@/components/ui/Reveal";

export default function Branches({ showMap = true }) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -360 : 360,
        behavior: "smooth",
      });
    }
  };

  const filtered = useMemo(() => {
    return BRANCHES.filter((b) => {
      const matchSearch = b.name.toLowerCase().includes(search.toLowerCase());
      const matchCity = city === "All" || b.city === city;
      return matchSearch && matchCity;
    });
  }, [search, city]);

  return (
    <section id="branches" className="relative pt-24 pb-10 px-6 overflow-hidden bg-white/30">
      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <p className="font-display text-xs tracking-[0.3em] text-[#A4451A] font-bold mb-3 uppercase">
            فروعنا في الخليج &bull; 19 Outlets
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2C1810] mb-4">
            Our <span className="text-[#A4451A]">Branches</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Find the nearest House of Tea outlet across Ajman, Sharjah, UAK & RAK for drive-thru & car-side karak service.
          </p>
        </Reveal>

        {/* Search & Filter */}
        <Reveal delay={0.1} className="flex flex-col md:flex-row gap-4 mb-6 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A4451A]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by branch name or area..."
              className="w-full bg-white border-2 border-[#E8D5C4] rounded-full pl-12 pr-4 py-3 text-sm text-[#2C1810] placeholder:text-slate-400 focus:outline-none focus:border-[#A4451A] shadow-sm transition-colors"
            />
          </div>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-white border-2 border-[#E8D5C4] rounded-full px-5 py-3 text-sm text-[#2C1810] font-medium focus:outline-none focus:border-[#A4451A] shadow-sm transition-colors cursor-pointer"
          >
            {CITIES.map((c) => (
              <option key={c} value={c} className="text-[#2C1810]">
                {c === "All" ? "All Cities (الكل)" : c}
              </option>
            ))}
          </select>
        </Reveal>

        <p className="text-center text-sm font-semibold text-[#A4451A] mb-8">
          Showing {filtered.length} of {BRANCHES.length} branches
        </p>

        {/* Cards Grid: 6 branches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filtered.slice(0, 6).map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>

        {/* Other Branches in Side Scroll */}
        {filtered.length > 6 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4 px-1">
              <div>
                <h3 className="font-heading text-xl font-bold text-[#2C1810]">
                  More Branches ({filtered.length - 6})
                </h3>
                <p className="text-xs text-slate-500">Scroll horizontally to explore more outlets</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  className="p-2.5 rounded-full border border-[#E8D5C4] bg-white text-[#2C1810] hover:bg-orange-50 hover:border-[#A4451A] transition-colors shadow-sm"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  className="p-2.5 rounded-full border border-[#E8D5C4] bg-white text-[#2C1810] hover:bg-orange-50 hover:border-[#A4451A] transition-colors shadow-sm"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 pb-4 pt-1 snap-x scrollbar-thin scroll-smooth"
              style={{ scrollbarWidth: "thin" }}
            >
              {filtered.slice(6).map((branch) => (
                <div
                  key={branch.id}
                  className="min-w-[290px] sm:min-w-[340px] max-w-[340px] shrink-0 snap-start flex flex-col"
                >
                  <BranchCard branch={branch} />
                </div>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-8">No branches found. Try a different search.</p>
        )}

        {/* Large Map or View Full Map button */}
        {showMap && filtered.length > 0 ? (
          <Reveal>
            <div className="mb-6 text-center">
              <h3 className="font-heading text-2xl font-bold text-[#2C1810] mb-2">All Branches on Live Map</h3>
              <p className="text-sm text-slate-600">Click a marker for branch details, directions & instant calling</p>
            </div>
            <div className="rounded-3xl overflow-hidden border-2 border-[#E8D5C4] shadow-lg shadow-amber-100/30 bg-white p-2">
              <BranchMap branches={filtered} />
            </div>
          </Reveal>
        ) : (
          <div className="text-center">
            <Link
              to="/branches"
              className="rounded-full px-8 py-3 text-xs font-bold bg-white border-2 border-[#A4451A] text-[#A4451A] hover:bg-[#A4451A] hover:text-white transition-all inline-flex items-center gap-2 uppercase tracking-widest shadow-sm"
            >
              View Full Map
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
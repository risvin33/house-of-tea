import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { BRANCHES, CITIES } from "@/data/branches";
import BranchCard from "@/components/branches/BranchCard";
import BranchMap from "@/components/branches/BranchMap";
import Reveal from "@/components/ui/Reveal";

export default function Branches({ showMap = true }) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");

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
            فروعنا في الخليج &bull; 54+ Outlets
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2C1810] mb-4">
            Our <span className="text-[#A4451A]">Branches</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Find the nearest House of Tea outlet across Ajman, Dubai, Sharjah, Abu Dhabi & RAK for drive-thru & car-side karak service.
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>

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
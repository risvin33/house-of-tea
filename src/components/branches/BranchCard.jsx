import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Copy, Share2, Navigation, Check } from "lucide-react";

export default function BranchCard({ branch }) {
  const [copied, setCopied] = useState(false);

  const telUrl = `tel:+971${branch.phone.replace(/\s/g, "").replace(/^0/, "")}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${branch.lat},${branch.lng}&z=15&output=embed`;

  const copyPhone = () => {
    navigator.clipboard.writeText(branch.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLocation = async () => {
    const shareData = {
      title: branch.name,
      text: `${branch.name} — ${branch.phone}`,
      url: directionsUrl,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch { }
    } else {
      navigator.clipboard.writeText(directionsUrl);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="bg-white border-2 border-[#E8D5C4] rounded-2xl overflow-hidden group shadow-md shadow-amber-100/30 hover:shadow-xl hover:border-[#A4451A]/60 transition-all duration-300 flex flex-col"
    >
      {/* Map preview */}
      <div className="relative h-36 overflow-hidden bg-orange-50">
        <iframe
          src={mapEmbedUrl}
          loading="lazy"
          title={`${branch.name} location`}
          className="w-full h-full border-0 pointer-events-none group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-[#A4451A]/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-lg font-bold text-[#2C1810] mb-1.5 leading-snug">
            {branch.name}
          </h3>
          <div className="flex items-center gap-1.5 mb-2">
            <MapPin size={13} className="text-[#A4451A]" />
            <span className="text-xs font-bold text-[#A4451A] uppercase tracking-wider">{branch.city}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Phone size={14} className="text-slate-400" />
            <span className="text-sm font-medium text-slate-700">{branch.phone}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div>
          <div className="flex gap-2 mb-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-pink-glow rounded-xl px-3 py-2.5 text-xs font-bold text-white flex items-center justify-center gap-1.5 uppercase tracking-wider"
            >
              <Navigation size={14} /> Directions
            </a>
            <a
              href={telUrl}
              className="flex-1 rounded-xl px-3 py-2.5 text-xs font-bold text-[#A4451A] bg-orange-50 hover:bg-[#A4451A] hover:text-white border border-[#E8D5C4] flex items-center justify-center gap-1.5 transition-colors uppercase tracking-wider"
            >
              <Phone size={14} /> Call
            </a>
          </div>
          <div className="flex gap-2">
            <button
              onClick={copyPhone}
              className="flex-1 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#A4451A] bg-white hover:bg-orange-50 border border-slate-200 hover:border-[#E8D5C4] flex items-center justify-center gap-1.5 transition-all"
            >
              {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy"}
            </button>
            <button
              onClick={shareLocation}
              className="flex-1 rounded-xl px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#A4451A] bg-white hover:bg-orange-50 border border-slate-200 hover:border-[#E8D5C4] flex items-center justify-center gap-1.5 transition-all"
            >
              <Share2 size={14} /> Share
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
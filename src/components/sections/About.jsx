import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const CARDS = [
  {
    icon: Target,
    title: "Our Mission",
    arabic: "رسالتنا",
    description:
      "To deliver the finest tea experience by blending two decades of brewing tradition with unmatched hospitality, bringing people together over every piping-hot cup.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    arabic: "رؤيتنا",
    description:
      "To be the world's most recognized and loved Karak & spiced tea house, celebrating authentic Gulf tea culture from Dubai to international capitals.",
  },
  {
    icon: Gem,
    title: "The Heritage Secret",
    arabic: "سر الخلطة",
    description:
      "Slow-simmered heavy brass pots, hand-selected Grade-A Persian saffron strands, and freshly crushed cardamom pods in every single pour.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-white border-t-2 border-[#fbcfe8]">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Description */}
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-[#fbcfe8] mb-4">
              <span className="font-display text-xs tracking-[0.25em] text-[#e6007e] font-bold uppercase">
                About Us &bull; عراقة بيت الشاي
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-black text-[#1c0d16] mb-6 leading-tight">
              A Legacy of <span className="text-[#e6007e]">Authentic Tea</span> Since 2000
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4 text-base">
              For over two decades, <strong className="text-[#1c0d16] font-bold">House of Tea (بيت الشاي)</strong> has been dedicated to the timeless regional ritual of tea-making. Our journey began with a simple conviction — that an authentic, slow-simmered cup of Karak can transform a day, uplift the spirit, and foster unforgettable community connections.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8 text-base">
              From our signature roadside curbside service to iconic waterfront flagships, we serve over 120,000 satisfied guests every single day across 54+ locations in the UAE, Saudi Arabia, Qatar, and beyond.
            </p>

            <button
              onClick={() =>
                document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-pink-glow rounded-full px-8 py-3.5 text-xs font-black text-white inline-flex items-center gap-2 uppercase tracking-widest shadow-lg shadow-[#e6007e]/25"
            >
              Taste The Menu &rarr;
            </button>
          </Reveal>

          {/* Right: Stacked Cards with House of Tea Styling */}
          <div className="flex flex-col gap-5">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#faf5f8] rounded-2xl p-6 flex gap-5 items-start border-2 border-[#fbcfe8] hover:border-[#e6007e] transition-all shadow-sm hover:shadow-md group"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white border-2 border-[#fbcfe8] group-hover:border-[#e6007e] flex items-center justify-center transition-colors shadow-sm">
                  <card.icon
                    size={22}
                    className="text-[#e6007e] group-hover:scale-110 transition-transform"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-heading text-lg font-bold text-[#1c0d16] group-hover:text-[#e6007e] transition-colors">
                      {card.title}
                    </h4>
                    <span className="font-arabic text-xs font-bold text-[#e6007e]">{card.arabic}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
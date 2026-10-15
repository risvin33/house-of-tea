import { motion } from "framer-motion";
import { ArrowRight, Handshake } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Franchise() {
  return (
    <section id="franchise" className="relative py-24 px-6 overflow-hidden bg-white/60 border-t border-[#fbcfe8]">
      <div className="smoke-layer w-[500px] h-[500px] bg-pink-100/50 top-0 right-0" />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="bg-white border-2 border-[#fbcfe8] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-xl shadow-pink-100/50">
            {/* Subtle brand tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-amber-50/30 pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pink-50 border-2 border-[#fbcfe8] flex items-center justify-center text-[#e6007e] shadow-sm">
                <Handshake size={30} strokeWidth={2} />
              </div>

              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="h-0.5 w-8 bg-[#c89b3c]" />
                <p className="font-display text-xs tracking-[0.3em] text-[#e6007e] uppercase font-bold">
                  انضم إلى عائلة بيت الشاي &bull; Partner With Us
                </p>
                <span className="h-0.5 w-8 bg-[#c89b3c]" />
              </div>

              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1c0d16] mb-4">
                Become a <span className="text-[#e6007e]">Franchise Partner</span>
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed text-sm md:text-base">
                Bring the House of Tea legacy to your city. We offer turnkey operations, signature recipes, site selection assistance, and a beloved Gulf brand that brews unmatched loyalty.
              </p>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="btn-pink-glow rounded-full px-10 py-4 text-xs font-black text-white inline-flex items-center gap-2 uppercase tracking-widest shadow-lg shadow-pink-500/25"
              >
                Start Your Journey
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
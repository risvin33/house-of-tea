import { motion } from "framer-motion";
import { Sparkles, Coffee, Award, Leaf } from "lucide-react";

const BADGES = [
  { icon: Sparkles, label: "Premium Ingredients" },
  { icon: Coffee, label: "Freshly Brewed" },
  { icon: Award, label: "Authentic Taste" },
  { icon: Leaf, label: "100% Natural" },
];

export default function Features() {
  return (
    <section className="relative py-12 px-6 overflow-hidden bg-white/60 border-y border-[#fbcfe8]/60">
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-[#fbcfe8] shadow-sm hover:shadow-md hover:border-[#e6007e]/40 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-pink-50 border-2 border-[#fbcfe8] group-hover:border-[#e6007e] group-hover:bg-[#e6007e] flex items-center justify-center mb-3 transition-colors">
                <badge.icon size={22} className="text-[#e6007e] group-hover:text-white transition-colors" strokeWidth={2} />
              </div>
              <p className="text-xs font-display font-bold tracking-wider text-[#1c0d16] uppercase">
                {badge.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
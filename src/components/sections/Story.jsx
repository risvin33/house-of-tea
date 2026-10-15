import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

export default function Story() {
  return (
    <section id="story" className="relative py-28 px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/story/story-tea-craft.png"
          alt="Tea plantation"
          fittingType="fill"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/95 via-[#3C1518]/88 to-[#1F0E08]/95" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#A4451A]/15 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-0.5 w-12 bg-[#C5922C]" />
          <p className="font-display text-xs tracking-[0.3em] text-[#C5922C] uppercase font-bold">
            بيت الشاي &bull; Our Heritage Story
          </p>
          <span className="h-0.5 w-12 bg-[#C5922C]" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-2xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed italic"
        >
          &ldquo;Every leaf tells a story of mist-covered mountains, patient simmer, and authentic spices. At <span className="text-[#E8D5C4] font-bold">House of Tea</span>, we don&apos;t just serve tea &mdash; we brew the spirit of warmth and gathering that unites communities across the Gulf.&rdquo;
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-arabic text-xl sm:text-2xl text-[#E8D5C4] font-bold mt-6"
        >
          &quot;لكل رشفة حكاية، ولكل كوب عراقة وأصالة تتوارثها الأجيال&quot;
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex justify-center items-center gap-3"
        >
          <div className="px-5 py-2 rounded-full border border-[#C5922C]/50 bg-black/30 backdrop-blur-sm text-[#C5922C] text-xs font-bold tracking-widest uppercase">
            Founded in UAE &bull; 2000
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/ui/Reveal";

const PRODUCTS = [
  {
    name: "Karak Tea",
    arabic: "شاي كرك الأصلي",
    badge: "Most Popular",
    description: "Bold, spiced brew with a rich amber glow and slow-simmered caramelized milk. The heartbeat of Gulf tea culture.",
    image: "/assets/images/products/karak-tea.png",
  },
  {
    name: "Special Saffron Tea",
    arabic: "شاي بالزعفران الملكي",
    badge: "House Signature",
    description: "Our signature royal blend infused with Grade-A Persian saffron filaments and crushed green cardamom. A cup above all others.",
    image: "/assets/images/products/saffron-tea.png",
  },
  {
    name: "Milk Tea",
    arabic: "شاي بالحليب المركز",
    badge: "Classic",
    description: "Creamy and smooth, where silky Assam tea leaves meet pure dairy in a comforting, aromatic embrace.",
    image: "/assets/images/products/milk-tea.png",
  },
  {
    name: "Black Tea",
    arabic: "شاي أسود نقي",
    badge: "Traditional",
    description: "Deep, intense, and pure. Brewed for tea connoisseurs who appreciate the authentic strength of Ceylon tradition.",
    image: "/assets/images/products/black-tea.png",
  },
  {
    name: "Lemon Mint Tea",
    arabic: "شاي بالليمون والنعناع",
    badge: "Refreshing",
    description: "Bright and zesty with fresh hand-squeezed lime and crushed garden mint, delivering an invigorating herbal lift.",
    image: "/assets/images/products/lemon-mint-tea.png",
  },
  {
    name: "Organic Green Tea",
    arabic: "شاي أخضر طبيعي",
    badge: "Wellness",
    description: "Fresh and ethereal, with delicate antioxidant-rich whole green tea leaves that soothe and restore the palate.",
    image: "/assets/images/products/organic-green-tea.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 px-6 overflow-hidden bg-white/50 border-t border-[#fbcfe8]/60">
      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-[#fbcfe8] mb-4">
            <span className="font-display text-xs tracking-[0.25em] text-[#e6007e] font-bold uppercase">
              قائمة المشروبات &bull; Signature Selection
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-black text-[#1c0d16] mb-4">
            Crafted for <span className="text-[#e6007e]">Every Moment</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Freshly brewed on demand at all 19 outlets across the UAE. Served piping hot around the clock with curbside car service.
          </p>
        </Reveal>

        {/* Standard Corporate 3-Column Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border-2 border-[#fbcfe8] rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:border-[#e6007e] transition-all duration-300 group"
            >
              {/* Product Photo */}
              <div className="relative h-56 overflow-hidden bg-pink-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fittingType="fill"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#e6007e] shadow-sm">
                    {product.badge}
                  </span>
                </div>

              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="font-heading text-xl font-bold text-[#1c0d16] group-hover:text-[#e6007e] transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-arabic text-xs font-bold text-[#e6007e]">
                      {product.arabic}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Freshly Brewed 24/7
                  </span>
                  <span className="text-[#c89b3c] font-bold tracking-wider uppercase">
                    House of Tea
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
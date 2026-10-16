import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/ui/Reveal";

const GALLERY = [
  { src: "/assets/images/gallery/gallery-01.jpeg", alt: "House of Tea sandwich and fries" },
  { src: "/assets/images/gallery/gallery-02.jpeg", alt: "House of Tea café interior" },
  { src: "/assets/images/gallery/gallery-03.jpeg", alt: "Passion fruit drink by House of Tea" },
  { src: "/assets/images/gallery/gallery-04.jpeg", alt: "House of Tea storefront facade" },
  { src: "/assets/images/gallery/gallery-05.jpeg", alt: "Refrigerated display counter" },
  { src: "/assets/images/gallery/gallery-06.jpeg", alt: "House of Tea counter area" },
  { src: "/assets/images/gallery/gallery-07.jpeg", alt: "House of Tea backlit logo sign" },
  { src: "/assets/images/gallery/gallery-08.jpeg", alt: "House of Tea service counter" },
  { src: "/assets/images/gallery/gallery-09.jpeg", alt: "Fresh produce display at House of Tea" },
  { src: "/assets/images/gallery/gallery-10.jpg", alt: "House of Tea branded packaging" },
  { src: "/assets/images/gallery/gallery-11.jpg", alt: "House of Tea bottled water" },
  { src: "/assets/images/gallery/gallery-12.jpg", alt: "House of Tea special tea and grill burger" },
  { src: "/assets/images/gallery/gallery-13.jpg", alt: "House of Tea brand emblem logo" },
  { src: "/assets/images/gallery/gallery-14.jpg", alt: "House of Tea special fresh juices" }
];


export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="relative pt-10 pb-24 px-6 overflow-hidden bg-white/40 border-t border-[#E8D5C4]/60">
      <div className="smoke-layer w-[500px] h-[500px] bg-orange-100/30 bottom-10 left-1/4" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.3em] text-[#A4451A] font-bold mb-3 uppercase">
            لحظات بيت الشاي &bull; Our Gallery
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2C1810] mb-4">
            Moments That We <span className="text-[#A4451A]">Cherish</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From hot saffron tea to fresh club sandwiches, burgers and juice delights &mdash; explore the House of Tea experience.
          </p>
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="h-0.5 w-10 bg-[#C5922C]" />
            <span className="text-xs font-bold text-[#C5922C] uppercase tracking-widest">Ajman &bull; UAK &bull; Sharjah &bull; RAK</span>
            <span className="h-0.5 w-10 bg-[#C5922C]" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {GALLERY.map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i % 3 * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setLightbox(item)}
              className="relative overflow-hidden rounded-2xl bg-white border-2 border-[#E8D5C4] hover:border-[#A4451A] group aspect-[4/3] cursor-pointer shadow-md shadow-amber-100/30 hover:shadow-xl transition-all duration-300">

              <Image
                src={item.src}
                alt={item.alt}
                fittingType="fill"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  {item.alt}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              aria-label="Close"
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass golden-border flex items-center justify-center text-gold hover:text-pink transition-colors duration-300 z-10">

              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={lightbox.src}
              alt={lightbox.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-[0_0_60px_rgba(0,0,0,0.8)]" />

          </motion.div>
        }
      </AnimatePresence>
    </section>);

}
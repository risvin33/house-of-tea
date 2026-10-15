import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Hero({ onExploreBranches, onExploreMenu }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id) || document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: InstagramIcon, href: "https://instagram.com/houseofteaajman", label: "Instagram" },
    { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
    { icon: WhatsAppIcon, href: "https://whatsapp.com", label: "WhatsApp" },
  ];

  return (
    <section id="home" className="relative flex flex-col justify-start overflow-hidden pt-16 bg-[#fffaef]">
      
      {/* 1ST COVER: Authentic House of Tea Brand Cover */}
      <div className="relative w-full overflow-hidden bg-[#ee077f] select-none shadow-sm">
        <div className="relative w-full max-w-6xl mx-auto flex justify-center px-4 sm:px-6 py-2">
          <img
            src="/assets/images/house-of-tea-cover.png"
            alt="House of Tea Brand Cover - بيت الشاي"
            className="w-full h-auto max-h-[420px] sm:max-h-[500px] md:max-h-[560px] object-contain object-top select-none pointer-events-none drop-shadow"
          />
        </div>
      </div>

      {/* Main Cover Content on Warm Ivory Base (#fffaef) */}
      <div className="relative max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center z-10 pt-12 sm:pt-16 pb-20">
        
        {/* Established 2000 Badge with Gold Accents */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-6 justify-center"
        >
          <span className="h-px w-8 sm:w-12 bg-[#c89b3c]" />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#fbcfe8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#e6007e]" />
            <span className="font-display text-xs font-bold tracking-[0.2em] text-[#e6007e] uppercase">
              SINCE 2000 &bull; بيت الشاي
            </span>
          </div>
          <span className="h-px w-8 sm:w-12 bg-[#c89b3c]" />
        </motion.div>

        {/* Brand Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-8 max-w-3xl"
        >
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[#1c0d16] tracking-tight leading-[1.05]">
            FEEL THE <span className="text-[#e6007e]">POWER</span> OF TEA
          </h1>

          <p className="font-arabic text-2xl sm:text-3xl font-extrabold text-[#e6007e] mt-4">
            أعرق مذاق للشاي الكرك والزعفران الملكي في الخليج العربي
          </p>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mt-4 font-normal">
            Slow-simmered Assam black tea leaves, crushed green cardamom pods, pure Persian saffron strands, and rich caramelized milk. Poured fresh daily across 54+ outlets since the year 2000.
          </p>
        </motion.div>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14 justify-center w-full sm:w-auto"
        >
          <button
            onClick={() => (onExploreBranches ? onExploreBranches() : scrollTo("branches"))}
            className="w-full sm:w-auto btn-pink-glow rounded-full px-8 py-4 text-xs font-bold text-white flex items-center justify-center gap-2 group uppercase tracking-widest shadow-md shadow-pink-500/20"
          >
            <MapPin size={16} />
            <span>Find Nearest Branches</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => (onExploreMenu ? onExploreMenu() : scrollTo("products"))}
            className="w-full sm:w-auto rounded-full px-8 py-4 text-xs font-bold text-[#e6007e] bg-white border-2 border-[#fbcfe8] hover:border-[#e6007e] hover:bg-pink-50/50 flex items-center justify-center gap-2 uppercase tracking-wider transition-all shadow-sm"
          >
            <Sparkles size={16} className="text-[#e6007e]" />
            <span>Signature Menu</span>
          </button>

          <button
            onClick={() => scrollTo("story")}
            className="w-full sm:w-auto rounded-full px-7 py-4 text-xs font-bold text-[#c89b3c] bg-white border-2 border-[#c89b3c]/30 hover:border-[#c89b3c] hover:bg-amber-50/50 flex items-center justify-center gap-2 uppercase tracking-wider transition-all shadow-sm"
          >
            <span>Our Story</span>
          </button>
        </motion.div>


        {/* Social Connection Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-4 justify-center"
        >
          <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">
            Connect With Us
          </span>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white border border-[#fbcfe8] flex items-center justify-center text-[#e6007e] hover:bg-[#e6007e] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
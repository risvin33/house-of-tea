import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Story", href: "#story" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      const scrollY = window.scrollY + 120;
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const target = href.startsWith("#") ? href : `#${href}`;
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl py-2.5 shadow-md border-b-2 border-[#fbcfe8]"
          : "bg-white/85 backdrop-blur-md py-3.5 border-b border-[#fbcfe8]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden shadow-md ring-2 ring-[#fbbf24] bg-black group-hover:scale-105 transition-transform">
            <img
              src="/assets/images/house-of-tea-logo.jpg"
              alt="House of Tea Logo - بيت الشاي"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-heading text-lg sm:text-xl font-black tracking-tight text-[#1c0d16]">
              HOUSE OF <span className="text-[#e6007e]">TEA</span>
            </span>
            <span className="block font-arabic text-xs font-bold text-[#e6007e] leading-none">
              بيت الشاي
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`relative text-xs font-bold tracking-wider uppercase transition-colors duration-200 py-1.5 ${
                    isActive ? "text-[#e6007e]" : "text-slate-700 hover:text-[#e6007e]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#e6007e] rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNav("#branches")}
            className="btn-pink-glow rounded-full px-5 py-2.5 text-xs font-black text-white uppercase tracking-wider"
          >
            Find Branches
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#e6007e] p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-[#fbcfe8] px-6 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left py-2 text-sm font-bold text-slate-800 hover:text-[#e6007e]"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNav("#branches")}
              className="w-full btn-pink-glow py-3 rounded-xl text-xs font-black text-white uppercase"
            >
              Find Nearest Branch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
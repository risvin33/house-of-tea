import { Phone, Mail, MapPin } from "lucide-react";

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WhatsAppIcon = ({ size = 18, className = "" }) =>
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>;


export default function Footer() {
  const socialLinks = [
    { icon: InstagramIcon, href: "https://instagram.com/houseofteaajman", label: "Instagram" },
    { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
    { icon: WhatsAppIcon, href: "https://whatsapp.com", label: "WhatsApp" }];


  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Story", href: "#story" },
    { label: "Products", href: "#products" },
    { label: "Gallery", href: "#gallery" }];


  const otherLinks = [
    { label: "Blog", href: "#blog" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" }];


  return (
    <footer id="contact" className="relative bg-[#1F0E08] border-t-2 border-[#A4451A]/30 text-orange-50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/house-of-tea-logo.jpg"
                alt="House of Tea - بيت الشاي"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-[#C5922C] shadow-lg" />
              <div>
                <h3 className="font-heading text-2xl font-black text-white leading-none">
                  House of Tea
                </h3>
                <span className="font-arabic text-[#C5922C] font-bold text-lg">بيت الشاي</span>
              </div>
            </div>

            <p className="text-sm text-orange-100/70 leading-relaxed mb-6">
              Feel the power of tea. A legacy of authentic saffron karak and street bites crafted with passion across 54+ outlets since 2000.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) =>
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A4451A] border border-white/10 hover:border-[#A4451A] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm">

                  <Icon size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs tracking-widest text-[#C5922C] mb-5 uppercase font-bold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) =>
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-orange-100/80 hover:text-[#C5922C] transition-colors duration-300 flex items-center gap-2 group font-medium">

                    <span className="w-0 h-0.5 bg-[#C5922C] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="font-display text-xs tracking-widest text-[#C5922C] mb-5 uppercase font-bold">
              Explore & Policies
            </h4>
            <ul className="space-y-3">
              {otherLinks.map((link) =>
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-orange-100/80 hover:text-[#C5922C] transition-colors duration-300 flex items-center gap-2 group font-medium">

                    <span className="w-0 h-0.5 bg-[#C5922C] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs tracking-widest text-[#C5922C] mb-5 uppercase font-bold">
              Contact & Support
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-orange-100/80">
                <Phone size={16} className="text-[#C5922C] mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+97165652912" className="hover:text-[#C5922C] transition-colors">+971 6 565 2912</a>
                  <a href="tel:+97167402314" className="hover:text-[#C5922C] transition-colors">+971 6 740 2314</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-orange-100/80">
                <Mail size={16} className="text-[#C5922C] mt-1 shrink-0" />
                <a
                  href="mailto:houseofteaajman@gmail.com"
                  className="hover:text-[#C5922C] transition-colors break-all">

                  houseofteaajman@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-orange-100/80">
                <MapPin size={16} className="text-[#C5922C] mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Adnan Al Madni Property<br />
                  Management Building, Ground Floor<br />
                  Rashidiya 1, Ajman, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-orange-200/60">
          <p>
            &copy; 2000 House of Tea (بيت الشاي). All Rights Reserved.
          </p>
          <p className="font-heading italic text-[#C5922C] text-sm">
            Feel the Power of Tea &bull; تذوق قوة الشاي
          </p>
        </div>
      </div>
    </footer>);

}
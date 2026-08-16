import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F291E] text-[#FDFBF7] pt-16 pb-12 border-t border-[#C5A059]/20 relative overflow-hidden">
      {/* Subtle Background Overlay Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#FDFBF7]/10">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#0F291E] flex items-center justify-center font-serif font-bold text-base">
                K
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FDFBF7] uppercase">
                King Sukh
              </span>
            </div>
            <p className="text-sm text-[#FDFBF7]/70 leading-relaxed">
              Make yourself at home in our guest house. A peaceful, comfortable base for exploring the serene hills and nature of Baranti & Purulia.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="King Sukh Guest House Facebook"
                className="hover:scale-110 transition-transform"
              >
                <img src="/images/icons/facebook.png" alt="Facebook" className="w-7 h-7 opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.instagram.com/kingsukhguesthouse/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="King Sukh Guest House Instagram"
                className="hover:scale-110 transition-transform"
              >
                <img src="/images/icons/instagram.png" alt="Instagram" className="w-7 h-7 opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="King Sukh Guest House Twitter"
                className="hover:scale-110 transition-transform"
              >
                <img src="/images/icons/twitter.png" alt="Twitter" className="w-7 h-7 opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="King Sukh Guest House YouTube"
                className="hover:scale-110 transition-transform"
              >
                <img src="/images/icons/youtube.png" alt="YouTube" className="w-7 h-7 opacity-80 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#E5C478] mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FDFBF7]/80">
              {["Home", "About", "Rooms", "Experiences", "Gallery", "Contact"].map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className="hover:text-[#E5C478] transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#E5C478]" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Accommodations */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#E5C478] mb-4">
              Our Rooms
            </h3>
            <ul className="space-y-3 text-sm text-[#FDFBF7]/80">
              <li>
                <Link to="/rooms/cozy-haven-room" className="hover:text-[#E5C478] transition-colors block">
                  <div className="font-medium text-[#FDFBF7]">Cozy Haven Room</div>
                  <div className="text-xs text-[#C5A059]">₹1,000 / Night</div>
                </Link>
              </li>
              <li>
                <Link to="/rooms/spacious-serenity-suite" className="hover:text-[#E5C478] transition-colors block">
                  <div className="font-medium text-[#FDFBF7]">Spacious Serenity Suite</div>
                  <div className="text-xs text-[#C5A059]">₹1,500 / Night</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#E5C478] mb-4">
              Location & Contact
            </h3>
            <div className="flex items-start gap-3 text-sm text-[#FDFBF7]/80">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
              <span>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#FDFBF7]/80 pt-1">
              <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
              <a href="tel:+919007062180" className="hover:text-[#E5C478] transition-colors">
                +91 9007062180
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#FDFBF7]/80 pt-1">
              <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
              <a href="mailto:kkghosh0099@gmail.com" className="hover:text-[#E5C478] transition-colors">
                kkghosh0099@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDFBF7]/60 gap-4 sm:px-16">
          <p>© {currentYear} King Sukh Guest House. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#E5C478] transition-colors">Contact Support</Link>
            <Link to="/rooms" className="hover:text-[#E5C478] transition-colors">Book Stay</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

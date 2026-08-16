import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "./Button";

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Experiences", path: "/experiences" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  // Dynamic header styles
  const isTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white py-5"
          : "glass-nav text-[#1E3A2B] py-3.5 shadow-sm border-b border-[#1E3A2B]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="King Sukh Guest House Home"
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-serif font-bold text-lg transition-transform group-hover:scale-105 ${
                isTransparent
                  ? "bg-[#C5A059] text-[#0F291E]"
                  : "bg-[#1E3A2B] text-[#FDFBF7]"
              }`}
            >
              K
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight leading-none uppercase">
                King Sukh
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase font-medium mt-0.5 ${
                  isTransparent ? "text-white/80" : "text-[#C5A059]"
                }`}
              >
                Guest House • Baranti
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                    isTransparent
                      ? isActive
                        ? "text-[#E5C478] font-semibold"
                        : "text-white/90 hover:text-white"
                      : isActive
                      ? "text-[#C5A059] font-semibold"
                      : "text-[#1E3A2B] hover:text-[#C5A059]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isTransparent ? "bg-[#E5C478]" : "bg-[#C5A059]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919007062180"
              className={`flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full border transition-colors ${
                isTransparent
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-[#1E3A2B]/20 text-[#1E3A2B] hover:bg-[#1E3A2B]/5"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>+91 9007062180</span>
            </a>

            <Button
              variant={isTransparent ? "gold" : "primary"}
              size="sm"
              icon={<Calendar className="w-4 h-4" />}
              onClick={onOpenBookingModal}
            >
              BOOK YOUR STAY
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-[#1E3A2B] hover:bg-[#1E3A2B]/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-40 bg-[#0F291E]/95 backdrop-blur-xl text-[#FDFBF7] flex flex-col justify-between p-6 transition-all duration-300 animate-fadeIn">
          <nav className="flex flex-col gap-6 mt-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xl font-serif tracking-wide transition-colors ${
                    isActive ? "text-[#E5C478] font-bold" : "text-[#FDFBF7]/80 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 pb-8 border-t border-[#FDFBF7]/10 pt-6">
            <a
              href="tel:+919007062180"
              className="flex items-center gap-3 text-sm text-[#E5C478] font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: +91 9007062180</span>
            </a>
            <Button
              variant="gold"
              size="lg"
              fullWidth
              icon={<Calendar className="w-5 h-5" />}
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onOpenBookingModal) onOpenBookingModal();
              }}
            >
              BOOK YOUR STAY
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

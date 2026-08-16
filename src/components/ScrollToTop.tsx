import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="hidden md:flex fixed bottom-8 left-8 z-40 p-3 rounded-full bg-[#1E3A2B] text-[#FDFBF7] border border-[#C5A059]/40 shadow-xl hover:bg-[#C5A059] hover:text-[#0F291E] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
      aria-label="Scroll back to top of page"
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "../data/gallery";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Gallery Lightbox"
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex items-center justify-between z-10 text-white bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-sm font-medium tracking-wide">
          <span className="text-[#C5A059] font-bold">{currentIndex + 1}</span> / {items.length}
        </div>
        <div className="text-center hidden sm:block font-serif text-lg font-semibold text-white/90">
          {currentItem.title}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center">
        <img
          src={currentItem.image}
          alt={currentItem.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
        />

        {/* Previous Button */}
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#C5A059] text-white hover:text-[#0F291E] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#C5A059] text-white hover:text-[#0F291E] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Caption at Bottom */}
      <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-white/80 bg-black/60 py-2.5 px-4 rounded-full max-w-md mx-auto sm:hidden">
        {currentItem.title}
      </div>
    </div>
  );
};

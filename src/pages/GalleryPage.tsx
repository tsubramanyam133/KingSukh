import React, { useState } from "react";
import { galleryData } from "../data/gallery";
import { GalleryLightbox } from "../components/GalleryLightbox";
import { Maximize2 } from "lucide-react";

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "rooms" | "property" | "surroundings">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "rooms", label: "Rooms" },
    { id: "property", label: "Property & Grounds" },
    { id: "surroundings", label: "Surroundings & Nature" }
  ];

  const filteredItems = activeCategory === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <div className="bg-[#FDFBF7] text-[#1E3A2B] pb-20">
      {/* Banner */}
      <div className="bg-[#0F291E] text-[#FDFBF7] pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#C5A059]/20 text-[#E5C478] text-xs font-semibold rounded-full border border-[#C5A059]/30 uppercase tracking-widest">
            AUTHENTIC PROPERTY PHOTOGRAPHY
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">
            Full Photo Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#FDFBF7]/80">
            Explore authentic photographs of our guest house exterior, rooms, reception lounge, and Baranti landscape.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#1E3A2B] text-[#FDFBF7] shadow-md"
                  : "bg-[#F4EFE6] text-[#1E3A2B] hover:bg-[#D5C9B3]/40 border border-[#D5C9B3]/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-gray-100 border border-[#1E3A2B]/10 shadow-sm hover:shadow-xl active:scale-[0.98] transition-all duration-300 touch-manipulation"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-4 text-white">
                <span className="text-[11px] sm:text-xs text-[#E5C478] font-semibold uppercase tracking-wider mb-0.5 sm:mb-1">
                  {item.category}
                </span>
                <div className="text-xs sm:text-sm font-serif font-bold flex items-center justify-between">
                  <span className="line-clamp-1">{item.title}</span>
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059] shrink-0 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
};

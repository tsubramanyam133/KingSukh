import React, { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { galleryData } from "../data/gallery";
import { GalleryLightbox } from "../components/GalleryLightbox";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Maximize2, Camera } from "lucide-react";

export const GallerySection: React.FC = () => {
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
    <section className="py-20 md:py-28 bg-[#FDFBF7] text-[#1E3A2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="REAL PROPERTY PHOTOGRAPHY"
          title="King Sukh Photo Gallery"
          subtitle="Take a visual tour of our guest house rooms, garden greenery, reception lounge, and nearby Baranti destinations."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
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
          {filteredItems.slice(0, 8).map((item, idx) => (
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

        <div className="mt-12 text-center">
          <Link to="/gallery">
            <Button variant="secondary" size="md" icon={<Camera className="w-4 h-4 text-[#C5A059]" />}>
              VIEW FULL GALLERY ({galleryData.length} PHOTOS)
            </Button>
          </Link>
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
    </section>
  );
};

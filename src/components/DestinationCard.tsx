import React from "react";
import type { Destination } from "../data/destinations";
import { MapPin, Compass } from "lucide-react";
import { getImageUrl } from "../utils/image";

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="group bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#1E3A2B]/10 shadow-sm hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex flex-col h-full touch-manipulation">
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={getImageUrl(destination.image)}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span className="absolute top-3 left-3 bg-[#1E3A2B]/90 backdrop-blur-md text-[#E5C478] text-xs font-semibold px-3 py-1 rounded-full border border-[#C5A059]/30">
          {destination.category}
        </span>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h3 className="text-xl font-serif font-bold group-hover:text-[#E5C478] transition-colors">
            {destination.name}
          </h3>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <p className="text-sm text-[#444444] leading-relaxed">
          {destination.description}
        </p>

        <div className="space-y-2 pt-3 border-t border-[#1E3A2B]/10">
          <div className="text-xs font-semibold text-[#1E3A2B] uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Key Highlights</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {destination.highlights.map((h, i) => (
              <span
                key={i}
                className="text-[11px] bg-[#F4EFE6] text-[#1E3A2B] font-medium px-2.5 py-0.5 rounded-md border border-[#D5C9B3]/40"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-[#1E3A2B]/10 flex items-center justify-between text-xs font-semibold">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.name + " Baranti Purulia")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#1E3A2B] hover:text-[#C5A059] transition-colors"
            title={`View ${destination.name} on Google Maps`}
          >
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Map Location</span>
          </a>

          <button
            type="button"
            onClick={() => {
              const phoneNumber = "919007062180";
              const text = encodeURIComponent(
                `Hello King Sukh Guest House,\nI would like to enquire about visiting ${destination.name} during my stay.`
              );
              window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank", "noopener,noreferrer");
            }}
            className="text-[#C5A059] hover:text-[#1E3A2B] font-bold transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Explore Details →</span>
          </button>
        </div>
      </div>
    </div>
  );
};

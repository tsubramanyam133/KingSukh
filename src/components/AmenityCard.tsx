import React from "react";
import type { Amenity } from "../data/amenities";
import { ShieldCheck, Clock, UtensilsCrossed, Compass } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#C5A059]" />,
  Clock: <Clock className="w-8 h-8 text-[#C5A059]" />,
  UtensilsCrossed: <UtensilsCrossed className="w-8 h-8 text-[#C5A059]" />,
  Compass: <Compass className="w-8 h-8 text-[#C5A059]" />
};

interface AmenityCardProps {
  amenity: Amenity;
}

export const AmenityCard: React.FC<AmenityCardProps> = ({ amenity }) => {
  return (
    <div className="group bg-[#F4EFE6] p-6 rounded-2xl border border-[#D5C9B3]/50 hover:border-[#C5A059] hover:bg-[#FDFBF7] active:scale-[0.98] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between touch-manipulation">
      <div>
        <div className="w-14 h-14 rounded-xl bg-[#1E3A2B]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {iconMap[amenity.iconName] || <ShieldCheck className="w-8 h-8 text-[#C5A059]" />}
        </div>
        <h3 className="text-xl font-serif font-bold text-[#1E3A2B] mb-2 group-hover:text-[#C5A059] transition-colors">
          {amenity.title}
        </h3>
        <p className="text-sm text-[#444444] leading-relaxed">
          {amenity.description}
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-[#1E3A2B]/10 flex items-center justify-between text-xs text-[#1E3A2B] font-semibold uppercase tracking-wider">
        <span>Verified Feature</span>
        <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
      </div>
    </div>
  );
};

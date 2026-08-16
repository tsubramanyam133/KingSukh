import React from "react";
import { Link } from "react-router-dom";
import type { Room } from "../data/rooms";
import { Button } from "./Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface RoomCardProps {
  room: Room;
  onBookClick?: (roomName: string) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onBookClick }) => {
  return (
    <div className="group bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#1E3A2B]/10 shadow-sm hover:shadow-xl active:scale-[0.98] transition-all duration-300 flex flex-col h-full touch-manipulation">
      {/* Image Header with Badge */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {room.badge && (
          <span className="absolute top-4 left-4 bg-[#C5A059] text-[#0F291E] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {room.badge}
          </span>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between text-white">
          <div className="text-2xl font-bold font-serif">
            {room.currency}{room.price.toLocaleString()}
            <span className="text-xs font-normal text-white/80 ml-1 font-sans">
              {room.perNightLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1E3A2B] group-hover:text-[#C5A059] transition-colors mb-2">
            {room.name}
          </h3>
          <p className="text-sm text-[#444444] leading-relaxed line-clamp-3 mb-4">
            {room.shortDescription}
          </p>

          <div className="space-y-2 pt-2 border-t border-[#1E3A2B]/10">
            {room.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#1E3A2B]/80 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1E3A2B]/10">
          <Link to={`/rooms/${room.id}`} className="w-full">
            <Button variant="secondary" size="sm" fullWidth icon={<ArrowRight className="w-4 h-4" />}>
              Details
            </Button>
          </Link>
          <Button
            variant="gold"
            size="sm"
            fullWidth
            onClick={() => onBookClick && onBookClick(room.name)}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

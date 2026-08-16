import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { RoomCard } from "../components/RoomCard";
import { roomsData } from "../data/rooms";

interface RoomsPageProps {
  onBookRoom: (roomName: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onBookRoom }) => {
  return (
    <div className="bg-[#FDFBF7] text-[#1E3A2B] pb-20">
      {/* Header Banner */}
      <div className="bg-[#0F291E] text-[#FDFBF7] pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#C5A059]/20 text-[#E5C478] text-xs font-semibold rounded-full border border-[#C5A059]/30 uppercase tracking-widest">
            VERIFIED ACCOMMODATIONS & PRICING
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">
            Guest Rooms & Suites
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#FDFBF7]/80">
            Choose between our Cozy Haven Room (₹1,000/night) or Spacious Serenity Suite (₹1,500/night).
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PRICING & AMENITIES"
          title="Comfortable Rooms Designed for Rest"
          subtitle="All rooms include 24-hour room service, security, and access to our in-house Bengali restaurant."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} onBookClick={onBookRoom} />
          ))}
        </div>
      </div>
    </div>
  );
};

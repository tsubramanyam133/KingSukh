import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { RoomCard } from "../components/RoomCard";
import { roomsData } from "../data/rooms";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ArrowRight } from "lucide-react";

interface RoomsSectionProps {
  onBookRoom: (roomName: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onBookRoom }) => {
  return (
    <section id="rooms" className="py-20 md:py-28 bg-[#FDFBF7] text-[#1E3A2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACCOMMODATION OPTIONS"
          title="Comfortable & Affordable Stay"
          subtitle="Thoughtfully equipped rooms positioned for peaceful rest after scenic exploration across Baranti and Purulia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} onBookClick={onBookRoom} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/rooms">
            <Button variant="outline" size="md" className="border-[#1E3A2B] text-[#1E3A2B] hover:bg-[#1E3A2B] hover:text-[#FDFBF7]" icon={<ArrowRight className="w-4 h-4" />}>
              VIEW ALL ROOM DETAILS & RATES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

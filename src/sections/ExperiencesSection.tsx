import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { DestinationCard } from "../components/DestinationCard";
import { destinationsData } from "../data/destinations";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Compass } from "lucide-react";

export const ExperiencesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0F291E] text-[#FDFBF7] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PURULIA TOURISM & DESTINATIONS"
          title="Explore Baranti & Surroundings"
          subtitle="From quiet lakeside strolls at Baranti Dam to red Palash flower blossoms and Ayodhya Hill treks — experience Purulia at your pace."
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.slice(0, 6).map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/experiences">
            <Button variant="gold" size="lg" icon={<Compass className="w-5 h-5" />}>
              EXPLORE ALL PURULIA EXPERIENCES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

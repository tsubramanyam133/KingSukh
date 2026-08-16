import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { AmenityCard } from "../components/AmenityCard";
import { amenitiesData } from "../data/amenities";

export const WhyStayWithUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F4EFE6] text-[#1E3A2B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="HOSPITALITY SERVICES"
          title="Why Stay With Us"
          subtitle="We focus on comfort, safety, home-style meals, and local guide assistance to make your Baranti trip smooth and enjoyable."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {amenitiesData.map((amenity) => (
            <AmenityCard key={amenity.id} amenity={amenity} />
          ))}
        </div>
      </div>
    </section>
  );
};

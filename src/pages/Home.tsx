import React from "react";
import { Hero } from "../sections/Hero";
import { AboutSection } from "../sections/AboutSection";
import { WhyStayWithUs } from "../sections/WhyStayWithUs";
import { RoomsSection } from "../sections/RoomsSection";
import { ExperiencesSection } from "../sections/ExperiencesSection";
import { GallerySection } from "../sections/GallerySection";
import { LocationSection } from "../sections/LocationSection";
import { BookingCTASection } from "../sections/BookingCTASection";

interface HomeProps {
  onOpenBookingModal: (roomName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBookingModal }) => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero onOpenBookingModal={() => onOpenBookingModal()} />

      {/* 2. About King Sukh */}
      <AboutSection />

      {/* 3. Why Stay With Us */}
      <WhyStayWithUs />

      {/* 4. Rooms Showcase */}
      <RoomsSection onBookRoom={(roomName) => onOpenBookingModal(roomName)} />

      {/* 5. Experience Baranti */}
      <ExperiencesSection />

      {/* 6. Photo Gallery */}
      <GallerySection />

      {/* 7. Location & Directions */}
      <LocationSection />

      {/* 8. Final Booking Call to Action */}
      <BookingCTASection onOpenBookingModal={() => onOpenBookingModal()} />
    </main>
  );
};

import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { DestinationCard } from "../components/DestinationCard";
import { destinationsData } from "../data/destinations";
import { Button } from "../components/Button";
import { MessageSquare } from "lucide-react";

export const ExperiencesPage: React.FC = () => {
  const handleGuideEnquiry = () => {
    const phoneNumber = "919007062180";
    const message = encodeURIComponent(
      "Hello King Sukh Guest House, I would like guidance and itinerary details for sightseeing in Baranti & Purulia."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#FDFBF7] text-[#1E3A2B] pb-20">
      {/* Banner */}
      <div className="bg-[#0F291E] text-[#FDFBF7] pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#C5A059]/20 text-[#E5C478] text-xs font-semibold rounded-full border border-[#C5A059]/30 uppercase tracking-widest">
            BARANTI & PURULIA TOURISM
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">
            Explore Purulia Destinations
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#FDFBF7]/80">
            Discover Baranti Dam, Ayodhya Hills, Maithon Reservoir, Palash blooming season, and local tribal culture.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="LOCAL ATTRACTIONS"
          title="Scenic Spots Near King Sukh Guest House"
          subtitle="We offer tourist guide support and sightseeing itinerary assistance for all our staying guests."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        {/* Tour Assistance Box */}
        <div className="bg-[#1E3A2B] text-[#FDFBF7] rounded-3xl p-8 md:p-12 text-center space-y-4 max-w-4xl mx-auto shadow-2xl border border-[#C5A059]/40">
          <h2 className="text-3xl font-serif font-bold text-[#E5C478]">
            Need a Customized Purulia Sightseeing Tour?
          </h2>
          <p className="text-base text-[#FDFBF7]/80 max-w-xl mx-auto leading-relaxed">
            Our guest house desk provides tourist guide assistance, car rentals, and trip itineraries tailored to your schedule.
          </p>
          <div className="pt-4 inline-block">
            <Button
              variant="gold"
              size="lg"
              icon={<MessageSquare className="w-5 h-5 text-[#0F291E]" />}
              onClick={handleGuideEnquiry}
            >
              ASK OUR TOURIST GUIDE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

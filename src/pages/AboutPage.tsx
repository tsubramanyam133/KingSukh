import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { Phone, Calendar, Trees, ShieldCheck, HeartHandshake } from "lucide-react";
import { getImageUrl } from "../utils/image";

interface AboutPageProps {
  onOpenBookingModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#FDFBF7] text-[#1E3A2B] pb-20">
      {/* Header Banner */}
      <div className="bg-[#0F291E] text-[#FDFBF7] pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#C5A059]/20 text-[#E5C478] text-xs font-semibold rounded-full border border-[#C5A059]/30 uppercase tracking-widest">
            OUR STORY & PHILOSOPHY
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">
            About King Sukh Guest House
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#FDFBF7]/80">
            Make yourself at home in our peaceful nature guest house beside Barshal Water Tank, Baranti.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="AUTHENTIC HOSPITALITY"
              title="A Peaceful Sanctuary in Manpur, Baranti"
              centered={false}
            />
            <p className="text-base text-[#444444] leading-relaxed">
              King Sukh Guest House was established to provide travelers, families, and nature enthusiasts with a clean, comfortable, and peaceful base while visiting the hills and reservoirs of Baranti and Purulia.
            </p>
            <p className="text-base text-[#444444] leading-relaxed">
              Located right beside Barshal Water Tank, our property combines serene country surroundings with personalized hospitality. Whether you want to enjoy home-style Bengali meals, seek advice on local sightseeing spots, or relax under the open sky, we are dedicated to ensuring your comfort.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="md" icon={<Calendar className="w-4 h-4" />} onClick={onOpenBookingModal}>
                BOOK YOUR STAY
              </Button>
              <a href="tel:+919007062180">
                <Button variant="secondary" size="md" icon={<Phone className="w-4 h-4 text-[#C5A059]" />}>
                  CALL +91 9007062180
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4]">
              <img src={getImageUrl("/images/property/exterior.jpg")} alt="King Sukh Exterior View" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] sm:translate-y-6">
              <img src={getImageUrl("/images/property/reception.jpg")} alt="King Sukh Reception Lounge" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* 3 Values Grid */}
        <div className="bg-[#F4EFE6] rounded-3xl p-8 md:p-12 border border-[#D5C9B3]/50">
          <SectionHeading
            badge="OUR BRAND POSITIONING"
            title="Simple — Unique — Friendly"
            subtitle="Our commitment to every guest who stays with us"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#D5C9B3]/40 text-center space-y-3">
              <Trees className="w-10 h-10 text-[#C5A059] mx-auto" />
              <h3 className="text-xl font-serif font-bold text-[#1E3A2B]">Simple Comfort</h3>
              <p className="text-xs text-[#444444] leading-relaxed">
                Unpretentious, clean, and restful rooms surrounded by pure nature and peaceful village atmosphere.
              </p>
            </div>

            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#D5C9B3]/40 text-center space-y-3">
              <HeartHandshake className="w-10 h-10 text-[#C5A059] mx-auto" />
              <h3 className="text-xl font-serif font-bold text-[#1E3A2B]">Unique Location</h3>
              <p className="text-xs text-[#444444] leading-relaxed">
                Situated right beside Barshal Water Tank, offering easy access to Baranti Lake, hills, and wildlife trails.
              </p>
            </div>

            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#D5C9B3]/40 text-center space-y-3">
              <ShieldCheck className="w-10 h-10 text-[#C5A059] mx-auto" />
              <h3 className="text-xl font-serif font-bold text-[#1E3A2B]">Friendly Service</h3>
              <p className="text-xs text-[#444444] leading-relaxed">
                24/7 staff support, home-cooked food, and personalized local sightseeing guidance throughout your stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

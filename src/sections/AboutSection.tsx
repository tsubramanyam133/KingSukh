import React from "react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { ArrowRight, Trees, HeartHandshake, ShieldCheck } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] text-[#1E3A2B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="/images/property/exterior.jpg"
                alt="King Sukh Guest House Main Building and Garden"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Inset Secondary Image / Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 w-48 md:w-56 rounded-2xl overflow-hidden shadow-xl border-4 border-[#FDFBF7] aspect-[4/3] hidden sm:block">
              <img
                src="/images/property/reception.jpg"
                alt="King Sukh Guest House Hospitality Lounge"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-[#0F291E]/90 backdrop-blur-md text-[#E5C478] p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-[#C5A059]/40 max-w-[150px] sm:max-w-[180px]">
              <div className="text-base sm:text-2xl font-bold font-serif leading-tight">Baranti, Purulia</div>
              <div className="text-[10px] sm:text-xs text-[#FDFBF7]/80 mt-0.5">Beside Barshal Water Tank</div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="ABOUT KING SUKH GUEST HOUSE"
              title="A Peaceful Stay Surrounded by Nature"
              subtitle="Make yourself at home in our guest house."
              centered={false}
            />

            <p className="text-base md:text-lg text-[#444444] leading-relaxed">
              King Sukh Guest House is located beside Barshal Water Tank in Manpur, Barhanti, West Bengal. Positioned amidst serene greenery, hillocks, and fresh country air, our guest house provides a cozy, authentic sanctuary for travelers exploring Purulia.
            </p>

            <p className="text-sm md:text-base text-[#444444]/90 leading-relaxed">
              Whether you are planning a weekend escape to Baranti Lake, trekking through Ayodhya Hills, or seeking home-cooked Bengali cuisine with warm hospitality, King Sukh Guest House ensures a restful and memorable stay.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-3 gap-3 pt-4 pb-2 border-y border-[#1E3A2B]/10">
              <div className="text-center p-3 rounded-xl bg-[#F4EFE6] border border-[#D5C9B3]/40">
                <Trees className="w-6 h-6 text-[#C5A059] mx-auto mb-1" />
                <div className="text-xs font-bold uppercase tracking-wider text-[#1E3A2B]">Simple</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#F4EFE6] border border-[#D5C9B3]/40">
                <HeartHandshake className="w-6 h-6 text-[#C5A059] mx-auto mb-1" />
                <div className="text-xs font-bold uppercase tracking-wider text-[#1E3A2B]">Unique</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#F4EFE6] border border-[#D5C9B3]/40">
                <ShieldCheck className="w-6 h-6 text-[#C5A059] mx-auto mb-1" />
                <div className="text-xs font-bold uppercase tracking-wider text-[#1E3A2B]">Friendly</div>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/about">
                <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  DISCOVER OUR STORY
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

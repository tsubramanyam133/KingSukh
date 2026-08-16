import React from "react";
import { Button } from "../components/Button";
import { Calendar, MessageSquare, MapPin, ShieldCheck, Clock } from "lucide-react";
import { getImageUrl } from "../utils/image";

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const handleWhatsApp = () => {
    const phoneNumber = "919007062180";
    const message = encodeURIComponent("Hello King Sukh Guest House, I would like to enquire about staying in Baranti.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0F291E]">
      {/* Background Image with subtle zoom animation */}
      <div className="absolute inset-0 z-0">
        <img
          src={getImageUrl("/images/hero/hero-main.jpg")}
          alt="King Sukh Guest House Main Property View"
          className="w-full h-full object-cover scale-105 animate-pulse transition-transform duration-10000 ease-out"
          style={{ animationDuration: "12s" }}
        />
        {/* Dark Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F291E] via-[#0F291E]/60 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#FDFBF7] space-y-6">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#E5C478] shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>BARANTI • PURULIA • WEST BENGAL</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#FDFBF7] leading-[1.1]">
          ESCAPE TO <span className="text-[#E5C478] italic font-normal">BARANTI</span>
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-[#FDFBF7]/90 font-light leading-relaxed">
          Stay close to nature. Feel at home in our tranquil nature guest house.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Button
            variant="gold"
            size="lg"
            fullWidth
            icon={<Calendar className="w-5 h-5" />}
            onClick={onOpenBookingModal}
          >
            CHECK AVAILABILITY
          </Button>

          <Button
            variant="outline"
            size="lg"
            fullWidth
            icon={<MessageSquare className="w-5 h-5 text-[#25D366]" />}
            onClick={handleWhatsApp}
          >
            WHATSAPP US
          </Button>
        </div>

        {/* Feature Highlights Bar */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-xs sm:text-sm text-[#FDFBF7]/80">
          <div className="flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md py-2.5 px-4 rounded-xl border border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>High Class Security</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md py-2.5 px-4 rounded-xl border border-white/10">
            <Clock className="w-4 h-4 text-[#C5A059]" />
            <span>24 Hours Room Service</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md py-2.5 px-4 rounded-xl border border-white/10">
            <span className="text-[#C5A059] font-serif font-bold">₹1,000</span>
            <span>Starting Price / Night</span>
          </div>
        </div>
      </div>
    </section>
  );
};

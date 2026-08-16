import { Button } from "../components/Button";
import { Calendar, MessageSquare, Phone } from "lucide-react";
import { getImageUrl } from "../utils/image";

interface BookingCTASectionProps {
  onOpenBookingModal: () => void;
}

export const BookingCTASection: React.FC<BookingCTASectionProps> = ({
  onOpenBookingModal
}) => {
  const handleWhatsApp = () => {
    const phoneNumber = "919007062180";
    const message = encodeURIComponent(
      "Hello King Sukh Guest House, I would like to book a room for my upcoming trip to Baranti."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#0F291E] text-[#FDFBF7] overflow-hidden">
      {/* Background Image overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={getImageUrl("/images/hero/hero-main.jpg")}
          alt="King Sukh Guest House Exterior Atmosphere"
          className="w-full h-full object-cover scale-105 opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F291E]/85 via-[#0F291E]/40 to-[#0F291E]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#C5A059]/20 text-[#E5C478] border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-widest">
          YOUR NATURE RETREAT AWAITS
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#FDFBF7] leading-tight">
          READY FOR YOUR <span className="text-[#E5C478] italic font-normal">BARANTI ESCAPE?</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#FDFBF7]/80 leading-relaxed font-light">
          Plan your stay at King Sukh Guest House. Enjoy serene hill views, home-cooked food, and authentic Purulia hospitality starting at ₹1,000 / night.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Button
            variant="gold"
            size="lg"
            fullWidth
            icon={<Calendar className="w-5 h-5" />}
            onClick={onOpenBookingModal}
          >
            BOOK YOUR STAY NOW
          </Button>

          <Button
            variant="outline"
            size="lg"
            fullWidth
            icon={<MessageSquare className="w-5 h-5 text-[#25D366]" />}
            onClick={handleWhatsApp}
          >
            WHATSAPP ENQUIRY
          </Button>
        </div>

        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-[#E5C478]">
          <Phone className="w-4 h-4" />
          <span>Direct Desk Phone: +91 9007062180</span>
        </div>
      </div>
    </section>
  );
};

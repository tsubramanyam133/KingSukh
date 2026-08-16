import React from "react";
import { MessageCircle, Calendar } from "lucide-react";

interface MobileBookingBarProps {
  onOpenBookingModal: () => void;
}

export const MobileBookingBar: React.FC<MobileBookingBarProps> = ({
  onOpenBookingModal
}) => {
  const handleWhatsApp = () => {
    const phoneNumber = "919007062180";
    const message = encodeURIComponent(
      "Hello King Sukh Guest House, I would like to enquire about room availability."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F291E] border-t border-[#C5A059]/30 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
      <button
        type="button"
        onClick={handleWhatsApp}
        className="flex-1 bg-[#25D366] text-white py-2.5 px-3 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WHATSAPP</span>
      </button>

      <button
        type="button"
        onClick={onOpenBookingModal}
        className="flex-1 bg-[#C5A059] text-[#0F291E] py-2.5 px-3 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
      >
        <Calendar className="w-4 h-4" />
        <span>BOOK NOW</span>
      </button>
    </div>
  );
};

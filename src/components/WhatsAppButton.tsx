import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919007062180";
    const message = encodeURIComponent(
      "Hello King Sukh Guest House,\nI would like to enquire about room booking availability."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 right-5 md:bottom-8 md:right-8 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      aria-label="Chat on WhatsApp with King Sukh Guest House"
      title="Chat on WhatsApp (+91 9007062180)"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
        Chat with Us
      </span>
    </button>
  );
};

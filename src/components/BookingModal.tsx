import React, { useState } from "react";
import { X, Calendar, UserCheck, MessageSquare, PhoneCall } from "lucide-react";
import { Button } from "./Button";
import { roomsData } from "../data/rooms";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomName = "Cozy Haven Room"
}) => {
  const [selectedRoom, setSelectedRoom] = useState(initialRoomName);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [guestName, setGuestName] = useState("");

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919007062180";
    let message = `Hello King Sukh Guest House,\nI would like to enquire about room availability.\n\n`;
    if (guestName) message += `Guest Name: ${guestName}\n`;
    message += `Room Selected: ${selectedRoom}\n`;
    if (checkIn) message += `Check-in Date: ${checkIn}\n`;
    if (checkOut) message += `Check-out Date: ${checkOut}\n`;
    message += `Guests: ${guests}\n\nPlease confirm availability and rates. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto p-4 flex items-center justify-center animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FDFBF7] rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#1E3A2B]/10 relative text-[#1E3A2B] my-auto max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#1E3A2B]/70 hover:text-[#1E3A2B] hover:bg-[#1E3A2B]/10 transition-colors focus:outline-none z-10"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 text-center">
          <span className="inline-block px-3 py-1 bg-[#1E3A2B]/10 text-[#1E3A2B] text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            Direct Guest House Enquiry
          </span>
          <h2 id="booking-modal-title" className="text-2xl md:text-3xl font-serif font-bold text-[#1E3A2B]">
            Plan Your Baranti Stay
          </h2>
          <p className="text-xs text-[#444444] mt-1">
            Send an instant enquiry directly to our team via WhatsApp (+91 9007062180)
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppBooking} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#1E3A2B] mb-1 uppercase tracking-wider">
              Your Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#1E3A2B]/20 bg-[#F4EFE6] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E3A2B] mb-1 uppercase tracking-wider">
              Select Accommodation
            </label>
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#1E3A2B]/20 bg-[#F4EFE6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              {roomsData.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name} — {room.currency}{room.price.toLocaleString()} / night
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#1E3A2B] mb-1 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" /> Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#1E3A2B]/20 bg-[#F4EFE6] text-xs font-medium text-[#1E3A2B] focus:outline-none focus:ring-2 focus:ring-[#C5A059] min-h-[44px] [color-scheme:light]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1E3A2B] mb-1 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" /> Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#1E3A2B]/20 bg-[#F4EFE6] text-xs font-medium text-[#1E3A2B] focus:outline-none focus:ring-2 focus:ring-[#C5A059] min-h-[44px] [color-scheme:light]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1E3A2B] mb-1 uppercase tracking-wider flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-[#C5A059]" /> Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#1E3A2B]/20 bg-[#F4EFE6] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <option value="1 Guest">1 Guest</option>
              <option value="2 Guests">2 Guests</option>
              <option value="3 Guests">3 Guests</option>
              <option value="4+ Family / Group">4+ Family / Group</option>
            </select>
          </div>

          <div className="pt-3 space-y-2">
            <Button
              type="submit"
              variant="gold"
              size="lg"
              fullWidth
              icon={<MessageSquare className="w-5 h-5" />}
            >
              SEND WHATSAPP ENQUIRY
            </Button>
            <a
              href="tel:+919007062180"
              className="flex items-center justify-center gap-2 text-xs font-semibold text-[#1E3A2B] py-2 hover:text-[#C5A059] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" /> Or Call Us Directly: +91 9007062180
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

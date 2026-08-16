import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { roomsData } from "../data/rooms";
import { Button } from "../components/Button";
import { CheckCircle2, ArrowLeft, Calendar, MessageSquare, ShieldCheck, Clock, UtensilsCrossed } from "lucide-react";

interface RoomDetailsPageProps {
  onBookRoom: (roomName: string) => void;
}

export const RoomDetailsPage: React.FC<RoomDetailsPageProps> = ({ onBookRoom }) => {
  const { roomId } = useParams<{ roomId: string }>();

  const room = roomsData.find((r) => r.id === roomId) || roomsData[0];
  const [activeImage, setActiveImage] = useState(room.image);

  if (!room) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-3xl font-serif font-bold text-[#1E3A2B] mb-4">Room Not Found</h1>
        <Link to="/rooms">
          <Button variant="primary">Back to Rooms</Button>
        </Link>
      </div>
    );
  }

  const handleWhatsAppBooking = () => {
    const phoneNumber = "919007062180";
    const message = encodeURIComponent(
      `Hello King Sukh Guest House,\nI would like to book the ${room.name} (${room.currency}${room.price}/night). Please check availability.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-28 md:pt-32 pb-20 bg-[#FDFBF7] text-[#1E3A2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A2B]/70 hover:text-[#C5A059] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Accommodations
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#1E3A2B]/10 bg-gray-100">
              <img
                src={activeImage}
                alt={room.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {room.badge && (
                <span className="absolute top-4 left-4 bg-[#C5A059] text-[#0F291E] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {room.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-3">
              {room.gallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img
                      ? "border-[#C5A059] scale-95 shadow-md"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`${room.name} photo ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Room Details & Booking Action */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-[#1E3A2B]/10 pb-4">
                <div>
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">VERIFIED ACCOMMODATION</span>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3A2B] mt-1">{room.name}</h1>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-serif font-bold text-[#1E3A2B]">{room.currency}{room.price.toLocaleString()}</div>
                  <div className="text-xs text-[#444444] font-medium">{room.perNightLabel}</div>
                </div>
              </div>

              <p className="text-base text-[#444444] leading-relaxed">
                {room.fullDescription}
              </p>

              {/* Room Features */}
              <div className="space-y-3 pt-4 border-t border-[#1E3A2B]/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E3A2B]">Room Features & Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {room.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#1E3A2B]/90 bg-[#F4EFE6] px-3 py-2 rounded-xl border border-[#D5C9B3]/40">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Box */}
            <div className="bg-[#0F291E] text-[#FDFBF7] p-6 rounded-3xl space-y-4 border border-[#C5A059]/30 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#E5C478] font-semibold uppercase tracking-wider">Direct Booking Rate</div>
                  <div className="text-2xl font-serif font-bold">{room.currency}{room.price.toLocaleString()} / Night</div>
                </div>
                <div className="text-right text-xs text-[#FDFBF7]/70">
                  <div>No Hidden Fees</div>
                  <div>Pay on Enquiry / Arrival</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  variant="gold"
                  size="md"
                  fullWidth
                  icon={<Calendar className="w-4 h-4" />}
                  onClick={() => onBookRoom(room.name)}
                >
                  ENQUIRE NOW
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  fullWidth
                  icon={<MessageSquare className="w-4 h-4 text-[#25D366]" />}
                  onClick={handleWhatsAppBooking}
                >
                  WHATSAPP
                </Button>
              </div>

              <div className="pt-2 text-center text-xs text-[#FDFBF7]/70 flex items-center justify-center gap-4">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> Security</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#C5A059]" /> 24/7 Desk</span>
                <span className="flex items-center gap-1"><UtensilsCrossed className="w-3.5 h-3.5 text-[#C5A059]" /> Dining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

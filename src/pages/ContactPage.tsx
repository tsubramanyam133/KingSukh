import React, { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { LocationSection } from "../sections/LocationSection";
import { MessageSquare, Send, PhoneCall } from "lucide-react";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Room Reservation Enquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct prefilled WhatsApp link for direct enquiry
    const phoneNumber = "919007062180";
    let text = `Hello King Sukh Guest House,\nMessage from website enquiry form:\n\n`;
    text += `Name: ${formData.name}\n`;
    if (formData.phone) text += `Phone: ${formData.phone}\n`;
    if (formData.email) text += `Email: ${formData.email}\n`;
    text += `Subject: ${formData.subject}\n`;
    text += `Message: ${formData.message}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-[#FDFBF7] text-[#1E3A2B] pb-20">
      {/* Banner */}
      <div className="bg-[#0F291E] text-[#FDFBF7] pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#C5A059]/20 text-[#E5C478] text-xs font-semibold rounded-full border border-[#C5A059]/30 uppercase tracking-widest">
            GET IN TOUCH WITH US
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">
            Contact King Sukh Guest House
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#FDFBF7]/80">
            We are here to help you plan your peaceful getaway in Baranti, Purulia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Interactive Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="DIRECT CONTACT FORM"
              title="Send Us an Enquiry"
              subtitle="Fill out your details below to send an instant message straight to our guest house reception desk."
              centered={false}
            />

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#1E3A2B] text-[#FDFBF7] border border-[#C5A059]/50 space-y-2 animate-fadeIn">
                <h3 className="text-xl font-serif font-bold text-[#E5C478]">Thank You!</h3>
                <p className="text-sm text-[#FDFBF7]/80">
                  Your message has been opened in WhatsApp for instant dispatch to our reception desk (+91 9007062180). We will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-[#F4EFE6] p-6 md:p-8 rounded-3xl border border-[#D5C9B3]/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A2B] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1E3A2B]/20 bg-[#FDFBF7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A2B] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1E3A2B]/20 bg-[#FDFBF7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A2B] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. user@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1E3A2B]/20 bg-[#FDFBF7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A2B] mb-1">
                      Enquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1E3A2B]/20 bg-[#FDFBF7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    >
                      <option value="Room Reservation Enquiry">Room Reservation Enquiry</option>
                      <option value="Sightseeing & Tourist Guide">Sightseeing & Tourist Guide</option>
                      <option value="Food & Dining Information">Food & Dining Information</option>
                      <option value="Location & Travel Directions">Location & Travel Directions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1E3A2B] mb-1">
                    Message / Travel Dates *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us your travel dates, number of guests, or any specific requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#1E3A2B]/20 bg-[#FDFBF7] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  fullWidth
                  icon={<Send className="w-4 h-4 text-[#0F291E]" />}
                >
                  SEND VIA WHATSAPP / DESK
                </Button>
              </form>
            )}
          </div>

          {/* Quick Direct Desk Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0F291E] text-[#FDFBF7] p-8 md:p-10 rounded-3xl border border-[#C5A059]/40 shadow-xl space-y-6">
              <span className="text-xs font-bold text-[#E5C478] uppercase tracking-widest">
                VERIFIED PROPERTY DETAILS
              </span>
              <h2 className="text-3xl font-serif font-bold">
                King Sukh Guest House
              </h2>

              <div className="space-y-4 text-sm text-[#FDFBF7]/90">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <PhoneCall className="w-4 h-4 text-[#E5C478]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#E5C478] font-bold">PHONE NUMBER</div>
                    <a href="tel:+919007062180" className="text-base font-bold hover:text-[#E5C478]">
                      +91 9007062180
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-[#E5C478]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#E5C478] font-bold">EMAIL ADDRESS</div>
                    <a href="mailto:kkghosh0099@gmail.com" className="text-base hover:text-[#E5C478]">
                      kkghosh0099@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#FDFBF7]/10 text-xs text-[#FDFBF7]/70 leading-relaxed">
                Positioned beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156. Accessible by road from Muradi Railway Station and Asansol Junction.
              </div>
            </div>
          </div>
        </div>

        {/* Reuse Location Component */}
        <LocationSection />
      </div>
    </div>
  );
};

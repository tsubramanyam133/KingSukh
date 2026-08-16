import React, { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { MapPin, Phone, Mail, Navigation, Copy, Check } from "lucide-react";

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = "King Sukh Guest House, Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F4EFE6] text-[#1E3A2B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FIND US IN BARANTI"
          title="Where We Are"
          subtitle="Located right beside Barshal Water Tank in Manpur, Barhanti — easy to locate for guest arrivals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#D5C9B3]/60 shadow-md space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                  PROPERTY ADDRESS
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1E3A2B]">
                  King Sukh Guest House
                </h3>
                <p className="text-base text-[#444444] leading-relaxed flex items-start gap-2.5 pt-2">
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-1" />
                  <span>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</span>
                </p>
              </div>

              {/* Direct Phone & Email */}
              <div className="space-y-3 pt-4 border-t border-[#1E3A2B]/10">
                <div className="flex items-center gap-3 text-sm text-[#1E3A2B] font-medium">
                  <div className="w-9 h-9 rounded-full bg-[#1E3A2B]/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#444444]">Direct Calling</div>
                    <a href="tel:+919007062180" className="hover:text-[#C5A059] transition-colors font-bold">
                      +91 9007062180
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#1E3A2B] font-medium">
                  <div className="w-9 h-9 rounded-full bg-[#1E3A2B]/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#444444]">Email Enquiry</div>
                    <a href="mailto:kkghosh0099@gmail.com" className="hover:text-[#C5A059] transition-colors font-bold">
                      kkghosh0099@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="primary" size="md" fullWidth icon={<Navigation className="w-4 h-4" />}>
                    GET DIRECTIONS
                  </Button>
                </a>

                <Button
                  variant="secondary"
                  size="md"
                  fullWidth
                  icon={copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  onClick={handleCopyAddress}
                >
                  {copied ? "COPIED!" : "COPY ADDRESS"}
                </Button>
              </div>
            </div>

            {/* Travel Note Card */}
            <div className="bg-[#1E3A2B] text-[#FDFBF7] p-6 rounded-3xl shadow-md border border-[#C5A059]/30">
              <h4 className="font-serif text-lg font-bold text-[#E5C478] mb-1">
                Tourist Guidance Available
              </h4>
              <p className="text-xs text-[#FDFBF7]/80 leading-relaxed">
                Need local taxi booking, station pickup advice (Asansol / Muradi), or custom Purulia sightseeing plans? Call our guest house desk anytime at +91 9007062180.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-[#D5C9B3]/60 min-h-[380px] relative bg-gray-200">
            <iframe
              title="King Sukh Guest House Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5434199187315!2d86.8378822!3d23.584824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0xf69eb5eb1cdd8b85!2sKing%20Sukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

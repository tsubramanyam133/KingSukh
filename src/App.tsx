import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { MobileBookingBar } from "./components/MobileBookingBar";
import { ScrollToTop } from "./components/ScrollToTop";
import { BookingModal } from "./components/BookingModal";

// Pages
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { RoomsPage } from "./pages/RoomsPage";
import { RoomDetailsPage } from "./pages/RoomDetailsPage";
import { ExperiencesPage } from "./pages/ExperiencesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomName, setSelectedRoomName] = useState("Cozy Haven Room");

  const openBookingModal = (roomName?: string) => {
    if (roomName) setSelectedRoomName(roomName);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FDFBF7] text-[#222222]">
        {/* Navigation Header */}
        <Navbar onOpenBookingModal={() => openBookingModal()} />

        {/* Dynamic Route Pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenBookingModal={openBookingModal} />} />
            <Route path="/about" element={<AboutPage onOpenBookingModal={() => openBookingModal()} />} />
            <Route path="/rooms" element={<RoomsPage onBookRoom={openBookingModal} />} />
            <Route path="/rooms/:roomId" element={<RoomDetailsPage onBookRoom={openBookingModal} />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        {/* Sticky Mobile Booking Bar */}
        <MobileBookingBar onOpenBookingModal={() => openBookingModal()} />

        {/* Enquiry / Reservation Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={closeBookingModal}
          initialRoomName={selectedRoomName}
        />
      </div>
    </Router>
  );
}

export default App;

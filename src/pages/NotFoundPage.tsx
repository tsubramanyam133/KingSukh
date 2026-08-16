import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Home } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 bg-[#FDFBF7] text-[#1E3A2B] px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-[#F4EFE6] p-8 md:p-12 rounded-3xl border border-[#D5C9B3]/60 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#1E3A2B]/10 text-[#C5A059] font-serif text-3xl font-bold flex items-center justify-center mx-auto">
          404
        </div>
        <h1 className="text-3xl font-serif font-bold text-[#1E3A2B]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#444444] leading-relaxed">
          The page you are looking for does not exist or has been moved. Let's get you back to King Sukh Guest House homepage.
        </p>
        <div className="pt-2">
          <Link to="/">
            <Button variant="primary" size="md" fullWidth icon={<Home className="w-4 h-4" />}>
              RETURN TO HOMEPAGE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

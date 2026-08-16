import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = false
}) => {
  return (
    <div className={`space-y-3 mb-10 md:mb-14 ${centered ? "text-center" : "text-left"}`}>
      {badge && (
        <span
          className={`inline-block px-3.5 py-1 text-xs font-semibold tracking-widest uppercase rounded-full ${
            light
              ? "bg-[#C5A059]/20 text-[#E5C478] border border-[#C5A059]/30"
              : "bg-[#1E3A2B]/10 text-[#1E3A2B] border border-[#1E3A2B]/20"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-5xl font-serif leading-tight ${
          light ? "text-[#FDFBF7]" : "text-[#1E3A2B]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-[#FDFBF7]/80" : "text-[#444444]"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`h-0.5 w-16 bg-[#C5A059] rounded-full mt-4 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};

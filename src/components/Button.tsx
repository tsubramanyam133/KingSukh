import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] active:scale-[0.98] cursor-pointer tracking-wide";

  const variants = {
    primary:
      "bg-[#1E3A2B] hover:bg-[#0F291E] text-[#FDFBF7] shadow-md hover:shadow-lg border border-[#1E3A2B]",
    secondary:
      "bg-[#F4EFE6] hover:bg-[#EAE2D5] text-[#1E3A2B] border border-[#D5C9B3]",
    outline:
      "bg-transparent border border-[#FDFBF7]/60 text-[#FDFBF7] hover:bg-[#FDFBF7] hover:text-[#1E3A2B]",
    gold:
      "bg-[#C5A059] hover:bg-[#B38D46] text-[#0F291E] font-semibold shadow-md hover:shadow-lg border border-[#C5A059]",
    ghost:
      "bg-transparent text-[#1E3A2B] hover:bg-[#1E3A2B]/10 hover:text-[#0F291E]"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};

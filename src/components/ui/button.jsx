import React from 'react';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false, 
  className = '' 
}) {
  const baseClasses = "flex justify-center items-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f4f6f9] active:scale-[0.97] touch-manipulation w-full";
  
  const sizeClasses = "py-3.5 px-4 sm:py-3 text-[15px] sm:text-base min-h-[48px] sm:min-h-[44px]";

  const variants = {
    primary: "bg-[#5cb85c] hover:bg-[#4cae4c] text-white focus:ring-[#5cb85c] shadow-sm",
    glass: "bg-white/20 hover:bg-white/30 text-white border border-white/10 focus:ring-white/50 backdrop-blur-sm",
    action: "bg-[#7952b3] hover:bg-[#66409e] text-white focus:ring-[#7952b3] shadow-md"
  };

  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed active:scale-100" : "";

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses} ${variants[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
}
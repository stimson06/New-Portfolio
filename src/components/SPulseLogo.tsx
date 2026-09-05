import React from 'react';

interface SPulseLogoProps {
  className?: string;
  size?: number;
}

export const SPulseLogo: React.FC<SPulseLogoProps> = ({ className = 'w-12 h-8', size }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center bg-transparent transition-transform duration-200 group-hover:scale-105 select-none ${className}`}
      style={size ? { width: size, height: (size * 2) / 3 } : undefined}
      title="Stimson - Business Intelligence & Analytics"
      aria-label="Stimson Logo"
    >
      {/* Light Mode Logo Image */}
      <img
        src="/assets/images/logo_light.png"
        alt="Stimson Logo (Light)"
        className="block dark:hidden w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
      {/* Dark Mode Logo Image */}
      <img
        src="/assets/images/logo_dark.png"
        alt="Stimson Logo (Dark)"
        className="hidden dark:block w-full h-full object-contain pointer-events-none"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

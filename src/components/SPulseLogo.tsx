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
      <svg
        viewBox="0 0 300 200"
        className="w-full h-full object-contain overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* S (Upper-Left: Crisp Dark Slate in light theme, Pure White in dark theme) */}
        <path
          d="M 100 42 C 96 30, 84 24, 70 24 C 48 24, 36 34, 36 47 C 36 60, 52 64, 70 70 C 88 76, 104 80, 104 93 C 104 106, 92 116, 70 116 C 56 116, 44 110, 40 98"
          className="stroke-slate-950 dark:stroke-white transition-colors duration-200"
          strokeWidth="19"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Sigmoidal Separator Curve (Vibrant Emerald Green in both themes) */}
        <path
          d="M 24 182 L 86 182 C 122 182, 142 142, 158 100 C 174 58, 194 18, 230 18 L 276 18"
          stroke="#00a651"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Chevron ^ (Lower-Right: Crisp Dark Slate in light theme, Pure White in dark theme) */}
        <polygon
          points="210,74 232,74 286,182 261,182 221,106 180,182 155,182"
          className="fill-slate-950 dark:fill-white transition-colors duration-200"
        />
      </svg>
    </div>
  );
};

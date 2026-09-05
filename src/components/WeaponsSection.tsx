import React, { useState } from 'react';
import { WEAPONS } from '../data/portfolioData';
import { ArrowRight, Wrench, Sparkles, Check } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

export const WeaponsSection: React.FC = () => {
  const [selectedWeaponId, setSelectedWeaponId] = useState<string>(WEAPONS[0].id);

  const activeWeapon = WEAPONS.find((w) => w.id === selectedWeaponId) || WEAPONS[0];

  return (
    <section id="Weapons" className="relative py-24 bg-white/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Work Process Link */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="portfolio-sub-title">
              My Weapons
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1D2043] dark:text-white tracking-tight leading-tight">
              My <span className="text-[#558b85] dark:text-[#6eb7b0]">favorite tools</span> which I use everyday in my life.
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              I love working with these tools, and my expertise with them helps me excel in my analytics and AI career.
            </p>

            <div className="pt-2">
              <a
                href="#Portfolio"
                className="portfolio-theme-btn group shadow-md"
              >
                <span>Lets See My Work Process</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Active Tool Spotlight Card */}
            <div className="mt-8 p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 p-1.5 flex items-center justify-center">
                  <OptimizedImage
                    src={activeWeapon.image}
                    alt={activeWeapon.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-[#1D2043] dark:text-white">
                      {activeWeapon.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#558b85]/10 text-[#558b85] dark:text-[#6eb7b0]">
                      {activeWeapon.level}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {activeWeapon.category}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                {activeWeapon.description}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#558b85] dark:text-[#6eb7b0] font-medium pt-1 border-t border-slate-100 dark:border-slate-700/60">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeWeapon.highlight}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Interactive Floating Weapons Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {WEAPONS.map((weapon, index) => {
                const isSelected = weapon.id === selectedWeaponId;

                return (
                  <div
                    key={weapon.id}
                    onClick={() => setSelectedWeaponId(weapon.id)}
                    className={`relative p-5 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer border transition-all duration-300 group ${
                      isSelected
                        ? 'bg-white dark:bg-slate-800 border-[#558b85] dark:border-[#6eb7b0] shadow-lg shadow-[#558b85]/15 scale-105'
                        : 'bg-white/80 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1'
                    }`}
                  >
                    {/* Tool Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900/60 p-3 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <OptimizedImage
                        src={weapon.image}
                        alt={weapon.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Tool Name Popup Text matching original .popup-text */}
                    <span className="text-xs font-bold text-[#1D2043] dark:text-white group-hover:text-[#558b85] dark:group-hover:text-[#6eb7b0] transition-colors">
                      {weapon.name}
                    </span>

                    <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                      {weapon.level}
                    </span>

                    {/* Active selection dot */}
                    {isSelected && (
                      <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#558b85] animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ModernBiExecutive } from './ModernBiExecutive';

const TYPEWRITER_WORDS = [
  'Business Intelligence Specialist',
  'Operations Analytics Expert',
  'Power BI & SQL Specialist',
  'Problem Solver'
];

export const HeroAbout: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect matching the dynamic typed text
  useEffect(() => {
    const fullText = TYPEWRITER_WORDS[wordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <section id="About" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authentic Content from Original Site */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Sub-title with Signature Dash */}
            <div className="portfolio-sub-title">
              About Me
            </div>

            {/* Main Headline without squiggle line */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-[#1D2043] dark:text-white tracking-tight leading-[1.15]">
              Hey, I’m{' '}
              <span className="text-[#558b85] dark:text-[#6eb7b0]">
                {PERSONAL_INFO.shortName}
              </span>
            </h1>

            {/* Typewriter Dynamic Title */}
            <div className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 min-h-[2.5rem] flex items-center">
              <span className="text-[#1D2043] dark:text-slate-100 mr-2">I am a</span>
              <span className="text-[#558b85] dark:text-[#6eb7b0] font-display border-b-2 border-[#558b85] pb-0.5">
                {currentText}
              </span>
              <span className="w-0.5 h-6 bg-[#558b85] ml-1 animate-pulse" />
            </div>

            {/* Tagline & Description from Original Portfolio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.tagline}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl text-justify">
              {PERSONAL_INFO.aboutDescription}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#Contact"
                className="portfolio-theme-btn group shadow-md"
              >
                <span>Hire me</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Stimson_Pushparaj_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[#558b85] hover:text-[#558b85] dark:hover:border-[#6eb7b0] dark:hover:text-[#6eb7b0] bg-white/60 dark:bg-slate-900/60 transition-all duration-200 backdrop-blur-sm cursor-pointer shadow-xs"
                title="Download Stimson's Resume (PDF)"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Modern BI Executive Operations & Metrics Visualizer (The Executive Unified Stack) */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex flex-col items-center lg:items-end justify-center w-full">
            {/* Ambient circular glow */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#558b85]/20 via-[#4ecdc4]/15 to-transparent blur-2xl -z-10 pointer-events-none" />

            <ModernBiExecutive />
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Laptop, Menu, X, Linkedin, Github, Phone, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SPulseLogo } from './SPulseLogo';

const NAV_ITEMS = [
  { id: 'About', label: 'About' },
  { id: 'Skills', label: 'Skills' },
  { id: 'Resume', label: 'Experience & Edu' },
  { id: 'Weapons', label: 'My Weapons' },
  { id: 'Portfolio', label: 'Projects' },
  { id: 'Contact', label: 'Contact' }
];

export const Navbar: React.FC = () => {
  const { themeMode, resolvedTheme, setThemeMode } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('About');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const cycleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else if (themeMode === 'dark') {
      setThemeMode('system');
    } else {
      setThemeMode('light');
    }
  };

  // Active section tracker via scroll position (continuous scrolling)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionElements = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id)
      }));

      const scrollPos = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0d1021]/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-white/60 dark:bg-[#0d1021]/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo Icon (Sigmoid + ^ + S) */}
        <a
          href="#About"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('About');
          }}
          aria-label="Stimson - Business Intelligence & Analytics"
          title="Stimson - Business Intelligence & Analytics"
          className="flex items-center group cursor-pointer"
        >
          <SPulseLogo className="w-12 h-8" />
        </a>

        {/* Desktop Navigation Links - Seamless inline layout without outer oval shape */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isHovered = hoveredSection === item.id;
            const isActive = activeSection === item.id;
            const highlighted = hoveredSection ? isHovered : isActive;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => setHoveredSection(item.id)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  highlighted
                    ? 'text-[#558b85] dark:text-[#6eb7b0] font-semibold bg-[#558b85]/10 dark:bg-[#558b85]/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#1D2043] dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Header Actions: Profile Links & Single Active Theme Icon (Greyed by default, highlighted on hover) */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* LinkedIn Icon */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl text-slate-400 dark:text-slate-500 hover:text-[#0a66c2] dark:hover:text-[#0a66c2] hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-all flex items-center justify-center group"
          >
            <Linkedin className="w-4 h-4 transition-colors" />
          </a>

          {/* GitHub Icon */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-all flex items-center justify-center group"
          >
            <Github className="w-4 h-4 transition-colors" />
          </a>

          {/* Theme Mode Toggle: Shows only active theme, greyed by default, highlighted on hover */}
          <button
            type="button"
            onClick={cycleTheme}
            title={
              themeMode === 'dark'
                ? 'Theme: Dark (Click to switch to System)'
                : themeMode === 'light'
                ? 'Theme: Light (Click to switch to Dark)'
                : 'Theme: System Auto (Click to switch to Light)'
            }
            aria-label="Toggle Color Theme"
            className={`p-2 rounded-xl text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-all flex items-center justify-center cursor-pointer group ${
              themeMode === 'dark'
                ? 'hover:text-indigo-400 dark:hover:text-indigo-300'
                : themeMode === 'light'
                ? 'hover:text-amber-500 dark:hover:text-amber-400'
                : 'hover:text-[#558b85] dark:hover:text-[#6eb7b0]'
            }`}
          >
            {themeMode === 'dark' && <Moon className="w-4 h-4 transition-colors" />}
            {themeMode === 'light' && <Sun className="w-4 h-4 transition-colors" />}
            {themeMode === 'system' && <Laptop className="w-4 h-4 transition-colors" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none ml-1 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#0d1021]/98 border-b border-slate-200 dark:border-slate-800 px-6 py-5 shadow-xl">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#558b85] text-white'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-5 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#558b85]" />
              {PERSONAL_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#558b85]" />
              {PERSONAL_INFO.email}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

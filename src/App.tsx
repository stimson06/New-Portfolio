import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThreeBackground } from './components/ThreeBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroAbout } from './components/HeroAbout';
import { SkillsSection } from './components/SkillsSection';
import { ResumeSection } from './components/ResumeSection';
import { WeaponsSection } from './components/WeaponsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export function AppContent() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="relative min-h-screen bg-[#fafafa] dark:bg-[#0d1021] text-[#1D2043] dark:text-[#f0f3fa] transition-colors duration-300 font-sans selection:bg-[#558b85]/20 selection:text-[#558b85]">
      {/* Modern Minimalist Magnetic Fluid Dot & Trail Custom Cursor */}
      <CustomCursor />

      {/* Satisfying BI & Analytics Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Innovative 3D Background based on Business Intelligence and Analytics */}
      <ThreeBackground />

      {/* Fixed Embedded Navigation Bar with before-selection hover highlight */}
      <Navbar />

      {/* Continuous Scrolling Sections matching https://github.com/stimson06/Portfolio */}
      <main id="main-content" className="relative z-10">
        {/* 1. About Me Section */}
        <HeroAbout />

        {/* 2. Skills Section with Original Gear Animations */}
        <SkillsSection />

        {/* 3. Education & Experience (Resume) Section */}
        <ResumeSection />

        {/* 4. My Weapons Section (Favorite Tools) */}
        <WeaponsSection />

        {/* 5. Projects Section (Data Analytics & Machine Learning) */}
        <ProjectsSection />

        {/* 6. Contact & Footer */}
        <ContactSection />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

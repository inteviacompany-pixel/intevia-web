/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, NavView } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { HomeOnePage } from './components/HomeOnePage.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { RfidTechSection } from './components/RfidTechSection.tsx';
import { LogisticsSimulatorSection } from './components/LogisticsSimulatorSection.tsx';
import { IndustrialEngineeringSection } from './components/IndustrialEngineeringSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { RoiCalculatorSection } from './components/RoiCalculatorSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [lang, setLang] = useState<Language>('th');
  const [activeView, setActiveView] = useState<NavView>('home');

  const handleSelectView = (view: NavView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-[#F5F7FA] flex flex-col font-sans">
      {/* Top Navbar with Logo background #061222 and embedded nav links */}
      <Navbar
        lang={lang}
        activeView={activeView}
        onToggleLang={(newLang) => setLang(newLang)}
        onSelectView={handleSelectView}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {/* Short & Concise Front Page */}
        {activeView === 'home' && (
          <HomeOnePage lang={lang} onSelectView={handleSelectView} />
        )}

        {/* Dedicated About Us Page */}
        {activeView === 'about' && (
          <AboutSection
            lang={lang}
            onSelectView={handleSelectView}
            onBackToHome={() => handleSelectView('home')}
          />
        )}

        {/* Dedicated RFID & IoT Page */}
        {activeView === 'rfid-tech' && (
          <RfidTechSection
            lang={lang}
            onBackToHome={() => handleSelectView('home')}
          />
        )}

        {/* Dedicated Logistics & SCM Simulator Page */}
        {activeView === 'logistics' && (
          <LogisticsSimulatorSection
            lang={lang}
            onBackToHome={() => handleSelectView('home')}
          />
        )}

        {/* Dedicated Engineering Solutions Page */}
        {activeView === 'engineering' && (
          <IndustrialEngineeringSection
            lang={lang}
            onBackToHome={() => handleSelectView('home')}
          />
        )}

        {/* Dedicated Projects & Case Studies Page */}
        {activeView === 'projects' && (
          <ProjectsSection
            lang={lang}
            onBackToHome={() => handleSelectView('home')}
          />
        )}

        {/* Dedicated ROI Calculator Page */}
        {activeView === 'roi' && (
          <RoiCalculatorSection
            lang={lang}
            onNavigateContact={() => handleSelectView('contact')}
            onBackToHome={() => handleSelectView('home')}
          />
        )}

        {/* Dedicated Contact Page */}
        {activeView === 'contact' && (
          <ContactSection
            lang={lang}
            onBackToHome={() => handleSelectView('home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onSelectView={handleSelectView}
      />
    </div>
  );
}

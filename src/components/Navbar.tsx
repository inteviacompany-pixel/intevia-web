import React, { useState } from 'react';
import { Language, NavView } from '../types/index.ts';
import { ArrowRight, Menu, X } from 'lucide-react';
import { companyContacts } from '../data/content.ts';

interface NavbarProps {
  lang: Language;
  activeView: NavView;
  onToggleLang: (lang: Language) => void;
  onSelectView: (view: NavView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  activeView,
  onToggleLang,
  onSelectView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavView; labelTh: string; labelEn: string }[] = [
    { id: 'home', labelTh: 'หน้าแรก', labelEn: 'Home' },
    { id: 'about', labelTh: 'เกี่ยวกับเรา', labelEn: 'About' },
    { id: 'rfid-tech', labelTh: 'เทคโนโลยี RFID & IoT', labelEn: 'RFID & IoT' },
    { id: 'logistics', labelTh: 'ระบบคลังสินค้า & SCM', labelEn: 'Logistics & SCM' },
    { id: 'engineering', labelTh: 'งานด้านวิศวกรรม', labelEn: 'Engineering' },
    { id: 'projects', labelTh: 'ผลงานโครงการ', labelEn: 'Projects' },
    { id: 'roi', labelTh: 'คำนวณ ROI', labelEn: 'ROI Calculator' },
  ];

  const handleNavClick = (view: NavView) => {
    onSelectView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#061222] border-b border-[#1b2d42] shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Official INTEVIA Logo (Seamlessly on #061222 background) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center group whitespace-nowrap shrink-0 text-left cursor-pointer"
            title="INTEVIA"
          >
            <img
              src={companyContacts.logoPath}
              alt="INTEVIA - INTELLIGENCE · STRATEGY · ACTION"
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
                const parent = (e.currentTarget as HTMLElement).parentElement;
                if (parent) {
                  const fb = parent.querySelector('.text-fallback');
                  if (fb) (fb as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className="text-fallback hidden items-center gap-2">
              <div className="w-2.5 h-7 bg-[#1976FF] rounded-xs"></div>
              <span className="text-2xl font-extrabold tracking-wider text-white font-heading">
                INTEVIA
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links embedded in Header */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[14px] font-medium text-[#D1D5DB]">
            {navLinks.map((link) => {
              const isActive = activeView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`py-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-white font-bold border-b-2 border-[#1976FF]'
                      : 'hover:text-white'
                  }`}
                >
                  {lang === 'th' ? link.labelTh : link.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher & Primary Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#0d1b2a] border border-[#1b2d42] rounded-lg p-1 text-xs font-semibold">
              <button
                onClick={() => onToggleLang('th')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  lang === 'th'
                    ? 'bg-[#1976FF] text-white shadow-xs'
                    : 'text-[#D1D5DB] hover:text-white'
                }`}
                title="สลับเป็นภาษาไทย"
              >
                ไทย
              </button>
              <button
                onClick={() => onToggleLang('en')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#1976FF] text-white shadow-xs'
                    : 'text-[#D1D5DB] hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Primary Action Button (Directs to Contact page view) */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'contact'
                  ? 'bg-white text-[#061222] font-bold'
                  : 'bg-[#1976FF] hover:bg-[#1565D8] text-white'
              }`}
            >
              <span>{lang === 'th' ? 'ติดต่อปรึกษาเรา' : 'Consult an Expert'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#0d1b2a] border border-[#1b2d42] text-[#D1D5DB] hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1b2d42] bg-[#061222] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#1976FF] text-white font-bold'
                    : 'text-[#D1D5DB] hover:text-white hover:bg-[#0d1b2a]'
                }`}
              >
                {lang === 'th' ? link.labelTh : link.labelEn}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#1976FF] rounded-lg shadow-sm"
            >
              <span>{lang === 'th' ? 'ติดต่อปรึกษาเรา' : 'Consult an Expert'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

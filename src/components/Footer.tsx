import React from 'react';
import { Language, NavView } from '../types/index.ts';
import { companyContacts } from '../data/content.ts';
import { Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onSelectView: (view: NavView) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onSelectView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (view: NavView) => {
    onSelectView(view);
    scrollToTop();
  };

  return (
    <footer className="bg-[#061222] text-[#D1D5DB] border-t border-[#1b2d42] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand Lockup & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center text-left cursor-pointer group"
            >
              <img
                src={companyContacts.logoPath}
                alt="INTEVIA - INTELLIGENCE · STRATEGY · ACTION"
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
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

            <div className="text-xs font-semibold tracking-widest text-[#1976FF] uppercase">
              INNOVATE | INTEGRATE | ELEVATE
            </div>

            <p className="text-sm text-[#D1D5DB] max-w-sm leading-relaxed">
              {lang === 'th'
                ? 'ผู้เชี่ยวชาญการออกแบบ พัฒนา และเชื่อมต่อระบบ RFID, IoT Devices และงานด้านวิศวกรรม (Engineering) ด้านการปรับปรุงและเพิ่มผลผลิต (Improvement & Productivity) เพื่อยกระดับคลังสินค้าและซัพพลายเชน'
                : 'Pioneering end-to-end RFID applications, industrial IoT hardware, and engineering solutions focused on Improvement & Productivity across modern logistics and manufacturing.'}
            </p>

            <div className="pt-1 flex items-center gap-4">
              <button
                onClick={() => handleNav('about')}
                className="text-xs font-semibold text-[#1976FF] hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>{lang === 'th' ? 'เกี่ยวกับเรา (About Us)' : 'About INTEVIA'}</span>
                <span>→</span>
              </button>
            </div>

            <div className="pt-1 text-xs text-[#6B7280]">
              Email:{' '}
              <a
                href={`mailto:${companyContacts.email}`}
                className="text-[#D1D5DB] hover:text-[#1976FF] transition-colors"
              >
                {companyContacts.email}
              </a>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'th' ? 'เทคโนโลยีและคลังสินค้า' : 'Technologies & Logistics'}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('rfid-tech')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {lang === 'th' ? 'เทคโนโลยี RFID (LF / HF / UHF)' : 'RFID Technologies'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('logistics')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {lang === 'th' ? 'ระบบคลังสินค้า & ติดตามพาเลท' : 'Warehouse Pallet Tracking'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('logistics')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {lang === 'th' ? 'เสาประตูสแกนกว้าง 300 ซม.' : '300cm Portal Gate Readers'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {lang === 'th' ? 'ตรวจสอบสินค้าแท้ NFC' : 'NFC Brand Authenticity'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Engineering Services */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'th' ? 'งานด้านวิศวกรรม' : 'Engineering Solutions'}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('engineering')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {lang === 'th' ? 'Process & Work Study' : 'Process & Work Study'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('engineering')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {lang === 'th' ? 'Operations Research & Sim' : 'Operations Research'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('engineering')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {lang === 'th' ? 'Plant Design & Layout' : 'Plant Design & Yield'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('engineering')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {lang === 'th' ? 'Company Integration Workflow' : 'Company Workflow Flow'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('roi')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#1976FF]"
                >
                  {lang === 'th' ? 'เครื่องมือคำนวณ ROI' : 'ROI Calculator'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Social Channels */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'th' ? 'ติดตามเรา' : 'Follow Us'}
            </div>
            <div className="space-y-2 text-xs">
              <a
                href={companyContacts.facebook}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white transition-colors"
              >
                Facebook: INTEVIA
              </a>
              <a
                href={companyContacts.tiktok}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white transition-colors"
              >
                TikTok: @intevia.co.th
              </a>
              <a
                href={companyContacts.instagram}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white transition-colors"
              >
                Instagram: intevia.company
              </a>
              <a
                href={companyContacts.youtube}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white transition-colors"
              >
                YouTube: @INTEVIA-j6o
              </a>
            </div>

            <div className="pt-2">
              <a
                href={companyContacts.pdfPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#1976FF] hover:underline"
              >
                <span>Company Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#21354F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} INTEVIA. All rights reserved. INTELLIGENCE · STRATEGY · ACTION.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#D1D5DB] hover:text-white transition-colors cursor-pointer"
            >
              <span>{lang === 'th' ? 'กลับขึ้นด้านบน' : 'Back to Top'}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

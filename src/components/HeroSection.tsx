import React from 'react';
import { Language } from '../types/index.ts';
import { ArrowRight, Download, Calculator, CheckCircle2, Radio, Layers, Cpu } from 'lucide-react';
import { companyContacts } from '../data/content.ts';

interface HeroSectionProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#21354F]">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#1976FF 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Upper Slogan / Kicker */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest text-[#1976FF] uppercase mb-4">
          <span className="inline-block w-2 h-2 rounded-full bg-[#1976FF]"></span>
          <span>INTEVIA · INNOVATE | INTEGRATE | ELEVATE</span>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Main Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-[1.18] tracking-tight mb-6">
              {lang === 'th' ? (
                <>
                  ยกระดับ <span className="text-[#1976FF]">RFID & IoT</span> สู่ระบบคลังสินค้า โลจิสติกส์ และโรงงานอัจฉริยะ
                </>
              ) : (
                <>
                  Intelligent <span className="text-[#1976FF]">RFID & IoT</span> Powering Real-World Logistics & Supply Chain
                </>
              )}
            </h1>

            <p className="text-lg sm:text-xl text-[#D1D5DB] leading-relaxed mb-8 max-w-2xl font-normal">
              {lang === 'th'
                ? 'เราออกแบบ พัฒนา และเชื่อมต่อฮาร์ดแวร์ RFID, IoT Devices และระบบซอฟต์แวร์บริหารจัดการระดับองค์กร เพิ่มความแม่นยำในการนับสต็อก ลดข้อผิดพลาดในการกระจายสินค้า และยกระดับประสิทธิภาพงานด้านวิศวกรรม (Engineering: Improvement & Productivity)'
                : 'We design, develop, and integrate specialized RFID hardware, IoT edge devices, and enterprise middleware to transform warehouse operations, pallet traceability, and engineering productivity workflows.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => onNavigate('logistics-simulator')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#1976FF] hover:bg-[#1565D8] rounded-lg transition-colors shadow-lg cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'th' ? 'ทดลองจำลองระบบคลังสินค้า' : 'Explore Logistics Simulator'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('roi-calculator')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-[#F5F7FA] bg-[#132238] hover:bg-[#1b2e4b] border border-[#21354F] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-[#1976FF]" />
                <span>{lang === 'th' ? 'คำนวณความคุ้มค่า ROI' : 'Calculate ROI'}</span>
              </button>

              <a
                href={companyContacts.pdfPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-[#D1D5DB] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#6B7280]" />
                <span>{lang === 'th' ? 'Company Profile (PDF)' : 'Download Profile (PDF)'}</span>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#D1D5DB] pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1976FF]" />
                <span>{lang === 'th' ? 'เชื่อมต่อ WMS / SAP / ERP' : 'WMS / SAP / ERP Ready'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1976FF]" />
                <span>{lang === 'th' ? 'ฮาร์ดแวร์ทนทานมาตรฐาน IP67' : 'Industrial IP67 Hardware'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1976FF]" />
                <span>{lang === 'th' ? 'ซัพพอร์ตงานด้านวิศวกรรมครบวงจร' : 'Full Engineering Lifecycle Consulting'}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Marquee Visual Display */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full h-full min-h-[360px] lg:min-h-[460px] rounded-xl overflow-hidden border border-[#21354F] shadow-2xl bg-[#132238]">
              <img
                src="/src/assets/images/hero_rfid_logistics_1793849673274.jpg"
                alt="INTEVIA Smart Warehouse and RFID Logistics"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/30 to-transparent"></div>

              {/* In-Image Live Sensor Overlay Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0D1B2A]/90 backdrop-blur-md border border-[#21354F] rounded-lg p-4">
                <div className="flex items-center justify-between text-xs text-[#D1D5DB] mb-2">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#1976FF] animate-pulse" />
                    <span className="font-semibold text-white">
                      {lang === 'th' ? 'ระบบตรวจจับเสาสัญญาณ RFID Gate' : 'RFID Portal Gate System'}
                    </span>
                  </div>
                  <span className="font-mono-numbers text-[#1976FF]">UHF 920-925 MHz</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[#132238] p-2 rounded border border-[#21354F]/60">
                    <div className="text-[#6B7280]">{lang === 'th' ? 'สถานะการตรวจจับ' : 'Bulk Detection'}</div>
                    <div className="font-bold text-white font-mono-numbers">120 Tags / 1.4s</div>
                  </div>
                  <div className="bg-[#132238] p-2 rounded border border-[#21354F]/60">
                    <div className="text-[#6B7280]">{lang === 'th' ? 'การซิงก์ข้อมูล' : 'System Sync'}</div>
                    <div className="font-bold text-emerald-400 font-mono-numbers">WMS Connected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Strip in a full-width row below hero split */}
        <div className="mt-14 pt-8 border-t border-[#21354F] grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#132238] p-5 rounded-lg border border-[#21354F]">
            <div className="text-3xl lg:text-4xl font-extrabold text-[#1976FF] font-mono-numbers mb-1">
              99.8%
            </div>
            <div className="text-sm font-semibold text-white">
              {lang === 'th' ? 'ความแม่นยำของสต็อกสินค้า' : 'Inventory Accuracy'}
            </div>
            <div className="text-xs text-[#D1D5DB] mt-1">
              {lang === 'th' ? 'ลดปัญหาของหายและสต็อกคลาดเคลื่อน' : 'Eliminate stock count discrepancies'}
            </div>
          </div>

          <div className="bg-[#132238] p-5 rounded-lg border border-[#21354F]">
            <div className="text-3xl lg:text-4xl font-extrabold text-[#1976FF] font-mono-numbers mb-1">
              -85%
            </div>
            <div className="text-sm font-semibold text-white">
              {lang === 'th' ? 'เวลาตรวจนับสินค้าในคลัง' : 'Cycle Count Time'}
            </div>
            <div className="text-xs text-[#D1D5DB] mt-1">
              {lang === 'th' ? 'สแกนรวดเร็วโดยไม่ต้องหยิบจับทีละชิ้น' : 'Bulk contactless batch scanning'}
            </div>
          </div>

          <div className="bg-[#132238] p-5 rounded-lg border border-[#21354F]">
            <div className="text-3xl lg:text-4xl font-extrabold text-[#1976FF] font-mono-numbers mb-1">
              700+
            </div>
            <div className="text-sm font-semibold text-white">
              {lang === 'th' ? 'อัตราการอ่านแท็กต่อวินาที' : 'Tags Read Per Second'}
            </div>
            <div className="text-xs text-[#D1D5DB] mt-1">
              {lang === 'th' ? 'ผ่านประตูสแกนกว้าง 300 ซม. ทันที' : 'High-speed 300cm portal gates'}
            </div>
          </div>

          <div className="bg-[#132238] p-5 rounded-lg border border-[#21354F]">
            <div className="text-3xl lg:text-4xl font-extrabold text-[#1976FF] font-mono-numbers mb-1">
              100%
            </div>
            <div className="text-sm font-semibold text-white">
              {lang === 'th' ? 'เชื่อมต่อ ERP & WMS ไร้รอยต่อ' : 'ERP / WMS Integration'}
            </div>
            <div className="text-xs text-[#D1D5DB] mt-1">
              {lang === 'th' ? 'SAP, Oracle, และระบบภายในองค์กร' : 'Two-way bidirectional cloud & edge APIs'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

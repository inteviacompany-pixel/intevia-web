import React from 'react';
import { Language, NavView } from '../types/index.ts';
import { companyContacts } from '../data/content.ts';
import { 
  ArrowRight, 
  Radio, 
  Boxes, 
  Wrench, 
  Layers, 
  CheckCircle2, 
  Calculator, 
  Download, 
  Mail,
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { HeroSection } from './HeroSection.tsx';

interface HomeOnePageProps {
  lang: Language;
  onSelectView: (view: NavView) => void;
}

export const HomeOnePage: React.FC<HomeOnePageProps> = ({ lang, onSelectView }) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section (Concise & High-impact) */}
      <HeroSection
        lang={lang}
        onNavigate={(section) => {
          if (section === 'logistics-simulator') onSelectView('logistics');
          else if (section === 'roi-calculator') onSelectView('roi');
          else if (section === 'contact') onSelectView('contact');
          else onSelectView('rfid-tech');
        }}
      />

      {/* 2. Compact Core Solutions Hub (Directs to each dedicated page) */}
      <section className="py-14 bg-[#0B1420] border-b border-[#21354F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold tracking-wider text-[#1976FF] uppercase mb-1">
                SOLUTIONS OVERVIEW
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {lang === 'th' ? (
                  <>
                    เลือกดูบริการและโซลูชันของ <span className="text-[#1976FF]">INTEVIA</span>
                  </>
                ) : (
                  <>
                    Explore <span className="text-[#1976FF]">INTEVIA</span> Solutions & Services
                  </>
                )}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#D1D5DB] max-w-md">
              {lang === 'th'
                ? 'คลิกเลือกดูเนื้อหาเชิงลึกและระบบจำลองเสมือนจริงในแต่ละเมนู'
                : 'Click any category to access dedicated simulators, technical matrices, and full project cases.'}
            </p>
          </div>

          {/* About INTEVIA Teaser Banner */}
          <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-[#132238] via-[#0e1d30] to-[#132238] border border-[#21354F] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#1976FF]/15 border border-[#1976FF]/30 text-[11px] font-bold text-[#1976FF] tracking-wider uppercase">
                {lang === 'th' ? 'เกี่ยวกับเรา' : 'ABOUT INTEVIA'}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {lang === 'th' ? 'สร้างคุณค่า เชื่อมโยงระบบ (Creating value Connecting systems)' : 'Creating value Connecting systems'}
              </h3>
              <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                {lang === 'th'
                  ? 'INTEVIA คือทีมวิศวกรและผู้เชี่ยวชาญด้าน RFID, IoT และระบบอัตโนมัติที่ทำงานคลุกคลีใกล้ชิดกับหน้างานจริง (Real Shop Floor)'
                  : 'INTEVIA is a team of engineers and specialists in RFID, IoT and automation who work close to the real shop floor.'}
              </p>
            </div>
            <button
              onClick={() => onSelectView('about')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1976FF] hover:bg-[#1565D8] text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-[#1976FF]/20 cursor-pointer shrink-0"
            >
              <span>{lang === 'th' ? 'ทำความรู้จักเรา & ขั้นตอนการทำงาน' : 'Our Story & How We Work'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Compact 5-Grid Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* 1. RFID & IoT */}
            <div className="bg-[#132238] rounded-xl p-6 border border-[#21354F] hover:border-[#1976FF] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-[#21354F] flex items-center justify-center text-[#1976FF] group-hover:bg-[#1976FF] group-hover:text-white transition-colors">
                    <Radio className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono-numbers text-[#1976FF]">LF / HF / UHF / NFC</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#1976FF] transition-colors">
                  {lang === 'th' ? 'เทคโนโลยี RFID & IoT Devices' : 'RFID & IoT Technologies'}
                </h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-4">
                  {lang === 'th'
                    ? 'ตารางสเปกคลื่นความถี่ครบวงจรทั้ง LF, HF/NFC และ UHF พร้อมภาพฮาร์ดแวร์จริง และสถาปัตยกรรม From Tag to Business'
                    : 'Spectrum matrix covering LF, HF/NFC, and long-range UHF with industrial tags and end-to-end data architecture.'}
                </p>
              </div>

              <button
                onClick={() => onSelectView('rfid-tech')}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-xs font-semibold text-white group-hover:border-[#1976FF] transition-colors cursor-pointer"
              >
                <span>{lang === 'th' ? 'ดูรายละเอียด RFID & IoT' : 'Explore RFID Tech & Specs'}</span>
                <ChevronRight className="w-4 h-4 text-[#1976FF]" />
              </button>
            </div>

            {/* 2. Logistics & SCM */}
            <div className="bg-[#132238] rounded-xl p-6 border border-[#21354F] hover:border-[#1976FF] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-[#21354F] flex items-center justify-center text-[#1976FF] group-hover:bg-[#1976FF] group-hover:text-white transition-colors">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono-numbers text-emerald-400">LIVE SIMULATOR</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#1976FF] transition-colors">
                  {lang === 'th' ? 'ระบบคลังสินค้า & Supply Chain' : 'Logistics & Supply Chain'}
                </h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-4">
                  {lang === 'th'
                    ? 'ระบบจำลองเสมือนจริง: Warehouse Pallet Heatmap, เสาประตูสแกนความเร็วสูง 300 ซม. และจัดคิวซัพพลายเออร์พร้อมป้ายไฟ LED'
                    : 'Interactive simulator: warehouse pallet heatmap, 300cm bulk gate scanner, and supplier queue dashboard.'}
                </p>
              </div>

              <button
                onClick={() => onSelectView('logistics')}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-xs font-semibold text-white group-hover:border-[#1976FF] transition-colors cursor-pointer"
              >
                <span>{lang === 'th' ? 'เปิดระบบจำลองคลังสินค้า' : 'Open Logistics Simulator'}</span>
                <ChevronRight className="w-4 h-4 text-[#1976FF]" />
              </button>
            </div>

            {/* 3. Engineering Solutions */}
            <div className="bg-[#132238] rounded-xl p-6 border border-[#21354F] hover:border-[#1976FF] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-[#21354F] flex items-center justify-center text-[#1976FF] group-hover:bg-[#1976FF] group-hover:text-white transition-colors">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono-numbers text-[#1976FF]">IMPROVEMENT & PRODUCTIVITY</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#1976FF] transition-colors">
                  {lang === 'th' ? 'งานด้านวิศวกรรม (Engineering)' : 'Engineering Solutions'}
                </h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-4">
                  {lang === 'th'
                    ? 'มุ่งเน้นการปรับปรุงและเพิ่มผลผลิต (Improvement & Productivity): Work Study, วางผังโรงงาน (Plant Design) และผสานข้อมูล 8 แผนก'
                    : 'Focusing on Improvement & Productivity: Time & motion studies, plant layout optimization, and unified workflow integration.'}
                </p>
              </div>

              <button
                onClick={() => onSelectView('engineering')}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-xs font-semibold text-white group-hover:border-[#1976FF] transition-colors cursor-pointer"
              >
                <span>{lang === 'th' ? 'ดูรายละเอียดงานด้านวิศวกรรม' : 'View Engineering Solutions'}</span>
                <ChevronRight className="w-4 h-4 text-[#1976FF]" />
              </button>
            </div>

            {/* 4. Projects & Case Studies */}
            <div className="bg-[#132238] rounded-xl p-6 border border-[#21354F] hover:border-[#1976FF] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-[#21354F] flex items-center justify-center text-[#1976FF] group-hover:bg-[#1976FF] group-hover:text-white transition-colors">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono-numbers text-[#1976FF]">6 CASE STUDIES</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#1976FF] transition-colors">
                  {lang === 'th' ? 'ผลงานโครงการจริง (Projects)' : 'Proven Projects & Cases'}
                </h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-4">
                  {lang === 'th'
                    ? 'กรณีศึกษาจริง 6 โครงการ: ตรวจสอบของแท้ NFC, ติดตามพาเลท, สั่งอาหารโรงพยาบาล, เสาสแกน 300 ซม., จัดคิวรถ และแท็กเครื่องมือ IP67'
                    : '6 verified deployments: NFC anti-counterfeiting, pallet tracking, hospital nutrition, 300cm gates, and rugged tool tags.'}
                </p>
              </div>

              <button
                onClick={() => onSelectView('projects')}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-xs font-semibold text-white group-hover:border-[#1976FF] transition-colors cursor-pointer"
              >
                <span>{lang === 'th' ? 'ดูผลงานโครงการทั้งหมด' : 'View All 6 Case Studies'}</span>
                <ChevronRight className="w-4 h-4 text-[#1976FF]" />
              </button>
            </div>

            {/* 5. ROI Feasibility Calculator */}
            <div className="bg-[#132238] rounded-xl p-6 border border-[#21354F] hover:border-[#1976FF] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-[#21354F] flex items-center justify-center text-[#1976FF] group-hover:bg-[#1976FF] group-hover:text-white transition-colors">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono-numbers text-emerald-400">FINANCIAL ROI</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#1976FF] transition-colors">
                  {lang === 'th' ? 'คำนวณความคุ้มค่า (ROI Calculator)' : 'ROI Feasibility Estimator'}
                </h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-4">
                  {lang === 'th'
                    ? 'เครื่องมือประเมินจำนวนชั่วโมงที่ประหยัดได้ต่อปี การลดต้นทุนแรงงาน และระยะเวลาคืนทุน (Payback Months) สำหรับคลังสินค้า'
                    : 'Model estimating labor hours saved annually, count cycle acceleration, and projected payback timeline.'}
                </p>
              </div>

              <button
                onClick={() => onSelectView('roi')}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-xs font-semibold text-white group-hover:border-[#1976FF] transition-colors cursor-pointer"
              >
                <span>{lang === 'th' ? 'เปิดเครื่องมือคำนวณ ROI' : 'Launch ROI Calculator'}</span>
                <ChevronRight className="w-4 h-4 text-[#1976FF]" />
              </button>
            </div>

            {/* 6. Contact & Company Profile Card */}
            <div className="bg-gradient-to-br from-[#132238] to-[#152a48] rounded-xl p-6 border border-[#1976FF]/50 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1976FF] flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono-numbers text-white">GET IN TOUCH</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {lang === 'th' ? 'ติดต่อและดาวน์โหลดโปรไฟล์' : 'Contact & Profile'}
                </h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-4">
                  {lang === 'th'
                    ? 'ปรึกษาทีมวิศวกร INTEVIA เพื่อนัดหมายสำรวจหน้างานจริง หรือดาวน์โหลดเอกสาร Company Profile ฉบับเต็ม 19 สไลด์'
                    : 'Consult with our engineering team for a physical site survey or download our full 19-slide company profile.'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectView('contact')}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#1976FF] hover:bg-[#1565D8] text-xs font-bold text-white text-center transition-colors cursor-pointer"
                >
                  {lang === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
                </button>
                <a
                  href={companyContacts.pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-[#0D1B2A] border border-[#21354F] hover:text-white text-xs text-[#D1D5DB] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Short Quick Action Strip */}
      <section className="py-10 bg-[#061222] border-b border-[#21354F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-base sm:text-lg font-bold text-white">
                {lang === 'th'
                  ? 'INTEVIA · INTELLIGENCE · STRATEGY · ACTION'
                  : 'INTEVIA · INTELLIGENCE · STRATEGY · ACTION'}
              </div>
              <div className="text-xs text-[#D1D5DB] mt-0.5">
                Email: <a href={`mailto:${companyContacts.email}`} className="text-[#1976FF] hover:underline">{companyContacts.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelectView('contact')}
                className="px-5 py-2.5 bg-[#1976FF] hover:bg-[#1565D8] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'th' ? 'ส่งข้อความปรึกษาเรา' : 'Consult an Expert'}
              </button>
              <button
                onClick={() => onSelectView('roi')}
                className="px-4 py-2.5 bg-[#132238] hover:bg-[#1a2f4c] border border-[#21354F] text-[#D1D5DB] hover:text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'th' ? 'คำนวณ ROI' : 'ROI Calculator'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

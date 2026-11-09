import React, { useState } from 'react';
import { Language } from '../types/index.ts';
import { rfidTechSpecs } from '../data/content.ts';
import { Radio, Smartphone, Layers, CheckCircle, ArrowRight, ShieldCheck, Zap, Server, ChevronRight } from 'lucide-react';

interface RfidTechProps {
  lang: Language;
  onBackToHome?: () => void;
}

export const RfidTechSection: React.FC<RfidTechProps> = ({ lang, onBackToHome }) => {
  const [selectedFreq, setSelectedFreq] = useState<'LF' | 'HF / NFC' | 'UHF'>('UHF');

  const architectureSteps = [
    {
      step: '01',
      titleTh: 'ระบุตัวตน (IDENTIFY)',
      titleEn: 'IDENTIFY',
      subTh: 'RFID Tags & Smart Labels',
      subEn: 'RFID Tags & Smart Labels',
      descTh: 'ติดแท็ก RFID / NFC ที่พาเลท ลังสินค้า กล่อง หรือเครื่องมือ บันทึกรหัสประจำตัว (Unique ID / EPC)',
      descEn: 'Affix RFID/NFC tags to pallets, cartons, containers, or assets storing unique digital identities.',
    },
    {
      step: '02',
      titleTh: 'ตรวจจับข้อมูล (CAPTURE)',
      titleEn: 'CAPTURE',
      subTh: 'Readers & Antennas',
      subEn: 'Readers & Antennas',
      descTh: 'เครื่องอ่าน Fixed Gate, เสาอากาศ Antenna หรือ Handheld สแกนรับสัญญาณคลื่นวิทยุแม่นยำในเสี้ยววินาที',
      descEn: 'Fixed portal gates, overhead antennas, or handheld readers capture tag signals accurately in milliseconds.',
    },
    {
      step: '03',
      titleTh: 'ประมวลผล (PROCESS)',
      titleEn: 'PROCESS',
      subTh: 'Edge & RFID Application',
      subEn: 'Edge & RFID Application',
      descTh: 'กรองข้อมูล คัดแยกความถี่ที่ซ้ำซ้อน และเปลี่ยนสัญญาณดิบเป็นข้อมูลสต็อกและสถานะพร้อมใช้งาน',
      descEn: 'Filters redundant data packets, validates read cycles, and transforms raw telemetry into actionable inventory events.',
    },
    {
      step: '04',
      titleTh: 'เชื่อมต่อระบบ (INTEGRATE)',
      titleEn: 'INTEGRATE',
      subTh: 'System Integration & API',
      subEn: 'System Integration & API',
      descTh: 'ส่งผ่านข้อมูลอย่างปลอดภัยเข้าสู่ฐานข้อมูล Middleware และระบบ ERP / WMS ขององค์กร',
      descEn: 'Transmits verified events securely via REST APIs or WebSockets into corporate WMS and ERP databases.',
    },
    {
      step: '05',
      titleTh: 'ตัดสินใจและดำเนินการ (ACT)',
      titleEn: 'ACT',
      subTh: 'Enterprise WMS / ERP',
      subEn: 'Enterprise WMS / ERP',
      descTh: 'อัปเดตสต็อกอัตโนมัติ สั่งปล่อยสินค้า และแสดงผลบนแดชบอร์ดเพื่อการตัดสินใจที่รวดเร็ว',
      descEn: 'Automated stock commitment, instant gate clearance, and executive dashboard analytics driving growth.',
    },
  ];

  const nfcBenefits = [
    {
      titleTh: 'เรียบง่าย (Simple)',
      titleEn: 'Simple & Intuitive',
      descTh: 'เพียงแตะ (Tap) ก็ระบุตัวตนและเชื่อมต่อได้ทันที ไม่ซับซ้อน',
      descEn: 'Tap, identify, and connect instantly. One single tap identifies products and assets.',
    },
    {
      titleTh: 'ไร้สัมผัส (Contactless)',
      titleEn: 'True Contactless',
      descTh: 'ไม่ใช้สาย ไม่ต้องกรอกข้อมูลด้วยมือ ช่วยลดเวลาและขจัดความผิดพลาด',
      descEn: 'Eliminates manual barcode typing and physical wire connections.',
    },
    {
      titleTh: 'ปลอดภัยสูง (Secure)',
      titleEn: 'Cryptographically Secure',
      descTh: 'สื่อสารระยะใกล้ เข้ารหัสข้อมูล ป้องกันการดักจับสัญญาณและของลอกเลียนแบบ',
      descEn: 'Short-range controlled interaction with anti-cloning cryptographic keys.',
    },
    {
      titleTh: 'หลากหลายครอบคลุม (Versatile)',
      titleEn: 'Versatile Applications',
      descTh: 'ใช้ได้ทั้งกับผลิตภัณฑ์ สินทรัพย์ และคน (บัตรพนักงาน, บรรจุภัณฑ์, เครื่องจักร)',
      descEn: 'Spans authenticating products, tracking equipment, and patient hospital bands.',
    },
    {
      titleTh: 'เชื่อมต่อง่าย (Integratable)',
      titleEn: 'Integrates Everywhere',
      descTh: 'เชื่อมต่อข้อมูล NFC เข้าสู่ ERP, CRM, IoT Cloud และระบบเดิมได้ทันที',
      descEn: 'Seamlessly pipes NFC event data into ERP, CRM, and cloud endpoints.',
    },
    {
      titleTh: 'ติดตั้งและใช้อุปกรณ์เดิมได้ (Easy Deploy)',
      titleEn: 'Zero Special Reader Barrier',
      descTh: 'สมาร์ตโฟนทั่วไปทั้ง iOS และ Android สามารถใช้เป็นเครื่องอ่าน NFC ได้ทันที',
      descEn: 'Modern iOS and Android smartphones act as powerful NFC readers out of the box.',
    },
  ];

  return (
    <section id="rfid-tech" className="py-16 lg:py-20 bg-[#0B1420] border-b border-[#21354F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {onBackToHome && (
          <div className="mb-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs text-[#1976FF] hover:underline cursor-pointer"
            >
              <span>←</span>
              <span>{lang === 'th' ? 'กลับสู่หน้าแรก' : 'Back to Home'}</span>
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#1976FF] uppercase mb-2">
            {lang === 'th' ? 'คลื่นความถี่และสถาปัตยกรรมระบบ' : 'RFID & IOT ARCHITECTURE'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'th' ? (
              <>
                เทคโนโลยี <span className="text-[#1976FF]">RFID</span> ที่ออกแบบเฉพาะสำหรับทุกโจทย์อุตสาหกรรม
              </>
            ) : (
              <>
                Engineered <span className="text-[#1976FF]">RFID Technology</span> for Every Industrial Environment
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D1D5DB]">
            {lang === 'th'
              ? 'การเลือกคลื่นความถี่ที่เหมาะสมคือหัวใจของความสำเร็จ INTEVIA ให้บริการคลื่นความถี่ครบทุกระดับ ทั้ง LF, HF/NFC และ UHF พร้อมฮาร์ดแวร์อุตสาหกรรมมาตรฐานระดับโลก'
              : 'Selecting the exact RFID frequency determines real-world operational success. INTEVIA provides deep expertise across LF, HF/NFC, and UHF domains.'}
          </p>
        </div>

        {/* Part 1: Interactive Frequency Matrix & Hardware Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left: Frequency Tabs & Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Interactive Segmented Selector */}
              <div className="flex p-1.5 bg-[#132238] rounded-xl border border-[#21354F] mb-6">
                {rfidTechSpecs.map((spec) => (
                  <button
                    key={spec.type}
                    onClick={() => setSelectedFreq(spec.type as any)}
                    className={`flex-1 py-3 px-4 text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      selectedFreq === spec.type
                        ? 'bg-[#1976FF] text-white shadow-md'
                        : 'text-[#D1D5DB] hover:text-white hover:bg-[#0D1B2A]/60'
                    }`}
                  >
                    <span>{spec.type}</span>
                  </button>
                ))}
              </div>

              {/* Selected Frequency Detail Card */}
              {rfidTechSpecs
                .filter((s) => s.type === selectedFreq)
                .map((spec) => (
                  <div
                    key={spec.type}
                    className="bg-[#132238] rounded-xl p-7 border border-[#21354F]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#21354F] mb-6">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#1976FF] font-semibold">
                          {spec.fullName}
                        </span>
                        <h3 className="text-2xl font-extrabold text-white">
                          {spec.type}
                        </h3>
                      </div>
                      <div className="bg-[#0D1B2A] px-3.5 py-1.5 rounded-md border border-[#21354F] text-xs font-mono-numbers text-[#1976FF]">
                        {spec.frequency}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-xs text-[#6B7280] font-semibold uppercase mb-1">
                          {lang === 'th' ? 'ระยะการอ่านสัญญาณ (Read Range)' : 'Read Range'}
                        </div>
                        <div className="text-base font-semibold text-white">
                          {lang === 'th' ? spec.rangeTh : spec.rangeEn}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-[#6B7280] font-semibold uppercase mb-1">
                          {lang === 'th' ? 'การใช้งานที่เหมาะสมที่สุด (Best For)' : 'Ideal Application'}
                        </div>
                        <div className="text-sm text-[#D1D5DB] leading-relaxed">
                          {lang === 'th' ? spec.bestForTh : spec.bestForEn}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-[#21354F]">
                      <div className="text-xs text-[#6B7280] font-semibold uppercase mb-2">
                        {lang === 'th' ? 'จุดเด่นเชิงเทคนิค' : 'Key Advantages'}
                      </div>
                      {(lang === 'th' ? spec.featuresTh : spec.featuresEn).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-[#D1D5DB]">
                          <CheckCircle className="w-4 h-4 text-[#1976FF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Right: Hardware Showcase Image with Labels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#132238] rounded-xl overflow-hidden border border-[#21354F] h-full flex flex-col">
              <div className="p-4 border-b border-[#21354F] flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  {lang === 'th' ? 'ฮาร์ดแวร์และแท็กอุตสาหกรรมจริง' : 'Physical Industrial Tag Formats'}
                </span>
                <span className="text-xs text-[#1976FF] font-mono-numbers">INTEVIA HARDWARE</span>
              </div>
              <div className="relative flex-1 min-h-[300px]">
                <img
                  src="/src/assets/images/smart_rfid_hardware_tags_1793849675572.jpg"
                  alt="INTEVIA Industrial RFID and NFC Tags"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#0D1B2A] text-xs text-[#D1D5DB] border-t border-[#21354F]">
                {lang === 'th'
                  ? 'รองรับทั้ง On-Metal UHF Tags สำหรับติดบนโลหะ, Flexible RFID Smart Labels สำหรับบรรจุภัณฑ์ และ Rugged IP67 Tool Tags สำหรับเครื่องมือหนัก'
                  : 'Featuring specialized On-Metal UHF tags, flexible adhesive RFID packaging inlays, and IP67 impact-proof power tool tags.'}
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: "FROM TAG TO BUSINESS" Architecture Flow (Slide 5) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-semibold tracking-wider text-[#1976FF] uppercase mb-1">
              FROM TAG TO BUSINESS
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'th' ? 'สถาปัตยกรรมระบบ RFID ของ INTEVIA' : 'INTEVIA End-to-End RFID Architecture'}
            </h3>
            <p className="text-sm text-[#D1D5DB] mt-2">
              {lang === 'th'
                ? 'เปลี่ยนสัญญาณคลื่นวิทยุจากแท็ก สู่ข้อมูลเชิงลึกทางธุรกิจที่สร้างมูลค่าจริง'
                : 'Turning physical radio waves into real-time business insights that drive enterprise value.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {architectureSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#132238] rounded-xl p-5 border border-[#21354F] relative group hover:border-[#1976FF] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-extrabold text-[#1976FF] font-mono-numbers">
                    {step.step}
                  </span>
                  {idx < architectureSteps.length - 1 && (
                    <ChevronRight className="hidden lg:block w-4 h-4 text-[#6B7280] group-hover:text-[#1976FF] transition-colors" />
                  )}
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {lang === 'th' ? step.titleTh : step.titleEn}
                </div>
                <div className="text-xs font-medium text-[#1976FF] mb-2">
                  {lang === 'th' ? step.subTh : step.subEn}
                </div>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  {lang === 'th' ? step.descTh : step.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: WHY NFC? (Slide 4) */}
        <div className="bg-[#132238] rounded-2xl p-8 sm:p-10 border border-[#21354F]">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-semibold tracking-wider text-[#1976FF] uppercase mb-1">
              NEAR FIELD COMMUNICATION
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'th' ? 'ทำไมต้อง NFC (Near Field Communication)?' : 'Why Near Field Communication (NFC)?'}
            </h3>
            <p className="text-sm sm:text-base text-[#D1D5DB] mt-2">
              {lang === 'th'
                ? 'NFC มอบการปฏิสัมพันธ์ที่ง่ายดายแต่ทรงพลัง แตะเพียงครั้งเดียวเพื่อยืนยันของแท้ บันทึกประวัติ หรือเชื่อมต่อกับสมาร์ตโฟนได้โดยไม่ต้องใช้อุปกรณ์พิเศษ'
                : 'Simple interaction, powerful enterprise applications. Just a single tap unlocks secure, contactless interactions across products, tools, and patient care.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nfcBenefits.map((item, idx) => (
              <div key={idx} className="bg-[#0D1B2A] p-5 rounded-lg border border-[#21354F]">
                <div className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1976FF]"></span>
                  <span>{lang === 'th' ? item.titleTh : item.titleEn}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  {lang === 'th' ? item.descTh : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

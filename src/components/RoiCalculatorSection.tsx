import React, { useState } from 'react';
import { Language } from '../types/index.ts';
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';

interface RoiCalculatorProps {
  lang: Language;
  onNavigateContact: () => void;
  onBackToHome?: () => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorProps> = ({ 
  lang, 
  onNavigateContact,
  onBackToHome 
}) => {
  const [pallets, setPallets] = useState<number>(5000);
  const [countFrequency, setCountFrequency] = useState<number>(2); // 2 = Bi-weekly (24 times/year)
  const [operators, setOperators] = useState<number>(4);
  const [hourlyWage, setHourlyWage] = useState<number>(150); // THB per hour

  // Math Calculations:
  // Manual: ~1.5 minutes per pallet/carton barcode verification
  const manualHoursPerCount = (pallets * 0.02) / operators; // e.g. 5000 * 0.02 = 100 hrs total / 4 = 25 hrs per op
  const annualCounts = countFrequency === 1 ? 12 : countFrequency === 2 ? 24 : 52;
  const totalManualHoursYear = manualHoursPerCount * operators * annualCounts;
  
  // RFID Bulk Scanning takes ~1.5 seconds per pallet batch (approx 85-90% faster)
  const totalRfidHoursYear = Math.round(totalManualHoursYear * 0.12);
  const annualHoursSaved = Math.round(totalManualHoursYear - totalRfidHoursYear);

  // Direct Labor Savings:
  const directLaborSavings = annualHoursSaved * hourlyWage;

  // Inventory discrepancy / loss reduction (est. 1.2% inventory value saved per year)
  const estimatedErrorSavings = Math.round(pallets * 45); // estimated 45 THB saved per pallet in mismatch prevention
  const totalAnnualBenefit = directLaborSavings + estimatedErrorSavings;

  // Payback estimation (average hardware/tag rollout vs annual savings)
  const estimatedCapex = pallets * 35 + 180000; // rough system estimate
  const paybackMonths = Math.max(4, Math.round((estimatedCapex / totalAnnualBenefit) * 12));

  return (
    <section id="roi-calculator" className="py-16 lg:py-20 bg-[#0B1420] border-b border-[#21354F]">
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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#1976FF] uppercase mb-2">
            {lang === 'th' ? 'เครื่องมือคำนวณความคุ้มค่าการลงทุน' : 'ROI FEASIBILITY ESTIMATOR'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'th' ? (
              <>
                คำนวณผลตอบแทนการลงทุน <span className="text-[#1976FF]">RFID & Warehouse Automation</span>
              </>
            ) : (
              <>
                Calculate Your <span className="text-[#1976FF]">RFID Logistics ROI</span> & Payback
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D1D5DB]">
            {lang === 'th'
              ? 'ประเมินชั่วโมงการทำงานที่ประหยัดได้ และมูลค่าการลดข้อผิดพลาดในการตรวจนับสต็อกเมื่อเปลี่ยนมาใช้ระบบ RFID ของ INTEVIA'
              : 'Estimate labor hours saved, count cycle acceleration, and projected payback timeline for your warehouse operations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Sliders & Inputs */}
          <div className="lg:col-span-7 bg-[#132238] rounded-2xl p-6 sm:p-8 border border-[#21354F] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-[#21354F] text-white font-bold text-base">
                <Calculator className="w-5 h-5 text-[#1976FF]" />
                <span>{lang === 'th' ? 'ข้อมูลคลังสินค้าของคุณ' : 'Warehouse Operational Inputs'}</span>
              </div>

              {/* Slider 1: Number of Pallets / Units */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#D1D5DB]">
                    {lang === 'th' ? 'จำนวนพาเลท / สต็อกสินค้าทั้งหมด:' : 'Total Pallets / Managed SKUs:'}
                  </span>
                  <span className="font-mono-numbers font-bold text-white text-base">
                    {pallets.toLocaleString()} {lang === 'th' ? 'พาเลท' : 'pallets'}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="500"
                  value={pallets}
                  onChange={(e) => setPallets(Number(e.target.value))}
                  className="w-full accent-[#1976FF] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#6B7280] mt-1 font-mono-numbers">
                  <span>500</span>
                  <span>10,000</span>
                  <span>25,000+</span>
                </div>
              </div>

              {/* Selector: Count Frequency */}
              <div>
                <label className="block text-sm text-[#D1D5DB] mb-2">
                  {lang === 'th' ? 'ความถี่ในการตรวจนับสต็อก (Cycle Counting):' : 'Stock Audit Frequency:'}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: 1, labelTh: 'เดือนละ 1 ครั้ง', labelEn: 'Monthly (12x/yr)' },
                    { val: 2, labelTh: 'ทุก 2 สัปดาห์', labelEn: 'Bi-Weekly (24x/yr)' },
                    { val: 3, labelTh: 'ทุกสัปดาห์', labelEn: 'Weekly (52x/yr)' },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setCountFrequency(opt.val)}
                      className={`p-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        countFrequency === opt.val
                          ? 'bg-[#1976FF] text-white border-[#1976FF] shadow-xs'
                          : 'bg-[#0D1B2A] text-[#D1D5DB] border-[#21354F] hover:border-[#1976FF]/40'
                      }`}
                    >
                      {lang === 'th' ? opt.labelTh : opt.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 2: Number of Operators */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#D1D5DB]">
                    {lang === 'th' ? 'จำนวนพนักงานที่ใช้นับสินค้า:' : 'Warehouse Audit Staff (Headcount):'}
                  </span>
                  <span className="font-mono-numbers font-bold text-white text-base">
                    {operators} {lang === 'th' ? 'คน' : 'people'}
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="15"
                  step="1"
                  value={operators}
                  onChange={(e) => setOperators(Number(e.target.value))}
                  className="w-full accent-[#1976FF] cursor-pointer"
                />
              </div>

              {/* Slider 3: Hourly Wage Rate */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#D1D5DB]">
                    {lang === 'th' ? 'ค่าจ้างแรงงานเฉลี่ยต่อชั่วโมง:' : 'Average Hourly Labor Cost:'}
                  </span>
                  <span className="font-mono-numbers font-bold text-white text-base">
                    {hourlyWage} ฿/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="400"
                  step="10"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(Number(e.target.value))}
                  className="w-full accent-[#1976FF] cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-[#21354F] text-xs text-[#D1D5DB] flex items-center gap-2 mt-6">
              <ShieldCheck className="w-4 h-4 text-[#1976FF] shrink-0" />
              <span>
                {lang === 'th'
                  ? 'สูตรคำนวณอ้างอิงจากมาตรฐานเวลาตรวจนับจริงของลูกค้าคลังสินค้า INTEVIA'
                  : 'Calculations benchmarked against INTEVIA live warehouse deployment metrics.'}
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Results Card */}
          <div className="lg:col-span-5 bg-[#132238] rounded-2xl p-6 sm:p-8 border border-[#1976FF]/40 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#21354F] mb-6">
                <span className="text-xs uppercase text-[#1976FF] font-semibold">
                  ESTIMATED SAVINGS
                </span>
                <span className="text-xs text-[#D1D5DB] font-mono-numbers">
                  ~{paybackMonths} {lang === 'th' ? 'เดือนคืนทุน' : 'mo Payback'}
                </span>
              </div>

              <div className="space-y-5 mb-8">
                {/* Result 1: Hours Saved */}
                <div className="bg-[#0D1B2A] p-4 rounded-xl border border-[#21354F]">
                  <div className="flex items-center gap-2 text-xs text-[#D1D5DB] mb-1">
                    <Clock className="w-4 h-4 text-[#1976FF]" />
                    <span>{lang === 'th' ? 'ประหยัดเวลาการตรวจนับต่อปี' : 'Audit Hours Saved Annually'}</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white font-mono-numbers">
                    {annualHoursSaved.toLocaleString()} <span className="text-base font-normal text-[#D1D5DB]">{lang === 'th' ? 'ชั่วโมง' : 'hours'}</span>
                  </div>
                </div>

                {/* Result 2: Direct Labor Savings */}
                <div className="bg-[#0D1B2A] p-4 rounded-xl border border-[#21354F]">
                  <div className="flex items-center gap-2 text-xs text-[#D1D5DB] mb-1">
                    <DollarSign className="w-4 h-4 text-[#1976FF]" />
                    <span>{lang === 'th' ? 'ประหยัดค่าแรงตรวจนับต่อปี' : 'Labor Cost Savings Annually'}</span>
                  </div>
                  <div className="text-3xl font-extrabold text-[#1976FF] font-mono-numbers">
                    ฿{directLaborSavings.toLocaleString()}
                  </div>
                </div>

                {/* Result 3: Total Annual Business Benefit */}
                <div className="bg-[#0D1B2A] p-4 rounded-xl border border-emerald-800/60">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 mb-1">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>{lang === 'th' ? 'ผลประโยชน์รวมต่อปี (ค่าแรง + ลดของหาย)' : 'Total Annual Benefit (Labor + Loss Reduction)'}</span>
                  </div>
                  <div className="text-3xl font-extrabold text-emerald-400 font-mono-numbers">
                    ฿{totalAnnualBenefit.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onNavigateContact}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-[#1976FF] hover:bg-[#1565D8] rounded-lg transition-colors shadow-md cursor-pointer"
            >
              <span>{lang === 'th' ? 'ขอใบเสนอราคาและรายงานประเมินคลังสินค้า' : 'Request Official Feasibility Study'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

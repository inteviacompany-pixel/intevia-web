import React, { useState } from 'react';
import { Language } from '../types/index.ts';
import { iePillarsData } from '../data/content.ts';
import { 
  GitBranch, 
  Clock, 
  Factory, 
  Workflow, 
  CheckCircle2, 
  ArrowRight,
  FileSpreadsheet,
  Activity,
  ArrowLeft,
  TrendingUp,
  Target
} from 'lucide-react';

interface IndustrialEngineeringProps {
  lang: Language;
  onBackToHome?: () => void;
}

export const IndustrialEngineeringSection: React.FC<IndustrialEngineeringProps> = ({ 
  lang,
  onBackToHome 
}) => {
  const [activePillarId, setActivePillarId] = useState<string>('process-work-study');

  const selectedPillar = iePillarsData.find((p) => p.id === activePillarId) || iePillarsData[0];

  const dmaicSteps = [
    { num: '01', titleTh: 'UNDERSTAND', titleEn: 'UNDERSTAND', descTh: 'ทำความเข้าใจสภาพปัญหาและเป้าหมาย', descEn: 'Define scope, baseline, and strategic objectives' },
    { num: '02', titleTh: 'MEASURE', titleEn: 'MEASURE', descTh: 'จับเวลา เก็บข้อมูลเชิงปริมาณหน้างานจริง', descEn: 'Collect empirical time studies and flow metrics' },
    { num: '03', titleTh: 'ANALYZE', titleEn: 'ANALYZE', descTh: 'วิเคราะห์คอขวดและจุดสูญเปล่า (Waste)', descEn: 'Identify bottlenecks, idle time, and constraints' },
    { num: '04', titleTh: 'IMPROVE', titleEn: 'IMPROVE', descTh: 'ออกแบบโฟลว์ใหม่และปรับปรุงการทำงาน', descEn: 'Redesign layouts, standard work, and automation' },
    { num: '05', titleTh: 'CONTROL', titleEn: 'CONTROL', descTh: 'วางระบบควบคุมและติดตามผลด้วย KPI', descEn: 'Sustain gains via SOPs and real-time dashboards' },
  ];

  const workflowDepartments = [
    { id: '1', nameTh: 'ลูกค้า (Customer)', nameEn: 'Customer', descTh: 'รับความต้องการ', descEn: 'Demand intake' },
    { id: '2', nameTh: 'ฝ่ายขาย (Sales)', nameEn: 'Sales', descTh: 'เปิดใบสั่งขาย', descEn: 'Order booking' },
    { id: '3', nameTh: 'วางแผน (Planning)', nameEn: 'Planning', descTh: 'จัดตารางการผลิต', descEn: 'Master schedule' },
    { id: '4', nameTh: 'จัดซื้อ (Purchasing)', nameEn: 'Purchasing', descTh: 'สั่งวัตถุดิบตรงเวลา', descEn: 'Procure materials' },
    { id: '5', nameTh: 'ฝ่ายผลิต (Production)', nameEn: 'Production', descTh: 'ผลิตตามมาตรฐาน', descEn: 'Assembly execution' },
    { id: '6', nameTh: 'คลังสินค้า (Warehouse)', nameEn: 'Warehouse', descTh: 'จัดเก็บด้วย RFID', descEn: 'RFID storage' },
    { id: '7', nameTh: 'จัดส่ง (Delivery)', nameEn: 'Delivery', descTh: 'ส่งมอบตรงเวลา', descEn: 'Dispatch logistics' },
    { id: '8', nameTh: 'การเงิน (Finance)', nameEn: 'Finance', descTh: 'วางบิลตัดสต็อก', descEn: 'Invoicing & ledger' },
  ];

  return (
    <section id="engineering" className="py-16 lg:py-20 bg-[#0D1B2A] border-b border-[#21354F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back to Home if navigated as page */}
        {onBackToHome && (
          <div className="mb-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs text-[#1976FF] hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? 'กลับสู่หน้าแรก' : 'Back to Home'}</span>
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#1976FF] uppercase mb-2 flex items-center gap-2">
            <Target className="w-4 h-4 text-[#1976FF]" />
            <span>
              {lang === 'th'
                ? 'งานด้านวิศวกรรม (ENGINEERING · IMPROVEMENT & PRODUCTIVITY)'
                : 'ENGINEERING SOLUTIONS · IMPROVEMENT & PRODUCTIVITY'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'th' ? (
              <>
                บริการ <span className="text-[#1976FF]">งานด้านวิศวกรรม</span> เพิ่มผลผลิตและปรับปรุงกระบวนการ
              </>
            ) : (
              <>
                Operational <span className="text-[#1976FF]">Engineering Solutions</span>: Improvement & Productivity
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D1D5DB] leading-relaxed">
            {lang === 'th'
              ? 'เราช่วยองค์กรเพิ่มขีดความสามารถในการแข่งขันและผลผลิต (Productivity) สูงสุด ตั้งแต่วิเคราะห์การทำงาน (Work Study) ลดความสูญเปล่า (Waste) ออกแบบผังโรงงาน (Plant Design) จนถึงเชื่อมโยงข้อมูลทุกแผนกเป็นโฟลว์เดียว'
              : 'Empowering organizations to systematically elevate productivity and operational flow through rigorous time studies, constraint elimination, plant layout engineering, and cross-department integration.'}
          </p>
        </div>

        {/* Core Value Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            {
              titleTh: 'Process Improvement',
              titleEn: 'Process Improvement',
              descTh: 'ลดขั้นตอนซ้ำซ้อน ขจัดความสูญเปล่าตามหลัก Lean และ Kaizen',
              descEn: 'Eliminate non-value-added activities via Lean & Kaizen',
            },
            {
              titleTh: 'Productivity Optimization',
              titleEn: 'Productivity Optimization',
              descTh: 'เพิ่ม Output ต่อชั่วโมงการทำงาน และเพิ่มขีดความสามารถการผลิต',
              descEn: 'Maximize output per labor hour and resource utilization',
            },
            {
              titleTh: 'Plant Design & Layout',
              titleEn: 'Plant Design & Layout',
              descTh: 'จัดวางสายการผลิตและเส้นทางการไหลของวัตถุดิบให้มีระยะสั้นที่สุด',
              descEn: 'Streamline shopfloor layout and internal logistics paths',
            },
            {
              titleTh: 'One Integrated Workflow',
              titleEn: 'One Integrated Workflow',
              descTh: 'เชื่อมโยงข้อมูลทุกแผนก (Sales $\\rightarrow$ Prod $\\rightarrow$ WH $\\rightarrow$ Finance)',
              descEn: 'Synchronize cross-functional pipelines into a unified data flow',
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#132238] p-4 rounded-xl border border-[#21354F]">
              <div className="text-sm font-bold text-white mb-1">{item.titleTh}</div>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                {lang === 'th' ? item.descTh : item.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Pillars Interactive Tabs & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Column: 4 Pillar Selector */}
          <div className="lg:col-span-5 space-y-3">
            {iePillarsData.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer ${
                  activePillarId === pillar.id
                    ? 'bg-[#132238] border-[#1976FF] shadow-sm'
                    : 'bg-[#0B1420] border-[#21354F] hover:border-[#1976FF]/40 text-[#D1D5DB]'
                }`}
              >
                <div className="text-sm sm:text-base font-bold text-white mb-1">
                  {lang === 'th' ? pillar.titleTh : pillar.titleEn}
                </div>
                <div className="text-xs text-[#D1D5DB] line-clamp-2">
                  {lang === 'th' ? pillar.descTh : pillar.descEn}
                </div>
              </button>
            ))}

            {/* Industrial Plant Operations Photo Card */}
            <div className="rounded-xl overflow-hidden border border-[#21354F] bg-[#132238] mt-6">
              <img
                src="/src/assets/images/industrial_operations_flow_1793849675235.jpg"
                alt="INTEVIA Engineering Team and Plant Operations"
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 text-xs text-[#D1D5DB] bg-[#0D1B2A]">
                {lang === 'th'
                  ? 'ทีมวิศวกร INTEVIA วิเคราะห์ข้อมูลหน้างานจริงและสร้างแบบจำลองการเพิ่มผลผลิต'
                  : 'INTEVIA engineering specialists analyzing live production metrics and simulation models'}
              </div>
            </div>
          </div>

          {/* Right Column: Active Pillar Details */}
          <div className="lg:col-span-7 bg-[#132238] rounded-2xl p-6 sm:p-8 border border-[#21354F]">
            <div className="border-b border-[#21354F] pb-4 mb-6">
              <div className="text-xs font-mono-numbers text-[#1976FF] font-semibold mb-1">
                ENGINEERING PILLAR DETAIL
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                {lang === 'th' ? selectedPillar.titleTh : selectedPillar.titleEn}
              </h3>
              <p className="text-sm text-[#D1D5DB] mt-2 leading-relaxed">
                {lang === 'th' ? selectedPillar.descTh : selectedPillar.descEn}
              </p>
            </div>

            {/* Scope of Work */}
            <div className="mb-6">
              <div className="text-xs font-bold uppercase text-white mb-3">
                {lang === 'th' ? 'ขอบเขตงานที่เราทำ (What We Do)' : 'Scope of Execution'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(lang === 'th' ? selectedPillar.scopeTh : selectedPillar.scopeEn).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#D1D5DB]">
                    <CheckCircle2 className="w-4 h-4 text-[#1976FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Deliverables */}
            <div className="bg-[#0D1B2A] rounded-xl p-5 border border-[#21354F] mb-6">
              <div className="text-xs font-bold uppercase text-white mb-3 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-[#1976FF]" />
                <span>{lang === 'th' ? 'ผลลัพธ์และสิ่งที่ส่งมอบ (Typical Deliverables)' : 'Typical Deliverables'}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(lang === 'th' ? selectedPillar.deliverablesTh : selectedPillar.deliverablesEn).map(
                  (del, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs text-[#D1D5DB] bg-[#132238] border border-[#21354F] rounded-md font-medium"
                    >
                      {del}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Business Impact Box */}
            <div className="p-4 rounded-xl bg-[#1976FF]/10 border border-[#1976FF]/40 text-xs sm:text-sm">
              <span className="font-bold text-white block mb-1">
                {lang === 'th' ? 'ผลตอบแทนทางธุรกิจ (Business Impact):' : 'Expected Business Impact:'}
              </span>
              <p className="text-[#D1D5DB]">
                {lang === 'th' ? selectedPillar.impactTh : selectedPillar.impactEn}
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: DMAIC Engineering Framework (How We Work) */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs font-semibold tracking-wider text-[#1976FF] uppercase mb-1">
              DMAIC METHODOLOGY
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {lang === 'th' ? 'ขั้นตอนการทำงานแบบวิศวกรรม (How We Work)' : 'Systematic Engineering Framework'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {dmaicSteps.map((s) => (
              <div key={s.num} className="bg-[#132238] p-4 rounded-xl border border-[#21354F] text-center">
                <div className="text-lg font-black text-[#1976FF] font-mono-numbers mb-1">
                  {s.num}
                </div>
                <div className="text-xs font-bold text-white mb-1">{s.titleEn}</div>
                <p className="text-[11px] text-[#D1D5DB] leading-relaxed">
                  {lang === 'th' ? s.descTh : s.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Company Integration Workflow (Slide 19) */}
        <div className="bg-[#132238] rounded-2xl p-6 sm:p-8 border border-[#21354F]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase text-[#1976FF] font-semibold">
                ONE INTEGRATED WORKFLOW
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {lang === 'th'
                  ? 'สร้างโฟลว์การทำงานที่เชื่อมต่อทุกแผนกทั่วทั้งองค์กร'
                  : 'Company Integration: One Flow For The Whole Organization'}
              </h3>
            </div>
            <span className="text-xs text-[#D1D5DB] bg-[#0D1B2A] px-3 py-1.5 rounded-lg border border-[#21354F] font-mono-numbers">
              Slide 19 Reference
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#D1D5DB] mb-6 leading-relaxed">
            {lang === 'th'
              ? 'ขจัดปัญหาไซโลข้อมูล (Information Silo) ด้วยการเชื่อมต่อกระบวนการตั้งแต่ลูกค้าสั่งซื้อ จนถึงการเงินวางบิลแบบเรียลไทม์ 100%'
              : 'Eliminate isolated information silos. Our solutions connect every link in the corporate chain in real time.'}
          </p>

          {/* 8-Department Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {workflowDepartments.map((dept) => (
              <div key={dept.id} className="bg-[#0D1B2A] p-3 rounded-lg border border-[#21354F] text-center">
                <span className="text-[10px] font-mono-numbers text-[#1976FF] block mb-1">
                  Step 0{dept.id}
                </span>
                <div className="text-xs font-bold text-white mb-1">
                  {lang === 'th' ? dept.nameTh : dept.nameEn}
                </div>
                <div className="text-[10px] text-[#D1D5DB]">
                  {lang === 'th' ? dept.descTh : dept.descEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Language, NavView } from '../types/index.ts';
import { 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle
} from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onSelectView: (view: NavView) => void;
  onBackToHome?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onSelectView,
  onBackToHome,
}) => {
  const principles = [
    {
      num: '01',
      titleEn: 'Close to the floor',
      titleTh: 'เริ่มต้นจากหน้างานจริง (Close to the floor)',
      descEn: 'Every solution starts with the site, not a brochure.',
      descTh: 'ทุกโซลูชันเริ่มต้นจากการทำความเข้าใจหน้างานจริง ไม่ใช่เลือกจากโบรชัวร์สินค้า',
    },
    {
      num: '02',
      titleEn: 'The right fit',
      titleTh: 'ความพอดีที่ตรงโจทย์ (The right fit)',
      descEn: 'We size the hardware and technology to the job — no more, no less.',
      descTh: 'เราคัดสรรขนาดฮาร์ดแวร์และเทคโนโลยีให้พอดีกับงาน — ไม่มากเกินจำเป็น และไม่น้อยจนติดขัด',
    },
    {
      num: '03',
      titleEn: 'Whole-system delivery',
      titleTh: 'ส่งมอบครบวงจรทั้งระบบ (Whole-system delivery)',
      descEn: 'Tags, readers, application and integration under one responsibility.',
      descTh: 'ดูแลครบทั้งแท็ก เครื่องอ่าน ซอฟต์แวร์แอปพลิเคชัน และการเชื่อมต่อภายใต้ความรับผิดชอบเดียว',
    },
    {
      num: '04',
      titleEn: 'We stay after go-live',
      titleTh: 'ดูแลต่อเนื่องหลังใช้งานจริง (We stay after go-live)',
      descEn: 'We support live operations and keep tuning the system.',
      descTh: 'เราอยู่สนับสนุนการทำงานหน้างานจริง และคอยดูแลปรับจูนระบบให้มีประสิทธิภาพสูงสุดเสมอ',
    },
  ];

  const processSteps = [
    {
      num: '01',
      titleEn: 'Assess',
      titleTh: 'ประเมินหน้างาน (Assess)',
      descEn: 'Understand the process, the problem and the business goal.',
      descTh: 'ทำความเข้าใจกระบวนการทำงาน ปัญหาคอขวด และเป้าหมายทางธุรกิจขององค์กร',
    },
    {
      num: '02',
      titleEn: 'Architect',
      titleTh: 'ออกแบบสถาปัตยกรรม (Architect)',
      descEn: 'Design the hardware, software and integration layers.',
      descTh: 'วางโครงสร้างการทำงานทั้งฮาร์ดแวร์ ซอฟต์แวร์ และระบบเชื่อมต่อข้อมูล (Integration layers)',
    },
    {
      num: '03',
      titleEn: 'Select hardware',
      titleTh: 'คัดสรรฮาร์ดแวร์ (Select hardware)',
      descEn: 'Test tags, readers and antennas in real conditions.',
      descTh: 'ทดสอบแท็ก เครื่องอ่าน และเสาอากาศในสภาพแวดล้อมอุตสาหกรรมจริงก่อนติดตั้ง',
    },
    {
      num: '04',
      titleEn: 'Build & integrate',
      titleTh: 'พัฒนาและเชื่อมต่อ (Build & integrate)',
      descEn: 'Develop the application and connect enterprise systems.',
      descTh: 'พัฒนาแอปพลิเคชันหน้างาน และเชื่อมต่อข้อมูลเข้ากับระบบ ERP / WMS ขององค์กร',
    },
    {
      num: '05',
      titleEn: 'Deliver & support',
      titleTh: 'ส่งมอบและดูแล (Deliver & support)',
      descEn: 'Train the team, measure results and keep improving.',
      descTh: 'ฝึกอบรมทีมงานผู้ใช้งาน วัดผลความแม่นยำ และร่วมพัฒนาปรับปรุงอย่างต่อเนื่อง',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-[#0D1B2A] border-b border-[#21354F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back to Home */}
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

        {/* ============================================================== */}
        {/* Section 1: Header / Hero (Requested by user) */}
        {/* ============================================================== */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#1976FF] uppercase mb-2">
            ABOUT INTEVIA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'th' ? (
              <>
                สร้างมูลค่า เชื่อมต่อระบบ <span className="text-[#1976FF] block mt-1">(Creating value Connecting systems)</span>
              </>
            ) : (
              'Creating value Connecting systems'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D1D5DB] leading-relaxed">
            {lang === 'th'
              ? 'INTEVIA คือทีมวิศวกรและผู้เชี่ยวชาญด้าน RFID, IoT และระบบอัตโนมัติ ที่ลงลึกทำงานใกล้ชิดกับหน้างานจริง'
              : 'INTEVIA is a team of engineers and specialists in RFID, IoT and automation who work close to the real shop floor.'}
          </p>
        </div>

        {/* ============================================================== */}
        {/* Section 2: Our Story + Engineering Team Image */}
        {/* ============================================================== */}
        <div className="bg-[#132238] rounded-2xl border border-[#21354F] overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual 1: INTEVIA engineering team at work */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src="/src/assets/images/industrial_operations_flow_1793849675235.jpg"
                alt="INTEVIA engineering team at work"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#132238] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#061222]/85 backdrop-blur-xs p-3 rounded-lg border border-[#21354F] text-xs text-[#D1D5DB]">
                <span className="font-semibold text-white">INTEVIA engineering team at work</span> · On-site Operations Control Room
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase text-[#1976FF] font-semibold">
                  OUR STORY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                  {lang === 'th' ? 'เทคโนโลยีที่ต้องใช้งานได้จริงหน้างาน' : 'Technology that has to work on site'}
                </h3>
                
                <div className="space-y-4 text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  <p>
                    {lang === 'th'
                      ? 'เราก่อตั้ง INTEVIA ขึ้นจากความเชื่อเรียบง่าย: เทคโนโลยีจะสร้างมูลค่าได้จริงก็ต่อเมื่อมันสามารถทำงานได้ในสภาพแวดล้อมที่สมบุกสมบัน — ฝุ่นในโรงงาน ความร้อนในลานจัดเก็บ และขั้นตอนการทำงานที่ทีมงานของคุณคุ้นเคยเป็นอย่างดี'
                      : 'We founded INTEVIA on a simple belief: technology creates value only when it works in demanding conditions — dust on a factory floor, heat in a yard, and processes your teams already know by heart.'}
                  </p>
                  <p>
                    {lang === 'th'
                      ? 'ดังนั้นเราจึงไม่เคยเริ่มต้นด้วยการขายฮาร์ดแวร์ แต่เราเริ่มจากการทำความเข้าใจกระบวนการทำงานของคุณ เลือกเทคโนโลยีที่เหมาะสม ออกแบบแอปพลิเคชันที่คนหน้างานใช้งานได้จริง และเชื่อมโยงข้อมูลกลับเข้าสู่ระบบหลักที่องค์กรของคุณใช้งานอยู่'
                      : 'So we never start by selling hardware. We start by understanding your process, choose the technology that fits, design an application people actually use, and connect the data back into the systems your organisation runs on.'}
                  </p>
                  <p className="text-white font-medium">
                    {lang === 'th'
                      ? 'ผลลัพธ์ที่ได้คือภาพความจริงที่เป็นหนึ่งเดียวทั่วทั้งองค์กร การตัดสินใจที่รวดเร็วขึ้น และระบบที่พร้อมขยายตัวอย่างยั่งยืนตามการเติบโตของธุรกิจคุณ'
                      : 'The result is one shared picture of the truth, faster decisions, and a system that scales as your business grows.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* Section 3: Circuit Board Visual + How We Work (Four things we hold to) */}
        {/* ============================================================== */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
            {/* Visual 2: Circuit board detail with blue traces */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#21354F] bg-[#132238] relative min-h-[280px]">
              <img
                src="/src/assets/images/circuit_board_blue_traces_1794204680240.jpg"
                alt="Circuit board detail with blue traces"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061222]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-xs text-[#D1D5DB]">
                <span className="font-semibold text-white">Circuit board detail with blue traces</span> · Custom IoT & Embedded Firmware
              </div>
            </div>

            {/* How we work headline */}
            <div className="lg:col-span-7 flex flex-col justify-center bg-[#132238] p-6 sm:p-8 rounded-2xl border border-[#21354F]">
              <span className="text-xs uppercase text-[#1976FF] font-semibold">
                HOW WE WORK
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                {lang === 'th' ? '4 หลักการสำคัญที่เรายึดถือ (Four things we hold to)' : 'Four things we hold to'}
              </h3>
              <p className="text-sm text-[#D1D5DB] leading-relaxed">
                {lang === 'th'
                  ? 'ความมุ่งมั่นในการส่งมอบระบบที่ตอบสนองความต้องการจริง ทำงานเสถียร และไม่ทอดทิ้งลูกค้า'
                  : 'Our guiding principles ensuring every deployment generates real measurable ROI and lasting operational reliability.'}
              </p>
            </div>
          </div>

          {/* 4 Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((item) => (
              <div
                key={item.num}
                className="bg-[#132238] p-6 rounded-xl border border-[#21354F] hover:border-[#1976FF]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-black text-[#1976FF] font-mono-numbers mb-2">
                    {item.num}
                  </div>
                  <div className="text-base font-bold text-white mb-2">
                    {lang === 'th' ? item.titleTh : item.titleEn}
                  </div>
                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                    {lang === 'th' ? item.descTh : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* Section 4: Our Process (Five steps from brief to live operations) */}
        {/* ============================================================== */}
        <div className="bg-[#132238] rounded-2xl border border-[#21354F] p-6 lg:p-10 mb-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase text-[#1976FF] font-semibold">
              OUR PROCESS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {lang === 'th'
                ? '5 ขั้นตอนจากโจทย์สู่การใช้งานจริงหน้างาน'
                : 'Five steps from brief to live operations'}
            </h3>
            <p className="text-sm text-[#D1D5DB] mt-2">
              {lang === 'th'
                ? 'กระบวนการทำงานที่เป็นระบบและผ่านการพิสูจน์แล้ว ช่วยให้การติดตั้งระบบ RFID และ IoT สำเร็จอย่างราบรื่น'
                : 'A structured, field-proven methodology guaranteeing high adoption and zero operational disruption.'}
            </p>
          </div>

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#0D1B2A] p-5 rounded-xl border border-[#21354F] flex flex-col justify-between relative group hover:border-[#1976FF] transition-colors"
              >
                <div>
                  <div className="text-xl font-extrabold text-[#1976FF] font-mono-numbers mb-2">
                    {step.num}
                  </div>
                  <div className="text-base font-bold text-white mb-2">
                    {lang === 'th' ? step.titleTh : step.titleEn}
                  </div>
                  <p className="text-xs text-[#D1D5DB] leading-relaxed">
                    {lang === 'th' ? step.descTh : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* Section 5: Work with us (CTA block requested by user) */}
        {/* ============================================================== */}
        <div className="bg-gradient-to-r from-[#132238] via-[#10243d] to-[#132238] rounded-2xl border border-[#1976FF]/40 p-8 lg:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-[#1976FF]/20 text-[#1976FF] flex items-center justify-center mx-auto mb-4 border border-[#1976FF]/40">
            <HelpCircle className="w-6 h-6" />
          </div>

          <span className="text-xs uppercase text-[#1976FF] font-bold tracking-wider">
            WORK WITH US
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
            {lang === 'th' ? 'ไม่แน่ใจว่าจะเริ่มต้นกับโจทย์ของคุณอย่างไร?' : 'Not sure where to start with your challenge?'}
          </h3>
          <p className="text-sm sm:text-base text-[#D1D5DB] max-w-2xl mx-auto mb-8 leading-relaxed">
            {lang === 'th'
              ? 'ทีมงานวิศวกรของ INTEVIA ยินดีรับฟังและร่วมประเมินความเป็นไปได้เบื้องต้นโดยไม่มีค่าใช้จ่าย'
              : 'Our team is happy to listen and give a first assessment at no cost.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onSelectView('contact')}
              className="px-6 py-3.5 bg-[#1976FF] hover:bg-[#1565D8] text-white text-sm font-bold rounded-lg transition-colors shadow-lg cursor-pointer flex items-center gap-2"
            >
              <span>{lang === 'th' ? 'เริ่มต้นโครงการ (Start a project)' : 'Start a project'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onSelectView('projects')}
              className="px-6 py-3.5 bg-[#0D1B2A] hover:bg-[#152a48] border border-[#21354F] text-[#D1D5DB] hover:text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <span>{lang === 'th' ? 'ดูผลงานทั้งหมด (View all projects)' : 'View all projects'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

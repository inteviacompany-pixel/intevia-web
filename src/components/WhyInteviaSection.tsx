import React from 'react';
import { Language } from '../types/index.ts';
import { Cpu, Radio, Headphones, Code2, Eye, ShieldCheck, TrendingUp, GitMerge } from 'lucide-react';

interface WhyInteviaProps {
  lang: Language;
}

export const WhyInteviaSection: React.FC<WhyInteviaProps> = ({ lang }) => {
  const pillars = [
    {
      num: '01',
      icon: Cpu,
      titleTh: 'IoT Solutions',
      titleEn: 'IoT Solutions',
      subtitleTh: 'คัดสรรและส่งมอบฮาร์ดแวร์ IoT ที่เหมาะสมตรงกับโจทย์การใช้งาน',
      subtitleEn: 'Providing IoT solutions with specific hardware selections tailored to your needs.',
      detailsTh: 'เราประเมินสภาพแวดล้อมจริง คัดสรรเซนเซอร์ อุปกรณ์เกตเวย์ และแท็กอุตสาหกรรมที่ตอบโจทย์เฉพาะของโรงงานหรือคลังสินค้า เพื่อความคุ้มค่าและทนทานสูงสุด',
      detailsEn: 'We evaluate operating environments to engineer and deploy custom IoT edge hardware, micro-controllers, and industrial sensors tailored to each workload.',
    },
    {
      num: '02',
      icon: Radio,
      titleTh: 'RFID Applications Deployment',
      titleEn: 'RFID Application Deployment',
      subtitleTh: 'เตรียมความพร้อมและวางแผนเพื่อการติดตั้งใช้งาน RFID ที่ราบรื่น',
      subtitleEn: 'Readiness for RFID application deployment to ensure smooth implementation and adoption.',
      detailsTh: 'วางแผนสถาปัตยกรรมระบบ ทดสอบระยะคลื่นความถี่ (RF Survey) และทดลองการอ่านจริงก่อนติดตั้ง เพื่อให้กระบวนการเปลี่ยนผ่านเป็นไปอย่างราบรื่นโดยไม่กระทบงานประจำวัน',
      detailsEn: 'Conducting site RF surveys, antenna radiation mapping, and pre-deployment testing to guarantee smooth change management without disrupting live lines.',
    },
    {
      num: '03',
      icon: Headphones,
      titleTh: 'RFID Technology Support',
      titleEn: 'RFID Technology Support',
      subtitleTh: 'ให้คำปรึกษาอย่างผู้เชี่ยวชาญและการสนับสนุนอย่างใกล้ชิดตั้งแต่เริ่มจนใช้งานจริง',
      subtitleEn: 'Offering helpful support for RFID technology from consultation to real-world operation.',
      detailsTh: 'ทีมวิศวกรพร้อมให้คำปรึกษา ฝึกอบรมทีมงานหน้างาน และคอยดูแลตรวจสอบหลังการติดตั้ง (Live Operations Support) เพื่อให้ระบบทำงานเต็มประสิทธิภาพตลอดเวลา',
      detailsEn: 'Dedicated engineering support, operator training workshops, and on-site operational maintenance to ensure 99.9% uptime throughout the system lifecycle.',
    },
    {
      num: '04',
      icon: Code2,
      titleTh: 'Custom Development & Integration',
      titleEn: 'Custom Development & Integration',
      subtitleTh: 'พัฒนาซอฟต์แวร์ตามความต้องการ เชื่อมต่อระบบเดิมอย่างไร้รอยต่อ',
      subtitleEn: 'Team-oriented tailored development support that is scalable and third-party integrated.',
      detailsTh: 'พัฒนาระบบ Middleware, Web Application และเชื่อมต่อ API สองทิศทางกับระบบ ERP, WMS, MES, SAP หรือฐานข้อมูลเดิมขององค์กรอย่างปลอดภัยและยืดหยุ่น',
      detailsEn: 'Scalable custom middleware, responsive web dashboards, and secure bidirectional API connectors that integrate directly into existing SAP, WMS, and ERP ecosystems.',
    },
  ];

  const values = [
    {
      icon: Eye,
      titleTh: 'ความแม่นยำและมองเห็นได้ชัดเจน',
      titleEn: 'Accurate Visibility',
      descTh: 'ติดตามสินทรัพย์ พาเลท และสินค้าคงคลังแบบเรียลไทม์ ตรวจสอบได้ตลอดเวลา',
      descEn: 'Real-time tracking of assets, pallets, and operational status at every moment.',
    },
    {
      icon: ShieldCheck,
      titleTh: 'เทคโนโลยีที่เชื่อถือได้',
      titleEn: 'Reliable Technology',
      descTh: 'อุปกรณ์และระบบผ่านการพิสูจน์แล้วว่าทำงานได้แม่นยำในสภาวะอุตสาหกรรมที่สมบุกสมบัน',
      descEn: 'Proven industrial technologies built for uncompromising performance in demanding plants.',
    },
    {
      icon: TrendingUp,
      titleTh: 'รองรับการขยายตัวในอนาคต',
      titleEn: 'Scalable Solutions',
      descTh: 'โซลูชันยืดหยุ่นที่พร้อมเติบโตและปรับเปลี่ยนตามขนาดธุรกิจของคุณ',
      descEn: 'Flexible architecture engineered to seamlessly scale as your business grows.',
    },
    {
      icon: GitMerge,
      titleTh: 'เชื่อมต่ออย่างราบรื่น',
      titleEn: 'Seamless Integration',
      descTh: 'ทำงานร่วมกับระบบเดิม ซอฟต์แวร์ ERP และขั้นตอนการทำงานขององค์กรอย่างกลมกลืน',
      descEn: 'Works harmoniously with existing ERP, WMS platforms, and team workflows.',
    },
  ];

  return (
    <section id="why-intevia" className="py-20 bg-[#0D1B2A] border-b border-[#21354F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#1976FF] uppercase mb-2">
            {lang === 'th' ? 'จุดเด่นและความเชี่ยวชาญของเรา' : 'OUR CAPABILITIES & PHILOSOPHY'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            WHY <span className="text-[#1976FF]">INTEVIA</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D1D5DB]">
            {lang === 'th'
              ? 'เราคือพันธมิตรผู้เชี่ยวชาญที่ผสานเทคโนโลยีฮาร์ดแวร์ RFID, IoT เข้ากับสถาปัตยกรรมซอฟต์แวร์และงานด้านวิศวกรรม (Engineering) ด้านการปรับปรุงและเพิ่มผลผลิต เพื่อแก้ไขปัญหาหน้างานจริงอย่างตรงจุด'
              : 'We partner with organizations to fuse cutting-edge RFID and IoT hardware with scalable software architectures and engineering excellence.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-[#132238] rounded-xl p-8 border border-[#21354F] hover:border-[#1976FF]/60 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#0D1B2A] border border-[#21354F] flex items-center justify-center text-[#1976FF] group-hover:bg-[#1976FF] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-[#21354F] group-hover:text-[#1976FF] font-mono-numbers transition-colors">
                    {pillar.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {lang === 'th' ? pillar.titleTh : pillar.titleEn}
                </h3>
                <p className="text-sm font-medium text-[#1976FF] mb-3">
                  {lang === 'th' ? pillar.subtitleTh : pillar.subtitleEn}
                </p>
                <p className="text-sm text-[#D1D5DB] leading-relaxed">
                  {lang === 'th' ? pillar.detailsTh : pillar.detailsEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4 Core Value Propositions Strip */}
        <div className="bg-[#0B1420] rounded-xl p-8 border border-[#21354F]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-base">
                    <Icon className="w-5 h-5 text-[#1976FF] shrink-0" />
                    <span>{lang === 'th' ? v.titleTh : v.titleEn}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                    {lang === 'th' ? v.descTh : v.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

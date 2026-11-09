import React, { useState } from 'react';
import { Language } from '../types/index.ts';
import { companyContacts } from '../data/content.ts';
import { 
  Mail, 
  Send, 
  Download, 
  CheckCircle2, 
  Phone, 
  Building2, 
  MapPin,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  onBackToHome?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  lang,
  onBackToHome 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    solution: 'rfid_warehouse',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      solution: 'rfid_warehouse',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-[#0D1B2A] border-b border-[#21354F]">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Channels & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#1976FF] uppercase mb-2">
                {lang === 'th' ? 'ติดต่อเรา' : 'GET IN TOUCH'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {lang === 'th' ? (
                  <>
                    เริ่มต้นปรึกษาผู้เชี่ยวชาญ <span className="text-[#1976FF]">INTEVIA</span>
                  </>
                ) : (
                  <>
                    Connect With <span className="text-[#1976FF]">INTEVIA</span> Engineers
                  </>
                )}
              </h2>
              <p className="mt-4 text-base text-[#D1D5DB] leading-relaxed">
                {lang === 'th'
                  ? 'ยินดีให้คำปรึกษา ออกแบบระบบ สำรวจพื้นที่จริง (RF Site Survey) และทดสอบความคุ้มค่าการลงทุนสำหรับคลังสินค้า โรงงาน และธุรกิจของคุณ'
                  : 'Ready to engineer your next-generation RFID, IoT, or industrial engineering deployment. Reach out to schedule an RF site survey or technical consultation.'}
              </p>
            </div>

            {/* Official Direct Email */}
            <div className="bg-[#132238] p-5 rounded-xl border border-[#21354F]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-[#21354F] flex items-center justify-center text-[#1976FF] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] font-semibold uppercase">
                    {lang === 'th' ? 'อีเมลติดต่อโดยตรง' : 'Official Email'}
                  </div>
                  <a
                    href={`mailto:${companyContacts.email}`}
                    className="text-base font-bold text-white hover:text-[#1976FF] transition-colors break-all"
                  >
                    {companyContacts.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media & Channels (Requested by user) */}
            <div className="bg-[#132238] p-5 rounded-xl border border-[#21354F] space-y-3">
              <div className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider mb-2">
                {lang === 'th' ? 'ช่องทางสื่อสังคมออนไลน์' : 'Social Channels & Profiles'}
              </div>

              {/* Facebook */}
              <a
                href={companyContacts.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] hover:border-[#1976FF] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-[#1877F2]/20 text-[#1877F2] flex items-center justify-center font-bold text-sm">
                    f
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-[#1976FF]">
                    Facebook: INTEVIA
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#6B7280] group-hover:text-white" />
              </a>

              {/* TikTok */}
              <a
                href={companyContacts.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] hover:border-[#1976FF] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-white/10 text-white flex items-center justify-center font-bold text-xs">
                    TT
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-[#1976FF]">
                    TikTok: @intevia.co.th
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#6B7280] group-hover:text-white" />
              </a>

              {/* Instagram */}
              <a
                href={companyContacts.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] hover:border-[#1976FF] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs">
                    IG
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-[#1976FF]">
                    Instagram: intevia.company
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#6B7280] group-hover:text-white" />
              </a>

              {/* YouTube */}
              <a
                href={companyContacts.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] hover:border-[#1976FF] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-xs">
                    YT
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-[#1976FF]">
                    YouTube: @INTEVIA-j6o
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#6B7280] group-hover:text-white" />
              </a>
            </div>

            {/* Company Profile PDF Direct Link */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#1976FF]/15 to-cyan-500/10 border border-[#1976FF]/40 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white mb-0.5">
                  {lang === 'th' ? 'เอกสาร Company Profile ฉบับเต็ม' : 'Full Company Profile (PDF)'}
                </div>
                <div className="text-xs text-[#D1D5DB]">
                  {lang === 'th' ? 'รวมสเปกฮาร์ดแวร์และผลงาน 19 สไลด์' : 'All 19 slides including architecture diagrams'}
                </div>
              </div>
              <a
                href={companyContacts.pdfPath}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#1976FF] hover:bg-[#1565D8] text-white rounded-lg text-xs font-bold transition-colors shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7 bg-[#132238] rounded-2xl p-6 sm:p-8 border border-[#21354F]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {lang === 'th' ? 'ส่งข้อมูลเรียบร้อยแล้ว' : 'Inquiry Submitted Successfully'}
                </h3>
                <p className="text-sm text-[#D1D5DB] max-w-md mx-auto">
                  {lang === 'th'
                    ? `ขอบคุณ คุณ${formData.name} ทีมวิศวกรของ INTEVIA จะติดต่อกลับไปยัง ${formData.email} หรือ ${formData.phone || 'เบอร์ติดต่อของคุณ'} ภายใน 1 วันทำการ`
                    : `Thank you, ${formData.name}. An INTEVIA solutions engineer will respond to ${formData.email} within 24 business hours.`}
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 text-xs font-semibold text-white bg-[#1976FF] hover:bg-[#1565D8] rounded-lg transition-colors cursor-pointer"
                >
                  {lang === 'th' ? 'ส่งข้อความใหม่' : 'Send Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#21354F] pb-4 mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {lang === 'th' ? 'ส่งคำขอข้อมูลหรือนัดหมายปรึกษา' : 'Request Consultation or Technical Proposal'}
                  </h3>
                  <p className="text-xs text-[#D1D5DB] mt-1">
                    {lang === 'th'
                      ? 'กรอกข้อมูลเพื่อให้ทีมงานเตรียมโซลูชันที่เหมาะสมกับธุรกิจคุณ'
                      : 'Please provide project details so we can tailor the right hardware and architecture.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                      {lang === 'th' ? 'ชื่อ - นามสกุล *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'th' ? 'เช่น คุณสมชาย เจริญสุข' : 'e.g. Somchai Charoen'}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-white text-sm focus:outline-hidden focus:border-[#1976FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                      {lang === 'th' ? 'ชื่อบริษัท / องค์กร' : 'Company / Organization'}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={lang === 'th' ? 'เช่น บริษัท ซัพพลาย โลจิสติกส์ จำกัด' : 'e.g. Siam Logistics Co., Ltd.'}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-white text-sm focus:outline-hidden focus:border-[#1976FF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                      {lang === 'th' ? 'อีเมลติดต่อ *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-white text-sm focus:outline-hidden focus:border-[#1976FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                      {lang === 'th' ? 'เบอร์โทรศัพท์' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="08X-XXX-XXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-white text-sm focus:outline-hidden focus:border-[#1976FF] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                    {lang === 'th' ? 'โซลูชันที่ต้องการปรึกษา' : 'Solution of Interest'}
                  </label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-white text-sm focus:outline-hidden focus:border-[#1976FF] transition-colors"
                  >
                    <option value="rfid_warehouse">
                      {lang === 'th' ? 'ระบบติดตามคลังสินค้าและพาเลท RFID (Warehouse Tracking)' : 'RFID Warehouse & Pallet Tracking'}
                    </option>
                    <option value="antenna_gate">
                      {lang === 'th' ? 'เสาประตูสแกนความเร็วสูง 300cm (Antenna Gate & Loss Prevention)' : '300cm RFID Antenna Portal Gates'}
                    </option>
                    <option value="queue_management">
                      {lang === 'th' ? 'ระบบจัดคิวซัพพลายเออร์และแดชบอร์ด (Supplier Queue & Flow)' : 'Supplier Queue Management & ERP Flow'}
                    </option>
                    <option value="nfc_authenticity">
                      {lang === 'th' ? 'แพลตฟอร์มตรวจสอบสินค้าของแท้ NFC (Product Tracing)' : 'NFC Product Authenticity & Anti-Counterfeit'}
                    </option>
                    <option value="power_tools">
                      {lang === 'th' ? 'แท็กเครื่องมือช่างและสินทรัพย์ IP67 (Power Tool Tag)' : 'IP67 Rugged Tool & Asset Tracking'}
                    </option>
                    <option value="ie_consulting">
                      {lang === 'th' ? 'งานด้านวิศวกรรม (Improvement, Productivity & Plant Flow)' : 'Engineering Solutions (Improvement & Productivity)'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D1D5DB] mb-1.5">
                    {lang === 'th' ? 'รายละเอียดเพิ่มเติมหรือเป้าหมายที่ต้องการ' : 'Project Scope & Requirements'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'th'
                        ? 'ระบุขนาดคลังสินค้า ปัญหาที่พบ หรือระบบเดิมที่ต้องการเชื่อมต่อ (WMS / ERP)...'
                        : 'Describe facility size, current bottleneck, or target systems (SAP, Oracle, custom WMS)...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-white text-sm focus:outline-hidden focus:border-[#1976FF] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#1976FF] hover:bg-[#1565D8] disabled:opacity-50 text-white font-bold text-sm rounded-lg transition-colors shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {loading
                      ? lang === 'th' ? 'กำลังส่งข้อมูล...' : 'Submitting Request...'
                      : lang === 'th' ? 'ส่งข้อมูลเพื่อรับคำปรึกษา' : 'Submit Consultation Request'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

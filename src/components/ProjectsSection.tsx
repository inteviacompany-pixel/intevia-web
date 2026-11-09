import React, { useState } from 'react';
import { Language, ProjectItem } from '../types/index.ts';
import { projectsData } from '../data/content.ts';
import { ArrowUpRight, CheckCircle2, X, Layers, ExternalLink, ShieldAlert } from 'lucide-react';

interface ProjectsSectionProps {
  lang: Language;
  onBackToHome?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  lang,
  onBackToHome 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', labelTh: 'ทั้งหมด', labelEn: 'All Projects' },
    { id: 'logistics', labelTh: 'คลังสินค้า & โลจิสติกส์', labelEn: 'Logistics & Warehouse' },
    { id: 'manufacturing', labelTh: 'โรงงาน & เครื่องมือช่าง', labelEn: 'Manufacturing & Tools' },
    { id: 'healthcare', labelTh: 'การแพทย์ & โรงพยาบาล', labelEn: 'Smart Healthcare' },
    { id: 'retail', labelTh: 'สินค้า & ตรวจสอบของแท้', labelEn: 'Retail & Anti-Counterfeit' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 lg:py-20 bg-[#0B1420] border-b border-[#21354F]">
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#1976FF] uppercase mb-2">
              {lang === 'th' ? 'ผลงานโครงการจริงของ INTEVIA' : 'PROVEN TRACK RECORD'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'th' ? (
                <>
                  โครงการและ <span className="text-[#1976FF]">โซลูชัน</span> ที่ใช้งานจริงในภาคอุตสาหกรรม
                </>
              ) : (
                <>
                  Real-World Industrial <span className="text-[#1976FF]">Projects & Case Studies</span>
                </>
              )}
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#132238] rounded-xl border border-[#21354F]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#1976FF] text-white shadow-xs'
                    : 'text-[#D1D5DB] hover:text-white'
                }`}
              >
                {lang === 'th' ? cat.labelTh : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Spotlight Card with Generated Image */}
        <div className="bg-[#132238] rounded-2xl border border-[#21354F] overflow-hidden mb-12 grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
            <img
              src="/src/assets/images/rfid_warehouse_tracking_1793849674240.jpg"
              alt="INTEVIA Warehouse Tracking in action"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#132238] via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 bg-[#0D1B2A]/90 border border-[#21354F] px-3 py-1 rounded text-xs text-[#1976FF] font-semibold">
              FEATURED CASE STUDY
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#1976FF] font-semibold mb-2">
                <span>SLIDE 08 · SMART WAREHOUSE TRACKING</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {lang === 'th'
                  ? 'ระบบติดตามคลังสินค้าและพาเลทแบบเรียลไทม์ (UHF RFID)'
                  : 'Real-Time Warehouse & Pallet Tracking Platform'}
              </h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed mb-6">
                {lang === 'th'
                  ? 'ยกระดับศูนย์กระจายสินค้าด้วยแท็ก UHF RFID ติดพาเลท เสาอากาศ Fixed Gate และ Handheld Reader สแกนสินค้าเป็นชุดได้พันชิ้นในเสี้ยววินาที ลดเวลานับสต็อกลง 85% และเชื่อมต่อ WMS/ERP แบบเรียลไทม์'
                  : 'Empowered high-throughput distribution facilities with bulk UHF RFID pallet identification. Reduces stock counting cycles by 85% and streams live zone movements directly into corporate WMS systems.'}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#0D1B2A] p-3 rounded-lg border border-[#21354F]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#1976FF] font-mono-numbers">
                    99.8%
                  </div>
                  <div className="text-xs text-[#D1D5DB]">
                    {lang === 'th' ? 'ความแม่นยำสต็อก' : 'Inventory Accuracy'}
                  </div>
                </div>
                <div className="bg-[#0D1B2A] p-3 rounded-lg border border-[#21354F]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#1976FF] font-mono-numbers">
                    -85%
                  </div>
                  <div className="text-xs text-[#D1D5DB]">
                    {lang === 'th' ? 'ลดเวลาตรวจนับ' : 'Count Time Saved'}
                  </div>
                </div>
                <div className="bg-[#0D1B2A] p-3 rounded-lg border border-[#21354F]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#1976FF] font-mono-numbers">
                    4x
                  </div>
                  <div className="text-xs text-[#D1D5DB]">
                    {lang === 'th' ? 'ค้นหาสินค้าเร็วขึ้น' : 'Search Speedup'}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(projectsData[1])}
              className="self-start inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1976FF] hover:bg-[#1565D8] rounded-lg transition-colors cursor-pointer"
            >
              <span>{lang === 'th' ? 'อ่านรายละเอียดสถาปัตยกรรมระบบ' : 'View Full Architecture'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#132238] rounded-xl border border-[#21354F] hover:border-[#1976FF]/60 p-6 flex flex-col justify-between transition-all hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#D1D5DB] mb-3">
                  <span className="font-mono-numbers text-[#1976FF]">
                    {project.slideRef ? `Slide ${String(project.slideRef).padStart(2, '0')}` : 'Project'}
                  </span>
                  <span className="capitalize">{project.category}</span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#1976FF] transition-colors leading-snug">
                  {lang === 'th' ? project.titleTh : project.titleEn}
                </h4>

                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-4 line-clamp-3">
                  {lang === 'th' ? project.descTh : project.descEn}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-mono-numbers text-[#D1D5DB] bg-[#0D1B2A] border border-[#21354F] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[11px] text-[#6B7280]">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#21354F] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1976FF]">
                  {project.metrics[0].value} {lang === 'th' ? project.metrics[0].labelTh : project.metrics[0].labelEn}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1 text-xs font-bold text-white hover:text-[#1976FF] transition-colors cursor-pointer"
                >
                  <span>{lang === 'th' ? 'ดูรายละเอียด' : 'Details'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-[#132238] rounded-2xl border border-[#21354F] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#0D1B2A] border border-[#21354F] text-[#D1D5DB] hover:text-white cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-semibold text-[#1976FF] uppercase mb-1">
              {selectedProject.slideRef ? `INTEVIA COMPANY PROFILE · SLIDE ${selectedProject.slideRef}` : 'PROJECT DETAILS'}
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2 pr-10">
              {lang === 'th' ? selectedProject.titleTh : selectedProject.titleEn}
            </h3>

            <p className="text-sm font-medium text-[#1976FF] mb-4">
              {lang === 'th' ? selectedProject.subtitleTh : selectedProject.subtitleEn}
            </p>

            <p className="text-sm text-[#D1D5DB] leading-relaxed mb-6">
              {lang === 'th' ? selectedProject.descTh : selectedProject.descEn}
            </p>

            {/* Key Deliverables & Highlights */}
            <div className="bg-[#0D1B2A] rounded-xl p-5 border border-[#21354F] mb-6">
              <div className="text-xs font-bold uppercase text-white mb-3">
                {lang === 'th' ? 'จุดเด่นและผลลัพธ์ของระบบ' : 'Key Highlights & Business Outcomes'}
              </div>
              <div className="space-y-2">
                {(lang === 'th' ? selectedProject.highlightsTh : selectedProject.highlightsEn).map(
                  (hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#D1D5DB]">
                      <CheckCircle2 className="w-4 h-4 text-[#1976FF] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="bg-[#0D1B2A] p-3 rounded-lg border border-[#21354F] text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#1976FF] font-mono-numbers">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-[#D1D5DB] mt-1">
                    {lang === 'th' ? m.labelTh : m.labelEn}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-[#6B7280] uppercase mb-2">
                {lang === 'th' ? 'เทคโนโลยีและอุปกรณ์ที่ใช้' : 'Hardware & Technology Employed'}
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono-numbers text-white bg-[#0D1B2A] border border-[#21354F] rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#21354F] flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-sm font-semibold text-white bg-[#1976FF] hover:bg-[#1565D8] rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'th' ? 'ปิดหน้าต่าง' : 'Close Details'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

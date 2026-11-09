import { ProjectItem, ServicePillar } from '../types/index.ts';

export const companyContacts = {
  logoPath: '/assets/aistudio/image_cc8fc605.png',
  logoFallback: '/public/assets/aistudio/image_cc8fc605.png',
  email: 'intevia.company@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61593603977110',
  tiktok: 'https://www.tiktok.com/@intevia.co.th?is_from_webapp=1&sender_device=pc',
  instagram: 'https://www.instagram.com/intevia.company',
  youtube: 'https://www.youtube.com/@INTEVIA-j6o',
  pdfPath: '/public/assets/aistudio/INTEVIA_company_profile_38bb2ba7.pdf',
};

export const projectsData: ProjectItem[] = [
  {
    id: 'product-tracing-nfc',
    category: 'retail',
    slideRef: 7,
    titleTh: 'แพลตฟอร์มตรวจสอบย้อนกลับสินค้าด้วย Transparent NFC Tag',
    titleEn: 'Product Tracing Platform with Embedded Transparent NFC Tag',
    subtitleTh: 'ระบบตรวจสอบของแท้ ป้องกันสินค้าปลอมแปลง และวิเคราะห์เส้นทางสินค้าแบบเรียลไทม์',
    subtitleEn: 'Anti-counterfeiting authenticity verification and real-time distribution intelligence',
    descTh: 'โซลูชันฝังชิป NFC ชนิดโปร่งใสลงในบรรจุภัณฑ์สินค้าระดับพรีเมียม ช่วยให้ผู้บริโภคสามารถแตะสมาร์ตโฟนเพื่อยืนยันของแท้ พร้อมระบบแดชบอร์ดตรวจสอบพิกัดการสแกนทั่วประเทศ ป้องกันสินค้าสวมสิทธิ์ และคำนวณส่วนแบ่งการขายอย่างโปร่งใส',
    descEn: 'Transparent NFC tag embedded directly into product packaging. Enables consumers to verify authenticity instantly with their smartphone while providing brands with geographic scan heatmaps across Thailand, counterfeit alerts, and AI-driven production forecasting.',
    highlightsTh: [
      'ยืนยันความแท้ของสินค้า 100% ป้องกันสินค้าปลอมและของลอกเลียนแบบ',
      'ผสาน AI เพื่อการพยากรณ์การผลิต (Production Forecasting) จากข้อมูลการสแกนจริง',
      'แดชบอร์ดแสดงแผนที่การกระจายตัวของลูกค้าทั่วประเทศแบบเรียลไทม์',
      'ระบบคำนวณคอมมิชชั่นการขายที่โปร่งใสและตรวจสอบย้อนกลับได้ทุกขวด/ชิ้น'
    ],
    highlightsEn: [
      'Guarantees 100% product authenticity and anti-tamper security',
      'AI-powered production forecasting based on real field scan metrics',
      'Live nationwide geo-tracking of customer scans and distribution points',
      'Transparent commission calculation and end-to-end traceability'
    ],
    techStack: ['NFC Tag (13.56 MHz)', 'Mobile App', 'Cloud Dashboard', 'AI Analytics', 'Geo-Mapping'],
    metrics: [
      { labelTh: 'ยอดสแกนตรวจสอบ', labelEn: 'Total Scans Logged', value: '2.45M+' },
      { labelTh: 'ความแม่นยำการระบุตัวตน', labelEn: 'Authentication Rate', value: '99.9%' },
      { labelTh: 'ลดปัญหาการปลอมแปลง', labelEn: 'Counterfeit Reduction', value: '94%' }
    ]
  },
  {
    id: 'realtime-warehouse-tracking',
    category: 'logistics',
    slideRef: 8,
    titleTh: 'ระบบติดตามคลังสินค้าและพาเลทแบบเรียลไทม์ (UHF RFID)',
    titleEn: 'Real-Time Warehouse & Pallet Tracking Platform',
    subtitleTh: 'บริหารจัดการสต็อก ตำแหน่งพาเลท และการเคลื่อนย้ายสินค้าในคลังแบบอัตโนมัติ',
    subtitleEn: 'RFID-powered asset & inventory tracking for intelligent warehouse operations',
    descTh: 'เปลี่ยนคลังสินค้าแบบเดิมสู่ Smart Warehouse ด้วยเทคโนโลยี UHF RFID ติดแท็กพาเลทและสินค้า เชื่อมต่อกับเสาอากาศ RFID Reader ประจำทางเข้า-ออก และเครื่องอ่าน Handheld Reader เชื่อมต่อเข้ากับระบบ WMS/ERP ช่วยให้เห็นตำแหน่งสินค้าใน Zone ต่างๆ แบบเรียลไทม์',
    descEn: 'Transforms traditional warehouses into smart facilities. UHF RFID tags attached to pallets and inventory, integrated with fixed gateway antennas and handheld readers. Directly communicates with WMS/ERP systems to provide continuous visibility into Zone A, B, C and dock doors.',
    highlightsTh: [
      'ตรวจนับสต็อกแบบ Bulk Read ได้หลักพันรายการต่อวินาที ไม่ต้องจ่อสแกนทีละชิ้น',
      'ลดเวลาการนับสต็อกลงมากกว่า 85% ปราศจาก Human Error',
      'แจ้งเตือนสินค้าสูญหายหรือย้ายผิดโซนแบบทันที (Real-time Discrepancy Alert)',
      'เชื่อมต่อ WMS, SAP, Oracle ERP แบบสองทิศทาง (Bi-directional API)'
    ],
    highlightsEn: [
      'Bulk inventory reading of thousands of items simultaneously without line-of-sight',
      'Reduces cycle count time by over 85%, eliminating manual logging mistakes',
      'Instant mismatch and wrong-zone alerts (Real-time Discrepancy Prevention)',
      'Seamless two-way integration with enterprise WMS and ERP systems'
    ],
    techStack: ['UHF RFID (860-960 MHz)', 'Fixed Gate Readers', 'Industrial Handhelds', 'WMS Middleware', 'ERP Sync'],
    metrics: [
      { labelTh: 'ความแม่นยำของสต็อก', labelEn: 'Inventory Accuracy', value: '99.8%' },
      { labelTh: 'ลดเวลาตรวจนับสินค้า', labelEn: 'Count Time Reduced', value: '-85%' },
      { labelTh: 'ค้นหาสินค้าเร็วขึ้น', labelEn: 'Search Time Saved', value: '4x' }
    ]
  },
  {
    id: 'hospital-food-ordering-nfc',
    category: 'healthcare',
    slideRef: 9,
    titleTh: 'ระบบสั่งอาหารผู้ป่วยในโรงพยาบาลอัจฉริยะ (Smart Hospital Food Ordering)',
    titleEn: 'Smart Hospital Food Ordering & Patient Care Platform',
    subtitleTh: 'เชื่อมต่อสายรัดข้อมือ NFC ผู้ป่วย เข้ากับระบบครัวและระบบเวชระเบียนโรงพยาบาล (HIS/ERP)',
    subtitleEn: 'NFC-enabled patient food ordering connected directly to hospital ERP/HIS systems',
    descTh: 'ระบบสั่งอาหารเฉพาะบุคคลสำหรับโรงพยาบาล ผู้ป่วยเพียงแตะสายรัดข้อมือ NFC เข้ากับแท็บเล็ตเพื่อเลือกเมนูอาหารตามเกณฑ์การรักษาของแพทย์ ข้อมูลจะส่งตรงไปยังแผนกโภชนาการและครัวแบบเรียลไทม์ ป้องกันข้อผิดพลาดด้านอาหารแพ้หรืออาหารเฉพาะโรคได้อย่างเด็ดขาด',
    descEn: 'Personalized patient dietary management system. Patients simply tap their NFC wristband onto bedside terminals to select physician-approved meals. Data transmits directly to nutritional kitchens and connects with hospital information systems (HIS/ERP).',
    highlightsTh: [
      'ป้องกันความผิดพลาดเรื่องอาหารเฉพาะโรคและสารก่อภูมิแพ้ 100%',
      'ลดภาระงานพยาบาลและเจ้าหน้าที่โภชนาการในการจดบันทึกแบบเดิม',
      'ติดตามสถานะการเตรียมและจัดส่งอาหารได้แบบเรียลไทม์ (Kitchen -> Delivery)',
      'รองรับการเชื่อมต่อกับระบบสารสนเทศโรงพยาบาล (Hospital Information System)'
    ],
    highlightsEn: [
      '100% elimination of manual dietary errors and allergen mix-ups',
      'Drastically reduces nurse administrative overhead for meal rounds',
      'Real-time kitchen order staging and patient room delivery status tracking',
      'Certified API integration with hospital ERP/HIS platforms'
    ],
    techStack: ['NFC Wristbands', 'Medical Tablet UI', 'Kitchen Display System', 'HIS/ERP Integration'],
    metrics: [
      { labelTh: 'ความผิดพลาดด้านออเดอร์', labelEn: 'Order Errors', value: '0%' },
      { labelTh: 'ประหยัดเวลาต่อรอบส่ง', labelEn: 'Prep Time Saved', value: '35%' },
      { labelTh: 'ความพึงพอใจของผู้ป่วย', labelEn: 'Patient Satisfaction', value: '98%' }
    ]
  },
  {
    id: 'inventory-control-antenna-gate',
    category: 'manufacturing',
    slideRef: 10,
    titleTh: 'แพลตฟอร์มควบคุมสต็อกสินค้าและเสาประตูสแกน RFID (Antenna Gate 300cm)',
    titleEn: 'RFID Inventory Control Platform & Wide Antenna Gate Portal',
    subtitleTh: 'ระบบควบคุมการเข้า-ออก ค้นหาตำแหน่งสินค้า และแจ้งเตือนกันขโมยอัตโนมัติ',
    subtitleEn: 'Smart tracking, 300cm gateway portal, and automatic anti-theft asset control',
    descTh: 'ชุดโซลูชันควบคุมสต็อกแบบครบวงจร ประกอบด้วยเสาประตูสแกนความกว้าง 300 ซม., เสาตรวจจับประจำโซน (Antenna Pole), สัญญาณไฟเตือนไซเรน (Alarm Lamp) และแท่นเช็กเอาต์ความเร็วสูง ตรวจจับสินค้าที่ผ่านเข้า-ออกได้ทุกทิศทาง พร้อมอัปเดตสต็อกในระบบอัตโนมัติ',
    descEn: 'End-to-end stock verification infrastructure featuring wide 300cm portal antenna gates, zone-monitoring antenna poles, automated alarm beacons, and high-speed checkout verification stations. Detects item movement in bulk and updates system databases automatically.',
    highlightsTh: [
      'เสาประตูสแกนกว้าง 300 ซม. รองรับรถโฟล์คลิฟต์และพาเลทขนาดใหญ่ขับผ่านพร้อมสแกน',
      'เสาตรวจจับ Zone Monitoring อ่านแท็กสินค้าในรัศมีแบบต่อเนื่อง',
      'สัญญาณไซเรนแจ้งเตือนอัตโนมัติเมื่อพบสินค้าถูกนำออกโดยไม่ได้รับอนุญาต',
      'แท่นสแกนชำระเงินและเช็กเอาต์ ตรวจสอบสถานะและตัดสต็อกใน 1 วินาที'
    ],
    highlightsEn: [
      'Wide 300cm antenna portal allows forklifts and bulk pallets to drive through seamlessly',
      'Antenna poles provide continuous zone monitoring of valuable assets',
      'Instant strobe alarm lamp triggers on unauthorized item removal',
      'High-speed checkout station verifies item status and commits inventory in <1 second'
    ],
    techStack: ['300cm Portal Gate', 'Antenna Pole (Zone)', 'Strobe Alarm', 'Checkout Station', 'Web Platform'],
    metrics: [
      { labelTh: 'ความเร็วสแกนต่อวินาที', labelEn: 'Scan Speed per Sec', value: '700+ tags' },
      { labelTh: 'ลดอัตราสินค้าสูญหาย', labelEn: 'Loss & Shrinkage Reduced', value: '-96%' },
      { labelTh: 'ความกว้างช่องสแกน', labelEn: 'Gate Clearance', value: '300 cm' }
    ]
  },
  {
    id: 'supplier-queue-management',
    category: 'logistics',
    slideRef: 11,
    titleTh: 'ระบบจัดการคิวซัพพลายเออร์และแดชบอร์ดโฟลว์สินค้าอัจฉริยะ',
    titleEn: 'Smart Supplier Queue Management & Product Flow Dashboard',
    subtitleTh: 'เชื่อมต่อการนัดหมาย จองคิวส่งของ ป้ายไฟ IoT LED และระบบ SAP/ERP ของโรงงาน',
    subtitleEn: 'Comprehensive solution managing supplier queues connected directly to factory ERP',
    descTh: 'โซลูชันลดความแออัดของรถบรรทุกหน้าโรงงานและศูนย์กระจายสินค้า ซัพพลายเออร์สามารถลงทะเบียนนัดหมายเวลาล่วงหน้า เมื่อรถมาถึงระบบจะเรียกคิวผ่านป้ายไฟ Outdoor IoT LED Display พร้อมจัดสรรช่องเทียบ (Dock) อัตโนมัติ ข้อมูลซิงก์ตรงกับระบบ SAP/ERP ตลอดโฟลว์ตั้งแต่รับของจนถึงส่งมอบ',
    descEn: 'Solves yard congestion at manufacturing facilities and logistics hubs. Suppliers pre-book unloading appointments, receive digital queue slips, and are guided by outdoor IoT LED displays. Entire progression (Receiving -> Picking -> Packing -> Ready -> Shipped) is mirrored in SAP/ERP in real time.',
    highlightsTh: [
      'ระบบจองคิวออนไลน์ ลดเวลารถบรรทุกจอดรอหน้าโรงงานลงกว่า 60%',
      'ป้ายไฟ Outdoor IoT LED Display แจ้งเตือนเลขคิวและหมายเลขประตูโหลดสินค้าอัตโนมัติ',
      'แดชบอร์ดติดตามโฟลว์สินค้าครบ 7 ขั้นตอน (Receiving ถึง Delivered)',
      'ผสานข้อมูลกับ SAP และระบบ ERP บันทึกเวลาและน้ำหนักสินค้าอัตโนมัติ'
    ],
    highlightsEn: [
      'Online appointment booking eliminates factory gate truck congestion by over 60%',
      'Outdoor high-visibility IoT LED display dispatches drivers to designated loading docks',
      'Full 7-stage product flow dashboard (Receiving, Stock, Pick, Pack, Ready, Ship, Delivered)',
      'Direct SAP/ERP interface recording timestamps, weights, and receiving confirmations'
    ],
    techStack: ['Outdoor IoT LED', 'Mobile Booking App', 'Dock Management', 'SAP Connector', 'Flow Analytics'],
    metrics: [
      { labelTh: 'ลดเวลาการรอคอย', labelEn: 'Waiting Time Reduced', value: '-65%' },
      { labelTh: 'ความตรงต่อเวลา', labelEn: 'On-Time Booking Rate', value: '92%' },
      { labelTh: 'รองรับออเดอร์ต่อวัน', labelEn: 'Daily Order Throughput', value: '1,850+ pcs' }
    ]
  },
  {
    id: 'power-tool-tag-solution',
    category: 'manufacturing',
    slideRef: 13,
    titleTh: 'โซลูชันแท็กเครื่องมือช่างและอุปกรณ์อุตสาหกรรม (Power Tool Tag)',
    titleEn: 'Rugged Power Tool Tag & Heavy-Duty Asset Lifecycle Solution',
    subtitleTh: 'แท็ก RFID/NFC กันน้ำกันกระแทก IP67 บริหารประวัติ การเบิกจ่าย และการบำรุงรักษา',
    subtitleEn: 'Smarter tools. Stronger operations with IP67 rugged RFID/NFC lifecycle tracking',
    descTh: 'แท็กทนทานพิเศษสำหรับติดตั้งบนเครื่องมือช่าง เครื่องจักร และอุปกรณ์หน้างานก่อสร้างหรือโรงงานอุตสาหกรรม ทนน้ำ ทนสารเคมี และทนแรงกระแทกมาตรฐาน IP67 บันทึกรหัสประจำตัว Unique ID (EPC) บริหารการเบิก-จ่าย ตรวจสอบการใช้งาน และวางแผนซ่อมบำรุงเชิงป้องกัน (CMMS)',
    descEn: 'Rugged dual RFID/NFC tag engineered specifically for power tools, construction equipment, and heavy machinery. Waterproof and impact-resistant (IP67). Stores unique digital identity, manages tool checkout/return workflows, and tracks preventative maintenance intervals.',
    highlightsTh: [
      'มาตรฐานกันน้ำกันฝุ่น IP67 และทนแรงกระแทก ออกแบบสำหรับหน้างานสมบุกสมบัน',
      'เทคโนโลยีคู่ RFID UHF (ระยะไกล) + NFC (แตะผ่านสมาร์ตโฟนได้ทันที)',
      'ป้องกันการสูญหายและการโจรกรรมเครื่องมือช่างราคาแพงในไซต์งาน',
      'บันทึกประวัติการบำรุงรักษา รอบการสอบเทียบ (Calibration) และอายุการใช้งาน'
    ],
    highlightsEn: [
      'IP67 waterproof, dustproof, and high impact-resistant construction for harsh job sites',
      'Dual RFID UHF (long-range tracking) + NFC (instant smartphone tap identification)',
      'Minimizes tool theft, loss, and unreturned inventory across construction sites',
      'Automates maintenance scheduling, tool calibration cycles, and service history logs'
    ],
    techStack: ['Dual UHF/NFC Chip', 'IP67 Rugged Enclosure', 'Mobile Scanner', 'CMMS / Maintenance Cloud'],
    metrics: [
      { labelTh: 'ลดการสูญหายของเครื่องมือ', labelEn: 'Tool Loss Reduction', value: '-90%' },
      { labelTh: 'มาตรฐานความทนทาน', labelEn: 'Durability Rating', value: 'IP67' },
      { labelTh: 'ยืดอายุการใช้งานอุปกรณ์', labelEn: 'Equipment Life Extended', value: '+30%' }
    ]
  }
];

export const iePillarsData: ServicePillar[] = [
  {
    id: 'process-work-study',
    titleTh: '01. Process Improvement & Work Study',
    titleEn: '01. Process Improvement & Work Study',
    descTh: 'การปรับปรุงกระบวนการและศึกษาการทำงานอย่างเป็นระบบ เพื่อขจัดความสูญเปล่าและเพิ่มผลผลิตสูงสุด',
    descEn: 'Systematic study and optimization of operational workflows to eliminate waste and maximize productivity.',
    scopeTh: [
      'Process Mapping & Analysis (แผนผังกระบวนการไหล)',
      'Time & Motion Study (ศึกษาเวลาและการเคลื่อนไหว)',
      'Workload Analysis (วิเคราะห์ภาระงานที่เหมาะสม)',
      'Bottleneck Identification (วิเคราะห์คอขวดในสายการผลิต)',
      'Waste Reduction (ลดความสูญเปล่าตามหลัก Lean)',
      'Standard Work Development (สร้างมาตรฐานการปฏิบัติงาน)'
    ],
    scopeEn: [
      'Process Mapping & Systematic Analysis',
      'Time & Motion Empirical Study',
      'Balanced Workload Distribution Analysis',
      'Bottleneck & Constraint Identification',
      'Lean Waste & Non-Value Added Elimination',
      'Standard Operating Procedure (SOP) Development'
    ],
    deliverablesTh: ['แผนภาพ Process Maps', 'รายงาน Time Study Report', 'รายงานวิเคราะห์ภาระงาน', 'คู่มือ Standard Work', 'แผนงานปรับปรุง Kaizen'],
    deliverablesEn: ['Process Flow Maps', 'Time Study Detailed Report', 'Workload Analysis Report', 'Standard Work Guidelines', 'Kaizen Improvement Plan'],
    impactTh: 'กระบวนการเร็วขึ้น 30-50% ผลผลิตต่อชั่วโมงเพิ่มขึ้น ลดต้นทุนแรงงานสูญเปล่า',
    impactEn: '30-50% faster cycle times, higher throughput per labor hour, reduced operational overhead'
  },
  {
    id: 'operations-research',
    titleTh: '02. Operations Research & Optimization',
    titleEn: '02. Operations Research & Optimization',
    descTh: 'ประยุกต์ใช้วิทยาการข้อมูลและแบบจำลองทางคณิตศาสตร์ เพื่อการตัดสินใจและจัดสรรทรัพยากรที่คุ้มค่าที่สุด',
    descEn: 'Applying advanced mathematical modeling and data analytics for optimal resource allocation and decision-making.',
    scopeTh: [
      'Capacity & Resource Optimization (คำนวณกำลังการผลิตที่เหมาะสม)',
      'Production Planning & Scheduling (จัดตารางการผลิตอัจฉริยะ)',
      'Inventory Optimization (คำนวณ Safety Stock และจุดสั่งซื้อที่คุ้มที่สุด)',
      'Simulation & Scenario Analysis (จำลองสถานการณ์จำลองเพื่อลดความเสี่ยง)',
      'Cost & Performance Optimization (บริหารต้นทุนต่อหน่วยให้ต่ำสุด)'
    ],
    scopeEn: [
      'Capacity & Plant Resource Optimization',
      'Advanced Production Planning & Master Scheduling',
      'Inventory Policy Optimization (Safety Stock & Reorder Points)',
      'Discrete-Event Simulation & Scenario Stress Testing',
      'Unit Cost & Operational Performance Optimization'
    ],
    deliverablesTh: ['รายงาน Analysis Report', 'รายงานข้อเสนอแนะเชิงกลยุทธ์', 'แบบจำลอง Optimization Model', 'รายงานเปรียบเทียบ Scenario', 'แผนปฏิบัติการ Implementation Plan'],
    deliverablesEn: ['Analysis & Diagnostic Report', 'Strategic Recommendation Report', 'Mathematical Optimization Model', 'Scenario Comparison Benchmark', 'Actionable Implementation Plan'],
    impactTh: 'ตัดสินใจแม่นยำขึ้นจากข้อมูล ลดสต็อกค้างเกินจำเป็น ประหยัดต้นทุนการดำเนินงาน',
    impactEn: 'Data-driven precision decisions, optimal asset utilization, substantially lower carrying costs'
  },
  {
    id: 'plant-design-yield',
    titleTh: '03. Plant Design & Yield Improvement',
    titleEn: '03. Plant Design & Yield Improvement',
    descTh: 'ออกแบบผังโรงงานและการไหลของวัตถุดิบ เพิ่มผลผลิตต่อพื้นที่ และลดความสูญเสียในกระบวนการ',
    descEn: 'Engineering efficient facility layouts and material flows to enhance yield, quality, and space utilization.',
    scopeTh: [
      'Plant Layout & Flow Design (ออกแบบเลย์เอาต์โรงงานและคลังสินค้า)',
      'Material & Production Flow Analysis (วิเคราะห์เส้นทางการเคลื่อนที่ของวัตถุดิบ)',
      'Equipment Selection & Placement (เลือกและจัดวางเครื่องจักรตามหลักวิศวกรรม)',
      'Process Loss & Waste Reduction (ลดของเสียและเศษวัตถุดิบในสายการผลิต)',
      'Yield & Quality Improvement (เพิ่มอัตราส่วนผลผลิตที่ผ่านมาตรฐาน First-Pass Yield)'
    ],
    scopeEn: [
      'Facility Layout & Logistics Flow Architecture',
      'Material & Production Movement Streamlining',
      'Equipment Selection, Sizing & Ergonomic Placement',
      'Process Loss, Scrap & Defect Reduction',
      'First-Pass Yield (FPY) & Quality Reliability Engineering'
    ],
    deliverablesTh: ['แบบแปลน Plant Layout Drawing (2D/3D)', 'ไดอะแกรม Process Flow Diagram', 'ผลการจำลอง Simulation Result', 'รายงาน Yield Improvement Report', 'โร้ดแมปการก่อสร้างและติดตั้ง'],
    deliverablesEn: ['Plant Layout Engineering CAD/Drawings', 'Detailed Process Flow Diagrams', '3D Simulation Results', 'Yield Improvement Technical Report', 'Implementation & Phasing Roadmap'],
    impactTh: 'เพิ่มผลผลิตต่อตารางเมตร ลดระยะทางการขนย้ายภายในโรงงาน ยกระดับความปลอดภัย 100%',
    impactEn: 'Higher output per sq. meter, minimized internal transit distances, safer ergonomic operations'
  },
  {
    id: 'workflow-integration',
    titleTh: '04. Company Integration Workflow',
    titleEn: '04. Business & Workflow Integration',
    descTh: 'เชื่อมโยงข้อมูลและกระบวนการทำงานทุกแผนกตั้งแต่ต้นน้ำถึงปลายน้ำเป็นหนึ่งเดียว (One Integrated Workflow)',
    descEn: 'Connecting processes, real-time data, and cross-functional teams for end-to-end synchronized operations.',
    scopeTh: [
      'Customer & Sales Integration (เชื่อมข้อมูลความต้องการลูกค้าสู่ใบสั่งขาย)',
      'Planning & Procurement (จัดตารางการผลิตและสั่งซื้อวัตถุดิบอัตโนมัติ)',
      'Production & Quality (บันทึกข้อมูลการผลิตและตรวจสอบคุณภาพแบบเรียลไทม์)',
      'Warehouse & Delivery (จัดการสต็อก พาเลท และยานพาหนะขนส่งด้วย RFID)',
      'Finance & ERP Synchronization (เชื่อมต่อใบแจ้งหนี้และการตัดบัญชีอัตโนมัติ)'
    ],
    scopeEn: [
      'Customer Demand to Sales Order Synchronization',
      'Master Planning & Automated Purchasing Procurement',
      'Real-Time Shopfloor Production & Quality Control Tracking',
      'RFID-Driven Warehouse & Fleet Delivery Execution',
      'Automated Invoicing & Enterprise Financial ERP Integration'
    ],
    deliverablesTh: ['สถาปัตยกรรม Workflow Architecture', 'ข้อกำหนดการเชื่อมต่อ API Specification', 'เกณฑ์วัดผล KPI Dashboard', 'แผนการฝึกอบรมบุคลากร Change Management'],
    deliverablesEn: ['End-to-End Workflow Architecture', 'API & System Integration Specifications', 'Real-Time KPI Dashboard Schemas', 'Operational Change Management Plan'],
    impactTh: 'ลดงานซ้ำซ้อนระหว่างแผนก ข้อมูลอัปเดตตรงกันทันที 100% องค์กรเติบโตได้อย่างยั่งยืน',
    impactEn: 'Elimination of cross-department redundant data entry, unified single source of truth, scalable growth'
  }
];

export const rfidTechSpecs = [
  {
    type: 'LF',
    fullName: 'Low Frequency',
    frequency: '125 – 134 kHz',
    rangeTh: 'ระยะใกล้มาก (สัมผัส - เซนติเมตร)',
    rangeEn: 'Very Short (Contact – cm)',
    bestForTh: 'การระบุตัวตนสัตว์เลี้ยง/ปศุสัตว์, กุญแจควบคุมการเข้า-ออก (Access Control), ระบบฝังในวัตถุโลหะ',
    bestForEn: 'Animal identification, Access control keyfobs, Embedded metallic assemblies',
    featuresTh: ['คลื่นทะลุผ่านของเหลวและเนื้อเยื่อได้ดีเยี่ยม', 'ความเร็วในการอ่านปานกลาง', 'ทนทานต่อสิ่งรบกวน'],
    featuresEn: ['Excellent penetration through liquids and organic tissue', 'Moderate data transfer rate', 'High immunity to interference']
  },
  {
    type: 'HF / NFC',
    fullName: 'High Frequency & Near Field Communication',
    frequency: '13.56 MHz',
    rangeTh: 'ระยะใกล้ (1 – 10 เซนติเมตร)',
    rangeEn: 'Short Range (1 – 10 cm)',
    bestForTh: 'สมาร์ตการ์ด, บัตรโดยสาร, ชำระเงินแบบ Contactless, แตะด้วยสมาร์ตโฟน, ป้องกันสินค้าปลอม',
    bestForEn: 'Smart cards, Contactless payments, Smartphone tap interaction, Brand authenticity verification',
    featuresTh: ['สมาร์ตโฟนทั่วไปสามารถเป็นเครื่องอ่านได้ทันที', 'ความปลอดภัยในการเข้ารหัสข้อมูลระดับสูง', 'เหมาะกับการมีปฏิสัมพันธ์โดยตรงของผู้บริโภค'],
    featuresEn: ['Directly read by standard iOS & Android smartphones', 'Advanced cryptographic security algorithms', 'Intuitive tap-and-interact user experience']
  },
  {
    type: 'UHF',
    fullName: 'Ultra High Frequency (Marquee Solution)',
    frequency: '860 – 960 MHz (Global Standard)',
    rangeTh: 'ระยะไกล (หลายเมตร สูงสุด 12-15 เมตร)',
    rangeEn: 'Long Range (Multiple meters, up to 12-15m)',
    bestForTh: 'คลังสินค้า โลจิสติกส์ การติดตามพาเลทและตู้คอนเทนเนอร์ ประตูสแกนอัตโนมัติ และการตรวจนับสต็อกระดับอุตสาหกรรม',
    bestForEn: 'Warehouses, Logistics & Supply Chain, Pallet & Container tracking, Portal gates, Bulk cycle counting',
    featuresTh: ['สแกนข้อมูลเป็นกลุ่ม (Bulk Read) ได้หลายร้อยชิ้นต่อวินาที', 'ไม่ต้องมองเห็นแท็กโดยตรง (No Line-of-Sight required)', 'ส่งผ่านข้อมูลรวดเร็ว เหมาะกับระบบความเร็วสูงในโรงงาน'],
    featuresEn: ['Bulk simultaneous reading of hundreds of items per second', 'No direct line-of-sight required for reading', 'Ultra-fast throughput built for high-speed industrial workflows']
  }
];

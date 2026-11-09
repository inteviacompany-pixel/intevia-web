import React, { useState } from 'react';
import { Language } from '../types/index.ts';
import { 
  Boxes, 
  Truck, 
  Radio, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Play, 
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Layers,
  Database,
  Smartphone,
  BarChart3,
  Code,
  ShieldCheck,
  Building,
  Activity,
  CalendarCheck
} from 'lucide-react';

interface LogisticsSimulatorProps {
  lang: Language;
  onBackToHome?: () => void;
}

interface PalletItem {
  id: string;
  sku: string;
  nameTh: string;
  nameEn: string;
  status: 'in_stock' | 'in_transit' | 'ready_to_ship' | 'alert';
  qty: number;
  lastRead: string;
}

export const LogisticsSimulatorSection: React.FC<LogisticsSimulatorProps> = ({ 
  lang,
  onBackToHome 
}) => {
  const [activeTab, setActiveTab] = useState<'warehouse' | 'gate' | 'queue'>('warehouse');

  // --- Mode 1: Warehouse Floor State ---
  const [selectedZone, setSelectedZone] = useState<'dock' | 'zoneA' | 'zoneB' | 'zoneC' | 'outbound'>('zoneA');
  const [isScanningWarehouse, setIsScanningWarehouse] = useState(false);
  const [scanCount, setScanCount] = useState(4820);

  const zonesData: Record<string, { nameTh: string; nameEn: string; pallets: PalletItem[]; capacity: string }> = {
    dock: {
      nameTh: 'จุดรับสินค้าเข้า (Inbound Receiving Dock)',
      nameEn: 'Inbound Receiving Dock',
      capacity: '92% Active',
      pallets: [
        { id: 'PAL-00912', sku: 'SKU-ELEC-401', nameTh: 'แผงวงจรอิเล็กทรอนิกส์ IoT', nameEn: 'IoT Controller Boards', status: 'in_transit', qty: 450, lastRead: '10:24 AM (Gate 1)' },
        { id: 'PAL-00913', sku: 'SKU-SENS-102', nameTh: 'เซนเซอร์อุณหภูมิโรงงาน', nameEn: 'Temperature Sensors', status: 'in_transit', qty: 280, lastRead: '10:25 AM (Gate 1)' },
        { id: 'PAL-00914', sku: 'SKU-RAW-880', nameTh: 'ม้วนพลาสติกบรรจุภัณฑ์', nameEn: 'Packaging Inlay Rolls', status: 'in_stock', qty: 120, lastRead: '10:26 AM (Gate 2)' },
      ]
    },
    zoneA: {
      nameTh: 'โซน A: คลังจัดเก็บพาเลทสูง (High-Bay Storage)',
      nameEn: 'Zone A: High-Bay Pallet Racks',
      capacity: '88% Occupied',
      pallets: [
        { id: 'PAL-00840', sku: 'SKU-AUTO-201', nameTh: 'ชิ้นส่วนประกอบยานยนต์', nameEn: 'Automotive Assemblies', status: 'in_stock', qty: 640, lastRead: '10:18 AM (Antenna A3)' },
        { id: 'PAL-00841', sku: 'SKU-CHEM-505', nameTh: 'สารหล่อลื่นความแม่นยำสูง', nameEn: 'Precision Lubricants', status: 'in_stock', qty: 320, lastRead: '10:19 AM (Antenna A4)' },
        { id: 'PAL-00842', sku: 'SKU-FAST-902', nameTh: 'น็อตและสลักเกลียวความแข็งแรงสูง', nameEn: 'Industrial High-Tensile Bolts', status: 'in_stock', qty: 1200, lastRead: '10:20 AM (Antenna A5)' },
      ]
    },
    zoneB: {
      nameTh: 'โซน B: พื้นที่จัดเตรียมและหยิบสินค้า (Order Picking)',
      nameEn: 'Zone B: Order Picking & Kitting',
      capacity: '74% Active',
      pallets: [
        { id: 'PAL-00755', sku: 'SKU-FOOD-112', nameTh: 'วัตถุดิบอาหารควบคุมอุณหภูมิ', nameEn: 'Cold-Chain Ingredients', status: 'in_transit', qty: 180, lastRead: '10:15 AM (Handheld B1)' },
        { id: 'PAL-00756', sku: 'SKU-MED-330', nameTh: 'สายรัดข้อมือโรงพยาบาล NFC', nameEn: 'NFC Medical Wristbands', status: 'ready_to_ship', qty: 500, lastRead: '10:16 AM (Station B3)' },
      ]
    },
    zoneC: {
      nameTh: 'โซน C: จุดแพ็กเกจจิ้งและบรรจุหีบห่อ (Packing Area)',
      nameEn: 'Zone C: Packing & Bundling',
      capacity: '81% Active',
      pallets: [
        { id: 'PAL-00620', sku: 'SKU-RETL-701', nameTh: 'สินค้าแบรนด์เนมติด NFC ป้องกันปลอม', nameEn: 'NFC Authenticated Apparel', status: 'ready_to_ship', qty: 890, lastRead: '10:12 AM (Antenna C2)' },
        { id: 'PAL-00621', sku: 'SKU-MISC-991', nameTh: 'แท็กเครื่องมือช่าง IP67', nameEn: 'IP67 Rugged Tool Tags', status: 'in_stock', qty: 420, lastRead: '10:14 AM (Antenna C1)' },
      ]
    },
    outbound: {
      nameTh: 'โซนขาออก: ประตูโหลดสินค้าและกระจายสินค้า (Outbound Docks)',
      nameEn: 'Outbound Dispatch Gates',
      capacity: '95% Dispatched',
      pallets: [
        { id: 'PAL-00501', sku: 'SKU-EXPORT-10', nameTh: 'สินค้าส่งออกลอต A (ตรวจสอบครบ)', nameEn: 'Export Batch Alpha (Verified)', status: 'ready_to_ship', qty: 1400, lastRead: '10:05 AM (Gate D1)' },
        { id: 'PAL-00502', sku: 'SKU-WARN-002', nameTh: 'พาเลทรอตรวจสอบเอกสาร (Hold)', nameEn: 'Hold for Paperwork Check', status: 'alert', qty: 150, lastRead: '10:07 AM (Gate D2)' },
      ]
    }
  };

  const handleRunWarehouseScan = () => {
    setIsScanningWarehouse(true);
    setTimeout(() => {
      setScanCount((prev) => prev + 12);
      setIsScanningWarehouse(false);
    }, 1200);
  };

  // --- Mode 2: Portal Gate Simulator State ---
  const [gateProgress, setGateProgress] = useState(0);
  const [isSimulatingGate, setIsSimulatingGate] = useState(false);
  const [gateReadSuccess, setGateReadSuccess] = useState(false);

  const handleStartGateSimulation = () => {
    setIsSimulatingGate(true);
    setGateProgress(0);
    setGateReadSuccess(false);

    const interval = setInterval(() => {
      setGateProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulatingGate(false);
          setGateReadSuccess(true);
          return 100;
        }
        return prev + 20;
      });
    }, 250);
  };

  // --- Product Flow Stages (from requested specs) ---
  const productFlowStages = [
    { num: '01', titleEn: 'Receiving', titleTh: 'รับเข้าคลัง (Receiving)', duration: '0.8 day', durationTh: '0.8 วัน', isSlowest: false },
    { num: '02', titleEn: 'In stock', titleTh: 'จัดเก็บในสต็อก (In stock)', duration: '1.2 days', durationTh: '1.2 วัน', isSlowest: false },
    { num: '03', titleEn: 'Picking', titleTh: 'หยิบสินค้า (Picking)', duration: '1.5 days', durationTh: '1.5 วัน', isSlowest: false },
    { num: '04', titleEn: 'Packing', titleTh: 'แพ็กกิ้ง (Packing)', duration: '2.8 days', durationTh: '2.8 วัน', isSlowest: false },
    { num: '05', titleEn: 'Ready to ship', titleTh: 'รอส่งออก (Ready to ship)', duration: '4.2 days', durationTh: '4.2 วัน (จุดคอขวด)', isSlowest: true },
    { num: '06', titleEn: 'Shipped', titleTh: 'อยู่ระหว่างขนส่ง (Shipped)', duration: '0.6 day', durationTh: '0.6 วัน', isSlowest: false },
    { num: '07', titleEn: 'Delivered', titleTh: 'ส่งมอบสำเร็จ (Delivered)', duration: '—', durationTh: '—', isSlowest: false },
  ];

  // --- Integration Ecosystem ---
  const integrations = [
    {
      titleEn: 'ERP / SAP',
      titleTh: 'ERP / SAP',
      descEn: 'Sync orders, stock and shipment status.',
      descTh: 'ซิงก์คำสั่งซื้อ จำนวนสต็อก และสถานะการจัดส่งแบบเรียลไทม์',
      icon: Database
    },
    {
      titleEn: 'WMS',
      titleTh: 'WMS (Warehouse Management)',
      descEn: 'One consistent view of warehouse data.',
      descTh: 'เห็นข้อมูลคลังสินค้าแบบเป็นหนึ่งเดียวทั่วทั้งองค์กร',
      icon: Boxes
    },
    {
      titleEn: 'IoT LED display',
      titleTh: 'ป้ายไฟ IoT LED display',
      descEn: 'Queue and status at the factory gate.',
      descTh: 'แสดงสถานะเรียกคิวและหมายเลขประตูเทียบท่าหน้าโรงงาน',
      icon: Activity
    },
    {
      titleEn: 'Mobile app',
      titleTh: 'แอปพลิเคชันมือถือ (Mobile app)',
      descEn: 'Suppliers check queues and appointments anywhere.',
      descTh: 'ซัพพลายเออร์ตรวจสอบคิวและนัดหมายเวลาล่วงหน้าได้จากทุกที่',
      icon: Smartphone
    },
    {
      titleEn: 'Dashboard',
      titleTh: 'แดชบอร์ดผู้บริหาร (Dashboard)',
      descEn: 'Management views and exportable reports.',
      descTh: 'มุมมองสำหรับผู้บริหาร พร้อมรายงานที่สามารถส่งออกข้อมูลได้',
      icon: BarChart3
    },
    {
      titleEn: 'API',
      titleTh: 'เปิดรับการเชื่อมต่อ API',
      descEn: 'Add further systems whenever you need.',
      descTh: 'เชื่อมต่อระบบภายนอกหรือระบบเฉพาะทางเพิ่มเติมได้ตลอดเวลา',
      icon: Code
    },
  ];

  // --- What You Can Measure ---
  const metricsToWatch = [
    {
      num: '01',
      titleEn: 'Stage duration',
      titleTh: 'ระยะเวลาของแต่ละขั้นตอน (Stage duration)',
      descEn: 'See instantly where goods are held up.',
      descTh: 'ตรวจสอบได้ทันทีว่าสินค้าหรือวัตถุดิบติดค้างอยู่ที่ขั้นตอนใด',
    },
    {
      num: '02',
      titleEn: 'Longest waiting',
      titleTh: 'จุดที่รอนานที่สุด (Longest waiting)',
      descEn: 'Spot bottlenecks at the dock and yard.',
      descTh: 'ตรวจพบคอขวดบริเวณท่าโหลดสินค้าและลานจอดรถได้ทันที',
    },
    {
      num: '03',
      titleEn: 'Booking rate',
      titleTh: 'อัตราการมาตรงเวลา (Booking rate)',
      descEn: 'Measure on-time supplier arrivals.',
      descTh: 'วัดอัตราการมาถึงตรงตามนัดหมายของซัพพลายเออร์',
    },
    {
      num: '04',
      titleEn: 'Inventory accuracy',
      titleTh: 'ความแม่นยำของสต็อก (Inventory accuracy)',
      descEn: 'Compare system and physical stock daily.',
      descTh: 'เปรียบเทียบยอดในระบบกับสินค้าจริงหน้างานได้ทุกวัน',
    },
  ];

  return (
    <section id="logistics-simulator" className="py-16 lg:py-20 bg-[#0D1B2A] border-b border-[#21354F]">
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
        {/* Section 1: Hero & Vision (Requested by user) */}
        {/* ============================================================== */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#1976FF] uppercase mb-2">
            LOGISTICS & SUPPLY CHAIN
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'th' ? 'มองเห็นภาพรวมการไหลของสินค้าทั้งระบบ (See the whole flow)' : 'See the whole flow'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D1D5DB] leading-relaxed">
            {lang === 'th'
              ? 'ติดตามพาเลท สินค้า และคิวซัพพลายเออร์แบบเรียลไทม์ พร้อมเชื่อมโยงข้อมูลระหว่างซัพพลายเออร์ โรงงาน และระบบ ERP อย่างสมบูรณ์'
              : 'Track pallets, goods and supplier queues in real time, and connect the data between suppliers, factory and ERP.'}
          </p>
        </div>

        {/* ============================================================== */}
        {/* Section 2: Overview - Transparency across the supply chain */}
        {/* ============================================================== */}
        <div className="bg-[#132238] rounded-2xl border border-[#21354F] overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual: Container terminal at blue hour */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src="/src/assets/images/hero_rfid_logistics_1793849673274.jpg"
                alt="Container terminal at blue hour"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#132238] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#061222]/85 backdrop-blur-xs p-3 rounded-lg border border-[#21354F] text-xs text-[#D1D5DB]">
                <span className="font-semibold text-white">Container terminal at blue hour</span> · INTEVIA RFID Automated Facility
              </div>
            </div>

            {/* Overview Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase text-[#1976FF] font-semibold">
                  OVERVIEW
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                  {lang === 'th' ? 'ความโปร่งใสที่ตรวจสอบได้ทั่วทั้งซัพพลายเชน' : 'Transparency across the supply chain'}
                </h3>
                <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed mb-8">
                  {lang === 'th'
                    ? 'INTEVIA เชื่อมโยงข้อมูล RFID ตั้งแต่การรับสินค้า ประตูคลังสินค้า แร็คจัดเก็บ ไปจนถึงการส่งมอบเป็นภาพเดียว ทำให้ฝ่ายจัดซื้อ คลังสินค้า ฝ่ายผลิต และฝ่ายขนส่งมองเห็นข้อมูลตรงกัน 100%'
                    : 'INTEVIA connects RFID data from receiving, warehouse gates, racks and dispatch into one picture that purchasing, warehouse, production and transport all see the same way.'}
                </p>

                {/* 4 Pillars of Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#0D1B2A] p-4 rounded-xl border border-[#21354F]">
                    <div className="text-sm font-bold text-white mb-1">
                      {lang === 'th' ? 'การรับสินค้า (Receiving)' : 'Receiving'}
                    </div>
                    <p className="text-xs text-[#D1D5DB]">
                      {lang === 'th'
                        ? 'ตรวจเช็กอัตโนมัติ สกัดกั้นข้อผิดพลาดตั้งแต่ต้นทาง'
                        : 'Automated checking that stops errors at the source.'}
                    </p>
                  </div>

                  <div className="bg-[#0D1B2A] p-4 rounded-xl border border-[#21354F]">
                    <div className="text-sm font-bold text-white mb-1">
                      {lang === 'th' ? 'การจัดเก็บ (Storage)' : 'Storage'}
                    </div>
                    <p className="text-xs text-[#D1D5DB]">
                      {lang === 'th'
                        ? 'รู้พิกัดสินค้าและพาเลทได้ทันทีแบบเรียลไทม์'
                        : 'Know where goods and pallets are, in real time.'}
                    </p>
                  </div>

                  <div className="bg-[#0D1B2A] p-4 rounded-xl border border-[#21354F]">
                    <div className="text-sm font-bold text-white mb-1">
                      {lang === 'th' ? 'การส่งมอบ (Dispatch)' : 'Dispatch'}
                    </div>
                    <p className="text-xs text-[#D1D5DB]">
                      {lang === 'th'
                        ? 'ตรวจสอบความถูกต้องของสินค้าก่อนรถออกจากท่าเทียบ'
                        : 'Verify the load before it leaves the dock.'}
                    </p>
                  </div>

                  <div className="bg-[#0D1B2A] p-4 rounded-xl border border-[#21354F]">
                    <div className="text-sm font-bold text-white mb-1">
                      {lang === 'th' ? 'การติดตาม (Tracking)' : 'Tracking'}
                    </div>
                    <p className="text-xs text-[#D1D5DB]">
                      {lang === 'th'
                        ? 'ติดตามทุกขั้นตอนบนแดชบอร์ดเดียว'
                        : 'Every stage on a single dashboard.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* Section 3: Capabilities - Coverage where data usually breaks */}
        {/* ============================================================== */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="text-xs uppercase text-[#1976FF] font-semibold">
                CAPABILITIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {lang === 'th' ? 'อุดรอยต่อจุดที่ข้อมูลมักสูญหาย' : 'Coverage where data usually breaks'}
              </h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] mt-2">
                {lang === 'th'
                  ? 'เราออกแบบโฟลว์เพื่อให้ข้อมูลไหลลื่นตั้งแต่ต้นทางถึงปลายทาง โดยไม่ต้องกรอกข้อมูลซ้ำซ้อน'
                  : 'We design the flow so data continues from source to destination without re-keying.'}
              </p>
            </div>

            {/* Handheld image thumbnail badge */}
            <div className="hidden lg:flex items-center gap-3 bg-[#132238] p-2.5 rounded-xl border border-[#21354F]">
              <img
                src="/src/assets/images/rfid_warehouse_tracking_1793849674240.jpg"
                alt="Supervisor scanning a pallet with a handheld RFID reader"
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div className="text-xs pr-2">
                <div className="font-bold text-white">Supervisor Handheld Scanning</div>
                <div className="text-[#6B7280]">Rugged Industrial RFID</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                titleEn: 'Inbound accuracy',
                titleTh: 'ความแม่นยำในการรับเข้า (Inbound accuracy)',
                descEn: 'Resolve mismatches between production and inventory.',
                descTh: 'ขจัดความคลาดเคลื่อนระหว่างยอดผลิตจริงกับยอดสต็อกในระบบ',
              },
              {
                titleEn: 'Pallet & container tracking',
                titleTh: 'การติดตามพาเลทและตู้สินค้า (Pallet & container)',
                descEn: 'Track pallet movement across the entire supply chain.',
                descTh: 'ติดตามการเคลื่อนไหวของพาเลทและคอนเทนเนอร์ตลอดยกสายซัพพลายเชน',
              },
              {
                titleEn: 'Asset & equipment tracking',
                titleTh: 'ติดตามสินทรัพย์และอุปกรณ์ (Asset & equipment)',
                descEn: 'Real-time visibility of movable assets and equipment.',
                descTh: 'มองเห็นสถานะและตำแหน่งของสินทรัพย์และอุปกรณ์ที่เคลื่อนย้ายได้แบบเรียลไทม์',
              },
              {
                titleEn: 'Supplier queue management',
                titleTh: 'จัดการคิวซัพพลายเออร์ (Supplier queue)',
                descEn: 'Registration, appointments, LED status and ERP sync.',
                descTh: 'ระบบลงทะเบียน นัดหมายเวลาล่วงหน้า ป้ายไฟ LED และซิงก์ข้อมูลกับ ERP',
              },
              {
                titleEn: 'Inventory accuracy',
                titleTh: 'ความแม่นยำของสต็อก (Inventory accuracy)',
                descEn: 'Shorter counts, less time checking, fewer losses.',
                descTh: 'ตรวจนับสต็อกเร็วขึ้น ใช้เวลาเช็กน้อยลง ลดสินค้าสูญหายและข้อผิดพลาด',
              },
              {
                titleEn: 'Transport integration',
                titleTh: 'เชื่อมต่อระบบขนส่ง (Transport integration)',
                descEn: 'Connect ERP, WMS, SAP and your transport systems.',
                descTh: 'เชื่อมต่อกับ ERP, WMS, SAP และระบบซอฟต์แวร์ขนส่งเดิมของคุณอย่างไร้รอยต่อ',
              },
            ].map((cap, i) => (
              <div
                key={i}
                className="bg-[#132238] p-6 rounded-xl border border-[#21354F] hover:border-[#1976FF]/60 transition-colors"
              >
                <div className="text-base font-bold text-white mb-2">
                  {lang === 'th' ? cap.titleTh : cap.titleEn}
                </div>
                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  {lang === 'th' ? cap.descTh : cap.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* Section 4: Product Flow - Every status on one screen */}
        {/* ============================================================== */}
        <div className="bg-[#132238] rounded-2xl border border-[#21354F] p-6 lg:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase text-[#1976FF] font-semibold">
              PRODUCT FLOW
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {lang === 'th' ? 'กระบวนการไหลของสินค้า: ติดตามทุกสถานะในหน้าจอเดียว' : 'Product flow: Every status on one screen'}
            </h3>
            <p className="text-sm text-[#D1D5DB] mt-2">
              {lang === 'th'
                ? 'ตัวอย่างสถานะที่แสดงบนแดชบอร์ด ติดตามสถานะและระยะเวลาค้างของแต่ละขั้นตอน โดยไฮไลต์ขั้นตอนที่ใช้เวลานานที่สุดก่อนที่จะกลายเป็นความล่าช้า'
                : 'Example statuses shown on the dashboard. Track the status and dwell time of each stage, with the slowest stages highlighted before they become a delay.'}
            </p>
          </div>

          {/* 7 Stages Flow Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
            {productFlowStages.map((stg) => (
              <div
                key={stg.num}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                  stg.isSlowest
                    ? 'bg-amber-950/30 border-amber-500/80 shadow-md'
                    : 'bg-[#0D1B2A] border-[#21354F]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono-numbers font-bold text-[#1976FF]">
                      {stg.num}
                    </span>
                    {stg.isSlowest && (
                      <span className="text-[10px] text-amber-400 font-bold bg-amber-950 px-1.5 py-0.5 rounded border border-amber-700/60">
                        SLOWEST
                      </span>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mb-2">
                    {lang === 'th' ? stg.titleTh : stg.titleEn}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#21354F]/70">
                  <div className={`text-sm sm:text-base font-extrabold font-mono-numbers ${stg.isSlowest ? 'text-amber-400' : 'text-white'}`}>
                    {lang === 'th' ? stg.durationTh : stg.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#0D1B2A] rounded-lg border border-[#21354F] text-xs text-[#D1D5DB] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1976FF]" />
              <span>
                {lang === 'th'
                  ? 'ระบบคำนวณเวลากักเก็บเฉลี่ย (Average Dwell Time) และส่งสัญญาณแจ้งเตือนอัตโนมัติเมื่อเกินเกณฑ์มาตรฐาน'
                  : 'Automated dwell-time triggers notify shift supervisors before bottlenecks cause dispatch SLA violations.'}
              </span>
            </div>
            <span className="font-mono-numbers text-[#1976FF] font-semibold hidden sm:inline">LIVE ANALYTICS</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* Section 5: Interactive Simulator (Pallet Heatmap, 300cm Gate, Queue) */}
        {/* ============================================================== */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="text-xs font-semibold tracking-wider text-[#1976FF] uppercase mb-1">
              LIVE INTERACTIVE SIMULATOR
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'th' ? 'ทดลองจำลองระบบคลังสินค้าและการผ่านเสาสัญญาณจริง' : 'Experience the Warehouse & Gate Simulator'}
            </h3>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#132238] rounded-xl border border-[#21354F] max-w-2xl mx-auto mb-8">
            <button
              onClick={() => setActiveTab('warehouse')}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'warehouse'
                  ? 'bg-[#1976FF] text-white shadow-sm'
                  : 'text-[#D1D5DB] hover:text-white'
              }`}
            >
              {lang === 'th' ? '1. แผนผังคลังสินค้า & ติดตามพาเลท' : '1. Warehouse Pallet Heatmap'}
            </button>
            <button
              onClick={() => setActiveTab('gate')}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'gate'
                  ? 'bg-[#1976FF] text-white shadow-sm'
                  : 'text-[#D1D5DB] hover:text-white'
              }`}
            >
              {lang === 'th' ? '2. ประตูสแกน Bulk RFID 300 ซม.' : '2. 300cm Portal Gate Scanner'}
            </button>
            <button
              onClick={() => setActiveTab('queue')}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'queue'
                  ? 'bg-[#1976FF] text-white shadow-sm'
                  : 'text-[#D1D5DB] hover:text-white'
              }`}
            >
              {lang === 'th' ? '3. จัดคิวซัพพลายเออร์ & โฟลว์สินค้า' : '3. Supplier Queue & Flow'}
            </button>
          </div>

          {/* TAB 1: Warehouse Floor & Pallet Tracking Map */}
          {activeTab === 'warehouse' && (
            <div className="bg-[#132238] rounded-2xl border border-[#21354F] p-6 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#21354F] mb-6">
                <div>
                  <span className="text-xs uppercase text-[#1976FF] font-semibold">
                    {lang === 'th' ? 'แดชบอร์ดจำลองคลังสินค้าอัจฉริยะ' : 'Interactive Warehouse Map'}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    {lang === 'th' ? 'สถานะตำแหน่งและจำนวนสินค้าคงคลังเรียลไทม์' : 'Real-Time Inventory & Pallet Tracking'}
                  </h4>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleRunWarehouseScan}
                    disabled={isScanningWarehouse}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#1976FF] hover:bg-[#1565D8] disabled:opacity-50 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Radio className={`w-4 h-4 ${isScanningWarehouse ? 'animate-spin' : ''}`} />
                    <span>
                      {isScanningWarehouse
                        ? lang === 'th' ? 'กำลังสแกนคลื่น RFID...' : 'Scanning RFID Array...'
                        : lang === 'th' ? 'สั่งสแกน RFID ทั่วคลังทันที' : 'Trigger RFID Cycle Scan'}
                    </span>
                  </button>
                  <div className="bg-[#0D1B2A] border border-[#21354F] px-3 py-2 rounded-lg text-xs font-mono-numbers text-[#D1D5DB]">
                    Total Active Tags: <strong className="text-white">{scanCount.toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              {/* Warehouse Visual Zone Selector Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
                {[
                  { id: 'dock', labelTh: 'จุดรับสินค้า (Dock)', labelEn: 'Inbound Dock', count: '12 Pallets' },
                  { id: 'zoneA', labelTh: 'โซน A: แร็คสูง (High-Bay)', labelEn: 'Zone A: High-Bay', count: '84 Pallets' },
                  { id: 'zoneB', labelTh: 'โซน B: หยิบสินค้า (Picking)', labelEn: 'Zone B: Picking', count: '28 Pallets' },
                  { id: 'zoneC', labelTh: 'โซน C: แพ็กกิ้ง (Packing)', labelEn: 'Zone C: Packing', count: '19 Pallets' },
                  { id: 'outbound', labelTh: 'ประตูส่งออก (Outbound)', labelEn: 'Outbound Gates', count: '15 Pallets' },
                ].map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedZone === zone.id
                        ? 'bg-[#1976FF]/15 border-[#1976FF] shadow-sm'
                        : 'bg-[#0D1B2A] border-[#21354F] hover:border-[#1976FF]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase text-[#1976FF]">
                        {zone.id.toUpperCase()}
                      </span>
                      <span className="text-[11px] font-mono-numbers text-[#D1D5DB]">
                        {zone.count}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {lang === 'th' ? zone.labelTh : zone.labelEn}
                    </div>
                  </button>
                ))}
              </div>

              {/* Zone Inspection Table */}
              <div className="bg-[#0D1B2A] rounded-xl border border-[#21354F] p-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#21354F] mb-4">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-[#1976FF]" />
                    <span>{lang === 'th' ? zonesData[selectedZone].nameTh : zonesData[selectedZone].nameEn}</span>
                  </div>
                  <span className="text-xs font-mono-numbers text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                    {zonesData[selectedZone].capacity}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-[#21354F] text-[#6B7280]">
                        <th className="pb-2 font-medium">Pallet ID (EPC)</th>
                        <th className="pb-2 font-medium">SKU / Item</th>
                        <th className="pb-2 font-medium">Description</th>
                        <th className="pb-2 font-medium font-mono-numbers">Quantity</th>
                        <th className="pb-2 font-medium">Last RFID Antenna</th>
                        <th className="pb-2 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#21354F]/60">
                      {zonesData[selectedZone].pallets.map((item) => (
                        <tr key={item.id} className="hover:bg-[#132238]/60 transition-colors">
                          <td className="py-3 font-mono-numbers font-semibold text-white">{item.id}</td>
                          <td className="py-3 font-mono-numbers text-[#1976FF]">{item.sku}</td>
                          <td className="py-3 text-[#D1D5DB]">{lang === 'th' ? item.nameTh : item.nameEn}</td>
                          <td className="py-3 font-mono-numbers text-white">{item.qty.toLocaleString()} pcs</td>
                          <td className="py-3 text-xs text-[#D1D5DB]">{item.lastRead}</td>
                          <td className="py-3">
                            {item.status === 'in_stock' && (
                              <span className="inline-flex items-center gap-1 text-xs text-emerald-400">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>{lang === 'th' ? 'พร้อมในสต็อก' : 'In Stock'}</span>
                              </span>
                            )}
                            {item.status === 'in_transit' && (
                              <span className="inline-flex items-center gap-1 text-xs text-blue-400">
                                <Truck className="w-3.5 h-3.5" />
                                <span>{lang === 'th' ? 'กำลังเคลื่อนย้าย' : 'In Transit'}</span>
                              </span>
                            )}
                            {item.status === 'ready_to_ship' && (
                              <span className="inline-flex items-center gap-1 text-xs text-cyan-400">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>{lang === 'th' ? 'พร้อมส่งออก' : 'Ready to Ship'}</span>
                              </span>
                            )}
                            {item.status === 'alert' && (
                              <span className="inline-flex items-center gap-1 text-xs text-amber-400">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                <span>{lang === 'th' ? 'รอตรวจสอบ' : 'Hold / Check'}</span>
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 300cm Portal Antenna Gate Simulator */}
          {activeTab === 'gate' && (
            <div className="bg-[#132238] rounded-2xl border border-[#21354F] p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs uppercase text-[#1976FF] font-semibold">
                      {lang === 'th' ? 'การจำลองเสาประตูสแกนผ่าน' : 'HIGH-SPEED BULK PASS-THROUGH'}
                    </span>
                    <h4 className="text-2xl font-bold text-white mt-1">
                      {lang === 'th' ? 'เสาประตูสแกน RFID Gate กว้าง 300 ซม.' : '300cm RFID Antenna Portal Gate'}
                    </h4>
                    <p className="text-sm text-[#D1D5DB] mt-2 leading-relaxed">
                      {lang === 'th'
                        ? 'จำลองการขับรถโฟล์คลิฟต์บรรทุกพาเลท 120 กล่องผ่านเสาประตูสแกนความกว้าง 300 ซม. ระบบตรวจจับทุกแท็กในเวลาเพียง 1.4 วินาที และอัปเดตตัดสต็อกใน ERP ทันที'
                        : 'Simulate a forklift carrying 120 boxed items driving through INTEVIA 300cm portal gates. All tags captured within 1.4 seconds with zero manual scanning.'}
                    </p>
                  </div>

                  <div className="bg-[#0D1B2A] p-5 rounded-xl border border-[#21354F] space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#D1D5DB]">
                      <span>{lang === 'th' ? 'สถานะรถโฟล์คลิฟต์ผ่านประตู' : 'Forklift Drive-Through Progress'}</span>
                      <span className="font-mono-numbers text-white font-bold">{gateProgress}%</span>
                    </div>

                    <div className="w-full bg-[#132238] h-3 rounded-full overflow-hidden border border-[#21354F]">
                      <div
                        className="bg-gradient-to-r from-[#1976FF] to-cyan-400 h-full transition-all duration-300"
                        style={{ width: `${gateProgress}%` }}
                      />
                    </div>

                    <button
                      onClick={handleStartGateSimulation}
                      disabled={isSimulatingGate}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-[#1976FF] hover:bg-[#1565D8] disabled:opacity-50 text-white rounded-lg text-sm font-bold transition-colors cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>
                        {isSimulatingGate
                          ? lang === 'th' ? 'กำลังขับผ่านเสาสัญญาณ...' : 'Passing Through Gate Antennas...'
                          : lang === 'th' ? 'กดจำลองขับรถโฟล์คลิฟต์ผ่านประตู' : 'Run Forklift Portal Drive-Through'}
                      </span>
                    </button>

                    {gateReadSuccess && (
                      <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-lg text-xs text-emerald-300 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{lang === 'th' ? 'อ่านสำเร็จ 120 จาก 120 แท็ก (0.00% Error)' : 'Read 120/120 tags successfully (0.00% Error)'}</span>
                        </div>
                        <span className="font-mono-numbers font-bold text-white">1.38s</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="bg-[#0D1B2A] p-4 rounded-xl border border-rose-900/40">
                      <div className="text-rose-400 font-bold mb-1">
                        {lang === 'th' ? 'สแกนบาร์โค้ดแบบเดิม' : 'Traditional Barcode'}
                      </div>
                      <div className="text-xl font-bold font-mono-numbers text-white mb-1">~38.5 นาที</div>
                      <p className="text-[#D1D5DB]">
                        {lang === 'th' ? 'ต้องยกของลงมาจ่อสแกนทีละกล่อง เสี่ยงนับตกหล่น' : 'Must manually scan each barcode, prone to fatigue errors.'}
                      </p>
                    </div>

                    <div className="bg-[#0D1B2A] p-4 rounded-xl border border-emerald-900/40">
                      <div className="text-emerald-400 font-bold mb-1">
                        {lang === 'th' ? 'INTEVIA RFID Gate' : 'INTEVIA RFID Gate'}
                      </div>
                      <div className="text-xl font-bold font-mono-numbers text-white mb-1">1.4 วินาที</div>
                      <p className="text-[#D1D5DB]">
                        {lang === 'th' ? 'ขับผ่านได้ทันที อ่านคลื่นวิทยุพร้อมกัน 100% แม่นยำ' : 'Drive straight through without stopping, instant ERP sync.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#0D1B2A] rounded-xl border border-[#21354F] p-6 relative flex flex-col items-center justify-center min-h-[380px]">
                  <div className="w-full max-w-sm flex items-center justify-between text-xs text-[#1976FF] font-mono-numbers mb-4 border-b border-dashed border-[#1976FF]/40 pb-1">
                    <span>◀</span>
                    <span className="font-bold">300 CM GATE CLEARANCE (IN/OUT)</span>
                    <span>▶</span>
                  </div>

                  <div className="w-full max-w-sm relative flex items-center justify-between border-4 border-[#1976FF] rounded-lg p-6 bg-[#132238]/60 shadow-lg">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-24 bg-[#1976FF] rounded-xs shadow-md"></div>
                      <span className="text-[10px] text-[#D1D5DB] mt-1 font-mono-numbers">Antenna L1</span>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className={`p-4 rounded-full transition-all ${isSimulatingGate ? 'bg-[#1976FF] scale-110 shadow-lg shadow-[#1976FF]/50' : 'bg-[#0D1B2A]'}`}>
                        <Truck className={`w-10 h-10 ${isSimulatingGate ? 'text-white animate-bounce' : 'text-[#6B7280]'}`} />
                      </div>
                      <div className="text-xs font-bold text-white mt-2">
                        {isSimulatingGate
                          ? lang === 'th' ? 'ตรวจจับสัญญาณคลื่นวิทยุ...' : 'Capturing RF Inlays...'
                          : lang === 'th' ? 'พาเลทพร้อมขับผ่าน' : 'Pallet Ready'}
                      </div>
                      <div className="text-[11px] text-[#1976FF] font-mono-numbers mt-0.5">
                        120 UHF RFID Tags
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-4 h-24 bg-[#1976FF] rounded-xs shadow-md"></div>
                      <span className="text-[10px] text-[#D1D5DB] mt-1 font-mono-numbers">Antenna R1</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-xs text-[#D1D5DB]">
                    <div className={`w-3 h-3 rounded-full ${gateReadSuccess ? 'bg-emerald-400 animate-pulse' : 'bg-[#6B7280]'}`}></div>
                    <span>{lang === 'th' ? 'ไฟแสดงสถานะตรวจผ่าน (Gate Status Beacon)' : 'Gate Status Beacon: Normal Pass'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Supplier Queue & Dispatch Flow */}
          {activeTab === 'queue' && (
            <div className="bg-[#132238] rounded-2xl border border-[#21354F] p-6 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#21354F] mb-8">
                <div>
                  <span className="text-xs uppercase text-[#1976FF] font-semibold">
                    {lang === 'th' ? 'ระบบจัดการคิวซัพพลายเออร์และแดชบอร์ดโฟลว์สินค้า' : 'INTEVIA QUEUE & PROCESS DASHBOARD'}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    {lang === 'th' ? 'กระบวนการไหลสินค้าครบ 6 ขั้นตอน (Receiving to Delivery)' : 'End-to-End Product Flow & Supplier Queuing'}
                  </h4>
                </div>

                {/* Outdoor IoT LED Board Mockup */}
                <div className="bg-[#0D1B2A] border-2 border-emerald-500 rounded-lg p-3 text-center shadow-lg font-mono-numbers">
                  <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-1">
                    OUTDOOR IoT LED QUEUE DISPLAY
                  </div>
                  <div className="flex items-center gap-4 text-emerald-400 font-extrabold text-sm sm:text-base">
                    <div>QUEUE: <span className="text-white">A001</span> → GATE 1</div>
                    <div>QUEUE: <span className="text-white">A002</span> → GATE 2</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
                {[
                  { id: 's1', labelTh: 'ลงทะเบียนนัดหมาย', labelEn: '1. Appointment Booking', count: '35 คัน', time: '100% On-Time' },
                  { id: 's2', labelTh: 'รถเทียบหน้าประตู', labelEn: '2. Gate Arrival & LED', count: '8 คัน', time: 'รอเรียก < 5 นาที' },
                  { id: 's3', labelTh: 'รับเข้าคลัง (Receiving)', labelEn: '3. Inbound Receiving', count: '320 ชิ้น', time: 'Avg 0.8 วัน' },
                  { id: 's4', labelTh: 'จัดเก็บในสต็อก', labelEn: '4. Stock Put-away', count: '1,240 ชิ้น', time: 'Avg 1.2 วัน' },
                  { id: 's5', labelTh: 'หยิบและแพ็ก', labelEn: '5. Picking & Packing', count: '1,500 ชิ้น', time: 'Avg 1.5 วัน' },
                  { id: 's6', labelTh: 'พร้อมส่ง & จัดส่งแล้ว', labelEn: '6. Shipped & Delivered', count: '1,850 ชิ้น', time: '92% Booking Rate' },
                ].map((stg) => (
                  <div key={stg.id} className="bg-[#0D1B2A] rounded-xl p-4 border border-[#21354F] relative group hover:border-[#1976FF] transition-colors">
                    <div className="text-xs font-bold text-[#1976FF] mb-1">
                      {lang === 'th' ? stg.labelTh : stg.labelEn}
                    </div>
                    <div className="text-lg font-extrabold text-white font-mono-numbers my-1">
                      {stg.count}
                    </div>
                    <div className="text-[11px] text-[#D1D5DB] font-mono-numbers">
                      {stg.time}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#0D1B2A] rounded-xl p-5 border border-[#21354F] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#1976FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-0.5">{lang === 'th' ? 'ลดเวลารถจอดรอหน้าโรงงาน 65%' : 'Reduce Truck Wait Time by 65%'}</div>
                    <div className="text-[#D1D5DB]">{lang === 'th' ? 'ซัพพลายเออร์จองคิวล่วงหน้า รู้เวลาเทียบท่าแน่นอน' : 'Pre-booked dock appointment eliminates traffic jams'}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-[#1976FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-0.5">{lang === 'th' ? 'เชื่อมโยงข้อมูล SAP & ERP 100%' : '100% Real-Time SAP Integration'}</div>
                    <div className="text-[#D1D5DB]">{lang === 'th' ? 'ตัดจ่ายสินค้าอัตโนมัติ ไม่ต้องคีย์เอกสารซ้ำซ้อน' : 'Instant automated receiving & inventory commitment'}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1976FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-0.5">{lang === 'th' ? 'ความแม่นยำในการส่งมอบ 92%' : '92% On-Time Delivery Rate'}</div>
                    <div className="text-[#D1D5DB]">{lang === 'th' ? 'ตรวจสอบได้ทุกชิ้นงาน ตั้งแต่โรงงานจนถึงมือลูกค้า' : 'Full traceability across every logistics milestone'}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ============================================================== */}
        {/* Section 6: Integration - Connects to what you already run */}
        {/* ============================================================== */}
        <div className="mb-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase text-[#1976FF] font-semibold">
              INTEGRATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {lang === 'th' ? 'การเชื่อมต่อระบบ: ทำงานร่วมกับระบบที่คุณใช้อยู่แล้ว' : 'Integration: Connects to what you already run'}
            </h3>
            <p className="text-sm sm:text-base text-[#D1D5DB] mt-2">
              {lang === 'th'
                ? 'แพลตฟอร์มของเราถูกสร้างขึ้นมาเพื่อให้เชื่อมต่อและสื่อสารกับเครื่องมือที่ทีมงานของคุณใช้งานอยู่เป็นประจำทุกวันได้อย่างราบรื่น'
                : 'Our platform is built to talk to the tools your team uses every day.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {integrations.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-[#132238] p-6 rounded-xl border border-[#21354F] hover:border-[#1976FF]/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-[#21354F] flex items-center justify-center text-[#1976FF] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-base font-bold text-white mb-2">
                    {lang === 'th' ? item.titleTh : item.titleEn}
                  </div>
                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                    {lang === 'th' ? item.descTh : item.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* Section 7: What you can measure - The metrics worth watching */}
        {/* ============================================================== */}
        <div className="bg-[#132238] rounded-2xl border border-[#21354F] p-6 lg:p-10">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase text-[#1976FF] font-semibold">
              WHAT YOU CAN MEASURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {lang === 'th' ? 'สิ่งที่คุณวัดผลได้จริง: ตัวชี้วัดสำคัญที่คุ้มค่าแก่การติดตาม' : 'What you can measure: The metrics worth watching'}
            </h3>
            <p className="text-sm sm:text-base text-[#D1D5DB] mt-2">
              {lang === 'th'
                ? 'แดชบอร์ดของเราแปลงสิ่งที่เกิดขึ้นจริงหน้างานในโรงงานและคลังสินค้าให้กลายเป็นตัวเลขที่วิเคราะห์ได้แม่นยำ'
                : 'Our dashboards turn what really happens on site into numbers.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {metricsToWatch.map((m) => (
              <div
                key={m.num}
                className="bg-[#0D1B2A] p-5 rounded-xl border border-[#21354F] flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-black text-[#1976FF] font-mono-numbers mb-2">
                    {m.num}
                  </div>
                  <div className="text-base font-bold text-white mb-2">
                    {lang === 'th' ? m.titleTh : m.titleEn}
                  </div>
                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                    {lang === 'th' ? m.descTh : m.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

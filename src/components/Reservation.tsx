"use client";

import React, { useState } from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

interface TableItem {
  id: string;
  number: number;
  label: string;
  zone: "window" | "center" | "grill" | "vip";
  zoneName: string;
  capacity: number;
  isOccupied: boolean;
  desc: string;
  // Layout coordinates / shape
  shape: "rect-2" | "rect-4" | "rect-6" | "rect-8";
}

const RESTAURANT_TABLES: TableItem[] = [
  // 1. Pəncərə Kənarı (Xəzər Dənizi)
  {
    id: "T-01",
    number: 1,
    label: "Masa 01",
    zone: "window",
    zoneName: "Pəncərə Kənarı (Dəniz)",
    capacity: 2,
    isOccupied: false,
    desc: "Xəzər dənizinə birbaşa mənzərə, romantik 2 nəfərlik",
    shape: "rect-2",
  },
  {
    id: "T-02",
    number: 2,
    label: "Masa 02",
    zone: "window",
    zoneName: "Pəncərə Kənarı (Dəniz)",
    capacity: 4,
    isOccupied: true,
    desc: "Geniş dəniz panoraması (Dolu)",
    shape: "rect-4",
  },
  {
    id: "T-03",
    number: 3,
    label: "Masa 03",
    zone: "window",
    zoneName: "Pəncərə Kənarı (Dəniz)",
    capacity: 4,
    isOccupied: false,
    desc: "Panoramik pəncərə, gün batımı mənzərəsi",
    shape: "rect-4",
  },
  {
    id: "T-04",
    number: 4,
    label: "Masa 04",
    zone: "window",
    zoneName: "Pəncərə Kənarı (Dəniz)",
    capacity: 2,
    isOccupied: false,
    desc: "Sakit pəncərə guşəsi",
    shape: "rect-2",
  },

  // 2. Mərkəzi Zal
  {
    id: "T-05",
    number: 5,
    label: "Masa 05",
    zone: "center",
    zoneName: "Mərkəzi Zal",
    capacity: 4,
    isOccupied: false,
    desc: "Əsas zalın mərkəzində, akustik atmosfer",
    shape: "rect-4",
  },
  {
    id: "T-06",
    number: 6,
    label: "Masa 06",
    zone: "center",
    zoneName: "Mərkəzi Zal",
    capacity: 6,
    isOccupied: true,
    desc: "Böyük mərkəzi masa (Dolu)",
    shape: "rect-6",
  },
  {
    id: "T-07",
    number: 7,
    label: "Masa 07",
    zone: "center",
    zoneName: "Mərkəzi Zal",
    capacity: 4,
    isOccupied: false,
    desc: "Zövqlü çilçıraq altında",
    shape: "rect-4",
  },
  {
    id: "T-08",
    number: 8,
    label: "Masa 08",
    zone: "center",
    zoneName: "Mərkəzi Zal",
    capacity: 2,
    isOccupied: false,
    desc: "İkili rahat guşə",
    shape: "rect-2",
  },

  // 3. Qril & Ocaq Önü
  {
    id: "T-09",
    number: 9,
    label: "Masa 09",
    zone: "grill",
    zoneName: "Qril & Ocaq Önü",
    capacity: 4,
    isOccupied: false,
    desc: "Açıq fıstıq kömürü ocağını seyr edən masa",
    shape: "rect-4",
  },
  {
    id: "T-10",
    number: 10,
    label: "Masa 10",
    zone: "grill",
    zoneName: "Qril & Ocaq Önü",
    capacity: 4,
    isOccupied: true,
    desc: "Aşpaz şousunun önü (Dolu)",
    shape: "rect-4",
  },

  // 4. VİP / Şəxsi Guşə
  {
    id: "T-11",
    number: 11,
    label: "Masa 11 (VİP)",
    zone: "vip",
    zoneName: "Özəl Guşə / VİP",
    capacity: 6,
    isOccupied: false,
    desc: "Yarı-qapalı dəbdəbəli VİP guşə",
    shape: "rect-6",
  },
  {
    id: "T-12",
    number: 12,
    label: "Masa 12 (VİP Otaq)",
    zone: "vip",
    zoneName: "Özəl VİP Kabinet",
    capacity: 8,
    isOccupied: true,
    desc: "Tam qapalı şəxsi kabinet (Rezerv olunub)",
    shape: "rect-8",
  },
];

// Top-Down Architectural Table Component
function TableTopDownView({
  table,
  isSelected,
  onClick,
}: {
  table: TableItem;
  isSelected: boolean;
  onClick: () => void;
}) {
  const { capacity, isOccupied, label } = table;

  // Visual styling based on state
  const tableBg = isSelected
    ? "bg-[#c5a880] border-[#f4efe6] text-[#080808]"
    : isOccupied
    ? "bg-[#180e0e] border-[#552020] text-[#777777] cursor-not-allowed opacity-75"
    : "bg-[#141414] border-[#333333] hover:border-[#c5a880] text-[#f4efe6] hover:bg-[#1a1712]";

  const chairBg = isSelected
    ? "bg-[#f4efe6] border-[#080808]"
    : isOccupied
    ? "bg-[#381a1a] border-[#662626]"
    : "bg-[#1e1e1e] border-[#383838] group-hover:border-[#c5a880]";

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center p-2 cursor-pointer select-none transition-all"
    >
      {/* 2-SEATER TOP-DOWN (Left & Right Chairs) */}
      {capacity === 2 && (
        <div className="flex items-center space-x-1.5">
          {/* Left Chair */}
          <div className={`w-3 h-7 border ${chairBg} transition-colors`} />

          {/* Table Center */}
          <div
            className={`w-16 h-16 border flex flex-col items-center justify-center p-1.5 transition-all shadow-md ${tableBg} ${
              isSelected ? "ring-2 ring-[#c5a880]" : ""
            }`}
          >
            <span className="font-mono text-[10px] font-bold tracking-wider">
              {label}
            </span>
            <div className="flex items-center space-x-1 my-0.5 opacity-60">
              <span className="w-1.5 h-1.5 border border-current" />
              <span className="w-1.5 h-1.5 border border-current" />
            </div>
            <span className="text-[9px] font-mono tracking-tighter uppercase">
              {isOccupied ? "DOLU" : isSelected ? "SEÇİLDİ" : "2 QONAQ"}
            </span>
          </div>

          {/* Right Chair */}
          <div className={`w-3 h-7 border ${chairBg} transition-colors`} />
        </div>
      )}

      {/* 4-SEATER TOP-DOWN (2 Top, 2 Bottom Chairs) */}
      {capacity === 4 && (
        <div className="flex flex-col items-center space-y-1">
          {/* Top Chairs (2 chairs) */}
          <div className="flex space-x-4">
            <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
            <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
          </div>

          {/* Main Table Surface */}
          <div
            className={`w-24 h-16 border flex flex-col items-center justify-center p-1.5 transition-all shadow-md ${tableBg} ${
              isSelected ? "ring-2 ring-[#c5a880]" : ""
            }`}
          >
            <span className="font-mono text-[11px] font-bold tracking-wider">
              {label}
            </span>
            {/* 4 plate settings */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 my-0.5 opacity-60">
              <span className="w-1.5 h-1.5 border border-current" />
              <span className="w-1.5 h-1.5 border border-current" />
              <span className="w-1.5 h-1.5 border border-current" />
              <span className="w-1.5 h-1.5 border border-current" />
            </div>
            <span className="text-[9px] font-mono tracking-tighter uppercase font-medium">
              {isOccupied ? "DOLU" : isSelected ? "SEÇİLDİ" : "4 QONAQ"}
            </span>
          </div>

          {/* Bottom Chairs (2 chairs) */}
          <div className="flex space-x-4">
            <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
            <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
          </div>
        </div>
      )}

      {/* 6-SEATER TOP-DOWN (3 Top, 3 Bottom Chairs) */}
      {capacity === 6 && (
        <div className="flex flex-col items-center space-y-1">
          {/* Top Chairs (3 chairs) */}
          <div className="flex space-x-3">
            <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
            <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
            <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
          </div>

          {/* Main Long Table Surface */}
          <div
            className={`w-32 h-16 border flex flex-col items-center justify-center p-1.5 transition-all shadow-md ${tableBg} ${
              isSelected ? "ring-2 ring-[#c5a880]" : ""
            }`}
          >
            <span className="font-mono text-[11px] font-bold tracking-wider">
              {label}
            </span>
            {/* 6 plate settings */}
            <div className="grid grid-cols-3 gap-x-5 gap-y-1 my-0.5 opacity-60">
              <span className="w-1.5 h-1.5 border border-current" />
              <span className="w-1.5 h-1.5 border border-current" />
              <span className="w-1.5 h-1.5 border border-current" />
              <span className="w-1.5 h-1.5 border border-current" />
              <span className="w-1.5 h-1.5 border border-current" />
              <span className="w-1.5 h-1.5 border border-current" />
            </div>
            <span className="text-[9px] font-mono tracking-tighter uppercase font-medium">
              {isOccupied ? "DOLU" : isSelected ? "SEÇİLDİ" : "6 QONAQ (GENİŞ)"}
            </span>
          </div>

          {/* Bottom Chairs (3 chairs) */}
          <div className="flex space-x-3">
            <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
            <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
            <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
          </div>
        </div>
      )}

      {/* 8-SEATER VIP TOP-DOWN (3 Top, 3 Bottom, 1 Left, 1 Right) */}
      {capacity === 8 && (
        <div className="flex items-center space-x-1">
          {/* Left Head Chair */}
          <div className={`w-2.5 h-7 border ${chairBg} transition-colors`} />

          <div className="flex flex-col items-center space-y-1">
            {/* Top Chairs (3 chairs) */}
            <div className="flex space-x-3">
              <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
              <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
              <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
            </div>

            {/* Main VIP Table Surface */}
            <div
              className={`w-36 h-20 border flex flex-col items-center justify-center p-1.5 transition-all shadow-md ${tableBg} ${
                isSelected ? "ring-2 ring-[#c5a880]" : ""
              }`}
            >
              <div className="flex items-center space-x-1 mb-0.5">
                <span className="text-[9px] tracking-widest text-[#c5a880] uppercase">★ VİP ★</span>
              </div>
              <span className="font-mono text-[11px] font-bold tracking-wider">
                {label}
              </span>
              <span className="text-[9px] font-mono tracking-tighter uppercase font-medium mt-1">
                {isOccupied ? "REZERV OLUNUB" : isSelected ? "SEÇİLDİ" : "8 QONAQ (ŞƏXSİ)"}
              </span>
            </div>

            {/* Bottom Chairs (3 chairs) */}
            <div className="flex space-x-3">
              <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
              <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
              <div className={`w-6 h-2.5 border ${chairBg} transition-colors`} />
            </div>
          </div>

          {/* Right Head Chair */}
          <div className={`w-2.5 h-7 border ${chairBg} transition-colors`} />
        </div>
      )}

      {/* Tooltip / Hint on Hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-7 bg-[#050505] border border-[#333333] px-2 py-0.5 text-[9px] text-[#f4efe6] whitespace-nowrap z-20 pointer-events-none font-mono">
        {table.desc}
      </div>
    </div>
  );
}

export default function Reservation() {
  const [selectedTableId, setSelectedTableId] = useState<string>("T-03");
  const [tableWarning, setTableWarning] = useState<string | null>(null);

  const selectedTable = RESTAURANT_TABLES.find((t) => t.id === selectedTableId);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: selectedTable ? String(selectedTable.capacity) : "2",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTableClick = (table: TableItem) => {
    if (table.isOccupied) {
      setTableWarning(
        `"${table.label} — ${table.zoneName}" artıq REZERV EDİLİB. Zəhmət olmasa digər boş (qızılı haşiyəli) masalardan birini seçin.`
      );
      setTimeout(() => setTableWarning(null), 5000);
      return;
    }

    setTableWarning(null);
    setSelectedTableId(table.id);
    setFormData((prev) => ({
      ...prev,
      guests: String(table.capacity),
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Ad və soyadınızı daxil edin";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Əlaqə nömrənizi qeyd edin";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 7) {
      newErrors.phone = "Düzgün telefon nömrəsi daxil edin";
    }
    if (!formData.date) {
      newErrors.date = "Rezervasiya tarixini seçin";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      date: "",
      time: "19:00",
      guests: "2",
      notes: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 bg-[#0a0a0a] border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium">
              ARXİTEKTUR MASA PLANI (TOP-DOWN VIEW)
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f4efe6] font-normal tracking-tight mb-4">
            Real Zal Xəritəsində Masanızı Seçin
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
            Aşağıdakı 2D yuxarıdan baxış zal çertyojunda masaların və stulların real yerləşməsi əks olunmuşdur. Xəzər dənizi tərəfə pəncərə kənarı, mərkəzi zal və ya kömür ocağı qarşısındakı boş masaya klikləyərək yerinizi təyin edin.
          </p>
        </div>

        {/* 1. REAL TOP-DOWN ARCHITECTURAL FLOOR PLAN */}
        <div className="border border-[#2a2a2a] bg-[#0c0c0c] p-6 sm:p-10 mb-16 relative">
          
          {/* Top Bar: Title & Legend */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-[#1f1f1f] gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#f4efe6] font-medium">
                ZƏRİF QONAQ ZALI — MASA VƏ OTURACAQ SXEMİ
              </span>
              <p className="text-[11px] text-[#777777] mt-0.5 font-mono">
                Real 2D Memarlıq Planı • Bütün masalar və stullar yuxarıdan baxışda
              </p>
            </div>

            {/* Legend */}
            <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-xs">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-0.5">
                  <span className="w-1.5 h-3 border border-[#383838] bg-[#1e1e1e]" />
                  <span className="w-4 h-4 border border-[#333333] bg-[#141414]" />
                  <span className="w-1.5 h-3 border border-[#383838] bg-[#1e1e1e]" />
                </div>
                <span className="text-[#b8b2a7] text-[11px]">Boş Masa</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-0.5">
                  <span className="w-1.5 h-3 border border-[#080808] bg-[#f4efe6]" />
                  <span className="w-4 h-4 bg-[#c5a880] border border-[#f4efe6]" />
                  <span className="w-1.5 h-3 border border-[#080808] bg-[#f4efe6]" />
                </div>
                <span className="text-[#f4efe6] font-medium text-[11px]">Seçilmiş Masa</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-0.5">
                  <span className="w-1.5 h-3 border border-[#662626] bg-[#381a1a]" />
                  <span className="w-4 h-4 bg-[#180e0e] border border-[#552020]" />
                  <span className="w-1.5 h-3 border border-[#662626] bg-[#381a1a]" />
                </div>
                <span className="text-[#777777] text-[11px]">Dolu (Rezerv edilib)</span>
              </div>
            </div>
          </div>

          {/* Warning Notification */}
          {tableWarning && (
            <div className="mb-6 p-4 bg-[#261010] border-l-2 border-red-500 text-xs text-red-200">
              {tableWarning}
            </div>
          )}

          {/* Architectural Drawing Canvas */}
          <div className="relative border border-[#202020] bg-[#070707] p-6 sm:p-10 overflow-x-auto">
            
            {/* Top Windows Wall (Caspian Sea Panoramas) */}
            <div className="relative border-b-2 border-dashed border-[#2b4c6f] bg-[#0b1622]/40 py-3 px-6 text-center mb-12">
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#5b8ec2] font-mono font-medium">
                ◄ ŞÜŞƏ FASAD PƏNCƏRƏLƏRİ • XƏZƏR DƏNİZİ & MİLLİ BULVAR MƏNZƏRƏSİ ►
              </span>
            </div>

            {/* Inner Blueprint Layout */}
            <div className="min-w-[720px] space-y-12">
              
              {/* Row 1: Window Tables (Masa 01 - 04) */}
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#141414]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5b8ec2] font-mono">
                    BÖLGƏ 1: PƏNCƏRƏ KƏNARI SIRASI (DƏNİZ SAHİLİ)
                  </span>
                  <span className="text-[10px] text-[#666666] font-mono">Panoramik Görünüş</span>
                </div>

                <div className="grid grid-cols-4 gap-6 items-center justify-items-center bg-[#0a0f14]/30 p-6 border border-[#14202d]">
                  {RESTAURANT_TABLES.filter((t) => t.zone === "window").map((table) => (
                    <TableTopDownView
                      key={table.id}
                      table={table}
                      isSelected={selectedTableId === table.id}
                      onClick={() => handleTableClick(table)}
                    />
                  ))}
                </div>
              </div>

              {/* Middle Section: Center Tables + Kitchen + VIP */}
              <div className="grid grid-cols-12 gap-8 items-start">
                
                {/* Left Col: Open Grill Kitchen Area (4 cols) */}
                <div className="col-span-4 border border-[#221c16] bg-[#120e0a]/40 p-5">
                  <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-[#261f17]">
                    <span className="w-2 h-2 bg-[#d97706]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#d97706] font-mono font-medium">
                      BÖLGƏ 2: AÇIQ QRİL OCAĞI
                    </span>
                  </div>

                  <div className="space-y-6 flex flex-col items-center">
                    {RESTAURANT_TABLES.filter((t) => t.zone === "grill").map((table) => (
                      <TableTopDownView
                        key={table.id}
                        table={table}
                        isSelected={selectedTableId === table.id}
                        onClick={() => handleTableClick(table)}
                      />
                    ))}
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#261f17] text-center">
                    <span className="text-[9px] uppercase tracking-widest text-[#8a6338] font-mono">
                      🔥 Fıstıq Kömürü & Şou Mətbəxi
                    </span>
                  </div>
                </div>

                {/* Center Dining Tables (5 cols) */}
                <div className="col-span-5 border border-[#1c1c1c] bg-[#0c0c0c] p-5">
                  <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-[#1a1a1a]">
                    <span className="w-2 h-2 bg-[#c5a880]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-mono font-medium">
                      BÖLGƏ 3: MƏRKƏZİ QONAQ ZALI
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-8 gap-x-4 items-center justify-items-center">
                    {RESTAURANT_TABLES.filter((t) => t.zone === "center").map((table) => (
                      <TableTopDownView
                        key={table.id}
                        table={table}
                        isSelected={selectedTableId === table.id}
                        onClick={() => handleTableClick(table)}
                      />
                    ))}
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#1a1a1a] text-center">
                    <span className="text-[9px] uppercase tracking-widest text-[#777777] font-mono">
                      🎵 Akustik Musiqi & Çilçıraq Zonası
                    </span>
                  </div>
                </div>

                {/* Right Col: VIP Lounge (3 cols) */}
                <div className="col-span-3 border border-[#22172a] bg-[#100b16]/40 p-5">
                  <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-[#2b1c36]">
                    <span className="w-2 h-2 bg-[#a855f7]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#c084fc] font-mono font-medium">
                      BÖLGƏ 4: VİP GUŞƏ
                    </span>
                  </div>

                  <div className="space-y-6 flex flex-col items-center">
                    {RESTAURANT_TABLES.filter((t) => t.zone === "vip").map((table) => (
                      <TableTopDownView
                        key={table.id}
                        table={table}
                        isSelected={selectedTableId === table.id}
                        onClick={() => handleTableClick(table)}
                      />
                    ))}
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#2b1c36] text-center">
                    <span className="text-[9px] uppercase tracking-widest text-[#9333ea] font-mono">
                      👑 Şəxsi Kabinet & Xidmət
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Entrance Wall */}
            <div className="mt-12 pt-4 border-t-2 border-[#1f1f1f] flex items-center justify-between text-[10px] text-[#666666] font-mono uppercase tracking-widest">
              <span>◄ GİRİŞ QAPISI & HOSTESS QARŞILAMA MASASI</span>
              <span>BAR & ŞƏRAB ZİRZƏMİSİ QAPISI ►</span>
            </div>

          </div>

          {/* Table Summary Bar */}
          {selectedTable && (
            <div className="mt-8 p-5 bg-[#14120e] border border-[#3d2f1d] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#c5a880] text-[#080808] flex items-center justify-center font-mono font-bold text-sm">
                  {selectedTable.number}
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-[#f4efe6] font-medium">
                    Seçilmiş Masa: <strong className="text-[#c5a880]">{selectedTable.label}</strong> ({selectedTable.zoneName})
                  </p>
                  <p className="text-xs text-[#888888] mt-0.5">
                    Tutum: {selectedTable.capacity} nəfərlik oturacaq • {selectedTable.desc}
                  </p>
                </div>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-mono border border-[#c5a880]/50 px-4 py-2 self-start sm:self-auto bg-[#0a0a0a]">
                Rezerv Formasına Əlavə Edildi ✓
              </span>
            </div>
          )}

        </div>

        {/* 2. RESERVATION FORM & POLICIES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Details & Policy (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#222222] bg-[#0e0e0e] p-8 space-y-6">
              <h3 className="font-serif text-xl text-[#f4efe6]">
                Rezervasiya Qaydaları
              </h3>

              <div className="space-y-4 text-xs text-[#b8b2a7] leading-relaxed font-light">
                <div className="flex items-start space-x-3">
                  <span className="text-[#c5a880] font-mono text-sm">01.</span>
                  <p>
                    <strong className="text-[#f4efe6] font-normal">Telefon Təsdiqi:</strong> Onlayn müraciət göndərildikdən sonra 15-30 dəqiqə ərzində rezervasiya menecerimiz zəng edərək masanı təsdiqləyir.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-[#c5a880] font-mono text-sm">02.</span>
                  <p>
                    <strong className="text-[#f4efe6] font-normal">Gecikmə Vaxtı:</strong> Ayrılmış masa təyin olunmuş vaxtdan etibarən 20 dəqiqə ərzində saxlanılır.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-[#c5a880] font-mono text-sm">03.</span>
                  <p>
                    <strong className="text-[#f4efe6] font-normal">Xüsusi Masalar:</strong> Pəncərə kənarı dəniz mənzərəli masalar üçün əvvəlcədən müraciət etməyiniz tövsiyə edilir.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1a1a1a]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1">
                  Birbaşa Əlaqə
                </p>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, "")}`}
                  className="font-mono text-sm text-[#c5a880] hover:underline"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Micro Quote */}
            <div className="p-6 border-l-2 border-[#c5a880] bg-[#0e0e0e]">
              <p className="font-serif italic text-sm text-[#e6dfd1]">
                &ldquo;Hər bir masa bizim üçün xüsusi bir qonaqlıq və məsuliyyətdir.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Reservation Form (7 cols) */}
          <div className="lg:col-span-7 border border-[#222222] bg-[#0e0e0e] p-8 sm:p-10">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-14 h-14 border border-[#c5a880] mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#c5a880]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#f4efe6]">
                  Müraciətiniz Qəbul Edildi
                </h3>

                <p className="text-xs sm:text-sm text-[#b8b2a7] max-w-md mx-auto leading-relaxed">
                  Hörmətli <span className="text-[#f4efe6] font-medium">{formData.fullName}</span>, rezervasiya sorğunuz qeydə alındı. Masanızın dəqiq statusu üçün administratorumuz yaxın zamanda <span className="text-[#c5a880] font-mono">{formData.phone}</span> nömrəsi ilə əlaqə saxlayacaqdır.
                </p>

                <div className="p-5 bg-[#111111] border border-[#222222] max-w-sm mx-auto text-left text-xs font-mono space-y-1.5 text-[#888888]">
                  <p><span className="text-[#666666]">Seçilmiş Masa:</span> <strong className="text-[#c5a880]">{selectedTable?.label} ({selectedTable?.zoneName})</strong></p>
                  <p><span className="text-[#666666]">Tarix:</span> {formData.date}</p>
                  <p><span className="text-[#666666]">Saat:</span> {formData.time}</p>
                  <p><span className="text-[#666666]">Qonaq Sayı:</span> {formData.guests} nəfər</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="border border-[#333333] hover:border-[#c5a880] text-[#f4efe6] hover:text-[#c5a880] px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors"
                  >
                    Yeni Rezervasiya Et
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Active Table Indicator inside Form */}
                <div className="p-4 bg-[#111111] border border-[#2a2a2a] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#888888] block text-[10px] uppercase">Sxemdə Seçilmiş Masa:</span>
                    <span className="text-[#c5a880] font-mono font-medium text-sm">
                      {selectedTable?.label} — {selectedTable?.zoneName} ({selectedTable?.capacity} nəfərlik oturacaq)
                    </span>
                  </div>
                  <a
                    href="#reservation"
                    className="text-[10px] uppercase text-[#b8b2a7] hover:text-[#c5a880] underline font-mono"
                  >
                    Xəritədə Dəyiş
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mb-2">
                      Ad və Soyad *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Məs: Kamran Məmmədov"
                      className={`w-full bg-[#111111] border ${
                        errors.fullName ? "border-red-500" : "border-[#2a2a2a]"
                      } px-4 py-3 text-xs text-[#f4efe6] placeholder-[#555555]`}
                    />
                    {errors.fullName && (
                      <span className="text-[10px] text-red-400 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mb-2">
                      Əlaqə Nömrəsi *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+994 50 000 00 00"
                      className={`w-full bg-[#111111] border ${
                        errors.phone ? "border-red-500" : "border-[#2a2a2a]"
                      } px-4 py-3 text-xs text-[#f4efe6] placeholder-[#555555] font-mono`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-400 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Date */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mb-2">
                      Tarix *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className={`w-full bg-[#111111] border ${
                        errors.date ? "border-red-500" : "border-[#2a2a2a]"
                      } px-4 py-3 text-xs text-[#f4efe6]`}
                    />
                    {errors.date && (
                      <span className="text-[10px] text-red-400 mt-1 block">
                        {errors.date}
                      </span>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mb-2">
                      Saat
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-xs text-[#f4efe6]"
                    >
                      <option value="12:00">12:00 (Nahar)</option>
                      <option value="13:00">13:00 (Nahar)</option>
                      <option value="14:00">14:00 (Nahar)</option>
                      <option value="18:00">18:00 (Axşam)</option>
                      <option value="19:00">19:00 (Axşam)</option>
                      <option value="20:00">20:00 (Axşam)</option>
                      <option value="21:00">21:00 (Axşam)</option>
                      <option value="22:00">22:00 (Gecə)</option>
                    </select>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mb-2">
                      Qonaq Sayı
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-xs text-[#f4efe6]"
                    >
                      <option value="1">1 nəfər</option>
                      <option value="2">2 nəfər</option>
                      <option value="3">3 nəfər</option>
                      <option value="4">4 nəfər</option>
                      <option value="5">5 nəfər</option>
                      <option value="6">6 nəfər</option>
                      <option value="7">7 nəfər</option>
                      <option value="8+">8+ nəfər (Qrup)</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests / Notes */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mb-2">
                    Xüsusi Qeydlər və İstəklər
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Allergiyalar, ildönümü, ad günü və ya masaya dair xüsusi istəyiniz..."
                    className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-xs text-[#f4efe6] placeholder-[#555555] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#c5a880] hover:bg-[#d8bc94] text-[#080808] py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-200"
                >
                  {selectedTable?.label} Üçün Rezervasiya Sorğusunu Göndərin
                </button>

                <p className="text-[10px] text-center text-[#666666]">
                  * Sorğunuz göndərildikdən sonra seçdiyiniz masa üzrə administratorumuz telefonla təsdiq edəcəkdir.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

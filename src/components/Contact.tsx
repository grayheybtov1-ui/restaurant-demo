"use client";

import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#080808] border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-16">
          <span className="w-8 h-[1px] bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium">
            MƏKAN & ƏLAQƏ
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info (6 cols) */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f4efe6] font-normal tracking-tight mb-6">
                Bakının Mərkəzində, <br />
                <span className="italic text-[#c5a880]">Dəniz Sahilində</span>.
              </h2>
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-lg font-light">
                Bizimlə istənilən vaxt əlaqə saxlaya, özəl tədbirləriniz və ya korporativ axşamlarınız üçün xüsusi şərtləri müzakirə edə bilərsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#1a1a1a] pt-8">
              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#c5a880]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Ünvan</span>
                </div>
                <p className="text-xs text-[#f4efe6] font-light leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
                <p className="text-[11px] text-[#666666]">
                  (Dövlət Kukla Teatrı yaxınlığı, Bulvar qarşısı)
                </p>
              </div>

              {/* Phones */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#c5a880]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Telefonlar</span>
                </div>
                <p className="text-xs text-[#f4efe6] font-mono">
                  Şəhər: <a href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-[#c5a880]">{RESTAURANT_INFO.phone}</a>
                </p>
                <p className="text-xs text-[#f4efe6] font-mono">
                  Mobil: <a href={`tel:${RESTAURANT_INFO.mobile.replace(/\s+/g, "")}`} className="hover:text-[#c5a880]">{RESTAURANT_INFO.mobile}</a>
                </p>
              </div>

              {/* Working Hours */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#c5a880]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium">İş Saatları</span>
                </div>
                <div className="text-xs text-[#888888] space-y-1 font-mono">
                  <p>B.e — Cümə: <span className="text-[#f4efe6]">{RESTAURANT_INFO.workingHours.weekdays}</span></p>
                  <p>Şənbə: <span className="text-[#f4efe6]">{RESTAURANT_INFO.workingHours.saturday}</span></p>
                  <p>Bazar: <span className="text-[#f4efe6]">{RESTAURANT_INFO.workingHours.sunday}</span></p>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#c5a880]">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium">E-Poçt</span>
                </div>
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-xs text-[#f4efe6] font-mono hover:text-[#c5a880] block">
                  {RESTAURANT_INFO.email}
                </a>
                <p className="text-[11px] text-[#666666]">
                  Korporativ və media sorğuları üçün
                </p>
              </div>
            </div>

            {/* WhatsApp Quick Action */}
            <div className="pt-4">
              <a
                href={`https://wa.me/994502224848?text=${encodeURIComponent("Salam, ZƏRİF restoranında masa rezervasiyası barədə məlumat almaq istərdim.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 border border-[#2a2a2a] hover:border-[#25D366] bg-[#0e0e0e] hover:bg-[#151515] text-[#f4efe6] px-6 py-4 text-xs uppercase tracking-[0.2em] transition-all"
              >
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.974.542 1.839.814 2.792.815 3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.821-1.24l-7.179 1.881 1.914-6.995c-.883-1.492-1.394-3.232-1.394-5.088 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
                </svg>
                <span>WhatsApp ilə Əlaqə Saxlayın</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Map Representation (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border border-[#222222] bg-[#0e0e0e] p-4 relative">
              <div className="relative aspect-[4/3] w-full bg-[#141414] border border-[#1f1f1f] overflow-hidden flex flex-col items-center justify-center p-8 text-center">
                
                {/* Visual Map Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60 pointer-events-none" />

                {/* Stylized Caspian Sea indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#10171d]/60 border-t border-[#1e2a38] flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#3d5a80] font-mono">
                    XƏZƏR DƏNİZİ • BAKİ BUXTASI
                  </span>
                </div>

                {/* Pin and Label */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 border border-[#c5a880] bg-[#080808] flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-[#c5a880]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>

                  <span className="font-serif text-lg text-[#f4efe6] font-medium">
                    ZƏRİF RESTORAN
                  </span>
                  <span className="text-[11px] text-[#c5a880] font-mono mt-0.5">
                    Neftçilər prospekti 48
                  </span>
                  <span className="text-[10px] text-[#666666] mt-2 max-w-xs">
                    Parkinq və Valet xidməti restoran qarşısında təmin edilir
                  </span>
                </div>

              </div>

              {/* Map Footer Button */}
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-[#888888]">
                  Vizual məkan xəritəsi
                </span>
                <a
                  href="https://maps.google.com/?q=Neftchilar+Avenue+Baku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c5a880] hover:text-[#f4efe6] uppercase tracking-[0.15em] border border-[#2a2a2a] hover:border-[#c5a880] px-4 py-2 transition-colors font-mono"
                >
                  Google Maps-də Açın ↗
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-[#080808] pt-28 pb-16 flex flex-col justify-between border-b border-[#222222]">
      {/* Background Subtle Ambience Line */}
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-[#181818] pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-2/3 w-[1px] h-full bg-[#141414] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / Editorial Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-8">
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium">
                BAKI • AZƏRBAYCAN • EST. {RESTAURANT_INFO.established}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f4efe6] font-normal leading-[1.08] tracking-tight mb-8">
              Kulinariya <br />
              <span className="italic font-light text-[#c5a880]">sənəti</span> və <br />
              odun hərarəti.
            </h1>

            <p className="text-[#b8b2a7] text-sm sm:text-base leading-relaxed max-w-xl mb-10 font-light">
              Xəzər sahilində, paytaxtın tarixi mərkəzində yerləşən <strong className="text-[#f4efe6] font-normal">ZƏRİF</strong> — yerli torpağın zəngin ənənələrini Avropa haute cuisine dəqiqliyi və açıq fıstıq kömürünün sirli tüstüsü ilə vəhdətə gətirir.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
              <a
                href="#reservation"
                className="bg-[#c5a880] hover:bg-[#d8bc94] text-[#080808] px-8 py-4 text-xs uppercase tracking-[0.22em] font-semibold text-center transition-all duration-200"
              >
                Masa Rezervasiyası
              </a>
              <a
                href="#menu"
                className="border border-[#333333] hover:border-[#c5a880] text-[#f4efe6] hover:text-[#c5a880] px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium text-center transition-all duration-200"
              >
                Menyu ilə Tanış Olun
              </a>
            </div>

            {/* Micro Details */}
            <div className="mt-14 pt-8 border-t border-[#1a1a1a] grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1">Məkan</span>
                <span className="text-xs text-[#f4efe6] font-mono">Neftçilər pr. 48</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1">İş Rejimi</span>
                <span className="text-xs text-[#f4efe6] font-mono">12:00 — 00:00</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#888888] mb-1">Telefon</span>
                <span className="text-xs text-[#c5a880] font-mono">{RESTAURANT_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image (5 cols) - Asymmetric Editorial Framed */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] border border-[#222222] bg-[#121212] p-3">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
                  alt="ZƏRİF Restoranı Müəllif Yeməyi"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Badge in corner */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0a0a0a]/90 border border-[#2a2a2a] backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] mb-0.5">Xüsusi Təqdimat</p>
                      <p className="font-serif text-sm text-[#f4efe6]">48 Saatlıq Sous-Vide Quzu Əti</p>
                    </div>
                    <span className="text-xs font-mono text-[#c5a880] border border-[#333333] px-2 py-1">
                      78 AZN
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#c5a880] pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Bottom Feature Strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#1a1a1a] pt-6 gap-6">
          <div className="flex items-start space-x-4">
            <span className="font-serif text-[#c5a880] text-xl font-light">01</span>
            <div>
              <h2 className="text-xs uppercase tracking-[0.16em] text-[#f4efe6] font-medium mb-1">Müəllif Mətbəxi</h2>
              <p className="text-xs text-[#888888] leading-relaxed">
                Hər mövsüm yenilənən, unikal yerli inqrediyentlərlə hazırlanan degustasiya reseptləri.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="font-serif text-[#c5a880] text-xl font-light">02</span>
            <div>
              <h2 className="text-xs uppercase tracking-[0.16em] text-[#f4efe6] font-medium mb-1">Fıstıq Kömüründə Qril</h2>
              <p className="text-xs text-[#888888] leading-relaxed">
                28 gün xüsusi kameralarda qurudulmuş mərmər ətlər və təbii odun tüstüsü ləzzəti.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="font-serif text-[#c5a880] text-xl font-light">03</span>
            <div>
              <h2 className="text-xs uppercase tracking-[0.16em] text-[#f4efe6] font-medium mb-1">Seçmə Şərab Kolleksiyası</h2>
              <p className="text-xs text-[#888888] leading-relaxed">
                Sommelierimiz tərəfindən hər xörəyə uyğunlaşdırılmış yerli və dünya kolleksiyası.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

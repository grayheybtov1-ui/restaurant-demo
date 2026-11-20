"use client";

import React from "react";
import Image from "next/image";

export default function ChefSpecial() {
  return (
    <section id="chef-special" className="py-24 sm:py-32 bg-[#060606] border-b border-[#222222] relative overflow-hidden">
      {/* Decorative background grid line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-16">
          <span className="w-8 h-[1px] bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium">
            AŞPAZIN XÜSUSİ TƏQDİMATI • MÖVSÜMİ TƏKLİF
          </span>
        </div>

        {/* Feature Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Dramatic Big Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] w-full border border-[#262626] bg-[#111111] overflow-hidden p-2">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85"
                  alt="ZƏRİF Xüsusi Tomahawk Steyki"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Dish Badge */}
                <div className="absolute top-4 left-4 bg-[#0a0a0a]/90 border border-[#2a2a2a] px-3 py-1.5 backdrop-blur-sm">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-mono">
                    28 GÜN DRY-AGED
                  </span>
                </div>
              </div>
            </div>

            {/* Accent Borders */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#c5a880] pointer-events-none" />
          </div>

          {/* Right: Dish Narrative & Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#888888] font-mono mb-2 block">
              MƏHDUD SAYDA GÜNDƏLİK HAZIRLANIR
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f4efe6] font-normal leading-tight mb-4">
              ZƏRİF Xüsusi <br />
              <span className="italic text-[#c5a880]">Tomahawk</span> Steyk
            </h2>

            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-[#1f1f1f]">
              <span className="font-serif text-3xl text-[#c5a880] font-medium font-mono">
                195 AZN
              </span>
              <span className="text-xs text-[#888888] border-l border-[#222222] pl-4 font-mono">
                Çəki: ~950q (2 nəfərlik servis)
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#b8b2a7] leading-relaxed font-light mb-8">
              <p>
                Xüsusi nəzarət olunan iqlim kamerasında 28 gün ərzində Himalay duz blokları arasında yaşlandırılmış mərmər sümüklü dana əti. 
              </p>
              <p>
                Açıq palıd və fıstıq kömürünün 400°C hərarətində qısa müddətdə möhürlənərək təbii şirəsi içərisində saxlanılır. Masaya rozmarin dumanı və təbii kərə yağı sousu ilə təqdim edilir.
              </p>
            </div>

            {/* Pairing & Origin Box */}
            <div className="border border-[#1f1f1f] bg-[#0c0c0c] p-5 mb-8 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#888888] uppercase tracking-wider">Mənşə:</span>
                <span className="text-[#f4efe6] font-mono">Qarabağ Dağ Otlaqları</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#888888] uppercase tracking-wider">Tövsiyə Edilən Şərab:</span>
                <span className="text-[#c5a880] font-mono">Mədrəsə Rezerv 2018</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#888888] uppercase tracking-wider">Bişirilmə Dərəcəsi:</span>
                <span className="text-[#f4efe6] font-mono">Medium Rare (54°C)</span>
              </div>
            </div>

            {/* Action */}
            <div className="flex items-center space-x-4">
              <a
                href="#reservation"
                className="bg-[#c5a880] hover:bg-[#d8bc94] text-[#080808] px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-colors text-center w-full sm:w-auto"
              >
                Bu Təam Üçün Masa Ayırın
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

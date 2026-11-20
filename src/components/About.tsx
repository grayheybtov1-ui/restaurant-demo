"use client";

import React from "react";
import Image from "next/image";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0c0c0c] border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-16">
          <span className="w-8 h-[1px] bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium">
            FƏLSƏFƏMİZ & HEKAYƏMİZ
          </span>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[3/4] w-full border border-[#222222] bg-[#141414] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85"
                alt="Baş Aşpaz Rauf Əliyev mətbəxdə"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] block mb-1">
                  Kulinariya Liderliyi
                </span>
                <p className="font-serif text-xl text-[#f4efe6]">
                  {RESTAURANT_INFO.chef.name}
                </p>
                <p className="text-xs text-[#b8b2a7] mt-0.5">
                  {RESTAURANT_INFO.chef.title}
                </p>
              </div>
            </div>

            {/* Small Stat Box below photo */}
            <div className="grid grid-cols-3 border border-[#222222] bg-[#0e0e0e] divide-x divide-[#222222] text-center py-4">
              <div>
                <span className="block font-serif text-2xl text-[#c5a880]">18+</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#888888]">İllik Təcrübə</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#c5a880]">48+</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#888888]">Müəllif Resepti</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#c5a880]">100%</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#888888]">Təbii Kömür</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f4efe6] font-normal leading-[1.18] mb-8">
              Ənənənin kökləri, <br />
              müasir baxışın <span className="italic text-[#c5a880]">zərifliyi</span>.
            </h2>

            <div className="space-y-6 text-[#b8b2a7] text-sm sm:text-base leading-relaxed font-light">
              <p>
                <strong className="text-[#f4efe6] font-normal">ZƏRİF</strong> sadəcə qidalanma yeri deyil — bu, hər zövqün, hər teksturanın və qoxunun dəqiqliklə hesablandığı bir qastronomik sığınacaqdır. Bakının mərkəzində açılan restoranımız, Azərbaycan mətbəxinin qədim od ənənələrini Avropa kulinariya intizamı ilə bir araya gətirir.
              </p>
              <p>
                Biz inanırıq ki, əsl ləzzət inqrediyentin saflığı ilə başlayır. Şamaxının dağ otlaqlarından təmin edilən təbii quzu ətləri, Xəzərin təzə nərə balığı, Abşeronun qızıl zəfəranı və Göyçayın şirin narları hər gün mətbəximizdə sənət əsərinə çevrilir.
              </p>
              <p className="border-l-2 border-[#c5a880] pl-6 text-[#f4efe6] italic font-serif text-base sm:text-lg">
                &ldquo;Mətbəxdə hər bir alov, hər bir duz kristalı məqsədli olmalıdır. Süfrəyə çatan hər bir boşqab qonağımıza unudulmaz bir duyğu bəxş etməlidir.&rdquo;
              </p>
              <div className="pt-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-mono">
                  — Rauf Əliyev, Baş Aşpaz
                </span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 pt-8 border-t border-[#1e1e1e]">
              <div className="border border-[#1f1f1f] p-5 bg-[#0e0e0e]">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] mb-2 font-medium">
                  Məhsul Fəlsəfəsi
                </h3>
                <p className="text-xs text-[#888888] leading-relaxed">
                  Heç bir dondurulmuş yarımfabrikat istifadə edilmir. Bütün ətlər və dəniz məhsulları yerli fermerlərdən gündəlik təmin olunur.
                </p>
              </div>

              <div className="border border-[#1f1f1f] p-5 bg-[#0e0e0e]">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] mb-2 font-medium">
                  Kömür & Od Məktəbi
                </h3>
                <p className="text-xs text-[#888888] leading-relaxed">
                  İspaniyanın məşhur qapalı kömür sobalarında palıd və meyvə ağaclarının közündə bişirilən təkrarolunmaz ət növləri.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-[#b8b2a7] border-t border-[#222222] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main 4-column footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1a1a1a]">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#hero" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.25em] text-[#f4efe6] uppercase font-medium">
                {RESTAURANT_INFO.name}
              </span>
              <span className="block text-[9px] tracking-[0.35em] text-[#c5a880] uppercase mt-1">
                {RESTAURANT_INFO.subtitle}
              </span>
            </Link>
            
            <p className="text-xs text-[#888888] leading-relaxed max-w-sm font-light pt-2">
              Bakının zövqlü sahilində yerləşən ZƏRİF — yüksək keyfiyyətli kulinariya ənənələrini və zərif qonaqpərvərliyi təqdim edən müasir qastronomiya məkanıdır.
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#c5a880]">
              EST. {RESTAURANT_INFO.established} • BAKI, AZƏRBAYCAN
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#f4efe6] font-medium border-b border-[#1f1f1f] pb-2">
              Bölmələr
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="#hero" className="hover:text-[#c5a880] transition-colors">
                  Ana Səhifə
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#c5a880] transition-colors">
                  Haqqımızda & Fəlsəfəmiz
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#c5a880] transition-colors">
                  A la Carte Menyu
                </Link>
              </li>
              <li>
                <Link href="#chef-special" className="hover:text-[#c5a880] transition-colors">
                  Aşpazın Xüsusi Təqdimatı
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#c5a880] transition-colors">
                  Foto Qalereya
                </Link>
              </li>
              <li>
                <Link href="#reservation" className="hover:text-[#c5a880] transition-colors">
                  Masa Rezervasiyası
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#c5a880] transition-colors">
                  Əlaqə & Məkan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Direct Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#f4efe6] font-medium border-b border-[#1f1f1f] pb-2">
              İş Rejimi
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#888888]">
              <p>
                <span className="text-[#f4efe6]">B.e — Cümə:</span> <br />
                {RESTAURANT_INFO.workingHours.weekdays}
              </p>
              <p>
                <span className="text-[#f4efe6]">Şənbə:</span> <br />
                {RESTAURANT_INFO.workingHours.saturday}
              </p>
              <p>
                <span className="text-[#f4efe6]">Bazar:</span> <br />
                {RESTAURANT_INFO.workingHours.sunday}
              </p>
            </div>

            <div className="pt-2 text-xs">
              <span className="text-[10px] uppercase tracking-wider text-[#666666] block">Masa Rezervi Üçün:</span>
              <a href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, "")}`} className="text-[#c5a880] font-mono hover:underline">
                {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Col 4: Socials & Private Events (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#f4efe6] font-medium border-b border-[#1f1f1f] pb-2">
              Sosial Şəbəkələr
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={RESTAURANT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c5a880] transition-colors flex items-center space-x-2"
                >
                  <span>Instagram</span>
                  <span className="text-[10px] text-[#666666]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c5a880] transition-colors flex items-center space-x-2"
                >
                  <span>Facebook</span>
                  <span className="text-[10px] text-[#666666]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.socials.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c5a880] transition-colors flex items-center space-x-2"
                >
                  <span>TripAdvisor</span>
                  <span className="text-[10px] text-[#666666]">↗</span>
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="#reservation"
                className="block text-center border border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#080808] py-2.5 px-3 text-[10px] uppercase tracking-[0.2em] font-medium transition-all"
              >
                Masa Ayırın
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#555555]">
          <p>© {new Date().getFullYear()} ZƏRİF Restoranı. Bütün hüquqlar qorunur.</p>
          <p className="mt-4 sm:mt-0 tracking-widest uppercase text-[10px] font-mono">
            Bakı, Neftçilər prospekti 48
          </p>
        </div>

      </div>
    </footer>
  );
}

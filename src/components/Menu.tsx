"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MENU_CATEGORIES } from "@/data/restaurantData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  const currentCategory =
    MENU_CATEGORIES.find((cat) => cat.id === activeCategory) ||
    MENU_CATEGORIES[0];

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#080808] border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#1f1f1f] pb-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium">
                QASTRO SEÇİMLƏR
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f4efe6] font-normal tracking-tight">
              A la Carte Menyu
            </h2>
          </div>
          <p className="text-xs text-[#888888] tracking-widest uppercase mt-4 md:mt-0 font-mono">
            Bütün qiymətlər AZN ilə göstərilmişdir
          </p>
        </div>

        {/* Category Tabs - Sharp, Square, Minimalist */}
        <div className="flex items-center space-x-1 sm:space-x-2 border-b border-[#222222] overflow-x-auto pb-4 mb-16 scrollbar-none">
          {MENU_CATEGORIES.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all whitespace-nowrap border ${
                  isActive
                    ? "border-[#c5a880] bg-[#141414] text-[#c5a880]"
                    : "border-transparent text-[#b8b2a7] hover:text-[#f4efe6] hover:border-[#222222]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Category Tagline */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-lg sm:text-xl text-[#f4efe6]">
            &ldquo;{currentCategory.tagline}&rdquo;
          </p>
          <div className="w-12 h-[1px] bg-[#c5a880] mx-auto mt-4" />
        </div>

        {/* Menu Items Grid - Elegant Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10">
          {currentCategory.items.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5 group border-b border-[#171717] pb-8"
            >
              {/* Optional Item Image (if available) */}
              {item.image && (
                <div className="relative w-full sm:w-24 h-44 sm:h-24 shrink-0 border border-[#222222] bg-[#121212] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 96px"
                  />
                </div>
              )}

              {/* Item Info */}
              <div className="flex-1 w-full">
                <div className="flex items-baseline justify-between w-full mb-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-serif text-lg text-[#f4efe6] group-hover:text-[#c5a880] transition-colors">
                      {item.name}
                    </h3>
                    {item.isChefRecommendation && (
                      <span className="text-[9px] uppercase tracking-wider bg-[#1f1a14] border border-[#524128] text-[#c5a880] px-1.5 py-0.5 font-mono">
                        Seçmə
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    {item.weight && (
                      <span className="text-[11px] text-[#666666] font-mono">
                        {item.weight}
                      </span>
                    )}
                    <span className="font-mono text-sm text-[#c5a880] font-semibold whitespace-nowrap">
                      {item.price} AZN
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#888888] leading-relaxed font-light mt-1.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Note & Reservation Call */}
        <div className="mt-16 pt-8 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between text-xs text-[#777777]">
          <p className="mb-4 sm:mb-0">
            * Xüsusi allergiyalar və ya pəhriz tələbləriniz barədə sifariş zamanı ofisianta məlumat verməyiniz xahiş olunur.
          </p>
          <a
            href="#reservation"
            className="text-[#c5a880] hover:text-[#f4efe6] uppercase tracking-[0.2em] font-medium border-b border-[#c5a880] pb-0.5"
          >
            Masa Rezervi Edin →
          </a>
        </div>

      </div>
    </section>
  );
}

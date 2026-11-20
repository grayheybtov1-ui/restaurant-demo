"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/data/restaurantData";

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "Bütün Şəkillər" },
    { id: "İnteryer", name: "İnteryer" },
    { id: "Yeməklər", name: "Yeməklər" },
    { id: "Mətbəx", name: "Qril & Mətbəx" },
    { id: "Atmosfer", name: "Atmosfer" },
  ];

  const filteredImages =
    filter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0a0a0a] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#1f1f1f] pb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium">
                ATMOSFER & VİZUAL
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f4efe6] font-normal tracking-tight">
              Foto Qalereya
            </h2>
          </div>

          {/* Filter Pills - Square */}
          <div className="flex items-center flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`text-[11px] uppercase tracking-[0.16em] px-3.5 py-2 border transition-all ${
                  filter === cat.id
                    ? "border-[#c5a880] text-[#c5a880] bg-[#141414]"
                    : "border-[#222222] text-[#888888] hover:text-[#f4efe6]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`relative border border-[#222222] bg-[#121212] overflow-hidden group ${image.aspect}`}
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#c5a880] block mb-1">
                  {image.category}
                </span>
                <p className="font-serif text-base text-[#f4efe6]">
                  {image.title}
                </p>
              </div>

              {/* Minimal Top-Right Tag */}
              <div className="absolute top-3 right-3 bg-[#080808]/80 border border-[#262626] px-2 py-0.5 pointer-events-none">
                <span className="text-[9px] text-[#888888] font-mono uppercase">
                  ZƏRİF • {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#666666] tracking-wider uppercase">
            Hər kadr restoranımızın real məkan və yeməklərinin təcəssümüdür
          </p>
        </div>

      </div>
    </section>
  );
}

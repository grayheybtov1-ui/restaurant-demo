"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Səhifə", href: "#hero" },
    { name: "Haqqımızda", href: "#about" },
    { name: "Menyu", href: "#menu" },
    { name: "Aşpazın Təklifi", href: "#chef-special" },
    { name: "Qalereya", href: "#gallery" },
    { name: "Rezervasiya", href: "#reservation" },
    { name: "Əlaqə", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#222222] py-4"
          : "bg-transparent border-b border-[#222222]/50 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#hero" className="flex flex-col group">
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#f4efe6] group-hover:text-[#c5a880] transition-colors uppercase font-medium">
            {RESTAURANT_INFO.name}
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#c5a880] uppercase mt-1">
            BAKI • NEFTÇİLƏR PR.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-[#b8b2a7] hover:text-[#c5a880] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a880] hover:after:w-full after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center">
          <a
            href="#reservation"
            className="border border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#080808] px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200"
          >
            Masa Rezervi
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#f4efe6] hover:text-[#c5a880] focus:outline-none"
          aria-label="Menyunu aç"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span
              className={`h-[1px] bg-current transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`h-[1px] bg-current transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1px] bg-current transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-[#080808] border-t border-[#222222] z-40 p-8 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#f4efe6] hover:text-[#c5a880] transition-colors border-b border-[#1a1a1a] pb-3"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-[#222222] flex flex-col space-y-4">
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, "")}`}
              className="text-sm font-mono text-[#c5a880]"
            >
              Tel: {RESTAURANT_INFO.phone}
            </a>
            <p className="text-xs text-[#888888] leading-relaxed">
              {RESTAURANT_INFO.address}
            </p>
            <a
              href="#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#c5a880] text-[#080808] py-3.5 text-xs uppercase tracking-[0.2em] font-semibold"
            >
              Masa Rezervasiyası Et
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

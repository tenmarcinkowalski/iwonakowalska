"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#oferta", label: "Oferta" },
  { href: "#warsztaty", label: "Warsztaty" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
          className="flex flex-col"
        >
          <span
            className={`font-[family-name:var(--font-cinzel)] text-base tracking-[0.25em] uppercase font-semibold transition-colors duration-500 ${
              scrolled ? "text-[#1B4332]" : "text-white"
            }`}
          >
            Iwona Kowalska
          </span>
          <span
            className={`font-[family-name:var(--font-playfair)] text-sm tracking-[0.15em] italic transition-colors duration-500 ${
              scrolled ? "text-[#8B5E3C]" : "text-white/80"
            }`}
          >
            Terapia żywieniowa TCM
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#2D6A4F] ${
                  scrolled ? "text-[#4A2C0A]" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#kontakt")}
              className={`font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] uppercase px-6 py-2.5 border transition-all duration-300 ${
                scrolled
                  ? "border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#1B4332]"
              }`}
            >
              Umów konsultację
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-[#1B4332]" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-[#1B4332]" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-[#1B4332]" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#FAF7F2] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 border-b border-[#EDE6D6]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.2em] uppercase text-[#4A2C0A] hover:text-[#1B4332] transition-colors w-full text-left py-1"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#kontakt")}
              className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.2em] uppercase px-5 py-2 border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-all w-full mt-2"
            >
              Umów konsultację
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

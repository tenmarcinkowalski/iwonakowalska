"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Konsultacja indywidualna",
    subtitle: "Pierwsze spotkanie",
    description:
      "Szczegółowy wywiad żywieniowy i energetyczny według TCM. Analizujemy Twój aktualny stan zdrowia, nawyki żywieniowe i styl życia. Razem wyznaczamy kierunek zmian.",
    duration: "90 minut",
    tag: "Pierwszy krok",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Indywidualny plan żywieniowy",
    subtitle: "Spersonalizowane menu",
    description:
      "Plan żywieniowy dostosowany do Twojej konstytucji energetycznej wg 5 Przemian. Sezonowe produkty, smaki i techniki gotowania wspierające Twój konkretny stan.",
    duration: "Przygotowanie: 5–7 dni",
    tag: "Najbardziej popularne",
    featured: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Pakiet wsparcia",
    subtitle: "Proces zmiany",
    description:
      "Cykl spotkań wspierających trwałą zmianę nawyków żywieniowych. Regularne konsultacje, bieżące korekty planu i psychodietetyczne wsparcie w trudniejszych momentach.",
    duration: "4–8 tygodni",
    tag: "Długofalowe efekty",
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Offer() {
  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="oferta" className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <FadeIn className="text-center mb-16">
          <p className="font-[family-name:var(--font-cinzel)] text-[#8B5E3C] text-sm tracking-[0.35em] uppercase mb-4">
            Jak mogę Ci pomóc
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-4xl md:text-5xl font-light tracking-wide">
            Oferta
          </h2>
          <div className="w-12 h-px bg-[#8B5E3C] mx-auto mt-6 mb-6" />
          <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/90 text-lg italic max-w-2xl mx-auto leading-relaxed">
            Każda współpraca jest dostosowana indywidualnie do Twoich potrzeb i aktualnego stanu energetycznego.
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={0.15 * i}>
              <div
                className={`relative flex flex-col h-full p-8 border transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg ${
                  service.featured
                    ? "bg-[#1B4332] border-[#1B4332] text-white"
                    : "bg-[#FFFDF7] border-[#EDE6D6] text-[#4A2C0A] hover:border-[#2D6A4F]"
                }`}
              >
                {/* Tag */}
                <div
                  className={`absolute -top-3 left-6 px-3 py-1 text-[10px] font-[family-name:var(--font-cinzel)] tracking-[0.2em] uppercase ${
                    service.featured
                      ? "bg-[#8B5E3C] text-white"
                      : "bg-[#EDE6D6] text-[#8B5E3C]"
                  }`}
                >
                  {service.tag}
                </div>

                {/* Icon */}
                <div
                  className={`mb-6 ${
                    service.featured ? "text-white/70" : "text-[#2D6A4F]"
                  }`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className={`font-[family-name:var(--font-cinzel)] text-lg font-semibold tracking-wide mb-1 ${
                    service.featured ? "text-white" : "text-[#1B4332]"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`font-[family-name:var(--font-playfair)] text-base italic mb-4 ${
                    service.featured ? "text-white/85" : "text-[#8B5E3C]"
                  }`}
                >
                  {service.subtitle}
                </p>

                {/* Description */}
                <p
                  className={`font-[family-name:var(--font-playfair)] text-base leading-relaxed flex-grow ${
                    service.featured ? "text-white/90" : "text-[#4A2C0A]/90"
                  }`}
                >
                  {service.description}
                </p>

                {/* Duration */}
                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-2 ${
                    service.featured
                      ? "border-white/20 text-white/60"
                      : "border-[#EDE6D6] text-[#8B5E3C]"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.2em] uppercase font-semibold">
                    {service.duration}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.5} className="text-center mt-14">
          <button
            onClick={scrollToContact}
            className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] uppercase px-10 py-4 bg-[#1B4332] text-white hover:bg-[#2D6A4F] transition-all duration-300"
          >
            Skontaktuj się
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

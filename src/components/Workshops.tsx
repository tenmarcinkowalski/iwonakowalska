"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    title: "Warsztaty kulinarne TCM",
    description:
      "Praktyczne zajęcia łączące gotowanie z filozofią 5 Przemian. Uczymy się dobierać produkty i techniki gotowania do pory roku i własnej konstytucji energetycznej.",
  },
  {
    title: "Wykłady i prelekcje",
    description:
      "Autorskie wykłady m.in. w Instytucie Zielarstwa Polskiego. Tematy obejmują dietetykę TCM, sezonowość w żywieniu i holistyczne podejście do zdrowia kobiet.",
  },
  {
    title: "Warsztaty online",
    description:
      "Webinary i kursy online dostępne dla każdego. Łączysz wiedzę TCM z wygodą nauki z domu — w swoim własnym rytmie.",
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

export default function Workshops() {
  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="warsztaty" className="bg-[#1B4332] py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-80 h-80 opacity-[0.04]">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" r="60" stroke="white" strokeWidth="1" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="white" strokeWidth="0.5" />
          <line x1="73" y1="73" x2="327" y2="327" stroke="white" strokeWidth="0.5" />
          <line x1="327" y1="73" x2="73" y2="327" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute left-0 bottom-0 w-64 h-64 opacity-[0.04]">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="150" cy="150" r="130" stroke="white" strokeWidth="1" />
          <circle cx="150" cy="150" r="80" stroke="white" strokeWidth="1" />
          <circle cx="150" cy="150" r="30" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <FadeIn className="text-center mb-16">
          <p className="font-[family-name:var(--font-cinzel)] text-[#FAF7F2] text-xs tracking-[0.4em] uppercase mb-4">
            Edukacja i praktyka
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-white text-3xl md:text-4xl font-light tracking-wide">
            Warsztaty i Wykłady
          </h2>
          <div className="w-12 h-px bg-[#8B5E3C] mx-auto mt-6 mb-6" />
          <p className="font-[family-name:var(--font-playfair)] text-white/60 italic max-w-xl mx-auto">
            Wiedza, którą można od razu zastosować w codziennej kuchni.
          </p>
        </FadeIn>

        {/* Items grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {items.map((item, i) => (
            <FadeIn key={i} delay={0.15 * i}>
              <div className="border border-white/10 p-8 hover:border-[#8B5E3C]/60 transition-all duration-300 group">
                {/* Number */}
                <div className="font-[family-name:var(--font-cinzel)] text-[#8B5E3C]/40 text-4xl font-light mb-6 group-hover:text-[#8B5E3C]/70 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="font-[family-name:var(--font-cinzel)] text-white text-base font-semibold tracking-wide mb-4">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-playfair)] text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Downloads */}
        <FadeIn delay={0.5}>
          <div className="border border-white/15 bg-white/[0.02] p-8 md:p-10 max-w-3xl mx-auto text-center">
            <p className="font-[family-name:var(--font-cinzel)] text-[#FAF7F2] text-xs tracking-[0.3em] uppercase mb-4">
              Pliki do pobrania
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-white/65 italic mb-8">
              Podstawy odżywiania wg 5 przemian
            </p>
            <a
              href="/downloads/podstawy-odzywiania-wg-5-przemian-2.pdf"
              download
              className="inline-flex items-center gap-3 font-[family-name:var(--font-cinzel)] text-xs tracking-[0.2em] uppercase px-8 py-4 border border-[#8B5E3C] text-[#FAF7F2] hover:bg-[#8B5E3C] hover:text-white transition-all duration-300"
            >
              Pobierz PDF
            </a>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.6} className="text-center mt-14">
          <button
            onClick={scrollToContact}
            className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.25em] uppercase px-10 py-4 border border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white transition-all duration-300"
          >
            Zapytaj o warsztaty
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const forWho = [
  "czujesz zmęczenie, senność, zimne dłonie/stopy",
  "masz suchą skórę, problemy trawienne, wzdęcia",
  "ciągnie Cię do słodkiego albo czujesz „ciężkość” po posiłkach",
  "chcesz jeść tak, by wspierać hormony i emocje",
  "masz PMS, bóle podbrzusza lub wahania energii",
  "chcesz żyć bardziej w zgodzie z naturą i sezonami",
];

const whyWorkWithMe = [
  "tłumaczę medycyne chińską w sposób prosty i współczesny",
  "pracuję z ciałem w jej naturalnym rytmie",
  "nie narzucam diet – pokazuję kierunek, nie restrykcję",
  "efekty są odczuwalne często już po 7–10 dniach",
  "prowadzę praktyczne warsztaty, które uczą „od kuchni”",
  "tworzę bezpieczną przestrzeń – bez oceniania",
];

const consultationIncludes = [
  "analizę objawów wg medycyny chińskiej (wywiad, język, puls)",
  "plan żywieniowy dopasowany do Twoich objawów",
  "wskazówki żywieniowe",
  "zalecenia sezonowe (co jeść teraz, czego unikać)",
  "rytuały wzmacniające energię, trawienie i sen",
];

const diplomas = [
  "Terapeuty żywieniowego",
  "Psychodietetyka",
  "Dietetyki wg medycyny chińskiej",
  "W trakcie kończę szkołę TOMO jako terapeuta medycyny chińskiej",
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

function ListBlock({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5E3C] flex-shrink-0" />
          <span className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/85 leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function TherapyDetails() {
  return (
    <section id="terapia" className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-3xl md:text-4xl font-light tracking-wide">
            Dla kogo jest ta terapia i dlaczego warto ze mną pracować?
          </h2>
          <div className="w-12 h-px bg-[#8B5E3C] mx-auto mt-6" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <FadeIn delay={0.15}>
            <div className="h-full bg-[#FFFDF7] border border-[#EDE6D6] p-8">
              <h3 className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-base tracking-[0.15em] uppercase mb-6">
                DLA KOGO JEST TA TERAPIA?
              </h3>
              <p className="font-[family-name:var(--font-playfair)] text-[#8B5E3C] italic mb-4">
                Moja praca jest dla Ciebie, jeśli:
              </p>
              <ListBlock items={forWho} />
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="h-full bg-[#FFFDF7] border border-[#EDE6D6] p-8">
              <h3 className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-base tracking-[0.15em] uppercase mb-6">
                DLACZEGO WARTO ZE MNĄ PRACOWAĆ?
              </h3>
              <ListBlock items={whyWorkWithMe} />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.35}>
          <div className="bg-[#EDE6D6]/45 border border-[#8B5E3C]/20 p-8 md:p-10">
            <h3 className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-2xl font-light tracking-wide mb-5">
              Jak pracuję
            </h3>
            <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/85 leading-relaxed">
              Pracujemy praktycznie.
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/85 leading-relaxed">
              Bez diet, bez liczenia kalorii, bez presji.
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/85 leading-relaxed mb-5">
              Pokazuję Ci, jak jeść, by Twoje ciało poczuło ulgę i stabilność.
            </p>

            <p className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-xs tracking-[0.25em] uppercase mb-4">
              Każda konsultacja obejmuje:
            </p>
            <ListBlock items={consultationIncludes} />

            <div className="mt-8 pt-8 border-t border-[#8B5E3C]/20 grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-xs tracking-[0.25em] uppercase mb-4">
                  Posiadam dyplomy:
                </p>
                <ListBlock items={diplomas} />
              </div>
              <div className="flex items-end">
                <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/85 leading-relaxed">
                  Prowadziłam wykłady i warsztaty m.in. w Instytucie Zielarstwa Polskiego.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

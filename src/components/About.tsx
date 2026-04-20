"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const credentials = [
  "Terapeuty żywieniowego",
  "Psychodietetyka",
  "Dietetyki wg medycyny chińskiej",
  "W trakcie: szkoła TOMO — terapeuta medycyny chińskiej",
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

export default function About() {
  return (
    <section id="o-mnie" className="bg-[#EDE6D6] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <FadeIn className="text-center mb-16">
          <p className="font-[family-name:var(--font-cinzel)] text-[#8B5E3C] text-xs tracking-[0.4em] uppercase mb-4">
            Poznaj mnie
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-3xl md:text-4xl font-light tracking-wide">
            O Mnie
          </h2>
          <div className="w-12 h-px bg-[#8B5E3C] mx-auto mt-6" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Image placeholder */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/iwona.png"
                  alt="Iwona Kowalska — terapeutka żywieniowa TCM"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#8B5E3C]/30" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#8B5E3C]/30" />
            </div>
          </FadeIn>

          {/* Text content */}
          <div className="flex flex-col gap-8">
            <FadeIn delay={0.3}>
              <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A] text-lg italic leading-relaxed">
                Mam na imię Iwona i jestem terapeutką żywieniową, podążającą ścieżką odżywiania według medycyny chińskiej.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/80 leading-relaxed">
                Jest to podejście, w którym indywidualne spojrzenie na każdego człowieka oraz poszukiwanie jego własnej drogi żywieniowej pomagają odzyskać harmonię i równowagę w ciele.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/80 leading-relaxed">
                Skupiam się na tym, co ciało jest w stanie przyjąć i przekształcić, aby pomóc Ci w powrocie do zdrowia. Wspieram leczenie chorób odpowiednim żywieniem i zmianą nawyków oraz pokazuję, jak im zapobiegać, zanim jeszcze się pojawią.
              </p>
            </FadeIn>

            <FadeIn delay={0.55}>
              <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/80 leading-relaxed">
                Pracuję głównie z osobami z chorobami autoimmunologicznymi. Ukończone studia z psychodietetyki oraz kurs terapii skoncentrowanej na rozwiązaniach pozwalają mi uwzględniać również psychologiczny aspekt pracy z pacjentem. Zapraszam na konsultacje wszystkie osoby, które chcą zmienić nawyki żywieniowe, odzyskać dobre samopoczucie i równowagę w odżywianiu — bez liczenia kalorii.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="font-[family-name:var(--font-playfair)] text-[#8B5E3C] text-sm italic">
                Bez restrykcji. Bez diet cud. Z uważnością i spokojem.
              </p>
            </FadeIn>

            {/* Credentials */}
            <FadeIn delay={0.7}>
              <div className="pt-6 border-t border-[#8B5E3C]/20">
                <p className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-xs tracking-[0.25em] uppercase mb-4">
                  Posiadam dyplomy
                </p>
                <ul className="flex flex-col gap-3">
                  {credentials.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5E3C] flex-shrink-0" />
                      <span className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/80 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#8B5E3C]/30 py-3 px-0 font-[family-name:var(--font-playfair)] text-[#4A2C0A] placeholder-[#8B5E3C]/40 focus:outline-none focus:border-[#1B4332] transition-colors duration-300 text-sm";
  const labelClass =
    "block font-[family-name:var(--font-cinzel)] text-[#1B4332] text-[10px] tracking-[0.25em] uppercase mb-2";

  return (
    <section id="kontakt" className="bg-[#EDE6D6] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: info */}
          <div>
            <FadeIn>
              <p className="font-[family-name:var(--font-cinzel)] text-[#8B5E3C] text-xs tracking-[0.4em] uppercase mb-4">
                Zapraszam do kontaktu
              </p>
              <h2 className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-3xl md:text-4xl font-light tracking-wide mb-6">
                Kontakt
              </h2>
              <div className="w-12 h-px bg-[#8B5E3C] mb-8" />
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/80 leading-relaxed mb-10 italic">
                Masz pytania? Chcesz umówić konsultację lub dowiedzieć się więcej o moich usługach? Napisz do mnie — odpowiem tak szybko, jak to możliwe.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 flex items-center justify-center border border-[#8B5E3C]/30 text-[#8B5E3C] flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-[10px] tracking-[0.2em] uppercase mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:kontakt@iwonakowalska.com"
                      className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/80 text-sm hover:text-[#1B4332] transition-colors"
                    >
                      kontakt@iwonakowalska.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 flex items-center justify-center border border-[#8B5E3C]/30 text-[#8B5E3C] flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-[10px] tracking-[0.2em] uppercase mb-1">
                      Dostępność
                    </p>
                    <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/80 text-sm">
                      Pon–Pt: 9:00–19:00
                    </p>
                    <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/80 text-sm">
                      Sob–Nd: 10:00–14:00
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: form */}
          <FadeIn delay={0.2}>
            {status === "success" ? (
              <div className="border border-[#2D6A4F]/30 bg-[#FFFDF7] p-10 text-center">
                <div className="w-12 h-12 border border-[#2D6A4F] flex items-center justify-center mx-auto mb-6 text-[#2D6A4F]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-cinzel)] text-[#1B4332] text-lg tracking-wide mb-3">
                  Wiadomość wysłana
                </h3>
                <p className="font-[family-name:var(--font-playfair)] text-[#4A2C0A]/70 text-sm italic">
                  Dziękuję za kontakt. Odpiszę wkrótce.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Twoje imię i nazwisko"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="twoj@email.pl"
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="W czym mogę Ci pomóc?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="font-[family-name:var(--font-playfair)] text-red-700 text-sm italic">
                    Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na email.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.25em] uppercase px-10 py-4 bg-[#1B4332] text-white hover:bg-[#2D6A4F] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed self-start"
                >
                  {status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

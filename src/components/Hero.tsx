"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const el = document.querySelector("#o-mnie");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1B4332]" />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FAF7F2' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative botanical shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.08]">
        <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M380 0 Q300 200 350 400 Q380 600 320 800" stroke="#FAF7F2" strokeWidth="1" fill="none" />
          <path d="M350 100 Q280 150 260 250 Q300 200 350 100Z" fill="#FAF7F2" />
          <path d="M360 300 Q290 320 270 420 Q310 370 360 300Z" fill="#FAF7F2" />
          <path d="M340 500 Q270 510 255 610 Q300 560 340 500Z" fill="#FAF7F2" />
          <path d="M360 120 Q420 170 400 270 Q370 220 360 120Z" fill="#FAF7F2" />
          <path d="M355 320 Q415 350 400 450 Q370 400 355 320Z" fill="#FAF7F2" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 opacity-[0.06]">
        <svg viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M20 600 Q60 400 30 200 Q10 100 50 0" stroke="#FAF7F2" strokeWidth="1" fill="none" />
          <path d="M30 400 Q80 380 100 280 Q60 330 30 400Z" fill="#FAF7F2" />
          <path d="M35 200 Q85 180 100 80 Q60 130 35 200Z" fill="#FAF7F2" />
          <path d="M25 450 Q-20 430 -30 330 Q0 380 25 450Z" fill="#FAF7F2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[family-name:var(--font-cinzel)] text-[#FAF7F2] text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide mb-4"
        >
          Terapia żywieniowa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-[family-name:var(--font-cinzel)] text-white/90 text-xl md:text-2xl lg:text-3xl font-light leading-tight tracking-[0.08em] mb-8"
        >
          według medycyny chińskiej
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-16 h-px bg-[#8B5E3C] mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-[family-name:var(--font-playfair)] text-white/90 text-xl md:text-2xl italic leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Holistyczne wsparcie zdrowia poprzez prawidłowe odżywianie, rytm, sezonowość i równowagę energetyczną.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToContact}
            className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] uppercase px-10 py-4 bg-[#8B5E3C] text-white hover:bg-[#4A2C0A] transition-all duration-300"
          >
            Umów konsultację
          </button>
          <button
            onClick={scrollToAbout}
            className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] uppercase px-10 py-4 border border-white/80 text-white hover:border-white hover:text-white transition-all duration-300"
          >
            Dowiedz się więcej
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="font-[family-name:var(--font-cinzel)] text-white/40 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

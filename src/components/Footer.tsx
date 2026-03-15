const navLinks = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#oferta", label: "Oferta" },
  { href: "#warsztaty", label: "Warsztaty" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#4A2C0A] text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-cinzel)] text-white text-sm tracking-[0.25em] uppercase mb-1">
              Iwona Kowalska
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-white/50 text-xs italic mb-5">
              Terapia żywieniowa wg Medycyny Chińskiej
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-white/50 text-xs leading-relaxed">
              Holistyczne wsparcie kobiet poprzez odżywianie, rytm, sezonowość i równowagę energetyczną.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-[family-name:var(--font-cinzel)] text-white/80 text-[10px] tracking-[0.3em] uppercase mb-5">
              Nawigacja
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-playfair)] text-white/50 text-sm hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-[family-name:var(--font-cinzel)] text-white/80 text-[10px] tracking-[0.3em] uppercase mb-5">
              Kontakt
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:kontakt@iwonakowalska.com"
                className="font-[family-name:var(--font-playfair)] text-white/50 text-sm hover:text-white/80 transition-colors"
              >
                kontakt@iwonakowalska.com
              </a>
              <p className="font-[family-name:var(--font-playfair)] text-white/40 text-xs mt-2">
                Pon–Pt: 9:00–19:00
                <br />
                Sob–Nd: 10:00–14:00
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-cinzel)] text-white/30 text-[10px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Iwona Kowalska. Wszelkie prawa zastrzeżone.
          </p>
          <a
            href="#"
            className="font-[family-name:var(--font-cinzel)] text-white/30 text-[10px] tracking-[0.2em] uppercase hover:text-white/50 transition-colors"
          >
            Polityka prywatności
          </a>
        </div>
      </div>
    </footer>
  );
}

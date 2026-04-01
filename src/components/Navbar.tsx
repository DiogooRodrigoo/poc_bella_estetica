import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Resultados", href: "#results" },
  ];

  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511978850967&text=Ol%C3%A1%21+Vim+do+Instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21+&type=phone_number&app_absent=0";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center justify-between h-24">
          <a href="#hero" className="font-display text-2xl font-semibold tracking-wide text-foreground uppercase">
            Bella <span className="italic font-light">Estética</span>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[11px] tracking-[0.2em] font-medium uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center font-body text-[11px] tracking-[0.15em] font-medium uppercase px-8 py-3.5 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-xl shadow-foreground/10"
          >
            Agendar Consulta
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50 mix-blend-difference text-white"
          >
            <span className={`block w-7 h-[1px] bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-7 h-[1px] bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-7 h-[1px] bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="font-display text-4xl font-light tracking-widest text-foreground"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={whatsappLink}
              target="_blank"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.1 + 0.3 }}
              className="mt-8 font-body text-xs tracking-[0.2em] font-medium uppercase px-12 py-4 bg-foreground text-background"
            >
              Agendar no WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

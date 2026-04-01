import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Diagnóstico", href: "#diagnosis" },
    { label: "Resultados", href: "#results" },
    { label: "Contato", href: "#contact" },
  ];

  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511978850967&text=Ol%C3%A1%21+Vim+do+Instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21+&type=phone_number&app_absent=0";

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 lg:p-6 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`
            pointer-events-auto flex items-center justify-between
            h-16 lg:h-20 px-6 lg:px-8 rounded-full transition-all duration-500
            ${scrolled 
              ? "glass w-full max-w-5xl" 
              : "bg-transparent w-full max-w-7xl border-transparent"
            }
          `}
        >
          {/* Logo */}
          <a 
            href="#hero" 
            className="group flex flex-col items-start leading-none"
          >
            <span className="font-display text-lg md:text-xl lg:text-2xl font-semibold tracking-wider text-foreground uppercase">
              Bella <span className="italic font-light">Estética</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[9px] lg:text-[11px] tracking-[0.2em] font-medium uppercase text-muted-foreground hover:text-foreground transition-all duration-300 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-2 lg:gap-4 ml-auto mr-2 md:mr-0">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium py-2 px-3 md:px-4 lg:py-2.5 lg:px-6 text-[9px] lg:text-[11px] tracking-[0.15em] whitespace-nowrap"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-foreground transition-transform active:scale-90"
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[45] bg-background/80 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] bg-white shadow-2xl p-12 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-8 mt-12">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="font-display text-4xl font-light tracking-tight text-foreground hover:italic hover:pl-2 transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-full font-body text-[10px] tracking-[0.2em] font-bold uppercase shadow-xl shadow-primary/20 hover:bg-neutral-900 transition-all active:scale-95"
                >
                  <Phone size={16} strokeWidth={1.5} /> Agendar Consulta
                </a>
                
                <div className="flex justify-center gap-8 text-muted-foreground pt-6 border-t border-border/50">
                  <a 
                    href="https://www.instagram.com/eliana_bellaestetica/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors p-2"
                  >
                    <Instagram size={24} strokeWidth={1} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

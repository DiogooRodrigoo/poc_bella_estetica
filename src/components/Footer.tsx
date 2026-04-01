import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/80 py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Logo */}
        <div className="flex flex-col items-center md:items-start flex-1">
          <p className="font-display text-2xl tracking-widest text-foreground font-semibold uppercase mb-2">
            Bella <span className="italic font-light text-gold">Estética</span>
          </p>
          <p className="font-body text-[10px] tracking-[0.2em] font-medium uppercase text-muted-foreground text-center md:text-left">
            Eliana Andrade
          </p>
        </div>

        {/* Center: Copyright & POC */}
        <div className="flex-1 text-center">
          <p className="font-body text-[10px] leading-relaxed tracking-[0.15em] font-medium uppercase text-muted-foreground">
            © 2026 Desenvolvido por <strong className="text-foreground">Conecta Leste SP</strong>.<br className="hidden md:block"/> 
            Prova de Conceito (POC) do Cliente.<br className="hidden md:block"/> Todos os direitos reservados.
          </p>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex items-center gap-6 flex-1 justify-center md:justify-end">
          <a href="https://www.instagram.com/eliana_bellaestetica/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors" aria-label="Instagram">
            <Instagram strokeWidth={1.5} className="w-6 h-6" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5511978850967&text=Ol%C3%A1%21+Vim+do+Instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21+&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors" aria-label="WhatsApp">
            <MessageCircle strokeWidth={1.5} className="w-6 h-6" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

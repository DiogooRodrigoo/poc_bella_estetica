import { Instagram, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511978850967&text=Ol%C3%A1%21+Vim+do+Instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21+&type=phone_number&app_absent=0";

  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-primary/5">
      <div className="section-container">
        <div className="grid lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-8">
            <div className="group cursor-default">
              <p className="font-display text-4xl tracking-widest text-foreground font-light uppercase transition-all duration-500">
                Bella <span className="italic font-normal text-gradient-gold">Estética</span>
              </p>
              <div className="h-px w-0 group-hover:w-full bg-gradient-gold transition-all duration-1000 mt-2" />
              <p className="font-body text-[10px] tracking-[0.4em] font-bold uppercase text-primary mt-4">
                Eliana Andrade • Biomédica Esteta
              </p>
            </div>
            
            <p className="font-body text-sm text-muted-foreground/60 leading-relaxed max-w-sm">
              Especialistas em realçar sua beleza natural através de procedimentos de alta performance e precisão técnica. Nossa missão é elevar sua autoestima com sofisticação e segurança.
            </p>

            <div className="flex items-center gap-6">
              <SocialLink href="https://www.instagram.com/eliana_bellaestetica/" icon={Instagram} label="Instagram" />
              <SocialLink href={whatsappLink} icon={MessageCircle} label="WhatsApp" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <p className="font-body text-[10px] tracking-[0.3em] font-bold uppercase text-foreground">
              Explorar
            </p>
            <ul className="space-y-4">
              <FooterLink href="#about">A Clínica</FooterLink>
              <FooterLink href="#services">Tratamentos</FooterLink>
              <FooterLink href="#results">Resultados</FooterLink>
              <FooterLink href="#contact">Consultoria</FooterLink>
            </ul>
          </div>

          {/* Location / Newsletter concept */}
          <div className="space-y-8">
            <p className="font-body text-[10px] tracking-[0.3em] font-bold uppercase text-foreground">
              Contato Direto
            </p>
            <div className="space-y-4">
              <p className="font-body text-sm text-muted-foreground/60 leading-relaxed">
                R. Dr. Oliveira Arruda, 16 <br />
                São Paulo, SP
              </p>
              <a 
                href="mailto:contato@bellaestetica.com" 
                className="block font-body text-sm text-primary hover:translate-x-2 transition-transform duration-300"
              >
                contato@bellaestetica.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-body text-[9px] tracking-[0.2em] font-medium uppercase text-muted-foreground/40">
            © {currentYear} Bela Estética. <span className="mx-2 opacity-30">|</span> 
            Desenvolvido por <strong className="text-foreground/60">Conecta Leste SP</strong>
          </p>

          <div className="flex items-center gap-2 text-muted-foreground/40">
            <span className="font-body text-[9px] tracking-[0.2em] font-medium uppercase">
              Prova de Conceito (POC)
            </span>
            <Heart size={10} className="fill-primary/20 text-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="font-body text-sm text-muted-foreground/60 hover:text-primary hover:translate-x-2 inline-block transition-all duration-300"
    >
      {children}
    </a>
  </li>
);

const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: any, label: string }) => (
  <motion.a
    whileHover={{ y: -4, scale: 1.1 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary/40 hover:text-primary hover:border-primary/30 transition-colors"
    aria-label={label}
  >
    <Icon size={18} strokeWidth={1.5} />
  </motion.a>
);

export default Footer;

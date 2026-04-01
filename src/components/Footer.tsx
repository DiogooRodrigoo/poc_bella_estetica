const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg tracking-widest text-gradient-gold uppercase">
          Bella Estética
        </p>
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          © 2026 Clínica Bella Estética. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-pink transition-colors">
            Instagram
          </a>
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-pink transition-colors">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

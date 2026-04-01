import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Contato
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
              Inicie sua{" "}
              <span className="italic text-primary">transformação</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-12 max-w-md">
              Agende sua avaliação personalizada e descubra como podemos 
              realçar sua beleza com segurança e naturalidade.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-sm">✦</span>
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-foreground mb-1">
                    WhatsApp
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    (11) 99999-0000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-sm">✦</span>
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-foreground mb-1">
                    Endereço
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Av. Paulista, 1000 — São Paulo, SP
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-sm">✦</span>
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-foreground mb-1">
                    Instagram
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    @sculpt.estetica
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-gold outline-none transition-colors duration-300 placeholder:text-muted-foreground/50"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-gold outline-none transition-colors duration-300 placeholder:text-muted-foreground/50"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
                  Procedimento de interesse
                </label>
                <select className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-gold outline-none transition-colors duration-300 appearance-none">
                  <option value="" className="bg-background">Selecione</option>
                  <option value="harmonizacao" className="bg-background">Harmonização Glútea</option>
                  <option value="bioestimulacao" className="bg-background">Bioestimulação de Colágeno</option>
                  <option value="sculpt" className="bg-background">Sculpt Corporal</option>
                  <option value="personalizado" className="bg-background">Protocolo Personalizado</option>
                </select>
              </div>
              <div>
                <label className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-gold outline-none transition-colors duration-300 resize-none placeholder:text-muted-foreground/50"
                  placeholder="Conte-nos sobre suas expectativas..."
                />
              </div>
              <button
                type="submit"
                className="w-full font-body text-xs tracking-[0.2em] uppercase py-4 mt-4 bg-gold text-gold-foreground hover:bg-gold/90 transition-all duration-300"
              >
                Solicitar avaliação
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

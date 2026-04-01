import { motion } from "framer-motion";

const ContactSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511978850967&text=Ol%C3%A1%21+Vim+do+Instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21+&type=phone_number&app_absent=0";

  return (
    <section id="contact" className="py-24 lg:py-40 bg-white relative">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full justify-center"
          >
            <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] font-medium uppercase text-gold mb-6">
              Agendamento
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] mb-8">
              Inicie sua <br/>
              <span className="italic font-medium text-gold">transformação</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-12 max-w-lg">
              Oferecemos um atendimento premium, focado nas suas necessidades 
              com total discrição e resultados excepcionais. Entre em contato direto
              pelo nosso WhatsApp corporativo e reserve seu horário.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-border/60 flex items-center justify-center flex-shrink-0 bg-zinc-50">
                  <span className="text-gold text-lg">✦</span>
                </div>
                <div className="pt-1">
                  <p className="font-body text-[10px] tracking-[0.2em] font-medium uppercase text-foreground mb-1">
                    Atendimento Exclusivo
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Clique no botão abaixo para falar direto com nossa equipe.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-border/60 flex items-center justify-center flex-shrink-0 bg-zinc-50">
                  <span className="text-gold text-lg">✦</span>
                </div>
                <div className="pt-1">
                  <p className="font-body text-[10px] tracking-[0.2em] font-medium uppercase text-foreground mb-1">
                    Instagram
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    <a href="https://www.instagram.com/eliana_bellaestetica/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                      @eliana_bellaestetica
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-border/60 flex items-center justify-center flex-shrink-0 bg-zinc-50">
                  <span className="text-gold text-lg">📌</span>
                </div>
                <div className="pt-1">
                  <p className="font-body text-[10px] tracking-[0.2em] font-medium uppercase text-foreground mb-1">
                    Endereço
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1 max-w-sm">
                    Clínica Bella Estética | Eliana Andrade <br/>
                    R. Dr. Oliveira Arruda, 16 - Sala 3 <br/>
                    Guaianases, São Paulo - SP, 08420-020
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-body text-sm tracking-[0.2em] font-medium uppercase px-10 py-5 bg-foreground text-background hover:bg-foreground/80 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Agendar via WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[500px] lg:h-[650px] bg-zinc-100 p-2 sm:p-4 rounded-xl shadow-2xl flex"
          >
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0700863007557!2d-46.4069796!3d-23.5300062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce65abeb041857%3A0x8dd8ff1972f09459!2sR.%20Dr.%20Oliveira%20Arruda%2C%2016%20-%20Vila%20Princesa%20Isabel%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008420-020!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] opacity-90 transition-all duration-1000 hover:grayscale-0 hover:opacity-100 rounded-lg"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Clock, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511978850967&text=Ol%C3%A1%21+Vim+do+Instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21+&type=phone_number&app_absent=0";

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="90" cy="10" r="40" fill="currentColor" />
          <circle cx="10" cy="90" r="30" fill="currentColor" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full glass-alt mb-8">
              <span className="font-body text-[10px] tracking-[0.3em] font-medium uppercase text-primary">
                Consultoria
              </span>
            </div>

            <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground leading-tight tracking-tight mb-8 uppercase">
              Especialista ao <br />
              <span className="italic font-normal text-gradient-gold inline-block pb-1">seu alcance</span>
            </h2>

            <p className="font-body text-base text-muted-foreground leading-relaxed mb-16 max-w-lg">
              Oferecemos um atendimento exclusivo e personalizado para garantir que cada detalhe da sua transformação seja tratado com a máxima precisão técnica e cuidado estético.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              <ContactCard 
                icon={Instagram} 
                title="Instagram" 
                detail="@eliana_bellaestetica" 
                link="https://www.instagram.com/eliana_bellaestetica/"
              />
              <ContactCard 
                icon={Clock} 
                title="Horários" 
                detail="Seg - Sex: 09h às 19h" 
              />
              <ContactCard 
                icon={Phone} 
                title="Telefone" 
                detail="+55 (11) 97885-0967" 
                link={whatsappLink}
              />
              <ContactCard 
                icon={MapPin} 
                title="Localização" 
                detail="Guaianases, São Paulo - SP" 
              />
            </div>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-6 px-12 py-6 bg-foreground text-background font-body text-xs tracking-[0.4em] font-bold uppercase overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <MessageCircle size={18} className="text-primary" />
              Inicie sua Consultoria
              <ArrowRight size={16} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
            </motion.a>
          </motion.div>

          {/* Right Column: Map & Address Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            {/* Map Container */}
            <div className="w-full h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden border border-border/40 shadow-2xl glass-card p-2 sm:p-4">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0700863007557!2d-46.4069796!3d-23.5300062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce65abeb041857%3A0x8dd8ff1972f09459!2sR.%20Dr.%20Oliveira%20Arruda%2C%2016%20-%20Vila%20Princesa%20Isabel%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008420-020!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-60 rounded-[2rem] hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
            </div>

            {/* Floating Address Badge */}
            <div className="absolute bottom-12 -left-8 lg:-left-16 glass-alt p-8 lg:p-12 rounded-[2rem] shadow-2xl max-w-xs border border-white/20">
              <div className="mb-4 text-primary">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <p className="font-body text-[10px] tracking-[0.2em] font-bold uppercase text-foreground mb-3">
                Onde nos encontrar
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                R. Dr. Oliveira Arruda, 16 - Sala 3 <br />
                Guaianases, São Paulo - SP <br />
                08420-020
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon: Icon, title, detail, link }: any) => (
  <div className="group flex items-start gap-5">
    <div className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center flex-shrink-0 bg-white group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
      <Icon size={18} strokeWidth={1.5} />
    </div>
    <div className="pt-1">
      <p className="font-body text-[10px] tracking-[0.2em] font-bold uppercase text-foreground/50 mb-1 group-hover:text-primary transition-colors">
        {title}
      </p>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          {detail}
        </a>
      ) : (
        <p className="font-body text-sm font-medium text-foreground">
          {detail}
        </p>
      )}
    </div>
  </div>
);

export default ContactSection;

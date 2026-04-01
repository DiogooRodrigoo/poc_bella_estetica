import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg"; // Assuming this exists or can be a placeholder

const HeroSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511978850967&text=Ol%C3%A1%21+Vim+do+Instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21+&type=phone_number&app_absent=0";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background with lighter gradient to blend with white */}
      <div className="absolute inset-0 w-full h-full lg:w-[60%] lg:right-0 lg:left-auto">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          src={heroBg}
          alt="Harmonização Glútea na Clínica Bella Estética"
          className="w-full h-full object-cover object-center grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/50 lg:to-transparent" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex items-center">
        <div className="max-w-xl bg-white/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-6 lg:p-0 rounded-2xl lg:rounded-none">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body text-[10px] md:text-xs tracking-[0.3em] font-medium uppercase text-gold mb-6"
          >
            Exclusividade & Resultados
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.05] tracking-tight mb-8"
          >
            A Essência <br />
            da <span className="italic font-medium">Beleza</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mb-10"
          >
            Harmonização corporal e facial de alto nível. Uma abordagem refinada para realçar sua autoconfiança com técnicas exclusivas e atendimento premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] font-medium uppercase px-10 py-4 bg-foreground text-background hover:bg-foreground/80 transition-all duration-300 shadow-xl shadow-foreground/5 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              Agendar Avaliação
            </a>
            <a
              href="#results"
              className="font-body text-xs tracking-[0.2em] font-medium uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 w-full sm:w-auto text-center sm:text-left py-2"
            >
              Nossos Casos →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

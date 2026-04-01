import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroBg}
          alt="Harmonização glútea - resultado elegante"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-32 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-6"
          >
            Referência em harmonização glútea
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight mb-8"
          >
            A arte de
            <br />
            <span className="italic text-gradient-gold">esculpir</span>
            <br />
            curvas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mb-10"
          >
            Técnicas avançadas e resultados naturais que realçam sua beleza única. 
            Transformação com segurança, precisão e sofisticação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <a
              href="#contact"
              className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gold text-gold-foreground hover:bg-gold/90 transition-all duration-300"
            >
              Agende sua avaliação
            </a>
            <a
              href="#results"
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Ver resultados →
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-3"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground rotate-90 origin-center mb-8">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

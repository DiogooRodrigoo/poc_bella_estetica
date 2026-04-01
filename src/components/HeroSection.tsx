import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511978850967&text=Ol%C3%A1%21+Vim+do+Instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21+&type=phone_number&app_absent=0";

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 lg:pt-32 overflow-hidden bg-white">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Main Content - Text (Order 1) */}
          <div className="lg:col-span-12 xl:col-span-6 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-alt mb-10 border border-primary/10">
                <Sparkles size={14} className="text-primary" />
                <span className="font-body text-[10px] tracking-[0.3em] font-bold uppercase text-primary/80">
                  A Estética do Futuro, Hoje
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-foreground leading-tight tracking-[0.1em] uppercase mb-10">
                Beleza Autêntica, <br />
                <span className="italic font-normal text-gradient-gold inline-block pb-1">Ciência Refinada</span>
              </h1>

              <p className="font-body text-lg lg:text-xl text-muted-foreground/80 leading-relaxed max-w-xl mb-12 border-l-2 border-primary/10 pl-8">
                Harmonização de <span className="text-foreground font-semibold">alto nível</span> com uma abordagem refinada e técnicas biomédicas exclusivas para realçar sua essência mais pura.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8">
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-6 bg-foreground text-background font-body text-xs tracking-[0.4em] font-bold uppercase overflow-hidden shadow-2xl shadow-foreground/20 hover:shadow-primary/20 transition-all duration-500"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-3">
                    Consultoria Especializada <ArrowRight size={18} />
                  </span>
                </motion.a>

                <a href="#results" className="group flex items-center gap-4 py-4 px-6 text-[11px] tracking-[0.2em] font-bold uppercase text-muted-foreground hover:text-primary transition-all">
                  Explorar Resultados
                  <span className="w-8 h-px bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Artistic Visual Elements (Order 2) */}
          <div className="lg:col-span-12 xl:col-span-6 relative mt-20 xl:mt-0 px-4 sm:px-0">
            <div className="relative max-w-2xl mx-auto xl:ml-auto">

              {/* Main Image Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white/40 ring-1 ring-primary/5"
              >
                <img
                  src="/perfil.jpg"
                  alt="Beleza Natural"
                  className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
                />

                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </motion.div>

              {/* High-End Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.8 }}
                className="absolute -bottom-10 -right-4 lg:-right-20 w-72 lg:w-80 glass p-8 rounded-[3rem] z-30 shadow-2xl border border-white/20 backdrop-blur-3xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-[9px] tracking-widest font-bold uppercase text-primary">
                    Procedimento VIP
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/5">
                    <CheckCircle2 size={20} className="text-primary" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-2xl lg:text-3xl leading-tight text-foreground">
                    Análise <br /> <span className="italic font-light">Digital Gratuita</span>
                  </h3>
                  <p className="font-body text-[11px] text-muted-foreground/80 leading-relaxed uppercase tracking-wider">
                    Protocolo tecnológico para <br /> mapeamento facial completo.
                  </p>

                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200 overflow-hidden ring-4 ring-primary/5 transition-transform hover:scale-110">
                          <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="client" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="font-body text-[10px] font-black tracking-tighter text-primary bg-primary/5 px-2 py-1 rounded-lg">
                      +1.5k FELIZES
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Rotating Badge Concept */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-16 -left-16 w-48 h-48 pointer-events-none z-0 opacity-20 lg:opacity-30"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
                  <path id="badgePath" d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
                  <text className="text-[10px] uppercase tracking-[0.25em] font-black">
                    <textPath xlinkHref="#badgePath">
                      • Avançada Tecnologia • Clínica Premium • Expertise Biomédica
                    </textPath>
                  </text>
                </svg>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

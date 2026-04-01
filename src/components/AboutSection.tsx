import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap } from "lucide-react";

const stats = [
  { value: "12", label: "Anos de Excelência", icon: Award },
  { value: "1.000+", label: "Procedimentos", icon: CheckCircle2 },
  { value: "98%", label: "Taxa de Satisfação", icon: Zap },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Images Grid - Asymmetric Layering */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Image */}
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl shadow-black/10 border-8 border-white/50">
                <img
                  src="/espaco.jpg"
                  alt="Clínica Bella Estética Interior"
                  className="w-full h-full object-cover grayscale-[5%] hover:scale-105 transition-transform duration-700"
                />
              </div>


              {/* Years Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.6 }}
                className="absolute top-12 -right-4 sm:-right-8 glass lg:p-10 p-6 rounded-[2.5rem] shadow-xl z-20 backdrop-blur-3xl border border-white/20"
              >
                <h4 className="font-display text-5xl font-light text-primary tracking-tighter">12</h4>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
                  Anos de <br/> Legado
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full glass-alt mb-8">
                <span className="font-body text-[10px] tracking-[0.3em] font-medium uppercase text-primary">
                  Nossa Essência
                </span>
              </div>

              <h2 className="font-display text-5xl lg:text-7xl font-light leading-tight text-foreground tracking-tight mb-12 uppercase">
              Onde a Ciência encontra <br />
              <span className="italic font-normal text-gradient-gold lowercase inline-block pb-1">a arte da estética</span>
            </h2>

              <div className="space-y-8 mb-16">
                <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Com mais de 1.000 atendimentos realizados, a Clínica Bella Estética é referência absoluta em harmonização glútea e facial de alto nível.
                </p>
                <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Cada protocolo é desenhado sob medida por nossa biomédica esteta, garantindo um equilíbrio perfeito entre segurança, naturalidade e resultados que elevam sua autoconfiança.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-12 pt-12 border-t border-border/80">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center"
                  >
                    <stat.icon className="text-primary/40 mb-4" size={24} strokeWidth={1} />
                    <p className="font-display text-3xl font-light text-foreground mb-1 leading-none">
                      {stat.value}
                    </p>
                    <p className="font-body text-[9px] tracking-[0.2em] font-semibold uppercase text-muted-foreground/60">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

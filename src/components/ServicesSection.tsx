import { motion } from "framer-motion";
import { Sparkles, Flower2, Heart, UserCheck } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Harmonização Glútea",
    description: "Nossa especialidade. Preenchimento avançado com bioestimuladores para esculpir volume e contorno natural.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Estética Facial",
    description: "Protocolos exclusivos para realçar traços faciais, tratando flacidez e volumização com precisão biomédica.",
    icon: Flower2,
  },
  {
    number: "03",
    title: "Estética Corporal",
    description: "Tecnologia de ponta para definição corporal, redução de medidas e tratamento de flacidez profunda.",
    icon: Heart,
  },
  {
    number: "04",
    title: "Bioestimulação",
    description: "Estímulo natural de colágeno para uma pele firme, elástica e com brilho saudável em todas as áreas.",
    icon: UserCheck,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20 lg:mb-32"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass-alt mb-8">
            <span className="font-body text-[10px] tracking-[0.3em] font-medium uppercase text-primary">
              Especialidades
            </span>
          </div>

          <h2 className="font-display text-5xl lg:text-7xl font-light leading-tight text-foreground tracking-tight uppercase">
            Protocolos Exclusivos & <br />
            <span className="italic font-normal text-gradient-gold inline-block pb-1">Resultados de Alto Impacto</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border/40 overflow-hidden rounded-[3rem] border border-border/40">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              className="group p-12 lg:p-20 bg-white hover:bg-neutral-50 transition-all duration-700 cursor-pointer relative"
            >
              {/* Corner Number */}
              <span className="font-body text-[11px] tracking-[0.3em] font-medium text-muted-foreground/40 absolute top-12 left-12 lg:left-20 group-hover:text-primary/60 transition-colors">
                {service.number}
              </span>

              {/* Service Icon */}
              <div className="mb-10 w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary/40 group-hover:text-primary group-hover:border-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/5">
                <service.icon size={22} strokeWidth={1} />
              </div>

              <h3 className="font-display text-3xl lg:text-5xl font-light text-foreground mb-6 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>
              
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-sm mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>

              <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] font-semibold uppercase text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                Saiba Mais <ArrowRight size={14} />
              </div>
              
              {/* Hover highlight border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/5 transition-all duration-700 rounded-[3rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default ServicesSection;

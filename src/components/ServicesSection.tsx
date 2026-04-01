import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Harmonização Glútea",
    description: "Nossa especialidade. Preenchimento com ácido hialurônico e bioestimuladores para contorno e volume natural.",
  },
  {
    number: "02",
    title: "Estética Facial",
    description: "Harmonização facial completa, preenchimentos, bioestimuladores e protocolos personalizados para rejuvenescimento.",
  },
  {
    number: "03",
    title: "Estética Corporal",
    description: "Procedimentos corporais avançados para esculpir, definir e tratar flacidez com tecnologia de ponta e segurança.",
  },
  {
    number: "04",
    title: "Bioestimulação",
    description: "Estímulo à produção natural de colágeno para firmeza, elasticidade e rejuvenescimento facial e corporal profundos.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-40 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-28"
        >
          <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] font-medium uppercase text-gold mb-6">
            Nossos Tratamentos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
            Excelência em cada <br className="hidden sm:block"/>
            <span className="italic font-medium text-gold">detalhe</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border/50">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-10 lg:p-16 bg-white hover:bg-zinc-50 transition-colors duration-500 cursor-pointer relative"
            >
              <span className="font-body text-[10px] tracking-[0.3em] font-medium text-muted-foreground absolute top-8 left-10 lg:left-16">
                {service.number}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mt-8 mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
                {service.description}
              </p>
              
              {/* Subtle underline effect on hover */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gold transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { motion } from "framer-motion";
import textureGold from "@/assets/texture-gold.jpg";

const services = [
  {
    number: "01",
    title: "Harmonização Glútea",
    description:
      "Preenchimento com ácido hialurônico e bioestimuladores para contorno e volume natural.",
    highlight: true,
  },
  {
    number: "02",
    title: "Bioestimulação de Colágeno",
    description:
      "Estímulo à produção natural de colágeno para firmeza e rejuvenescimento da região.",
    highlight: false,
  },
  {
    number: "03",
    title: "Sculpt Corporal",
    description:
      "Combinação de técnicas para esculpir e definir contornos corporais com precisão.",
    highlight: false,
  },
  {
    number: "04",
    title: "Protocolo Personalizado",
    description:
      "Avaliação completa e plano individualizado para resultados naturais e proporcionais.",
    highlight: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-40 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]">
        <img src={textureGold} alt="" className="w-full h-full object-cover" loading="lazy" width={800} height={800} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Procedimentos
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Excelência em cada{" "}
            <span className="italic text-primary">detalhe</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group p-10 lg:p-14 bg-background hover:bg-card transition-all duration-500 cursor-pointer relative ${
                service.highlight ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="font-body text-[10px] tracking-[0.3em] text-gold/50 absolute top-6 right-6">
                {service.number}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-light mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-gold">
                  Saiba mais
                </span>
                <span className="text-gold">→</span>
              </div>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-gold to-primary transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

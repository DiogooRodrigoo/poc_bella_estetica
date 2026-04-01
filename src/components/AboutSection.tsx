import { motion } from "framer-motion";
import clinicImg from "@/assets/clinic-interior.jpg"; // Placeholder or existing image

const stats = [
  { value: "1.000+", label: "Atendimentos" },
  { value: "98%", label: "Satisfação" },
  { value: "12", label: "Anos de experiência" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-40 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] shadow-2xl shadow-black/5">
              <img
                src={clinicImg}
                alt="Interior da Clínica Bella Estética"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
            {/* Elegant overlapping accent badge */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white border border-border p-10 pt-12 shadow-xl shadow-black/5">
              <p className="font-display text-6xl font-light text-foreground leading-none">12</p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-3">
                Anos de excelência
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] font-medium uppercase text-gold mb-6">
              A Clínica
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8">
              Sua <span className="italic font-medium text-gold">beleza</span> <br/> 
              elevada ao máximo
            </h2>
            <div className="space-y-6 mb-16">
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                Com mais de 1.000 atendimentos realizados e 12 anos de experiência no mercado 
                de estética facial e corporal, a Clínica Bella Estética é referência absoluta em 
                harmonização glútea.
              </p>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                Nossa abordagem é personalizada — cada procedimento é planejado 
                individualmente por uma biomédica esteta, levando em conta proporções, 
                biotipo e expectativas para entregar um resultado harmonioso, seguro e natural.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border/60">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl sm:text-4xl font-light text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-[9px] sm:text-[10px] tracking-[0.2em] font-medium uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

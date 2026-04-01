import { motion } from "framer-motion";
import clinicImg from "@/assets/clinic-interior.jpg";

const stats = [
  { value: "1.000+", label: "Atendimentos" },
  { value: "98%", label: "Satisfação" },
  { value: "12", label: "Anos de experiência" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={clinicImg}
                alt="Interior da Clínica Bella Estética"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card border border-border p-8">
              <p className="font-display text-5xl font-light text-gradient-gold">12</p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                Anos de excelência
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-pink mb-4">
              Sobre a Bella Estética
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-8">
              Biomédica Esteta{" "}
              <span className="italic text-primary">especialista</span>
            </h2>
            <div className="space-y-4 mb-12">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Com mais de 1.000 atendimentos realizados e 12 anos de experiência no mercado 
                de estética facial e corporal, a Clínica Bella Estética é referência em 
                harmonização glútea.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Nossa abordagem é personalizada — cada procedimento é planejado 
                individualmente por uma biomédica esteta, levando em conta proporções, 
                biotipo e expectativas para entregar um resultado harmonioso e natural.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-light text-primary">
                    {stat.value}
                  </p>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
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

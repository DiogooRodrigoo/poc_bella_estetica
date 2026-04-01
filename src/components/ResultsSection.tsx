import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "O resultado superou todas as minhas expectativas. Ficou incrivelmente natural e exatamente como eu sonhava. A Clínica Bela Estética é o meu lugar de confiança.",
    author: "Marina Silveira",
    procedure: "Harmonização Glútea",
    rating: 5,
  },
  {
    text: "Profissionalismo e cuidado impecáveis. Me senti extremamente segura durante todo o processo. O cuidado pós-procedimento é o que realmente diferencia o atendimento.",
    author: "Camila Rodrigues",
    procedure: "Estética Corporal",
    rating: 5,
  },
  {
    text: "A equipe transborda conhecimento e carinho. O resultado ficou tão harmônico que as pessoas percebem que estou mais radiante, mas sem notar artificialidade.",
    author: "Juliana Mendes",
    procedure: "Bioestimulação",
    rating: 5,
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-primary/40" />
              <span className="font-body text-[10px] tracking-[0.4em] font-bold uppercase text-primary">
                Reconhecimento
              </span>
            </div>
            
            <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground leading-tight tracking-tight uppercase">
              A Confiança de quem <br />
              <span className="italic font-normal text-gradient-gold inline-block pb-1">viveu a experiência</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block text-right"
          >
            <p className="font-body text-sm text-muted-foreground/60 max-w-xs ml-auto">
              A satisfação de nossas clientes é o selo de qualidade que define a excelência da Bela Estética.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, type: "spring" }}
              className="glass-card group p-10 lg:p-14 relative flex flex-col justify-between hover:-translate-y-2 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={40} strokeWidth={1} />
              </div>

              <div>
                <div className="flex gap-1 mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={12} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="font-display text-xl lg:text-2xl text-foreground/90 leading-relaxed italic font-light mb-12 relative z-10">
                  "{t.text}"
                </p>
              </div>

              <div className="relative pt-8 border-t border-primary/10">
                <p className="font-body text-xs tracking-[0.2em] font-bold uppercase text-foreground mb-1">
                  {t.author}
                </p>
                <p className="font-body text-[10px] tracking-[0.1em] font-medium text-muted-foreground uppercase">
                  {t.procedure}
                </p>
              </div>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Global CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 lg:mt-32 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-4 font-body text-xs tracking-[0.3em] font-bold uppercase text-primary hover:gap-6 transition-all group"
          >
            Ver mais depoimentos 
            <span className="w-12 h-px bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;

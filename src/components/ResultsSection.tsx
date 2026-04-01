import { motion } from "framer-motion";

const testimonials = [
  {
    text: "O resultado superou todas as minhas expectativas. Ficou natural e exatamente como eu sonhava. A Dra. é incrível!",
    author: "Marina S.",
    procedure: "Harmonização Glútea",
  },
  {
    text: "Profissionalismo e cuidado desde a primeira consulta. Me senti segura e acolhida durante todo o processo na Bella Estética.",
    author: "Camila R.",
    procedure: "Estética Corporal",
  },
  {
    text: "A equipe é maravilhosa. O resultado ficou tão natural que as pessoas elogiam sem saber que fiz procedimento.",
    author: "Juliana M.",
    procedure: "Bioestimulação",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 lg:py-40 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-pink mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Histórias de{" "}
            <span className="italic text-primary">transformação</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative p-8 lg:p-10 border border-border hover:border-pink/30 transition-colors duration-500 group"
            >
              <span className="font-display text-6xl text-pink/10 absolute top-4 left-6">
                "
              </span>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-8 mb-8">
                {t.text}
              </p>
              <div className="section-divider !mx-0 !w-8 mb-4" />
              <p className="font-body text-xs tracking-[0.15em] uppercase text-foreground">
                {t.author}
              </p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-pink/60 mt-1">
                {t.procedure}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

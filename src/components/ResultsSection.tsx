import { motion } from "framer-motion";

const testimonials = [
  {
    text: "O resultado superou todas as minhas expectativas. Ficou incrivelmente natural e exatamente como eu sonhava. A Clínica é maravilhosa!",
    author: "Marina S.",
    procedure: "Harmonização Glútea",
  },
  {
    text: "Profissionalismo e cuidado desde a primeira avaliação. Me senti extremamente segura e acolhida durante todo o processo.",
    author: "Camila R.",
    procedure: "Estética Corporal",
  },
  {
    text: "A equipe é fantástica. O resultado ficou tão harmônico que as pessoas me elogiam sem saber que realizei um procedimento.",
    author: "Juliana M.",
    procedure: "Bioestimulação",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 lg:py-40 bg-zinc-50 border-t border-border/50">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-28"
        >
          <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] font-medium uppercase text-gold mb-6">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
            Histórias de <br className="hidden sm:block"/>
            <span className="italic font-medium text-gold">transformação</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative p-10 lg:p-14 bg-white shadow-xl shadow-black-[0.02] border border-border/30 hover:border-gold/30 transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-7xl text-gold/20 absolute top-4 left-6 leading-none">
                  "
                </span>
                <p className="font-body text-sm text-foreground/80 leading-relaxed mt-6 mb-10 relative z-10 italic">
                  "{t.text}"
                </p>
              </div>
              <div>
                <div className="w-8 h-[1px] bg-gold mb-6" />
                <p className="font-body text-xs tracking-[0.15em] font-medium uppercase text-foreground">
                  {t.author}
                </p>
                <p className="font-body text-[10px] tracking-[0.2em] font-medium uppercase text-muted-foreground mt-2">
                  {t.procedure}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

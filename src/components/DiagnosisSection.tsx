import { motion } from "framer-motion";
import { Search, ClipboardList, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Escuta & Histórico",
    description: "Iniciamos com uma conversa profunda para entender seus objetivos, histórico clínico e expectativas reais.",
    icon: Search,
  },
  {
    number: "02",
    title: "Mapeamento Clínico",
    description: "Análise técnica detalhada da pele, musculatura e proporções para identificar as reais necessidades.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Protocolo Único",
    description: "Criação do seu Plano Diretor de Beleza, com o cronograma exato de tratamentos para o seu objetivo.",
    icon: Sparkles,
  },
];

const DiagnosisSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511978850967&text=Ol%C3%A1%21+Gostaria+de+agendar+meu+diagn%C3%B3stico+exclusivo%21";

  return (
    <section id="diagnosis" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full glass-alt mb-8">
              <span className="font-body text-[10px] tracking-[0.3em] font-medium uppercase text-primary">
                O Primeiro Passo
              </span>
            </div>

            <h2 className="font-display text-5xl lg:text-7xl font-light leading-tight text-foreground tracking-tight mb-10 uppercase">
              Diagnóstico Exclusivo: <br />
              <span className="italic font-normal text-gradient-gold lowercase inline-block pb-1">seu plano diretor de beleza</span>
            </h2>

            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
              Nenhum rosto ou corpo é igual ao outro. Por isso, não acreditamos em pacotes prontos. Toda jornada na Bella Estética começa com um diagnóstico minucioso para garantir segurança e resultados que respeitam sua identidade.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-3 group"
            >
              Agendar Diagnóstico <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </motion.div>

          {/* Steps Side */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="group p-8 rounded-[2.5rem] bg-zinc-50 border border-transparent hover:border-primary/10 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    <step.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-2xl font-medium text-foreground">
                        {step.title}
                      </h3>
                      <span className="font-body text-[10px] font-bold text-primary/20 tracking-widest uppercase">
                        {step.number}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;

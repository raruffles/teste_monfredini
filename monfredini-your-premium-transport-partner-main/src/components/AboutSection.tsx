import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  "ANTT Regularizada",
  "SASSMAQ",
  "ISO 9001",
  "Seguro Total de Cargas",
];

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-gradient-dark">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Sobre nós</span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mt-3 mb-6">
            +30 anos de <span className="text-gradient-chrome">segurança e credibilidade</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A Monfredini Transportes é referência em logística rodoviária no Brasil. 
            Com uma frota moderna e equipe altamente capacitada, oferecemos soluções 
            personalizadas para e-commerce, indústria e varejo.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Nossa tecnologia de rastreamento em tempo real e compromisso com prazos nos 
            tornam parceiros estratégicos de marcas que não podem errar na entrega.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div key={c} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary shrink-0" />
                <span className="text-sm text-foreground">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-card border border-border rounded-2xl p-10 text-center">
            <Award size={48} className="mx-auto text-primary mb-6" />
            <div className="text-6xl md:text-7xl font-heading font-extrabold text-foreground mb-2">
              30<span className="text-primary">+</span>
            </div>
            <p className="text-muted-foreground text-lg">Anos no mercado</p>
            <div className="mt-8 pt-8 border-t border-border grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-heading font-bold text-foreground">98%</div>
                <div className="text-xs text-muted-foreground mt-1">Satisfação dos clientes</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-foreground">99.2%</div>
                <div className="text-xs text-muted-foreground mt-1">Entregas no prazo</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

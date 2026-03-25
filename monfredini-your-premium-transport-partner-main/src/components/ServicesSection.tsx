import { motion } from "framer-motion";
import { Package, Zap, ShieldCheck, BarChart3, Globe, Clock } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Carga Fracionada",
    desc: "Entregas flexíveis para volumes menores com a mesma qualidade e segurança.",
  },
  {
    icon: Zap,
    title: "Expressa",
    desc: "Prazos reduzidos para operações que exigem velocidade máxima.",
  },
  {
    icon: ShieldCheck,
    title: "Carga Dedicada",
    desc: "Veículos exclusivos para sua operação com rastreamento em tempo real.",
  },
  {
    icon: BarChart3,
    title: "Logística E-commerce",
    desc: "Fulfillment e last-mile integrados com as principais plataformas.",
  },
  {
    icon: Globe,
    title: "Cobertura Nacional",
    desc: "Rede de distribuição em todas as regiões do Brasil.",
  },
  {
    icon: Clock,
    title: "SLA Garantido",
    desc: "Compromisso contratual com prazos e índices de performance.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Serviços</span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mt-3">
          Soluções que <span className="text-gradient-chrome">movem</span> seu negócio
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group bg-gradient-card border border-border rounded-lg p-7 hover:border-primary/40 transition-all duration-300 hover:glow-red"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

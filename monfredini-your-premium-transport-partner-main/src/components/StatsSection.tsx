import { motion } from "framer-motion";
import { TrendingUp, Truck, MapPin, Users } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "30+", label: "Anos de Mercado", suffix: "" },
  { icon: Truck, value: "150k", label: "Entregas/Mês", suffix: "+" },
  { icon: MapPin, value: "500k", label: "Km Rodados/Mês", suffix: "+" },
  { icon: Users, value: "2.000", label: "Clientes Ativos", suffix: "+" },
];

const StatsSection = () => (
  <section className="relative py-20 border-y border-border bg-gradient-dark">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <s.icon className="mx-auto mb-3 text-primary" size={28} />
            <div className="text-3xl md:text-4xl font-heading font-extrabold text-foreground">
              {s.value}
              <span className="text-primary">{s.suffix}</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;

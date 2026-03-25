import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [trackingCode, setTrackingCode] = useState("");

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-medium text-primary">+30 anos de excelência</span>
          </div>

          <h1 className="text-[2.15rem] sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[0.95] mb-6">
            <span className="text-gradient-chrome">Transporte</span>
            <br />
            <span className="text-foreground">com segurança</span>
            <br />
            <span className="text-primary">e credibilidade.</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-lg mb-8 md:mb-10 leading-relaxed">
            Logística inteligente para e-commerce e indústria. Sua carga segura, no prazo, em todo o Brasil.
          </p>

          {/* Tracking */}
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-2 flex flex-col sm:flex-row sm:items-center gap-2 max-w-lg">
            <Search size={20} className="text-muted-foreground ml-2 sm:ml-3 shrink-0 hidden sm:block" />
            <input
              type="text"
              placeholder="Rastreie sua encomenda..."
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              className="w-full flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none py-2.5 px-2 sm:px-0"
            />
            <button className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shrink-0">
              Rastrear
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
};

const Index = () => (
  <>
    <Header />
    <HeroSection />
    <motion.div
      initial={sectionAnimation.initial}
      whileInView={sectionAnimation.whileInView}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <StatsSection />
    </motion.div>
    <motion.div
      initial={sectionAnimation.initial}
      whileInView={sectionAnimation.whileInView}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.62, ease: "easeOut" }}
    >
      <ServicesSection />
    </motion.div>
    <motion.div
      initial={sectionAnimation.initial}
      whileInView={sectionAnimation.whileInView}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.64, ease: "easeOut" }}
    >
      <AboutSection />
    </motion.div>
    <motion.div
      initial={sectionAnimation.initial}
      whileInView={sectionAnimation.whileInView}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.66, ease: "easeOut" }}
    >
      <QuoteSection />
    </motion.div>
    <motion.div
      initial={sectionAnimation.initial}
      whileInView={sectionAnimation.whileInView}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.58, ease: "easeOut" }}
    >
      <Footer />
    </motion.div>
    <WhatsAppButton />
  </>
);

export default Index;

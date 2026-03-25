import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-monfredini.png";

const Footer = () => (
  <footer id="contato" className="py-16 bg-gradient-dark border-t border-border">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="Monfredini Transportes" className="h-14 w-auto mb-5" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Logística inteligente e confiável para seu negócio. +20 anos movendo o Brasil.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4">Links Rápidos</h4>
          <ul className="space-y-3">
            {["Início", "Serviços", "Sobre", "Cotação"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4">Contato</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone size={16} className="text-primary shrink-0" />
              (11) 4000-0000
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail size={16} className="text-primary shrink-0" />
              contato@monfredini.com.br
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
              São Paulo, SP - Brasil
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Monfredini Transportes. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

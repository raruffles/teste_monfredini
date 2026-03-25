import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-monfredini.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Monfredini Transportes" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotacao"
            className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors glow-red"
          >
            Solicitar Cotação
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotacao"
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold text-center"
          >
            Solicitar Cotação
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;

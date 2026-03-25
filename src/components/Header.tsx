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

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 88;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(targetPosition, 0), behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setOpen(false);
  };

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
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotacao"
            onClick={(e) => handleNavClick(e, "#cotacao")}
            className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors glow-red"
          >
            Solicitar Cotação
          </a>
        </nav>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-5 py-5 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotacao"
            onClick={(e) => handleNavClick(e, "#cotacao")}
            className="mt-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold text-center"
          >
            Solicitar Cotação
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;

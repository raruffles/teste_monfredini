import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

const QuoteSection = () => {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    origem: "",
    destino: "",
    tipo: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "Olá! Gostaria de solicitar uma cotação:",
      `Nome: ${form.nome}`,
      `Empresa: ${form.empresa}`,
      `E-mail: ${form.email}`,
      `Telefone/WhatsApp: ${form.telefone || "Não informado"}`,
      `Origem: ${form.origem || "Não informado"}`,
      `Destino: ${form.destino || "Não informado"}`,
      `Tipo de serviço: ${form.tipo || "Não informado"}`,
      `Detalhes: ${form.mensagem || "Não informado"}`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank", "noopener,noreferrer");

    toast.success("Mensagem pronta! Abrimos o WhatsApp para envio da cotação.");
    setForm({ nome: "", empresa: "", email: "", telefone: "", origem: "", destino: "", tipo: "", mensagem: "" });
  };

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const inputClass =
    "w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all";

  return (
    <section id="cotacao" className="py-20 md:py-24 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Cotação</span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mt-3">
            Solicite seu <span className="text-gradient-chrome">orçamento</span>
          </h2>
          <p className="text-muted-foreground mt-4">Resposta em até 2 horas úteis.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gradient-card border border-border rounded-xl p-5 sm:p-7 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input className={inputClass} placeholder="Seu nome *" required value={form.nome} onChange={(e) => update("nome", e.target.value)} />
            <input className={inputClass} placeholder="Empresa *" required value={form.empresa} onChange={(e) => update("empresa", e.target.value)} />
            <input className={inputClass} placeholder="E-mail *" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} />
            <input className={inputClass} placeholder="Telefone / WhatsApp" value={form.telefone} onChange={(e) => update("telefone", e.target.value)} />
            <input className={inputClass} placeholder="Cidade de Origem" value={form.origem} onChange={(e) => update("origem", e.target.value)} />
            <input className={inputClass} placeholder="Cidade de Destino" value={form.destino} onChange={(e) => update("destino", e.target.value)} />
          </div>
          <select
            className={inputClass}
            value={form.tipo}
            onChange={(e) => update("tipo", e.target.value)}
          >
            <option value="">Tipo de serviço</option>
            <option value="fracionada">Carga Fracionada</option>
            <option value="expressa">Expressa</option>
            <option value="dedicada">Carga Dedicada</option>
            <option value="ecommerce">Logística E-commerce</option>
          </select>
          <textarea
            className={`${inputClass} min-h-[100px] resize-none`}
            placeholder="Detalhes adicionais..."
            value={form.mensagem}
            onChange={(e) => update("mensagem", e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors glow-red flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Enviar Cotação
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default QuoteSection;

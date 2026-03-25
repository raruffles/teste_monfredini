import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os serviços da Monfredini Transportes."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    aria-label="WhatsApp"
  >
    <MessageCircle size={26} className="text-[hsl(0,0%,100%)]" />
  </a>
);

export default WhatsAppButton;

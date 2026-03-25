# Monfredini Transportes

Landing page institucional em React + Vite, com foco em performance, responsividade e navegação por seções.

## Requisitos

- Node.js 20+
- npm 10+

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:8080/`

## Build de produção

```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages

O projeto já está adaptado para GitHub Pages:

- landing page em rota única (sem dependência de roteamento SPA)
- `base: "./"` no Vite para funcionar em subpasta
- workflow automático em `.github/workflows/deploy-pages.yml`

Passos no GitHub:

1. Envie o projeto para o branch `main`.
2. Vá em **Settings > Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions**.
4. Faça push no `main` para disparar deploy.

## Mobile

O layout foi otimizado para mobile com:

- scroll suave entre seções
- espaçamentos responsivos nas seções
- formulário de rastreio adaptado para telas pequenas
- botão de WhatsApp com suporte a safe-area

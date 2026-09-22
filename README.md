# Robson Iza — Link Hub

Página de links de **Robson Iza, O Pai do Consórcio**.

Site estático, hospedado no GitHub Pages:
https://robsonrpd.github.io/robson-iza-links

## Desenvolvimento

Requer Node.js 22+.

```sh
npm install
npm run dev      # http://localhost:8080
```

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Serve o build local para conferir antes de publicar |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Deploy

Automático: todo push na `main` dispara o workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que faz o build
e publica no GitHub Pages.

Para ativar (uma vez só): **Settings → Pages → Source: GitHub Actions**.

### Conectar o domínio próprio

1. Crie `public/CNAME` com uma linha: `robsonizaopaidoconsorcio.com.br`
2. No DNS do domínio, aponte para o GitHub Pages:
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - ou `CNAME` do `www` → `robsonrpd.github.io`
3. Troque `VITE_SITE_URL` no [`.env`](.env) e no workflow para
   `https://robsonizaopaidoconsorcio.com.br` — é o que alimenta o preview do
   WhatsApp.
4. **Settings → Pages → Custom domain**, e marque *Enforce HTTPS*.

## Imagens

As fotos otimizadas para web ficam em `public/img/` e são versionadas. Os
originais em alta resolução ficam em `fotos-originais/`, **fora** de `public/`
(tudo que está em `public/` vai para o build) e fora do Git.

Ao trocar uma foto, gere a versão web redimensionada — as originais têm ~1,7 MB
cada, peso que não cabe numa página acessada majoritariamente por celular.

## Stack

- Vite 8 + React 19 + TypeScript strict
- TanStack Router (rotas em `src/routes/`, `routeTree.gen.ts` é gerado)
- Tailwind CSS v4 — tokens em `src/styles.css`, sem `tailwind.config.js`
- shadcn/ui + Radix + lucide-react

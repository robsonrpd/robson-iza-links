# Robson Iza — Link Hub

Página de links de **Robson Iza, O Pai do Consórcio**.

Site estático, hospedado no GitHub Pages:
https://robsonizaopaidoconsorcio.com.br

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

### Domínio próprio

Já configurado. O domínio `robsonizaopaidoconsorcio.com.br` aponta para o GitHub
Pages via Registro.br (4 registros `A`, 4 `AAAA` e um `CNAME` do `www`), e
[`public/CNAME`](public/CNAME) informa o domínio ao GitHub.

Se um dia voltar a servir pelo endereço do GitHub (`robsonrpd.github.io/robson-iza-links`),
troque nos **dois** lugares — [`.env`](.env) e o workflow:

- `VITE_BASE_PATH` → `/robson-iza-links/`
- `VITE_SITE_URL` → `https://robsonrpd.github.io/robson-iza-links`

As duas precisam bater: a primeira alimenta os caminhos dos arquivos e o
basepath do roteador, a segunda as meta tags de preview do WhatsApp.

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

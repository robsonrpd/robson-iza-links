# CLAUDE.md — Robson Iza Link Hub

Instruções para o Claude Code trabalhar neste projeto.

## Comandos

| Ação | Comando |
| --- | --- |
| Instalar deps | `npm install` |
| Dev server | `npm run dev` (http://localhost:8080) |
| Build produção | `npm run build` → `dist/` |
| Preview do build | `npm run preview` |
| Lint | `npm run lint` |
| Formatar | `npm run format` |

Use **npm** (há `package-lock.json`, versionado para o CI ser reproduzível).

## Stack

- Vite 8 + React 19, **site estático** (sem SSR, sem servidor)
- TanStack Router client-side, TypeScript strict, alias `@/*` → `./src/*`
- Tailwind CSS v4 (tokens em `src/styles.css`, sem `tailwind.config.js`)
- shadcn/ui + Radix + lucide-react
- Deploy: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)
- Domínio: https://robsonizaopaidoconsorcio.com.br (HTTPS forçado; `www` redireciona)

## Convenções essenciais

- **Rotas**: file-based em `src/routes/`. O layout raiz é `__root.tsx` e precisa
  renderizar `<Outlet />`. Não edite `routeTree.gen.ts` (gerado pelo plugin).
- **Meta tags**: vivem no `index.html`, **não** em `head()` de rota. O site é
  estático e os robôs de preview do WhatsApp/TikTok não executam JavaScript —
  meta tag injetada pelo React não chega até eles. O `og:image` precisa ser URL
  absoluta; use `%VITE_SITE_URL%`, substituído no build.
- **Estilo**: use os tokens semânticos de `src/styles.css`. Não hardcode cores
  (`bg-[#...]`, `text-white`, `bg-black`). Exceção documentada: o tile da
  logomarca em `index.tsx` usa `bg-white` porque o arquivo da logo tem fundo
  branco puro e qualquer outro tom criaria uma emenda visível.
- **Imagens**: versões web em `public/img/`, referenciadas ancoradas na base:
  `` `${import.meta.env.BASE_URL}img/arquivo.jpg` ``. Não use caminho relativo
  (`"img/arquivo.jpg"`) nem absoluto fixo (`"/img/arquivo.jpg"`) — o primeiro
  quebra se a rota tiver subcaminho, o segundo quebra fora da raiz.
  Originais em `fotos-originais/`, fora de `public/` e fora do Git.
- **Base e basepath**: `base` no `vite.config.ts` vem de `VITE_BASE_PATH` (lido
  com `loadEnv` — o Vite **não** injeta o `.env` no `process.env` do próprio
  config). Precisa ser absoluta e terminar em `/`. O router recebe
  `basepath: import.meta.env.BASE_URL`; **sem isso o site serve tudo com 200 e
  ainda assim renderiza o 404**, porque a URL não casa com a rota `/`. Hoje o
  valor é `/` (domínio próprio); servindo por
  `robsonrpd.github.io/robson-iza-links` seria `/robson-iza-links/`.
- **Variáveis de ambiente**: só `import.meta.env.VITE_*` (não há servidor).
  `VITE_SITE_URL` e `VITE_BASE_PATH` existem em **dois** lugares — [`.env`](.env)
  e o workflow — e precisam bater.

## Páginas

- `/` (`src/routes/index.tsx`): link hub. Logomarca no topo em tile branco,
  retrato abaixo; três botões em ordem: WhatsApp (destaque) → Simulação
  Ademicon → TikTok; banner por último. Animação `shine` nos botões ao hover
  (definida em `src/styles.css`).

## Histórico

Este projeto nasceu no Lovable e foi migrado para GitHub Pages. Toda a
dependência do Lovable (`@lovable.dev/vite-tanstack-config`, TanStack Start +
Nitro para SSR, assets via `.asset.json` apontando para o CDN deles) foi
removida. Não reintroduza esses padrões.

# Robson Iza — Link Hub

Página de links (link-in-bio) de **Robson Iza, o Pai do Consórcio**, em vermelho
e preto. Apresenta o retrato e três botões: Clube no WhatsApp, Simulação Ademicon
e TikTok.

**App ao vivo:** https://robson-iza-links.lovable.app

---

## Stack

- **TanStack Start v1** (SSR/SSG) + **React 19** + **Vite 8**
- **TypeScript** (strict) com alias `@/*` → `./src/*`
- **Tailwind CSS v4** via `@tailwindcss/vite` (sem `tailwind.config.js` —
  tokens em `src/styles.css`)
- **shadcn/ui** + Radix UI + lucide-react
- **Bun** como gerenciador de pacotes (`bun.lock` + `bunfig.toml`)
- Build de produção em worker (Cloudflare) via `@lovable.dev/vite-tanstack-config`

## Pré-requisitos

- [Bun](https://bun.sh) ≥ 1.1 (recomendado — o projeto usa `bun.lock`)
- Node.js ≥ 20 também funciona com `npm`

## Instalação

```sh
git clone <url-do-repositorio>
cd <repo>
bun install          # ou: npm install
```

> O `bunfig.toml` ativa um guarda de 24h contra pacotes recém-publicados.
> Se o `bun install` falhar por uma dependência muito nova, aguarde 24h ou
> adicione o pacote a `minimumReleaseAgeExcludes` depois de confirmar.

## Desenvolvimento

```sh
bun run dev          # ou: npm run dev
# servidor em http://localhost:8080
```

O servidor de desenvolvimento usa Vite com HMR. **Não reinicie o dev server
manualmente** ao editar `src/` — o HMR recarrega automaticamente.

## Build e preview

```sh
bun run build        # build de produção (saída para worker/Cloudflare)
bun run build:dev    # build em modo development (útil para depurar SSR)
bun run preview      # serve o build de produção localmente
```

> O build roda num runtime de Worker (Cloudflare `workerd`). Evite módulos que
> dependam de `child_process`, `fs.watch`, `os.cpus()` ou binários nativos
> (`sharp`, `puppeteer`, etc.) — veja as notas em `AGENTS.md`.

## Lint e formatação

```sh
bun run lint         # eslint
bun run format       # prettier --write .
```

---

## Estrutura do projeto

```
.
├── src/
│   ├── routes/            # Rotas baseadas em arquivo (TanStack Router)
│   │   ├── __root.tsx     # Shell do app — envolve todas as páginas (<Outlet/>)
│   │   └── index.tsx      # Página "/" (link hub do Robson Iza)
│   ├── components/ui/     # Componentes shadcn/ui
│   ├── assets/            # Imagens + ponteiros .asset.json (lovable-assets)
│   ├── lib/               # utilidades (cn, error-capture, error-page)
│   ├── hooks/             # hooks (use-mobile)
│   ├── router.tsx         # cria o router
│   ├── routeTree.gen.ts   # GERADO — não editar
│   ├── start.ts          # client entry / middleware
│   ├── server.ts          # entry de SSR
│   └── styles.css         # tema + tokens Tailwind v4 + utilidades
├── public/                # favicon.png, robots.txt
├── package.json
├── vite.config.ts
├── tsconfig.json
├── bunfig.toml
└── eslint.config.js
```

### Rotas (file-based routing)

Cada `.tsx` em `src/routes/` vira uma rota. Não crie `src/pages/`, `_app/index.tsx`
ou `app/layout.tsx` — essas são convenções de Next.js/Remix. O único layout raiz é
`src/routes/__root.tsx`. `routeTree.gen.ts` é regenerado automaticamente — não edite.

### Estilo / tema

Tailwind v4 nativo: os tokens (cores, fontes, sombras) ficam em `src/styles.css`
via `@theme`. Não use `tailwind.config.js`. Não hardcode cores (`bg-[#...]`,
`text-white`) nos componentes — use os tokens semânticos para manter o tema.

### Imagens

As imagens em `src/assets/` são referenciadas por arquivos `.asset.json` (sistema
lovable-assets). Importe o `.asset.json` e use o campo de URL retornado.

---

## Editando no Claude Code

1. Clone o repositório (via GitHub sync do Lovable ou `git clone`).
2. `bun install`
3. `bun run dev`
4. Abra o Claude Code na pasta do projeto (`claude`).

O arquivo `CLAUDE.md` contém as convenções que o Claude Code aplica
automaticamente. Mantenha o `AGENTS.md` (aviso de histórico do Lovable) intacto.

## Notas

- Recursos gerenciados do **Lovable** (deploy/preview automático, domínio
  customizado, Lovable Cloud) não migram para fora do Lovable. Hoje este
  projeto **não tem Lovable Cloud conectado**, então todo o código roda
  localmente sem dependência de backend.
- Para publicar fora do Lovable, gere o build (`bun run build`) e faça deploy
  do output do worker no seu provedor (Cloudflare Workers, etc.).

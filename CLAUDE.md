# CLAUDE.md — Robson Iza Link Hub

Instruções para o Claude Code trabalhar neste projeto.

## Comandos

| Ação | Comando |
| --- | --- |
| Instalar deps | `bun install` |
| Dev server | `bun run dev` (http://localhost:8080) |
| Build produção | `bun run build` |
| Build dev (debug SSR) | `bun run build:dev` |
| Preview do build | `bun run preview` |
| Lint | `bun run lint` |
| Formatar | `bun run format` |

Use **Bun** (há `bun.lock`). `npm` também funciona.

## Stack

- TanStack Start v1 + React 19 + Vite 8
- TypeScript strict, alias `@/*` → `./src/*`
- Tailwind CSS v4 (tokens em `src/styles.css`, sem `tailwind.config.js`)
- shadcn/ui + Radix + lucide-react
- Build em Worker (Cloudflare `workerd`)

## Convenções essenciais

- **Rotas**: file-based em `src/routes/`. Nunca crie `src/pages/`, `_app/index.tsx`
  ou `app/layout.tsx`. O único layout raiz é `__root.tsx` e precisa renderizar
  `<Outlet />`. Não edite `routeTree.gen.ts` (gerado automaticamente).
- **Estilo**: use os tokens semânticos de `src/styles.css`. Não hardcode cores
  (`bg-[#...]`, `text-white`, `bg-black`) nos componentes.
- **Server functions**: `createServerFn` de `@tanstack/react-start`. Funções
  protegidas precisam de middleware de auth e **não** podem ir no `loader` de
  uma rota pública (SSR/prerender sem sessão falha).
- **Variáveis de ambiente**: `process.env.*` só no servidor (dentro do
  `.handler()`); no browser use `import.meta.env.VITE_*`.
- **Imagens**: importe via arquivos `.asset.json` em `src/assets/`.
- **Runtime de Worker**: evite `child_process`, `fs.watch`, `os.cpus()` e
  binários nativos (`sharp`, `puppeteer`, `canvas`). Prefira APIs Web / fetch.
- **Git**: não faça force push / rebase de histórico publicado (projeto
  sincronizado com o Lovable — veja `AGENTS.md`).

## Páginas

- `/` (`src/routes/index.tsx`): link hub. Retrato no topo da coluna; três botões
  em ordem: WhatsApp (destaque) → Simulação Ademicon → TikTok; banner abaixo.
  Animação `shine` nos botões ao hover (definida em `src/styles.css`).

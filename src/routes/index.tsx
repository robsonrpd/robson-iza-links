import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Calculator, MessageCircle, Music2 } from "lucide-react";
import portraitAsset from "@/assets/robson-iza-bracos-cruzados.png.asset.json";
import bannerAsset from "@/assets/robson-iza-banner.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Robson Iza — O Pai do Consórcio" },
      { name: "description", content: "Entre para o Clube O Pai do Consórcio, acompanhe no TikTok ou faça sua simulação." },
      { property: "og:title", content: "Robson Iza — O Pai do Consórcio" },
      { property: "og:description", content: "Consórcio para quem quer comprar, investir e lucrar com estratégia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  {
    title: "Clube O Pai do Consórcio",
    description: "Cartas contempladas e uma oferta por semana para comprar ou lucrar com consórcio.",
    href: "https://chat.whatsapp.com/LFJT9vswgzzLJi9UldAla4",
    icon: MessageCircle,
    featured: true,
    label: "Entrar no clube",
  },
  {
    title: "Faça a sua simulação",
    description: "Descubra o plano ideal para o seu imóvel, veículo ou investimento.",
    href: "https://www.ademicon.com.br/licensed/864872/robson-carvalheira?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaftl0ED_5Me7MuHSTygbi_uMLGycVHRZa0KaAkaBGmDIWX240cyCEEyEVbZvg_aem_-xOyt1cPpAdT2eloXG5PCw",
    icon: Calculator,
    label: "Simular agora",
  },
  {
    title: "Acompanhe no TikTok",
    description: "Conteúdo direto sobre consórcio, estratégia e oportunidades.",
    href: "https://www.tiktok.com/@robsoniza1?_r=1&_t=ZS-99vDZC5mgS7",
    icon: Music2,
    label: "@robsoniza1",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_70%_0%,var(--color-primary),transparent_62%)] opacity-45" />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:left-[calc(50%-25rem)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 pb-10 pt-8 sm:px-8 lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14 lg:py-12">
        <section className="animate-entrance flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="relative h-64 w-full max-w-sm overflow-hidden rounded-md border border-primary/25 bg-card sm:h-80 lg:h-[25rem]">
            <img src={portraitAsset.url} alt="Robson Iza" className="h-full w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/65 to-transparent px-5 pb-5 pt-20 text-left">
              <p className="text-xs font-extrabold uppercase text-brand-bright">Especialista em consórcio</p>
              <h1 className="mt-1 font-display text-3xl font-extrabold text-foreground">Robson Iza</h1>
              <p className="mt-1 text-sm font-semibold text-brand-soft">O Pai do Consórcio</p>
            </div>
          </div>
        </section>

        <section className="mt-8 lg:mt-0">
          <div className="mb-6">
            <p className="text-xs font-extrabold uppercase text-brand-bright">Escolha seu próximo passo</p>
            <h2 className="mt-2 max-w-lg font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">Seu patrimônio começa com uma boa decisão.</h2>
          </div>

          <div className="space-y-3">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn-link animate-entrance group flex min-h-28 items-center gap-4 rounded-md border p-4 transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${link.featured ? "border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20" : "border-border bg-surface-raised text-foreground hover:border-primary/70"}`}
                  style={{ animationDelay: `${120 + index * 90}ms` }}
                >
                  <span className={`flex size-12 shrink-0 items-center justify-center rounded-full ${link.featured ? "bg-primary-foreground/15" : "bg-primary/15 text-brand-bright"}`}>
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-extrabold">{link.title}</span>
                    <span className={`mt-1 block text-xs leading-relaxed sm:text-sm ${link.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{link.description}</span>
                    <span className={`mt-2 block text-xs font-bold uppercase ${link.featured ? "text-primary-foreground" : "text-brand-bright"}`}>{link.label}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <div className="mt-6 overflow-hidden rounded-md border border-border">
            <img src={bannerAsset.url} alt="O consórcio que mais cresce no Brasil — Robson Iza" className="block w-full object-cover" />
          </div>

          <p className="mt-7 text-center text-xs text-muted-foreground">© 2026 Robson Iza · Todos os direitos reservados</p>
        </section>
      </div>
    </main>
  );
}

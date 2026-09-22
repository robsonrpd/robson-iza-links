import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
  // Base relativa para o site funcionar tanto em
  // robsonrpd.github.io/robson-iza-links/ quanto num dominio proprio na raiz,
  // sem precisar reconfigurar nada ao conectar o dominio.
  base: "./",

  // Resolucao do alias @/* -> ./src/* direto do tsconfig (nativo no Vite 8,
  // dispensa o plugin vite-tsconfig-paths).
  resolve: { tsconfigPaths: true },

  plugins: [
    // Precisa vir antes do plugin do React: ele gera o routeTree.gen.ts a
    // partir dos arquivos em src/routes/.
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],

  server: {
    port: 8080,
    host: true,
  },

  preview: {
    port: 8080,
  },

  build: {
    outDir: "dist",
    sourcemap: false,
  },
});

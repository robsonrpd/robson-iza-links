import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig(({ mode }) => {
  // O Vite nao injeta o .env no process.env deste arquivo — precisa carregar.
  // Prefixo "" carrega todas as variaveis, nao so as VITE_*.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // Caminho em que o site e servido. Precisa ser ABSOLUTO e terminar em "/":
    // alimenta tanto a reescrita de assets do Vite quanto o basepath do router
    // (via import.meta.env.BASE_URL). No GitHub Pages o site vive em
    // /robson-iza-links/; num dominio proprio passa a ser "/".
    base: env["VITE_BASE_PATH"] || "/",

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
  };
});

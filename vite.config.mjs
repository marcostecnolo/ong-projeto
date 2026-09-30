import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: resolve(rootDir, "html"),
  base: "./",
  build: {
    outDir: resolve(rootDir, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(rootDir, "html/index.html"),
        projetos: resolve(rootDir, "html/projetos.html"),
        cadastro: resolve(rootDir, "html/cadastro.html")
      }
    }
  },
  server: {
    open: "/index.html"
  }
});

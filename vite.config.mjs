import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(rootDir, "html/index.html"),
        projetos: resolve(rootDir, "html/projetos.html"),
        cadastro: resolve(rootDir, "html/cadastro.html")
      }
    }
  },
  server: {
    open: "/html/index.html"
  }
});

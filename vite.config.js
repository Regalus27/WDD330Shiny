import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        new_hunt: resolve(__dirname, "src/new_hunt.html"),
        load_hunt: resolve(__dirname, "src/load_hunt.html"),
      },
    },
  },
});

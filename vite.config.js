import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/Web-APP/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        codeBlock: resolve(__dirname, "src/code-block.html"),
      },
    },
  },
});

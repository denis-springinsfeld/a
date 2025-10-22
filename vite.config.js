import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/a/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        accueil: resolve(__dirname, "accueil.html"),
        plus: resolve(__dirname, "plus.html"),
        // ajoutez d'autres pages si nécessaire
      },
    },
  },
});

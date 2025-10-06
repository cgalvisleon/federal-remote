import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
const base = "/";

// https://vite.dev/config/
export default defineConfig({
  base: base,
  plugins: [
    react(),
    tailwindcss(),
    federation({
      exposes: {
        "./index": "./src/index",
      },
      remotes: {},
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    lib: {
      entry: "./src/index",
      name: "MyLib",
      fileName: "my-lib",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

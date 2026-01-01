import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // DEV SERVER (lokal)
  server: {
    host: "::",
    port: 8080,
  },

  // PREVIEW SERVER (production / Dokploy)
  preview: {
    host: true,
    port: 3000,
    allowedHosts: [
      "naturindo.rhouse.id",
    ],
  },
}));


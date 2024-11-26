import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    // 👈 optimizedeps
    esbuildOptions: {
      target: "esnext",
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      supported: {
        bigint: true,
      },
    },
  },
  build: {
    target: ["esnext"],
    rollupOptions: {
      external: ["@kakarot-adapters/core"],
    },
  },
  plugins: [react()],
})

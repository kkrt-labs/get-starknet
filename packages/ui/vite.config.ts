import { svelte } from "@sveltejs/vite-plugin-svelte"
import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

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
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "ui",
      // the proper extensions will be added
      fileName: "ui",
    },
    rollupOptions: {
      external: ["@kakarot-adapters/core"],
    },
  },
  plugins: [
    svelte({ emitCss: false }),
    dts({
      entryRoot: resolve(__dirname, "src"),
      insertTypesEntry: true,
    }),
  ],
})

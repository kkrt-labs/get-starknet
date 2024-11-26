// vite.config.js
import { resolve } from "path"
import dts from "vite-plugin-dts"
import { defineConfig } from "vitest/config"

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
      output: {
        exports: "named",
      },
      external: ["@kakarot-adapters/core"],
    },
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "core",
      // the proper extensions will be added
      fileName: "core",
    },
  },
  plugins: [
    dts({
      entryRoot: resolve(__dirname, "src"),
      insertTypesEntry: true,
    }),
  ],
  test: {
    environment: "happy-dom",
    exclude: ["**/node_modules/**", "**/*.mock.ts"],
    coverage: {
      exclude: ["**/node_modules/**", "**/*.mock.ts"],
    },
  },
})

// vite.config.ts
import { resolve } from "path";
import dts from "file:///Users/msaug/kkrt-labs/get-starknet/packages/core/node_modules/vite-plugin-dts/dist/index.mjs";
import { defineConfig } from "file:///Users/msaug/kkrt-labs/get-starknet/node_modules/.pnpm/vitest@0.19.1_c8@7.12.0_happy-dom@6.0.4/node_modules/vitest/dist/config.mjs";
var __vite_injected_original_dirname = "/Users/msaug/kkrt-labs/get-starknet/packages/core";
var vite_config_default = defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
      define: {
        global: "globalThis"
      },
      supported: {
        bigint: true
      }
    }
  },
  build: {
    target: ["esnext"],
    rollupOptions: {
      output: {
        exports: "named"
      }
    },
    emptyOutDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/main.ts"),
      name: "core",
      fileName: "core"
    }
  },
  plugins: [
    dts({
      entryRoot: resolve(__vite_injected_original_dirname, "src"),
      insertTypesEntry: true
    })
  ],
  test: {
    environment: "happy-dom",
    exclude: ["**/node_modules/**", "**/*.mock.ts"],
    coverage: {
      exclude: ["**/node_modules/**", "**/*.mock.ts"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbXNhdWcva2tydC1sYWJzL2dldC1zdGFya25ldC9wYWNrYWdlcy9jb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbXNhdWcva2tydC1sYWJzL2dldC1zdGFya25ldC9wYWNrYWdlcy9jb3JlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tc2F1Zy9ra3J0LWxhYnMvZ2V0LXN0YXJrbmV0L3BhY2thZ2VzL2NvcmUvdml0ZS5jb25maWcudHNcIjsvLyB2aXRlLmNvbmZpZy5qc1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIG9wdGltaXplRGVwczogeyAvLyBcdUQ4M0RcdURDNDggb3B0aW1pemVkZXBzXG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgIHRhcmdldDogXCJlc25leHRcIixcbiAgICAgIC8vIE5vZGUuanMgZ2xvYmFsIHRvIGJyb3dzZXIgZ2xvYmFsVGhpc1xuICAgICAgZGVmaW5lOiB7XG4gICAgICAgIGdsb2JhbDogJ2dsb2JhbFRoaXMnXG4gICAgICB9LFxuICAgICAgc3VwcG9ydGVkOiB7XG4gICAgICAgIGJpZ2ludDogdHJ1ZVxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBbXCJlc25leHRcIl0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlbXB0eU91dERpcjogZmFsc2UsXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL21haW4udHNcIiksXG4gICAgICBuYW1lOiBcImNvcmVcIixcbiAgICAgIC8vIHRoZSBwcm9wZXIgZXh0ZW5zaW9ucyB3aWxsIGJlIGFkZGVkXG4gICAgICBmaWxlTmFtZTogXCJjb3JlXCIsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIGR0cyh7XG4gICAgICBlbnRyeVJvb3Q6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgfSksXG4gIF0sXG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogXCJoYXBweS1kb21cIixcbiAgICBleGNsdWRlOiBbXCIqKi9ub2RlX21vZHVsZXMvKipcIiwgXCIqKi8qLm1vY2sudHNcIl0sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIGV4Y2x1ZGU6IFtcIioqL25vZGVfbW9kdWxlcy8qKlwiLCBcIioqLyoubW9jay50c1wiXSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBSDdCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLGNBQWM7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BRVIsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNULFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVEsQ0FBQyxRQUFRO0FBQUEsSUFDakIsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQ3ZDLE1BQU07QUFBQSxNQUVOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsV0FBVyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUNuQyxrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osYUFBYTtBQUFBLElBQ2IsU0FBUyxDQUFDLHNCQUFzQixjQUFjO0FBQUEsSUFDOUMsVUFBVTtBQUFBLE1BQ1IsU0FBUyxDQUFDLHNCQUFzQixjQUFjO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

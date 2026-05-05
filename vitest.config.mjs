import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": rootDir,
    },
  },
  test: {
    environment: "node",
    include: ["tests/unit/**/*.test.js"],
    pool: "threads",
    maxWorkers: 1,
    minWorkers: 1,
    fileParallelism: false,
    coverage: {
      reporter: ["text", "html"],
    },
  },
});

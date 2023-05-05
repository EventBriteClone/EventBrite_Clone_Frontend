import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
  test: {
    environment: "happy-dom",
    setupFiles: ["./Tests/setup.js"],
    testMatch: ["./Tests/**/*.test.jsx"],
    globals: true,
  },
    assetsInclude: ["**/*.png"],
});

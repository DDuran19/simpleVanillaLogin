import { defineConfig } from "vite";

const BASE = "/simpleVanillaLogin/";

export default defineConfig({
    // base: process.env.NODE_ENV === "production" ? BASE : "/",
    base: BASE,
    build: {
        outDir: "./dist",
        emptyOutDir: true,
    },
    test: {
        include: ["**/*.test.js"],
    },
});

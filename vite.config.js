import { defineConfig } from "vite";

const BASE = "https://dduran19.github.io/simpleVanillaLogin/";

export default defineConfig({
    base: process.env.NODE_ENV === "production" ? BASE : "/",
    build: {
        outDir: "./dist",
        emptyOutDir: true,
    },
    test: {
        include: ["**/*.test.js"],
    },
});

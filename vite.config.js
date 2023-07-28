import { defineConfig } from "vite";

const BASE = "https://github.com/DDuran19/simpleVanillaLogin/";

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

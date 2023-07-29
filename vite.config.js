import { defineConfig } from "vite";

const BASE = process.env.GITHUB_ACTIONS ? "/simpleVanillaLogin/" : "/";
export default defineConfig({
    base: BASE,
    build: {
        outDir: "./dist",
        emptyOutDir: true,
    },
    test: {
        include: ["**/*.test.js"],
    },
    define: {
        "process.env.VITE_MONGODBsimpleVanillaLoginAPI": JSON.stringify(
            process.env.VITE_MONGODBsimpleVanillaLoginAPI || ""
        ),
    },
});

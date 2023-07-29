import { defineConfig } from "vite";

// const BASE = "/simpleVanillaLogin/";
const BASE = "/";
export default defineConfig({
    base: process.env.NODE_ENV === "production" ? BASE : "/",
    // base: BASE,
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

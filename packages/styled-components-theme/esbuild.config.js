const esbuild = require("esbuild");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    target: "ES6",
    format: "cjs",
    platform: "node",
    outdir: "./build",
    bundle: true,
    external: ["react", "react-is", "styled-components"],
    plugins: [pnpPlugin()],
  })
  .catch(() => process.exit(1));

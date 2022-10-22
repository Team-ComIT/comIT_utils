---
to: packages/<%=name%>/package.json
---
{
  "name": "@team-comit/<%=name%>",
  "version": "0.0.0",
  "main": "./build/index.js",
  "license": "MIT",
  "scripts": {
    "build:clean": "rm -rf ./build",
    "build": "yarn build:clean && tsc && node ./esbuild.config.js"
  },
  "devDependencies": {
    "@yarnpkg/esbuild-plugin-pnp": "^3.0.0-rc.15",
    "esbuild": "^0.15.10"
  },
  "files": [
    "./build"
  ],
  "packageManager": "yarn@3.2.4"
}

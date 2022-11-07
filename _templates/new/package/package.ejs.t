---
to: packages/<%=name%>/package.json
---
{
  "name": "@team-comit/<%=name%>",
  "version": "0.0.0",
  "main": "./build/index.js",
  "types": "./build/index.d.ts",
  "license": "MIT",
  "scripts": {
    "build": "yarn build:clean && yarn build:type && yarn build:bundle",
    "build:clean": "rm -rf ./build",
    "build:bundle": "node ./esbuild.config.js",
    "build:type": "yarn pnpify tsc"
  },
  "devDependencies": {
    "@yarnpkg/esbuild-plugin-pnp": "^3.0.0-rc.15",
    "@yarnpkg/pnpify": "^4.0.0-rc.27",
    "esbuild": "^0.15.10"
  },
  "files": [
    "./build"
  ], 
  "publishConfig": {
    "access": "public"
  },
  "packageManager": "yarn@3.2.4"
}

---
to: packages/<%=name%>/tsconfig.json
---
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./build"
  },
  "include": ["./src"]
}

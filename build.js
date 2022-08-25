const { build } = require('esbuild')

build({
  entryPoints: ['./index.ts'],
  outfile: './index.js',
  platform: "node",
  sourcemap: "inline",
  // minify: true,
  bundle: true,
  treeShaking: true,
}).catch(() => process.exit(1))
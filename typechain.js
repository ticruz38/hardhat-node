const { runTypeChain, glob } = require("typechain");

async function main() {
  const cwd = process.cwd();
  // find all files matching the glob
  const allFiles = glob(cwd, [
    "./node_modules/@openzeppelin/contracts/build/contracts/ERC20.json",
  ]);

  const result = await runTypeChain({
    cwd,
    filesToProcess: allFiles,
    allFiles,
    outDir: "types",
    target: "ethers-v5",
  });
}

main().catch(console.error);

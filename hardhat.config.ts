import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "@typechain/hardhat";
import reset from "./tasks/reset";
import mint from "./tasks/mint";

import { task } from "hardhat/config";

import { HardhatUserConfig } from "hardhat/types";

task("reset", "Resest node to a previous node", async (taskArgs, hre) => {
  await reset(hre);
});

task("mint", "Mint tokens", async (taskArgs, hre) => {
  await mint(hre);
});

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/Ew27_E0Lg-8griqid-h-59j5MNwZ6hjE`,
      },
    },
    bribe: {
      url: "https://bribe-node-v2-default.aalaap.on-rio.io",
    },
  },
  external: {
    contracts: [
      {
        artifacts: "node_modules/bribe-protocol/artifacts/contracts",
      },
      {
        artifacts:
          "node_modules/bribe-protocol/artifacts/@openzeppelin/contracts/token/ERC20",
      },
    ],
  },
  typechain: {
    outDir: "types/",
    externalArtifacts: [
      "node_modules/bribe-protocol/artifacts/contracts/*.sol/!(*.dbg.json)",
      "node_modules/bribe-protocol/artifacts/@openzeppelin/contracts/token/ERC20/*.sol/!(*.dbg.json)",
    ],
    target: "ethers-v5",
  },
  mocha: {
    timeout: 100000,
  },
} as HardhatUserConfig;

import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";

import { HardhatUserConfig } from "hardhat/types";

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/Ew27_E0Lg-8griqid-h-59j5MNwZ6hjE`,
        blockNumber: 14255372,
      },
      mining: {
        auto: false,
        interval: 13000,
      },
    },
    bribe: {
      url: "https://hardhat-node-default.x5nxj1.on-rio.io",
    },
  },
  external: {
    contracts: [
      {
        artifacts: "node_modules/bribe-protocol/artifacts/contracts",
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

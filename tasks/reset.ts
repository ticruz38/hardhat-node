import { parseEther } from "@ethersproject/units";
import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";
import { AavePool } from "../types";

export default async (hre: HardhatRuntimeEnvironment & { ethers: any }) => {
  const [user1] = await hre.ethers.getSigners();
  console.log(user1.address);
  await hre.network.provider.request({
    method: "hardhat_reset",
    params: [
      {
        forking: {
          jsonRpcUrl:
            "https://eth-mainnet.alchemyapi.io/v2/Ew27_E0Lg-8griqid-h-59j5MNwZ6hjE",
          blockNumber: 14255372,
        },
      },
    ],
  });
};

import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";
import { getTokemakTokens, getUSDCTokens } from "../utils/mint";

export default async (hre: HardhatRuntimeEnvironment & { ethers: any }) => {
  const [user1, user2, user3] = await hre.ethers.getSigners();
  await getTokemakTokens(hre, [user1, user2, user3]);
  await getUSDCTokens(hre, [user1, user2, user3]);
};

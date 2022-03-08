import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
import {
  formatEther,
  formatUnits,
  parseEther,
  parseUnits,
} from "ethers/lib/utils";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ERC20 } from "../types";

const TokemakTToken = "0xa760e26aA76747020171fCF8BdA108dFdE8Eb930";
const TokemakToken = "0x2e9d63788249371f1DFC918a52f8d799F4a38C94";
const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

export const getTokemakTokens = async (
  hre: HardhatRuntimeEnvironment & { ethers: any },
  users: SignerWithAddress[]
) => {
  // const [user1, user2, user3, user4, user5] = await ethers.getSigners();
  const ttokeHolder = "0xFa0c409E4f88807a96Cced2aCCF116cC1649c425";
  const tokeHolder = "0x23A5eFe19Aa966388E132077d733672cf5798C03";

  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [ttokeHolder],
  });
  const ttokeSigner = await hre.ethers.getSigner(ttokeHolder);

  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [tokeHolder],
  });
  const tokeSigner = await hre.ethers.getSigner(tokeHolder);

  const tttoken: ERC20 = await hre.ethers.getContractAt("ERC20", TokemakTToken);
  const ttoken: ERC20 = await hre.ethers.getContractAt("ERC20", TokemakToken);

  console.log(formatEther(await tttoken.balanceOf(ttokeSigner.address)));
  console.log(formatEther(await ttoken.balanceOf(tokeSigner.address)));
  await Promise.all(
    users.map((u) =>
      tttoken.connect(ttokeSigner).transfer(u.address, parseEther("5000"))
    )
  );
  await Promise.all(
    users.map((u) =>
      ttoken.connect(tokeSigner).transfer(u.address, parseEther("50000"))
    )
  );
};

export const getUSDCTokens = async (
  hre: HardhatRuntimeEnvironment & { ethers: any },
  users: SignerWithAddress[]
) => {
  const usdcHolder = "0x72A53cDBBcc1b9efa39c834A540550e23463AAcB";

  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [usdcHolder],
  });
  const usdcSigner = await hre.ethers.getSigner(usdcHolder);

  const usdcToken: ERC20 = await hre.ethers.getContractAt("ERC20", USDC);
  console.log(formatUnits(await usdcToken.balanceOf(usdcHolder), 6));
  await Promise.all(
    users.map((u) =>
      usdcToken.connect(usdcSigner).transfer(u.address, parseUnits("50000", 6))
    )
  );
};

import { parseEther, parseUnits } from "@ethersproject/units";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
import { ethers } from "hardhat";
import { ERC20 } from "../types/ERC20";
import { ERC20__factory } from "../types/factories/ERC20__factory";

const USDC_ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const AAVE_ADDRESS = "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9";

describe("init-accounts", function () {
  let network: string;
  let USDC: ERC20;
  let AAVE: ERC20;

  let aaveHolder: SignerWithAddress;
  let usdcHolder: SignerWithAddress;

  before(async () => {
    const [user1, user2, user3] = await ethers.getSigners();
    USDC = ERC20__factory.connect(USDC_ADDRESS, ethers.provider);
    AAVE = ERC20__factory.connect(AAVE_ADDRESS, ethers.provider);

    await ethers.provider.send("hardhat_impersonateAccount", [
      "0x55fe002aeff02f77364de339a1292923a15844b8",
    ]);
    // const [_, user2] = await ethers.getSigners();
    usdcHolder = await ethers.getSigner(
      "0x55fe002aeff02f77364de339a1292923a15844b8"
    );
    await ethers.provider.send("hardhat_impersonateAccount", [
      "0x3744da57184575064838bbc87a0fc791f5e39ea2",
    ]);
    // const [_, user2] = await ethers.getSigners();
    aaveHolder = await ethers.getSigner(
      "0x3744da57184575064838bbc87a0fc791f5e39ea2"
    );
    await user3.sendTransaction({
      to: aaveHolder.address,
      value: parseEther("1"),
    });
  });

  it("should send usdc to my account", async () => {
    const [user1, user2, user3, user4] = await ethers.getSigners();
    const usdcDecimals = await USDC.decimals();
    const aaveDecimals = await AAVE.decimals();
    console.log(usdcHolder.address);
    const balance = await USDC.balanceOf(usdcHolder.address);
    console.log(balance);
    await USDC.connect(usdcHolder).transfer(
      user1.address,
      parseUnits("1000", 6)
    );
    // await AAVE.connect(aaveHolder).transfer(
    //   user1.address,
    //   parseUnits("1000", aaveDecimals)
    // );
  });
});

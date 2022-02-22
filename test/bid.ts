import { parseEther, parseUnits } from "@ethersproject/units";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
import { expect } from "chai";
import { formatEther, solidityKeccak256 } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { AavePool, AavePool__factory, ERC20, ERC20__factory } from "../types";

const USDC_ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const AAVE_ADDRESS = "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9";

describe("bid", function () {
  // let AaveGovernance

  let aavePool: AavePool;
  let waaveToken: ERC20;
  let wstkAaveToken: ERC20;
  let aavePoolOwner: SignerWithAddress;

  before(async () => {
    const [user1] = await ethers.getSigners();

    aavePool = AavePool__factory.connect(
      "0xCD8a1C3ba11CF5ECfa6267617243239504a98d90",
      user1
    );

    await ethers.provider.send("hardhat_impersonateAccount", [
      await aavePool.owner(),
    ]);
    aavePoolOwner = await ethers.getSigner(await aavePool.owner());

    waaveToken = ERC20__factory.connect(
      await aavePool.wrapperAaveToken(),
      user1
    );
    wstkAaveToken = ERC20__factory.connect(
      await aavePool.wrapperStkAaveToken(),
      user1
    );
  });

  it("should deposit", async () => {
    const [user1, user2, user3, user4] = await ethers.getSigners();
    // did I deposited already?
    aavePool.wrapperAaveToken();
    const b1 = await waaveToken.balanceOf(user1.address);
    const b2 = await wstkAaveToken.balanceOf(user1.address);
    console.log(formatEther(b1), formatEther(b2));
  });

  it("should have pending rewards", async () => {
    const pr = await aavePool.getPendingRewardToBeDistributed();
    const brc = await aavePool.bribeRewardConfig();
    const lb = await ethers.provider.getBlock("latest");
    if (brc.rewardAmountDistributedPerSecond.eq(0)) {
      console.log("set rewards per block");
      await aavePool.connect(aavePoolOwner).setRewardPerSecond(parseEther("1"));
      await aavePool
        .connect(aavePoolOwner)
        .setEndTimestamp(lb.timestamp + 1625023497);
    }
    console.log(
      await aavePool.owner(),
      pr,
      brc.startTimestamp.toNumber(),
      brc.endTimestamp.toNumber()
    );
  });

  it("should bid", async () => {
    const [user1] = await ethers.getSigners();
    await aavePool.connect(user1).bid(17, parseUnits("1000", 6), true);
  });
});

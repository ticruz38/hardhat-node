import { ethers } from "hardhat";

export async function advanceNBlocks(n: number) {
  for (let i = 0; i < n; i++) {
    await ethers.provider.send("evm_mine", []);
  }
}

describe("advance in time", function () {
  it("advance in time", async () => {
    console.log(await ethers.provider.getBlock("latest"));
    await ethers.provider.send("evm_increaseTime", [3600]);
    await ethers.provider.send("evm_mine", []);
    await advanceNBlocks(300);
  });
});

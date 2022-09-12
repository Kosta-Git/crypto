import { assert } from "chai";
import { deployments, ethers, getNamedAccounts, network } from "hardhat";
import { developmentChains } from "../../helper-hardhat-config";
import { FundMe } from "../../typechain-types";

developmentChains.includes(network.name) ? describe.skip :
  describe("Fund me", async () => {
    let fundMe: FundMe;
    let deployer: string;
    let amount = ethers.utils.parseEther("1")
    beforeEach(async () => {
      deployer = (await getNamedAccounts()).deployer;
      fundMe = await ethers.getContract("FundMe", deployer);
    })

    it("Allows people to fund and widthdraw", async () => {
      await fundMe.fund({ value: amount })
      await fundMe.withdraw({
        gasLimit: 100000,
      })
      const endingFundMeBalance = await fundMe.provider.getBalance(
        fundMe.address
      )
      console.log(
        endingFundMeBalance.toString() +
        " should equal 0, running assert equal..."
      )
      assert.equal(endingFundMeBalance.toString(), "0")
    })
  })
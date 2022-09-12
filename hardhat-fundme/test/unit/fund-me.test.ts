import { assert, expect } from "chai";
import { deployments, ethers, getNamedAccounts, network } from "hardhat";
import { developmentChains } from "../../helper-hardhat-config";
import { FundMe, MockV3Aggregator } from "../../typechain-types";

!developmentChains.includes(network.name) ? describe.skip :
  describe("Fund me", async () => {
    let fundMe: FundMe;
    let deployer: string;
    let mockAggregator: MockV3Aggregator;
    beforeEach(async () => {
      deployer = (await getNamedAccounts()).deployer;
      await deployments.fixture(["all"]);
      fundMe = await ethers.getContract("FundMe", deployer);
      mockAggregator = await ethers.getContract("MockV3Aggregator", deployer);
    })

    describe("Constructor", async () => {
      it("Sets the aggregator correctly", async () => {
        const response = await fundMe.getPriceFeed();
        assert.equal(response, mockAggregator.address);
      })
    })

    describe("Fund", async () => {
      it("Fails if you dont send enough ETH", async () => {
        await expect(fundMe.fund()).to.be.revertedWithCustomError(fundMe, "FundMe__NotEnoughValue");
      })

      it("Updates the amount funded", async () => {
        const amount = ethers.utils.parseEther("1");
        await fundMe.fund({ value: amount });
        const response = await fundMe.getAddressToAmountFunded(deployer);
        assert.equal(response.toString(), amount.toString());
      })

      it("Adds funder to array of funders", async () => {
        const amount = ethers.utils.parseEther("1");
        await fundMe.fund({ value: amount });
        const response = await fundMe.getFunder(0);
        assert.equal(response, deployer);
      })
    })

    describe("Widthdraw", async () => {
      beforeEach(async () => {
        const amount = ethers.utils.parseEther("1");
        await fundMe.fund({ value: amount });
      })

      it("Widthdraw ETH from single funder", async () => {
        const contractStartBalance = await fundMe.provider.getBalance(fundMe.address);
        const deployerStartBalance = await fundMe.provider.getBalance(deployer);

        const response = await fundMe.withdraw();
        const { gasUsed, effectiveGasPrice } = await response.wait(1);
        const gasCost = gasUsed.mul(effectiveGasPrice);
        const contractEndBalance = await fundMe.provider.getBalance(fundMe.address);
        const deployerEndBalance = await fundMe.provider.getBalance(deployer);

        assert.equal(contractEndBalance.toString(), "0")
        assert.equal(deployerEndBalance.add(gasCost).toString(), contractStartBalance.add(deployerStartBalance).toString())
      })

      it("Allows us to widthdraw with multiple funders", async () => {
        const accounts = await ethers.getSigners();
        const amount = ethers.utils.parseEther("1");
        for (let i = 1; i < 6; i++) {
          await fundMe.connect(accounts[i]).fund({ value: amount });
        }
        const contractStartBalance = await fundMe.provider.getBalance(fundMe.address);
        const deployerStartBalance = await fundMe.provider.getBalance(deployer);

        const response = await fundMe.withdraw();
        const { gasUsed, effectiveGasPrice } = await response.wait(1);
        const gasCost = gasUsed.mul(effectiveGasPrice);
        const contractEndBalance = await fundMe.provider.getBalance(fundMe.address);
        const deployerEndBalance = await fundMe.provider.getBalance(deployer);

        assert.equal(contractEndBalance.toString(), "0")
        assert.equal(deployerEndBalance.add(gasCost).toString(), contractStartBalance.add(deployerStartBalance).toString())
        await expect(fundMe.getFunder(0)).to.be.reverted;
        for (let i = 1; i < 6; i++) {
          const valueFunded = await fundMe.connect(accounts[i]).getAddressToAmountFunded(accounts[i].address);
          assert.equal(valueFunded.toString(), "0")
        }
      })
      it("Only allows owner to withdraw", async () => {
        const attacker = (await ethers.getSigners())[1];
        const contract = fundMe.connect(attacker);

        await expect(contract.withdraw()).to.be.revertedWithCustomError(contract, "FundMe__NotOwner")
      })
    })
  })
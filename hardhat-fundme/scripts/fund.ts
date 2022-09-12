import { ethers, getNamedAccounts } from "hardhat";
import { FundMe } from "../typechain-types";

(async () => {
  const { deployer } = await getNamedAccounts();
  const fundMe: FundMe = await ethers.getContract("FundMe", deployer);
  console.log("Funding contract...");
  const transaction = await fundMe.fund({ value: ethers.utils.parseEther("0.05") })
  await transaction.wait(1);
  console.log("Contract funded")
})();
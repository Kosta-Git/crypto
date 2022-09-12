import { ethers, getNamedAccounts } from "hardhat";
import { FundMe } from "../typechain-types";

(async () => {
  const { deployer } = await getNamedAccounts();
  const fundMe: FundMe = await ethers.getContract("FundMe", deployer);
  console.log("Withdrawing contract...");
  const transaction = await fundMe.withdraw()
  await transaction.wait(1);
  console.log("Contract withdrawed")
})();
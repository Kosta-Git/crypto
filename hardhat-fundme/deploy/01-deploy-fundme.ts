import { network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import verify from "../utils/verify";

const deployFundMe: DeployFunction = async function ({ deployments, getNamedAccounts }) {
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId || 0;

  let ethUsdPriceFeedAddress;
  if (developmentChains.includes(network.name)) {
    log("Fetching mock contract address");
    ethUsdPriceFeedAddress = (await get("MockV3Aggregator")).address;
  } else {
    log("Fetching contract address from config");
    ethUsdPriceFeedAddress = networkConfig[chainId].ethUsdPriceFeed;
  }

  const args = [
    ethUsdPriceFeedAddress
  ];
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: developmentChains.includes(network.name) ? 1 : 6
  });

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(fundMe.address, args)
  }

  log("=".repeat(20))
};

export default deployFundMe;
deployFundMe.tags = ["fundme", "all"];

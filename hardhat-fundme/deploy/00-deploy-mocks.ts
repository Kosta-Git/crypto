import { network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { AGGREGATOR_DECIMALS, AGGREGATOR_INITIAL_VALUE, developmentChains, networkConfig } from "../helper-hardhat-config";

const deployMocks: DeployFunction = async function ({ deployments, getNamedAccounts }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  if (developmentChains.includes(network.name)) {
    log("Dev network detected, deploying mock contracts...");
    await deploy("MockV3Aggregator", {
      from: deployer,
      args: [
        AGGREGATOR_DECIMALS,
        AGGREGATOR_INITIAL_VALUE
      ],
      log: true,
    });
    log("Mocks deployed.");
    log("=".repeat(20));
  }
};

export default deployMocks;
deployMocks.tags = ["mocks", "all"];

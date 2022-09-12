import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import dotenv from 'dotenv';

dotenv.config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "";
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      }
    ]
  },
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    }
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  }, etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;

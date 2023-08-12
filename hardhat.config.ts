import { HardhatUserConfig, task } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import 'hardhat-deploy'


import dotenv from 'dotenv';
dotenv.config()

const RPC_URL = process.env.RPC_URL || "";
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "";

// console.log("RPC_URL", RPC_URL)
const config: HardhatUserConfig = {
  solidity: "0.8.0",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: RPC_URL,
      accounts: [WALLET_PRIVATE_KEY],
      chainId: 11155111
    }
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
};

export default config;

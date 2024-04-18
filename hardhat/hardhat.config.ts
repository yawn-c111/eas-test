import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    local: {
      url: "http://localhost:8545",
    },
    // mainet: {
    //   url: "https://mainnet.infura.io/v3/",
    //   accounts: [process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : "0000000000000000000000000000000000000000000000000000000000000000"],
    // },
    // polygon: {
    //   url: "https://polygon-rpc.com",
    //   accounts: [process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : "0000000000000000000000000000000000000000000000000000000000000000"],
    // },
    // optimism: {
    //   url: "https://mainnet.optimism.io",
    //   accounts: [process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : "0000000000000000000000000000000000000000000000000000000000000000"],
    // },
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : "0000000000000000000000000000000000000000000000000000000000000000"],
    },
    amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      accounts: [process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : "0000000000000000000000000000000000000000000000000000000000000000"],
    },
    polygonMumbai: {
      url: "https://rpc-mumbai.polygon.technology/",
      accounts: [process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : "0000000000000000000000000000000000000000000000000000000000000000"],
    },
    optimismSepolia: {
      url: "https://rpc.seploia.com",
      accounts: [process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : 
      "0000000000000000000000000000000000000000000000000000000000000000"],
    },
  },
  etherscan: {
    apiKey: {
      mainet: process.env.ETHERSCAN_API_KEY ? process.env.ETHERSCAN_API_KEY : "0000000000000000000000000000000000",
      polygon: process.env.POLYGONSCAN_API_KEY ? process.env.POLYGONSCAN_API_KEY : "0000000000000000000000000000000000",
      optimism: process.env.ETHERSCAN_API_KEY ? process.env.ETHERSCAN_API_KEY : "0000000000000000000000000000000000",
      sepolia: process.env.ETHERSCAN_API_KEY ? process.env.ETHERSCAN_API_KEY : "0000000000000000000000000000000000",
      amoy: process.env.POLYGONSCAN_API_KEY ? process.env.POLYGONSCAN_API_KEY : "0000000000000000000000000000000000",
      polygonMumbai: process.env.POLYGONSCAN_API_KEY ? process.env.POLYGONSCAN_API_KEY : "0000000000000000000000000000000000",
      optimismSepolia: process.env.ETHERSCAN_API_KEY ? process.env.ETHERSCAN_API_KEY : "0000000000000000000000000000000000",
    },
  },
};

export default config;

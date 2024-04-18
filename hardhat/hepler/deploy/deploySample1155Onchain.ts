import { ethers, upgrades } from "hardhat";
import { Sample1155Onchain } from "../../typechain-types";

export const deploySample1155Onchain = async (args: any[] = []) => {
  const Sample1155Onchain = await ethers.getContractFactory("Sample1155Onchain");
  const sample1155Onchain = await upgrades.deployProxy(
    Sample1155Onchain,
    args,
    {
      kind: "uups",
      initializer: "initialize",
    }
  ) as unknown as Sample1155Onchain;
  await sample1155Onchain.waitForDeployment();

  const sample1155OnchainProxyAddr = await sample1155Onchain.getAddress();

  const sample1155OnchainImplAddr = await upgrades.erc1967.getImplementationAddress(sample1155OnchainProxyAddr);

  return { sample1155Onchain, sample1155OnchainImplAddr };
}
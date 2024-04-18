import { ethers, upgrades } from "hardhat";
import { Sample721Onchain } from "../../typechain-types";

export const deploySample721Onchain = async (args: any[] = []) => {
  const Sample721Onchain = await ethers.getContractFactory("Sample721Onchain");
  const sample721Onchain = await upgrades.deployProxy(
    Sample721Onchain,
    args,
    {
      kind: "uups",
      initializer: "initialize",
    }
  ) as unknown as Sample721Onchain;
  await sample721Onchain.waitForDeployment();

  const sample721OnchainProxyAddr = await sample721Onchain.getAddress();

  const sample721OnchainImplAddr = await upgrades.erc1967.getImplementationAddress(sample721OnchainProxyAddr);

  return { sample721Onchain, sample721OnchainImplAddr };
}
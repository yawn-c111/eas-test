import { ethers, upgrades } from "hardhat";
import { Sample721Offchain } from "../../../typechain-types";

export const deploySample721Offchain = async (args: any[] = []) => {
  const Sample721Offchain = await ethers.getContractFactory("Sample721Offchain");
  const sample721Offchain = await upgrades.deployProxy(
    Sample721Offchain,
    args,
    {
      kind: "uups",
      initializer: "initialize",
    }
  ) as unknown as Sample721Offchain;
  await sample721Offchain.waitForDeployment();

  const sample721OffchainProxyAddr = await sample721Offchain.getAddress();

  const sample721OffchainImplAddr = await upgrades.erc1967.getImplementationAddress(sample721OffchainProxyAddr);

  return { sample721Offchain, sample721OffchainImplAddr };
}
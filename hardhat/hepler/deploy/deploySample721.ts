import { ethers, upgrades } from "hardhat";
import { Sample721 } from "../../typechain-types";

export const deploySample721 = async (args: any[] = []) => {
  const Sample721 = await ethers.getContractFactory("Sample721");
  const sample721 = await upgrades.deployProxy(
    Sample721,
    args,
    {
      kind: "uups",
      initializer: "initialize",
    }
  ) as unknown as Sample721;
  await sample721.waitForDeployment();

  const sample721ProxyAddr = await sample721.getAddress();

  const sample721ImplAddr = await upgrades.erc1967.getImplementationAddress(sample721ProxyAddr);

  return { sample721, sample721ImplAddr };
}
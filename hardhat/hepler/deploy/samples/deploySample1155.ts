import { ethers, upgrades } from "hardhat";
import { Sample1155 } from "../../../typechain-types";

export const deploySample1155 = async (args: any[] = []) => {
  const Sample1155 = await ethers.getContractFactory("Sample1155");
  const sample1155 = await upgrades.deployProxy(
    Sample1155,
    args,
    {
      kind: "uups",
      initializer: "initialize",
    }
  ) as unknown as Sample1155;
  await sample1155.waitForDeployment();

  const sample1155ProxyAddr = await sample1155.getAddress();

  const sample1155ImplAddr = await upgrades.erc1967.getImplementationAddress(sample1155ProxyAddr);

  return { sample1155, sample1155ImplAddr };
}
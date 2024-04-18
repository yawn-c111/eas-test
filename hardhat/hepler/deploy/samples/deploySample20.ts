import { ethers, upgrades } from "hardhat";
import { Sample20 } from "../../../typechain-types";

export const deploySample20 = async (args: any[] = []) => {
  const Sample20 = await ethers.getContractFactory("Sample20");
  const sample20 = await upgrades.deployProxy(
    Sample20,
    args,
    {
      kind: "uups",
      initializer: "initialize",
    }
  ) as unknown as Sample20;
  await sample20.waitForDeployment();

  const sample20ProxyAddr = await sample20.getAddress();

  const sample20ImplAddr = await upgrades.erc1967.getImplementationAddress(sample20ProxyAddr);

  return { sample20, sample20ImplAddr };
}
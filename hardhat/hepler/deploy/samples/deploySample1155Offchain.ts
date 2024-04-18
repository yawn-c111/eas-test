import { ethers, upgrades } from "hardhat";
import { Sample1155Offchain } from "../../../typechain-types";

export const deploySample1155Offchain = async (args: any[] = []) => {
  const Sample1155Offchain = await ethers.getContractFactory("Sample1155Offchain");
  const sample1155Offchain = await upgrades.deployProxy(
    Sample1155Offchain,
    args,
    {
      kind: "uups",
      initializer: "initialize",
    }
  ) as unknown as Sample1155Offchain;
  await sample1155Offchain.waitForDeployment();

  const sample1155OffchainProxyAddr = await sample1155Offchain.getAddress();

  const sample1155OffchainImplAddr = await upgrades.erc1967.getImplementationAddress(sample1155OffchainProxyAddr);

  return { sample1155Offchain, sample1155OffchainImplAddr };
}
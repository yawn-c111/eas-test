import { ethers } from "hardhat";
import { ExampleResolver } from "../../typechain-types";

export const deployExampleResolver = async (args: any[]) => {
  const ExampleResolver = await ethers.getContractFactory("ExampleResolver");

  const exampleResolver = await ExampleResolver.deploy(
    args[0],
    args[1]
  ) as unknown as ExampleResolver;
  await exampleResolver.waitForDeployment();

  return { exampleResolver };
}

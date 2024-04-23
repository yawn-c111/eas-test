import { ethers } from "hardhat";
import { ExampleAttester } from "../../typechain-types";

export const deployExampleAttester = async (args: any[]) => {
  const ExampleAttester = await ethers.getContractFactory("ExampleAttester");

  const exampleAttester = await ExampleAttester.deploy(
    args[0]
  ) as unknown as ExampleAttester;
  await exampleAttester.waitForDeployment();

  return { exampleAttester };
}

import { run } from "hardhat";

export const verify = async (contractAddr: any, args: any[] = []) => {
  try {
    await run("verify:verify", {
      address: contractAddr,
      constructorArguments: args,
    });
  } catch (e) {
    console.log(e);
  }
};
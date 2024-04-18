import { network } from "hardhat";
import { verify } from "./verify";
import { checkNetwork } from "./checkNetwork";

export const verifyUpgradeable = async (proxyAddr: any, implAddr: any, args: any[]) => {
  const isLocal = await checkNetwork();

  if (!isLocal) {
    verify(implAddr);
    verify(proxyAddr, args);
  }
};
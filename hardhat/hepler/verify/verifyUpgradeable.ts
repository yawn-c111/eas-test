import { verify } from "./verify";
import { checkNetwork } from "./checkNetwork";

export const verifyUpgradeable = async (proxyAddr: any, implAddr: any, args: any[]) => {
  verify(implAddr);
  verify(proxyAddr, args);
};
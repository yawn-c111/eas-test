import { deploySample721 } from "../../hepler/deploy/samples/deploySample721";
import { checkNetwork } from "../../hepler/verify/checkNetwork";
import { verifyUpgradeable } from "../../hepler/verify/verifyUpgradeable";

async function main() {
  const args: any[] = [];

  const { sample721, sample721ImplAddr } = await deploySample721(args);
  const sample721ProxyAddr = await sample721.getAddress();

  console.log("Sample721 proxy deployed to:", sample721ProxyAddr);
  console.log("Sample721 implementation deployed to:", sample721ImplAddr);

  const isLocal = await checkNetwork();

  if (!isLocal) {
    verifyUpgradeable(sample721ProxyAddr, sample721ImplAddr, args);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { deploySample1155 } from "../../hepler/deploy/samples/deploySample1155";
import { checkNetwork } from "../../hepler/verify/checkNetwork";
import { verifyUpgradeable } from "../../hepler/verify/verifyUpgradeable";

async function main() {
  const args: any[] = [];

  const { sample1155, sample1155ImplAddr } = await deploySample1155(args);
  const sample1155ProxyAddr = await sample1155.getAddress();

  console.log("Sample1155 proxy deployed to:", sample1155ProxyAddr);
  console.log("Sample1155 implementation deployed to:", sample1155ImplAddr);

  const isLocal = await checkNetwork();

  if (!isLocal) {
    verifyUpgradeable(sample1155ProxyAddr, sample1155ImplAddr, args);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { deploySample20 } from "../../hepler/deploy/samples/deploySample20";
import { checkNetwork } from "../../hepler/verify/checkNetwork";
import { verifyUpgradeable } from "../../hepler/verify/verifyUpgradeable";

async function main() {
  const args: any[] = [];

  const { sample20, sample20ImplAddr } = await deploySample20(args);
  const sample20ProxyAddr = await sample20.getAddress();

  console.log("Sample20 proxy deployed to:", sample20ProxyAddr);
  console.log("Sample20 implementation deployed to:", sample20ImplAddr);

  const isLocal = await checkNetwork();

  if (!isLocal) {
    verifyUpgradeable(sample20ProxyAddr, sample20ImplAddr, args);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

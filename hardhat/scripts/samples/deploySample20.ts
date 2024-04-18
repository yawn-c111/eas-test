import { deploySample20 } from "../../hepler/deploy/deploySample20";
import { verifyUpgradeable } from "../../hepler/verify/verifyUpgradeable";

async function main() {
  const args: any[] = [];

  const { sample20, sample20ImplAddr } = await deploySample20(args);
  const sample20ProxyAddr = await sample20.getAddress();

  console.log("Sample20 proxy deployed to:", sample20ProxyAddr);
  console.log("Sample20 implementation deployed to:", sample20ImplAddr);

  verifyUpgradeable(sample20ProxyAddr, sample20ImplAddr, args);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

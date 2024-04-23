import { deployExampleResolver } from "../hepler/deploy/deployExampleResolver";
import { checkNetwork } from "../hepler/verify/checkNetwork";
import { verify } from "../hepler/verify/verify";
import { easAddress } from "../hepler/const";

const targetAttesterAddr = "0x225B131690c2648EE58E7684e613C07D01A1B946"

async function main() {
  const args = [easAddress, targetAttesterAddr];

  const { exampleResolver } = await deployExampleResolver(args);
  const exampleResolverAddr = await exampleResolver.getAddress();

  console.log("ExampleResolver deployed to:", exampleResolverAddr);

  const isLocal = await checkNetwork();

  if (!isLocal) {
    verify(exampleResolverAddr, args);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

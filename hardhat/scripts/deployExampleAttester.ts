import { deployExampleAttester } from "../hepler/deploy/deployExampleAttester";
import { checkNetwork } from "../hepler/verify/checkNetwork";
import { verify } from "../hepler/verify/verify";
import { easAddress } from "../hepler/const";

async function main() {
  const args = [easAddress];

  const { exampleAttester } = await deployExampleAttester(args);
  const exampleAttesterAddr = await exampleAttester.getAddress();

  console.log("ExampleAttester deployed to:", exampleAttesterAddr);

  const isLocal = await checkNetwork();

  if (!isLocal) {
    verify(exampleAttesterAddr, args);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

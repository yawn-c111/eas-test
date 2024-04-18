import { network } from "hardhat";

const waitTime = 15000;

export const checkNetwork = async () => {
    let isLocal = true;

    if (network.name !== "hardhat" && network.name !== "local") {
        isLocal = false;
        console.log("Verifying contract...");
        await new Promise((resolve) => setTimeout(resolve, waitTime));
    } else {
        isLocal = true;
    }
    return isLocal;
};


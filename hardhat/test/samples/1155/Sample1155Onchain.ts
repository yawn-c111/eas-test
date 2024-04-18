import { expect } from "chai";
import { ethers} from "hardhat";
import { deploySample1155Onchain } from "../../../hepler/deploy/samples/deploySample1155Onchain";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Sample1155Onchain } from "../../../typechain-types";

const DEFAULT_ADMIN_ROLE = ethers.ZeroHash;
const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));

async function fixture() {
    const [deployer] = await ethers.getSigners();

    const args: any[] = [];
    const { sample1155Onchain } = await deploySample1155Onchain(args);
    return { deployer, sample1155Onchain };
}

describe("Sample1155Onchain", function () {
    describe("deploy", function () {
        let deployer: SignerWithAddress;
        let sample1155Onchain: Sample1155Onchain;

        it("should deploy", async function () {
            ({ deployer, sample1155Onchain } = await fixture());
            expect(await sample1155Onchain.getAddress()).to.not.be.undefined;
        });
        
        it("check name", async function () {
            expect(await sample1155Onchain.name()).to.eq("Sample1155Onchain");
        });
        
        it("check symbol", async function () {
            expect(await sample1155Onchain.symbol()).to.eq("S1155On");
        });

        it("check tokenIds", async function () {
            expect(await sample1155Onchain.tokenIds()).to.eq(0);
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample1155Onchain.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });

            it("minter role", async function () {
                expect(await sample1155Onchain.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample1155Onchain.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });

            it("minter role", async function () {
                expect(await sample1155Onchain.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample1155Onchain.getRoleMemberCount(DEFAULT_ADMIN_ROLE)).to.eq(1);
            });
            
            it("minter role", async function () {
                expect(await sample1155Onchain.getRoleMemberCount(MINTER_ROLE)).to.eq(1);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample1155Onchain.getRoleMember(DEFAULT_ADMIN_ROLE, 0)).to.eq(deployer.address);
            });
            
            it("minter role", async function () {
                expect(await sample1155Onchain.getRoleMember(MINTER_ROLE, 0)).to.eq(deployer.address);
            });
        });
    });
})


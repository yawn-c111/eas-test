import { expect } from "chai";
import { ethers} from "hardhat";
import { deploySample1155Offchain } from "../../../hepler/deploy/samples/deploySample1155Offchain";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Sample1155Offchain } from "../../../typechain-types";

const DEFAULT_ADMIN_ROLE = ethers.ZeroHash;
const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));

async function fixture() {
    const [deployer] = await ethers.getSigners();

    const args: any[] = [];
    const { sample1155Offchain } = await deploySample1155Offchain(args);
    return { deployer, sample1155Offchain };
}

describe("Sample1155Offchain", function () {
    describe("deploy", function () {
        let deployer: SignerWithAddress;
        let sample1155Offchain: Sample1155Offchain;

        it("should deploy", async function () {
            ({ deployer, sample1155Offchain } = await fixture());
            expect(await sample1155Offchain.getAddress()).to.not.be.undefined;
        });
        
        it("check name", async function () {
            expect(await sample1155Offchain.name()).to.eq("Sample1155Offchain");
        });
        
        it("check symbol", async function () {
            expect(await sample1155Offchain.symbol()).to.eq("S1155Off");
        });

        it("check tokenIds", async function () {
            expect(await sample1155Offchain.tokenIds()).to.eq(0);
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample1155Offchain.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample1155Offchain.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
            
            it("minter role", async function () {
                expect(await sample1155Offchain.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample1155Offchain.getRoleMemberCount(DEFAULT_ADMIN_ROLE)).to.eq(1);
            });
            
            it("minter role", async function () {
                expect(await sample1155Offchain.getRoleMemberCount(MINTER_ROLE)).to.eq(1);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample1155Offchain.getRoleMember(DEFAULT_ADMIN_ROLE, 0)).to.eq(deployer.address);
            });
            
            it("minter role", async function () {
                expect(await sample1155Offchain.getRoleMember(MINTER_ROLE, 0)).to.eq(deployer.address);
            });
        });
    });
})


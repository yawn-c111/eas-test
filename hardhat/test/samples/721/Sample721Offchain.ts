import { expect } from "chai";
import { ethers} from "hardhat";
import { deploySample721Offchain } from "../../../hepler/deploy/samples/deploySample721Offchain";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Sample721Offchain } from "../../../typechain-types";

const DEFAULT_ADMIN_ROLE = ethers.ZeroHash;
const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));

async function fixture() {
    const [deployer] = await ethers.getSigners();

    const args: any[] = [];
    const { sample721Offchain } = await deploySample721Offchain(args);
    return { deployer, sample721Offchain };
}

describe("Sample721Offchain", function () {
    describe("deploy", function () {
        let deployer: SignerWithAddress;
        let sample721Offchain: Sample721Offchain;

        it("should deploy", async function () {
            ({ deployer, sample721Offchain } = await fixture());
            expect(await sample721Offchain.getAddress()).to.not.be.undefined;
        });
        
        it("check name", async function () {
            expect(await sample721Offchain.name()).to.eq("Sample721Offchain");
        });
        
        it("check symbol", async function () {
            expect(await sample721Offchain.symbol()).to.eq("S721Off");
        });

        it("check tokenIds", async function () {
            expect(await sample721Offchain.tokenIds()).to.eq(0);
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample721Offchain.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
            
            it("minter role", async function () {
                expect(await sample721Offchain.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample721Offchain.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
            
            it("minter role", async function () {
                expect(await sample721Offchain.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample721Offchain.getRoleMemberCount(DEFAULT_ADMIN_ROLE)).to.eq(1);
            });
            
            it("minter role", async function () {
                expect(await sample721Offchain.getRoleMemberCount(MINTER_ROLE)).to.eq(1);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample721Offchain.getRoleMember(DEFAULT_ADMIN_ROLE, 0)).to.eq(deployer.address);
            });
            
            it("minter role", async function () {
                expect(await sample721Offchain.getRoleMember(MINTER_ROLE, 0)).to.eq(deployer.address);
            });
        });
    });
})


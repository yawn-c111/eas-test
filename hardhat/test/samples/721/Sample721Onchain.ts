import { expect } from "chai";
import { ethers} from "hardhat";
import { deploySample721Onchain } from "../../../hepler/deploy/samples/deploySample721Onchain";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Sample721Onchain } from "../../../typechain-types";

const DEFAULT_ADMIN_ROLE = ethers.ZeroHash;
const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));

async function fixture() {
    const [deployer] = await ethers.getSigners();

    const args: any[] = [];
    const { sample721Onchain } = await deploySample721Onchain(args);
    return { deployer, sample721Onchain };
}

describe("Sample721Onchain", function () {
    describe("deploy", function () {
        let deployer: SignerWithAddress;
        let sample721Onchain: Sample721Onchain;

        it("should deploy", async function () {
            ({ deployer, sample721Onchain } = await fixture());
            expect(await sample721Onchain.getAddress()).to.not.be.undefined;
        });
        
        it("check name", async function () {
            expect(await sample721Onchain.name()).to.eq("Sample721Onchain");
        });
        
        it("check symbol", async function () {
            expect(await sample721Onchain.symbol()).to.eq("S721On");
        });

        it("check tokenIds", async function () {
            expect(await sample721Onchain.tokenIds()).to.eq(0);
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample721Onchain.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
            
            it("minter role", async function () {
                expect(await sample721Onchain.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample721Onchain.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
            
            it("minter role", async function () {
                expect(await sample721Onchain.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample721Onchain.getRoleMemberCount(DEFAULT_ADMIN_ROLE)).to.eq(1);
            });
            
            it("minter role", async function () {
                expect(await sample721Onchain.getRoleMemberCount(MINTER_ROLE)).to.eq(1);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample721Onchain.getRoleMember(DEFAULT_ADMIN_ROLE, 0)).to.eq(deployer.address);
            });
            
            it("minter role", async function () {
                expect(await sample721Onchain.getRoleMember(MINTER_ROLE, 0)).to.eq(deployer.address);
            });
        });
    });
})


import { expect } from "chai";
import { ethers} from "hardhat";
import { deploySample1155 } from "../../../hepler/deploy/samples/deploySample1155";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Sample1155 } from "../../../typechain-types";

const DEFAULT_ADMIN_ROLE = ethers.ZeroHash;
const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));

async function fixture() {
    const [deployer] = await ethers.getSigners();

    const args: any[] = [];
    const { sample1155 } = await deploySample1155(args);
    return { deployer, sample1155 };
}

describe("Sample1155", function () {
    describe("deploy", function () {
        let deployer: SignerWithAddress;
        let sample1155: Sample1155;

        it("should deploy", async function () {
            ({ deployer, sample1155 } = await fixture());
            expect(await sample1155.getAddress()).to.not.be.undefined;
        });
        
        it("check name", async function () {
            expect(await sample1155.name()).to.eq("Sample1155");
        });
        
        it("check symbol", async function () {
            expect(await sample1155.symbol()).to.eq("S1155");
        });

        it("check tokenIds", async function () {
            expect(await sample1155.tokenIds()).to.eq(0);
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample1155.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
            
            it("minter role", async function () {
                expect(await sample1155.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample1155.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
            
            it("minter role", async function () {
                expect(await sample1155.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample1155.getRoleMemberCount(DEFAULT_ADMIN_ROLE)).to.eq(1);
            });
            
            it("minter role", async function () {
                expect(await sample1155.getRoleMemberCount(MINTER_ROLE)).to.eq(1);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample1155.getRoleMember(DEFAULT_ADMIN_ROLE, 0)).to.eq(deployer.address);
            });
            
            it("minter role", async function () {
                expect(await sample1155.getRoleMember(MINTER_ROLE, 0)).to.eq(deployer.address);
            });
        });
    });
})


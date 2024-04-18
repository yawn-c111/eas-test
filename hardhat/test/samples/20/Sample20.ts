import { expect } from "chai";
import { ethers} from "hardhat";
import { deploySample20 } from "../../../hepler/deploy/samples/deploySample20";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Sample20 } from "../../../typechain-types";

const DEFAULT_ADMIN_ROLE = ethers.ZeroHash;
const MINTER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("MINTER_ROLE"));

async function fixture() {
    const [deployer] = await ethers.getSigners();

    const args: any[] = [];
    const { sample20 } = await deploySample20(args);
    return { deployer, sample20 };
}

describe("Sample20", function () {
    describe("deploy", function () {
        let deployer: SignerWithAddress;
        let sample20: Sample20;

        it("should deploy", async function () {
            ({ deployer, sample20 } = await fixture());
            expect(await sample20.getAddress()).to.not.be.undefined;
        });
        
        it("check name", async function () {
            expect(await sample20.name()).to.eq("Sample20");
        });
        
        it("check symbol", async function () {
            expect(await sample20.symbol()).to.eq("S20");
        });

        it("check decimals", async function () {
            expect(await sample20.decimals()).to.eq(18);
        });

        it("check totalSupply", async function () {
            expect(await sample20.totalSupply()).to.eq(0);
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample20.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
            
            it("minter role", async function () {
                expect(await sample20.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample20.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
            
            it("minter role", async function () {
                expect(await sample20.hasRole(MINTER_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample20.getRoleMemberCount(DEFAULT_ADMIN_ROLE)).to.eq(1);
            });
            
            it("minter role", async function () {
                expect(await sample20.getRoleMemberCount(MINTER_ROLE)).to.eq(1);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample20.getRoleMember(DEFAULT_ADMIN_ROLE, 0)).to.eq(deployer.address);
            });
            
            it("minter role", async function () {
                expect(await sample20.getRoleMember(MINTER_ROLE, 0)).to.eq(deployer.address);
            });
        });
    });
})


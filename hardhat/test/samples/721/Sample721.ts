import { expect } from "chai";
import { ethers} from "hardhat";
import { deploySample721 } from "../../../hepler/deploy/deploySample721";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Sample721 } from "../../../typechain-types";

const DEFAULT_ADMIN_ROLE = ethers.ZeroHash;

async function fixture() {
    const [deployer] = await ethers.getSigners();

    const args: any[] = [];
    const { sample721 } = await deploySample721(args);
    return { deployer, sample721 };
}

describe("Sample721", function () {
    describe("deploy", function () {
        let deployer: SignerWithAddress;
        let sample721: Sample721;

        it("should deploy", async function () {
            ({ deployer, sample721 } = await fixture());
            expect(await sample721.getAddress()).to.not.be.undefined;
        });
        
        it("check name", async function () {
            expect(await sample721.name()).to.eq("Sample721");
        });
        
        it("check symbol", async function () {
            expect(await sample721.symbol()).to.eq("S721");
        });

        it("check tokenIds", async function () {
            expect(await sample721.tokenIds()).to.eq(0);
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample721.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check hasRole", function () {
            it("default admin role", async function () {
                expect(await sample721.hasRole(DEFAULT_ADMIN_ROLE, deployer.address)).to.eq(true);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample721.getRoleMemberCount(DEFAULT_ADMIN_ROLE)).to.eq(1);
            });
        });

        describe("check getRoleMemberCount", function () {
            it("default admin role", async function () {
                expect(await sample721.getRoleMember(DEFAULT_ADMIN_ROLE, 0)).to.eq(deployer.address);
            });
        });
    });
})


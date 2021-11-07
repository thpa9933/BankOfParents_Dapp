const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Contract Deployment", () => {
    it("Initial contract deployment should set child to address of caller", async () => {
        // obj that represeentns an eth account (used to send tx's to accounts and other addresses)
        // getting the first of the list of accounts provided by the Hardhat Network
        const [owner] = await ethers.getSigners();
        const Contract = await ethers.getContractFactory("BorrowRequest");
        const borrowRequest = await Contract.deploy();

        expect(await borrowRequest.child()).to.equal(owner.address);
    });

    it("Set parent address", async () => {
        const [owner, addr1] = await ethers.getSigners();
        const Contract = await ethers.getContractFactory("BorrowRequest");
        const borrowRequest = await Contract.deploy();

        await borrowRequest.addParent(addr1.address);

        expect(await borrowRequest.parent()).to.equal(addr1.address);
    });
});

describe("Contract Transactions", () => {
    it("Create a loan", async () => {
        // needs work - ran out of time today.
        const [owner, addr1] = await ethers.getSigners();
        const Contract = await ethers.getContractFactory("BorrowRequest");
        const borrowRequest = await Contract.deploy();

        await borrowRequest.addParent(addr1.address);
        await borrowRequest.approveLoan(true);
        await borrowRequest.createLoan(1000, 1, 1, 1);

        expect(await borrowRequest.loan().totalVal()).to.equal(1000);
    });
});
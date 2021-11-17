const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contrat with account: ", deployer.address);
    console.log("Account balance: ", (await deployer.getBalance()).toString());

    const Contract = await ethers.getContractFactory("BorrowRequest");
    const borrowRequest = await Contract.deploy();

    console.log("Contract address: ", borrowRequest.address);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
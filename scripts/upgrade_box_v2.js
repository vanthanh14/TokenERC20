// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0xc9c1Df72D6D5B5f43ff68B5E6f025dCB1A83e6bD";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();
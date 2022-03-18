import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
      "Deploying the contracts with the account: ",
      await deployer.getAddress()
    );

    const PoolBase = await ethers.getContractFactory("Pool");
    const poolBase = await PoolBase.deploy();
    await poolBase.deployed();
    console.log("Pool contract address:", poolBase.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
import { ethers } from "hardhat";
import ABI from '../artifacts/contracts/Pool.sol/Pool.json';
const ADDRESS = '';

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
      "Deploying the contracts with the account: ",
      await deployer.getAddress()
    );

    // @ts-ignore
    const PoolBase = await ethers.getContractAt(ABI, ADDRESS);
    await PoolBase.connect(deployer).stake({ value: ethers.utils.parseEther("1"), from: deployer.address });
    await PoolBase.connect(deployer).deposit({ value: ethers.utils.parseEther("1"), from: deployer.address });
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
const hre = require("hardhat");

async function main() {
  const Mint = await hre.ethers.getContractFactory("Mint");
  const mint = await Mint.deploy("Minter", "MINT");

  await mint.deployed();

  console.log("Mint deployed to:", mint.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

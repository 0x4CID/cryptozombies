// scripts/deploy.js


const hre = require("hardhat");

async function main() {
    const Contract = await hre.ethers.getContractFactory("ZombieFactory");
    const contract = await Contract.deploy();
    await contract.deployed();

    console.log("Contract deployed to: ", contract.address);
    //console.log("DNA Digits: ", await contract.dnaDigits().then(result => result.toNumber()));

    // Create my zombie
    contract.createRandomZombie("Jack");

    let myZombie = await contract.zombies(0);
    console.log("My Zombie: ", myZombie);

}


main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})
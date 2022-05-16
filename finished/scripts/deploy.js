async function main() {
    // grabbing of the address of the entity deploying the contract
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    // deploying the contract to the blockchain
    const Contract = await ethers.getContractFactory("HelloWorld");
    const ContractDeployed = await Contract.deploy();

    console.log("Token address:", ContractDeployed.address);

    console.log("Smart contract returns: ", (await ContractDeployed.Greeting()).toString());
}

// error handling -- not important for this example
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
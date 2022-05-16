async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Contract = await ethers.getContractFactory("HelloWorld");
    const ContractDeployed = await Contract.deploy();

    console.log("Token address:", ContractDeployed.address);

    console.log("Smart contract returns: ", (await ContractDeployed.Greeting()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
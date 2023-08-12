# barebones-hardhat

For a stable environment, copy the package.json from this project
 "@nomiclabs/hardhat-ethers": "npm:hardhat-deploy-ethers@^0.3.0-beta.10"
to your package.json, then

yarn install
to install. Next force hardhat waffle using

yarn add -D @nomiclabs/hardhat-waffle --force

To deploy a contract
```
const TestArb = await deploy("TestArb", {
    from: deployer,
    waitConfirmations: blockConfirmation
});
```

To get the same contract
```
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const signer = provider.getSigner();
// await deployments.fixture(["TestArb"]);

const deployment = await deployments.get("TestArb")
console.log(deployment)

const contract = await ethers.getContractAt(
    deployment.abi,
    deployment.address,
    signer
);
```

Do this: first install hardhat-deploy-ethers by adding this line



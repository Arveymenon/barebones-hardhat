import { BigNumber, providers } from "ethers";
import { ethers, getNamedAccounts, deployments, network } from "hardhat"

// 0x5DEf5a28f80ed4cce7AADeBCfd2477Ed90248eEf
async function main() {
    const { deployer } = await getNamedAccounts();
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

    const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);
    const signer = wallet.provider.getSigner(wallet.address);

    // const signer = provider.getSigner();
    // await deployments.fixture(["TestArb"]);

    const deployment = await deployments.get("TestArb")
    console.log(deployment.address)
    
    const contract = await ethers.getContractAt(
        deployment.abi,
        deployment.address,
        signer
    );
    
    const currentVal1 = await contract.getCurrentValue1()
    const currentVal2 = await contract.getCurrentValue2()
    const mulValue = currentVal1.mul(currentVal2).toString()
    console.log("Mul:  ", mulValue);
    console.log("Div by 5: ", ethers.utils.parseEther(mulValue).div(BigNumber.from("5")).toString()) ;
    
    console.log(currentVal1.toString())
}

main().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
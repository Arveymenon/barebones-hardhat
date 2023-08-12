import { ethers, getNamedAccounts } from "hardhat"

async function main() {
    const { deployer } = await getNamedAccounts();

    const contract = await ethers.getContractAt("TestArb", deployer)
    console.log(contract);
}

main().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
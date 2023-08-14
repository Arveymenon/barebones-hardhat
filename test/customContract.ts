import { Contract, ContractFactory } from "ethers";
import { ethers, getNamedAccounts } from "hardhat";

describe("Contract test", () => {

    let contract: Contract;
    let externalContract: Contract;
    let signer;

    beforeEach(async ()=>{
        [ signer ] = await ethers.getSigners()
        console.log("Signer", signer)

        const contractFactory = await ethers.getContractFactory("TestArb");
        contract = await contractFactory.deploy();


        // get the abi from remix or use the 
        // etherscan api https://api.etherscan.io/api?module=contract&action=getabi&address=0xBc84CE9CD5342B6ECCD9e29A09864eD7909E3078&apikey=YourApiKeyToken
        externalContract = new ethers.Contract(
                "0xBc84CE9CD5342B6ECCD9e29A09864eD7909E3078",
                `[
                    {
                        "inputs": [
                            {
                                "internalType": "bytes8",
                                "name": "_gateKey",
                                "type": "bytes8"
                            }
                        ],
                        "name": "enter",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "entrant",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ]`,
                signer
        )
        //  = await ethers.getContractAt("0xBc84CE9CD5342B6ECCD9e29A09864eD7909E3078");
    })

    it("just testing", async () => {
        const val1 = await contract.getCurrentValue1();
        console.log("Contract", val1.toString())
    })

    it("test external contracts", async () => {
        console.log("External Contract",externalContract)
        const success = await externalContract.enter("0x0000000000000000")
        console.log(success)
    })

})
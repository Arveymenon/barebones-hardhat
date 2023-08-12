import { DeployFunction } from 'hardhat-deploy/dist/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types'


const main: DeployFunction =  async function (
    hre: HardhatRuntimeEnvironment
) {
    const { deployments, getNamedAccounts, network } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const blockConfirmation = network.name === 'hardhat' ? 0 : 2;
    
    console.log("Starting deployed")
    const TestArb = await deploy("TestArb", {
        from: deployer,
        waitConfirmations: blockConfirmation
    });
    // const txnres =  contractTxn.waitForDeployment()

    console.log(TestArb.address);

}
export default main

export const tags = ["TestArb"];
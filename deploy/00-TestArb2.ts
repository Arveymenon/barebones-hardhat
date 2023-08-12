import { DeployFunction } from 'hardhat-deploy/dist/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types'


const main: DeployFunction =  async function (
    hre: HardhatRuntimeEnvironment
) {
    const { deployments, getNamedAccounts, network } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    
    console.log("Starting deployed")
    const TestArb = await deploy("TESING", {
        from: deployer,
        waitConfirmations: 2
    });
    // const txnres =  contractTxn.waitForDeployment()

    console.log(TestArb.address);

}
export default main

export const tags = ["TestArb"];
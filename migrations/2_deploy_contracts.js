//artifacts: json files created by truffle
/*
callbacks -> promises -> async await
 */



let MyToken = artifacts.require("./MyToken.sol")
let MyTokenSale = artifacts.require("./MyTokenSale.sol")
let MyKycContract = artifacts.require("./KycContract.sol")
require('dotenv').config({path:"../.env"})

module.exports = async function(deployer) {
    //rate wallet token

    let addr = await web3.eth.getAccounts() //wallet

    await deployer.deploy(MyKycContract)
    await deployer.deploy(MyToken)
    await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address, MyKycContract.address)


    let instance = await MyToken.deployed()
    await instance.transfer(MyTokenSale.address, process.env.INITIAL_TOKENS) // Transfer all tokens from mytoken to mytokensale contract

};
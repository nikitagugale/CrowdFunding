const Token = artifacts.require("MyToken")
const TokenSale = artifacts.require("MyTokenSale")
const KycContract = artifacts.require("KycContract")

//initial set-up of chai imported from setupchai.js
const chai = require("./setupchai") 
const BN = web3.utils.BN
const expect = chai.expect


//start writing test-cases from here
contract("TokenSale Testing", async(accounts)=>{
    //    account[0]        , accounts[1], accounts[2]
    const [deployerAccount, recipient, anotherAccount] = accounts;
    
    //1st Test  as we are transfering all tokens from deployer a/c to MyTokensale.sol contract so deployer a/c should not contain any tokens i.e no. of tokens = 0;
    //No Tokens in deployers account
    it ("Should Not Have Any Tokens In Deplyer's Account", async() => {
        let instance = await Token.deployed()
        return expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BN(0)) 

    })

    //2nd Test MyTokenSale.sol cotract should contain all tokens i.e = totalsupply i.e 10000
    //All tokens in TokenSale contract
    it("All Tokens Should Be In TokenSale Contract",async()=>{
        let instance = await Token.deployed()
        let balanceOfTokenSaleContract = await instance.balanceOf(TokenSale.address)
        let totalSupply = await instance.totalSupply()//10000 tokens
        expect(balanceOfTokenSaleContract).to.be.a.bignumber.equal(totalSupply)
    })

    //4th Test Now user can buy Tokens
    //we can perform buying tokens
    it("should be possible to buy tokens", async()=>{
        let tokenSaleInstance = await TokenSale.deployed()
        let kycInstance = await KycContract.deployed()
        
        //kyc check 
        await kycInstance.KycCompleted(deployerAccount, {from: deployerAccount}) //deployer is trying to whitelist himself
        
        //deploer should get 1 wei => 1wei = 1 token
        expect(tokenSaleInstance.sendTransaction({from: deployerAccount, value: web3.utils.toWei("1","wei")})).to.be.fulfilled
        
        })
        

})
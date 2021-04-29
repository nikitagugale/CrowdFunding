// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Crowdsale.sol";
import "./KycContract.sol";

contract MyTokenSale is Crowdsale{
    KycContract kyc; // kyc contract instance or contract wide scope
    constructor(
        uint256 rate,             //how many wei we need to pay to buy tokens
        address payable wallet,   //this receives amount of wei which are sent to crowdsale
        IERC20 token,              // transfer these tokens once you receive wei in your wallet
        KycContract _kyc           //
    ) Crowdsale(rate, wallet, token) {
        kyc=_kyc;      //contract instance created once deployed
    }
    
    //overide prevalidate function()
    function _preValidatePurchase(address beneficiary, uint256 weiAmount)
        internal
        view
        virtual
        override
    {
        super._preValidatePurchase(beneficiary,weiAmount);//calling parent contract
       require( kyc.KycCompleted(msg.sender),"KYC Is Not Completed");
    }
}
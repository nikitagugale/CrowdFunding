// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract KycContract is Ownable{

    mapping(address => bool) allowed;
    //mark is KYC completed => allow user
    function setKycCompleted(address _addr) public onlyOwner{
        allowed[_addr] = true;
    }

    //dont allow if KYC is pending => dsiable user
    function setKycRevoked(address _addr) public onlyOwner{
        allowed[_addr] = false;
    }

    //check if KYC is already done => allow user
    function KycCompleted(address _addr) public view returns(bool){
        return allowed[_addr];
    }

}

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20{
    

constructor(
  //  owner = msg.sender
) ERC20("Snapper Coins","SNC"){
     //intial supply 
     _mint(msg.sender, 10000); //creating intial supply and allocates to the contract deployer 

    }

    //change number of decimals

    function decimals() public view virtual override returns(uint8){
        return 0;
    }
    
}
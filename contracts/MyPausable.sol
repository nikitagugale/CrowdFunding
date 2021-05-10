// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
contract MyPausable {
    address owner;
    bool  _paused;
constructor () {
         _paused= false;
        owner = msg.sender;
}
modifier onlyAuthorized {
     require(msg.sender==owner,"Only Admin");
        _;
    }
    modifier whenNotPaused() {
        require(!_paused, "Pausable: Not Paused");
        _;
    }
    function _pause() public virtual onlyAuthorized {
        _paused = true;
       
    }
   function _unpause() internal virtual onlyAuthorized {
        _paused = false;
        
    }
    
    
}

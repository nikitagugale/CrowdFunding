// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/escrow/ConditionalEscrow.sol";
 //Refund To Investor
contract RefundEscrow is ConditionalEscrow  {
    using Address for address payable;
    enum State { Active, Refunding, Closed }
    event RefundsClosed();
    event RefundsEnabled();
    State private _state;
    address payable immutable private _user;
        //Users 0th address 
    constructor (address payable user_) {
        require(user_ != address(0), "RefundEscrow: users zero address");
        _user = user_;
        _state = State.Active;
    }
   
     //Current State Of the user
    function state() public view virtual returns (State) {
        return _state;
    }
    //User account addresss
    function user() public view virtual returns (address payable) {
        return _user;
    }
        //Active state of the user then only refund

    function deposit(address refundee) public payable virtual override {
        require(state() == State.Active, "RefundEscrow: can only deposit while active");
        super.deposit(refundee);
    }
   
     //Allows user to withdraw their funds 
    function close() public virtual onlyOwner {
        require(state() == State.Active, "RefundEscrow: can only close while active");
        _state = State.Closed;
        emit RefundsClosed();
    }

    //Allows for refund When user was active 
    function enableRefunds() public onlyOwner virtual {
        require(state() == State.Active, "RefundEscrow: can only enable refunds while active");
        _state = State.Refunding;
        emit RefundsEnabled();
    }
   //Withdraws the  user's Funds 
    function userWithdraw() public virtual {
        require(state() == State.Closed, "RefundEscrow: user can only withdraw while closed");
        user().sendValue(address(this).balance);
    }
    }


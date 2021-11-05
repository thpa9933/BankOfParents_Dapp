//SPDX-License-Identifier: UNLICENSED
pragma solidity ^ 0.8.9;

contract borrowRequest {
    address public parent;
    address public child;
    
    uint public loanbalance;
    
    // parent vars
    uint public payBackDate;
    uint public interestRate;
    uint public payInterval; // pay intervals can be a enum [daily, weekly, monthly]
    bool public isApproved;
    
    // child vars
    uint public amount;
    bool acceptsConditions;
    
    constructor(address creator) {
        child = creator;
        isApproved = false;
        loanbalance = 0;
        acceptsConditions = false;
    }
    
    modifier parentRestricted() {
        require(msg.sender == parent);
        _;
    }
    
    modifier childRestricted() {
        require(msg.sender == child);
        _;
    }
    
    function addParent(address p) public {
        parent = p;
    }
    
    // child asks for money
    function askForMoney(uint value) public {
        amount = value;
    }
    
    // parent determines the loan details
    function addRequestRestraints(
        uint date, uint interest, uint interval
        ) public parentRestricted {
            payBackDate = date;
            interestRate = interest;
            payInterval = interval;
        }
    
    // child approves details
    function approveConditions(bool doesApprove) public childRestricted {
        if(doesApprove == true) {
            acceptsConditions = true;
        } else {
            acceptsConditions =  false;
        }
    }
    
    // parent approves loan
    function approveLoan() public payable parentRestricted {
        require(msg.value >= amount);
        loanbalance += msg.value;
    }
    
    uint dateNow = 0; // get date.now
    function forfietFunds() public payable {
        if((loanbalance < amount) && (dateNow > payBackDate) ) {
            payable(parent).transfer(loanbalance);
        }
    }
    
}
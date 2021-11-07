//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract BorrowRequest {
    address public parent;
    address public child;
    
    struct Loan {
        uint totalBalance;
        uint remainingDebt;
        uint payBackDate;
        uint interestRate;
        uint payment;
        address lender;
        address borrower;
    }

    uint public proposedAmount;
    bool public parentApproved;
    Loan public loan;
    
    constructor() {
        child = msg.sender;
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
        proposedAmount = value;
    }
    
    // parent approves loan
    function approveLoan(bool approved) public parentRestricted {
        parentApproved = approved;
    }
    
    // parent determines loan details and creates loan
    function createLoan(uint totalVal, uint date, uint rate, uint recurringVal)
    public payable parentRestricted {
        if(parentApproved) {
            Loan memory newLoan = Loan(
                totalVal,
                totalVal,
                date,
                rate,
                recurringVal,
                parent,
                child
            );
            loan = newLoan;
        }
    }
    
    // child provides payment
    function payBackLoan() public payable childRestricted {
        require(msg.value > 0);
        loan.remainingDebt = loan.totalBalance - msg.value;
    }

    uint dateNow = 0; // get date.now
    function forfietFunds() public payable {
        if((loan.remainingDebt < loan.totalBalance) && (dateNow > loan.payBackDate) ) {
            payable(parent).transfer(loan.totalBalance);
        }
    }
}
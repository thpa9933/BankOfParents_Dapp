# BankOfParents_Dapp
For all ya'll that borrow from your rents interest free ;)

**hardhat, ethers, chai**

Child (user) contract functionality:
- Create borrow request
- Post how much money to be borrowed
- Request approval from parent

Parent (manager) contract functionality:
- Set interest rate on borrow request
- Aprove / reject borrow request
- Deploy loan contract if approved
    - time of loan
    - interst rate (if any)
    - payback period (weekly/montly)
- If not paid back on time, send full account balance
to parent and cancel contract. 

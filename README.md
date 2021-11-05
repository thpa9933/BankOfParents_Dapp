# BankOfParents_Dapp
For all ya'll that borrow from your rents interest free ;)

Child (user) contract functionality:
- Post how much money to be borrowed
- Request approval from parent

Parent (manager) contract functionality:
- Aprove / reject approval
- Determine interest rate
- Deploy loan contract if approved
    - time of loan
    - interst rate (if any)
    - payback period (weekly/montly)
- If not paid back on time, send full account balance
to parent and cancel contract. 

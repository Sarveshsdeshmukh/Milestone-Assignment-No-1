// 17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.

function updateAccount(account , amount ,operation){
    let {name,balance} = account;
    if(operation === "Deposit"){
        balance += amount;
    }else if(operation === "Withdraw"){
        if(amount > balance){
            console.log("Insufficient Funds");
        }else{
            balance -= amount;
        }
    }else{
        console.log("Invalid Operation");
    }
    account = {
        name,balance
    };
    return account;
}

const account = {
    name : "Sarvesh Deshmukh",
    balance : 250000
} 
let Result = updateAccount(account,200000000,"Deposit");
console.log(Result);

// // 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.

function billSplitter(costOfDish , NoPeople_Sharing){
    const totalBill = costOfDish * NoPeople_Sharing;
    const perPersonContry = totalBill /NoPeople_Sharing;

    let obj = {
       "Total_Bill" : totalBill,
       "perPersonContry" : perPersonContry
    }
    return obj;
}

let Result = billSplitter(1000,10);
console.log(Result);
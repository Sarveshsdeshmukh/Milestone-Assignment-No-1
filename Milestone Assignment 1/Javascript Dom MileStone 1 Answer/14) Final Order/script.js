// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.

const FinalOrderPrice = (arrayOfItems) => {
  let totalCost = 0;
  arrayOfItems.forEach((item) => {
    totalCost += item.quantity * item.unitPrice;
  });
  return totalCost;
};

const arrayOfItems = [
  { unitPrice: 101, quantity: 20 },
  { unitPrice: 800, quantity: 41 },
  { unitPrice: 33, quantity: 12 },
];

let Result = FinalOrderPrice(arrayOfItems);
console.log(Result);

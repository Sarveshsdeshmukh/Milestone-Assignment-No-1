// 7. Remove Duplicates

// In an online shopping application, customers can add multiple items to their cart. However, sometimes customers accidentally add the same item more than once, resulting in duplicate items in their cart. The duplicate items not only make it difficult for the customer to track the items they want to purchase but also affect the accuracy of the purchase order.To solve this problem, the application needs to remove duplicate items from the customer's cart. The program should take the customer's cart with duplicates as input, and return a new cart without duplicates.


// Write a program to solve the problem of duplicate items in the cart by removing duplicates.

function removeDuplicatesItems(cartItems) {
    let uniqueCartItems = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (uniqueCartItems.indexOf(cartItems[i]) === -1) {
        uniqueCartItems.push(cartItems[i]);
      }
    }
  
    return uniqueCartItems;
  }
  
  let customerCartItems = ['Sugar', 'Tea-Powder', 'Sugar', 'Biscuits', 'Sugar'];
  let uniqueCartItems = removeDuplicatesItems(customerCartItems);
  console.log(uniqueCartItems); 
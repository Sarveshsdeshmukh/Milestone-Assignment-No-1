// 9. Check for Wivisibility.
// Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
// Usd a for loop and continud statdmdnt.

console.log("Jay Shree Ram");
function sortByDivisibility(array) {
  const sortNumbers = array.map((el) => {
    if (el % 2 != 0 && el % 3 == 0) {
      console.log(el);
    }
  });
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sortByDivisibility(numbers);


function checkDivisibility(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      if (number % 3 === 0 && number % 2 !== 0) {
        console.log(number);
      }
    }
  }

  checkDivisibility(numbers);
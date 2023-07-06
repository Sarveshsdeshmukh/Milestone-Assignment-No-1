// 2. Calculator

// Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement to perform the operation on the two numbers.


// The calculator function should"
// L Take in two numbers, num1 and num2, and a string representing a mathematical operator, operatorP
// L Use a switch statement to determine which operation to perform based on the value of the operatorP
// L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical operation and store the result in a variable called resultP
// L If the operator is not one of the valid operators, log "Invalid operator" to the console.

let Number1;
let Number2;
let operator = "";

const Operation = (Number1,Number2,operator)=>{
    switch(operator){
        //for addition
        case "+":
        console.log("The Additon of the %d And %d is --> %d ",Number1,Number2,Number1+Number2);
        break;
        //For subtraction   
        case "-":
        console.log("The Subtraction of the %d And %d is --> %d ",Number1,Number2,Number1-Number2);
        break;
        // for Multiplicaton
        case "*":
        console.log("The Multiplicaton of the %d And %d is --> %d ",Number1,Number2,Number1*Number2);
        break;
        //for Division
        case "/":
        console.log("The Division of the %d And %d is --> %d ",Number1,Number2,Number1/Number2);
        break;       
default:
    console.log("This is Not Valid Operator ");
    }

}

Operation(45,45,"*");
// JAY SHREE RAM 
// 1. Password ValiMator
// Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the consoleQ

let enteredPassword = "Pwskills@123";
let confirmedPassword = "Pwskills@1234";


function PasswordValidator(enteredPassword,confirmedPassword){
    if(enteredPassword === confirmedPassword){
        console.log("Password Matched. Password validation Successful.");
    }
    else{
        console.log("Password didn't match. Password validation unsuccessful");
    }
}

PasswordValidator(enteredPassword,confirmedPassword);

// Jay shree ram

const button = document.getElementById("button");
const inputField = document.getElementById("inputField");
const todolist = document.getElementsByClassName("todolist");
const todoContainer = document.getElementById("todoContainer")

button.addEventListener("click",function(){
    let h1 = document.createElement("h1");
    h1.classList.add("todolist");
    h1.innerText = inputField.value;
    todoContainer.appendChild(h1);
    inputField.value = "";
    h1.addEventListener("click",function(){
        h1.style.textDecoration = "line-through";
    })
    h1.addEventListener("dblclick",()=>{
        h1.style.display = "none";
    })


});
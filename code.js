// Global variables
let num1 = 0;
let num2 = 0;
let operator;

// "add" function
function add(n1, n2) {
    return n1 + n2;
}

// "subtract" function
function subtract(n1, n2) {
    return n1 - n2;
}

// "multiply" function
function multiply(n1, n2) {
    return n1 * n2;
}

// "divide" function
function divide(n1, n2) {
    return n1 / n2;
}

// "operate" function
function operate(num1, operator, num2) {
    return operator(num1, num2);
}

// Function to populate the display when click the number buttons
function displayScreen(e) {    
    console.log(e);
    document.querySelector(".displayScreen").innerHTML = e.target.innerHTML;
    num1 += e.target.innerHTML;
    num1 = +num1;    
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(number => number.addEventListener("click", displayScreen));





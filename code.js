// Global variables
let num1 = 0;
let num2 = 0;
let operator;
let displayNumber1 = 0;
let displayNumber2 = 0;

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
function operate(n1, operator, n2) {
    return operator(n1, n2);
}

// Function to populate the display when click the number buttons
function displayScreen(event) {
    if (event.target.className == "number") {
        if (operator == undefined) {
            displayNumber1 += event.target.innerHTML;
            displayNumber1 = +displayNumber1;
            document.querySelector(".displayScreen").innerHTML = displayNumber1;
            num1 += event.target.innerHTML;
            num1 = +num1;
        } else {
            displayNumber2 += event.target.innerHTML;
            displayNumber2 = +displayNumber2;
            document.querySelector(".displayScreen").innerHTML = displayNumber2;
            num2 += event.target.innerHTML;
            num2 = +num2;
        }
    } else {
        operator = event.target.value;
        document.querySelector(".displayScreen").innerHTML = event.target.innerHTML;
    }        
}

// When number buttons clicked, execute the displayScreen function.
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(number => number.addEventListener("click", displayScreen));

// Operator button function
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(mathOperator => mathOperator.addEventListener("click", displayScreen));
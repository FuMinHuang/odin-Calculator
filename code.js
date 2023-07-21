// Global variables
let num1 = 0;
let num2 = 0;
let result = 0;
let operator;
let operatePress = false;

// "add" function
function add(n1, n2) {
    num1 = n1 + n2;
    num2 = 0;
    return num1;
}

// "subtract" function
function subtract(n1, n2) {
    num1 = n1 - n2;
    num2 = 0;
    return num1;
}

// "multiply" function
function multiply(n1, n2) {
    num1 = n1 * n2;
    num2 = 0;
    return num1;
}

// "divide" function
function divide(n1, n2) {
    num1 = n1 / n2;
    num2 = 0;
    return num1;
}

// "operate" function
function operate() {
    if (operator == "divide" && num2 == 0) {
        document.querySelector(".displayScreen").innerHTML = "Can't divide by 0";
    } else if (operatePress == false && num1 !== 0) {
        result = window[operator](num1, num2);
        document.querySelector(".displayScreen").innerHTML = Math.round((result + Number.EPSILON) * 100) /100;
        operatePress = true;
    }
}

// Function to populate the display when click the number buttons
function displayScreen(event) {
    // If clicked number buttons
    if (event.target.className == "number") {
        // Store num1
        if (operator == undefined) {
            num1 += event.target.innerHTML;
            num1 = +num1;
            document.querySelector(".displayScreen").innerHTML = num1;
        // Store num2
        } else {
            num2 += event.target.innerHTML;
            num2 = +num2;
            operatePress = false;
            document.querySelector(".displayScreen").innerHTML = num2;            
        }
        
    // If clicked operator buttons
    } else {   
        // After first time clicked operator buttons
        if (operator != undefined && num2 !== 0) {
            operatePress = false;
            operate();
            operator = event.target.value;   

        // First time clicked oeprator buttons
        } else {
            operator = event.target.value;
            operatePress = false;
            document.querySelector(".displayScreen").innerHTML = event.target.innerHTML;
        }        
    }        
}

// When number buttons clicked, execute the displayScreen function.
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(number => number.addEventListener("click", displayScreen));

// When user press "operator" keys
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(mathOperator => mathOperator.addEventListener("click", displayScreen));

// When user press "=" key
const operateButton = document.querySelector(".operate");
operateButton.addEventListener("click", operate);

// When user press "Clear" key
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    result = 0;
    operator = undefined;
    operatePress = false;
    document.querySelector(".displayScreen").innerHTML = "";
})

// When user press down key

/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(num1,num2)
{
    return num1 + num2;
}

function addNumbers() 
{
    const num1 =document.getElementById("add1").value;
    const num2 = documnet.querySelector("#add2").value;
    const sum = add(num1, num2);

    document.getElementById("sum").value = sum;
}

document.getElementByID("addNumbers").addEventListener("click",addNumbers)

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {return number1 -number2};

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

/* Open Function Use - Divide Numbers */

function divide(dividend, divisor) { return dividend / divisor};


/* Decision Structure */

document.querySelector('#addNumbers').addEventListener('Click',addNumbers);

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(add(addNumber1, addNumber2));

}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,12,13];


/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numbersArray.filter(number)



/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number)

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);


/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);


/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumofMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => si, + number);
/* LESSON 3 - Programming Tasks */

//Function to perform addition
function performAddition() {
    // Get values from input fields
    const num1 = parseFloat(document.getElementById("add1").value);
    const num2 = parseFloat(document.getElementById("add2").value);

    // Perform addition
    const sum = num1 + num2;

    //Display the result
    document.getElementById("sum").value = sum;
}

// Function to perform subtraction
function performSubtraction() {

    // Get values from input fields
    const num1 = parseFloat(document.getElementById("subtract1").value);
    const num2 = parseFloat(document.getElementById("subtract2").value);

    //Perform subtraction
    const difference = num1 - num2;

    // Display the result
    document.getElementById("difference").value = difference;
}

// Function to perform multiplication
function performMultiplication (){
    // Get values from input fields
    const num1 = parseFloat(document.getElementById("factor1").value);
    const num2 = parseFloat(document.getElementById("factor2").value);

    //Perform multiplication
    const product = num1 * num2;

    //Display the result
    document.getElementById("product").value = product;

}

// Function to perform division

function performDivision(){
    //Get values from input fields
    const dividend = parseFloat(document.getElementById("dividend").value);
    const divisor = parseFloat(document.getElementById("divisor").value);
    
    // Check if the divisor is not zero to avoid division by zero
    if (divisor !== 0) {

        const quotient = dividend / divisor;

        // Display the result
        document.getElementById("quotient").value = quotient.toFixed(2);
    }
    else {
        // If divisor is zero, display and error message
        alert("Cannot divide by zero!")
    }
}


// Add event.listerners for arithmetic operations
document.getElementById("addNumbers").addEventListener("click", performAddition);
document.getElementById("subtractNumbers").addEventListener("click", performSubtraction);
document.getElementById("multiplyNumbers").addEventListener("click", performMultiplication);
document.getElementById("divideNumbers").addEventListener("click", performDivision);


// Functions for Selection Structures

// Function to calculate total due based on subtotal and membership
function calculateTotalDue() {
    // Get values from input fields
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const isMember = document.getElementById("member").checked;

    // Calculate total due based on membership status
    const totalDue = isMember ? subtotal * 0.9 : subtotal;

    // Display the result
    document.getElementById("total").textContent = '$ ${totalDue. toFixed(2)}';

    // Add event listener for calculating total due
    document.getElementById("getTotal").addEventListener("click", calculateTotalDue);
}
    // ---------- Functions for Array Methods

    // Sample array for array method demonstration
    const sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Display the source array
    document.getElementById("array").textContent = sourceArray.join(",");

    // Function to filter odd numbers from the array
    function filterOddNumbers() {
    const oddNumbers = sourceArray.filter(num => num % 2 !==0);
    document.getElementById("odds").textContent = oddNumbers.join(",");
    }

    //Function to filter even numbers from the array
    function filterEvenNumbers () {
    const evenNumbers = sourceArray.filter(num => num % 2 ===0);
    document.getElementById("evens").textContent = evenNumbers.join(",")
    }

// Function to calculate the sum of the array
function calculateSumOfArray() {
    const sum = sourceArray.reduce((acc, num) => acc + num, );
    document.getElementById("sumOfArray").textContent = sum;
    }

// Function to multiply each element in the array by 2 
function multiplyArrayBytwo(){

    const multipliedArray = sourceArray.map(num => num * 2);
    document.getElementById("multiplied").textContent = multipliedArray.join(",");
}

  
// Function to calculate the sum of the arrary after multiplying each element by 2

function calculateSumOfMultipliedArray() {
    const sumOfMultipliedArray = sourceArray.map(num => num *2).reduce((acc, num) => acc + num, 0);
    document.getElementById("sumOfMultiplied").textContent = sumOfMultipliedArray;
}

// Add event listeners for array methods

document.getElementById("filterOdd").addEventListener("click", filterOddNumbers);
document.getElementById("filterEven").addEventListener("click", filterEvenNumbers);
document.getElementById("calculateSum").addEventListener("click", calculateSumOfArray);
document.getElementById("multiplyByTwo").addEventListener("click", multiplyArrayBytwo);
document.getElementById("calculateSumMultiplied").addEventListener("click", multiplyArrayBytwo);
document.getElementById("divideNumbers").addEventListener("click", performDivision);

//Selection Structures
function calculateTotalDue(){

    //Get the value from the # subtotal field and convert it to a number
    const subtotal = parseFloat(document.getElementById("subtotal").value);

    // Check if the subtotal is less than or equal to 0, or it it's NaN, null, or undefined

    if (subtotal <= 0 || isNaN(subtotal)) {
        // Clear the input field to avoid displaying invalid data
        document.getElementById("subtotal").value = "";
        //stop the function execution to prevent further calculations
        // on an invalid or non-numberic subtotal
        return;
    }

    // Check if the Club Member box is checked
    const isClubMembership = document.getElementById("member").checked;

    // Calculate total due based on membership status and apply discount
    // 15% discount for club members
    const discount = isClubMembership ? 0.85 : 1; 
    const totalDue = subtotal * discount;

    // Display the result
    document.getElementById("total").textContent = '$' + totalDue.toFixed(2);

}

 // Add event listener for calculating total due
 document.getElementById("getTotal").addEventListener("click", calculateTotalDue);

 // Array Methods
 const numbersArray = [1,2,3,4,5,6,7,8,9];

 // Display the source array
 document.getElementById("array").textContent = numbersArray.join(", ");

 // Function to filter odd numbers from the array
 function filterOddNumbers(){
    const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
    document.getElementById("odds").textContent = oddNumbers.join(",");

 }

 // Function to filter even numbers from the array
 function filterEvenNumbers() {
    const evenNumbers = numbersArray.filter(number => number % 2 === 0);
    document.getElementById("evens").textContent = evenNumbers.join(",");
}

// Function to calculate the sum of the array
function calculateSumOfArray(){
    const sum = numbersArray.reduce((acc, num) => acc + num, 0);
    document.getElementById("sumOfArray").textContent = sum;
}

// Function to multiply each element in the array by 2
function multiplyArrayByTwo(){
    const multipliedArray = numbersArray.map(num => num * 2);
    document.getElementById("multiplied").textContent = multipliedArray.join(",");
}

// Function to calculate the sum of the array after multiplying each element by 2
function calculateSumOfMultipliedArray(){
    const sumOfMultipliedArray = numbersArray.map(num => num *2).reduce((acc, num) => acc + num, 0);
    document.getElementById("sumOfMultiplied").textContent = sumOfMultipliedArray;

}

// Add event listeners for array methods
document.getElementById("filterOdd").addEventListener("click", filterOddNumbers);
document.getElementById("filterEven").addEventListener("click", filterEvenNumbers);
document.getElementById("calculateSum").addEventListener("click", calculateSumOfArray);
document.getElementById("multiplyByTwo").addEventListener("click", multiplyArrayByTwo);
document.getElementById("calculateSumMultiplied").addEventListener("click", calculateSumOfMultipliedArray);

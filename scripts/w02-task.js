/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullName = 'Lora Chisholm';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/mypic.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

// I am using getElementById() method to retrieve the HTML element
const foodElement = document.getElementById('food');

// I am using querySelector() method to find the HTML element with the id 'year'
const yearElement = document.querySelector('#year');

//getting my pic from the image file
const imageElement = document.querySelector('#home img');


/* Step 4 - Adding Content */

// Assign the nameElement's innerHTML property the fullName variable value
// Surround the fullName value with <strong> tags using a template literal
nameElement.innerHTML = `<strong>${fullName}</srong>`;

// Use the textContent property to set the value of the element to the value of the variable currentYear
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the image element
// Set its value to the file path variable set in Step 2
imageElement.setAttribute('src', profilePicture);

// Use the setAttribute method to set the alt property of the image element
// Set its value to 'Profile image of [Insert Name Variable]' using a template literal
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

// Declare an array variable to hold your favorite foods
const favoriteFoods = ['Pizza', 'Sushi', 'Chocolate', 'Burgers'];

// Modify the HTML element with the id of food to display your favorite foods array
foodElement.innerHTML = favoriteFoods;

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = 'Ice Cream';

// Add the value stored in this new variable to your favorite food array
favoriteFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food
// Use += operator and <br> for a line break
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Append the array output showing the modified array, using a line break
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favoriteFoods}`;

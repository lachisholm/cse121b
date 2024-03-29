/* W02-Task - Profile Home Page */



/* Step 1 - Setup type tasks - no code required */



/* Step 2 - Variables */
//Storing my full name
const fullName = 'Lora Ann Chisholm';

//Getting the current year
const currentYear = new Date().getFullYear();

//Storing the file path for my profile picture
const profilePicture = 'images/mypic.jpg';


/* Step 3 - Element Variables */

// Element to display my name
const nameElement = document.getElementById('name');

// Element to display the favorite foods
const foodElement = document.getElementById('food');

// Element to display the current year
const yearElement = document.querySelector('#year');

// Element to display my profile picture
const imageElement = document.querySelector("#home > picture > img");



/* Step 4 - Adding Content */

// Assign the nameElement's innerHTML property the fullName variable value
// Surround the fullName value with <strong> tags using a template literal
//show my name with bold formatting
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Show the current year
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the image element
// Set its value to the file path variable set in Step 2
//MYNOTE****imageElement is like a box,(so it's like telling the box, "show the picture that is stored in the profilePicture") 'src stands for "source" it tells me where I find the picture it should show - so it's like saying hey box the source or location of the picture you should show is stored in the variable called profilePicture. Helps it know where to look.
//If you want to change the picture, update the 'profilePicture' variable in the same file. Change the value inside the quotes to the new file path and name of the image.

// Display my profile picture by setting its source
imageElement.setAttribute('src', profilePicture);

// Use the setAttribute method to set the alt property of the image element
// Set its value to 'Profile image of [Insert Name Variable]' using a template literal

// Set alternative text for the profile picture
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


//* Step 5 - Array */

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

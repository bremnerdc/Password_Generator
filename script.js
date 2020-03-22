// Write a function that takes user input and creates a password
// based on that input and returns it
  /****
   * WRITE YOUR CODE HERE
   */

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
   "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var specialChar = ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[",
"]", "{", "}", "|", "\\"];

// Function to prompt user for password options
function userPrompt() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt("How many characters do you want your password to be?")
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert("You need to include a number");
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
  alert("This password has to be 8 characters or more");
  return;
  } 

// Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
  alert("This password is too long, please keep it below 128 characters.");
  return;
  }
  
// Variable to store boolean regarding the inclusion of lowercase characters
var lowerCheck = confirm("Click OK to include a lowercase letter");

// Variable to store boolean regarding the inclusion of uppercase characters
var upperCheck = confirm("Click OK to include an uppercase letter");

// Variable to store boolean regarding the inclusion of numeric characters
var numCheck = confirm("Click OK to include a number");

// Variable to store boolean regarding the inclusion of special characters
var specialCheck = confirm("Click OK to include a special character");

// Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
if (lowerCheck === false && 
  upperCheck === false && 
  numCheck === false && 
  specialCheck === false){
alert("Your password does not meet the password requirements");
return;
  }
  
// Object to store user input
var passCheck = {
  length: length, 
  lowerCheck: lowerCheck, 
  upperCheck: upperCheck,
  numCheck: numCheck, 
  specialCheck: specialCheck
};
  return passCheck;
}

// Function for getting a random element from an array
  function getRandom(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var element = arr[index];
    return element;
  }

// Function to generate password with user input
  function passwordGenerate() {
    var userpromptOptions = userPrompt();
    var genResult = [];
    var passwordArr = [];
    var result = [];

    if (userpromptOptions.specialChecks) {
      passwordArr = passwordArr.concat(specialChar);
      genResult.push(getRandom(specialChar));
      }
    if (userpromptOptions.specialCheck) {
    genResult = genResult.concat(specialChar);
    passwordArr.push(getRandom(specialChar));
  }
    if (userpromptOptions.lowerCheck) {
    genResult = genResult.concat(lowerCase);
    passwordArr.push(getRandom(lowerCase));
  }
    if (userpromptOptions.upperCheck) {
    genResult = genResult.concat(upperCase);
    passwordArr.push(getRandom(upperCase));
  }
    if (userpromptOptions.numCheck) {
    genResult = genResult.concat(numeric);
    passwordArr.push(getRandom(numeric));
  }
  
  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < userpromptOptions.length; i++) {
    var genResult = getRandom(genResult);
    result.push(genResult);
  }

// Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < passwordArr.length; i++) {
    result[i] = passwordArr[i]; 
  }
  // Transform the result into a string and pass into writePassword
    return result.join('');
}

console.log(userPrompt)

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

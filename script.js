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

function userPrompt() {
  var length = parseInt(
    prompt("How many characters is your password?")
  );
  if (isNaN(length) === true) {
    alert("You need to include a number");
    return;
  }
  if (length < 8) {
  alert("This password has to be 8 characters or more");
  return;
  } 
  if (length > 128) {
  alert("This password is too long, please keep it below 128 characters.");
  return;
  }
  
var lowerCheck = confirm("Does your password contain a lowercase letter?");
var upperCheck = confirm("Does your password contain an uppercase letter?");
var numCheck = confirm("Does your password contain a number?");
var specialCheck = confirm("Does your password contain a special character?");

if (lowerCheck === false && 
  upperCheck === false && 
  numCheck === false && 
  specialCheck === false){
alert("Your password does not meet the password requirements");
return;
  }
  
var passCheck = {
  length: length, 
  lowerCheck: lowerCheck, 
  numCheck: numCheck, 
  specialCheck: specialCheck
};
  return passCheck;
}
  function getRandom(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var element = arr[index];
    return element;
  }

  function passwordGenerate() {
    var userpromptOptions = userPrompt();
    var genResult = [];
    var passwordArr = [];
    var result = [];

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

  for (var i = 0; i < userpromptOptions.length; i++) {
    var genResult = getRandom(genResult);
    result.push(genResult);
  }

  for (var i = 0; i < passwordArr.length; i++) {
    result[i] = passwordArr[i]; 
  }
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

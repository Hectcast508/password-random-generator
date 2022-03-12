// Assignment code here 
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "p", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var specCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", ];

function generatePassword() {
  var passLength = prompt("Choose a password length between 8 and 128 characters.");
  if (passLength < 8 || passLength > 128) {
    alert("Password lenth must be between 8 and 128 characters! Try again.");
    return generatePassword();
  }
  var numbers = confirm("Would you like numbers in you password?");
  
  var lowerLetters = confirm("Would you like lower case letters in your password?");

  var upperLetters = confirm("Would you like upper case letters in your password?");
  
  var specCharacters = confirm("Would you like speacial characters in your paaword?");

  var passChoices = {
    passLength: passLength,
    numbers: numbers,
    lowerLetters: lowerLetters,
    upperLetters: upperLetters,
    specCharacters: specCharacters,
  };

  function randomCharacters(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  var endResult = [];
  var mostCharacters = [];

  

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

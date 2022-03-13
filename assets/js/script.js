// Assignment code here 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "p", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var specCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];

function passInfo() {
  
  var passLength = prompt("Choose a password length between 8 and 128 characters.");
  if (passLength < 8 || passLength > 128) {
    alert("Password length must be between 8 and 128 characters! Try again.");
    return null;
    
  }
  console.log(passLength)
  var numbers = confirm("Would you like numbers in you password?");

  var lowerLetters = confirm("Would you like lower case letters in your password?");

  var upperLetters = confirm("Would you like upper case letters in your password?");

  var specCharacters = confirm("Would you like speacial characters in your paaword?");
  if (numbers === false && lowerLetters === false && upperLetters === false && specCharacters === false) {
    alert("Must select at least one option. Try again.");
    return null;
  }
  
  var passChoices = {
    passLength: passLength,
    numbers: numbers,
    lowerLetters: lowerLetters,
    upperLetters: upperLetters,
    specCharacters: specCharacters,
  }
  return passChoices;

};

function randomCharacters(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var pullIndex = array[randomIndex];
  return pullIndex;
};

function generatePassword() {
  var pullInfo = passInfo()
  var endResult = [];
  var mostCharacters = [];
  

  

  if (pullInfo.numbers) {
    mostCharacters = mostCharacters.concat(numbers);
  }
  if (pullInfo.specCharacters) {
    mostCharacters = mostCharacters.concat(specCharacters);
  }

  if (pullInfo.lowerLetters) {
    mostCharacters = mostCharacters.concat(lowerLetters);
  }
  if (pullInfo.upperLetters) {
    mostCharacters = mostCharacters.concat(upperLetters);
  }

  for (var i = 0; i < pullInfo.passLength; i++) {
    var mostCharacter = randomCharacters(mostCharacters);
    endResult.push(mostCharacter);
  }

  
  return endResult.join("");
  
};

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

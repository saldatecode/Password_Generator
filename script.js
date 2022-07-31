var passwordLength = 8;

var characterBase = [];

var passwordLength = []
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCaseCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var numbersCaseCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = retrievePrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var generatedPassword = generatePassword();
    passwordText.value = generatedPassword;
  } else {
    passwordText.value = "";
  }

}

// Variables for generating password
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomizer = Math.floor(Math.random() * characterBase.length);
    password = password + characterBase[randomizer];
  }
  return password;
}

function retrievePrompts() {
  characterBase = [];

  passwordLength = parseInt(prompt("How long do you want you password?(between 8-128 characters"));
  console.log(passwordLength)

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number, between 8-128 charcters. Try again");
    return false;
  }
  var upperCase = confirm(" Do you want uppercase letter?")
  console.log(upperCase)
  if (upperCase) {
    characterBase = characterBase.concat(upperCaseCharacters);
  }

  var lowerCase = confirm(" Do you want to use lowercase letters?")
  console.log(lowerCase)
  if (lowerCase) {
    characterBase = characterBase.concat(lowerCaseCharacters);
  }
  var specialCharacters = confirm("Do you want to use any special characters?")
  console.log(specialCharacters)
  if (specialCharacters) {
    characterBase = characterBase.concat(specialCaseCharacters);
  }
  var numbersCharacters = confirm("Do you want to use numbers")
  console.log(numbersCharacters)
  if (numbersCharacters) {
    characterBase = characterBase.concat(numbersCaseCharacters);
  }

  return true;
}

